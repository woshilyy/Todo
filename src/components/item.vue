<!--  -->
<template>
  <div :class="['todoitem',todo.completed?'completed':'']">
      <input
      type="checkbox"
      class="toggle"
      id="myCheck"
      v-model="todo.completed"
      >
      <label>{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
    props:{
        todo:{
            type:Object,
            required:true
        }
    },
  methods:{
      deleteTodo(){
          this.$emit("del",this.todo.id)
      }
  }
}
</script>
<style lang='scss' scoped>
.todoitem{
position: relative;
font-size: 24px;
color:#666;
border-bottom: 1px solid #ccc;
background-color: #fff;

&:hover{
    .destroy::after{
        content:"x"
    }
}

.toggle{
     text-align: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto 0;
        border: none;
        appearance: none;
        outline:none;
        padding-left:5px;
        cursor:pointer;
    &:after{
            content: url('../assets/images/round.svg')
        }
        &:checked:after{
            content: url('../assets/images/done.svg')
        }
}
.destroy{
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        transition: color 0.2s ease-out;
        background-color:transparent;
        appearance:none;
        border-width:0;
        cursor :pointer;
        outline:none;
    }
}
label{
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.5;
    transition: color 0.4s;
    height: 35px;
}
.completed label{
    color: #ccc;
        text-decoration: line-through #f60;
    }
</style>