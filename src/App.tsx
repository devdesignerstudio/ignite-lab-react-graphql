import { useEffect } from "react"
import { client } from "./lib/apollo";
import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { Event } from "./pages/Event";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";

const cl = console.log;

// const GET_LESSONS_QUERY =  gql`
//   query {
//     lessons {
//     id
//     slug
//     title
//     teacher {
//       name
//       bio
//       avatarURL
//     }
//   }
//   }
// `
// interface Lesson {
//   id : string;
//   title: string;
//   slug: string;
// }

function App() {

// const {  data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
// cl(data);
// useEffect( () => {
//   client.query({
//     query: GET_LESSONS_QUERY,
//   }).then(response => {
//     cl(response.data)
//   })
// }, [] ) 

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
     </ApolloProvider>
  )
}

export default App
