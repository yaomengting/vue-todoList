const app = Vue.createApp({
  data(){
    return {
      todos: [
        {id: 1, title: "Learn Vue"},
        {id: 2, title: "Learn React"},
      ]
    }
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter(todo=> todo.id !== id)
    }
  }
})