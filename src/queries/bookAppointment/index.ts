import { useMutation } from "@tanstack/react-query";
import {
  bookAppointment,
  AppointmentRequest,
} from "../../api/bookAppointment.api";
import { toast } from "react-toastify";

export const useBookAppointmentMutation = (token: string) => {
  return useMutation({
    mutationFn: async (appointmentData: AppointmentRequest) => {
      return await bookAppointment(appointmentData, token);
    },
    onSuccess: () => {
      toast.success("Appointment booked successfully");
    },
    onError: (error: Error) => {
      toast.error("Error booking appointment:");
    },
    onMutate: () => {
      toast.info("Waiting......");
    },
  });
};
