
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ fetch }) => {    
        const newsRes = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil/contenttypes/newsArticle/entries?accessToken=XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx`);
        const newsData = await newsRes.json();
        return { newsData };
      }

