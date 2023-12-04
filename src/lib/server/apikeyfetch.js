export async function apikey({ fetch }) {
    const res = await fetch(
        `https://cms-staffscc.cloud.contensis.com/authenticate/token`, { headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"},  body: "grant_type=client_credentials&client_id=bda30e56-4faf-412c-b460-6fce9342b162&        client_secret=1e2759cee76b4ae7947722be71cc33e1-56a63ae1361241fdab7c9ee90cc8a6b3-6dc4c02b8eda43d49de499ad5eef1160&scope=Entry_Read ContentType_Read Project_Read", method: "POST"      
       }
    );
    const apikey = await res.json();

    return { apikey };

    }