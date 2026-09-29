import Homepage from "./components/Homepage";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Pixelgrade from "./components/Pixelgrade";
import Tim from "./components/Tim";
import Reinvent from "./components/Reinvent";
import Design from "./components/Design";
import Caring from "./components/Caring";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Clients />
      <Community />
      <Pixelgrade />
      <Reinvent />
      <Design />
      <Tim />
      <Caring />
      <Footer />
    </div>
  );
}
