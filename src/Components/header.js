import React from 'react';
import {Route} from 'react-router-dom';
const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
           
         <div className="container-fluid">
            <a className="navbar-brand" href="#">SocialApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">MyPosts</a>
               </li> 
               {/* <li className="nav-item">
                 <button type='button' class="btn btn" color='white'  data-bs-toggle="modal" data-bs-target="#exampleModal">Create Post</button >
               </li>  */}
             </ul>
                <div className="d-flex justify-content-end">
                   <ul className="navbar-nav">
                   <li className="nav-item"><a href="#" className="nav-link" color="white">Log out</a></li>
                   </ul>
                  <a href="#"><i className="fas fa-user-circle fa-2x" style={{color:'white'}} data-bs-toggle="tooltip" data-bs-placement="bottom"  title="my account"></i></a>
                </div>
            </div>
         </div>
       </nav>
    );
}


export default Header;