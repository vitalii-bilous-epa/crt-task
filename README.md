Clients-reports-tasks

How to run the project:

0. Fresh:
  `yarn`
1. Run client
  `yarn dev`
2. Run server
   `npx json-server ./server/db.json5`

Done
- implemented CRD from CRUD for clients, reports and task;
- displaying error messages (for clients only)
- optimized request sequence in terms of active IU elements (if accordion has a hidden section - don't do a request of children elements data)
- data invalidating (for CR from CRUD)
- polling (for clients only)

TODO
- add invalidation for deleting data (requires parent id in action function)
- the current structure of components does not seem well: I would move control over adding and displaying elements of one type in one component
