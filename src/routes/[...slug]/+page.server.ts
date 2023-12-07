const projectURL:string = "https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil"
const bearer:string = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSIsImtpZCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSJ9.eyJpc3MiOiJodHRwczovL2Ntcy1zdGFmZnNjYy5jbG91ZC5jb250ZW5zaXMuY29tL2F1dGhlbnRpY2F0ZSIsImF1ZCI6Imh0dHBzOi8vY21zLXN0YWZmc2NjLmNsb3VkLmNvbnRlbnNpcy5jb20vYXV0aGVudGljYXRlL3Jlc291cmNlcyIsImV4cCI6MTcwMTg3ODYzNiwibmJmIjoxNzAxODc1MDM2LCJjbGllbnRfaWQiOiJhNjU4N2JmNy0yMTlkLTQyYzAtYjYzMy1jNTBiZjljODk3MWIiLCJjbGllbnRfc3ViIjoiYTY1ODdiZjctMjE5ZC00MmMwLWI2MzMtYzUwYmY5Yzg5NzFiIiwiY2xpZW50X3VzZXJuYW1lIjoidGVzdGluZ0pvc2giLCJzY29wZSI6WyJFbnRyeV9SZWFkIiwiUHJvamVjdF9SZWFkIl19.b0lzV8OWGKepwqIP9NaaVi0otk5yM_da2syDhTZ6iYo9qvxCMrQOR3FJffvDXcqHFphg5VFffLb76NKABmpkL3pJAyQv9De3lFQSR7ulcjicwWMMpNdEIjY_xrtzNI_6s-v30a2llidUNlc5rsVwk44LCb_fvwiwnro5NpO0fxeeMeHLN1UvMPf3xu8yH78XY7LH-EXyqGk4iRRoxLmuAa1n0vmPgzihqSLu6-qvN9wCZzsWlzqOuwgDTnnZhw_AHzXMtuQVT7Bb_zSc9RZe2bLWuEcg7W-ysEsmmbkwz21iUiThvrAmpkOtJ1dWqseit21Xsxnzd-rTDoJFCX0Cvg'

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, route}) {
  let nodePath:string;
    try {
      const rootNodeRes = await fetch(`${projectURL}/nodes/root`, { headers : { 'Authorization': `${bearer}`}});
      const rootNodeData = await rootNodeRes.json();
      console.log("Root node data:" + rootNodeData.id);
      
        nodePath = params.slug;
        if (params.slug === "/") {
             nodePath = "root";
        }
        const nodeRes = await fetch(`${projectURL}/nodes/${nodePath}`, { headers: { "Authorization": `${bearer}` } });        
        const data = await nodeRes.json();
        console.log('First fetch result:', data);
        
        let entryID = data.entry.sys.id;
        if (entryID === undefined) {
          console.log("She's undefined CAPN");
        }
        const entryRes = await fetch(`${projectURL}/entries/${entryID}`, { headers: { "Authorization": `${bearer}` } });
        if (!entryRes.ok) {
          throw new Error(`Request failed with status: ${entryRes.status}`);
        }
        const entryData = await entryRes.json();
        console.log ('Second data:', entryData);
        // Return the data obtained from the second fetch
        return { item: entryData };
      }
    catch {console.log('It dun fucked capn but like it really fucked')}  
  
    // If there's an error or the data structure is invalid, return null or an appropriate default value
    return { item: "There's been some issues" };
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