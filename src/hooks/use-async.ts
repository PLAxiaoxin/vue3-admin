import { ref, onMounted } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useAsync = (func: () => Promise<unknown>) => {
  const loading = ref(false);

  onMounted(async () => {
    try {
      loading.value = true;
      await func();
    // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  });

  return loading;
};
