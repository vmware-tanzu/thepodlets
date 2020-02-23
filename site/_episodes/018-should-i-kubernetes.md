---
# General note: look at other episode files and follow the same format
# TODOs
# 1) Upload mp3 file to omnystudio
# 2) No episode number in the title; add ep number to the "Episode number" field
# 3) Keep it private, but set the date to publish (always on a Mon at 8:30AM)
# 4) Add episode to playlist; save
# 5) Fetch episode slug from Advanced settings > slug (note 1: it can be changed but never after the publish date; note 2: there should be no episode number in the slug)
# 6) Paste the slug into episode_id below
# 7) Commit and open a PR to get the remainder of the checklist 
episode_id: should-i-kubernetes 
episode_number: 18 
title: Should I Kubernetes?
# "description" is a short version of the show notes:
description: The question of diving into Kubernetes is something that faces us all in different ways. Whether you are already on the platform, are considering transitioning, or are thinking about what is best for your team moving forward, the possibilities and the learning-curve make it a somewhat difficult question to answer. In this episode, we discuss the topic and ultimately believe that an individual is the only one who can answer that question well. That being said, the capabilities of Kubernetes can be quite persuasive and if you are tempted then it is most definitely worth considering very seriously, at least.
# "notes" is the entire show notes:
notes: The question of diving into Kubernetes is something that faces us all in different ways. Whether you are already on the platform, are considering transitioning, or are thinking about what is best for your team moving forward, the possibilities and the learning-curve make it a somewhat difficult question to answer. In this episode, we discuss the topic and ultimately believe that an individual is the only one who can answer that question well. That being said, the capabilities of Kubernetes can be quite persuasive and if you are tempted then it is most definitely worth considering very seriously, at least. In our discussion, we cover some of the problems that Kubernetes solves, as well as some of the issues that might arise when moving into the Kubernetes space. The panel shares their thoughts on learning a new platform and compare it with other tricky installations and adoption periods. From there, we look at platforms and how Kubernetes fits and does not fit into a traditional definition of what a platform constitutes. The last part of this episode is spent considering the future of Kubernetes and how fast that future just might arrive. So for all this and a bunch more, join us on The Podlets Podcast, today!
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Bryan Liles
      url: https://twitter.com/bryanl
points:
    - The main problems that Kubernetes solves and poses.
    - Why you do not need to understand distributed systems in order to use Kubernetes. 
    - How to get around some of the concerns about installing and learning a new platform. 
    - The work that goes into readying a Kubernetes production cluster. 
    - What constitutes a platform and can we consider Kubernetes to be one? 
    - The two ways to approach the apparent value of employing Kubernetes. 
    - Making the leap to Kubernetes is a personal question that only you can answer. 
    - Looking to the future of Kubernetes and its possible trajectories.
    - The possibility of more visual tools in the UI of Kubernetes. 
    - Understanding the concept of conditions in Kubernetes and its objects.
    - Considering appropriate times to introduce a team to Kubernetes. 
# Be sure to check the episode's hackmd for additional links:
links:
    - name: Weave
      url:  https://www.weave.works/docs/net/latest/overview/
    - name: AWS 
      url:  https://aws.amazon.com/
    - name: DigitalOcean
      url:  https://www.digitalocean.com/
    - name: Heroku
      url:  https://www.heroku.com/
    - name: Red Hat 
      url:  https://www.redhat.com/en
    - name: Debian 
      url:  https://www.debian.org/ 
    - name: Canonical 
      url:  https://canonical.com/
    - name: Kelsey Hightower 
      url:  https://github.com/kelseyhightower
    - name: Joe Beda 
      url:  https://www.vmware.com/latam/company/leadership/joe-beda.html
    - name: Azure 
      url:  https://azure.microsoft.com/en-us/
    - name: CloudFoundry 
      url:  https://www.cloudfoundry.org/
    - name: JAY Z 
      url:  https://lifeandtimes.com/
    - name: OpenStack 
      url:  https://www.openstack.org/
    - name: OpenShift 
      url:  https://www.openshift.com/
    - name: KubeVirt 
      url:  https://kubevirt.io/
    - name: VMware 
      url:  https://www.vmware.com/
    - name: Chef and Puppet 
      url:  https://www.chef.io/puppet/
    - name: tgik.io 
      url:  https://www.youtube.com/playlist?list=PL7bmigfV0EqQzxcNpmcdTJ9eFRPBe-iZa
    - name: Matthias Endler, Maybe You Don't Need Kubernetes 
      url:  https://endler.dev/2019/maybe-you-dont-need-kubernetes
    - name: Martin Tournoij, You (probably) don’t need Kubernetes
      url:  https://www.arp242.net/dont-need-k8s.html
    - name: Scalar Software, Why most companies don't need Kubernetes 
      url:  https://scalarsoftware.com/blog/why-most-companies-dont-need-kubernetes
    - name: GitHub, Kubernetes at GitHub 
      url:  https://github.blog/2017-08-16-kubernetes-at-github
    - name: Debugging network stalls on Kubernetes 
      url:  https://github.blog/2019-11-21-debugging-network-stalls-on-kubernetes/
    - name: One year using Kubernetes in production, Lessons learned
      url:  https://techbeacon.com/devops/one-year-using-kubernetes-production-lessons-learned
    - name: Kelsey Hightower Tweet, Kubernetes is a platform for building platforms. It's a better place to start; not the endgame 
      url:  https://twitter.com/kelseyhightower/status/935252923721793536?s=2
