import * as pVars from '$lib/projectVariables'
import accessToken from '$lib/server/fetchaccesstoken.js'
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, route}) {
  console.log(accessToken);
    try {
        let node = route.id;
        if (route.id === "/") {
            let node = "root";
        }
        const res = await fetch(`${pVars.projectURL}/nodes/${node}`, { headers: { 'Authorization': `${bearer}` } });        
        const data = await res.json();        
        let entryID = data.entry.sys.id;
        
  
        const entryRes = await fetch(`${pVars.projectURL}/entries/${entryID}`, { headers: { "Authorization": `${bearer}` } });
        if (!entryRes.ok) {
          throw new Error(`Request failed with status: ${entryRes.status}`);
        }
        const entryData = await entryRes.json();
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