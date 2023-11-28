import { ErrorType, IUser } from "../components/Sections/General/Promo/Form/types";

export const validate = (
  { firstname, lastname, email, phone }: IUser,
  setErr: (prop: ErrorType) => void
) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(?:(?:\+|00)\d{1,3}[\s-]?)?(?:\d{1,4}[\s-]?){1,14}\d$/;

  const isCorrectName = nameRegex.test(firstname)
    ? null
    : {
        type: "firstname",
        message:
          "firstname must contain at least two letters and only letters and spaces are allowed.",
      };
  const isCorrectLastName = nameRegex.test(lastname)
    ? null
    : {
        type: "lastname",
        message:
          "lastname must contain at least two letters and only letters and spaces are allowed.",
      };
  const isCorrectPhone = phoneRegex.test(phone)
    ? null
    : {
        type: "phone",
        message: "Invalid phone number. Please enter a valid phone number.",
      };
  const isCorrectEmail = emailRegex.test(email)
    ? null
    : {
        type: "email",
        message: "Invalid email address. Please enter a valid email.",
      };
  setErr(
    isCorrectName ||
      isCorrectLastName ||
      isCorrectPhone ||
      isCorrectEmail || {
        type: "none",
        message: "",
      }
  );

  return (
    !isCorrectName && !isCorrectLastName && !isCorrectPhone && !isCorrectEmail
  );
};