import { v1 as uuid } from "uuid";

const getGeneratedName = () => uuid().split('-')[0]

export const generateClient = () => {
  return `Client ${getGeneratedName()}`;
};

export const generateReport = () => {
  return `Report ${getGeneratedName()}`;
};

export const generateTask = () => {
  return `Task ${getGeneratedName()}`;
};
