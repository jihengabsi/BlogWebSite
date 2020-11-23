import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment >
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div className="footer">
<a>Copyright © CK Tecnologies 2020</a>


    </div>
      </React.Fragment>
    
   )

 }

export default Layout