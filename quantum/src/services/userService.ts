import "dotenv/config";
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { IUser } from "../components/Sections/General/Promo/Form/types";

export class UserService {
  private base_url;

  constructor() {
    this.base_url = String(process.env.NEXT_PUBLIC_BASE_URL);
  }
  public async getUserByPhone(phone: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}/users/${phone}`
      );
      return response.data;
    } catch (error: any) {
      return null;
    }
  }

  public async signup(body: IUser): Promise<string | AxiosError> {
    const { data } = await axios.post(`${this.base_url}/users/signup`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data && data.phone) Cookies.set("phone_number", data.phone);
    return data;
  }

  public async sendVerification() {
    try {
      const phone = Cookies.get("phone_number");

      if (!phone) {
        throw new Error("Phone number not found in cookies");
      }

      await axios.post(
        `${this.base_url}/users/resend-verification`,
        { phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error: any) {
      console.error("Error sending verification:", error.message);
      throw error;
    }
  }

  public async verify(code: string): Promise<any> {
    const phone = Cookies.get("phone_number");
    try {
      const res = await axios.post(
        `${this.base_url}/users/verify`,
        { code, phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res;
    } catch (err: any) {
      return { is_correct: false };
    }
  }
}
