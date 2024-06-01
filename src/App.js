import Navigation from "./components/Navigation";

function App() {
  const routing = [
    {
      id: 1,
      path: "/",
      title: "Dashboard"
    },
    {
      id: 2,
      path: "/details",
      title: "Szczegóły"
    }
  ];

  return <div className="min-h-screen flex flex-col items-center">
    <Navigation routing={routing} />
  </div>;
}

export default App;
