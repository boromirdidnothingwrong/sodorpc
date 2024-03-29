/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
	// Again, the next two are a mucky way about it. If we can pass it cleaned up down from baseStuff.ts then we'll be grand
    // Until then we import the object and process it per file
	const rootNodeRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/nodes/root?depth=10&accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
	const rootNodeData = await rootNodeRes.json();

	const newsRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/contenttypes/newsArticle/entries?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
	const newsData = await newsRes.json();
    return { rootNodeData, newsData };
	} 