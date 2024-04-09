import { useMemo, useState } from "react";
import { useGetReportsQuery, useRemoveClientMutation } from "../services/serverApi";
import { ReportWrapper } from "./ReportWrapper";
import { CustomAccordeon } from "../common/CustomAccordeon";

interface ServerReport {
  id: string;
  name: string;
  clientId: string;
}

export const ClientWrapper = ({ id, title }: { id: string; title: string }) => {
  const [isPereventLoading, setPereventLoading] = useState(false);
  const { data = [] } = useGetReportsQuery(id, {
    skip: isPereventLoading,
  });
  const [removeUser] = useRemoveClientMutation()
  const processedData = useMemo(() => {
    return (data as ServerReport[]).map(({ id, name }) => ({
      id,
      title: name,
    }));
  }, [data]);

  return (
    <CustomAccordeon
      title={title}
      childType="report"
      onToogle={(isOpen) => setPereventLoading(!isOpen)}
      onAdd={() => {}}
      onDelete={() => removeUser(id)}
    >
      {processedData.map(({ id, title }) => (
        <ReportWrapper id={id} title={title} />
      ))}
    </CustomAccordeon>
  );
};
