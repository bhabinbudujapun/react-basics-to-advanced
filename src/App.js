import HooksExpepriment from "./components/hooksexperiment/HooksExperiment";
import PropsExperiment from "./components/propsexperiment/PropsExperiment";

function App() {
  const user = {
    uname: "Rehan Roy",
    ubio: "I started my business with a passion for solving a problem. Through hard work and dedication, I turned my idea into a thriving company that provides value to our customers.",
    ulink: "click here",
  };

  return (
    <>
      <HooksExpepriment />
      <PropsExperiment userinfo={user} />
    </>
  );
}

export default App;
