
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../Atoms/FormButton";
import FormInputs from "../Atoms/FormInputs";
import FormCheck from "../Atoms/FormCheck";
import FormPgh from "../Atoms/FormPgh";
import { useAuthRedux } from '../../../../Shared/hooks/useAuthRedux';
import { login } from '../../../../Shared/redux/slices/authSlice';
import { axiosInstance } from "../../../../server/config.axios";
import { LocalStorageAuth } from "../../../../Shared/Utils/localStorageAuth";


export default function LoginTemp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axiosInstance.post('/auth/login', {email, password})
      LocalStorageAuth.store(response.data)
    }catch(e){
      console.log("error")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          placeholder="User Name"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInputs
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormCheck />
        <FormButton nameBtn={ "Log In"}  />
        <FormPgh pgh="Don't have an account?" formNav=" Sign Up" to="/auth/signup" />
      </form>

      {/* {error && <p style={{ color: "red" }}>{typeof error === 'string' ? error : error?.message}</p>} */}
    </>
  );
}