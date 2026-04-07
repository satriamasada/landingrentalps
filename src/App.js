import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import GameSelector from './components/GameSelector';
import PaymentInfo from './components/PaymentInfo';
import Footer from './components/Footer';
import { X, Send } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    package: '',
    console: 'PlayStation 5',
    games: '',
    address: ''
  });

  const handleBooking = (e) => {
    e.preventDefault();
    const message = `Halo LevelUp PS! Saya mau booking rental:%0A%0A- Nama: ${bookingData.name}%0A- Unit: ${bookingData.console}%0A- Paket: ${bookingData.package}%0A- Game: ${bookingData.games}%0A- Alamat: ${bookingData.address}%0A%0ATolong segera diproses ya!`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    setShowModal(false);
  };


  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <Navbar onBookingClick={() => setShowModal(true)} />
      
      <main style={{ flexGrow: 1 }}>
        <Hero onBookingClick={() => setShowModal(true)} />
        <Packages onSelectPackage={(pkg, consoleType) => {
          setBookingData({ ...bookingData, package: `${pkg} JAM`, console: consoleType === 'PS4' ? 'PlayStation 4' : 'PlayStation 5' });
          setShowModal(true);
        }} />
        <GameSelector />
        <PaymentInfo />
      </main>

      <Footer />

      {/* Booking Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div 
            onClick={() => setShowModal(false)}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)' }}
          />
          
          <div className="card" style={{ position: 'relative', width: '100%', maxWidth: '420px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', zIndex: 10, padding: '24px' }}>
            <button 
              onClick={() => setShowModal(false)}
              className="text-muted"
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'inline-block', padding: '4px 8px', borderRadius: '4px', backgroundColor: 'var(--primary)', color: 'white', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                Booking Form
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Pesan Sekarang</h3>
              <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '4px' }}>Masukan data Anda untuk konfirmasi pesanan via WhatsApp.</p>
            </div>

            <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="text-muted" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  placeholder="Contoh: Budi Santoso"
                  style={{ width: '100%', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', color: 'var(--text-main)', fontSize: '0.875rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="text-muted" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Paket Rental</label>
                  <select 
                    value={bookingData.package}
                    onChange={(e) => setBookingData({...bookingData, package: e.target.value})}
                    style={{ width: '100%', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', color: 'var(--text-main)', fontSize: '0.875rem', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="" disabled>Pilih Paket</option>
                    <option value="1 JAM">1 JAM</option>
                    <option value="2 JAM">2 JAM</option>
                    <option value="3 JAM">3 JAM</option>
                    <option value="4 JAM">4 JAM</option>
                    <option value="5 JAM">5 JAM</option>
                    <option value="24 JAM">24 JAM (Harian)</option>
                  </select>
                </div>
                <div>
                  <label className="text-muted" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Unit Konsol</label>
                  <select 
                    value={bookingData.console}
                    onChange={(e) => setBookingData({...bookingData, console: e.target.value})}
                    style={{ width: '100%', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', color: 'var(--text-main)', fontSize: '0.875rem', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="PlayStation 5">PlayStation 5</option>
                    <option value="PlayStation 4">PlayStation 4</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-muted" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, display: 'block', marginBottom: '6px' }}>List Games / Catatan</label>
                <input 
                  required
                  type="text" 
                  value={bookingData.games}
                  onChange={(e) => setBookingData({...bookingData, games: e.target.value})}
                  placeholder="Spider-Man 2, FC 24, dst..."
                  style={{ width: '100%', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', color: 'var(--text-main)', fontSize: '0.875rem', outline: 'none' }}
                />
              </div>

              <div>
                <label className="text-muted" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Alamat Pengiriman</label>
                <textarea 
                  required
                  rows="2"
                  value={bookingData.address}
                  onChange={(e) => setBookingData({...bookingData, address: e.target.value})}
                  placeholder="Jl. Mawar No. 123, Blok C..."
                  style={{ width: '100%', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', color: 'var(--text-main)', fontSize: '0.875rem', outline: 'none', resize: 'none' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.875rem' }}>
                <Send size={16} /> KONFIRMASI KE WHATSAPP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
