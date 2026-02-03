"use client";

import { useEffect,useState } from "react";
import { useCustomers } from "../context/CustomerContext";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Skeleton from "../components/Skeleton";


export default function CustomerList() {
  const { customers } = useCustomers();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

const [loading, setLoading] = useState(true);

  useEffect(() => { 
     const timer = setTimeout(() => setLoading(false), 1000); 
     return () => clearTimeout(timer); }, []);


  const filtered = customers.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.mobile.includes(search);
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
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
