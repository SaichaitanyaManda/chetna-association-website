const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Community event gathering"
  },
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Educational workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Award ceremony"
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Community volunteers"
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Discussion panel"
  },
  {
    url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cultural celebration"
  },
  // Duplicate for infinite scroll effect
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Community event gathering"
  },
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Educational workshop"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Community Gallery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Moments from our journey of building stronger, more inclusive communities
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="gallery-scroll flex space-x-6 w-max">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-60">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  data-testid={`gallery-image-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}