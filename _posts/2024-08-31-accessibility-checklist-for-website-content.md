---
layout: post
author: 'Nicky'
title: 'Accessibility Checklist for Website Content'
date: '2024-09-03'
categories: 'Resource'
summary: '<h3>Introduction and background</h3><p>This website had a goal of meeting as many WCAG AAA criteria as possible. That means we have to check all content before we post it. So, we made a checklist to help with this.<p>We want to share our process for making blog post content accessible. As accessible as we know how to, anyway.<h3>Intention</h3><p>This checklist should not be used by itself as an accessibility plan. It can be used to build your own web accessibility plan.<p>Another reason this checklist is published, is to be clear. We want to explain how we approach one part of web accessibility.<h3>Feedback</h3><p>If you want to share feedback, please email me at hello@nicky.dev.<h3>Checklist</h3><p>The original article’s checklist has been written to be as simple as possible. Some really specific words must be used and cannot be changed.</p><p><a href="#the-checklist">Read the checklist</a>.</p>'
meta-description: 'This accessible content checklist can be used as a starting point to build your own web accessibility plan and meet the goals you set.'
---

## Introduction and background

Working on this website with a goal of meeting as many WCAG AAA criteria as possible meant we had to be diligent with checking content before we post it. We formed a checklist out of this goal, and want to share our process for making “blog post” style web content as accessible as we know how to. 

## Intention

This list is not intended to be a stand-alone accessibility plan. It can be used as a starting point to build your own web accessibility plan and meet the goals you set. Our list is also published to incorporate transparency of how we approach web accessibility. 

## The checklist

The list is structured in what we think is the most logical order to complete.

### Media

- **No embedded content**, including: iFrames, audio-only, video-only, or time-based media.
- **No flashing** content.
- **No images of text** other than logos and required branding.
- **Provide text alternatives** for any non-text content.

### Design & Structure

- **Do not use colour** as a lone source of information.
- **New colours must pass** the appropriate contrast ratio thresholds.
- **Headings** need to be placed quite frequently where it makes sense. They should be brief, and describe the topic or purpose.

### Links

- **Do not open links in a new tab or window**, which introduces a change of context.
- **Describe the link destination** in the link text.
- **Links that go to the same destination** should be consistently named across pages.

### Language

- **Language changes** need to be marked up with the correct BCP 47 language tag.
- **Abbreviations and acronyms** must be spelled out in full on their first use.
- **Ambiguous words** should be marked up to provide their pronunciation, or, there should be context for the meaning to be distinguished.

#### Reading Level

Anything more complex than “Grade 9” reading level must have a simplified version, or supplemental content. Please remove any proper names and titles when testing. 

Some decisions require careful consideration of context and nuances, including:

- Determining how reading level is calculated.
- Choosing how to remediate:
    - Simplified version,
    - Supplementing the original content,
    - Providing a summary.

### Code/Markup

- **Use correct and semantic** HTML tags.
- **Correctly order headings**.

## Feedback

If you want to share feedback, please email me at hello@nicky.dev.