"use client";

interface FilterProps {
  value: "all" | "active" | "inactive";
  onChange: (v: "all" | "active" | "inactive") => void;
}

export default function Filter({ value, onChange }: FilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as "all" | "active" | "inactive")}
      className="h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  );
}
