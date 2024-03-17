import { useMutation } from "@tanstack/react-query";
import {
  OtpRequest,
  sendOtp,
  LoginRequest,
  loginUser,
} from "../../../api/auth.api";

import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useUser } from "../../../hooks/auth/useUser";

export const useSendOtpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (reqBody: OtpRequest) => {
      return sendOtp({ email: reqBody.email }).then((res) => res.data); // Pass an object with the email property
    },
    onSuccess: () => {
      console.log("Sent");

      navigate("/verifyEmail");
    },
    onError: () => {
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
      console.log("Successfully Working....", data);
      login(data);
    },
    onError: () => {
      console.log("Successful Error");
    },
    onMutate: () => {
      console.log("pending");
    },
  });
};
