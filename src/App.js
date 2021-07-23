import 'bootstrap/dist/css/bootstrap.min.css';
import Coldnavbar from './components/Navbar/Navbar';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Contactme from './components/Contactme/Contactme';
import Work from './components/Work/Work';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
   <Coldnavbar/>
   <Header/>
   <Aboutme/>
   <Work/>
   <Contactme/>
   <Footer/>
   </div>
  );
}

export default App;
