import "./App.css";
import Row from "./component/Row";
import request from "./constant/request";
import Banner from "./component/Banner";
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      {/* nav bar*/}
      {/* Banner */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={request.fetchNetflixOrignal}
        isLargeRow
      />
      <Row title="Tranding Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comeady Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default App;
