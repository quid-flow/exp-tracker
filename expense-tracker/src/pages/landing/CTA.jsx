import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-24 px-6 text-center">

      <div className="absolute inset-0 bg-blue-600/20 blur-3xl"></div>

      <div className="relative max-w-xl mx-auto space-y-6">

        <h2 className="text-4xl font-bold">
          Start Managing Your Money Today
        </h2>

        <Link
          to="/signup"
          className="inline-block px-8 py-4 bg-blue-600 rounded-xl hover:scale-110 transition"
        >
          Get Started
        </Link>

      </div>

    </section>
  );
};

export default CTA;