import { Zap, BarChart, Shield } from "lucide-react";

const features = [
  { title: "Real-Time Tracking", icon: <Zap />, desc: "Track instantly" },
  { title: "Insights", icon: <BarChart />, desc: "Visual analytics" },
  { title: "Secure", icon: <Shield />, desc: "Encrypted data" },
];

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">Powerful Tools</h2>
        <p className="text-slate-400 mb-12">Everything you need</p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f,i)=>(
            <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:scale-105 transition">
              <div className="text-blue-500 mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;