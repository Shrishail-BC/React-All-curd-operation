import react from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetal= (props)=>{
    console.log(props);
    const {id,product_Name,prize}=props.location.state.product;
  
    return(
        <div className="form-group row mb-3 text-center">
            <h1 className="m-4 p-3"> product Detales</h1>
            <div>
                <h4 className="p-3">product name:  {product_Name}</h4>
            </div>
            <div className="p-3">
                <h4>product prize:  {prize}</h4>
            </div>
            <div>
                <Link to={{pathname:`/edit`,state:{product:props.product}}}>
                <button className="btn btn-secondary m-2 col-sm-2 m-1" > Edit</button>
                </Link>
            </div>
            <div>
                <Link to="/">
                <button className="btn btn-primary m-2 col-sm-5 m-2" > Back to product List </button>
                </Link>
            </div>
        </div>
    );    
}
export default ProductDetal;