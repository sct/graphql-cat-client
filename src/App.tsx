import React from "react";
import ApolloClient from "apollo-boost";
import { Router } from "@reach/router";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import RandomCat from "./components/RandomCat";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <RandomCat path="/" />
      </Router>
    </ApolloProvider>
  );
};

export default App;
