import { useEffect, useRef, useState } from 'react';

export default function Clients() {
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

  // Logos de empresas (usando SVGs simples como placeholder)
  const clients = [
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
    { name: 'FUCSA', src: './LOGO-FUCSA.png' },
  ];

  return (
    <section id="clientes" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            <span className="gradient-text">Clientes</span> que Confían
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas líderes de la industria que han elegido Steel JRV para sus proyectos más importantes
          </p>
        </div>

        {/* Infinite Slider */}
        <div className={`relative  delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* First Row - Left to Right */}
          <div className="flex animate-scroll-left mb-8">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-6 w-32 h-32 bg-white rounded-2xl flex items-center justify-center hover-lift shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-steel-orange rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg"><img src={client.src}/></span>
                  </div>
                  <p className="text-xs text-gray-600 text-center">{client.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex animate-scroll-right">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-6 w-32 h-32 bg-white rounded-2xl flex items-center justify-center hover-lift shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-steel-orange to-steel-red rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-lg"><img src={client.src}/></span>
                  </div>
                  <p className="text-xs text-gray-600 text-center">{client.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8  delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold gradient-text mb-2">99.8%</div>
            <p className="text-gray-600">Tasa de Satisfacción</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <p className="text-gray-600">Proyectos Completados</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold gradient-text mb-2">25+</div>
            <p className="text-gray-600">Países Atendidos</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}