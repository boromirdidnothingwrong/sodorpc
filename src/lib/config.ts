import {dev} from '$app/environment'

export const title = 'Sodor Parish Council'
export const description = 'Sodor Parish Council Info'
export const url = dev ? 'https://localhost:5173/' : 'https://sodorparishcouncil.co.uk'

// Set the Project in this next line
const project: string = "sodorParishCouncil"
// Ex. const project = sodorParishCouncil;


export const projectURL: string = `https://cms-staffscc.cloud.contensis.com/api/delivery/projects/${project}`;
