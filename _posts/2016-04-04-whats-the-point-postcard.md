---
layout: post
title: What's The Point postcard
categories:
- blog
---

A few weeks ago [Jody Avrigan][ja] had the duo behind [Dear Data][dd] on an episode of [What's The Point][wtp]. During the episode he [challenged listeners][challenge] to create a data visualization related to each's podcast listening habits on a postcard and mail it in. _(Podcasts really love [voting] and [postcards])_

[ja]: https://twitter.com/jodyavirgan
[dd]: http://www.dear-data.com/
[wtp]: http://fivethirtyeight.com/tag/whats-the-point/
[challenge]: http://fivethirtyeight.com/features/dear-data-and-fivethirtyeight-want-you-to-visualize-your-podcast-habits/
[voting]: http://www.hellointernet.fm/flagvote/
[postcards]: http://www.podcastpostcards.com/

I subscribe to a **ton** of podcasts (well over 100), and listen as much as I am able, but I couldn't think of a great data source.

Some ideas:

* Number of hours listened in a given week (_Weakness_: not sure what to compare it to)
* Number of podcast episodes listened to / deleted (_Weakness_: I often do most of my listening while driving and don't want to become unsafe documenting while I am driving)
* Number of podcast subscriptions / episdoes per podcast / time since subscribed (_Weakness_: This is the most interesting, but there isn't a way to get the historical data I want)

Then I had the idea of looking at the podcast artwork of some of my favorite podcasts and networks. I first looked into using something like `PIL` to create [histograms] for the artwork, but it wasn't easy to read and understand. Then I remembered some frequency-type graphs of movie poster artwork and found [k-means color clustering][cc]. That was what I wanted to do, but wanted to reuse someone else's library rather than writing it up myself. After some extensive "research" (Googling), I found <http://mkweb.bcgsc.ca/color-summarizer/?examples> by Martin Krzywinski.

[histograms]: http://www.pyimagesearch.com/2014/01/22/clever-girl-a-guide-to-utilizing-color-histograms-for-computer-vision-and-image-search-engines/
[cc]: http://www.pyimagesearch.com/2014/05/26/opencv-python-k-means-color-clustering/

It does exactly what I want. Now I all had to do is select my dataset and translate the data visualizations to a postcard.

Here's [my postcard] hitting the postmaster today.

[my postcard]: /media/wtp-postcard.pdf
