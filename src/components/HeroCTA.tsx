import React from 'react';
import { Button } from './Button';
import Link from 'next/link';

const HeroCTA: React.FC = () => {
  return (
    <Link href="https://synthiq.io/contact-us/">
      <Button variant="solid">
        <span className="text-white">Get Started</span> {/* White text */}
      </Button>
    </Link>
  );
};

export default HeroCTA;
