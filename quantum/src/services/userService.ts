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

    if (data && data.code) {
      localStorage.setItem("verification_code", data.code);
      localStorage.setItem("phone_number", data.phone);
    }
    return data;
  }

  public async verify(code: string): Promise<{ is_correct: boolean }> {
    const phone = localStorage.getItem("phone_number");
    const correct_code = localStorage.getItem("verification_code");
    try {
      const { data } = await axios.post(
        `${this.base_url}/users/verify`,
        { code, phone, correct_code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.is_correct) {
        return {
          is_correct: data.is_correct,
        };
      }
      return { is_correct: false };
    } catch (err) {
      return { is_correct: false };
    }
  }
}
