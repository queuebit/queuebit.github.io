---
layout: post
title: Practice Log for 2013-05-28
categories:
- practice
tags: 
- tk
---

* [Build Podcast 39 - Vagrant](http://build-podcast.com/vagrant/)

	* `vagrant package` - Package up vagrantfile, box, etc to share with other devs
	> <i class="icon-check-empty"><span class="unchecked"> - Resources to checkout</span></i>

	  * [Pregenerate typical Vagrant builds](http://rove.io/)
	  * [Vagrantbox.es](http://www.vagrantbox.es/)
	  * [Slideshare intro to Vagrant](http://www.slideshare.net/salizzar/introduction-to-vagrant)

* [Automate Your Development Environment by David Kerber](http://www.confreaks.com/videos/2368-rmw2013-ready-to-code-automate-your-development-environment)
	* Options for configuring Vagrant boxes: shell, puppet (_used in this video_), chef
	* Puppet modules for rvm, and custom manifest for postgres
	* [Dave's vagrant-example](https://github.com/davekerber/vagrant-example)

* [Build Podcast 43 - SQL](http://build-podcast.com/sql/)
	* [SQLfiddle](http://sqlfiddle.com/) seems like a nice tool for mocking up DBs
	* `GROUP_CONCAT( _ )` - interesting way of displaying data without tons of rows
	* Powerful [example using ActiveRecord and Sinatra](https://github.com/sayanee/Build-Podcast/tree/master/043-sql#with-ruby-sinatra) with MySQL

* [Confident Code by Avdi Grimm](http://www.confreaks.com/videos/763-rubymidwest2011-confident-code)

	* Narrative Method Structure
		1. Gather input
		2. Perform work
		3. Deliver results
		4. Handle failure
