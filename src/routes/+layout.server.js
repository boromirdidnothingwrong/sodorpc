import * as baseStuffTs from '$lib/server/baseStuff';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	// Again, the next two are a mucky way about it. If we can pass it cleaned up down from baseStuff.ts then we'll be grand
    // Until then we import the object and process it per file
    let accessToken = await baseStuffTs.aT;
    accessToken = accessToken.access_token;
    let bearer = `bearer ${accessToken}`
	const rootNodeRes = await fetch(`${baseStuffTs.projectURL}/nodes/root?depth=3`, {
		headers: { Authorization: `${bearer}` }
	});
	const rootNodeData = await rootNodeRes.json();
    //We need to export this in order to fet
	const menures = await fetch(`${baseStuffTs.projectURL}/nodes/${rootNodeData.Id}/children?entryLinkDepth=3`, { headers: { Authorization: `${bearer}`}});
    const menu = await menures.json();
    return menu;
	}
    
/* Really this is here just to fetch the surrouinding data to display on every page. 
Stuff like Header menu's, footers etc. We can make those as components and export them into layout.svelte to make that cleaner
But this is here so we can leave this for now. In theory what we want is to fetch all the child nodes of the root node down maybe 1-2 levels to make sub headings for each header menu item
For now I'm leaving it as is because getting the data into the page is more important*/