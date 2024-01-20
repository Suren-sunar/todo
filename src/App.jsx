import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [inp , setInput] = useState('')
  const [ todo, setTodo] = useState([])
  const [complete , setComplete] = useState([])


  const handleClick = () =>{

    setTodo([...todo , inp])
    setInput('')
  }
const handleDone=(index)=>{
  const updateTodo = ([...todo])
  setTodo(updateTodo)

  const CompleteTask = updateTodo.splice(index, 1)
  setComplete([...complete, CompleteTask])

}

const clear =(index)=>{
const updateComplete=([...complete]) 
updateComplete.splice(index,1)
setComplete(updateComplete)


}
  return<>

  <h1>Welcome to TODO App</h1>
  
<input type="text" value={inp} onChange={({target}) => setInput(target.value)} />
<button onClick={handleClick}>Add Task</button>



<h2>To do tasks</h2>
{todo.length? <ul>
  {todo.map((task, i ) => <li key={i}>{task} 
  <button onClick={handleDone}>Done</button></li>)}
</ul> : <h4>No task added</h4>}

<h1>Complete task</h1>
{complete.length? <ul>
  {complete.map((task, i ) => <li key={i}>{task} 
 <button onClick={clear}>remove</button></li>)}
</ul> : <h4>No task added</h4>}

  </>

}
export default App
