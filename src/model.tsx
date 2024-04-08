export const getDataTree = () => {
  return {
    list: [
      {
        id: "1",
        title: "Client A",
        type: "client",
        childType: "report",
        list: [
          {
            id: "1",
            title: "Report1",
            type: "report",
            childType: "task",
            list: [
              {
                id: "1",
                title: "Task 1",
                type: "task",
              },
              {
                id: "2",
                title: "Task 2",
                type: "task",
              },
            ],
          },
          {
            id: "2",
            title: "Report2",
            type: "report",
            childType: "task",
            list: [
              {
                id: "3",
                title: "Task 3",
                type: "task",
              },
              {
                id: "4",
                title: "Task 4",
                type: "task",
              },
              {
                id: "5",
                title: "Task 5",
                type: "task",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Client B",
        type: "client",
        childType: "report",
        list: [
          {
            id: "3",
            title: "Report3",
            type: "report",
            childType: "task",
            list: [
              {
                id: "6",
                title: "Task 6",
                type: "task",
              },
              {
                id: "7",
                title: "Task 7",
                type: "task",
              },
            ],
          },
          {
            id: "4",
            title: "Report4",
            type: "report",
            childType: "task",
            list: [
              {
                id: "8",
                title: "Task 8",
                type: "task",
              },
              {
                id: "9",
                title: "Task 9",
                type: "task",
              },
              {
                id: "10",
                title: "Task 10",
                type: "task",
              },
            ],
          },
        ],
      },
    ],
  };
};
