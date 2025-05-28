import { Document } from 'mongoose';

export interface IOtp extends Document {
  senderWalletAddress: string;
  receiverWalletAddress: string;
  amount: number;
  otp: string;
  expiresAt: Date;
}
