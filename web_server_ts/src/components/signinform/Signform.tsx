
import { useState } from "react";
import "../registrationform/form.css";
import axios from "axios";

 const Signform = () => {

    const [formValues, setFormValues] = useState({
      
          email: '',
          phone_no: ''
         
        });

    const handleSubmit=async(e:any)=>{
        try{
        e.preventDefault();
        console.log(formValues);
    
        const response:any = await axios.post("http://localhost:8989/api/v1/auth/signin", formValues);
    
        console.log("response", response.data);
       

       localStorage.setItem("@userEmail",response!.data!.result.email)
       localStorage.setItem("@userPhone",response!.data!.result.phone_no)
    //    navigation.navigate('/scan')
      } catch (error) {
        console.error(error);
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
      
    </div>
    <div className="input_box">
      <label htmlFor="email">Email</label>
      <input  
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formValues.email}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="input_box">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="number"
        id="phone"
        name="phone_no"
        placeholder="Enter your number"
        value={formValues.phone_no}
        onChange={handleInputChange}
        required
      />
    </div>
    
  </div>
  <div className="reg_btn">
    <input type="submit" value="Register"/>
  </div>
</form>

    </div>

  );
};

export default Signform
