import { Formations } from "./sections/Formations/Formations";
import { Header } from "./sections/Header/Header";
import { Hero } from "./sections/Hero/Hero";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Formations />
      </main>
    </>
  );
}

export default App;
