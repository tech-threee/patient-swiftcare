import { axiosClient } from "./client";

export const SPECIALITIES = {
  surgery: "SURGEON",
  dental_problem: "DENTAL PROBLEM",
  regular_checkup: "REGULAR CHECKUP",
  maternity: "MATERNITY PROBLEM",
  children: "CHILDREN PROBLEM",
  lab: "LAB PROBLEM",
};

export interface AppointmentRequest {
  patient: {
    name: string;
    email: string;
  };
  date: string;
  time: string;
  issue: keyof typeof SPECIALITIES;
}

export const bookAppointment = async (
  data: AppointmentRequest,
  token: string
) => {
  const response = await axiosClient.post("/appointments", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
