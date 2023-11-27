import { UserService } from "../services/userService";

export const handleSubmitCode = async (
  code: string,
  setErr: (val: boolean) => void,
  redirect: any
) => {
  const userSevice = new UserService();
  const { is_correct } = await userSevice.verify(code);
  if (is_correct) {
    redirect();
  } else {
    setErr(!is_correct);
    return;
  }
};
