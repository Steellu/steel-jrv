import { useState, useEffect, useRef } from 'react';
import { X, Play } from 'lucide-react';

export default function Processes() {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

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

  const processes = [
    {
      id: 1,
      name: 'Diseño de Alimentación',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Planificación técnica y diseño de sistemas de alimentación para procesos de fundición optimizados.'
    },
    {
      id: 2,
      name: 'Modelería',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Creación de modelos y patrones precisos para la reproducción exacta de piezas metálicas.'
    },
    {
      id: 3,
      name: 'Moldeo',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Formación de moldes de arena y otros materiales para recibir el metal fundido.'
    },
    {
      id: 4,
      name: 'Fusión',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Proceso de fundición del metal a altas temperaturas en hornos especializados.'
    },
    {
      id: 5,
      name: 'Colada',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Vertido controlado del metal fundido en los moldes preparados.'
    },
    {
      id: 6,
      name: 'Desplome',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Extracción y separación de las piezas fundidas de los moldes de arena.'
    },
    {
      id: 7,
      name: 'Acabados',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Pulido, limpieza y acabado superficial de las piezas fundidas.'
    },
    {
      id: 8,
      name: 'Tratamiento Térmico',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Procesos de calentamiento y enfriamiento para mejorar las propiedades mecánicas.'
    },
    {
      id: 9,
      name: 'Control de Calidad',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Inspección rigurosa y pruebas de calidad para garantizar especificaciones.'
    },
    {
      id: 10,
      name: 'Metal Mecánica',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      video: 'https://videos.pexels.com/video-files/3015479/3015479-uhd_2560_1440_30fps.mp4',
      description: 'Maquinado de precisión y acabado final de componentes metálicos.'
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedProcess(null);
    }
  };

  return (
    <section id="procesos" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Nuestros <span className="gradient-text">Procesos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada paso es ejecutado con precisión milimétrica y tecnología de vanguardia
          </p>
        </div>

        {/* Process Slider */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {processes.map((process) => (
                <div
                  key={process.id}
                  className="group cursor-pointer flex-shrink-0 w-80"
                  onClick={() => setSelectedProcess(process)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover-lift">
                    <div className="aspect-square relative">
                      <img
                        src={process.image}
                        alt={process.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-steel-orange rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-steel-orange transition-colors">
                        {process.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedProcess && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedProcess(null)}
              className="absolute -top-12 right-0 text-white hover:text-steel-orange transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <video
                className="w-full aspect-video"
                controls
                autoPlay
                src={selectedProcess.video}
              >
                Tu navegador no soporta el elemento video.
              </video>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {selectedProcess.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProcess.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}