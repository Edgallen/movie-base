export const kinopoiskUrl: string = 'https://kinopoiskapiunofficial.tech/api/v2.2';
export const kinopoiskStaffUrl: string = 'https://kinopoiskapiunofficial.tech/api/v1';

export const checkResponse = (res: Response) => {
  if (res && res.ok) {
     return res.json()
 }
 return Promise.reject(`Что-то пошло не так, статус ответа: ${res.status}`);
};