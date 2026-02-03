export type CustomerStatus = "active" | "inactive";

export interface Customer {
  id: number;
  name: string;
  mobile: string;
  city: string;
  status: CustomerStatus;
}
