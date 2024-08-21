---
layout: post
author: 'Nicky'
title: 'Accessibility Win: Blade Icons'
date: '2024-08-18'
categories: 'Project'
summary: '<h2 id="overview">Overview</h2><p>At work, I teamed up with to improve a GitHub project. It was the. We added a new feature: to make the icons more accessible.</p><h2 id="how-it-works">How it works</h2><p>Blade Icons use. We used a method from. If you add a title to the icon, it:</p><ul><li>Shows up in the SVG&#39;s title element.</li><li>Shows up in the title attribute.</li><li>Adds an “img” role.</li></ul><p>If there&#39;s no title, the icon stays the same. You can also hide it with <code>aria-hidden=&quot;true&quot;</code>.</p><h2 id="decisions">Decisions</h2><p>We had to decide between &quot;title&quot; or &quot;alt&quot; for the attribute we used. &quot;Title&quot; works well because it fits how other attributes are used. &quot;Alt&quot; could be confusing since it&#39;s different from the <code>&lt;img&gt;</code> ”alt”.</p><h2 id="conclusion-and-impact">Conclusion and Impact</h2><p>With this update, many SVG icons on websites will now have text alternatives. This allows more people to understand them.</p>'
meta-description: 'We added an accessibility feature to Blade UI Kit: Blade Icons package.'
---

## Overview

Recently, at my day-job, I was able to work with one of my talented coworkers, [Aarish Gilani](https://aarishgilani.com/). We added an accessibility feature to a pretty popular GitHub Repository. It was an alternative text option for the [Blade UI Kit: Blade Icons package](https://github.com/blade-ui-kit/blade-icons?tab=readme-ov-file#accessibility). 

All credit goes to Aarish for the initiative to get this done, and the actual code. I helped out with the documentation, guidance, and making sure the accessibility fix achieved what we needed.

## How it works

Since Blade Icons uses SVG (Scalable Vector Graphics) based icon libraries, we looked into accessible SVG patterns. We thought that [Deque’s SVG Pattern 5](https://www.deque.com/blog/creating-accessible-svgs/) was most suitable for this use-case. 

We selected the title [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) added to the component to carry the alternative text. Adding it results in the following markup features:

- SVG `<title>` element — its value containing the component’s title attribute
- `title` attribute containing the value that was passed
- `role="img"`

If a title attribute was not added, there are no changes to the default icon markup. If the icon should be hidden, one could add `aria-hidden="true"` to the component. 

## Decisions

We did go back and forth on the name and the resulting markup. 

Choosing title meant that we could also intuitively fill the value of the SVG title attribute. This functionality stays in line with the existing expectation that all other attributes (like class, fill, stroke, etc.) get directly applied to the SVG.

Title is also the name of the element that gets nested into the SVG, so this felt in-line with expectations as well.

Choosing “alt” (as in alternative text) also made sense. We didn’t want to imply that this solution was the same as `<img>` alt text, though. This deviated from the expectation we outlined previously.

## Conclusion and Impact

As folks (over 20,00!) update this package in their repositories, potentially thousands of SVG icons around the web will have text-based alternatives. Or, at the very least, it will give them the ability to easily do so.
