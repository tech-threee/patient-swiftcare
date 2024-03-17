import { useMutation } from "@tanstack/react-query";
import { RegisterRequest, register } from "../../../api/auth.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (reqBody: RegisterRequest) => {
      return register(reqBody).then((res) => res.data);
    },
    onSuccess: () => {
      toast.success("Account created successfully, welcome");
      navigate("/login");
    },
    onError: (error: any) => {
      console.log(error.message);
    },
  });
};
