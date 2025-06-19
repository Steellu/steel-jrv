import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#procesos', label: 'Procesos' },
    { href: '#productos', label: 'Productos' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-steel-blue shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 metal-effect rounded-lg flex items-center justify-center overflow-hidden">
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
              <span className="text-steel-orange font-bold text-xl lg:text-2xl hidden">S</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white">Steel JRV</h1>
              <p className="text-xs text-gray-200 hidden lg:block">Fundición de Precisión</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-steel-orange transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-white">
              <Phone className="w-4 h-4 text-steel-orange" />
              <span>+51 917983581</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white">
              <Mail className="w-4 h-4 text-steel-orange" />
              <span>ventas@steeljrv.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-steel-orange transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-steel-blue border-t border-white/20">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-steel-orange transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/20">
                <div className="flex flex-col space-y-2 text-sm text-white">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-steel-orange" />
                    <span>+51 917983581</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-steel-orange" />
                    <span>info@steeljrv.com</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}