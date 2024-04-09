// import { AccordeonList } from "./AccordeonList";
import { useMemo, useState } from "react";
import { FancyButton } from "./common/FancyButton";
// import { getDataTree } from "./model";
import { ClientWrapper } from "./wrappers/ClientWrapper";
import { useAddClientMutation, useGetClientsQuery } from "./services/serverApi";
import { generateClient } from "./utils/generators";
import { Loading } from "./common/Loading";

interface ServerReport {
  id: string;
  name: string;
}

function App() {
  // const data = getDataTree();
  const { data = [], isFetching } = useGetClientsQuery("");
  const [clientFilter, setClientNameFilter] = useState("");
  const processedData = useMemo(() => {
    const rawProcessedData = (data as ServerReport[]).map(({ id, name }) => ({
      id,
      title: name,
    }));

    return clientFilter === ""
      ? rawProcessedData
      : rawProcessedData.filter(
          ({ title, id }) =>
            title.toLocaleLowerCase().includes(clientFilter) ||
            id.toLocaleLowerCase().includes(clientFilter)
        );
  }, [data, clientFilter]);

  const [createUser] = useAddClientMutation();

  return (
    <div className="flex flex-col max-w-lg m-auto">
      <h2 className="font-bold text-center my- text-2xl">Task overview</h2>
      <div className="flex justify-between my-4">
        <FancyButton
          title="Add client"
          onClick={() => createUser(generateClient())}
        />
        <input
          type="text"
          className="block rounded-md min-w-24 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) =>
            setClientNameFilter(e.target.value.toLocaleLowerCase())
          }
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
          {isFetching && <Loading />}
        </div>
      </div>
    </div>
  );
}

export default App;
