import { ERROR_STUB } from 'constants/misc';

/*
 * errorString - entity related info
 * example error message: Unfortunately there was an error getting the tournaments (Request failed with status code 403)
 * ERROR_STUB - Unfortunately there was an error
 * errorString - getting the services
 * error.message - original message from catch block
 */
export const errorHandler = (error: any, errorString: string) => {
  const message: string = `${ERROR_STUB} ${errorString} (${
    error?.response?.data?.detail || error.message
  })`;

  alert(message);
};
