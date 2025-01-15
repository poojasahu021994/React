import React from "react"
import { useNavigate, useParams } from "react-router-dom"

const About =()=>{
    let {name,age}=useParams()
    console.log(name,age)
    let nav=useNavigate()
    function conctactpage(){
        nav('/contact')
    }
    return (
        <div>
            <h1>my name is{name} and age {age}</h1>
            <button onClick={conctactpage}>Contact us</button>
        </div>
    )
}
export default About