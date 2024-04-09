import { Accordion } from "flowbite-react/components/Accordion";
import { FancyButton } from "./FancyButton";

export interface AccordeonTemplateProps {
  title: string;
  type: string;
  childType?: string;
  children: React.ReactNode;
  onAdd: () => void;
  onDelete: () => void;
}

export const AccordeonTemplate = ({
  title,
  childType,
  children,
  onAdd,
  onDelete,
}: AccordeonTemplateProps) => {
  return (
    <Accordion className="mt-3" collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          <span className="mr-5 cursor-pointer" onClick={onDelete}>
            X
          </span>
          {title}
        </Accordion.Title>
        <Accordion.Content onChange={(...args) => console.log(">>> ", args)}>
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
