export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserDetails {
  username: string;
  email: string;
}
