import "./App.css";
import Developer from "./components/Developer";

function App() {
  const devs = [
    {
      name: "Carlos",
      age: 25,
      country: "Brasil",
    },
    {
      name: "Rebeca",
      age: 41,
      country: "EUA",
    },
    {
      name: "Sidney",
      age: 32,
      country: "Austrália",
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-devs">
          {devs.map((dev) => (
            <Developer name={dev.name} age={dev.age} country={dev.country} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
