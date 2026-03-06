const stats = [
  {
    value: "10K+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Secure Infrastructure",
  },
  {
    value: "Real-Time",
    label: "Data Processing",
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-blue-500 mb-3">
              {stat.value}
            </h3>
            <p className="text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;