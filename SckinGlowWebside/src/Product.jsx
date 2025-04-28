// import axios from "axios";
// import Addtocart from "./Addtocart";
// import { useState } from "react";

// const Product=()=>{
//     let [api , setApi]=useState([]);
//     useEffect(()=>{
//         axios.get("http://localhost:3000/item")
//         .then((res)=>{
//             setApi(res.data)
//         })
//     },[])

//     return(
//         <>
//         {
//         api.map((e, index)=>{
//             return(
//                 <div className="item-div">
//                     <div>{e.name}</div>
//                     <div>{e.price}</div>
//                     <div>{e.status}</div>
//                 </div>
//             )
//         })
//     }
//         </>
//     )
// }
// export default Product