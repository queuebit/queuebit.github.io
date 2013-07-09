---
layout: post
title: Practice Log for 2013-06-07
categories: 
- practice
---

* Create vagrant box for side project using <http://rove.io/>
  
  * Components:
    * MySQL
    * Ruby - rvm
    * vim

  * `vagrant ssh`
    * `apt-get update`
    * `mysql -u root -p`
      * `create database DATABASENAME`
      * [nice MySQL Commands reference](http://www.pantz.org/software/mysql/mysqlcommands.html)
      * `mysql -uroot -pPASSWORD -hlocalhost DATABASENAME < DROPPED_DATABASE.sql`
