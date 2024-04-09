// import { AccordeonList } from "./AccordeonList";
import { useMemo } from "react";
import { FancyButton } from "./common/FancyButton";
// import { getDataTree } from "./model";
import { ClientWrapper } from "./wrappers/ClientWrapper";
import { useAddClientMutation, useGetClientsQuery } from "./services/serverApi";
import { generateClient } from "./utils/generators";

interface ServerReport {
  id: string;
  name: string;
}

function App() {
  // const data = getDataTree();
  const { data = [] } = useGetClientsQuery("");
  const processedData = useMemo(() => {
    return (data as ServerReport[]).map(({ id, name }) => ({
      id,
      title: name,
    }));
  }, [data]);

  const [createUser] = useAddClientMutation();

  return (
    <div className="flex flex-col max-w-lg m-auto">
      <h2 className="font-bold text-center my- text-2xl">Task overview</h2>
      <div className="flex justify-between my-4">
        <FancyButton
          title="Add new user"
          onClick={() => createUser(generateClient())}
        />
        <input
          type="text"
          className="block rounded-md min-w-24 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <div>
          {/* Old variNT */}
          {/* {data.list.map(({ list, title, childType, type }) => {
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
          })} */}
          {processedData.map(({ id, title }) => (
            <ClientWrapper id={id} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
