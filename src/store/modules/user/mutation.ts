import { GET_DATA, DONE } from './constant';
import { userState } from './store';

const mutations = {
  [GET_DATA](state: userState, payload: userState['tableData']):void {
    console.log('📚数据请求', payload);
    state.tableData = payload;
    state.loading = false;
  },
  [DONE](state:userState, payload:string):void {
    console.log('ceshi', state.loading, payload);
  },
};
export default mutations;
export { mutations };
