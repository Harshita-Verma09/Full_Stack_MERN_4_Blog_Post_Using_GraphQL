
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import App from "./App";

console.log(" Main.jsx loaded");

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

console.log(" Apollo Client Created:", client);

const rootElement = document.getElementById("root");
console.log(" Root Element:", rootElement);

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {console.log(" ApolloProvider wrapping App")}
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
