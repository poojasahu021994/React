import { useRef } from "react"


function App() {
  let refel=useRef("")
  console.log(refel);

  function change(f){
    if(f){
      refel.current.innerHTML="Hello everyone"
      refel.current.style.backgroundColor="red"
      refel.current.style.color="green"
      refel.current.style.fontSize="100px"
    }
    
    else{
      refel.current.innerHTML=""
    }
  }
  function change1(){
    refel.current.innerHTML="Hello everyone"
    refel.current.style.backgroundColor="red"
    refel.current.style.color="green"
    refel.current.style.fontSize="100px"
    refel.current.style.padding="100px"
  }
  function change2(){
    refel.current.innerHTML="Hello everyone"
    refel.current.style.backgroundColor="yellow"
    refel.current.style.color="blue"
    refel.current.style.fontSize="100px"
    refel.current.style.padding="100px"
  }
  return (
    <>
     <h1 ref={refel}>This is react js class</h1>
     <button onClick={()=>change(!refel)}> Click</button>
     <div ref={refel} onMouseLeave={change1} onMouseEnter={change2}><h1>Welcome</h1>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas at ex dolores, eligendi ullam soluta odit, dolore molestiae quis cum earum pariatur qui nihil obcaecati dicta hic accusamus assumenda doloremque?
     </div>
     
    </>
  )
}

export default App
