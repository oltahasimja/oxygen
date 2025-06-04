import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Add scroll animations when component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.menu-section, .logo-section').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="menu-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-line">BAR</div>
          <div className="logo-line">RESTAURANT</div>
          <div className="logo-main">OXYGEN</div>
        </div>

        {/* Menu Sections */}
        <div className="menu-section">
          <h2 className="section-title">APPETIZERS</h2>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Truffle Arancini</h3>
                <p>Crispy risotto balls with black truffle & fontina fondue</p>
              </div>
              <div className="item-price">$14</div>
            </div>
          </div>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606755962777-d340e236f4a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Scallop Crudo</h3>
                <p>Day boat scallops, blood orange, fennel, chili oil</p>
              </div>
              <div className="item-price">$16</div>
            </div>
          </div>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Foie Gras Torchon</h3>
                <p>Brioche toast, cherry compote, pistachio dust</p>
              </div>
              <div className="item-price">$22</div>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2 className="section-title">MAINS</h2>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Dry-Aged Ribeye</h3>
                <p>400g 35-day aged beef, bone marrow butter, heirloom carrots</p>
              </div>
              <div className="item-price">$42</div>
            </div>
          </div>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Wild Mushroom Risotto</h3>
                <p>Arborio rice, seasonal mushrooms, white truffle oil, parmesan</p>
              </div>
              <div className="item-price">$26</div>
            </div>
          </div>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Pan-Seared Halibut</h3>
                <p>Wild-caught halibut, saffron broth, seasonal vegetables</p>
              </div>
              <div className="item-price">$34</div>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <h2 className="section-title">DESSERTS</h2>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Chocolate Soufflé</h3>
                <p>Valrhona dark chocolate, crème anglaise, gold leaf</p>
              </div>
              <div className="item-price">$14</div>
            </div>
          </div>
          
          <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563729782294-d2d51f3b5a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80')" }}></div>
            <div className="item-content">
              <div className="item-details">
                <h3>Honey Lavender Crème Brûlée</h3>
                <p>Vanilla bean custard, caramelized sugar crust</p>
              </div>
              <div className="item-price">$12</div>
            </div>
          </div>
        </div>

        <div className="menu-footer">
          <p>Vegetarian & Vegan options available • Please inform us of any allergies</p>
          <p>OXYGEN RESTAURANT • 123 GASTRONOMY LANE • RESERVATIONS (555) 123-4567</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      <div className="decorative-leaf leaf-1">❧</div>
      <div className="decorative-leaf leaf-2">❧</div>
    </div>
  );
}

export default App;