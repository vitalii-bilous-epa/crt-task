import { useMemo, useState } from "react";
import {
  useAddReportMutation,
  useGetReportsQuery,
  useRemoveClientMutation,
} from "../services/serverApi";
import { ReportWrapper } from "./ReportWrapper";
import { CustomAccordion } from "../common/CustomAccordion";
import { generateReport } from "../utils/generators";
import { Loading } from "../common/Loading";
import { ReportServerResponse } from "../types";

export const ClientWrapper = ({ id, title }: { id: string; title: string }) => {
  const [isPereventLoading, setPereventLoading] = useState(true);
  const { data = [], isFetching } = useGetReportsQuery(id, {
    skip: isPereventLoading,
  });
  const [removeUser] = useRemoveClientMutation();
  const [addReport] = useAddReportMutation();

  const processedData = useMemo(() => {
    return (data as ReportServerResponse[]).map(({ id, name }) => ({
      id,
      title: name,
    }));
  }, [data]);

  return (
    <CustomAccordion
      title={title}
      childType="report"
      onToogle={(isOpen) => setPereventLoading(!isOpen)}
      onAddNewChild={() => addReport({ name: generateReport(), clientId: id })}
      onDelete={() => removeUser(id)}
    >
      {processedData.map(({ id, title }) => (
        <ReportWrapper id={id} title={title} />
      ))}
      {isFetching && <Loading />}
    </CustomAccordion>
  );
};
