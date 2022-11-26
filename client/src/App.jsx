
import { Navbar, Landing, Footer, Roadmap, Nifty } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-black">
      <Navbar />
      <Landing />
    </div>
    <Roadmap />
    <Nifty />
    <Footer />
  </div>
);

export default App;
