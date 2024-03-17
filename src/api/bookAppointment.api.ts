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
  issue: keyof typeof SPECIALITIES;
}

export const bookAppointment = async (
  data: AppointmentRequest,
  token: string
) => {
  try {
    return console.log("Api Book Data ", data);

    const response = await axiosClient.post("/booking", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Booking Response ", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
