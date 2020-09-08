import axios from 'axios';

export async function postData(url: string, data: Object, methods?: Object) {
  const response = await axios.post(url, data, {
    timeout: 5000,
    ...methods
  });
  return response.data;
}

export async function fetchData(url: string, methods?: any) {
  const response = await axios.get(url, {
    timeout: 5000,
    ...methods
  });
  return response.data;
}
