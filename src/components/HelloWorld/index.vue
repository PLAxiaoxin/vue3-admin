<!--
 * @Author: your name
 * @Date: 2020-10-12 19:33:06
 * @LastEditTime: 2020-11-21 16:15:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /yd-vue3-admin/src/components/HelloWorld/index.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <h4>🐻Vuex状态管理</h4>
    <p>
      <code>{{ article }}</code>
      <button @click="setData">修改状态</button>
    </p>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="postcss" scoped>
h1 {
  --helloColor: orange;
  color: var(--helloColor);
}
p {
  & code {
    color: green;
  }
}
</style>
