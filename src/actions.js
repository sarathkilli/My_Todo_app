export function addtodo(todo){
    return {type:"ADD-TODO",payload:todo}
}
export function deletetodo(id){
    return {type:"DELETE-TODO",payload:id}
}
export function updatetodo(todo){
    return {type:"UPDATE-TODO",payload:todo}
}