import { ClientsSection } from "./wrappers/CleintsSection";

const App = () => {
  return (
    <div className="flex flex-col max-w-lg m-auto">
      <h2 className="font-bold text-center my- text-2xl">Task overview</h2>
      <ClientsSection />
    </div>
  );
};

export default App;
