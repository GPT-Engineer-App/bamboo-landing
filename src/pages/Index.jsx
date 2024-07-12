import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaPlane, FaCalendarAlt, FaLanguage, FaUtensils } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <img src="/placeholder.svg" alt="Great Wall of China" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Wonders of China</h1>
          <p className="text-xl md:text-2xl mb-8">Explore the rich history, culture, and beauty of China</p>
          <Button size="lg">Plan Your Trip</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg" alt="Chinese Culture" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About China</h2>
              <p className="text-lg mb-4">
                China, with its vast landscape and rich 5,000-year history, is a land of wonders. From the towering peaks of the Himalayas to the fertile banks of the Yellow River, China's diverse geography is matched only by its cultural depth. Ancient traditions blend seamlessly with rapid modernization, creating a unique tapestry of experiences for visitors.
              </p>
              <p className="text-lg">
                As one of the world's oldest civilizations, China has given birth to invaluable contributions to science, philosophy, and the arts. Today, it stands as a global powerhouse, offering a glimpse into both its storied past and its dynamic future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Highlights of China</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Great Wall of China", description: "One of the world's greatest wonders, spanning over 13,000 miles." },
              { title: "Forbidden City", description: "Imperial palace complex at the heart of Beijing, home to Chinese emperors for 500 years." },
              { title: "Terracotta Army", description: "Thousands of life-size warriors and horses, guarding the tomb of China's first emperor." },
            ].map((highlight, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt={highlight.title} className="w-full h-48 object-cover mb-4 rounded" />
                  <CardDescription>{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Chinese Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaCalendarAlt className="text-4xl mb-4" />, title: "Festivals", description: "Experience vibrant celebrations like Chinese New Year and Mid-Autumn Festival." },
              { icon: <FaLanguage className="text-4xl mb-4" />, title: "Language", description: "Discover the beauty of Mandarin, with its tones and intricate characters." },
              { icon: <FaUtensils className="text-4xl mb-4" />, title: "Cuisine", description: "Savor diverse flavors from spicy Sichuan to delicate Cantonese dishes." },
              { icon: <FaPlane className="text-4xl mb-4" />, title: "Arts", description: "Admire traditional arts like calligraphy, painting, and opera." },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { tip: "Learn basic Mandarin phrases to navigate more easily." },
              { tip: "Always carry cash, as many places don't accept foreign credit cards." },
              { tip: "Download a VPN before your trip to access blocked websites." },
              { tip: "Try street food, but be cautious and choose busy stalls." },
              { tip: "Respect local customs and dress modestly when visiting temples." },
              { tip: "Be prepared for squat toilets in some public areas." },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <CardDescription>{item.tip}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Discover China</h3>
              <p>Explore the wonders of the Middle Kingdom</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Destinations</a></li>
                <li><a href="#" className="hover:text-gray-300">Travel Tips</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Discover China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;