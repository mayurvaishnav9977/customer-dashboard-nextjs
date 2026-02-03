"use client";

import {useEffect, useState } from "react";
import { useCustomers } from "./context/CustomerContext";
import SummaryCard from "./components/SummaryCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Skeleton from "./components/Skeleton";

export default function Dashboard() {
  const { customers } = useCustomers();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
     const timer = setTimeout(() => setLoading(false), 1000); 
     return () => clearTimeout(timer); }, []);

  // Summary counts
  const total = customers.length;
  const active = customers.filter((c) => c.status === "active").length;
  const inactive = total - active;

  // Filter + search 
  const filtered = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.mobile.includes(search);
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Customers" value={total} />
        <SummaryCard title="Active Customers" value={active} />
        <SummaryCard title="Inactive Customers" value={inactive} />
      </div>

      {/*  SearchBar + Filter */}
      <div className="flex gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <Filter value={statusFilter} onChange={setStatusFilter} />
      </div>

       {/* Table or Skeleton */}
      {loading ? (
        <Skeleton rows={5} />
      ) : filtered.length === 0 ? (
        <p className="text-gray-500">No customers found.</p>
      ) : (
        <Table data={filtered} />
      )}
    </div>
  );
}
