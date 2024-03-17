import { useMutation } from "@tanstack/react-query";
import {
  bookAppointment,
  AppointmentRequest,
} from "../../api/bookAppointment.api";

export const useBookAppointmentMutation = (token: string) => {
  return useMutation({
    mutationFn: async (appointmentData: AppointmentRequest) => {
      return await bookAppointment(appointmentData, token);
    },
    onSuccess: () => {
      console.log("Appointment booked successfully");
    },
    onError: (error: Error) => {
      console.error("Error booking appointment:", error);
    },
    onMutate: () => {
      console.log("Waiting......");
    },
  });
};
