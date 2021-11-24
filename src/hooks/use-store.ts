/*
 * @Author: your name
 * @Date: 2020-11-21 15:04:58
 * @LastEditTime: 2021-11-24 22:20:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-ssr/Users/pla/Desktop/Vue/yd-vue3-admin/src/hooks/use-store.ts
 */
import { useStore } from 'vuex';
import { State } from '@/store';
import { Getters, Dispatch } from '@/store/utils';

interface UseYdStore{
  state: State;
  getters: Getters;
  dispatch: Dispatch;
}

const useYdStore = ():UseYdStore => {
  const store = useStore<State>();
  // 自定义的进行输出结果
  const {
    state,
    getters,
    dispatch,
  }:UseYdStore = store;
  return {
    state,
    getters,
    dispatch,
  };
};
export {
  useYdStore,
};
export default useYdStore;
