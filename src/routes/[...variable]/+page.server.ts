
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ fetch, params }) => {      
      // Sets the path to whatever is in the browser, like /foo/bar
      
        let nodePath = JSON.stringify(params.variable).slice(1, -1);
        if (nodePath === "app.css"){
        return
        }
        else{
        const nodeRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/nodes/${nodePath}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);        
        const nodeData = await nodeRes.json();
        //Set the ID for the entry ahead of getting it
        let entryID = nodeData.entry.sys.id;

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
    }
  