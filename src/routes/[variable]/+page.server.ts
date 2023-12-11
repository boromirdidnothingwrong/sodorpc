import * as pVars from '$lib/projectVariables'
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params, route}) => {
  let nodePath:string;
    try {
      //No longer needed. This is loaded in layout (in theory) which trickles down all sub routes
      //Really this root node ought to be in Layout, it's only for stuff like the title. The entry can then be rendered in by page? Not quite sure how it'd work.
      //or put it in the baseStuff.ts....
      //Get the root node info. This allows us to go and fetch it's entry. (We could get the entry if it had a standard name like HomePage or something like that? But this is flexible)
      // const rootNodeRes = await fetch(`${pVars.projectURL}/nodes/root?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`)
      // const rootNodeData = await rootNodeRes.json();
      
      // No longer needed. There is a root route so why would this ever equal /?
      //Fetch the current node. If it's root then change what node you look up. It's done this above already so a better implementation may well be in order sirrah.

      // Sets the path to whatever is in the browser, like /foo/bar
        nodePath = params.variable;
        const nodeRes = await fetch(`${pVars.projectURL}/nodes/${nodePath}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);        
        const nodeData = await nodeRes.json();
        //Set the ID for the entry ahead of getting it
        let entryID = nodeData.entry.sys.id;;

        if (entryID === undefined) {
          throw new Error("entryID is bad")
        }
        //Get the entry info
        const entryRes = await fetch(`${pVars.projectURL}/entries/${entryID}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        if (!entryRes.ok) {
          throw new Error(`Request failed with status: ${entryRes.status}`);
        }
        const entryData = await entryRes.json();
        // Return the data obtained from the second fetch
        return { entryData };
      }
      //If any part of the above fails Try will throw this Catch
    catch {console.log('Data fetch failed')}  
  
    // If there's an error or the data structure is invalid, return null or an appropriate default value
  }
