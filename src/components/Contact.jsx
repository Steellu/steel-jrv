import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para hacer realidad tu próximo proyecto metalúrgico
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-steel-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Av. Industrial 1234<br />
                      Zona Industrial, Guadalajara<br />
                      Jalisco, México C.P. 44940
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-steel-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-1">Teléfonos</h4>
                    <p className="text-gray-600">
                      +52 (33) 1234-5678<br />
                      +52 (33) 8765-4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-steel-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@steeljrv.com<br />
                      ventas@steeljrv.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-steel-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-gray-800 font-semibold mb-1">Horarios</h4>
                    <p className="text-gray-600">
                      Lun - Vie: 8:00 AM - 6:00 PM<br />
                      Sáb: 8:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={``}>
            <div className="bg-white p-4 rounded-2xl shadow-lg h-full overflow-hidden">
              <div className="aspect-video rounded-xl overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.8477865485447!2d-103.39182482577975!3d20.65250948097958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae906a5b7b3b%3A0x1a5a5b1a5a5b1a5a!2sGuadalajara%2C%20Jal.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}