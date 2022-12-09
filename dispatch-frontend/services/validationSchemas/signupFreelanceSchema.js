import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  lastname: Yup.string()
    .required("Veuillez entrer votre nom de famille.")
    .matches(
      /[^\(!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?\)]/,
      "Le nom de famille ne doit pas comporter de caractères spéciaux"
    ),
  firstname: Yup.string()
    .required("Veuillez entrer votre prénom.")
    .matches(
      /[^\(!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?\)]/,
      "Le nom de famille ne doit pas comporter de caractères spéciaux"
    ),

  email: Yup.string()
    .email("Veuillez entrer une adresse mail valide")
    .required("Veuillez entrer une adresse email"),
});

module.exports = validationSchema;
