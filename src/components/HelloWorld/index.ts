import { computed, defineComponent } from 'vue';
import { useYdStore } from '../../hooks';

interface Post {
  count: number;
}
// type log = `${keyof Post}`;
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(): Post {
    return {
      count: 0,
    };
  },
  setup(props) {
    console.log(props);
    const { state, getters, dispatch } = useYdStore();
    // const editTodo = (todo, value) =>
    //   store.dispatch("editTodo", { todo, value });
    console.log('🐩', getters['wechat/showArticle']);
    const a = getters['wechat/showArticle'];
    const setData = () => dispatch('wechat/setData');
    return {
      article: computed(() => state.wechat.article),
      setData,
    };
  },
});
