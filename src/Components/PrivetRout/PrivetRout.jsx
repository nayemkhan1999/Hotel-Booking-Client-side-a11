import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import imgLoading from "../../assets/loading.gif";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <img className="mx-auto w-[100vh]" src={imgLoading} alt="" />
      // <span className="loading loading-bars loading-lg ml-72 mx-auto"></span>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivetRout;
