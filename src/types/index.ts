export interface SafeUser {
  id: number;
  email: string;
  fullName: string;
}

export interface FullUser {
  id: number;
  fullName: string;
  email: string;
  cvUrl?: string;
  jobTitle?: string;
  phoneNumber?: string;
  updatedAt?: Date;
}