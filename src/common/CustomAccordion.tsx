import { useEffect, useState } from "react";
import { FancyButton } from "./FancyButton";
import { CloseIcon } from "./CloseIcon";

export interface AccordionTemplateProps {
  title: string;
  childType?: string;
  children: React.ReactNode;
  onToogle?: (state: boolean) => void;
  onAddNewChild: () => void;
  onDelete: () => void;
}

export const CustomAccordion = ({
  title,
  childType,
  onToogle,
  onAddNewChild,
  onDelete,
  children,
}: AccordionTemplateProps) => {
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
      {isActive && (
        <div className="p-4">
          <div className="flex justify-between">
            <span>{title}</span>
            <FancyButton title={`Add ${childType}`} onClick={onAddNewChild} />
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
