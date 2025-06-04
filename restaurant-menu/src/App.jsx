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
        name: "Oxygen Bruschetta", 
        description: "Tomato, basil, garlic on toasted bread", 
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Warm Bread Basket", 
        description: "Freshly baked with herb-infused olive oil", 
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Crispy Calamari", 
        description: "With lemon aioli and spicy marinara", 
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    mains: [
      { 
        name: "Truffle Oxygen Pizza", 
        description: "Mozzarella, wild mushrooms, truffle oil", 
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Seafood Pasta", 
        description: "Fresh catch with garlic white wine sauce", 
        price: "$16.00",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Herb-Crusted Salmon", 
        description: "With seasonal vegetables and lemon butter", 
        price: "$18.00",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    desserts: [
      { 
        name: "Molten Chocolate Cake", 
        description: "With vanilla bean ice cream", 
        price: "$7.50",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Honey Lavender Panna Cotta", 
        description: "With fresh berries", 
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Citrus Olive Oil Cake", 
        description: "With whipped mascarpone", 
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ],
    drinks: [
      { 
        name: "Signature Oxygen Cocktail", 
        description: "Gin, elderflower, cucumber, mint", 
        price: "$9.00",
        image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Organic Wine Selection", 
        description: "Ask server for today's selection", 
        price: "$8.00+",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      { 
        name: "Artisanal Coffee & Tea", 
        description: "Locally roasted and sourced", 
        price: "$4.00",
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
          <p className="tagline">Breathe in the flavor</p>
          <div className="scroll-indicator">
            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`menu-nav ${isScrolled ? 'sticky' : ''}`}>
        <button onClick={() => setActiveCategory('all')} className={activeCategory === 'all' ? 'active' : ''}>All Menu</button>
        <button onClick={() => setActiveCategory('starters')} className={activeCategory === 'starters' ? 'active' : ''}>Starters</button>
        <button onClick={() => setActiveCategory('mains')} className={activeCategory === 'mains' ? 'active' : ''}>Mains</button>
        <button onClick={() => setActiveCategory('desserts')} className={activeCategory === 'desserts' ? 'active' : ''}>Desserts</button>
        <button onClick={() => setActiveCategory('drinks')} className={activeCategory === 'drinks' ? 'active' : ''}>Drinks</button>
      </nav>

      {/* Menu Sections */}
      <main className="menu-container">
        {(activeCategory === 'all' || activeCategory === 'starters') && (
          <section className="menu-section fade-in">
            <div className="section-header">
              <h2>STARTERS</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.starters.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
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
              <h2>MAIN COURSES</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.mains.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
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
              <h2>DESSERTS</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
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
              <h2>DRINKS</h2>
              <div className="divider"></div>
            </div>
            <div className="menu-items">
              {menuItems.drinks.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedItem(item)}>
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
            <h3>OXYGEN RESTAURANT</h3>
            <p>123 Fresh Air Boulevard</p>
            <p>Reservations: (555) 123-4567</p>
            <p>Open: Tue-Sun, 5pm-11pm</p>
          </div>
          <div className="social-links">
            <span>Follow us:</span>
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