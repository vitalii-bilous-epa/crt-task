// import { AccordeonList } from "./AccordeonList";
import { AccordeonList } from "./AccordeonList";
import { FancyButton } from "./common/FancyButton";
import { getDataTree } from "./model";

function App() {
  const data = getDataTree();

  return (
    <div className="flex flex-col max-w-lg m-auto">
      <h2 className="font-bold text-center my- text-2xl">Task overview</h2>
      <div className="flex justify-between my-4">
        <FancyButton title="Add new user" onClick={() => {}} />
        <input
          type="text"
          className="block rounded-md min-w-24 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <div>
          {data.list.map(({ list, title, childType, type }) => {
            return (
              <AccordeonList
                key={title}
                list={list}
                type={type}
                title={title}
                childType={childType}
                onAdd={() => {}}
                onDelete={() => {}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
