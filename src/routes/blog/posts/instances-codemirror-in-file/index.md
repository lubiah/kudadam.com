---
title: Using multiples instance of CodeMirror in a file
description: How to create many instances of CodeMirror with a simple function
image: https://ik.imagekit.io/kudadam/blog/instances-codemirror-in-file/hero
excerpt: The default configuration for codemirror is somehow complicated, learn how you can simplify it.
date: 2021-03-30
expiry: 2023-11-24
tags:
  - javascript
---

:::note{type=warning}
This tutorial was written for [CodeMirror version 5](https://codemirror.net/5/). It might not be helpful if you are using the latest version of CodeMirror
:::

[CodeMirror](https://codemirror.net/) is a text editor for the browser written in JavaScript. It is designed for code editing and has a variety of language modes and add-ons that provide more advanced editing functionality. It comes with a robust programming API and a CSS theming system, allowing you to tailor it to your specific requirements. Furthermore, CodeMirror is an excellent text editor for browsers. I used it for my first blogging site.

We'll see how to use CodeMirror without any of its "complex" configurations. We'll write our own simple function, which will call CodeMirror internally.
Please bear in mind that our function will be simple, but if you want more control, you can adapt it to suit your demands.

## Creating our function

So, as previously said, we will write our own JavaScript function that will call CodeMirror internally. The rationale for this is that we don't want to remember CodeMirror's "complex" setup.
Let's call our function's name `"ide`". Yeah, just three letters, we don't want a complicated name. Before we start, let's look at some common configurations which we can set.
`"The language, whether to show line numbers, theme, whether the editor should be read only."` Open your text editor and type the following inside

```javascript
function ide(language, lineNumbers = true, readOnly = false, theme = 'default') {
	//Our JavaScript function to simplify CodeMirror
	var textareas = document.getElementsByClassName(language); //Get all elements having a class name of the language.
	for (let i = 0; i < textareas.length; i++) {
		CodeMirror.fromTextArea(textareas[i], {
			mode: language,
			theme: theme,
			lineNumbers: lineNumbers,
			readOnly: readOnly
		});
	}
}
```

We are done with our function. Remember, this is only basic. We can make it cooler, but for now, let’s keep it simple.

We created a function called `ide` which takes four (4) parameters. The parameters are `language, lineNumbers, readOnly, theme`. The language parameter refers to the programming language which you want to use.` lineNumbers` refers to whether the editor should show line numbers, it's set to true by default. `readOnly` parameter is to specify whether the text editor should be read-only or not, it's set to false by default. The theme refers to the theme which you want to use for your text editor, it's set to default by default.
Inside the function, we create a variable called `textareas`. It's an array containing elements with class name `"programming language"`. Then we iterate through the elements and create CodeMirror instances for each element and apply the parameters to the instance.
See, that was easy!!!

## Using the function in our web page

So now, we are going to use the function we just created. We are going to create an HTML file and implement the function in it.

```html
<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript" src="codemirror/lib/codemirror.js"></script>
		<link rel="stylesheet" type="text/css" src="codemirror/lib/codemirror.css" />
		<script>
			type="text/javascript" src="script.js"
		</script>
		<!-- Since, we are using python to test our function, we will import it's file -->
		<script type="text/javascript" src="codemirror/mode/python/python.js"></script>
		<title>CodeMirror Editor</title>
	</head>
	<body>
		<h1>Hello World</h1>
		<textarea class="python">
def function():
    for i in range(1, 10):
        print(i)
        </textarea
		>
		<script>
			ide('python'); //Call our function to initialize CodeMirror on the textarea with class "python"
		</script>
	</body>
</html>
```

To explain the code, we created a simple HTML file, then we initiated it with the necessary HTML tags. Now the first script tag imports codemirror’s JavaScript file. Please remember that this file should be imported first. 
Then on the next line, which is the link tag, we imported CodeMirror’s style sheet. This is important for the colouring of your text. 
These two files we have imported are the basic files required to run CodeMirror.

Then on the next line, which is a script tag, we imported a file called "script.js", this is the file in which we defined our function.
Then to the next line which is also a script tag, this script imports the python mode for the editor, remember this line will depend on the language you are using, if your editor is going to be in JavaScript, you will import the JavaScript file, or if python and JavaScript, you will import both. It actually depends on your language.
So we are kind of done, in order to use CodeMirror, you need to write your code in a textarea element.

So I created a textarea element and then wrote my python code inside. Notice I added a class called python to the textarea, this will help our function to identify the textarea.
Getting to the end of the body tag, we created another script tag, inside the script tag, we just wrote `ide("python")`. This is the code which is going to turn the textarea into an editor. Yeah, it's just one line. Even, if we were to have multiple textareas with class of python, this single line of code will convert them all into editors. When we were created our function, we said it takes four parameters right? Yeah it works without them because they are set by default but if you want more control, you can add the parameters.

Let's say if you want to remove the line numbers, we will write `ide("python", lineNumbers = false)` or if we wanted to make our editor read-only, we can write our parameters as `ide("python",lineNumbers = true, readOnly = True)` or better still, if we wanted to add a theme, we can write the parameters as `ide("python", lineNumbers = true, readOnly = False, theme = "dracula")`.Note that, if we set a theme, we must import the theme which we set, so for a text editor with a theme of Dracula, we will add this to our head element

```html
<link type="text/css" rel="stylesheet" href="codemirror/theme/dracula.css" />
```
