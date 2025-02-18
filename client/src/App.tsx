import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const MainContent: React.FC = () => {
  const { menuOpen } = useNavigation();
  return (
    <main className={`p-lg-5 p-md-4 p-3 flex-grow-1 ${menuOpen ? 'blur' : ''}`}>
      <Outlet />
    </main>
  )
}

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationProvider>
        <div className="main-background d-flex flex-column">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </NavigationProvider>
    </ApolloProvider>
  );
}

export default App;