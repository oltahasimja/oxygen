
import './App.css'

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🍕 Olta’s Restaurant Menu</h1>
      <h2>Starters</h2>
      <ul>
        <li>Bruschetta - $5.00</li>
        <li>Garlic Bread - $4.00</li>
      </ul>

      <h2>Main Courses</h2>
      <ul>
        <li>Pizza Margherita - $10.00</li>
        <li>Spaghetti Carbonara - $12.00</li>
      </ul>

      <h2>Desserts</h2>
      <ul>
        <li>Tiramisu - $6.00</li>
        <li>Gelato - $5.00</li>
      </ul>

      <h2>Drinks</h2>
      <ul>
        <li>Water - $2.00</li>
        <li>Red Wine - $6.00</li>
      </ul>
    </div>
  );
}

export default App;
