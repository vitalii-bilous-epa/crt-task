import { useEffect, useState } from "react";
import { CloseIcon } from "./CloseIcon";

export interface CustomAccordionV2Props {
  title: string;
  children: React.ReactNode;
  onToogle?: (state: boolean) => void;
  onDelete: () => void;
}

export const CustomAccordionV2 = ({
  title,
  onToogle,
  onDelete,
  children,
}: CustomAccordionV2Props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    onToogle && onToogle(isActive);
  }, [isActive, onToogle]);

  const onTitleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mt-8 border border-gray-200">
      <div
        className="w-full bg-gray-100 p-4 flex justify-between"
        onClick={onTitleClick}
      >
        <CloseIcon
          onClick={(e) => {
            e.stopPropagation();

            onDelete();
          }}
        />
        {title}
        <span
          className={`inline-block cursor-pointer ${isActive && "rotate-180"}`}
        >
          ^
        </span>
      </div>
      {isActive && children}
    </div>
  );
};
