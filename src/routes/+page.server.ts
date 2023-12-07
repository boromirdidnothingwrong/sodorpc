const projectURL:string = "https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil"
const bearer:string = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSIsImtpZCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSJ9.eyJpc3MiOiJodHRwczovL2Ntcy1zdGFmZnNjYy5jbG91ZC5jb250ZW5zaXMuY29tL2F1dGhlbnRpY2F0ZSIsImF1ZCI6Imh0dHBzOi8vY21zLXN0YWZmc2NjLmNsb3VkLmNvbnRlbnNpcy5jb20vYXV0aGVudGljYXRlL3Jlc291cmNlcyIsImV4cCI6MTcwMTg2ODI1MSwibmJmIjoxNzAxODY0NjUxLCJjbGllbnRfaWQiOiJhNjU4N2JmNy0yMTlkLTQyYzAtYjYzMy1jNTBiZjljODk3MWIiLCJjbGllbnRfc3ViIjoiYTY1ODdiZjctMjE5ZC00MmMwLWI2MzMtYzUwYmY5Yzg5NzFiIiwiY2xpZW50X3VzZXJuYW1lIjoidGVzdGluZ0pvc2giLCJzY29wZSI6WyJFbnRyeV9SZWFkIiwiUHJvamVjdF9SZWFkIl19.KbfLH_XzwjFBJfpA39FAHatNH3VLnyvP756ueZrwK0tRHfoY_-HPqERJteVjLnhIE7Kk5mVLuCVDLPlYR5lhlLT47e6wbTRPOBywgrm8IjT5qo5ichhm-XxTS1BZhX-6bOXJg3J4BRZi5Gf-NohZY8ubhMMrszMhBRQHpuV4HmfROTnyvStDiX8HxLbUZwgBYPyseWcGlPaNcyIQEWMBRU2G7it3lVypPBEk3Ku38c1ZVfdUM9Bd1UYqz9AhAaRWoTkiYZMAq79SFQnIVFt1HcL4iGarj-ol3js01RSw5mUH0tyhK3lSCdD92ZtW7rb1iqVQ695lnbIWvLAQwAsaQQ'

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, route}) {
    try {
        let node = route.id;
        if (route.id === "/") {
            let node = "root";
        }
        const res = await fetch(`${projectURL}/nodes/${node}`, { headers: { 'Authorization': `${bearer}` } });        
        const data = await res.json();
        console.log('First fetch result:', data);
        console.log(route.id);
        
        let entryID = data.entry.sys.id;
        
  
        const entryRes = await fetch(`${projectURL}/entries/${entryID}`, { headers: { "Authorization": `${bearer}` } });
        if (!entryRes.ok) {
          throw new Error(`Request failed with status: ${entryRes.status}`);
        }
  
        const entryData = await entryRes.json();
        console.log ('Second data:', entryData);
        // Return the data obtained from the second fetch
        return { item: entryData };
      } 
    catch {console.log('It dun fucked capn')}  
  
    // If there's an error or the data structure is invalid, return null or an appropriate default value
    return { item: "There's been some issues" };
  }
/*
/** @type {import('./$types').PageServerLoad} */
/*
export async function load ({ fetch }) {
	const res = await fetch(`${projectURL}/nodes/root`, {headers: {'Authorization': `${bearer}`}})
    .then(response => response.json())
    .then(res => console.log(res))
.then(data => { const entryID = data.item.id.sys.id; return fetch(`${projectURL}/entries/${entryID}`, { headers: { "Authorization": `${bearer}`}})
.then(response => response.json())
.catch(err => {
  console.error('Request failed', err)
})
        return { item };
    });}
    */