import { OrderEntity } from 'cashfree-pg';

export interface Order extends OrderEntity {}

export interface RazorpayOrder {
    amount: number;
    currency: string;
    receipt?: string;
    notes?: Record<string, string | number | boolean>;
}