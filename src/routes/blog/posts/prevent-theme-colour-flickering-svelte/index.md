---
title: How to prevent theme colour from flickering in SvelteKit
description: Learn how to prevent theme colour flickering in SvelteKit with these simple tips. Keep your website looking professional with this easy-to-follow guide
image: https://ik.imagekit.io/kudadam/blog/prevent-theme-colour-flickering-svelte/hero
date: 2021-10-15
excerpt: My theme colours have always flickered on page load since I started using Svelte. Finally, I discovered a workaround.
tags:
  - svelte
  - sveltekit
---

My theme color has always flickered on page load since I started using Svelte. Finally, I discovered a workaround.

## Problem

Initially, I changed the theme colour of my website within the `onMount` function, however the theme colour was always flickering. The cause was that the body loads before the `onMount` function sets the theme colour.
Here's a gif of the issue.

![How the screen was flickering before I found a solution](https://ik.imagekit.io/kudadam/blog/prevent-theme-colour-flickering-svelte/flickering.gif)

So as you can see, when the page is reloaded, the light theme is first shown, then after the document has finished loading, the `onMount` sets the theme colour.

## Solution

The only likely option is to change the theme colour before the body loads. How do we go about it? We insert a script tag into the head element, and this code is executed before the body is loaded. That is the most effective approach to prevent colour flickering.

## The Code

Okay, so you can write this code in the component in which you use to toggle in-between the themes.

```svelte
<svelte:head>
	<script>
		if (document) {
			let mode = localStorage.theme || 'light';
			if (mode === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				localStorage.theme = 'dark';
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.theme = 'light';
			}
		}
	</script>
</svelte:head>
```

### Explanation

To access the head element, we used the `<svelte:head>` component. Then we created the script tag just as we would on our normal HTML pages. The next statements are the important ones. The reason why I used `if (document)` is that this code first gets evaluated on the server before being rendered on the client, so if you try to access the document on the server, it will pop up an error.
 I know SvelteKit provides the `{ browser }` constant through the `$app/env module`, but mind you, this is not available in the custom script tag we made. You will need to use your own workaround and that’s why we are using document to check.
 Then on the next line, we try to retrieve the theme from the localStorage. If it’s not set, it defaults to the "light" theme.
 Then the next steps are the addition of classes and setting of the theme in the localStorage.

Now, look at how the page loads without flickering.

![Now the page loads without flickering](https://ik.imagekit.io/kudadam/blog/prevent-theme-colour-flickering-svelte/non-flickering.gif)

Happy Coding!:smile:
