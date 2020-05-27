import { createClient } from 'react-fetching-library';

import { requestHostInterceptor } from './requestHostInterceptor';


const HOST = process.env.REACT_APP_API;

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST!)],
});
