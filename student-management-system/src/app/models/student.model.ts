// src/app/models/student.model.ts
export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date;
    grade: string;
    address: string;
    enrollmentDate: Date;
    active: boolean;
  }