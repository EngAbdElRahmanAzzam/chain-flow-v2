//third-party
import * as Yup from "yup"

export const schemaLogin = Yup.object(
    {
        email:Yup.string()
                .required()
                .email(),

        password:Yup.string()
                    .min(8)
                    .max(100)
                    .matches(/[a-z]/)
                    .matches(/[A-Z]/)
                    .matches(/[0-9]/)
                    .matches(/[^a-zA-Z0-9]/)
    }
)