import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '40px 0' }}>
      <div className="container grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }} className="md:justify-start">
            <Gamepad2 size={24} className="text-primary" />
            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>LEVELUP PS</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.875rem' }}>
            Rental PlayStation terpercaya dengan layanan antar jemput.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }} className="md:justify-end text-muted">
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
          <a href="#packages" style={{ color: 'inherit', textDecoration: 'none' }}>Packages</a>
          <a href="#games" style={{ color: 'inherit', textDecoration: 'none' }}>Games</a>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '40px', borderTop: '1px solid var(--border)', paddingTop: '20px', textAlign: 'center' }}>
        <p className="text-muted" style={{ fontSize: '0.75rem' }}>&copy; 2026 LevelUp Rental PS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
