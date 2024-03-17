import { useMutation } from "@tanstack/react-query";
import { RegisterRequest, register } from "../../../api/auth.api";
import { toast } from "react-toastify";
import { useUser } from "../../../hooks/auth/useUser";

export const useSignUpMutation = () => {
  const { login } = useUser();

  return useMutation({
    mutationFn: (reqBody: RegisterRequest) => {
      return register(reqBody).then((res) => res.data);
    },
    onSuccess: (data) => {
      toast.success("Account created successfully, welcome");
      login(data);
    },
    onError: (error: any) => {
      console.log(error.message);
    },
  });
};
