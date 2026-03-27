import { useEffect, useState } from "react";
import apiHelper from "../../api/apiHelper";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await apiHelper.get("/dashboard");
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* TOP CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-slate-900 p-6 rounded-xl">
          <p className="text-slate-400">Balance</p>
          <h2 className="text-2xl font-bold text-blue-500">₹{data.balance}</h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <p className="text-slate-400">Income</p>
          <h2 className="text-2xl font-bold text-green-400">₹{data.income}</h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <p className="text-slate-400">Expense</p>
          <h2 className="text-2xl font-bold text-red-400">₹{data.expense}</h2>
        </div>

      </div>

      {/* TRANSACTIONS */}
      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

        {data.transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between border-b border-slate-800 py-2"
          >
            <span>{t.title}</span>
            <span className={t.amount > 0 ? "text-green-400" : "text-red-400"}>
              ₹{t.amount}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Dashboard;