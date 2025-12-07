import { Dock, Home, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, Text, ImageViewer, Contact } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageViewer />
      <Contact />
      <Home />
    </main>
  );
};

export default App;