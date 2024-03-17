export type UserData = {
  dob?: string;
  email: string;
  emergency_contacts: string[];
  name: string;
  otp: string;
  phone: number;
  token: string;
  pid: number;
  _id: string;
};

export type User = {
  success: boolean;
  data: UserData;
} | null;

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  login: (data: UserData) => Promise<void>;
  logout: () => void;
};
