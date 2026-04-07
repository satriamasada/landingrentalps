import React, { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';

const Navbar = ({ onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container flex justify-between items-center" style={{ padding: '16px 20px' }}>
        <div className="flex items-center gap-4">
          <Gamepad2 size={28} className="text-primary" />
          <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>LEVELUP PS</span>
        </div>

        {/* Desktop Menu */}
        <div className="mobile-hide flex items-center gap-8">
          <a href="#home" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="#packages" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Packages</a>
          <a href="#games" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Games</a>
          <a href="#payment" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Payment</a>
          <button onClick={onBookingClick} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="desktop-hide btn btn-outline" style={{ padding: '8px' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }} className="desktop-hide">
          <a href="#home" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="#packages" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Packages</a>
          <a href="#games" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Games</a>
          <a href="#payment" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>Payment</a>
          <button onClick={() => { onBookingClick(); setIsOpen(false); }} className="btn btn-primary">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
