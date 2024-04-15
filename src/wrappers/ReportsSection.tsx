import { FancyButton } from "../common/FancyButton";
import {
  useAddReportMutation,
  useGetReportsQuery,
  useRemoveReportMutation,
} from "../services/serverApi";
import { ReportServerResponse } from "../types";
import { Loading } from "../common/Loading";
import { generateTask } from "../utils/generators";
import { TasksSection } from "./TasksSection";
import { CustomAccordionV2 } from "../common/CustomAccordionV2";

export interface ReportsSectionProps {
  parentName: string;
  parentId: string;
}

export const ReportsSection = ({
  parentName,
  parentId,
}: ReportsSectionProps) => {
  const { data = [], isFetching } = useGetReportsQuery(parentId);
  const [addElement, { isLoading: isAdding }] = useAddReportMutation();
  const [removeElement, { isLoading: isRemoving }] = useRemoveReportMutation();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <span>{parentName}</span>
        <FancyButton
          title={`Add report`}
          onClick={() =>
            addElement({ parentId, name: generateTask() })
          }
          isProcessing={isAdding}
        />
      </div>
      {(data as ReportServerResponse[]).map(({ id, name }) => (
        <CustomAccordionV2
          key={id}
          title={name}
          onDelete={() => removeElement({ id, parentId })}
        >
          <TasksSection parentId={id} parentName={name} />
        </CustomAccordionV2>
      ))}
      {(isFetching || isRemoving) && <Loading />}
    </div>
  );
};
