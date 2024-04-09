import { useMemo, useState } from "react";
import {
  useAddTaskMutation,
  useGetTasksQuery,
  useRemoveReportMutation,
} from "../services/serverApi";
import { CustomAccordeon } from "../common/CustomAccordeon";
import { generateTask } from "../utils/generators";
import { TaskWrapper } from "./TaskWrapper";
import { Loading } from "../common/Loading";

interface ServerReport {
  id: string;
  name: string;
  reportId: string;
}

export const ReportWrapper = ({ id, title }: { id: string; title: string }) => {
  const [isPereventLoading, setPereventLoading] = useState(true);
  const { data = [], isFetching } = useGetTasksQuery(id, {
    skip: isPereventLoading,
  });
  const [addTask] = useAddTaskMutation();
  const [removeReport] = useRemoveReportMutation();

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
      onAddNewChild={() => addTask({ reportId: id, name: generateTask() })}
      onDelete={() => removeReport(id)}
    >
      {processedData.map(({ id, title }) => (
        <TaskWrapper key={id} id={id} title={title} />
      ))}
      {isFetching && <Loading />}
    </CustomAccordeon>
  );
};
