import React from 'react';
import "../styles/header.css";

function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
      <span className='headerTitlesSm'> React & Node</span>
      <span className='headerTitleLg'>BLOG</span>
      </div>
     <img className='headerImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQP-93w6mNjvXcteMrLsaWOyr47edMuYT3w&usqp=CAU' alt=''/>
     </div>
  )
}

export default Header;
