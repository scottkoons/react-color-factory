import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App({ colors }) {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes colors={colors} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: [
    { name: 'navy', value: '#173251' },
    { name: 'slate-blue', value: '#5396B3' },
    { name: 'cream', value: '#F8F6F3' },
    { name: 'beige', value: '#F1D9CB' },
    { name: 'tan', value: '#F4D69E' },
  ],
};

export default App;
