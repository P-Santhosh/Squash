import React from 'react';
import { Link } from 'react-router-dom';



const Header =() => {

  
    return (
      <>
      <div>
        <header>
      <nav
        className="flex justify-between items-center h-24 bg-white  font-semibold relative shadow-lg lg:pl-24 lg:pr-24  text-lg sticky"
        role="navigation"
      >
        <Link to="/" className="pl-8  ">
          <img
            alt="..."
            className="align-middle border-none max-w-full h-auto rounded-lg"
            src="/img/logos.png"
          />
        </Link>
       
        <div className="pr-8 md:block  hidden " >
          <Link to="/home" className="p-4 text-blue-900 hover:text-red-600 Link ">
          Home 
          </Link>
          <Link to="/create" className="p-4 text-blue-900 hover:text-red-600 Link">
          Create
          </Link>
          <Link to="/view" className="p-4   text-blue-900 hover:text-red-600  Link" >
            Read
          </Link>
          <Link to="/update" className="p-4 text-blue-900 hover:text-red-600  Link ">
          Update
          </Link>
          <Link to="/delete" className="p-4 text-blue-900 hover:text-red-600 Link">
          Delete
          </Link>
          <Link to="/" className="p-4 text-blue-900 hover:text-red-600  Link ">
          Logout
          </Link>
         
        </div>
      </nav>
      </header>
      </div>
       {/* <header className="row block center logo logos">
            <img
          src={
            "/img/logo.png"
          }
          alt="Logo"
        />
      
            <div>
               <h1>Karur Gold Finance</h1>
            </div>
            <div>
              <Link to="/home">Home </Link>
                
                <Link to='/create' >Create</Link>
                <Link to='/view'>Read</Link>
                <Link to='/update'>Update</Link>
                 <Link to='/delete'>Delete</Link>
                 <Link to='/create'>Sign In</Link>
                 <Link to='/login'>Login In</Link>
                 <Link to='/logout'>Logout</Link>
            </div>
           
        </header>*/}
        </>
    );
};

export default Header;