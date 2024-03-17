import React, { useState } from "react";
import {
  AppointmentRequest,
  SPECIALITIES,
} from "../../api/bookAppointment.api";
import { useBookAppointmentMutation } from "../../queries/bookAppointment";
import { useUser } from "../../hooks/auth/useUser";
import AuthButtons from "../../widgets/Buttons/AuthButtons";

type AppointmentWithTime = AppointmentRequest & { time: string };

const BookAppointment: React.FC = () => {
  const { user } = useUser();

  console.log("User ", user);

  const token = user?.data?.data?.token;

  if (!token) return;

  const {
    mutate: bookAppointment,
    isError,
    isPending,
    isSuccess,
  } = useBookAppointmentMutation(token);
  const [appointment, setAppointment] = useState<AppointmentWithTime>({
    patient: {
      name: "",
      email: "",
    },
    date: "",
    time: "",
    issue: "surgery",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "name" || e.target.name === "email") {
      setAppointment({
        ...appointment,
        patient: { ...appointment.patient, [e.target.name]: e.target.value },
      });
    } else {
      setAppointment({ ...appointment, [e.target.name]: e.target.value });
    }
  };

  const handleBookAppointment = () => {
    const combinedDateTime = new Date(
      `${appointment.date}T${appointment.time}`
    ).toISOString();

    const appointmentData: AppointmentRequest = {
      patient: {
        name: appointment.patient.name,
        email: appointment.patient.email,
      },
      date: combinedDateTime,
      issue: appointment.issue,
    };

    bookAppointment(appointmentData);

    console.log("IsLoading ", isPending);
    console.log("Success ", isSuccess);
    console.log("Error ", isError);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={appointment.patient.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={appointment.patient.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="issue"
            className="block text-sm font-medium text-gray-700"
          >
            Issue
          </label>
          <select
            id="issue"
            name="issue"
            value={appointment.issue}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
            required
          >
            <option value="">Select an issue</option>
            {Object.entries(SPECIALITIES).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <AuthButtons
            onClick={handleBookAppointment}
            text={isPending ? "Booking Appointment......" : "Book Appointment"}
          />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
