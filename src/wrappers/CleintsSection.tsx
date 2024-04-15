import { FancyButton } from "../common/FancyButton";
import {
  useAddClientMutation,
  useGetClientsQuery,
  useRemoveClientMutation,
} from "../services/serverApi";
import { ClientsServerResponse } from "../types";
import { Loading } from "../common/Loading";
import { generateClient } from "../utils/generators";
import { DEF_POLLING_INTERVAL } from "../constatnts";
import { useMemo, useState } from "react";
import { ReportsSection } from "./ReportsSection";
import { Error } from "../common/Error";
import { CustomAccordionV2 } from "../common/CustomAccordionV2";

export const ClientsSection = () => {
  const {
    data = [],
    isFetching,
    isError,
    refetch,
  } = useGetClientsQuery(null, {
    pollingInterval: DEF_POLLING_INTERVAL,
    skipPollingIfUnfocused: true,
  });
  const [clientFilter, setClientNameFilter] = useState("");
  const processedData = useMemo(() => {
    const rawProcessedData = (data as ClientsServerResponse[]).map(
      ({ id, name }) => ({
        id,
        title: name,
      })
    );

    return clientFilter === ""
      ? rawProcessedData
      : rawProcessedData.filter(
          ({ title, id }) =>
            title.toLocaleLowerCase().includes(clientFilter) ||
            id.toLocaleLowerCase().includes(clientFilter)
        );
  }, [data, clientFilter]);
  const [addElement, { isLoading: isAdding }] = useAddClientMutation();
  const [removeElement, { isLoading: isRemoving }] = useRemoveClientMutation();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <FancyButton
          title="Add client"
          onClick={() => addElement(generateClient())}
          isProcessing={isAdding}
        />
        <input
          type="text"
          className="block rounded-md min-w-24 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) =>
            setClientNameFilter(e.target.value.toLocaleLowerCase())
          }
        />
      </div>
      {processedData.map(({ id, title }) => (
        <CustomAccordionV2
          key={id}
          title={title}
          onDelete={() => removeElement(id)}
        >
          <ReportsSection parentId={id} parentName={title} />
        </CustomAccordionV2>
      ))}
      {(isFetching || isRemoving) && <Loading />}
      {!isFetching && isError && (
        <Error text="Something went wrong with clients request" cta={refetch} />
      )}
    </div>
  );
};
