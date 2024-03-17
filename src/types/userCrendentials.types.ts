export type UserCredentials = {
  name: string;
  email: string;
  phone: number;
  dob: string;
  otp: string[];
};

export type UserCredentialsContextType = {
  userCredentials: UserCredentials;
  setUserCredentials: React.Dispatch<React.SetStateAction<UserCredentials>>;
};
