import react, { useState, useEffect } from 'react';
import { Card, Container } from "react-bootstrap";
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {toast,ToastContainer} from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const api=" http://localhost:5000/users";

  function Registerpage (){

    const initialState={
      username:"",
      email:"",
      password:"",
      confirmpassword:""
    };
    
    let formValidationschema = yup.object().shape({
      username: yup.string().min(4).required("username is requred "),
        email: yup.string().email().required('Email is requred').email("please enter valied email"),
        password: yup.string().min(4).max(10).required("pasword is requred"),
        confirmpassword: yup.string().when("password",{
          is: val=>(val && val .length > 0 ? true:false),
          then:yup.string().oneOf([yup.ref("password")],"pasword is does not match")
        }),
      });
   
    const[state, setState]=useState(initialState)
    const [data,setData]=useState([]);
    

  useEffect(()=>{
    loadUsers();
    },[])
  
    const loadUsers=async () =>{
      const response = await axios.get(api);
      setData(response.data);
    };

      const handelSubmit=(value)=>{
        fetch(api).then((data)=>{
          data.json().then((res)=>{

            const un=res.filter((x)=>x.username==value.username ).map((x)=>x.username);
   
            if(un==value.username){
              alert("username is exist");
            }else{

            const em=res.filter((x)=>x.email==value.email ).map((x)=>x.email);
            if(em==value.email){
              alert("email is exist");
            }else{
          
            const paa=res.filter((x)=>x.password==value.password).map((x)=>x.password);
          
                 if( paa!=value.password)
                 {
                  axios.post(api,value);
                  toast.success("Account created Successfully go to login page ")
                  loadUsers();     
                 }else{
                  alert("use diffrent password");
                 }
            } }
         });
     });
   };
    
    return( 
        <Container>
          <Card bg="transparent " className=' mt-5 text-dark border border-light bor '>
        <ToastContainer/>

         <Formik initialValues={initialState} 
         validationSchema={formValidationschema}
        onSubmit={handelSubmit} >
        
         <Form >
            <div className=" text-center p-2">
                 <h2 > Create an account</h2>
                 </div>
                 <div className="col-sm-5 mx-auto ">
                    <label className="col-sm-5 col-form-label  ">User_Name</label>
                    <Field   type="text" className="form-control "   placeholder=" Enter the email" name="username"   />
                             <p className='text-danger'>
                            <ErrorMessage name="username" /> </p>
                        </div>
                    
                    <div className="col-sm-5 mx-auto ">
                    <label className="col-sm-5 col-form-label  ">Email</label>
                    <Field   type="text" className="form-control  "   placeholder=" Enter the email"  name="email"   />
                         <p className='text-danger'>
                            <ErrorMessage name="email" /> </p>
                        </div>    
                                     
                    <div className="col-sm-5 mx-auto ">
                    <label className="col-sm-5 col-form-label  ">password</label>
                         <Field   type="password" className="form-control "   placeholder=" Enter the email"   name="password"  />
                                <p className='text-danger'>
                                <ErrorMessage name="password" /> </p>
                         </div>  
                        
                        <div className="col-sm-5 mx-auto ">
                        <label className="col-sm-5 col-form-label  ">confirmpassword</label>
                        <Field   type="password" className="form-control " placeholder=" Enter the email"   name="confirmpassword"   />
                                <p className='text-danger'>
                                <ErrorMessage name="confirmpassword" />
                                </p>
                        </div>  

                            <div className="col-sm-7 mx-auto text-center">
                            <button type="submit"  className="btt btn btn-primary text-center col-sm-5 m-5 " 
                           > Submit </button>  
                            </div>
                            </Form> 
                    
                    </Formik>
                    <div className="text-center  ">
                            <p>Already have an account ?
                        <Link to="/" className="mx-3">
                             Login
                        </Link>
                        </p>
                        </div>
                        </Card>
                 </Container>
    );
}
export default Registerpage;