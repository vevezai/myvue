<template>
  <div>
    <p>这是我第一个单文件组件{{msg}}</p>
    <router-link to='/index'>首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>
// scoped 指定当前样式的范围：当 style 添加了scoped 那么说明这个样式只有当前组件能用
<style scoped>
#app {
  color: red;
}
</style>
