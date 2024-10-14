---
title: Package an uber-JAR with OpenLiberty
date: 2024-10-14
published: true
canonical_url: false
description: "With OpenLiberty, you can easily get your artifact as a WAR file. But what if you (for some reason) want a self-containing JAR instead?"
---

With OpenLiberty, you can easily get your artifact as a WAR file. But what if you (for some reason) want a self-containing JAR instead?

You have created an application using OpenLiberty. You want a JAR file containing everything you need to run your app, including OpenLiberty itself, your dependencies and your code.

It should be easy, yes. <a href="https://openliberty.io/guides/getting-started.html#running-the-application-from-a-minimal-runnable-jar">The official documentation</a> states how you can do it, and it's pretty straight forward. However, it doesn't work. At least when I try it, I do indeed get a running OpenLiberty server in the JAR, but my application is not there, and no features are installed.

While that might very well be a bug, and eventually fixed by the team, it's always useful to look into alternative options. So I found a very useful repo named <a href="https://github.com/tomcruise81/openliberty-uber-jar/">openliberty-uber-jar</a>, that showcased another way of making the JAR. First you make a WAR file, and then you package the WAR with a separate pom.xml afterwards. So thank you, tomcruise81! The downside is obviously that you have two separate pom files, and have to run two separate build commands, but that might be worth it.

I made <a href="https://github.com/madsop/openliberty-graalvm">a repository</a> where I made a minimal example of how to do it, and with quite distinct commits, so it should be easy to reproduce the steps for you as well.

As you can guess from the name of the repo, I did this as part of an effort to run OpenLiberty with GraalVM. However, I found this issue, how to create an uber jar with OpenLiberty, useful by itself, so it clearly deserves this blog post.