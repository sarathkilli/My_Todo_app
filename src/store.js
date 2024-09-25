import { createStore } from "redux";
const initialState={
    todos:[],
    GenId:1
}
const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD-TODO":
            const newtodo={id:state.GenId,title:action.payload.title}
            return {...state,todos:[...state.todos,newtodo],GenId:state.GenId+1}
        case "DELETE-TODO":
            return {...state,todos:state.todos.filter(
                (todo)=>todo.id!==action.payload.id
            )}
        case "UPDATE-TODO":
            return {...state,todos:state.todos.map(
                (todo)=>{
                    return todo.id===action.payload.id?{...todo,title:action.payload.title}:todo
                }
            )
            }
        default:
            return state
    }
}
const store=createStore(todoReducer);
export default store;