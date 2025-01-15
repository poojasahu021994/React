import { Link,Outlet } from 'react-router-dom'
const Layout=()=>{
    return(
        <>
        
       
           
           <Link to="/show"><button>Show</button></Link>
           <Link to="/"><button>Content</button></Link>
            
        <main>
            <Outlet/>
        </main>
        
        </>
        
    )

}
export default Layout
