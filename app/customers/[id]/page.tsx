"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCustomers } from "../../context/CustomerContext";
import CustomerDetailsSkeleton from "../../components/Skeleton";

export default function CustomerDetails() {
  const { id } = useParams();
  const { customers, toggleStatus } = useCustomers();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const customer = customers.find((c) => c.id === Number(id));

  if (loading) return <CustomerDetailsSkeleton />;

  if (!customer) return <p className="p-6">Customer not found.</p>;

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold">{customer.name}</h1>
      <p>Mobile: {customer.mobile}</p>
      <p>City: {customer.city}</p>
      <p>Status: {customer.status}</p>
      <button
        onClick={() => toggleStatus(customer.id)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {customer.status === "active" ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
}
