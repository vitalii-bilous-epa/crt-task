import { useRemoveTaskMutation } from "../services/serverApi";
import { CloseIcon } from "../common/CloseIcon";

export const TaskWrapper = ({ id, title }: { id: string; title: string }) => {
  const [removetask, { isLoading }] = useRemoveTaskMutation({});

  return (
    <div className={`flex ${isLoading && "opacity-65"}`}>
      {title} <CloseIcon onClick={() => removetask(id)} />
    </div>
  );
};
