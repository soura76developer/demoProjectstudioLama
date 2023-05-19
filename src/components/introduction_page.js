import react,{useState,useEffect} from 'react';
import Header from './header.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import {useForm} from 'react-hook-form'

// import { useForm } from 'react-hook-form';

const Introduction = () =>{
    const [value, setValue] = useState();
    const {register,handleSubmit,formState:{ errors },watch}=useForm();
    
    function submited(event){
        event.preventDefault();
        window.location.href="/SecondPage"
      
    }

    return(
        <>
            <Header />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <p className="headerTextStyle">Get your questions answered by our consultants for the comfort of your home </p>
                    </div>
                    <div className="col-md-5">
                        <Form className="register" onSubmit={handleSubmit(submited)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Child's Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" {...register("name",{required:true})}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Child's date of birth</Form.Label>
                                        <Form.Control type="date" placeholder="Date of Birth" {...register("dob",{reruired:true})}/>
                                    </Form.Group>
                                    <Form.Label>Born at less than 37 weeks?</Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Child's weight</Form.Label>
                                        <Form.Control type="text" placeholder="weight" {...register("childWeight",{required:true})}/>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Label>Weight Unit</Form.Label>
                                    <Form.Select aria-label="Default select example" {...register("weightUnit",{required:true})}>  
                                        <option>Select the unit</option>
                                        <option value="1">kilogram [kg]</option>
                                        <option value="2">gram [g]</option>
                                        <option value="3">milligram [mg]</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Child's Height</Form.Label>
                                        <Form.Control type="text" placeholder="Height" {...register("height",{required:true})}/>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Label>Height Unit</Form.Label>
                                    <Form.Select aria-label="Default select example" {...register("heightUnit",{required:true})}>
                                        <option>Select the unit</option>
                                        <option value="1">Meter [m]</option>
                                        <option value="2">foot [ft]</option>
                                        <option value="3">inch [in]</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" {...register("emailAddress",{required:true,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ } )}/>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 py-2">
                                    <PhoneInput className="callInput"
                                    placeholder="Enter phone number"
                                    value={value}
                                    onChange={setValue}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-12 text-center">
                                    <Button  type="submit" style={{backgroundColor:"gray",width:"500px",border:"none",color:"black"}}>
                                     Next
                                    </Button>
                                </div>
                            </div>
                           
                        </Form>
                        {/* <button  onClick={submitfunction} >Hello</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;