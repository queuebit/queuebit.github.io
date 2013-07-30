---
layout: post
title: Serializing Ruby Objects with JSON
categories:
- blog
---

With my side project, I need to be able to serialize some Ruby objects and pass them to a Matlab program that will perform data analysis and produce a few reports.

I started using YAML since it was pretty and easy to read the output. Unfortunately it seems the YAML support for Matlab is pretty poor. I found a few libraries but they didn't seem well supported.

Next I tried just changing #to_yaml on my array to #to_json. Unfortunately the JSON returned only referenced the object id and the class. Since I don't yet have a need for Rails, I tried to look for some Ruby-only solutions. The 3rd Party library section of [this 2010 article](http://www.skorks.com/2010/04/serializing-and-deserializing-objects-with-ruby/) provided a solution, but after seeing the ease of #to_yaml, I wanted something more built-in.

I ended up deciding to just use ActiveSupport based on the conclusion to [this article](http://www.simonecarletti.com/blog/2010/04/inside-ruby-on-rails-serializing-ruby-objects-with-json).

*Caveat*: Don't forget to use an underscore when doing the `require 'active_support/json'` even though to install you just have to do `gem install activesupport`
