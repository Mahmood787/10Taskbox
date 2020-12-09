import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../lib/redux'

const AddTask = () => {
    const dispatch = useDispatch()
    const [title, setTitle]= useState('')
    const handleSub =()=>{
        if(title !==""){
            dispatch(addTask({title}))
            setTitle("")
        }
    }
    return (
        <div className="addTask">
            <h3>Add Task</h3>
            <div className="inputAddTask">
                <input type="text" value={title} onChange={(e)=>{
                    setTitle(e.target.value)
                }}></input>
            </div>
            <button onClick={handleSub}>Submit</button>

        </div>
    )
}

export default AddTask
