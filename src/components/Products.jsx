import { useState, useEffect, useRef } from 'react';
import { X, Package, Beaker, Thermometer, Ruler } from 'lucide-react';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const products = [
    {
      id: 1,
      name: 'Componentes Automotrices',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg',
      type: 'Hierro Gris',
      composition: 'C: 3.2-3.8%, Si: 2.0-2.8%, Mn: 0.6-1.0%',
      applications: 'Bloques de motor, tambores de freno, discos',
      weight: '0.5 - 50 kg',
      tolerance: '±0.2mm',
      hardness: '180-220 HB'
    },
    {
      id: 2,
      name: 'Piezas Aeroespaciales',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg',
      type: 'Aluminio A356',
      composition: 'Al: 92%, Si: 7%, Mg: 0.3%',
      applications: 'Componentes estructurales, carcasas',
      weight: '0.1 - 15 kg',
      tolerance: '±0.1mm',
      hardness: '80-95 HB'
    },
    {
      id: 3,
      name: 'Válvulas Industriales',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      type: 'Acero Inoxidable 316',
      composition: 'Cr: 16-18%, Ni: 10-14%, Mo: 2-3%',
      applications: 'Industria química, petroquímica',
      weight: '1 - 25 kg',
      tolerance: '±0.15mm',
      hardness: '150-200 HB'
    },
    {
      id: 4,
      name: 'Engranajes de Precisión',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      type: 'Acero al Carbono SAE 1045',
      composition: 'C: 0.43-0.50%, Mn: 0.60-0.90%',
      applications: 'Transmisiones, maquinaria pesada',
      weight: '0.5 - 20 kg',
      tolerance: '±0.05mm',
      hardness: '200-250 HB'
    },
    {
      id: 5,
      name: 'Componentes Navales',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg',
      type: 'Bronce Naval',
      composition: 'Cu: 88%, Sn: 10%, Zn: 2%',
      applications: 'Hélices, válvulas marinas',
      weight: '2 - 100 kg',
      tolerance: '±0.3mm',
      hardness: '120-160 HB'
    },
    {
      id: 6,
      name: 'Herramientas de Corte',
      image: 'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg',
      type: 'Acero para Herramientas D2',
      composition: 'C: 1.4-1.6%, Cr: 11-13%, V: 1.1%',
      applications: 'Matrices, punzones, cuchillas',
      weight: '0.1 - 5 kg',
      tolerance: '±0.02mm',
      hardness: '58-62 HRC'
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
      setSelectedProduct(null);
    }
  };

  return (
    <section id="productos" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones metalúrgicas de precisión para diversas industrias
          </p>
        </div>

        {/* Products Slider */}
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
            <div className="flex space-x-8 pb-4" style={{ width: 'max-content' }}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer flex-shrink-0 w-96"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden hover-lift shadow-lg">
                    <div className="relative aspect-video">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      
                      {/* Overlay Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-steel-orange text-white px-3 py-1 rounded-full text-sm inline-block mb-2">
                          {product.type}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 text-sm mb-4">
                        {product.applications}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-steel-orange font-semibold">
                          {product.weight}
                        </span>
                        <span className="text-gray-500">
                          Ver detalles →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-12 right-0 text-white hover:text-steel-orange transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-square lg:aspect-auto">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Details */}
                <div className="p-8">
                  <div className="bg-steel-orange text-white px-4 py-2 rounded-full text-sm inline-block mb-4">
                    {selectedProduct.type}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    {selectedProduct.name}
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Composition */}
                    <div className="flex items-start space-x-3">
                      <Beaker className="w-6 h-6 text-steel-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Composición Química</h4>
                        <p className="text-gray-600">{selectedProduct.composition}</p>
                      </div>
                    </div>
                    
                    {/* Applications */}
                    <div className="flex items-start space-x-3">
                      <Package className="w-6 h-6 text-steel-orange mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Aplicaciones</h4>
                        <p className="text-gray-600">{selectedProduct.applications}</p>
                      </div>
                    </div>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Ruler className="w-5 h-5 text-steel-yellow" />
                          <span className="text-gray-800 font-semibold">Peso</span>
                        </div>
                        <p className="text-gray-600">{selectedProduct.weight}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Thermometer className="w-5 h-5 text-steel-red" />
                          <span className="text-gray-800 font-semibold">Dureza</span>
                        </div>
                        <p className="text-gray-600">{selectedProduct.hardness}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-gray-800 font-semibold mb-2">Tolerancia</h4>
                      <p className="text-gray-600">{selectedProduct.tolerance}</p>
                    </div>
                  </div>
                </div>
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