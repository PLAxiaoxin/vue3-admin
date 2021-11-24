import { ActionContext } from 'vuex';
import { GET_DATA } from './constant';
import { userState } from './store';
// import { Getters } from './getters';
export default {
  [GET_DATA]({ commit }: ActionContext<userState, unknown>):void {
    console.log('🌻action执行成功');
    // 📚异步数据
    setTimeout(() => {
      const payload: userState['tableData'] = [
        {
          date: '2016-05-02',
          name: '老袁',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
      ];
      commit(GET_DATA, payload);
    }, 3000);
  },
};
