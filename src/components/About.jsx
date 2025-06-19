import { useEffect, useRef, useState } from 'react';
import { Target, Eye, History, Award, Users, Cog, Shield, Lightbulb, Heart, Leaf } from 'lucide-react';

export default function About() {
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

  const stats = [
    { icon: Award, value: '25+', label: 'Años de Experiencia' },
    { icon: Users, value: '500+', label: 'Clientes Satisfechos' },
    { icon: Cog, value: '10', label: 'Procesos Especializados' },
  ];

  return (
    <section id="nosotros" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            <span className="gradient-text">Acerca de</span> Steel JRV
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Forjando el futuro de la industria metalúrgica con innovación, precisión y excelencia desde 1998
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover-lift">
              <stat.icon className="w-12 h-12 text-steel-orange mx-auto mb-4" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
                alt="Steel JRV Facilities"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-blue/30 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Mission */}
            <div className="bg-white p-4 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-steel-orange mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Proporcionar soluciones metalúrgicas de vanguardia mediante procesos de fundición 
                de precisión, superando las expectativas de nuestros clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-4 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center mb-2">
                <Eye className="w-5 h-5 text-steel-blue mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Ser la empresa líder en fundición metalúrgica a nivel nacional e internacional, 
                reconocida por nuestra innovación tecnológica y excelencia operacional.
              </p>
            </div>

            {/* History */}
            <div className="bg-white p-4 rounded-xl shadow-lg hover-lift">
              <div className="flex items-center mb-2">
                <History className="w-5 h-5 text-steel-yellow mr-3" />
                <h3 className="text-lg font-bold text-gray-800">Historia</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Fundada en 1998 por los hermanos Rodríguez Vega, Steel JRV ha evolucionado 
                hasta convertirse en una empresa de clase mundial.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Calidad', 
                desc: 'Compromiso con la excelencia en cada proceso',
                icon: Shield,
                image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg'
              },
              { 
                title: 'Innovación', 
                desc: 'Tecnología de vanguardia y mejora continua',
                icon: Lightbulb,
                image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg'
              },
              { 
                title: 'Integridad', 
                desc: 'Transparencia y ética en todas nuestras relaciones',
                icon: Heart,
                image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
              },
              { 
                title: 'Sustentabilidad', 
                desc: 'Responsabilidad ambiental y social',
                icon: Leaf,
                image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
              },
            ].map((value, index) => (
              <div key={index} className="text-center bg-white rounded-lg hover-lift overflow-hidden shadow-lg">
                <div className="relative h-32">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-steel-orange" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-steel-orange mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}