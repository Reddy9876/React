import React from 'react';
import { Link }  from "react-router-dom";
import{FaLinkedin, FaFacebook, FaInstagram, FaTwitter, } from "react-icons/fa";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg' alt=''/>
            <p> Around 3 years of experience as a Data analyst, Report Development, and writing SQL scripts. Expert in gathering 
requirements, collecting data, design/developing Power BI, and Tableau Reports for decision-making. Approach all 
projects with a winning attitude and passion for providing high-quality products</p>

<div className='sidebarItem'>
    <span className='sidebarTitle'>CATEGORIES</span>
    <ul className='sidebarList'>
        <li className='sidebarListItem'><Link>Life</Link></li>
        <li className='sidebarListItem'><Link>Music</Link></li>
        <li className='sidebarListItem'><Link>Sports</Link></li>
        <li className='sidebarListItem'><Link>Style</Link></li>
        <li className='sidebarListItem'><Link>Tech</Link></li>
        <li className='sidebarListItem'><Link>Cinema</Link></li>
    </ul>
</div>
<div className='sidebarItem'>
    <span className='sidebarTitle'> FOLLOW ME</span>
    <div className='sidebarSocial'>


            <FaLinkedin/>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            </div>
</div>
        </div>
        </div>

  )
}

export default Sidebar;
