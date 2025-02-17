import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="main-background d-flex flex-column">
        <main className="p-lg-5 p-md-4 p-3 flex-grow-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;