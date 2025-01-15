// const Child2 = (props)=>{
    
//     return(
//         <>
//         <h1>From child 2 {props.fname}</h1>
        
//         </>
//     )
// }
// export default Child2
const Child2 = ({fname,lastname})=>{
    // let {fname,lastname}=props
        return(
            <>
            <h1>From child 2 {fname} {lastname}</h1>
            
            </>
        )
    }
    export default Child2

