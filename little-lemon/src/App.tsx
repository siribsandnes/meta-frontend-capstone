import "./App.css";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import Nav from "./components/layout/nav/nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
