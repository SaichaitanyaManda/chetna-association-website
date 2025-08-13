import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { format } from "date-fns";

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Events & Programs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join us at our upcoming events and be part of meaningful conversations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover">
              {event.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center text-chetna-red mb-2">
                  <Calendar size={16} />
                  <span className="ml-2 text-sm font-medium">
                    {format(new Date(event.date), 'MMM dd, yyyy')}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock size={14} />
                    <span className="ml-2 text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={14} />
                    <span className="ml-2 text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users size={14} />
                    <span className="ml-2 text-sm">{event.attendees} attending</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-chetna-red hover:bg-chetna-red-dark"
                  data-testid={`button-event-${event.id}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}