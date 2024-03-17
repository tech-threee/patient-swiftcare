import React, { useState } from "react";
import { SPECIALITIES } from "../../api/bookAppointment.api";

const BookAppointment: React.FC = () => {
  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    issue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(appointment);
    // Submit the form data to the server or handle it as needed
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
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
            value={appointment.name}
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
            value={appointment.email}
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
        <button
          type="submit"
          className="w-full btn text-white rounded-md py-2 font-medium  focus:outline-none focus:ring-2  focus:ring-offset-2"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
