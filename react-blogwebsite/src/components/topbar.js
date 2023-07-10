import React from 'react';
import{FaLinkedin, FaFacebook, FaInstagram, FaSearch} from "react-icons/fa";
 import { Link } from "react-router-dom";
 import "../styles/topbar.css";

function Topbar() {
    const user = true;
  return (
    <div className='top'>
        <div className='topLeft'>
         <div className='topIcon'>
        <FaLinkedin />
        <FaFacebook />
        <FaInstagram />
        <FaSearch />
    </div>
    </div>
    <div ClassName='topCenter'>
        <ul className='topList'>
            <li className='topListItem'><Link to="/"> HOME </Link></li>
            <li className='topListItem'><Link> ABOUT </Link></li>
            <li className='topListItem'><Link> CONTACT </Link></li>
            <li className='topListItem'><Link>WRITE</Link></li>
            {user && <li className='topListItem'><Link>LOGOUT</Link></li>}
        </ul>
        </div>
        <div className='topRight'>
            {user ? (
                <Link to ="/settings">
                    <img className="topImg" src ="https://tse4.mm.bing.net/th?id=OIP.r7Lk7vqCFq9hdCe1dathYAHaHa&pid=Api&P=0&h=180" alt ='' />
                </Link>

            ):(
<ul className='topList'>
    <li className='topListItem'>
        <Link>LOGIN</Link>
    </li>
    <li className='topListItem'>
        <Link>REGISTER</Link>
    </li>
</ul>
            )}
            <FaSearch />
        </div>
        /</div>
  )
}

export default Topbar;


