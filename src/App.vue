<template>
  <div id="app">
    <header-nav></header-nav>
    <MainPage></MainPage>
  </div>
</template>

<script>
import HeaderNav from './views/headernav'
import MainPage from './views/mainpage'


export default {
  name: 'app',
  components: {
    HeaderNav,
    MainPage
  }
}
</script>

<style>
body{
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  background-color: #f8f9fa;
}
div,h1,h2,h3,h4,h5,h6,ul,li,p{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
