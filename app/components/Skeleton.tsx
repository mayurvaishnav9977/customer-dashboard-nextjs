"use client";

export default function Skeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-6 bg-gray-300 rounded-md shadow-sm"
        ></div>
      ))}
    </div>
  );
}
