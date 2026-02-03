"use client";

import { useState } from "react";
import { Customer } from "../ts/types";
import Link from "next/link";

type SortKey = "name" | "city" | "status";

interface TableProps {
  data: Customer[];
}

export default function Table({ data }: TableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sorted = [...data].sort((a, b) => {
    const valA = a[sortKey].toString().toLowerCase();
    const valB = b[sortKey].toString().toLowerCase();
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div
      className="overflow-x-auto bg-white rounded-lg
                 shadow-lg shadow-gray-300/60
                 hover:shadow-2xl transition-shadow duration-300"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th
              className="px-4 py-3 border-b font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name {sortKey === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="px-4 py-3 border-b font-semibold text-gray-700">Mobile</th>
            <th
              className="px-4 py-3 border-b font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleSort("city")}
            >
              City {sortKey === "city" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th
              className="px-4 py-3 border-b font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status {sortKey === "status" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>

        <tbody>
          {sorted.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 border-b">
                <Link
                  href={`/customers/${c.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {c.name}
                </Link>
              </td>
              <td className="text-gray-700 px-4 py-2 border-b">{c.mobile}</td>
              <td className="px-4 py-2 border-b text-gray-700">{c.city}</td>
              <td className="px-4 py-2 border-b">
                <span
                  className={`px-2 py-1 text-sm rounded-full font-medium
                    ${
                      c.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
