import react from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header =()=>{
    return(
       <>
        <div className="d-flex mt-5 text-dark border border-light bor">
          <h1  className="col-10 text-center">Product Manager</h1>
       
          <Link to="/">
            <button className="  p-2 m-2 btt btn btn-primary " >Log out</button>
            </Link>
          </div> 
          <hr/>
          </>
         
    );
}
export default Header;