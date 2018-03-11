export interface UserDetails {
    _id: string;
    email: string;
    name: string;
    exp: number;
    iat: number;
  }
  
export  interface TokenResponse {
    token: string;
  }
  
export interface TokenPayLoad {
    email: string;
    password: string;
    name?: string;
  }