# Add only the YT id to the end of the URL below:
video: https://www.youtube.com/embed/0LD3Ap1WgG0
related: 
- 017-keeping-up-with-cloud-native
- 007-kubernetes-as-per-kelsey-hightower
- 012-learning-distributed-systems
---
EPISODE 18

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.9] JR: Hello everyone and welcome to The Podlets Podcast where we are going to be talking about should I Kubernetes? My name is Josh Rosso and I am very pleased to be joined by, Carlisia Campos.

[0:00:55.3] CC: Hi everybody.

[0:00:56.3] JR: Duffy Cooley.

[0:00:57.6] DC: Hey folks.

[0:00:58.5] JR: And Brian Lyles.

[0:01:00.2] BL: Hi.

[0:01:03.1] JR: All right everyone. I’m really excited about this episode because I feel like as Kubernetes has been gaining popularity over time, it’s been getting its fair share of promoters and detractors. That’s fair for any piece of software, right? I’ve pulled up some articles and we put them in the show notes about some of the different perspectives on both success and perhaps failures with Kub. 

But before we dissect some of those, I was thinking we could open it up more generically and think about based on our experience with Kubernetes, what are some of the most important things that we think Kubernetes solves for?

[0:01:44.4] DC: All right, my list is very short and what Kubernetes solves for my point of view is that it allows or it actually presents an interface that knows how to run software and the best part about it is that it doesn’t – the standard interface. I can target Kubernetes rather than targeting the underlying hardware. I know certain things are going to be there, I know certain networking’s going to be there.

I know how to control memory and actually, that’s the only reason that I really would give, say for Kubernetes, we need that standardization and you don’t want to set up VM’s, I mean, assuming you already have a cluster. This simplifies so much.

[0:02:29.7] BL: For my part, I think it’s life cycle stuff that’s really the biggest driver for my use of it and for my particular fascination with it. I’ve been in roles in the past where I was responsible for ensuring that some magical mold of application on a thousand machines would magically work and I would have all the dependencies necessary and they would all agree on what those dependencies were and it would actually just work and that was really hard.

I mean, getting to like a known state in that situation, it’s very difficult. Having something where either both the abstractions of containers and the abstraction of container orchestration, the ability to deploy those applications and all those dependencies together and the ability to change that application and its dependencies, using an API. That’s the killer part for me.

[0:03:17.9] CC: For me, from a perspective of a developer is very much what Duffy just said but more so the uniformity that comes with all those bells and whistles that we get by having that API and all of the features of Kubernetes. We get such a uniformity across such a really large surface and so if I’m going to deploy apps, if I’m going to allow containers, what I have to do for one application is the same for another application.

If I go work for another company, that uses Kubernetes, it is the same and if that Kubernetes is a hosted Kubernetes or if it’s a self-managed, it will be the same. I love that consistency and that uniformity that even so I can – there are many tools that help, they are customized, there’s help if you installing and composing specific things for your needs. But the understanding of what you were doing is it’s the same, right? 

I can use different tools and it might look different and they will have different commands but what I’m actually doing, it doesn’t change and my understanding of what I’m doing doesn’t change. I love that. Being able to do my work in the same way, I wish, you know, if that alone for me makes it worthwhile.

[0:04:56.0] JR: Yeah, I think like my perspective is pretty much the same as what you all said and I think the one way that I kind of look at it too is Kubernetes does a better job of solving the concerns you just listed, then I would probably be able to build myself or my team would be able to solve for ourselves in a lot of cases. I’m not trying to say that specialization around your business case or your teams isn’t appropriate at times, it’s just at least for me, to your point Carlisia, I love that abstraction that’s consistent across environments. It handles a lot of the things, like Brian was saying, about CPU, memory, resources and thinking through all those different pieces. 

I wanted to take what we just said and maybe turn it a bit at some of the common things that people run in to with Kubernetes and just to maybe hit on a piece of low hanging fruit that I think is oftentimes a really fair perspective is Kubernetes is really hard to operate. Sure, it gives you all the benefits we just talked about but managing a Kubernetes cluster? That is not a trivial task. And I just wanted to kind of open that perspective up to all of us, you know? What are your thoughts on that?

[0:06:01.8] DC: Well, the first thought is it doesn’t have to be that way. I think that’s a fallacy that a lot of people fall into, it’s hard. Guess what? That’s fine, we’re in the sixth year of Kubernetes, we’re not in the sixth year of stability of a stable release. It’s hard to get started with Kubernetes and what happens is we use that as an excuse to say well, you know what? It’s hard to get started with so it’s a failure.

You know something else that was hard to get started with? Whenever I started with it in the 90s? Linux. You download it and downloading it on 30 floppy disks. There was the download corruption, real things, Z modem, X modem, Y modem. This is real, a lot of people don’t know about this. And then, you had to find 30 working flopping disk and you had to transfer 30, you know, one and a half megabyte — and it still took a long time to floppy disk and then you had to run the installer.

