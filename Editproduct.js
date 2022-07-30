import react from "react"; 
import { Card, Container } from "react-bootstrap";
import Header from './Header'

class Editproduct extends react.Component {
    constructor(props){
        super(props);
        const{id,product_Name,prize}=props.location.state.product;
        this.state={
            id,
            product_Name,
            prize,
        };
    }

   update = (e) => {
        e.preventDefault();
        if (this.state.product_Name === "" && this.state.prize === "") {
            alert("all field are mandatory!");
            return;
        };
        this.props. updateproductHandler(this.state);
        this.setState({ product_Name: "", prize: "" });
        this.props.history.push("/ProductList");
    };   
         
  
    render() {
        return (
                <Container>
                     <Header />
                     <Card bg="transparent " className=' mt-5 text-dark border border-light bor '>
                <form onSubmit={this.update}>
                        <div className="form-group row mb-3 text-center">
                            <h2 className="p-4"> Edit products</h2>
                            <label className="col-sm-2 col-form-label mx-5">New Name</label>
                            <div className="col-sm-5">
                                <input className="form-control"  value={this.state.product_Name} placeholder="Enter new name" 
                                onChange={(e) => this.setState({ product_Name: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row mb-3 text-center">
                            <label className="col-sm-2 col-form-label mx-5">New Prize</label>
                            <div className="col-sm-5">
                                <input type="text" className="form-control" value={this.state.prize} placeholder="Enter new prize"
                                 onChange={(e) => this.setState({ prize: e.target.value })}/>
                            </div>
                        </div>
                            <button type="submit" className=" btt btn btn-primary m-5"> update </button>
                 </form>
                 </Card>
                 </Container>
        );
    }
    
}

export default Editproduct;