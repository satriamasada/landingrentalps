import React, { useState } from 'react';
import { Clock, CheckCircle2, TrendingUp, Gamepad2 } from 'lucide-react';

const packagesData = {
  PS5: [
    { hours: 1, price: '15.000', popular: false },
    { hours: 2, price: '28.000', popular: false },
    { hours: 3, price: '40.000', popular: true },
    { hours: 4, price: '55.000', popular: false },
    { hours: 5, price: '70.000', popular: false },
    { hours: 24, price: '150.000', popular: false, isDaily: true },
  ],
  PS4: [
    { hours: 1, price: '10.000', popular: false },
    { hours: 2, price: '18.000', popular: false },
    { hours: 3, price: '25.000', popular: true },
    { hours: 4, price: '32.000', popular: false },
    { hours: 5, price: '40.000', popular: false },
    { hours: 24, price: '100.000', popular: false, isDaily: true },
  ]
};

const Packages = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState('PS5');
  const activePackages = packagesData[activeTab];

  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pilih Durasi Rental</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
            Makin lama main makin hemat! Pilih tipe konsol dan paket favorit kamu untuk pengalaman gaming yang maksimal.
          </p>
          
          <div style={{ display: 'inline-flex', backgroundColor: 'var(--surface)', padding: '8px', borderRadius: '12px', border: '1px solid var(--border)', gap: '8px' }}>
            <button 
              onClick={() => setActiveTab('PS5')}
              className={`btn ${activeTab === 'PS5' ? 'btn-primary' : 'btn-outline'}`}
              style={{ border: activeTab === 'PS5' ? 'none' : '1px solid transparent', padding: '10px 24px' }}
            >
              <Gamepad2 size={18} style={{ marginRight: '8px' }} /> PlayStation 5
            </button>
            <button 
              onClick={() => setActiveTab('PS4')}
              className={`btn ${activeTab === 'PS4' ? 'btn-primary' : 'btn-outline'}`}
              style={{ border: activeTab === 'PS4' ? 'none' : '1px solid transparent', padding: '10px 24px' }}
            >
              <Gamepad2 size={18} style={{ marginRight: '8px' }} /> PlayStation 4
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activePackages.map((pkg, idx) => (
            <div
              key={idx}
              className="card"
              style={{ position: 'relative', border: pkg.popular ? '2px solid var(--primary)' : undefined }}
            >
              {pkg.popular && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--primary)', color: 'white', fontSize: '0.75rem', padding: '4px 8px', borderBottomLeftRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                  <TrendingUp size={12} /> POPULAR
                </div>
              )}
              {pkg.isDaily && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: '#10b981', color: 'white', fontSize: '0.75rem', padding: '4px 8px', borderBottomLeftRadius: '8px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                  HARIAN
                </div>
              )}
              
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                <Clock size={24} />
                <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{pkg.hours} JAM</span>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.875rem' }}>Rp</span>
                <span style={{ fontSize: '2rem', fontWeight: 800, marginLeft: '4px' }}>{pkg.price}</span>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  `1 Set ${activeTab} + 2 Stik`,
                  pkg.isDaily ? 'Syarat KTP Asli' : 'Semua Game',
                  pkg.isDaily ? 'Deposit Wajib' : 'Antar Jemput'
                ].map((feature, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} className={pkg.isDaily ? 'text-[#10b981]' : 'text-primary'} /> 
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onSelectPackage(pkg.hours, activeTab)}
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', marginTop: '2rem' }}
              >
                Pilih
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Packages;
