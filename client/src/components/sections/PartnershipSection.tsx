import { GraduationCap, University, Users, Newspaper } from "lucide-react";

const partnerships = [
  {
    icon: University,
    name: "Simon Fraser University",
    description: "Institute for the Humanities"
  },
  {
    icon: GraduationCap,
    name: "University of British Columbia",
    description: "Various Departments"
  },
  {
    icon: Users,
    name: "Dr. Hari Sharma Foundation",
    description: "Community Partnership"
  },
  {
    icon: Newspaper,
    name: "Indo-Canadian Times",
    description: "Media Partnership"
  }
];

export default function PartnershipSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Partnerships</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Working together with leading institutions and organizations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {partnerships.map((partner, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-chetna-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <partner.icon className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{partner.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}