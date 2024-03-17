import { axiosClient } from "./client";

// Login patient || send Otp
export type OtpRequest = { email: string };
export const sendOtp = async (body: OtpRequest) => {
  return axiosClient.post("/auth/patient", body);
};

// Verify Patient Otp And Login
export type LoginRequest = OtpRequest & { otp: string };
export const loginUser = async (body: LoginRequest) => {
  return axiosClient.post("/auth/patient/verify-otp", body);
};

//SignUp Patient
export type RegisterRequest = {
  email: string;
  name: string;
  phone: string;
  dob: string;
};

export const register = async (body: RegisterRequest) => {
  return axiosClient.post("/patient", body);
};
