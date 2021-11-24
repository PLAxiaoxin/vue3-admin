import { wechatState } from './store';

const moduleGetters = {
  showArticle: (state: wechatState):string => {
    console.log('题库额外的Getters', state);
    return `🏮${state.article}`;
  },
};
// type wechatGetters = ReturnGetters<typeof moduleGetters>;
// type wechatGetters = typeof moduleGetters;
export { moduleGetters };
export default moduleGetters;
