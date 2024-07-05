import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';


const API_KEY = process.env.EXPO_PUBLIC_STEPZEN_API_KEY;

const client = new ApolloClient({
  uri: 'https://bedoegoel.us-east-a.ibm.stepzen.net/api/icypossum/__graphql',

  headers: {
    Authorization: 'apikey bedoegoel::local.net+1000::88cb49d7f99e00168bb5063977843a922d577a99294b4bb9e46a59f9a133b286',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;