And then most likely, you had to build a kernel. Downloading, transferring, installing, building a kernel, there was four places where just before you didn’t have windows, this was just to get you to a log in prompt, that could fail.

With Kubernetes, we had this issue. People were installing Kubernetes, there’s cloud vendors who are installing it and then there’s people who were installing it on who knows what hardware. Guess what? That’s hard and it’s not even now, it’s not even they physical servers that’s networking. Well, how are you going to create a network that works across all your servers, well you’re going to need an overlay, which one are you going to use, Calico? Use Weave?

You’re going to need something else that you created or something else if it works. Yeah, just we’re still figuring out where we need to be but these problems are getting solved. This will go away.

[0:07:43.7] BL: I’m living that life right now, I just got a new laptop and I’m a Linux desktop kind of guy and so I’m doing it right now. What does it take to actually get a recent enough kernel that the hardware that is shipped with this laptop is supported, you know? It’s like, those problems continue, even though Linux has been around and considered stable and it’s the underpinning of much of what we do on the internet today, we still run into these things, it’s still a very much a thing.

[0:08:08.1] CC: I think also, there’s a factor of experience, for example. This is not the first time you have to deal with this problem, right Duffy? Been using Linux on a desktop so this is not the first hardware that you had to setup Linux on. So you know where to go to find that information.

Yeah, it’s sort of a pain but it’s manageable. I think a lot of us are suffering from gosh, I’ve never seen Kubernetes before, where do I even start and – or, I learned Kubernetes but it’s quite burdensome to keep up with everything as opposed to let’s say, if 10 years from now, we are still doing Kubernetes. You’ll be like yeah, okay, whatever. This is no big deal. So because we have done these things for a few years that we were not possibly say that it’s hard. I don’t’ think we would describe it that way.

[0:09:05.7] DC: I think there will still be some difficulty to it but to your point, it’s interesting, if I look back like, five years ago, I was telling all of my friends. Look, if you’re a system’s administrator, go learn how to do other things, go learn how to be, go learn an API centric model, go play with AWS, go play with tools like this, right?

If you’re a network administrator, learn to be a system’s administrator but you got to branch out. You got to figure out how to ensure that you’re relevant in the coming time. With all the things that are changing, right? This is true, I was telling my friend this five years ago, 10 years ago, continues, I continue to tell my friends that today.

If I look at the Kubernetes platform, the complexity that represents in operating it is almost tailor made to those people though did do that, that decided to actually branch out and to understand why API’s are interesting and to understand, you know, can they have enough of an understanding in a generalist way to become a reasonable systems administrator and a network administrator and you know, start actually understanding the paradigms around distributed systems because those people are what we need to operate this stuff right now, we’re building – 

I mean, Kubernetes is a distributed system, we need people with expertise across that field, across that whole grouping of technologies.

[0:10:17.0] BL: Or, don’t. Don’t do any of that.

[0:10:19.8] CC: Brian, let me follow up on that because I think it’s great that you pointed that out Duffy. I was thinking precisely in terms of being a generalist and understanding how Kubernetes works and being able to do most of it but it is so true that some parts of it will always be very complex and it will require expertise. For example, security. Dealing with certificates and making sure that that’s working, if you want to – if you have particular needs for networking, but, understanding the whole idea of this systems, as it sits on top of Kubernetes, grasping that I think is going to – have years of experience under their belt. Become relatively simple, sorry Brian that I cut you off.

[0:11:10.3] BL: That’s fine but now you gave me something else to say in addition to what I was going to say before. Here’s the killer. You don’t need to know distributed systems to use Kubernetes. Not at all. You can use a deployment, you can use a [inaudible] set, you can run a job, you can get workloads up on Kubernetes without having to understand that.

But, Kubernetes also gives you some good constructs either in the Kubernetes API's itself or in its client libraries where you could build distributed systems in easier way but what I was going to say before that though is I can’t build a cluster. Well don’t. You know what you should do? Use a cloud vendor, use AWS, use Google, use Microsoft or no, I mean, did I say Microsoft? Google and Microsoft. Use Digital Ocean.

There’s other people out there that do it as well, they can take care of all the hard things for you and three, four minutes or 10 minutes if you’re on certain clouds, you can have Kubernetes up and running and you don’t even have to think about a lot of these networking concerns to get started.

I think that’s a little bit of the thud that we hear, "It’s hard to install." Well, don’t install it, you install it whenever you have to manage your own data centers. Guess what? When you have to manage your own data centers and you’re managing networking and storage, there’s a set of expertise that you already have on staff and maybe they don’t want to learn a new thing, that’s a personal problem, that’s not really a Kubernetes problem. Let’s separate those concerns and not use our lack or not wanting to, to stop us from actually moving forward. 

[0:12:39.2] DC: Yeah. Maybe even taking that example step forward. I think where this problem compounds or this perspective sometimes compounds about Kubernetes being hard to operate is coming from of some shops who have the perspective of are operational concerns today, aren’t that complex. Why are we introducing this overhead, this thing that we maybe don’t need and you know, to your point Brian, I wonder if we’d all entertain the idea, I’m sure we would that maybe even, speaking to the cloud vendors, maybe even just a Heroku or something.

