import { Accordion } from "flowbite-react";

interface AccordeonListProps {
  title: string;
  list: AccordeonListProps[] | string[];
}

export const AccordeonList = ({ list, title }: AccordeonListProps) => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>{title}</Accordion.Title>
        <Accordion.Content>
          {list.map((el) =>
            typeof el !== "string" ? (
              <AccordeonList key={el.title} title={el.title} list={el.list} />
            ) : (
              <p>{el}</p>
            )
          )}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
