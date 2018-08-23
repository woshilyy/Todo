<!--  -->
<template>
  <div class="todo">
      <input
      type="text"
      placeholder="接下来要做什么呢..."
      autofocus="autofocus"
      @keyup.enter="addTodo"
      class="todoEnter"
      >
      <Item
      :todo="todo"
      v-for="todo in filteredTodos"
       :key="todo.id"
        @del="deleteTodo"
      ></Item>
      <tab
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllcompleted="clearAllcompleted"
      ></tab>
  </div>
</template>


<script>
import Store from "../store"
console.log(Store);
import Item from "./item"
import tab from "./tab"
let id=0
export default {
  data () {
    return {
      todos:Store.fetch(),
      filter:"所有事项"
    };
  },
  components:{
    Item,
    tab
  },
  methods:{
    addTodo(event){
       if (event.target.value.trim()) {
                    this.todos.unshift({
                        id: id++,
                        content: event.target.value.trim(),
                        completed: false
                    });
                    event.target.value = '';
                } else {
                    alert('输入不能为空 !');
                }
            },
    deleteTodo(id) {
                this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
            },
    toggleFilter(state){
      this.filter=state
    },
    clearAllcompleted(){
      this.todos=this.todos.filter(todo=> !todo.completed);
    }
  },computed:{
    filteredTodos() {
                if (this.filter === '所有事项') {
                    return this.todos;
                }
                const completed = this.filter === '已完成事项';
                return this.todos.filter(todo => completed === todo.completed);

            }
  },
  watch: {
    todos:{
      handler(todos){
        Store.save(todos);
      },
      deep:true
    }
  }
}

</script>
<style lang='scss' scoped>
.todo{
    width:90vw;
    margin:0 auto;
    box-shadow:0 0 5px #666;
    .todoEnter{
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 20px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.8;
        border: 0;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
}
</style>