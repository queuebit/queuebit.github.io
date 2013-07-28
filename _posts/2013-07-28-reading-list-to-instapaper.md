---
layout: post
title: Reading List to Instapaper
categories:
- blog
---

When using Safari on my iPhone, I often come across articles that I want to read later. On my laptops I have bookmarklets that will push articles to certain subfolders within Instapaper. I have installed the same bookmarklets within mobile Safari too, but they feel like second class citizens. I want Reading List functionality tied to Instapaper.

Enter [Ryan Toohil's Reading List to Instapaper script](http://blog.ryantoohil.com/2012/03/using-safaris-reading-list-to-feed-instapaper.php).

The [installation process](https://github.com/rtoohil/Reading-List-to-Instapaper#setup) was pretty simple but I just couldn't get it working. I was able to run the script manually, but I couldn't get it to work with launchctl.

After a few hours of troubleshooting I found two issues.
1. You can't have `~/` in the path within the plist file for launchctl
2. When the script is ran from launchd, it uses the system ruby environment instead of rvm

Solution
1. Simple, just use the full path
2. To fix issue 2, I modified my hash bang to include the full path to the rvm ruby instead of just ruby ([Based on this answer on stack overflow](http://stackoverflow.com/questions/5199292/select-rvm-gemset-in-script-header/5209739#5209739)).

`#!/usr/bin/env /Users/queuebit/.rvm/rubies/ruby-2.0.0-p0/bin/ruby`
