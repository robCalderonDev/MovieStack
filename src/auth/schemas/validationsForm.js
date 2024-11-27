import * as yup from "yup";

export const ValidationSchemaUser = yup.object().shape({
  name: yup.string().required("ingresa tu nombre"),
  email: yup
    .string()
    .email("Debe ser un correo valido")
    .required("El campo correo es obligatorio"),

  password: yup
    .string()
    .min(6, "la contraseña debe tener minimo 6 caracteres")
    .max(32)
    .required("este campo es obligatorio")
    .matches(
      /[A-Z]/,
      "La contraseña debe contener al menos una letra mayúscula"
    ),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Repita la contraseña"),
  terms: yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones"),
});

export const ValidationSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Debe ser un correo valido")
    .required("El campo correo es obligatorio"),
  password: yup.string().required("este campo es obligatorio"),
});
