import { XMarkIcon } from "@heroicons/react/16/solid";
import { MouseEvent } from "react";

interface CloseIconProps {
  size?: number;
  onClick: (e: MouseEvent) => void;
}

export const CloseIcon = ({ size = 4, onClick = () => {} }: CloseIconProps) => {
  return (
    <XMarkIcon
      className={`w-${size} cursor-pointer rounded-md hover:text-gray-700`}
      onClick={onClick}
    />
  );
};
