import { useMutation } from "@tanstack/react-query";
import {
  OtpRequest,
  sendOtp,
  LoginRequest,
  login,
} from "../../../api/auth.api";

export const useSendOtpMutation = () => {
  return useMutation({
    mutationFn: (reqBody: OtpRequest) => {
      const email = reqBody.email as string;
      return sendOtp(email).then((res) => res.data);
    },
    onSuccess: () => {
      console.log("OTP sent successfully");
    },
    onError: (error: any) => {
      console.log("Error Occured", error);
    },
    onMutate: () => {
      console.log("pending");
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (reqBody: LoginRequest) => {
      return login(reqBody).then((res) => res.data);
    },
  });
};
