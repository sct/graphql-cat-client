import React from 'react';
import ApolloClient from 'apollo-boost';
import { Router } from '@reach/router';
import { ApolloProvider } from '@apollo/react-hooks';
import RandomCat from './components/RandomCat';
import Layout from './components/Layout';
import Search from './components/Search';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <RandomCat path="/" />
          <Search path="/search" />
        </Router>
      </Layout>
    </ApolloProvider>
  );
};

export default App;
