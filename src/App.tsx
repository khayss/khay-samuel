import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Overview } from "./components/Overview";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="w-full flex flex-col items-center dark:bg-gun-metal-light">
        <div className="w-full max-w-max-screen min-h-dvh pt-8 dark:bg-gun-metal dark:text-platinum">
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-center gap-6 md:gap-8 px-6 py-8">
            <AboutMe />
            <div className="w-full max-w-540x flex flex-col gap-6">
              <Overview />
              <Portfolio />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
