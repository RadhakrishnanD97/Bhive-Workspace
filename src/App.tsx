import logo from './assets/logo.png';
import phone from './assets/phone.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="bhive-logo" alt="Bhive Logo" />
        <div className='phone-wrapper'>
          <img src={phone} className="phone" alt="phone" />
        </div>
      </header>
    </div>
  );
}

export default App;
