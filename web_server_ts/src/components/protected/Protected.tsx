import { Outlet } from "react-router-dom";
import RegisterhtmlForm from "../registrationform/registerForm";

const Protected = () => {
  const user = localStorage.getItem("@userId")
  return user ? <Outlet /> : <RegisterhtmlForm />;
};

export default Protected;
