import NavBar from "./features/NavBar";
import Language from "./features/Language";
import Input from "./features/Input";

function App() {
  return (
    <main className="mt-4 p-4 max-w-[1300px] mx-auto">
      <NavBar />
      <Language />
      <Input />
    </main>
  );
}

export default App;
