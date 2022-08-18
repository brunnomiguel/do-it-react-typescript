import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória!")
    .oneOf([yup.ref("password")], "Senhas não conferem!"),
});
