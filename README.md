Notes for Josh:

To access data in the variable route, you gotta do data.entryData then whatever it is. Suggests multiple exports can be called with different names so you can access other info more easily!

Possible method: Define some fixed entry types, call their component if it's one of them, build sub components into those components!

Leaving the below for posterity but this supercedes that really.

Images, in Contensis.
Routes, just don't. They load dynamically bcuz of Siteview. eh. In theory we can also do a search thing if you get it a bit wrong. Don't know if there's any point.

Fonts: don't.

Put global layout in +layout. This can be over ridden for special cases but for PC's I don't see why.


#Example website for Parish Councils

Put styles in app.pcss. They *should* override the default styles. For certainty, set the styles on the elements themselves in +page.svelte.

In +layout.svelte look at the svelte fragments. Stuff in there should render on every page! So the header and footer can be fixed in place, as they shouldn't actually change on any page.

For routes, make a new folder. Each one is a page, under the root. So /src/routes/about/+page.svelte will be https://sodorpc.gov.uk/about. /about/councillors/+page.svelte will be https://sodorpc.gov.uk/about/councillors. 

Fonts, idk look up how to add them in SvelteKit. Images should go in static. Vite will automagically convert those into webp to make things faster.

Themes? Look at skeleton.dev plus Tailwind.

Components, Skeleton and Tailwind.

Content, should be loaded in using fetch() in +layout.svelte. Putting it in the layout file lets any page under that layout (which should be all of them), have access to the same data through PageLoad. 

TASK: Figure out how to load new data when the link is clicked. Moderately sure this is doable by calling back to layout? Need to see.

NB: 'Authorization' needs the quotes. Don't know why but it do. 

