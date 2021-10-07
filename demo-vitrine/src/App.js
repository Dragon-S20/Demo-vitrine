import Header from './component/Header.js';
import Home from './component/Home.js'
import Footer from './component/Footer.js'
import Contact from './component/Contact.js'
import Card from './component/Card.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        </header>
        <Home />
        <Card />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
