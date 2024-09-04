import { jwtDecode } from "jwt-decode";
const decodeJwt=async(token:string)=>{
    const decode = await jwtDecode(token);
  return decode;
}

export default decodeJwt