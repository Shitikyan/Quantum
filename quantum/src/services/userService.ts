import "dotenv/config";
import axios from "axios";
import { IUser } from "../components/Sections/General/Promo/Form/types";

interface IAuthenticationInfo extends Pick<IUser, "email" | "password"> {}

export class UserService {
  private base_url = String(process.env.NEXT_PUBLIC_BASE_URL);

  public async signin(body: IUser) {
    const { data } = await axios.post(`${this.base_url}/users/signup`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  }

  public async login(body: IAuthenticationInfo) {
    await axios.post(`${this.base_url}/users/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}
