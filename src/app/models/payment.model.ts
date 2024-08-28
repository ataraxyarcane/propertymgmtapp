export interface Payment {
    _id?: string;
    tenantId: string;  // references the tenant model
    amount: number;
    date: Date;
}