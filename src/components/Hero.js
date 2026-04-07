import React from 'react';
import { Play } from 'lucide-react';

const Hero = ({ onBookingClick }) => {
  return (
    <section id="home" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-[var(--border)] pb-20">
          <div>
            <h1 className="animate-fade-up" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', opacity: 0 }}>
              Rental PS Tanpa <span className="text-primary">Ribet.</span>
            </h1>
            <p className="text-muted animate-fade-up delay-100" style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '480px', opacity: 0 }}>
              Nikmati sensasi gaming dengan koleksi game PS5 & PS4 terlengkap. Antar jemput unit langsung ke rumah Anda.
            </p>

            <div className="flex gap-4 mb-12 animate-fade-up delay-200" style={{ opacity: 0 }}>
              <button onClick={onBookingClick} className="btn btn-primary" style={{ padding: '16px 32px' }}>
                Mulai Rental
              </button>
              <a href="#games" className="btn btn-outline flex items-center gap-2">
                <Play size={18} /> Lihat Game
              </a>
            </div>

            <div className="flex gap-8 animate-fade-up delay-300" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', opacity: 0 }}>
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>50+</h4>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>Games</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>24h</h4>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>Delivery</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>4.9</h4>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>Rating</p>
              </div>
            </div>
          </div>

          <div className="animate-float">
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1000" 
                alt="PS5 Console" 
                style={{ width: '100%', borderRadius: '24px', position: 'relative', zIndex: 10, border: '1px solid var(--border)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
