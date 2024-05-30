import axios from "axios";
import { url,version } from "../../config/config";


const post=async (endpoint:any,payload:any,headers:any)=>{
   try {
     const response= await axios.post(`${url}/api/${version}/${endpoint}`,{payload},{
         headers
     })
 
     const { status }= response
     if (status==200) {
        return response
     }
   }
 catch (error) {
    console.log("error", error);
		throw error;
   }
}

export const request={
    post
}