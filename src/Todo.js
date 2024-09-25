import React, { useState } from 'react'
import { updatetodo,deletetodo } from './actions'
import { useDispatch } from 'react-redux'
const Todo = ({id,title}) => {
    const [Edit,setEdit]=useState(false)
    const [newtitle,setnewtitle]=useState(title)
    const dispatch=useDispatch()
    const handletodo=()=>{
        if(newtitle.trim()){
            dispatch(updatetodo({id:id,title:newtitle}))
            setEdit(false)
        }
    }
    const handledelete=()=>{
        dispatch(deletetodo({id:id}))
    }
  return (
    <div>
        {
            Edit?(<div className='form-group'>
                    <input className='inp' type='text' value={newtitle} onChange={e=>setnewtitle(e.target.value)}></input>
                    <button className='btn' onClick={handletodo}>Save</button>
            </div>):
            (
                <li className='list'>
                    <p>{title}</p>
                    <div className='action'>
                        <button className='btn' onClick={()=>setEdit(true)}>Edit</button>
                        <button className='btn' onClick={handledelete}>Delete</button>
                    </div>
                </li>
            )
        }
    </div>
  )
}

export default Todo