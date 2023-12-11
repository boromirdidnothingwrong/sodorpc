const client_id = '5679510b-6578-4240-b2a7-3e749f1e331a'
const client_secret = 'b56ab912bf4d4ddea8ef00f45e7f64dc-e55f5929b86f40a7b922c514e730a2a3-811a2f1c6bc04c8fad576f30b7760e29'
export async function fetchAccessToken({fetch}) {

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  let urlencoded = new URLSearchParams();
  urlencoded.append('grant_type',
 
'client_credentials');
  urlencoded.append('client_id', `${client_id}`);
  urlencoded.append(
    'client_secret',
    `${client_secret}`);

  urlencoded.append('scope', 'Project_Read Entry_Read Entry_Write ContentType_Read');

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
  };

  try {
    const response = await fetch('https://cms-staffscc.cloud.contensis.com/authenticate/connect/token', requestOptions);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};


export const accessToken = fetchAccessToken();