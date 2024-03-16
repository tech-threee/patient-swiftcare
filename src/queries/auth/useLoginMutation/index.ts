import { useMutation } from "@tanstack/react-query";
import {
  OtpRequest,
  sendOtp,
  LoginRequest,
  login,
} from "../../../api/auth.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const useSendOtpMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (reqBody: OtpRequest) => {
      return sendOtp({ email: reqBody.email }).then((res) => res.data); // Pass an object with the email property
    },
    onSuccess: () => {
      console.log("Sent");

      toast.success("🦄 OTP sent successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/home");
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
