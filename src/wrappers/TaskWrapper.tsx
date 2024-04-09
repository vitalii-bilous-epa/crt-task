import { useRemoveTaskMutation } from "../services/serverApi";

export const TaskWrapper = ({ id, title }: { id: string; title: string }) => {
  const [removetask, {isLoading}] = useRemoveTaskMutation();

  return (
    <div className={`${isLoading && "opacity-65"}`}>
      {title}{" "}
      <span
        className="cursor-pointer px-2 rounded-lg bg-red-100"
        onClick={() => removetask(id)}
      >
        x
      </span>
    </div>
  );
};
