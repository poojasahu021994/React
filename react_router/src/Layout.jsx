// import React from 'react'
    import { Link,Outlet } from 'react-router-dom'



const Layout=()=>{
    return(
        <>
        <header>
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/content">Content</Link></li>
                    <li><Link to="/service">Service</Link></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <h1>Footer</h1>
        </footer>
        </>
    )
}
export default Layout