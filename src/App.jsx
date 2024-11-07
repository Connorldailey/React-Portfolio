import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="px-5 py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;