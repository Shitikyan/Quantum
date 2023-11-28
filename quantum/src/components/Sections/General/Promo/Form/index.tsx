import { useState } from "react";
import { ErrorType, IFormProps, IUser } from "./types";
import { RegisterButton } from "@/src/components/RegisterButton";
import { UserService } from "@/src/services/userService";
import { useRouter } from "next/router";
import { validate } from "@/src/utils/validate";

import styles from "./styles.module.scss";

export const Form = ({ className }: IFormProps) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [err, setError] = useState<ErrorType>({
    type: "none",
    message: "",
  });
  const service = new UserService();

  const handleRegister = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate({ email, firstname, lastname, phone }, setError)) {
      service.signup({ email, firstname, lastname, phone }).then(() => {
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        router.push("/verify");
      });
    }
  };

  return (
    <form className={`${styles.container} ${className}`}>
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
      {err.type === "firstname" && (
        <p className={styles.error}>{err.message}</p>
      )}
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(ev.target.value);
        }}
        className={styles.input}
        placeholder="Last name"
        type="text"
        value={lastname}
      />
      {err.type === "lastname" && <p className={styles.error}>{err.message}</p>}
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(ev.target.value);
        }}
        className={styles.input}
        placeholder="Email"
        type="email"
        value={email}
      />
      {err.type === "email" && <p className={styles.error}>{err.message}</p>}
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(ev.target.value);
        }}
        className={styles.input}
        type="text"
        placeholder="+(000)-00-000-000"
        value={phone}
      />
      {err.type === "phone" && <p className={styles.error}>{err.message}</p>}

      <RegisterButton handleClick={handleRegister} />

      <p className={styles.button_text}>
        Places left to register:<span className={styles.number}>16</span>
      </p>
    </form>
  );
};
