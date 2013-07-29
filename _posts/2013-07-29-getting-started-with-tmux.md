---
layout: post
title: Getting Started with tmux
categories:
- blog
---

I have been wanting to give tmux a try so that I can do some remote pairing and just have a more complete development environment between vim and the terminal. If you aren't quite sure what tmux can do for you, the [promo video from the Pragmatic Bookshelf](http://www.youtube.com/watch?v=JXwS7z6Dqic) gives a nice quick demo.

I really like using the Thoughtbot Learn trail maps to kick start learning, so why not start with their [tmux trailmap][learn tmux].

Tonight I have finished working my way through [Love, hate, & tmux][love].

Things I need to remember for next time.
* `tmux attach -t baseball` - Attaches to the session that I created with panes for spec, app, and terminal
* `C-a C-z` - detaches from session until next time

Next up:
* [A tmux Crash Course][crash course]
* [Copy and Paste][copy paste]

[learn tmux]: https://learn.thoughtbot.com/tmux
[love]: http://robots.thoughtbot.com/post/2166174647/love-hate-tmux
[crash course]: http://robots.thoughtbot.com/post/2641409235/a-tmux-crash-course
[copy paste]: http://robots.thoughtbot.com/post/19398560514/how-to-copy-and-paste-with-tmux-on-mac-os-x
