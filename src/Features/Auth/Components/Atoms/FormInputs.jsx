//third-party
import {ErrorMessage, Field} from "formik"

function FormInput({name ,placeholder, ...props }) {
  const Error = ({children}) => <p className="invalid-feedback">{children}</p>
  return (
    <div className='mb-3'>
      <Field name={name} placeholder={placeholder} className="form-control" {...props}/>
      <ErrorMessage name={name} component={Error}/>
    </div>
  );
}

export default FormInput;