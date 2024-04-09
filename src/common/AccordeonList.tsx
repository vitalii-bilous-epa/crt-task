import { Accordion } from "flowbite-react/components/Accordion";
import { FancyButton } from "./FancyButton";

export interface AccordeonListProps {
  title: string;
  type: string;
  childType?: string;
  list?: Pick<AccordeonListProps, "childType" | "title" | "type" | "list">[];
  onAdd: (id: string, type: string) => void;
  onDelete: (id: string, type: string) => void;
}

export const AccordeonList = ({
  list,
  title,
  childType,
  type,
  onAdd,
  onDelete,
}: AccordeonListProps) => {
  return (
    <Accordion className="mt-3" collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          <span
            className="mr-5 cursor-pointer"
            onClick={() => onDelete(title, type)}
          >
            X
          </span>
          {title}
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex justify-between">
            <span>{title}</span>
            <FancyButton
              title={`Add ${childType}`}
              onClick={() => onAdd(title, type)}
            />
          </div>
          {list?.map((el) => {
            return el.list ? (
              <AccordeonList
                key={el.title}
                title={el.title}
                list={el.list}
                type={el.type}
                childType={el.childType}
                onAdd={onAdd}
                onDelete={onDelete}
              />
            ) : (
              <p key={title}>
                <span
                  className="mr-3 cursor-pointer"
                  onClick={() => onDelete(el.title, el.type)}
                >
                  x
                </span>
                {el.title}
              </p>
            );
          })}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
