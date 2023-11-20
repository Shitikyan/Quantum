import { useState } from "react";
import { IUser } from "./types";
import { RegisterButton } from "@/src/components/RegisterButton";
import { UserService } from "@/src/services/userService";

import styles from "./styles.module.scss";

const validate = ({ firstname, lastname, email, phone, password }: IUser) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    emailRegex.test(email) &&
    nameRegex.test(firstname) &&
    nameRegex.test(lastname) &&
    password.length > 6
  );
};

export const Form = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
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
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(ev.target.value);
        }}
        className={styles.input}
        type="password"
        placeholder="password"
        value={password}
      />
      <RegisterButton
        handleClick={(ev) => {
          ev.preventDefault();
          if (validate({ email, firstname, lastname, phone, password })) {
            service
              .signin({ email, firstname, lastname, phone, password })
              .then(() => {
                setEmail("");
                setFirstName("");
                setLastName("");
                setPassword("");
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
