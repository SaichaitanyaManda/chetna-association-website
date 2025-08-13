import { PenTool, Palette, Award, Scale } from "lucide-react";

const awards = [
  {
    icon: PenTool,
    title: "S. Tara Singh Hayer Journalism Award",
    description: "Recognizing excellence in journalism and media coverage of social justice issues."
  },
  {
    icon: Palette,
    title: "Arts & Literature Award",
    description: "Honoring artistic and literary contributions that promote social awareness."
  },
  {
    icon: Award,
    title: "Lifetime Achievement Award",
    description: "Celebrating lifelong dedication to social justice and community empowerment."
  },
  {
    icon: Scale,
    title: "Social Justice Award",
    description: "Recognizing outstanding contributions to social justice and equality."
  }
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Dr. Ambedkar Awards</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognizing individuals who exemplify Dr. Ambedkar's values of equality, justice, and social progress.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-chetna-red rounded-full mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{award.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}