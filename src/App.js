import './App.css';
import Views from './Views/Views'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Views />
      </div>
    </div>
  );
}

export default App;
