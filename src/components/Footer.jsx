import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 metal-effect rounded-lg flex items-center justify-center overflow-hidden">
                {/* Placeholder for logo image - replace src with actual logo */}
                <img 
                  src="./Steel-logo.png" 
                  alt="Steel JRV Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-steel-orange font-bold text-2xl hidden">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Steel JRV</h3>
                <p className="text-gray-400">Fundición de Precisión</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Líderes en procesos de fundición metalúrgica con más de 25 años de experiencia, 
              ofreciendo soluciones de calidad mundial para diversas industrias.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-steel-orange hover:bg-gray-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Procesos', href: '#procesos' },
                { name: 'Productos', href: '#productos' },
                { name: 'Clientes', href: '#clientes' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-steel-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-steel-orange mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Av. Industrial 1234<br />
                  Guadalajara, Jalisco<br />
                  C.P. 44940
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-steel-blue flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  +52 (33) 1234-5678
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-steel-yellow flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  info@steeljrv.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Steel JRV. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Calidad ISO 9001
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}