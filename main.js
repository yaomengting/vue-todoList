const app = Vue.createApp({
  data(){
    return {
      todos: [
      ],
      description: ""
    }
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter(todo=> todo.id !== id)
    },
    onSubmit(){
      if(this.description === ''){
        alert("Pleases enter valid content")
      }
      let newTodo = {
        id: Date.now(),
        title: this.description,
        isDone: false,
      };
      this.todos.push(newTodo)
      this.description = ''
    },
    toggleTodo(id){
      this.todos = this.todos.map(todo => {
        if(todo.id === id){
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
      
    }
  }
})