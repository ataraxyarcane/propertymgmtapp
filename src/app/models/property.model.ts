export interface Property {
    _id?: string;
    name: string;
    location: string;
    rent: number;
    description?: string;
    tenants?: string[];  // References to Tenant IDs
}