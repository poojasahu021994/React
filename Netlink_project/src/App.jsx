import { useState , useEffect} from 'react'
import './App.css'
import axios from "axios"

const App=()=>{

  const[TaskData ,setTaskData] = useState([]);
  const [input ,setInput] = useState({
    Task:"",
    TaskType:"",
    status:"uncheck"
  })

  const handleInput=(e)=>{
      let value= e.target.value;
      let name= e.target.name;
      setInput(key=>({...key,[name]:value}));
      console.log(input);
  }

  const handleSubmit=()=>{
    const checkDuplicate = TaskData.some(key=>key.Task == input.Task)
    console.log(checkDuplicate)
    if(checkDuplicate){
      return alert("Task Already Added")
    }
    axios.post("http://localhost:3000/Task",input).then(
      ()=>{
        alert("Task Added")
        getTaskData()
        setInput({
          Task:"",
          TaskType:""
        })
      }
    )
  }

  const handleDelete=(ID)=>{
      axios.delete(`http://localhost:3000/Task/${ID}`).then(
        ()=>{
          alert("Task Deleted")
          getTaskData()
        }
      )
  }

  const  handelCheck=(prop)=>{
    const checkstatus = "check";
    axios.put(`http://localhost:3000/Task/${prop}`,{status:checkstatus})
  }

  const getTaskData=async()=>{
    const response = await axios.get("http://localhost:3000/Task");
    console.log(response.data);
    setTaskData(response.data)
  }

  useEffect(()=>{
    getTaskData()
  },[])

  // const [checktask ,setchecktaska] = useState(false);
  return(
    <>  <h3 style={{textAlign:"center",padding:"20px"}}>TO DO LIST</h3>
        <div style={{display:"flex" , flexDirection:"column",gap:"20px",width:"400px" , backgroundColor:"grey",padding:"40px",margin:"auto"}}>
          <div>
            <label htmlFor="TaskName">Task Name</label><br />
            <input type="text" id="TaskName"
            name="Task" 
            value={input.Task}
            style={{border:"1px solid grey",borderRadius:"7px",padding:"10px"}} 
            onChange={handleInput}
            placeholder="Enter task name here"/>
          </div>
          <div>
            <label htmlFor="TaskName">Task Name</label>
            <br />
            <select name="TaskType" id="" value={input.TaskType} onChange={handleInput} style={{padding:"5px"}}>
              <option >Options</option>
              <option  value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <button style={{width:"80px"}} onClick={handleSubmit}>Add Task</button>
        </div>


        <hr />

        <div style={{backgroundColor:"grey",padding:"20px",width:"600px",margin:"auto",color:"white",textAlign:"center"}}>
          <table style={{border:"1px solid black"}}>
            <thead>
                <tr>
                  <th>
                    Check Task
                  </th>
                  <th>
                    Task Name
                  </th>
                  <th>
                    Task Type
                  </th>
                  <th>
                    Delete
                  </th>
                </tr>
            </thead>
            <tbody>
                {TaskData.map((key)=>{
                  return(
                    <>
                      <tr >
                        <td>
                          <input type="checkbox" name="" id="" onClick={()=>{handelCheck(key.id)}} />
                        </td>
                        {key.status == "check" ?  <del><td>{key.Task}</td></del> :<td>{key.Task}</td> }
                        {/* <td>{key.Task}</td> */}
                        <td>{key.TaskType}</td>
                        <td>
                            <button onClick={()=>{handleDelete(key.id)}}>Delete</button>
                        </td>
                      </tr>
                    </>
                  )
                })}
            </tbody>
          </table>
            
        </div>
    
    </>
  )
}
 export default App