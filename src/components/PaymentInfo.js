import React from 'react';
import { CreditCard, Copy, ShoppingBag, Gamepad, MessageSquare, Wallet } from 'lucide-react';

const PaymentInfo = () => {
  const steps = [
    { icon: <ShoppingBag size={24} />, title: 'Pilih Paket' },
    { icon: <Gamepad size={24} />, title: 'Pilih Games' },
    { icon: <MessageSquare size={24} />, title: 'Konfirmasi WA' },
    { icon: <Wallet size={24} />, title: 'Transfer' },
  ];

  return (
    <section id="payment" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Cara Pesan</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <div style={{ color: 'var(--primary)' }}>{step.icon}</div>
                  <div style={{ fontWeight: 600 }}>{idx + 1}. {step.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Info Pembayaran</h2>
            <div style={{ backgroundColor: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <CreditCard size={32} className="text-primary" />
                <span style={{ fontWeight: 800 }}>BCA</span>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '4px' }}>Nomor Rekening</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px' }}>1234 5678 90</div>
                  <button onClick={() => alert('Disalin')} className="btn btn-outline" style={{ padding: '8px' }}>
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div>
                <div className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '4px' }}>Atas Nama</div>
                <div style={{ fontWeight: 600 }}>LEVELUP RENTAL PS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
