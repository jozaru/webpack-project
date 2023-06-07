import "../styles/index.scss";
import Recepes from "./Recipes";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh, Hi React</h1>
        </section>
      </main>
      <Recepes />
    </>
  );
};

export default App;
