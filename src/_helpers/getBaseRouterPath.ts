import { BASE_API_PATH } from "./../index";

export const getBaseRouterPath = (collectionName: string): string => {
  return `${BASE_API_PATH}/${collectionName}`;
};
