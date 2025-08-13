import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Chetna Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-chetna-red">Chetna</span>
              </h1>
              <p className="text-red-600 dark:text-red-400 text-lg uppercase tracking-wider">Association of Canada</p>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Empowering communities, promoting equality and 
              <span className="text-chetna-red"> social justice</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Raising awareness about caste-based issues globally and creating casteless, respectful and inclusive communities through dialogues, discussions, and education.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                data-testid="button-learn-more"
                className="bg-chetna-red text-white px-8 py-4 rounded-lg hover:bg-chetna-red-dark transition-colors font-medium"
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
              <Button 
                data-testid="button-view-awards"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-chetna-red hover:text-chetna-red transition-colors font-medium"
                onClick={() => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Awards
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                 alt="Community gathering for social justice" 
                 className="rounded-2xl shadow-2xl w-full h-auto" />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-chetna-red">
                  <Counter target={25} />
                </div>
                <div className="text-gray-600 text-sm">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}