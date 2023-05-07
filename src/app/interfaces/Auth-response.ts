import { User } from "./User.interface";

export interface AuthResponse {
   token : string;
   user : User;
}