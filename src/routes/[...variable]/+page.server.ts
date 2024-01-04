
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ fetch, params, route}) => {
  let nodePath:string;
    try {
      
      // Sets the path to whatever is in the browser, like /foo/bar
      
        nodePath = params.variable;
        console.log("Here is the node path:" + nodePath)
        const nodeRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/nodes/${nodePath}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);        
        const nodeData = await nodeRes.json();
        //Set the ID for the entry ahead of getting it
        let entryID = nodeData.entry.sys.id;;

        if (entryID === undefined) {
          throw new Error("entryID is bad")
        }
        //Get the entry info
        const entryRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/entries/${entryID}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        if (!entryRes.ok) {
          throw new Error(`Request failed with status: ${entryRes.status}`);
        }
        const entryData = await entryRes.json();
        if (entryData === undefined) {
          throw new Error("entryID is bad")
        }
        // Return the data obtained from the second fetch
        return { entryData };
      }
      //If any part of the above fails Try will throw this Catch
    catch {console.log('Data fetch failed on the variable slug')}  
  
    // If there's an error or the data structure is invalid, return null or an appropriate default value
  }
