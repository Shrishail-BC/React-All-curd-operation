import react, { useState, useEffect }  from 'react';
import { Card, Container } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import * as yup from 'yup'; 
import { Formik,Form,Field,ErrorMessage } from 'formik';
import axios from 'axios';
import {toast,ToastContainer} from "react-toastify";

const api=" http://localhost:5000/users";

const formIntialvalue={
    email:'',
    password:'' 
}

function Login(){  

let formValidationschema = yup.object().shape({
    email: yup.string().email().required('Email is requred').email("please enter valied email"),
    password: yup.string().min(4).max(10).required('pasword is requred')
  });

  const[state, setState]=useState(formIntialvalue)
  const [data,setData]=useState([]);
  const history=useHistory();

  const handellogin=(value)=>{
    
    fetch(api).then((data)=>{
         data.json().then((res)=>{
    
           const em=res.filter((x)=>x.email==value.email).map((x)=>x.email)
      
           const paa=res.filter((x)=>x.password==value.password).map((x)=>x.password)
     
                if(em==value.email && paa==value.password)
                {
                    //  toast.success("Login Successfully");
                    history.push("/ProductList");
                }else{
                    alert("please cheack email and password");
                }
        });
    });
};
    return(
        <Container>
         
           <Card bg="transparent " className=' mt-5 text-dark border border-light bor '>
             <Formik initialValues={formIntialvalue} 
             validationSchema={formValidationschema}
             onSubmit={handellogin}>
             <Form>
                <div className="form-group row mb-3 text-center ">
                            <h2 className="p-4"> Login Page</h2>
                            </div>
                            <div className="col-sm-5 mx-auto ">
                            <label className="col-sm-5 col-form-label ">Email</label>
                                <Field type="email" name="email" className="form-control"  placeholder="Enter email" />
                                <p className='text-danger'>
                                <ErrorMessage name="email" />
                                </p>
                            </div>
                        
                        <div className="form-group row mb-3 ">
                            <div className="col-sm-5 mx-auto ">
                            <label className="col-sm-5 col-form-label">Password</label>
                                <Field type="password" name="password" className="form-control "  placeholder="Enter Password" />
                                <p className='text-danger'>
                                <ErrorMessage name="password" />
                                </p>
                            </div>
                        </div >
                        <div className="text-center">     
                        <button type="submit" className="btt btn btn-primary "> Login </button>
                        </div>
                        </Form>
                    </Formik>
                        
                        <div className="text-center m-2">
                            <p>Create new account ?
                        <Link to="/register" className="mx-3">
                             Singup
                        </Link>
                        </p>
                        </div>
                        </Card>  
                 </Container>
    );
}

export default Login;