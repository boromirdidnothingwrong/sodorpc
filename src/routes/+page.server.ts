const projectURL:string = "https://cms-staffscc.cloud.contensis.com/api/delivery/projects/sodorparishcouncil"
/** @type {import('./$types').PageServerLoad} */
export async function load ({ fetch }) {
	const res = await fetch(projecturl + '/nodes/root', {headers: {"Authorization": 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSIsImtpZCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSJ9.eyJpc3MiOiJodHRwczovL2Ntcy1zdGFmZnNjYy5jbG91ZC5jb250ZW5zaXMuY29tL2F1dGhlbnRpY2F0ZSIsImF1ZCI6Imh0dHBzOi8vY21zLXN0YWZmc2NjLmNsb3VkLmNvbnRlbnNpcy5jb20vYXV0aGVudGljYXRlL3Jlc291cmNlcyIsImV4cCI6MTcwMTg1ODE2MiwibmJmIjoxNzAxODU0NTYyLCJjbGllbnRfaWQiOiJhNjU4N2JmNy0yMTlkLTQyYzAtYjYzMy1jNTBiZjljODk3MWIiLCJjbGllbnRfc3ViIjoiYTY1ODdiZjctMjE5ZC00MmMwLWI2MzMtYzUwYmY5Yzg5NzFiIiwiY2xpZW50X3VzZXJuYW1lIjoidGVzdGluZ0pvc2giLCJzY29wZSI6WyJFbnRyeV9SZWFkIiwiUHJvamVjdF9SZWFkIl19.DSvT8jvUj-hXd4p8HOomDFVasD58xeU18-hG2DIRJVEtSChI7MlmjPYvezcZ03OFb3NUXDwWo88jqTF45eakL2iZ1qhQ-_L4JRW9wvnpseOIreYmznijAfd4UbEEE7FjiKV6lXTxIgIsl8iQ768KUlGOsSAyV_vAzknsP_2Qg-v-hTBNitlwVjXZRzMJcb_n819FVUvVWfWVHx1cMO9sz5tg_YVS1imkBIC2ySUYE35rO23ev3VG5o_FYv8SvlTgtiwvx8dFXXZC7JIudP46qeR1oZBuGK_XCzc0nDrJ1wWA6803k06LeoUYToS6_lrfGrQufBn6ZwPAuGcFkYQz5w'
}});
        const item = await res.json();
        return { item };
    }