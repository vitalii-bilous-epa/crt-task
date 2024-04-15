import { FancyButton } from "../common/FancyButton";
import {
  useAddTaskMutation,
  useGetTasksQuery,
  useRemoveTaskMutation,
} from "../services/serverApi";
import { CloseIcon } from "../common/CloseIcon";
import { TasksServerResponse } from "../types";
import { Loading } from "../common/Loading";
import { generateTask } from "../utils/generators";

export interface TasksSectionProps {
  parentName: string;
  parentId: string;
}

export const TasksSection = ({ parentName, parentId }: TasksSectionProps) => {
  const { data = [], isFetching } = useGetTasksQuery(parentId);
  const [addElement, { isLoading: isAdding }] = useAddTaskMutation();
  const [removeElement, { isLoading: isRemoving }] = useRemoveTaskMutation();

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <span>{parentName}</span>
        <FancyButton
          title={`Add data`}
          onClick={() => addElement({ parentId, name: generateTask() })}
          isProcessing={isAdding}
        />
      </div>
      {(data as TasksServerResponse[]).map(({ id, name }) => (
        <div key={id} className={`flex ${isRemoving && "opacity-65"}`}>
          {name} <CloseIcon onClick={() => removeElement({ id, parentId })} />
        </div>
      ))}
      {(isFetching || isRemoving) && <Loading />}
    </div>
  );
};
