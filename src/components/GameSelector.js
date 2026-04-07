import React from 'react';
import { Play } from 'lucide-react';

const games = [
  { title: 'Spider-Man 2', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=600', tag: 'Action' },
  { title: 'EA Sports FC 24', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600', tag: 'Sports' },
  { title: 'Elden Ring', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600', tag: 'RPG' },
  { title: 'God of War', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=600', tag: 'Adventure' },
  { title: 'Resident Evil 4', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600', tag: 'Horror' },
  { title: 'Gran Turismo 7', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600', tag: 'Racing' },
  { title: 'Ghost of Tsushima', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600', tag: 'Action' }
];

const GameSelector = () => {
  return (
    <section id="games" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Library Games</h2>
            <p className="text-muted" style={{ maxWidth: '600px' }}>Geser untuk melihat koleksi game terlengkap dan terbaru kami.</p>
          </div>
          <div>
            <button className="btn btn-outline" style={{ borderRadius: '100px' }}>Lihat Semua Game</button>
          </div>
        </div>

        <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem' }}>
          {games.map((game, idx) => (
            <div key={idx} style={{ flex: '0 0 240px', position: 'relative', borderRadius: '16px', overflow: 'hidden', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border)' }}>
              <div style={{ aspectRatio: '3/4' }}>
                <img src={game.image} alt={game.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px', backgroundImage: 'linear-gradient(to top, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.6) 50%, transparent)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{game.tag}</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSelector;
