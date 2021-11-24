import { createStore } from 'vuex';
import { modules } from './modules';
import { userState } from './modules/user/store';
import { wechatState } from './modules/wechat/store';

export interface State {
  wechat: wechatState;
  user: userState;
}

export default createStore<State>({
  modules,
});
export { modules };
