import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    starters: [
      { 
        name: "Supa", 
        description: "Supë tradicionale me mish viçi dhe perime të freskëta", 
        price: "4.50€",
        image: "supa.jpg"
      },
      { 
        name: "Paragjellë me mish të tymosur", 
        description: "Mish i tymosur me djathë dhe speca", 
        price: "6.00€",
        image: "paragjellamemishtetymosur.jpg"
      },
      { 
        name: "Paragjella", 
        description: "Chiken fingers dhe djathra", 
        price: "8.00€",
        image: "paragjella.jpg"
      },
      { 
        name: "Samun me Sugjuk", 
        description: "Samuni me sugjuk", 
        price: "8.00€",
        image: "samunmesugjukimbyllur.jpg"
      }
    ],
    mains: [
      { 
        name: "Pica Vegjetariane", 
        description: "Mozzarella, kërpudha, speca, domate", 
        price: "14.00€",
        image: "picavegjetariane.jpg"
      },
      { 
        name: "Pica 4 Stinët", 
        description: "kërpudha, kackavall, proshutë, ullinjë, origano, domate", 
        price: "16.00€",
        image: "picakaterstinet.jpg"
      },
      { 
        name: "Biftek", 
        description: "patate të fërguara me oriz dhe perime të fërguara", 
        price: "18.00€",
        image: "biftek.jpg"
      },
      { 
        name: "Peshk Koc", 
        description: "me oriz dhe perime të fërguara", 
        price: "18.00€",
        image: "peshkkosc.jpg"
      },
      { 
        name: "Skënderbeg Pule", 
        description: "me oriz dhe perime të fërguara", 
        price: "18.00€",
        image: "skenderbeg.jpg"
      },
      { 
        name: "Sallatë Pule", 
        description: "me oriz dhe perime të fërguara", 
        price: "18.00€",
        image: "sallatepule.jpg"
      }
    ],
    desserts: [
      { 
        name: "Llokuma", 
        description: "Ëmbëlsirë tradicionale me sherbet", 
        price: "3.50€",
        image: "llokuma.jpg"
      },
      { 
        name: "Petulla me mjaltë", 
        description: "Petulla të freskëta të serviruara me mjaltë", 
        price: "4.00€",
        image: "samunmesugjukimbyllur.jpg"
      },
      { 
        name: "Tave me qumësht", 
        description: "Ëmbëlsirë me qumësht, vezë dhe vanilje", 
        price: "3.80€",
        image: "mengjesmeveze.jpg"
      }
    ],
    drinks: [
      { 
        name: "Raki", 
        description: "Raki tradicionale shqiptare", 
        price: "3.00€",
        image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Verë e kuqe", 
        description: "Verë e kuqe nga vreshtat tona", 
        price: "4.00€",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Kafe turke", 
        description: "Kafe e përgatitur në mënyrë tradicionale", 
        price: "1.50€",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ]
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Hero Section with Animated Background */}
      <header className={`hero ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hero-content">
          <h1 className="restaurant-name">OXYGEN</h1>
          <p className="tagline">Shijoni kuzhinën autentike shqiptare</p>
          <div className="scroll-indicator">
            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`menu-nav ${isScrolled ? 'sticky' : ''}`}>
        <button onClick={() => setActiveCategory('all')} className={activeCategory === 'all' ? 'active' : ''}>E gjithë menuja</button>
        <button onClick={() => setActiveCategory('starters')} className={activeCategory === 'starters' ? 'active' : ''}>Paragjellë</button>
        <button onClick={() => setActiveCategory('mains')} className={activeCategory === 'mains' ? 'active' : ''}>Pjatë kryesore</button>
        <button onClick={() => setActiveCategory('desserts')} className={activeCategory === 'desserts' ? 'active' : ''}>Ëmbëlsira</button>
        <button onClick={() => setActiveCategory('drinks')} className={activeCategory === 'drinks' ? 'active' : ''}>Pije</button>
      </nav>

      {/* Menu Sections */}
      <main className="menu-container">
        {(activeCategory === 'all' || activeCategory === 'starters') && (
          <section className="menu-section fade-in">
            <div className="section-header">
              <h2>PARAGJELLË</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.starters.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
                  <div className="item-preview">
                    <img src={item.image} alt={item.name} className="thumbnail" />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeCategory === 'all' || activeCategory === 'mains') && (
          <section className="menu-section fade-in">
            <div className="section-header">
              <h2>PJATË KRYESORE</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.mains.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
                  <div className="item-preview">
                    <img src={item.image} alt={item.name} className="thumbnail" />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeCategory === 'all' || activeCategory === 'desserts') && (
          <section className="menu-section fade-in">
            <div className="section-header">
              <h2>ËMBËLSIRA</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
                  <div className="item-preview">
                    <img src={item.image} alt={item.name} className="thumbnail" />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeCategory === 'all' || activeCategory === 'drinks') && (
          <section className="menu-section fade-in">
            <div className="section-header">
              <h2>PIJE</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.drinks.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
                  <div className="item-preview">
                    <img src={item.image} alt={item.name} className="thumbnail" />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                  </div>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Food Item Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
            </div>
            <div className="modal-details">
              <h3>{selectedItem.name}</h3>
              <p className="modal-description">{selectedItem.description}</p>
              <p className="modal-price">{selectedItem.price}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>OXYGEN</h3>
            <p>Rruga e Cabratit, Gjakovë</p>
            <p>Rezervime: 7</p>
            <p>E hapur: E hëne - E dielë, 08:00 - 23:00</p>
          </div>
          <div className="social-links">
            <span>Na ndiqni:</span>
            <div className="social-icons">
              <a href="#instagram">📷</a>
              <a href="#facebook">👍</a>
              <a href="#twitter">🐦</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;