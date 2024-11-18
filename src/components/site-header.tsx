"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './Button';
import HeroCTA from './HeroCTA';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Synthiq Logo-3.png"
            alt="Synthiq Logo"
            width={150}
            height={60}
            className="h-13 w-auto"
            priority
          />
        </div>
        <nav className="space-x-4">
  <Link href="#features">
    <Button
      variant="ghost"
      className="text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110"
    >
      Features
    </Button>
  </Link>
  <Link href="#contact">
    <Button
      variant="ghost"
      className="text-lg font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110"
    >
      Contact
    </Button>
  </Link>
  <HeroCTA />
</nav>

      </div>
    </header>
  );
};

export default Header;
