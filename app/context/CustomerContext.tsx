"use client";

import React, { createContext, useContext, useState } from "react";
import { Customer } from "../ts/types";

interface CustomerContextType {
  customers: Customer[];
  toggleStatus: (id: number) => void;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

const initialCustomers: Customer[] = [
  { id: 1, name: "Aman", mobile: "9876543210", city: "Jaipur", status: "active" },
  { id: 2, name: "B", mobile: "9123456780", city: "Delhi", status: "inactive" },
  { id: 3, name: "Mayur", mobile: "9988776655", city: "udaipur", status: "active" },
  { id: 4, name: "Charlie Kumar", mobile: "9988776655", city: "Mumbai", status: "active" },
];

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  const toggleStatus = (id: number) => {
    setCustomers(prev =>
      prev.map(c =>
        c.id === id ? { ...c, status: c.status === "active" ? "inactive" : "active" } : c
      )
    );
  };

  return (
    <CustomerContext.Provider value={{ customers, toggleStatus }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context) throw new Error("useCustomers must be used within CustomerProvider");
  return context;
};
