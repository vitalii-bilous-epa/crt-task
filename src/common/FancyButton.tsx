import { Loading } from "./Loading";

interface FancyButtonPRops {
  title: string;
  isProcessing?: boolean;
  onClick: () => void;
}

export const FancyButton = ({
  title,
  isProcessing,
  onClick,
}: FancyButtonPRops) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
        isProcessing && "opacity-65"
      }`}
      disabled={isProcessing}
      onClick={onClick}
    >
      {title}
      {isProcessing && <Loading size={4} inverse={true}/>}
    </button>
  );
};
