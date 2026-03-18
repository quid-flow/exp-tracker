const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-slate-950">

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Smart Financial Dashboard
        </h2>
      </div>

      <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-950 p-4 rounded-xl">
            <h3 className="text-green-400 text-xl font-bold">₹85,000</h3>
            <p className="text-slate-400 text-sm">Income</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl">
            <h3 className="text-red-400 text-xl font-bold">₹32,600</h3>
            <p className="text-slate-400 text-sm">Expenses</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl">
            <h3 className="text-blue-400 text-xl font-bold">₹52,400</h3>
            <p className="text-slate-400 text-sm">Savings</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardPreview;