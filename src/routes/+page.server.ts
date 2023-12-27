
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

      // This is the home route so we can do away with a lot of stuff as this should be pretty stationary.
        const newsRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/contenttypes/newsArticle/entries?fields=title&accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        const newsData = await newsRes.json();
        return { newsData };
      }
      //If any part of the above fails Try will throw this Catch
    catch {console.log('Data fetch failed')}  
  
    // If there's an error or the data structure is invalid, return null or an appropriate default value
  }
