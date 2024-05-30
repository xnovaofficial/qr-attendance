import { useState } from 'react'
import "./form.css"
import axios from 'axios';


const RegisterhtmlForm = () => {

    const [formValues, setFormValues] = useState({
      Username: '',
        email: '',
        phone_no: '',
        UserId:''
      });


      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value
        });
      };

      const handleSubmit=async (e:any)=>{
        try {
          e.preventDefault();
            console.log(formValues);
            const response=axios.post("http://localhost:8989/api/v1/auth/register",formValues)
            console.log(response)
        } catch (error) {
          console.error(error)
        }
      }
  return (


    <div className="containerform">
        <div className="title">
            <p>Registration</p>
        </div>

        <form action="#">
            <div className="user_details">
                
                <div className="input_box">
                    <label htmlFor="username">Username</label>
                    <input  type="text"
                  id="username"
                   name="Username"
                 placeholder="Enter your username"
                value={formValues.Username}
                onChange={handleInputChange}
                 required/>
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

                <div className="input_box">
                <label htmlFor="id">User ID</label>
              <input
              type="number"
              id="userid"
              name="UserId"
              placeholder="Enter your userid"
              value={formValues. UserId}
              onChange={handleInputChange}
              required
            />
                </div>
               
            </div>
         
            <div className="reg_btn">
                <input type="submit" value="Register" onClick={handleSubmit}/>
            </div>
        </form>
    </div>
    
  )
}

export default RegisterhtmlForm