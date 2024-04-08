function App() {
  return (
    <div className="flex flex-col max-w-lg m-auto">
      <h2 className="font-bold text-center my- text-2xl">Task overview</h2>
      <div className="flex justify-between my-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add new user
        </button>
        <input
          type="text"
          className="block rounded-md min-w-24 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default App;
