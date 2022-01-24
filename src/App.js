import "./App.css";
import View3D from "./pages/View3D/View3D";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const pathname = window.location.pathname;

  return (
    <div>
      {pathname === "/" ? <HomePage /> : <View3D pathname={pathname} />}
    </div>
  );
}

export default App;
