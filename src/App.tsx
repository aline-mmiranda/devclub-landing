import { BonusModules } from "./sections/BonusModules/BonusModules";
import { Community } from "./sections/Community/Community";
import { Ecosystem } from "./sections/Ecosystem/Ecosystem";
import { Footer } from "./sections/Footer";
import { Formations } from "./sections/Formations/Formations";
import { GuaranteeFaq } from "./sections/GuaranteeFaq/GuaranteeFaq";
import { Header } from "./sections/Header/Header";
import { Hero } from "./sections/Hero/Hero";
import { MarketInsights } from "./sections/MarketInsights/MarketInsights";
import { Platform } from "./sections/Plataform";
import SocialProof from "./sections/SocialProof/SocialProof";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SocialProof />
        <Formations />
        <Ecosystem />
        <Platform />
        <Community />
        <BonusModules />
        <MarketInsights />
        <GuaranteeFaq />
      </main>

      <Footer />
    </>
  );
}

export default App;
