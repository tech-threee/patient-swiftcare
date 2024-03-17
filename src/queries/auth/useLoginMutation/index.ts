import { useMutation } from "@tanstack/react-query";
import {
  OtpRequest,
  sendOtp,
  LoginRequest,
  loginUser,
} from "../../../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/auth/useUser";
import { toast } from "react-toastify";

export const useSendOtpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (reqBody: OtpRequest) => {
      return sendOtp({ email: reqBody.email }).then((res) => res.data); // Pass an object with the email property
    },
    onSuccess: () => {
      toast.success("Verification code sent successfully");
      navigate("/verifyEmail");
    },
    onError: () => {
      toast.error("An Error occurred");
      console.log("Successful Error");
    },
    onMutate: () => {
      console.log("pending");
    },
  });
};

export const useLoginMutation = () => {
  const { login } = useUser();

  return useMutation({
    mutationFn: (reqBody: LoginRequest) => {
      return loginUser(reqBody).then((res) => res.data);
    },
    onSuccess: (data) => {
      toast.success("Log in Successfully");
      login(data);
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
    onMutate: () => {
      console.log("pending");
    },
  });
};
