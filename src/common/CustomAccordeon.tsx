import { useEffect, useState } from "react";
import { FancyButton } from "./FancyButton";

export interface AccordeonTemplateProps {
  title: string;
  // type: string;
  childType?: string;
  children: React.ReactNode;
  onToogle?: (state: boolean) => void
  onAdd: () => void;
  onDelete: () => void;
}

export const CustomAccordeon = ({
  title,
  childType,
  onToogle,
  onAdd,
  onDelete,
  children,
}: AccordeonTemplateProps) => {
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    onToogle && onToogle(isActive)
  }, [isActive, onToogle])

  const onTitleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mt-8 border border-gray-200">
      <div
        className="w-full bg-gray-100 p-4 flex justify-between"
        onClick={onTitleClick}
      >
        <span className="mr-5 cursor-pointer" onClick={onDelete}>
          X
        </span>
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
            <FancyButton title={`Add ${childType}`} onClick={onAdd} />
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
