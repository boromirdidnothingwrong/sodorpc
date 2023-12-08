import * as pVars from '$lib/projectVariables'
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, route}) {
        let node = route.id;
        
        const res = await fetch(`${pVars.projectURL}/nodes/root?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);        
        const data = await res.json();        
        let entryID = data.entry.sys.id;
        entryID = 'e783db8d-eb71-424d-99d0-d09d76a2194c'
        //just for testing
  
        const entryRes = await fetch(`${pVars.projectURL}/entries/${entryID}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        const entryData = await entryRes.json();
        // Return the data obtained from the second fetch
        return { entryData };
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