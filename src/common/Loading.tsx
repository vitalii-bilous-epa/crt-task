import { ArrowPathIcon } from "@heroicons/react/16/solid";

interface LoadingProps {
  size?: number;
  inverse?: boolean;
}

export const Loading = ({ size = 8, inverse = false }: LoadingProps) => {
  return (
    <div
      className={`w-${size} colo m-auto ${
        inverse ? "text-white" : "text-gray-500"
      } animate-spin`}
    >
      <ArrowPathIcon />
    </div>
  );
};
