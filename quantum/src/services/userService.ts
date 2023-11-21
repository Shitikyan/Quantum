import "dotenv/config";
import axios from "axios";
import { IUser } from "../components/Sections/General/Promo/Form/types";

export class UserService {
  private base_url = String(process.env.NEXT_PUBLIC_BASE_URL);

  public async signin(body: IUser) {
    const { data } = await axios.post(
      `https://quantom.solicy.net/users/signup`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return data;
  }
}
