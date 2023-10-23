import  React  from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.style.css'



function Header(){
    return(
        <>
            <div>
                <ul className='navbar flex'>
                    <li className='link'><Link to={""}>BOOKS CENTER</Link></li>
                    <li className='link'><Link to={"/books"}>LIBROS</Link></li>
                    <li className='link'><Link to={"/library"}>MI BIBLIOTECA</Link></li>  
                    <li className='link user'>
                        <Link to={"/login"}><box-icon name='user-circle'color='#ffffff' ></box-icon></Link>
                    </li>
                </ul>
            </div>     
            <Outlet/>    
        </>
    )
}

export default Header