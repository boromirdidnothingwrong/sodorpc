import * as pVars from '$lib/projectVariables'
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, route}) {
        let node = route.id;
        const res = await fetch(`${pVars.projectURL}/nodes/root?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);        
        const data = await res.json();        
        let entryID = data.entry.sys.id;
       
  
        const entryRes = await fetch(`${pVars.projectURL}/entries/${entryID}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        const entryData = await entryRes.json();
        // Return the data obtained from the second fetch
        return { entryData };
  }
