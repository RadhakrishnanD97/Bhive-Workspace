import './App.scss';
import Content from './components/Content/Content';
import DownloadApp from './components/DownloadApp/DownloadApp';
import SpaceOverviewWidget from './components/SpaceOverviewWidget/SpaceOverviewWidget';
import WorkplaceAmenities from './components/WorkplaceAmenities/WorkplaceAmenities';

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
      <WorkplaceAmenities />
      <SpaceOverviewWidget />
      <DownloadApp />
    </div>
  );
}

export default App;
