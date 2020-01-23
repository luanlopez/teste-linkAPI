import axios from 'axios';

const api = axios.create({
  baseURL: `linkapi2.pipedrive.com/v1/deals?status=won&start=0&api_token=64d40673728c6c235de07f8cbb6324d29e8f2b09`
});

export default api;
