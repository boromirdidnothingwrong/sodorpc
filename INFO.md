# General info abou the project etc, written as I think of it

What:

This is a SvelteKit project. https://kit.svelte.dev/
It uses Svelte. https://svelte.dev/
The project is bundled into a container using the Dockerfile and /.github/workflows/docker-publish.yml. Only change this if you need to set the block name... Secrets are the client id and client secret from Contensis. Put these in the Github Secrets and name them the same as the YAML file references. Only if it's a new project.

The way this is made, the page for the variable route checks the type (content type in contensis), then routes it to one of the relevant components in $lib/components. At some point those might move to $lib/pages to keep components and page templates separate and clean.

Data is passed with the data prop, do the SvelteKit tutorials and read the docs to understand more. I don't quite get it but it works so I'm ok with that.

Once you've read the docs it should be fairly obvious how it works. Iterate across the data, use whatever component or HTML to render each piece of data (whether it's a richText block, an Image etc. StandardPage is a good example.). In Contensis, if you make a new file type, just name them the same way. Then you can simply copy and paste the "code" from another component.

Things to know: To do GET against the contensis api, add the accessToken (found in settings in contensis app) to the url. So /entries/xyz-123-abc?accessToken=(accessToken). If chaining multiple queries then each needs to be defined and separated with &, if only the access token just ? is fine. Otherwise you'll get a 401. Handle that however you like.

To do POST/PUT or other statechanging interactions, you need to fetch the token. Tokens are generated at https://cms-staffscc.cloud.contensis.com/authenticate/connect/token. Like this: fetch(
    `https://cms-staffscc.cloud.contensis.com/authenticate/connect/token`, { headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"}, body: "grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret + "&scope=Entry_Read ContentType_Read Project_Read", method: "POST"    
   }

   It's all required. It should return a piece of JSON incl the bearer token (use it with the header: {"Authentication": `bearer (token)`} ) and an expiry. Tokens expire after an hour so make sure there is handling for that. Either do try catch res 401 or smth to catch an unauthorised or add a timer. Personally I think checking for a 401 is fine, it won't add too much bother.

   PC site uses sveltekit obvs but also TailwindCSS installed with PostCSS plus components from DaisyUI. The components are OK but you can do more with pure Tailwind. Good luck.



Projectaliser: Python script that pulls master from sodorparishcouncil (the baseline), modifies strings according to it's settings file, then pushes to the branch for that particular project. That's the plan... If it's all done in the same github repo then the API keys can stay the same!

Might be doable with github actions, just changing the project name each time. But that's gonna be an unholy pain to manually make each one live.