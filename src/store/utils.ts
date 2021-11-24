/* 拿到store的modules */
import { modules } from './modules';

/* 获取到 getters 结构类型 */
// 匹配到 单个module 下的 getter
type GetGetter<Moudle> = Moudle extends {getters:infer G} ? G : unknown;
// 获取vuex 所有的getter模块
type GetGetters<Modules> = {
  [K in keyof Modules]:GetGetter<Modules[K]>
}
type ModuleGettes = GetGetters<typeof modules>;

/* 获取到action 结构类型 */
// 匹配到 单个module 下的 action
type GetAction<Moudle> = Moudle extends {actions:infer A} ? A : unknown;
// 获取vuex 所有的action模块
type GetActions<Modules> = {
  [K in keyof Modules]:GetAction<Modules[K]>
}
type ModuleActions = GetActions<typeof modules>;

/* Getter/Dispatch智能提示处理 */
// 由于传入的是 keyof 有可能是symbol | number,所以 Prefix & string 取其中的string
// typescript 4.1 新增加的语法  vuex xxx/xxx 终于可以有提示了   模板字符串语法 和 ES6字符串模板 是一样的
type AddPrefix<Prefix, Keys> = `${Prefix & string}/${Keys & string}`
type GetSpliceKey<Module, Key> = AddPrefix<Key, keyof Module>
type GetSpliceKeys<Modules> = {
  [K in keyof Modules]: GetSpliceKey<Modules[K], K>
}[keyof Modules]
type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]];
type GetSpliceObj<T> = {
  // K extends `${infer A}/${infer B}`  类似于正则匹配，   相当于  user/getData  A 匹配到user B匹配到getData
  [K in GetSpliceKeys<T>]:K extends `${infer A}/${infer B}` ? GetFunc<T, A, B> : unknown
}

/* Getters/Actons 拼接好 xxx/xxx 的格式  */
type MoudlesGetters = GetSpliceObj<ModuleGettes>;
type MoudlesActions = GetSpliceObj<ModuleActions>;

/* 设置最终的提示  dispatch('user/getData') getter. 有提示 */
type Getters = {
  [K in keyof MoudlesGetters]:ReturnType<MoudlesGetters[K]>
}
interface GetDispatch<T> {
  // 可选参数类型，会自动加上undefined
  <K extends keyof T>(action: K): Promise<unknown>;
}
type Dispatch = GetDispatch<MoudlesActions>;

export {
  Getters, Dispatch,
};

export default Getters;
