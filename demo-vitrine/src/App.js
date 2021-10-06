import Header from './component/Header.js';
import Home from './component/Home.js'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
