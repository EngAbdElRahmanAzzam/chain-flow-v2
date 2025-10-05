//core
import {useState} from 'react'
//third-part
import { useNavigate } from "react-router-dom";
import {Formik, Form} from "formik"

//client
import {schemaLogin} from "../../../../Shared/validations/login.js"
import { axiosInstance } from "../../../../Shared/server/config.axios";
import { Auth_API } from "../../../../Shared/server/services.js";
import { LocalStorageAuth } from "../../../../Shared/Utils/localStorageAuth";
import FormButton from "../Atoms/FormButton";
import FormInput from "../Atoms/FormInputs";
import FormCheck from "../Atoms/FormCheck";
import FormPgh from "../Atoms/FormPgh";

export default function LoginTemp(){
    const [isloading, updateIsLoading] = useState(false)

    const initalValue = {
      email:"",
      password:""
    }

    const handleSubmit = async (values)=> {
        try{
          updateIsLoading(true)
          const response = await Auth_API.login()
        }catch(e){

        }
        updateIsLoading(false)
    }

    return(
        <div>
          <Formik
            initialValues={initalValue}
            onSubmit={handleSubmit}
            validationSchema={schemaLogin}
          >
              <Form>

                  <FormInput 
                    name="email" 
                    type="email" 
                    placeholder="Enter Your Email"
                  />

                  <FormInput 
                    name="email" 
                    type="email" 
                    placeholder="Enter Your Email"
                  />

                  <FormCheck />
                  <FormButton>Login</FormButton>
                  <FormPgh pgh="Don't have an account?" formNav=" Sign Up" to="/auth/signup" />
              </Form>
          </Formik>
        </div>
    )
}

