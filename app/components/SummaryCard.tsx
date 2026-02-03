export default function SummaryCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white shadow-lg rounded p-4 text-center">

      <h2 className="text-black font-semibold">{title}</h2>
      <p className="text-black font-bold">{value}</p>
    </div>
  );
}
