export interface IUserNotification {
  userId: string;
  fcmTokens: string[];
  deviceInfo?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFileUpload {
  buffer: Buffer;
  size: number;
  fieldname: string;
  mimetype: string;
  encoding: string;
  originalname: string;
}
