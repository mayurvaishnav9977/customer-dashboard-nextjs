"use client";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by name or mobile"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-3/4 h-12 px-4 py-2 border border-gray-300 rounded-lg shadow-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
