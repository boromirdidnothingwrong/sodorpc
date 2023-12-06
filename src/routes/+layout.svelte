<script lang="ts">
	import '../app.pcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import type { PageLoad } from './$types';
	import { afterNavigate } from '$app/navigation';

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
	/*
	let myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

	let urlencoded = new URLSearchParams();
	urlencoded.append('grant_type', 'client_credentials');
	urlencoded.append('client_id', '5679510b-6578-4240-b2a7-3e749f1e331a');
	urlencoded.append(
		'client_secret',
		'b56ab912bf4d4ddea8ef00f45e7f64dc-e55f5929b86f40a7b922c514e730a2a3-811a2f1c6bc04c8fad576f30b7760e29'
	);
	urlencoded.append('scope', 'Project_Read Entry_Read Entry_Write ContentType_Read');

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow'
	};
	let accessToken;

	let bearer = new URLSearchParams();
	urlencoded.append(
		'Authorization',
		'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSIsImtpZCI6IjAzeGVlcHRzYTNFd2dHVC10dFZFOEkzRUpXTSJ9.eyJpc3MiOiJodHRwczovL2Ntcy1zdGFmZnNjYy5jbG91ZC5jb250ZW5zaXMuY29tL2F1dGhlbnRpY2F0ZSIsImF1ZCI6Imh0dHBzOi8vY21zLXN0YWZmc2NjLmNsb3VkLmNvbnRlbnNpcy5jb20vYXV0aGVudGljYXRlL3Jlc291cmNlcyIsImV4cCI6MTcwMTc4ODE0NCwibmJmIjoxNzAxNzg0NTQ0LCJjbGllbnRfaWQiOiI1Njc5NTEwYi02NTc4LTQyNDAtYjJhNy0zZTc0OWYxZTMzMWEiLCJjbGllbnRfc3ViIjoiNTY3OTUxMGItNjU3OC00MjQwLWIyYTctM2U3NDlmMWUzMzFhIiwiY2xpZW50X3VzZXJuYW1lIjoic29kb3JQYXJpc2hDb3VuY2lsLWJsb2NrcyIsInNjb3BlIjpbIkNvbnRlbnRUeXBlX1JlYWQiLCJFbnRyeV9SZWFkIiwiRW50cnlfV3JpdGUiLCJQcm9qZWN0X1JlYWQiXX0.bf2VwPXxdTMKd4rlmLf24t-QJ92qf1WbixbA5dNvfBqm5PviCLg1_1kFM7Z-O6oyVPg22htXQzaqAea6JmdxRAsVm0PAadjbz2Dz4-Nw2-2rgGjsTx2FFztS5UYBKag6of5OE891JZZYOgfNaTesqqUO7CiNxtdS8RAOzpv8Gh4y4oBkt6bCkWXMjtOmvZOoatkv-2-lm9tXx90gtaTlNrUbsW4OJD-eJ6SOFsVHcmR020AL0AZSFC9euqJtDCcS8jX71zCRg-MAWhVQRGyQ2VEagikJmKqP4dC360nk8Zxns5CV0HtDQW9Qp29zvoFuERThmJBretQ3X3r09BiV9g'
	);

	fetch('https://cms-staffscc.cloud.contensis.com/authenticate/connect/token', requestOptions)
		.then((response) => response.json())
		.then((result) => {
			accessToken = result;
			console.log(result);
			console.log(accessToken.access_token);
		})
		.catch((error) => console.log('error', error));

	export async function load({ fetch }) {
		const res = await fetch('https://cms-staffscc.cloud.contensis.com/api/management/projects/', {
			headers: {
				bearer
			}
		});
		const data = await res.json();

		return { data };
	}
	*/
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			background="bg-#285F32"
		>
			<svelte:fragment slot="lead">LOGO</svelte:fragment>
			Menu bar
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
