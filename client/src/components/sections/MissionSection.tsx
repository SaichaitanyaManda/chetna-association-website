import { Target, Users, Heart, Globe } from "lucide-react";

const missionPoints = [
  {
    icon: Target,
    title: "Our Vision",
    description: "A world where equality, dignity, and social justice prevail for all people, regardless of their background or circumstances."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building strong, inclusive communities through grassroots organizing, education, and collaborative partnerships."
  },
  {
    icon: Heart,
    title: "Social Impact",
    description: "Creating meaningful change through advocacy, awareness campaigns, and direct support to those facing discrimination."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Connecting local action with global movements for human rights, equality, and social progress worldwide."
  }
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Chetna Association of Canada is dedicated to raising awareness about caste-based issues 
            while promoting equality, dignity, and respectful and inclusive societies. We engage in dialogues, 
            education, and advocacy to foster understanding and create positive change in our communities.
          </p>
        </div>

        {/* Mission Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center group card-hover bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-16 h-16 bg-chetna-red bg-opacity-10 dark:bg-chetna-red dark:bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="text-chetna-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{point.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join Our Movement</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Together, we can build a more just and equitable society. Your voice and participation 
            make a difference in creating lasting change.
          </p>
        </div>
      </div>
    </section>
  );
}