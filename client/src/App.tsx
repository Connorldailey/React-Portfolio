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
    <main className={`flex-grow-1 ${menuOpen ? 'blur' : ''}`}>
      <Outlet />
    </main>
  )
}

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationProvider>
        <div className="main-background">
          <div className="d-flex flex-column mx-lg-5 mx-md-4 mx-3">
            <Header />
            <MainContent />
            <Footer />
          </div>
        </div>
      </NavigationProvider>
    </ApolloProvider>
  );
}

export default App;