import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";

function App() {
const [item, setItem] = useState({
  ToDo_Item:"",
  task_taye:"",
  Status:"uncheck"
})
const [task,settask] = useState([

])
const hendelSubmit =(e)=>{
     let name=e.target.name
     let value=e.target.value
     setItem(vel=>({...vel,[name]:value}))
     console.log(item)
}
const finalsubmit=()=>{
  axios.post("http://localhost:3000/Task",item).then(()=>{
  alert("add item")
  setItem(
    {
  ToDo_Item:"",
  task_taye:""
}
  )
  })

}
const getData = async ()=>{
const TodoData= await axios.get("http://localhost:3000/Task")
// console.log(TodoData.data)
settask(TodoData.data)
console.log(task)
}

// Delete function
const deleteItem=(id)=>{
  axios.delete(`http://localhost:3000/Task/${id}`).then(()=>{
    alert("data deleted")
    getData()
  })
}
 

// edit data function
const editdata=()=>{

}
// check status
const handelCheck=(id)=>{
  console.log(id)
  const checkData= task.find(key=>key.id==id)
  console.log(checkData)
  const changeStatus=checkData.Status==="uncheck" ? "check": "uncheck"
  axios.patch(`http://localhost:3000/Task/${id}`,{Status:changeStatus}).then(()=>{
    getData()
  })
}

const ans = task.map((key)=>{
  return(
    <>
  <tr>
    <td><input type="checkbox" onChange={()=>{handelCheck(key.id)}}/></td>
    <td style={{textDecoration:key.Status=="check" ? "line-through":"none"}}>{key.ToDo_Item}</td>
    <td style={{textDecoration:key.Status=="check" ? "line-through":"none"}}>{key.task_taye}</td>
    <td><FaUserEdit onClick={()=>editdata(key.id)} /></td>
    <td><HiArchiveBoxXMark id='delete_icon' onClick={()=>deleteItem(key.id)} /></td>
    
  </tr>
   </>

  )
})
useEffect(() => {
  getData()
}, [])

  return (
    <>
    <div id='container'>
      <h1 style={{textAlign:'center'}}>ToDo list</h1>
    {/* <label htmlFor="ToDo Item">ToDo Item</label> */}
      <input type="text" name="ToDo_Item" value={item.ToDo_Item} onChange={hendelSubmit} />
      <select name="task_taye" id="" value={item.task_taye} onChange={hendelSubmit}>
        {/* <option disabled> default</option> */}
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button onClick={finalsubmit}>Add</button>
<br />
<br />
      <table border="">
        <thead>
          <tr>
            <th>Check box</th>
            <th>ToDo Name</th>
            <th>Types</th>
            <th>Edit</th>
            <th>Dalete</th>
          </tr>
        </thead>
         <tbody>
          {ans}
         </tbody>
      </table>
      </div>
    </>
  )
}

export default App
