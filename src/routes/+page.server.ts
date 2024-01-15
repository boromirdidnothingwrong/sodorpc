
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ fetch, parent }) => {   
        const { rootNodeData } = await parent()
        
        const newsRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/contenttypes/newsArticle/entries?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        const newsData = await newsRes.json();
        
        const pageDataID = rootNodeData.entry.sys.id;
        const pageRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/entries/${pageDataID}?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`)
        const entryData = await pageRes.json()
        
        return { entryData, newsData };
      

}