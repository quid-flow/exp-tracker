import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Take Control of Your Financial Future
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Start tracking your income and expenses today with a secure and modern financial management experience.
        </p>

        <Link
          to="/signup"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl shadow-lg shadow-blue-500/30"
        >
          Start Tracking Today
        </Link>

      </div>
    </section>
  );
};

export default CTA;