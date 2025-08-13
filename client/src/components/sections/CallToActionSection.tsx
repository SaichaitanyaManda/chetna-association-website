import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/Layout";

export default function CallToActionSection() {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="py-20 bg-chetna-red">
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
        <p className="text-xl text-red-100 mb-8">
          Be part of the movement towards a more just, inclusive, and equitable society. 
          Together, we can create lasting change in our communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            data-testid="button-volunteer"
            onClick={openContactModal}
            className="bg-white text-chetna-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Volunteer With Us
          </Button>
          <Button 
            data-testid="button-donate"
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-chetna-red transition-colors font-medium"
          >
            Make a Donation
          </Button>
        </div>
      </div>
    </section>
  );
}