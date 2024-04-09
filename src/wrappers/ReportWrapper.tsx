import { useMemo, useState } from "react";
import { useGetTasksQuery } from "../services/serverApi";
import { CustomAccordeon } from "../common/CustomAccordeon";

interface ServerReport {
  id: string;
  name: string;
  reportId: string;
}

export const ReportWrapper = ({ id, title }: { id: string; title: string }) => {
  const [isPereventLoading, setPereventLoading] = useState(false);

  const { data = [] } = useGetTasksQuery(id, {
    skip: isPereventLoading,
  });
  const processedData = useMemo(() => {
    return (data as ServerReport[]).map(({ id, name }) => ({
      id,
      title: name,
    }));
  }, [data]);

  return (
    <CustomAccordeon
      title={title}
      childType="task"
      onToogle={(isOpen) => setPereventLoading(!isOpen)}
      onAdd={() => {}}
      onDelete={() => {}}
    >
      {processedData.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </CustomAccordeon>
  );
};
