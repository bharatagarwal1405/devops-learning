export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface AppConfig {
  apiUrl: string;
  appName: string;
  version: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
