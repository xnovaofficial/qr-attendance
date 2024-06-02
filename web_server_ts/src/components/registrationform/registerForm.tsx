import { useState } from 'react'
import "./form.css"
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';



const RegisterhtmlForm = () => {
  const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
      Username: '',
        email: '',
        phone_no: '',
        UserId:'',
        role:1
      });


      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: name === 'role' ? parseInt(value) : value
        });
      };

      const handleSubmit = async (e:any) => {
        try {
          e.preventDefault();
          console.log("form",formValues);
      
          const response:any = await axios.post("https://qr-attendance-07hu.onrender.com/api/v1/auth/register", formValues);
      
          console.log("response", response.data);
         
          localStorage.setItem("@userId",response!.data!.result.UserId)
         localStorage.setItem("@userName",response!.data!.result.Username)
         localStorage.setItem("@userEmail",response!.data!.result.email)
         localStorage.setItem("@userPhone",response!.data!.result.phone_no)
         localStorage.setItem("@userrole",response!.data!.result.role)
         navigate("/scan");
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
    <div className="input_box">
            <label htmlFor="role">Select Role</label>
            <select
              id="role"
              name="role"
              value={formValues.role}
              onChange={handleInputChange}
              required
            >
              <option value={7}>Manager</option>
              <option value={6}>Department Manager</option>
              <option value={5}>Lead</option>
              <option value={4}>Senior Executive</option>
              <option value={3}>Executive</option>
              <option value={2}>Incharge</option>
              <option value={1}>Others</option>
            </select>
          </div>
  </div>
  <div className="reg_btn">
    <input type="submit" value="Signup"/>
  </div>
</form>
<p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/signin"
                        className='login_link'
                    >
                        Sign In
                    </Link>
                    </p>
    </div>
    
  )
}

export default RegisterhtmlForm