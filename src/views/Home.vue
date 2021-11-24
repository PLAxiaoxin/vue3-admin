<!--
 * @Author: your name
 * @Date: 2020-10-12 19:31:12
 * @LastEditTime: 2020-11-21 15:29:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yd-vue3-admin/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo"
      src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld/index.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
