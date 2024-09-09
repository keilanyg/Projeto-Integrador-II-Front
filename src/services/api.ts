import axios from 'axios';

export const apiAcervo = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const apiAcervoIFRN = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/',
});
export const apiAcervoUERN = axios.create({
  baseURL: 'http://127.0.0.1:8002/api/',
});
export const apiAcervoUFERSA = axios.create({
  baseURL: 'http://127.0.0.1:8003/api/',
});
