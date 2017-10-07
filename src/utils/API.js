// REACT_APP_ROOT_URL defined in .env.development 
export const rootUrl = process.env.REACT_APP_ROOT_URL  || `http://localhost:3001`

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': '???',
}
