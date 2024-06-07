
import { useState } from "react";
import "../registrationform/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


 const Signform = () => {

    const [formValues, setFormValues] = useState({
      
          
          UserId: '',
          password: ''
         
        });
        const navigate = useNavigate();

    const handleSubmit=async(e:any)=>{
        try{
        e.preventDefault();
        console.log(formValues);
    
        const response:any = await axios.post("https://qr-attendance-be.onrender.com/api/v1/auth/signin", formValues);
    
        console.log("response", response.data);
        // console.log("response====>",response.status)
        if(response.status === 200){
          alert("You are Succesfully  loggedin")
        }else {
          alert("Your are already logged in")
        }
       

        localStorage.setItem("@userId",response!.data!.result.UserId)
        localStorage.setItem("@userName",response!.data!.result.Username)
        localStorage.setItem("@userEmail",response!.data!.result.email)
        localStorage.setItem("@userPhone",response!.data!.result.phone_no)
        localStorage.setItem("@userrole",response!.data!.result.role)
        navigate("/scan");
        
   
      } catch (error) {
        console.error(error);
        alert("Your password or ID does not match. Please try again")
      }
    }

    const handleInputChange=(e:any)=>{
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value
        });
    }
  return (
   
    
    <div className="containerform" style={{marginTop:80}}>
        <div className="title">
            <p>SignInForm</p>
        </div>

        <form action="#" style={{height:"100%"}} onSubmit={handleSubmit}>
  <div className="user_details">
    
    
    <div className="input_box">
      <label htmlFor="UserId">employee id</label>
      <input
        type="string"
        id="UserId"
        name="UserId"
        placeholder="Enter your employee id"
        value={formValues.UserId}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="input_box">
      <label htmlFor="UserId">Password</label>
      <input  
        type="string"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formValues.password}
        onChange={handleInputChange}
        required
      />
    </div>
    
  </div>
  <div className="reg_btn">
    <input type="submit" value="Signin"/>
  </div>
</form>

    </div>

  );
};

export default Signform
