/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const key = "9ce5a415-063e-4e44-91b9-5a81d109e655";
    const secret = "a0a2d0f5006a4343aaeaebc1a701ed3d-808309a5b8fd428a8ecb6f004fba90e6-15578e03214241588923dd7557518a01";
    const apikey = await fetch(
        `https://cms-staffscc.cloud.contensis.com/authenticate/token`, { headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"}, body: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret + "&scope=Entry_Read ContentType_Read Project_Read", method: "POST"    
       }
    );
	const res = await fetch(`https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil`, {headers: {authorization: "Bearer " + apikey}});
        const item = await res.json();
    
        return { item };
    }