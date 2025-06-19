import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-100"
          autoPlay
          muted
          loop
          playsInline
          poster="./imagenportada.jpg"
        >
          <source src="./videoportada.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <br /><br />
        {/* Company Logo */}
        <div className={`mb-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex justify-center mb-2 m-t-6">
            {/* Company Logo - replace src with actual logo */}
            <img 
              src="./STEEL-LOGO-HERO.png" 
              alt="Steel JRV Logo" 
              className="w-80 h-60 lg:w-80 lg:h-60 object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-48 h-48 lg:w-64 lg:h-64 hidden items-center justify-center">
              <span className="text-6xl lg:text-8xl font-bold gradient-text">JRV</span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Fundición de Precisión
        </p>

        {/* Description */}
        <p className={`text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Líderes en procesos de fundición con tecnología de vanguardia, 
          entregando soluciones metalúrgicas de la más alta calidad para la industria mundial.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => document.getElementById('procesos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-steel-blue to-steel-orange px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Conoce Nuestros Procesos
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            className="group glass-effect px-8 py-4 rounded-full text-gray-800 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center border border-gray-300"
          >
            <Play className="w-5 h-5 mr-2" />
            Ver Productos
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-steel-orange transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button> */}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-steel-orange/10 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-steel-blue/10 rounded-full blur-xl animate-float hidden lg:block" style={{animationDelay: '-2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-steel-red/10 rounded-full blur-xl animate-float hidden lg:block" style={{animationDelay: '-4s'}}></div>
    </section>
  );
}