Something that doesn’t even concern itself with Kube but can get your workload up and running and successful as quickly as possible.  Especially if you’re like, maybe a small startup type persona, even that’s adequate, right? It could have been not a failure of Kubernetes but more so choosing the wrong tool for the job, does that resonate with you all as well, does that make sense?

[0:13:32.9 DC: Yeah, you know, you can’t build a house with a screwdriver. I mean, you probably could, it would hurt and it would take a long time. That’s what we’re running into. What you’re really feeling is that operationally, you cannot bridge the gap between running your application and running your application in Kubernetes and I think that’s fair, that’s actually a great thing, we prove that the foundations are stable enough that now, we can actually do research and figure out the best ways to run things because guess what?

RPM’s from Red Hat and then you have devs from the Debian project, different ways of getting things, you have Snap from Canonical, it works and sometimes it doesn’t, we need to actually figure out those constructs in Kubernetes, they’re not free. These things did not exist because someone says, "Hey, I think we should do this." Many years. I was using RPM in the 90s and we need to remember that.

[0:14:25.8] JR: On that front, I want to maybe point a question to you Duffy, if you don’t mind. Another big concern that I know you deal with a lot is that Kubernetes is great. Maybe I can get it up no problem. But to make it a viable deployment target at my organization, there’s a lot of work that goes into it to make a Kubernetes cluster production ready, right? That could be involving how you integrate storage and networking and security and on and on.

I feel like we end up at this tradeoff of it’s so great that Kubernetes is super extensible and customizable but there is a certain amount of work that that kind of comes with, right? I’m curious Duff, what’s your perspective on that?

[0:15:07.3] DC: I want to make a point that bring back to something Brian mentioned earlier, real quick, before I go on to that one. The point is that, I completely agree that yo do not have to actually be a distributed systems person to understand how to use Kubernetes and if that were a bar, we would have set that bar and incredibly, the inappropriate place. But from the operational perspective, that’s what we were referring to.

I completely also agree that especially when we think about productionalizing clusters, if you’re just getting into this Kubernetes thing, it may be that you want to actually farm that out to another entity to create and productionalize those clusters, right? You have a choice to make just like you had a choice to make what when AWS came along. Just like you had a choice to make — we’re thinking of virtual machines, right? 

You have a choice and you continue to have a choice about how far down that rabbit hole as an engineering team of an engineering effort your company wants to go, right? Do you want farm everything out to the cloud and not have to deal with the operations, the day to day operations of those virtual machines and take the constraints that have been defined by that platformer, or do you want to operate that stuff locally, are you required by the law to operate locally?

What does production really mean to you and like, what are the constraints that you actually have to satisfy, right? I think that given that choice, when we think about how to production Alize Kubernetes, it comes down to exactly that same set of things, right? Frequently, productionalizing – I’ve seen a number of different takes on this and it’s interesting because I think it’s actually going to move on to our next topic in line here.

Frequently I see that productionizing or productionalizing Kubernetes means to provide some set of constraints around the consumption of the platform such that your developers or the focus that are consuming that platform have to operate within those rails, right? They could only define deployments and they can only define deployments that look like this.

We’re going to ask them a varied subset of questions and then fill out all the rest of it for them on top of Kubernetes. The entry point might be CICD, it might be a repository, it might be code repository, very similar to a Heroku, right? The entry point could be anywhere along that thing and I’ve seen a number of different enterprises explore different ways to implement that.

[0:17:17.8] JR: Cool. Another concept that I wanted to maybe have us define and think about, because I’ve heard the term platform quite a bit, right? I was thinking a little bit about you know, what the term platform means exactly? Then eventually, whether Kubernetes itself should be considered a platform.

Backing u, maybe we could just start with a simple question, for all of us, what makes something a platform exactly?

[0:17:46.8] BL: Well, a platform is something that provides something. That is a Brian Lyles exclusive. But really, what it is, what is a platform, a platform provides some kind of service that can be used to accomplish some task and Kubernetes is a platform and that thing, it provides constructs through its API to allow you to perform tasks. 

But, Kubernetes is not just a platform. Kubernetes is a platform for building platforms. The things that Kubernetes provides, the workload API, the networking API, the configuration and storage API’s. What they provide is a facility for you to build higher level constructs that control how you want to run the code and then how you want to connect the applications. Yeah, Kubernetes is actually a platform for platforms.

[0:18:42.4] CC: Wait, just to make sure, Brian. You’re saying, because Kelsey Hightower for example is someone who says Kubernetes is a platform of platforms. Now, is Kubernetes both a platform of platforms, at the same time that it’s also a platform to run apps on?

[0:18:59.4] BL: It’s both. Kelsey tweeted that there is some controversy on who said that first, it could have been Joe Beda, it could have been Kelsey. I think it was one of those two so I want to give a shout out to both of those for thinking in the same line and really thinking about this problem.

But to go back to what you said, Carlisia, is it a platform for providing platforms and a platform? Yes, I will explain how. If you have Kubernetes running and what you can do is you can actually talk to the API, create a deployment. That is platform for running a workload. But, also what you can do is you can create through Kubernetes API mechanisms, ie. CRD’s, custom resource definitions.

You can create custom resources that I want to have something called an application. You can basically extend the Kubernetes API. Not only is Kubernetes allowing you to run your workloads, it’s allowing you to specify, extend the API, which then in turn can be run with another controller that’s running on your platform that then gives you this thing when you cleared an application. Now, it creates deployment which creates a replica set, which creates a pod, which creates containers, which downloads images from a container registry. It actually is both.

[0:20:17.8] DC: Yeah, I agree with that. Another quote that I remember being fascinated by which I think kind of also helps define what a platform is Kelsey put on out quote that said, Everybody wants platform at a service with the only requirement being that they’ve built it themselves." Which I think is awesome and it also kind of speaks, in my opinion to what I think the definition of a platform is, right?

It’s an interface through which we can define services or applications and that interface typically will have some set of constraints or some set of workflows or some defined user experience on top of it. To Brian's point, I think that Kubernetes is a platform because it provides you a bunch of primitive s on the back end that you can use to express what that user experience might be.

As we were talking earlier about what does it take to actually – you might move the entry point into this platform from the API, the Kubernetes API server, back down into CICD, right? Perhaps you're not actually defining us and called it a deployment, you’re just saying, I want so many instances off this, I don’t want it to be able to communicate with this other thing, right? It becomes – so my opinion, the definition about of a platform it is that user experience interface. It’s the constraints that we know things that you're going to put on top of that platform.

[0:21:33.9] BL: I like that. I want to throw out a disclaimer right here because we’re here, because we’re talking about platforms. Kubernetes is not a platform, it’s as surface. That is actually, that’s different, a platform as a service is – from the way that we look at it, is basically a platform that can run your code, can actually make your code available to external users, can scale it up, can scale it down and manages all the nuances required for that operation to happen.

Kubernetes does not do that out of the box but you can build a platform as a surface on Kubernetes. That’s actually, I think, where we’ll be going next is actually people, stepping out of the onesy-twosy, I can deploy a workload, but let’s actually work on thinking about this level. And I’ll tell you what. DEUS who got bought by Azure a few years ago, they actually did that, they built a pass that looks like Heroku.

Microsoft and Azure thought that was a good idea so they purchased them and they’re still over there, thinking about great ideas but I think as we move forward, we will definitely see different types of paths on Kubernetes. The best thing is that I don’t think we’ll see them in the conventional sense of what we think now.

We have a Heroku, which is like the git-push Heroku master, we share code through git. And then we have CloudFoundry idea of a paths which is, you can run CFPush and that actually is more of an extension of our old school Java applications, where we could just push [inaudible] here but I think at least I am hoping and this is something that I am actually working on not to toot my own horn too much but actually thinking about how do we actually – can we build a platform as a service toolkit? 

Can I actually just build something that’s tailing to my operation? And that is something that I think we’ll see a lot more in the next 18 months. At least you will see it from me and people that I am influencing. 

[0:23:24.4] CC: One thing I wanted to mention before we move onto anything else, in answering “Is Kubernetes right for me?” We are so biased. We need to play devil’s advocate at some point. But in answering that question that is the same as in when we need to answer, “Is technology x right for me?” and I think there is at a higher level there are two camps. 

One camp is very much of the thinking that, "I need to deliver value. I need to allow my software and if the tools I have are solving my problem I don’t need to use something else. I don’t need to use the fancy, shiny thing that’s the hype and the new thing." And that is so right. You definitely shouldn't be doing that. 

I am divided on this way of thinking because at the same time at that is so right. You do have to be conscious of how much money you’re spending on things and anyway, you have to be efficient with your resources. But at the same time, I think that a lot of people who don’t fully understand what Kubernetes really can do and if you are listening to this, if you maybe could rewind and listen to what Brian and Duffy were just saying in terms of workflows and the Kubernetes primitives. Because those things they are so powerful. They allow you to be so creative with what you can do, right? With your development process, with your roll out process and maybe you don’t need it now. 

Because you are not using those things but once you understand what it is, what it can do for your used case, you might start having ideas like, “Wow, that could actually make X, Y and Z better or I could create something else that could use these things and therefore add value to my enterprise and I didn’t even think about this before.” So you know two ways of looking at things. 

[0:25:40.0] BL: Actually, so the topic of this session was, “Should I Kubernetes” and my answer to that is I don’t know. That is something for you to figure out. If you have to ask somebody else I would probably say no. But on the other side, if you are looking for great networking across a lot of servers. If you are looking for service discovery, if you are looking for a system that can restart workloads when they fail, well now you should probably start thinking about Kubernetes. 

Because Kubernetes provides all of these things out of the box and are they easy to get started with though? Some of these things are harder. Service discovery is really easy but some of these things are a little bit harder but what Kubernetes does is here comes my hip-hop quote, Jay Z said this, basically he’s talking about difficult things and he basically wants difficult things to take a little bit of time and impossible things or things we thought that were impossible to take a week. 

So basically making difficult things easy and making things that you could not even imagine doing, attainable. And I think that is what Kubernetes brings to the table then I’ll go back and say this one more time. Should you use Kubernetes? I don’t know that is a personal problem that is something you need to answer but if you’re looking for what Kubernetes provides, yes definitely you should use it. 

[0:26:58.0] DC: Yeah, I agree with that I think it is a good summary there. But I also think you know coming back to whether you should Kubernetes part, from my perspective the reason that I Kubernetes, if you will, I love that as a verb is that when I look around at the different projects in the infrastructure space, as an operations person, one of the first things I look for is that API that pattern around consumption, what's actually out there and what’s developing that API. 

Is it a the business that is interested in selling me a new thing or is it an API that’s being developed by people who are actually trying to solve real problems, is there a reasonable way to go about this. I mean when I look at open stack, OpenStack was exactly the same sort of model, right? OpenStack existed as an API to help you consume infrastructure and I look at Kubernetes and I realize, “Wow, okay well now we are developing an API that allows us to think about the life cycle and management of applications." 

Which moves us up the stack, right? So for my part, the reason I am in this community, the reason I am interested in this product, the reason I am totally Kubernetes-ing is because of that. I realized that fundamentally infrastructure has to change to be able to support the kind of load that we are seeing. So whether you should Kubernetes, is the API valuable to you? Do you see the value in that or is there more value in continuing whatever paradigm you’re in currently, right? And judging that equally I think is important. 

[0:28:21.2] JR: Two schools of thoughts that I run into a lot on the API side of thing is whether overtime Kubernetes will become this implementation detail, where 99% of users aren’t even aware of the API to any extent. And then another one that kind of talks about the API is consistent abstraction with tons of flexibility and I think companies are going in both directions like OpenShift from Red Hat is perhaps a good example. 

Maybe that is one of those layer two platforms more so Brian that you were talking about, right? Where Kubernetes is the platform that was used to build it but the average person that interacts with it might not actually be aware of some of the Kubernetes primitives and things like that. So if we could all get out of our crystal balls for a second here, what do you all think in the future? Do you see the Kubernetes API becoming just a more prevalent industry standard or do you see it fading away in favor of some other abstraction that makes it easier? 

[0:29:18.3] BL: Oh wow, well I already see it as I don’t have to look too far in the future, right? I can see the Kubernetes API being used in ways that we could not imagine. The idea that I will think of is like KubeVirt. KubeVirt allows you to boot basically pods on whatever implements that it looks like a Kubelet. So it looks like something that could run pods. But the neat thing is that you can use something like KubeVirt with a virtual Kubelet and now you can boot them on other things. 

So ideas in that space, I don’t know VMware is actually going on that, “Wow, what if we can make virtual machines look like pods inside of Kubernetes? Pretty neat." Azure has definitely led work on this as now, we can just bring up either bring up containers, we can bring up VM’s and you don’t actually need a Kube server anymore. Now but the crazy part is that you can still use a workloads API’s, storage API’s with Kubernetes and it does not matter what backs it. 

And I’ll throw out one more suggestion. So there is also projects like AWS operators in [inaudible] point and what they allow you to do is to use the Kubernetes API or actually in cluster API, I'll use all three. But I use the Kubernetes API to boot things that aren’t even in the cluster and this will be AWS services or this could be databases across multiple clouds or guess what? More Kubernetes services. Yeah, so we are on that path but I just can’t wait to see what people are going to do with that. The power of Kubernetes is this API, it is just so amazing. 

[0:30:50.8] DC: For my part, I think is that I agree that the API itself is being extended in all kinds of amazing ways but I think that as I look around in the crystal ball, I think that the API will continue to be foundational to what is happening. If I look at the level two or level three platforms that are coming, I think those will continue to be a thing for enterprises because they will continue to innovate in that space and then they will continue to consume the underlying API structure and that portability Kubernetes exposes to define what that platform might look like for their own purpose, right? 

Giving them the ability to effectively have a platform as a service that they define themselves but using and under – you know, using a foundational layer that it’s like consistent and extensible and extensive I think that that’s where things are headed.

[0:31:38.2] CC: And also more visual tools, I think is in our future. Better, actual visual UI's that people can use I think that’s definitely going to be in our future. 

[0:31:54.0] BL: So can I talk about that for a second?

[0:31:55.9] CC: Please, Brian. 

[0:31:56.8] BL: I am wearing my octant hoodie today, which is a visual tool for Kubernetes and I will talk now as someone who has gone down this path to actually figure this problem out. As a prediction for the future, I think we’ll start creating better API’s in Kubernetes to allow for more visual things and the reason that I say that this is going to happen and it can’t really happen now is because for inside of an octant and whenever creating new eye views, pretty much happened now what that optic is.

But what is going to happen and I see the rumblings from the community, I see the rumblings from K-native community as well is that we are going to start standardizing on conditions and using conditions as a way that we can actually say what’s going on. So let me back it up for a second so I can explain to people what conditions are. 

So Kubernetes, we think of Kubernetes as YAML and in a typical object in Kubernetes, you are going to have your type meta data. What is this, you are going to have your object meta data, what’s name this and then you are going to have a spec, how is this thing configured and then you are going to have a status and the status generally will say, “Well what is the status of this object? Is it deployment? How many references out? If it is a pod, am I ready to go?" 

But there is also this concept and status called conditions, which are a list of things that say how your thing, how your object is working. And right now, Kubernetes uses them in two ways, they use them in the negative way and the positive way. I think we are actually going to figure out which one we want to use and we are going to see more API’s just say conditions. And now from a UI developer, from my point of view, now I can just say, “I don’t really care what your optic is. You are going to give me conditions in a format that I know and I can just basically report on those in the status and I can tell you if the thing is working or not.” 

That is going to come too. And that will be neat because that means that we get basically, we can start building UI’s for free because we just have to learn the pattern. 

[0:33:52.2] CC: Can you talk a little bit more about conditions? Because this is not something I hear frequently and that I might know but then not know what you are talking about by this name. 

[0:34:01.1] BL: Oh yeah, I will give you the most popular one. So everything in Kubernetes is an object and that even means that the nodes that your workloads run on, are objects. If you run KubeControl, KubeCuddle, Kube whatever, git nodes, it will show you all the nodes in your cluster if you have permission to see that and if you do KubeCTL, gitnode, node name and then you actually have the YAML output what you will see in the bottom is an object called 'conditions'. 

And inside of there it will be something like is there sufficient memory, is the node – I actually don’t remember all of them but really what it is, they’re line items that say how this particular object is working. So do I have enough memory? Do I have enough storage? Am I out of actual pods that can be launched on me and what conditions are? It is basically saying, “Hey Brian, what is the weather outside?” I could say it's nice. 

Or I could be like, “Well, it’s 75 degrees, the wind is light but variable. It is not humid and these are what the conditions are.” They allow the object to specify things about itself that might be useful to someone who is consuming it. 

[0:35:11.1] CC: All right that was useful. I am actually trying to bring one up here. I never paid attention to that. 

[0:35:18.6] BL: Yeah and you will see it. So the two ones that are most common right now, there is some competition going on in Kubernetes architecture, trying to figure out how they are going to standardize on this but with pods and nodes you will see conditions on there and those are just telling you what is going on but the problem is that a condition is a type, a message, a status and something else but the problem is that the status can be true of false — oh and a reason, the status can be true or false but sometimes the type is a negative type where it would be like “node not ready”. 

And then it will say false because it is. And now whenever you’re inspecting that with automated code, you really want the positive condition to be true and the negative condition to be false and this is something that the K-native community is really working on now. They have the whole facility of this thing called duck typing. Which they can actually now pattern-match inside of optics to find all of these neat things. It is actually pretty intriguing. 

[0:36:19.5] CC: All right, it is interesting because I very much status is everything for objects and that is very much a part of my work flow. But I never noticed that there was some of the objects had conditions. I never noticed that and just a plug, we are very much going to have the K-native folks here to talk about duck typing. I am really excited about that. 

[0:36:39.9] BL: Yeah, they’re on my team. They’ll be happy to come. 

[0:36:42.2] CC: Oh yes, they are awesome. 

[0:36:44.5] JR: So I was thinking maybe we could wrap this conversation up and I think we have acknowledged that “Should I Kubernetes?” is a ridiculously hard question for us to answer for you and we should clearly not be the ones answering it for you but I was wondering if we could give some thoughts around — for the Podlet listener who is sitting at their desk right now thinking like, “Is now the right time for my organization to bring this in?” 

And I will start with some thought and then open it all up to you. So one common thing I think that I run into a lot is you know your current state and you know your desired state to steal a Kubernetes concept for a moment. And the desired state might be more decoupled services that are more scalable and so on and I think oftentimes at orgs we get a little bit too obsessed with the desired state that we forget about how far the gap is between the current state and the desired state. 

So as an example, you know maybe your shop’s biggest issue is the primary revenue generating application is a massive dot-net framework monolith, which isn’t exactly that easy to just port over into Kubernetes, right? So if a lot of your friction right now is teams collaborating on this tool, updating this tool, scaling this tool, maybe before even thinking about Kubernetes, being honest with the fact that a lot of value can be derived right now from some amount of application architecture changes. 

Or even sorry to use a buzzword but some amount of modernization of aspects of that application before you even get to the part of introducing Kubernetes. So that is one common one that I run into with orgs. What are some other kind of suggestion you have for people who are thinking about, “Is it the right time to introduce Kube?”

[0:38:28.0] BL: So here is my thought, if you work for a small startup and you’re working on shipping value and you have no Kubernetes experience and staff and you don’t want to use for some reason you don’t want to use the cloud, you know go figure out your other problems then come back. But if you are an enterprise and especially if you work in a central enterprise group and you are thinking about “modernization”, I actually do suggest that you look at Kubernetes and here is the reason why. 

My guess is that if you’re a business of a certain size, you run VMware in your data center. I am just guessing that because I haven’t been to a company that doesn’t. Because we learned a long time ago that using virtual machines in many cases is way more efficient than just running hardware because what happens is we can’t use our compute capacity. So if you are working for a big company or even like a medium sized company, I don’t think – 

I am not telling you to run for it but I am telling you to at least have someone go look at it and investigate if this could ultimately be something that could make your stack easier to run. 

[0:39:31.7] DC: I think I am going to take the kind of the operations perspective. I think if you are in the business of coming up with a way to deploy applications on the servers and you are looking at trying to handle the lifecycle of that and you’re pretty fed up with the tooling that is out there and things like Puppet and Chef and tooling like that and you are looking to try and understand is there something in Kubernetes for me? 

Is there some model that could help me improve the way that I actually handle a lifecycle of those applications, be they databases or monoliths or compostable services? Any which way you want to look at it like are there tools there that can be expressed. Is the API expressive enough to help me solve some of those problems? In my opinion the answer is yes. I look at things like DaemonSet and the things like scheduling [inaudible] that are exposed by Kubernetes. 

And there is actually quite a lot of power there, quite a lot of capability in just the traditional model of how do I get this set of applications onto that set of servers or some subset they’re in. So I think it is worth evaluating if that is the place you’re in as an organization and if you are looking at fleets of equipment and trying to handle that magical recipe of multiple applications and dependencies and stuff. See what is the water is like on this side, it is not so bad. 

[0:40:43.1] CC: Yes, I don’t think there is a way to answer this question. It is Kubernetes for me without actually trying it, giving it a try yourself like really running something of maybe low risk. We can read blogposts to the end of the world but until you actually do it and explore the boundaries is what I would say, try to learn what else can you do that maybe you don’t even need but maybe might become useful once you know you can use. 

Yeah and another thing is maybe if you are a shop that has one or two apps and you don’t need full blown, everything that Kubernetes has to offer and there is a much more scaled down tool that will help you deploy and run your apps, that’s fine. But if you have more, a certain number, I don’t know what that number would be but multiple apps and multiple services just think about having that uniformity across everything. 

Because for example, I’ve worked in shops where the QA machines were taking care by a group of dev ops people and the production machines, oh my god they were taken care by other groups and now the different group of people and the two sides of these groups used were different and I as a developer, I had to know everything, you know? How to deploy here, how to deploy there and I had to have my little notes and recipes because whenever I did it – 

First of all I wasn’t doing that multiple times a day. I had to read through the notes to know what to do. I mean just imagine if it was one platform that I was deploying to with the CLI comments there, it is very easy to use like Kubernetes has, gives us with Kubes ETL. You know you have to think outside of the box. Think about these other operations that you have that people in your company are going to have to do. How is this going to be taught in the future? 

Having someone who knows your stack because your stack is the same that people in your industry are also using. I think about all of these things not just – I think people have to take it across the entire set of problems. 

[0:43:01.3] BL: I wanted to mention one more thing and this is we are producing lots of content here with The Podlets and with our coworkers. So I want to actually give a shout out to the TGIK. We want to know what you can do in Kubernetes and you want to have your imagination expanded a little bit. Every Friday we make a new video and actually funny enough, three fourths of the people on this call have actually done this. 

Where, on Friday, we pick a topic and we go in and it might be something that would be interesting to you or it might not and we are all over the place. We are not just doing applications but we are applications low level, mapping applications on Kubernetes, new things that just came out. We have been doing this for a 101 episodes now. Wow. So you can go look at that if you need some examples of what things you could do on Kubernetes. 

[0:43:51.4] CC: I am so glad to tgik.io maybe somebody, an English speaker should repeat that because of my accent but let me just say I am so glad you mentioned that Brian because I was sitting here as we are talking and thinking there should be a catalog of used cases of what Kubernetes can do not just like the rice and beans but a lot of different used cases, maybe things that are unique that people don’t think about to use because they haven’t run into that need yet. 

But they could use it as a pause, okay that would enable me to do these thing that I didn’t even think about. That is such a great catalog of used cases. It is probably the best resource. Somebody say the website again? Duffy what is it?

[0:44:38.0] DC: tgik.io and it is every Friday at 1 PM Pacific. 

[0:44:43.2] CC: And it is live. It’s live and it’s recorded, so it is uploaded to the VMware Cloud Native YouTube and everything is going to be on the show notes too. 

[0:44:52.4] DC: It’s neat, you can come ask us questions there is a live chat inside of that and you can use that live chat. You can ask us questions. You can give us ideas, all kinds of crazy things just like you can with The Podlets. If you have an idea for an episode or something that you want us to cover or if you have something that you are interested in, you can go to thepodlets.io that will link you to our GitHub pages where you can actually open an issue about things you’d love to hear more about. 

[0:45:15.0] JR: Awesome and then maybe on that note, Podlets, is there anything else you all would like to add on “Should I Kubernetes?” or do you think we’ve – 

[0:45:22.3] BL: As best as our bias will allow it I would say. 

[0:45:27.5] JR: As best as we can. 

[0:45:27.9] CC: We could go another hour. 

[0:45:29.9] JR: It’s true. 

[0:45:30.8] CC: Maybe we’ll have “Should I Kubernetes?” Part 2. 

[0:45:34.9] JR: All right everyone, well that wraps it up for at least Part 1 of “Should I Kubernetes?” and we appreciate you listening. Thanks so much. Be sure to check out the show notes as Duffy mentioned for some of the articles we read preparing for this episode and TGIK links and all that good stuff. 

So again, I am Josh Russo signing out, with us also Carlisia Campos.

[0:45:55.8] CC: Bye everybody, it was great to be here. 

[0:45:57.7] JR: Duffy Coolie. 

[0:45:58.5] DC: Thanks you all. 

[0:45:59.5] JR: And Brian Lyles.

[0:46:00.6] BL: Until next time. 

[0:46:02.1] JR: Bye. 

[END OF EPISODE]

[0:46:03.5] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
