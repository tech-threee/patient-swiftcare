export type UserCredentials = {
  name: string;
  email: string;
  phone: string;
  dob: string;
  otp: string[];
};

export type UserCredentialsContextType = {
  userCredentials: UserCredentials;
  setUserCredentials: React.Dispatch<React.SetStateAction<UserCredentials>>;
};
