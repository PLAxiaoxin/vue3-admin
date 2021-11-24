import { userState } from './store';

const moduleGetters = {
  isLogin: (state: userState):string => {
    console.log('额外的Getters', state);
    return `🏮${state.loading}`;
  },
};

// type userGetters = ReturnGetters<typeof moduleGetters>;
// type userGetters = typeof moduleGetters;
export { moduleGetters };
export default moduleGetters;
