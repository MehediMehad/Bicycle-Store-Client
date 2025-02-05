export interface TUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  status: "blocked" | "in-progress";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
