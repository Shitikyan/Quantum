import "dotenv/config";
import axios, { AxiosError } from "axios";
import { IUser } from "../components/Sections/General/Promo/Form/types";

export class UserService {
  private base_url;

  constructor() {
    this.base_url = String(process.env.NEXT_PUBLIC_BASE_URL);
  }

  public async signup(body: IUser): Promise<string | AxiosError> {
    const { data } = await axios.post(`${this.base_url}/users/signup`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }
}
