import './App.scss';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/assets/logo.png' className="bhive-logo" alt="Bhive Logo" />
        <div className='phone-wrapper'>
          <img src='/assets/phone.png' className="phone" alt="phone" />
        </div>
      </header>
      <Content />
    </div>
  );
}

export default App;
