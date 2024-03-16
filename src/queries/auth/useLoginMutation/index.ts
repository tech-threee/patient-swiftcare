import { useMutation } from "@tanstack/react-query";
import {
  OtpRequest,
  sendOtp,
  LoginRequest,
  login,
} from "../../../api/auth.api";
import { toast } from "sonner";

export const useSendOtpMutation = () => {
  return useMutation({
    mutationFn: (reqBody: OtpRequest) => {
      const email = reqBody.email as string;
      return sendOtp(email).then((res) => res.data);
    },
    onSuccess: () => {
      toast.success("OTP sent successfully");
      console.log("Sent");
    },
    onError: (error: any) => {
      toast.error("Error Occurred");
      console.log(error);
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
