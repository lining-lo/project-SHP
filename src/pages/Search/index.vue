<template>
    <div>
      我是search路由
      <h1>param参数keyword：{{ $route.params.keyword }}</h1>
      <h1>query参数k：{{ $route.query.k }}</h1>
    </div>
  </template>
  
  <script>
      export default {
          name:'Search'
      }
  </script>
  
  <style lang='less' scoped>
  
  </style>