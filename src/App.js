import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
    </div>
  );
}

export default App;
