import { useState } from 'react'
import "./form.css"
import axios from 'axios';



const RegisterhtmlForm = () => {
  // const navigation:any = useNavigation();
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

      const handleSubmit = async (e:any) => {
        try {
          e.preventDefault();
          console.log(formValues);
      
          const response:any = await axios.post("http://localhost:8989/api/v1/auth/register", formValues);
      
          console.log("response", response.data);
         
          localStorage.setItem("@userId",response!.data!.result.UserId)
         localStorage.setItem("@userName",response!.data!.result.Username)
         localStorage.setItem("@userEmail",response!.data!.result.email)
         localStorage.setItem("@userPhone",response!.data!.result.phone_no)
        //  navigation.navigate('/scan')
        } catch (error) {
          console.error(error);
        }
      }
      
  return (


    <div className="containerform" style={{marginTop:80}}>
        <div className="title">
            <p>Registration</p>
        </div>

        <form action="#" style={{height:"100%"}} onSubmit={handleSubmit}>
  <div className="user_details">
    <div className="input_box">
      <label htmlFor="username">Username</label>
      <input 
        type="text"
        id="username"
        name="Username"
        placeholder="Enter your username"
        value={formValues.Username}
        onChange={handleInputChange}
        required
      />
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
        type="text"
        id="userid"
        name="UserId"
        placeholder="Enter your userid"
        value={formValues.UserId}
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
    
  )
}

export default RegisterhtmlForm