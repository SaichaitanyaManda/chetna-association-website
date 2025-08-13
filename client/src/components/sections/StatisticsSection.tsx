import { useCounter } from "@/hooks/use-counter";

const stats = [
  { number: 50, label: "Years of Impact", suffix: "+" },
  { number: 1000, label: "Community Members", suffix: "+" },
  { number: 25, label: "Awards Given", suffix: "" },
  { number: 15, label: "Partner Organizations", suffix: "" }
];

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-chetna-red">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCounter(stat.number, 2000);
            
            return (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {count}{stat.suffix}
                </div>
                <div className="text-red-100 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}