import { Accordion } from "flowbite-react/components/Accordion";
import { FancyButton } from "./FancyButton";
import { CloseIcon } from "./CloseIcon";

export interface AccordionTemplateProps {
  title: string;
  type: string;
  childType?: string;
  children: React.ReactNode;
  onAdd: () => void;
  onDelete: () => void;
}

export const AccordionTemplate = ({
  title,
  childType,
  children,
  onAdd,
  onDelete,
}: AccordionTemplateProps) => {
  return (
    <Accordion className="mt-3" collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          <CloseIcon onClick={onDelete} />
          {title}
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex justify-between">
            <span>{title}</span>
            <FancyButton title={`Add ${childType}`} onClick={onAdd} />
          </div>
          {children}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
