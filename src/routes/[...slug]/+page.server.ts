import { aT, projectURL } from '$lib/server/baseStuff.js';

/** @type {import('./$types').PageServerLoad} */


export async function load({ fetch, params, route}): Promise<{ item: any; }> {

  // The next two lines are mucky. Get the returned value from the access token fetch function aT, and then set accessToken to the property "access_token" of the object returned from aT. Or something, I'm not an engineer.
  // All I can say is at least it works
  let accessToken = await aT;
  accessToken = accessToken.access_token;
  console.log(accessToken);
  let bearer = `bearer ${accessToken}`
  let nodePath:string;
    try {
      //Really this root node ought to be in Layout, it's only for stuff like the title. The entry can then be rendered in by page? Not quite sure how it'd work.
      //or put it in the baseStuff.ts....
      //Get the root node info. This allows us to go and fetch it's entry. (We could get the entry if it had a standard name like HomePage or something like that? But this is flexible)
      const rootNodeRes = await fetch(`${projectURL}/nodes/root`, { headers : { 'Authorization': `${bearer}`}});
      const rootNodeData = await rootNodeRes.json();
      console.log("Root node data:" + JSON.stringify(rootNodeData));
      
      //Fetch the current node. If it's root then change what node you look up. It's done this above already so a better implementation may well be in order sirrah.
        nodePath = params.slug;
        if (params.slug === "/") {
             nodePath = "root";
        }
        const nodeRes = await fetch(`${projectURL}/nodes/${nodePath}`, { headers: { "Authorization": `${bearer}` } });        
        const data = await nodeRes.json();
        console.log('Data for this Node/Path', data);
        //Set the ID for the entry ahead of getting it
        let entryID = data.id;
        console.log(entryID);

        if (entryID === undefined) {
          throw new Error("We bolloxed")
        }
        //Get the entry info
        const entryRes = await fetch(`${projectURL}/entries/${entryID}`, { headers: { "Authorization": `${bearer}` } });
        if (!entryRes.ok) {
          throw new Error(`Request failed with status: ${entryRes.status}`);
        }
        const entryData = await entryRes.json();
        console.log ('Second data:', entryData);
        // Return the data obtained from the second fetch
        return { item: entryData };
      }
      //If any part of the above fails Try will throw this Catch
    catch {console.log('It dun fucked capn but like it really fucked')}  
  
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