import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import {
  AppointmentRequest,
  bookAppointment,
} from "../../api/bookAppointment.api";

export const useBookMutation = (
  token: string,
  options?: UseMutationOptions<any, Error, AppointmentRequest>
) => {
  return useMutation(
    (appointmentData: AppointmentRequest) =>
      bookAppointment(appointmentData, token),
    options
  );
};
