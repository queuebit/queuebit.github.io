---
layout: post
title: Select Bullseye Bookmarklet
categories:
- blog
---

A few weeks ago, [Brett Terpstra](http://brettterpstra.com/) created a Javascript bookmarklet to target a portion of a webpage and convert it to markdown. I have wanted something like [Bullseye](http://brettterpstra.com/2013/07/30/precise-web-clipping-to-markdown-with-bullseye/) to "make a selection" of the relevant text from an article (with one click) so I could then have the built in OS X Text to Speech speak it back to me.

I used Brett's script as the foundation for finding the relevant element and just handed it off to some Javascript I have been holding on to from [StackOverflow](http://stackoverflow.com/a/987376/1217) to make the selection.

### Old Workflow
1. Click and drag the mouse (or select at beginning, hold shift, and select at end) to make the relevant selection
2. Hit Cmd-C-Opt-? - which I have tied to "Speak selected text" in System Preferences

### New Workflow (although more steps it is infinitely easier)
1. Hit bookmarklet (or run from Chrome's omnibar)
2. Click on article
3. Hit Cmd-C-Opt-?

Here is the link to the [Select Bullseye Gist](https://gist.github.com/queuebit/6118987) if you also find this useful.
