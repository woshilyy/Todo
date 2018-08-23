<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Footer></Footer>
    <todo></todo>
  </div>
</template>

<script>
import Header from "./components/header"
import Footer from "./components/footer"
import todo from "./components/todo"
console.log("输入接下来要做的事情之后，左边是一个复选框(但是不太明显)，点击复选框代表此事已完成；右边是hover的关闭符号，点击即删除，也可以点击右下角的一键清除，不过一键清除仅删除已标记完成的事项");
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Header,
    Footer,
    todo
  }
}
</script>

<style lang="scss" scoped>
//  @import '~@/assets/styles/global.scss';
 @import './assets/styles/global.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // margin-top: 60px; 
}
#cover{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #555;
  z-index: -1;
  opacity: .5;
}
</style>
