export type User = {
  username: string;
  token: string;
} | null;

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};
