---
layout: post
author: 'Jenica'
title: 'CSS To Help Migraines'
date: '2025-07-30'
categories: 'Resource'
summary: '<p>This article provides a Migraine Mode stylesheet for download, and instructions on how to use it in your browser. The explanation and instructions are in plain language, so they are ready to use for most people. The code lessens colour contrast and adds a green overlay. I hope it helps your head hurt less and makes websites more accessible for you!</p>'
meta-description: 'A migraine mode CSS file for download and instructions on how to use it in any browser. It lessens colour contrast and creates a green overlay.'
---

## What is a Migraine Mode CSS file?

I was shocked that when I was looking for a Cascading Style Sheet (CSS) migraine overlay solution, I couldn't find one! There are some browser extensions for screen tints, but by nature they are browser specific. They also were all geared towards blue-light filtering. Blue-light filtering is cool, but it's not the same as filtering visuals for someone who is experiencing a migraine.

So, I decided to come up with a simple solution for desktop computer users that I can give out on the internet! I've created a little [Migraine Mode CSS file](./assets/assets/migrainemode.css) for download and it just does two simple things. It will desaturate colours and put a green overlay over any webpage. All that you have to do is load up the file in your browser and then you can turn any website into one that is a little less painful!

I've made instructions for a few main browsers, so that hope is that you can use this file wherever you work. You can use this file on your home computer, your securely locked down work computer, or even that old computer at your local library. Not everyone has the freedom to install browser extensions, so that's why I decided to make a file that uses each browser's built-in functions.

My personal favourite method below uses Firefox. I think adding a local file is the easiest to set up. As a bonus, the CSS code you include applies itself on the entire website without needing to re-import the code.

For each of these methods, you need to start by downloading the [Migraine Mode CSS file](./assets/assets/migrainemode.css) somewhere on your computer.

## Instructions for using a CSS file on desktop Firefox:

1.  Right click on the webpage you'd like to add the file to, and click Inspect.

2.  In the section that has appeared in the browser, navigate to the tab that says Style Editor.

3.  Click on the import symbol (it looks like a box with an arrow in it) that lets you append an existing stylesheet to the page, and choose the Migraine Mode file.

4.  If this isn't working for you, you can troubleshoot and get more details from the [Firefox Source Editor Documentation](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/).

## Instructions for using a CSS file on desktop Chrome:

1.  Right click on the webpage you'd like to add the file to, and click Inspect.

2.  In the section that has appeared in the browser, navigate to the tab that says Sources.

3.  There is a menu that starts with Page and Workspace, and the third item in that menu (which is likely collapsed and needs to be widened to be seen) is Overrides. Click on Overrides.

4.  Enable the local overrides if it's not already enabled.

5.  Now in the Page subtab, find the Migraine Mode file and save it for overrides. 

6.  If this isn't working for you, you can troubleshoot and get more details from [Chrome's Dev Tools Overrides documentation](https://developer.chrome.com/docs/devtools/overrides).

## Instructions for using a CSS file on desktop Safari:

1.  Right click on the webpage you'd like to add the file to, and click Inspect Element.

2.  In the section that has appeared in the browser, navigate to the tab that says Sources.

3.  Click the plus and choose the Inspector Style Sheet option.

4.  Click and drag the Migraine Mode file into the editor.

Note: I find this Safari method simplest, however the code is not saved across different webpages. If you're looking for a more robust solution, I suggest adding the stylesheet to Safari using Safari's Advanced Settings. This article about [using a portable stylesheet](https://www.makethingsaccessible.com/guides/using-a-portable-stylesheet-across-the-web/#using-a-portable-stylesheet-with-safari) has a nice breakdown of that method.
