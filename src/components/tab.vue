<!--  -->
<template>
  <div class="helper">
      <span class="left"><span class="mark">{{unFinishedTodoLength}}</span>条待办事项</span>
      <span class="tabs">
          <span 
          v-for="state in states"
          :key="state"
          :class="[state, filter === state ? 'actived' : '']"
          @click="toggleFilter(state)"
          >{{state}}</span>
      </span>
      <span class="clear" @click="clearAllcompleted()"> 一键清除已完成事项</span>
  </div>
</template>

<script>
export default {
    props:{
        filter:{
            type:String,
            required:true
        },
        todos:{
            type:Array,
            required:true
        }
    },
  data () {
    return {
        states:["所有事项","未完成事项","已完成事项"]
    };
  },
  methods:{
      toggleFilter(state){
          this.$emit("toggle",state)
      },
      clearAllcompleted(){
          this.$emit("clearAllcompleted")
      }
  },
  computed:{
      unFinishedTodoLength(){
          return this.todos.filter(todo=>!todo.completed).length;
      }
  }
}

</script>
<style lang='scss' scoped>
.helper{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    span{
        font-size: 14px;
        color: 3666;
        line-height: 1.5;
        padding: 10px;
        cursor: pointer;
        border:1px solid rgba(175, 47, 47, 0);
         &.actived {
                border-color:rgba(175, 47, 47, 0.4);
                border-radius:5px;
            }
    }
    .mark{
        color: #f60;
        padding: 0;
        font-weight: bold;
    }
    .clear{
        color: #f60;
    }
}
</style>