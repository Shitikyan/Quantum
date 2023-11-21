import { useState } from "react";
import { IUser } from "./types";
import { RegisterButton } from "@/src/components/RegisterButton";
import { UserService } from "@/src/services/userService";

import styles from "./styles.module.scss";

const validate = ({ firstname, lastname, email, phone }: IUser) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(?:(?:\+|00)\d{1,3}[\s-]?)?(?:\d{1,4}[\s-]?){1,14}\d$/;
  return (
    nameRegex.test(firstname) &&
    nameRegex.test(lastname) &&
    phoneRegex.test(phone) &&
    emailRegex.test(email)
  );
};

export const Form = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const service = new UserService();
  return (
    <form className={styles.container}>
      <h4 className={styles.title}>SIGN UP FOR FREE</h4>
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(ev.target.value);
        }}
        className={styles.input}
        placeholder="First name"
        type="text"
        value={firstname}
      />
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(ev.target.value);
        }}
        className={styles.input}
        placeholder="Last name"
        type="text"
        value={lastname}
      />
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(ev.target.value);
        }}
        className={styles.input}
        placeholder="Email"
        type="email"
        value={email}
      />
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(ev.target.value);
        }}
        className={styles.input}
        type="text"
        placeholder="+(000)-00-000-000"
        value={phone}
      />

      <RegisterButton
        handleClick={(ev) => {
          ev.preventDefault();
          if (validate({ email, firstname, lastname, phone })) {
            service.signin({ email, firstname, lastname, phone }).then(() => {
              setEmail("");
              setFirstName("");
              setLastName("");
              setPhone("");
            });
          } else {
            alert("chexav");
          }
        }}
      />

      <p className={styles.button_text}>
        Places left to register:<span className={styles.number}>16</span>
      </p>
    </form>
  );
};
