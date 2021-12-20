import Total from "./composants/Total";
import Articles from "./composants/Articles";
import Formulaire from "./composants/Formulaire";
import Bouton from "./composants/Bouton";

function App() {
  return (
    <div className="container">
        <header className="row">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fs-4">
                Démo Redux
              </h1> 
              <Total/>
            </div> 
        </header>
        <hr />
        <section className="row">
          <div className="col-6">
              <Articles />
          </div>
          <div className="col-6">
              <h2>Formulaire ... </h2>
              <Formulaire />
          </div>
        </section>
        <section className="row">
          <Bouton />
        </section>

    </div>
  );
}

export default App;
