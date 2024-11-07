import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="p-lg-5 p-md-4 p-3 flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;