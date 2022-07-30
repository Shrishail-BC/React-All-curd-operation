import react from "react"; 
import { Card, Container } from "react-bootstrap";
import Header from './Header'

class Product extends react.Component {
    state = {
        product_Name: "",
        prize: "",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.product_Name === "" && this.state.prize === "") {
            alert("all field are mandatory!");
            return;
        };
        this.props. addproductHandler(this.state);
        this.setState({ product_Name: "", prize: "" });
        this.props.history.push("/ProductList");
    };   
         
  
    render() {
        return ( 
               
                <Container>
                    <Header />
                    <Card bg="transparent " className=' mt-5 text-dark border border-light bor '>
                <form onSubmit={this.add}>
                        <div className="form-group row mb-3 text-center">
                            <h2 className="p-4"> Add products</h2>
                            <label className="col-sm-2 col-form-label mx-5 ">ProductName</label>
                            <div className="col-sm-5">
                                <input className="form-control"  value={this.state.product_Name} placeholder="Enter product name" onChange={(e) => this.setState({ product_Name: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row mb-3 text-center">
                            <label className="col-sm-2 col-form-label mx-5">Prize</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" value={this.state.prize} placeholder="Enter prize" onChange={(e) => this.setState({ prize: e.target.value })}/>
                            </div>
                        </div >
                            <button type="submit" className="btt btn btn-primary m-5 "> Add </button>
                 </form>
                 </Card>
                 </Container>
           
        );
    }
    
}

export default Product;