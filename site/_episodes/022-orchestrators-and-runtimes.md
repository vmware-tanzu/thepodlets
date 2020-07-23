---
# General note: look at other episode files and follow the same format
# TODOs
# 1) Upload mp3 file to omnystudio
# 2) No episode number in the title; add ep number to the "Episode number" field
# 3) Keep it private, but set the date to publish (always on a Mon at 8:30AM)
# 4) Add episode to playlist; save
# 5) Fetch episode slug from Advanced settings > slug (note 1: it can be changed but never after the publish date; note 2: there should be no episode number in the slug)
# 6) Paste the slug into episode_id below
# 7) Commit 
episode_id: orchestrators-and-runtimes 
episode_number: 22
title: Orchestrators and Runtimes
# "description" is a short version of the show notes:
description: Today we are asking questions about orchestration and runtimes and trying to see if we can agree on whether Kubernetes primarily does one or the other, or even something else. Kubernetes may rather be described as a platform for instance! In order to answer these questions, we look at what constitutes an orchestrator, thinking about management, workflow, and security across a network of machines. 
# "notes" is the entire show notes:
notes: Due to its vast array of capabilities and applications, it can be challenging to pinpoint the exact essence of what Kubernetes does. Today we are asking questions about orchestration and runtimes and trying to see if we can agree on whether Kubernetes primarily does one or the other, or even something else. Kubernetes may rather be described as a platform for instance! In order to answer these questions, we look at what constitutes an orchestrator, thinking about management, workflow, and security across a network of machines. We also get into the nitty-gritty of runtimes and how Kubernetes can fit into this model too. The short answer to our initial question is that defining a platform, orchestrator or a runtime depends on your perspective and tasks and Kubernetes can fulfill any one of these buckets. We also look at other platforms, either past or present that might be compared to Kubernetes in certain areas and see what this might tell us about the definitions. Ultimately, we come away with the message that the exact way you slice what Kubernetes does, is not all-important. Rigid definitions might not serve us so well and rather our focus should be on an evolving understanding of these terms and the broadening horizon of what Kubernetes can achieve. For a really interesting meditation on how far we can take the Kube, be sure to join us today!
# Uncomment and add guests if any
# guests:
    # - name: 
    #   url: 
hosts: 
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Michael Gasch
      url: https://twitter.com/embano
    - name: Olive Power
      url: https://twitter.com/opowero
points:
    - What defines an orchestrator? Different kinds of management, workflow, and security. 
    - Considerations in a big company that go into licensing, security and desktop content.
    - Can we actually call Kubernetes and orchestrator or a runtime?  
    - How managing things at scale increases the need for orchestration. 
    - An argument for Kubernetes being considered an orchestrator and a runtime. 
    - Understanding runtimes as part of the execution environment and not the entire environment.  
    - How platforms, orchestration, and runtimes change positions according to perspective. 
    - Remembering the 'container orchestration wars' between Mezos, Swarm, Nomad, and Kubernetes. 
    - The effect of containerization and faster release cycles on the application of updates. 
    - Instances that Kubernetes might not be used for orchestration currently. 
    - The increasingly lower levels at which you can view orchestration and containers. 
    - The great job that Kubetenes is able to do in the orchestration and automation layer. 
    - How Kubernetes removes the need to reinvent everything over and over again. 
    - Breaking down rigid definitions and allowing some space for movement. 

# Be sure to check the episode's additional links in the notes:
links:
    - name: Apache Airflow
      url: https://airflow.apache.org/
    - name: SSCM 
      url: https://www.lynda.com/Microsoft-365-tutorials/SSCM-Office-Deployment-Tool/5030992/2805770-4.html
    - name: Ansible 
      url: https://www.ansible.com/
    - name: Docker 
      url: https://www.docker.com/
    - name: Joe Beda 
      url: https://www.vmware.com/latam/company/leadership/joe-beda.html
    - name: Jazz Improvisation over Orchestration 
      url: https://blog.heptio.com/core-kubernetes-jazz-improv-over-orchestration-a7903ea92ca?gi=5c729e924f6c
    - name: containerd 
      url: https://containerd.io/
    - name: AWS 
      url: https://aws.amazon.com/
    - name: Fleet 
      url: https://coreos.com/fleet/docs/latest/launching-containers-fleet.html
    - name: Puppet 
      url: https://puppet.com/
    - name: HashiCorp Nomad 
      url: https://nomadproject.io/
    - name: Mesos 
      url: http://mesos.apache.org/
    - name: Swarm 
      url: https://docs.docker.com/get-started/swarm-deploy/
    - name: Red Hat 
      url: https://www.redhat.com/en
    - name: Zalando 
      url: https://zalando.com/
# Add only the YT id to the end of the URL below:
video: https://www.youtube.com/embed/4UTrdzXPNr4
# related needs to be the episode id of the episode, not the file name. Ex: 010-the-dichotomy-of-security
related: 
- should-i-kubernetes 
- 005-cloud-native-infrastructure
- 015-the-network
- 014-jobs-in-cloud-native
---
EPISODE 22

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:40.4] DC: Good afternoon everybody and welcome to Episode 21 of The Podlets. In this episode, we’re going to explore orchestrators and runtimes and we’re going to just kind of break in to those topics and maybe like talk about a couple of things that we’ve seen. It should be a pretty fun discussion. 

Today, I have with me Josh Rosso.

[0:00:59.1] JR: Hello.

[0:00:59.6] DC: I got Michael Gasch.

[0:01:00.6] MG: Hello.

[0:01:01.8] DC: Olive Power.

[0:01:03.5] OP: Hello.

[0:01:04.8] DC: Away we go. Clearly, one of the orchestrators that we’ve all heard of is Kubernetes. Get that one out of the way but I think we should probably like dig into what it means to be an orchestrator, like what is an orchestrator in this particular context, do we have an idea?

[0:01:18.8] JR: I’ll start. I mean, simply, it seems to be something that’s going to kind of manage something and manage is probably like so packed with different aspects of what it manages, right? It could be managing the lifecycle of something, it could be managing where something starts running, you know, there’s just so many aspects but I think at a high level for me, an orchestrator is usually managing some kind of lower level functionality.

[0:01:48.3] DC: There is some crossover there for like scheduling and for like you know, I guess that’s a form or orchestration for sure.

[0:01:52.6] JR: Right, yeah.

[0:01:54.9] MG: I think we have also a lot of VMware folks listening to this podcast and there’s this famous almost kind if legacy [inaudible] orchestrator, which happens to be run, I think for more like 10, 15 years. This orchestrates workflows. So that it’s kind of a different take on orchestration and orchestrators there. Do we want to scope it to the container landscape or even in the cloud native landscape, we have orchestrated and like Airflow, et cetera.

We keep it open here.

[0:02:23.2] DC: Yeah, let’s keep it open. I think it will be fun to talk about a different orchestration models that we’ve seen, maybe what differentiates them, that would be kind of fun.

[0:02:31.3] MG: Yes, cool. I just want to throw that in.

[0:02:34.1] OP: I spend a lot of time on the windows side of the world and we had a lot of orchestrations there. I used to work for like a security defense sort of account and a lot of those accounts had sort of orchestration in around content of what was on your desktop, right? That was kind of maybe everybody’s initial sort of introduction to orchestration.

Certainly was mine – it was like, how do we regulate the content of a corporate desktop and how do we regulate all the applications that are on there and you know, the version of the operation systems that’s on there and the versions of the software that are available to users. A lot of my initial tool dipping into the orchestration world was in and around that, it was like enterprise, so the desktop management from a corporate level and how do corporations that have 50, 60, 70, 100,000 desktops, how do they maintain the content of those desktops at a level that you know, satisfies corporate security, corporate content from an application level and sort of corporate visibility in terms of whose installed what from a licensing perspective? 

You know, there’s a lot of tools in that space that have kind of grown up and be very mature and I worked on one called Novadigm, which eventually sort of was bought out by HP and became Radia but you know, there’s other sort of tools and around that basis and SSCM which is kind of desktop management.

You know, there are very important tools and they maintain a desired state, you know? We talk about the clarity of states in Kubernetes and these sort of tools sort of define that, sort of element of like declaring how you want a system to look like or an end point to look like and then your central management system would maintain that and maintain that desired state from a central perspective.

[0:04:15.9] DC: Good point, that’s an interesting one too because also wild to think about the different challenges that orchestrators have, right? In that particular case, you have laptops that could copy connected for months or for years.

[0:04:27.0] OP: Totally, yeah.

[0:04:28.7] DC: [inaudible] orchestrator and ready to like figure out what to do and how to determine what that desired state or actual state is.

[0:04:36.1] OP: Yeah, it was super interesting because it was a defense system, there was kind of a lot of end points, you know? We’re talking about like submarines and some are deployed kind of laptops that would check in every like six months, you know?

Trying to manage that sort of like perspective, where'd they come in and they download for everything to be updated, had to be as like a slick and smooth as possible. You had to make sure that your proxy end points were like pre-cached with all the data that those folks needed for a quick deployment. Down on to the desktops to make sure they had the latest security updates as a mandatory installation.

And then lots of stuff was set as an optional installation, right? We were trying to maximize the time spent in the office, you know, in terms of them getting their security updates and any optional updates could be done sort of in their own time. It’s super interesting to try and design that sort of system that people could kind of select their own installations but you kind of made stuff mandatory in the background so the minute they connected up to the network, you’d have a service running in the background that kind of immediately detected that and say, "You’re on the office network, wow, okay, you’ve got a lot of stuff that madatory needs to be installed right now and we do that in the background but also hey, here’s this catalog, here’s this new cool stuff that you can install if you want." 

As an optional sort of level. It’s like really interesting. But you know, the ultimate end goal was like baselines need to be maintained, certainly from a security perspective like okay, everybody needs to be on the same level from a security perspective. We’re trying to get 100% patching level maintained and all our devices need to be patched to the latest patching system so we could satisfy our security requirements. That was almost like the first KPI and then you know, installation of new versions of software for example for them to order new kit or for them to order a medical spec to new blood samples for example, all of that sort of software was kind of like almost secondary but still, that was kind of a secondary KPI.

It’s super interesting stuff, there was a lot of technology that evolved in that space in terms of automation. Try to figure out where the user was, whether they were like at their home location in terms of office, whether they were roaming to a different office, so they'd get a different roaming profile. And therefore the software available to them was maybe limited because he didn’t want to download software on to the desktop that wasn’t their own desktop from a licensing perspective. It’s all super interesting.

[0:07:01.0] DC: That’s awesome and I think that what’s funny about this is you know, the title of the episode is the Orchestrators and Runtimes, if we think about the runtime aspect of this. It's going to be this incredibly stateful, can’t be recycled machine sitting on a submarine or in a person’s backpack or what have you, right? It’s kind of in a way that that is the runtime that is the orchestrated by all of this system, you know? Pretty interesting example.

[0:07:25.8] OP: Yeah.

[0:07:26.8] MG: I got a question, I think something defers the first five, seven minutes of this episode, we started with Kubernetes, on orchestration as the container orchestrator, then we went on my famous tool [inaudible] orchestrator as an orchestration workflow, workflow orchestration. Then we went in to the land of desktop, desktop management. Certainly, there’s different views and definitions on workflows and orchestration.

Joe Beda, I think 2017 or so, he wrote this article, Jazz Improvisation over Orchestration where he describes the Kubernetes model, the controller model, how they interact with each other so that it’s not really orchestration what’s going on and this kind of tripped me because we talked about Kubernetes as a container orchestrator, orchestrating something, like you think of a big machinery and it places things somewhere else but you look into the machinery and you see like there’s no orchestrator.

There’s no central piece that orchestrates, it’s all of this like flow, this dance, choreography that Joe describes in his blog post. I want to throw in like, is Kubernetes an orchestrator, at all? 

[0:08:27.5] DC: I think that it is and I think that it already, in multiple of our conversation, just so far in the nine minutes we’ve been talking. We have conflated orchestration in scheduling because of in a way, orchestration is a form of scheduling, right? Absolutely, I do think that Kubernetes for the sum of its parts, it is an orchestrator of runtime. It can schedule things, it can understand capacity, it can take corrective action if in particular controllers that are running within Kubernetes, can take corrective action if they don’t see things happening.

You know, for my opinion, these are the responsibilities of an orchestrator. Josh, what do you think?

[0:09:02.1] JR: Yeah, I’m on the same page. I think if I take 20 steps back and look at Kubernetes, I see an orchestrator and then to your point Michael, if I take 20 steps forward, I see all these parts, these controllers and different aspects that have isolated concerns that in and of themselves don’t feel like they’re orchestrating anything but together, they feel like they’re achieving that, right? Exactly.

[0:09:24.2] DC: I think the way that Joe put it was jazz improv, I’m always a fan of that one because all the incredible artist doing all the incredible work, all in the same stage at the same time and that is the result, you know?

[0:09:34.7] JR: Exactly.

[0:09:36.2] MG: Cool. Okay, we got my first question answered. Second one. Orchestrators and Runtimes, is Kubernetes a run time then or is it an orchestrator?

[0:09:45.8] DC: I think it’s an orchestrator. I think their run time is actually delegated. What’s interesting is that run time could be delegated to a number of projects, it could be – I mean, they’re probably by far the most common would be to use Docker as the runtime. But there’s also containerd and what’s interesting again, kind of in that jazz improv-y way, right? Is that the coupling, where Kubernetes ends and the run time begins is the kubelet. The Kubelet is not creating — it’s not initiating these processes, it delegates that work to your runtime.

[0:10:20.1] JR: In my view of the world is that the success of a runtime, right? Or a runtime becoming somewhat ubiquitous — it often time is what creates the need for an eventual orchestrator to some degree, right? We see this, right? All over the stack but containers, they’re such an easy one like containers, technology has been around forever but with the advent of Docker and people becoming more comfortable, using containers, seeing their value.

Over time, you get to this point where this runtime is becoming so commonplace that someone takes a step back and is like, you know? Maybe we housed build an orchestrator that can act at a higher level to ensure that we could trigger this runtimes at various locations and do all the scheduling concerns and so on. 

[0:11:03.8] DC: In this particular model. I think it’s also related to the fact that your runtime has a form of packaging associated with it, right? When you get to this next part here in a minute but I think this is kind of mind-blowing. With Docker, you have Docker container, Docker images that you can pull down, you have this whole image registry idea, right? That in itself was like incredibly compelling and I think it’s that also really pushed toward, well, all this is great but we’re going to need to know how to do this at scale, we’re going to figure out how to do this across multiple machines and actually, if they should leave you this across the thing. You’re right, it did proceed the need for an orchestrator.

[0:11:40.2] OP: I think that’s the keyword, right? At scale, Duffie, runtimes can kind of operate on the kind of localized level, when you start talking about at scale, and how you want to like manage that sort of the execution of your application or the runtime. Then that’s where the orchestration comes in, right? That’s what Joe was on about as well. You know, manage these things at scale, you know, localization is one thing and you know, at scale is another thing and I see the orchestration sort of layer comes in, I think.

[0:12:07.4] MG: Yeah, I want to take a stand on Kubernetes is a runtime. I basically want to take an opposite position here, because if you look at run times, taking Docker as an example which we say it’s a run time in the sense or in the perspective of Kubernetes because it’s a container runtime, that implements the container runtime interface that the kubelet is using, right?

As you said Duffie, the kubelet is kind of, the execution engine where it delegates all these operations, these lower level operations to certain runtimes, dinner runtimes, networking, et cetera. Now, if you look at the container runtime Docker, it does nothing else but dispatching that to kind of primitive. Sea groups, name spaces. Yes, it does some volume management, something around that. But at the end of the day, it’s kernel primitives that are being called. 

It kind of defers and delegates this to the kernel. And then, if you look at what the kernel is, it’s kind of the heart of the operating system. It becomes a runtime for operating system at the processes like system D, it’s also a runtime for processes or any other process which for example, if you ship a go binary, it has a go run time. I think some of the confusion on our industry is sometimes we use words loosely and including myself. That confuses people who are newer to this field when they hear about runtimes.

Is Kubernetes a runtime, is it an orchestrator? From the definition of a runtime, I did some preparation for this show, just to read myself on what a runtime is. It seems that there are – there can be a runtime of runtime and a runtime of runtimes, encapsulation. Which is the Docker runtime happens to be a runtime for Kubernetes but then it’s ran on a kernel which happens to be their runtime and it happens to be a run on infrastructure, CPU, which happens be a run time as well. This is encapsulation.

Looking at Kubernetes, I would say, it is a dsitributed runtime. Because, all of a sudden, yes, we have an orchestrator but now we are dealing with [inaudible] and all the higher level tools, past and frameworks on top of it. Where, now, Kubernetes becomes a runtime for this higher level functions like [inaudible] or name any other thing that leverages Kubernetes. From a distributed management and perspective, beyond orchestration. That’s why I want to throw in that Kubernetes could be considered a runtime in that sense.

[0:14:13.6] DC: That is an interesting point. Your point is that at some point, the orchestrator may become a runtime at a higher level of abstraction. 

[0:14:20.9] JR: Yeah, I think it’s interesting. You’ve identified that — at least in my brain. I think the highest level abstraction, I oftentimes view that as the orchestrator to me, right? With Kubernetes is usually my entry point, my highest level abstraction. But, to your point, if I took a step deeper and I was focused on using Docker day to day. It’s totally fair to think of Docker as an orchestrator of this kernel primitives, right? Just because you had put it. It’s funny how it’s kind of all these turtles, all the way down, right?

[0:14:47.6] DC: That is an interesting case. I think, you know, also I think the container, orchestration and runtime is like a square, rectangle problem, right? You can have a runtime and they’ll orchestrate but likely, if you have an orchestrator you have some form of runtime.

[0:15:02.1] MG: Agreed. There is a link that I put into the [inaduible], in the show notes where I think it’s a computer science class from Italy. Where they discuss what runtimes are and as we know, the JVM is a runtime, we know that containers Docker is a runtime, we know that the kernel is a runtime, et cetera. They talk about these layers of runtimes but they don’t talk about Kubernetes because I think that clouds was before the time of Kubernetes. I thought well, if there’s runtimes of runtimes and this encapsulation, maybe Kubernetes itself becomes a runtime.

Because now we have all this distriubuted primitives to write new software, this software, distributed software on top of Kubernetes. Deferring a lot of the complexities of self-healing, volume management at scale. Kubernetes has its own volume implementation. Yes, it defers certain things but it translates like you create a volume in Kubernetes but you don’t directly create the docker volume, right?

Kubernetes is your runtime and then it happens to have these implementation details, other runtimes to defer and delegate to them. That’s why, in my view, I would consider Kubernetes also a runtime for writing distributed systems.

[0:16:03.8] DC: That’s a reasonable argument. I think you know, that could be, if you think about it like got something of a guarantee of a portability across their runtimes, right? If your implementation in Kubernetes be somewhere reporting, very similar in some ways to thinking like, if I write software for a windows platform, I have to l write that software for any of the different windows environments in which you might —.

Which I think is like another interesting output of this. Obviously, orchestrator is a very big word, it means lots of things but as we’ve already described, it’s hard to fully encapsulate what orchestration means at a lower level but at a higher level, we just know that it’s the thing making decisions about stuff that will be done. In a runtime, can we say that a runtime is an execution environment? Is in a place where processes you know, consume resources and they make things happen, is it where the rubber meets the road as it were? Is that a runtime?

Is that how you encapsulate it in your head? If I delegate an amount to work to a Kubernetes cluster, effectively, using Kubernetes as a runtime, I might still think, you know what? That’s the place where that application runs is the execution environment for that application. And then when I dig down into the details of that particular Kubernetes cluster and I see that particular process associated with that pod, it’s being implemented by Docker on top of this Linux kernel. Is that the execution environment? Is that mapping?

[0:17:25.3] MG: According to Wikipedia, there is – they talk about runtimes as part of an execution environment but not the execution environment. The example that they give there is a C binary that you write your code, your logic but then the compiler and like all the stuff that gets baked into your binary during linking and all the stuff that makes it actually an executable.

That is the runtime in the sense of it takes care of all these things that you don’t have to take care of in your code, which is setting up stacks and linking other stuff in. They describe the runtime as part of the execution environment or your execution context but not necessarily the same. They don’t say that a runtime is an execution environment, it’s just a part of an execution environment which happens to be the pieces that you then add to like your code.

[0:18:10.2] DC: You’re defining runtime in the way that people might define JS as a runtime or Java as a runtime? Interesting.

[0:18:18.5] OP: Taking that further, I think for my perspective, for me, Kubernetes would be an orchestrated but in this context, it probably be more like a platform, right? To run your applications and it can support whatever application that is in terms of runtimes. We talk about runtimes as Duffie said, with docker or container D or SORCAT, whatever that runtime is for your application, Kubernetes will support that as a platform rather than a runtime.

[0:18:48.2] DC: I mean, we talk about the abstraction of what runtime might mean, I think it makes sense. So certainly, it’s almost a matter of perspective, as infrastructure people, we look at it and we’re like, that’s a platform, that’s a thing where you know, I can build things on top, it has a [inaudible] that can consume. It’s AWS, it is a platform or you know, it’s infrastructure that’s serviced or a platform on the service, depending on what kind of the strength around it. 

As a developer, you might look at this as well, is it taking care of a bunch of work that I don’t have to deal with for my application, right? Has it got a bunch of built in functionality, is there like a built in library that handles things like you know, big time and all of the other stuff that I would normally have to actually code myself and is that a runtime? You know what I mean?

I do think it’s an interesting perspective when we think about it but how different people will be if it were – 

[0:19:39.8] MG: Yeah, that’s why I just wanted to take the stand here because I think some of our listeners have this confusion of like, okay, they talk about containers, orchestration and runtime, it’s not an orchestrator or it is an – I think looking at different perspective helps us to say like well, maybe it’s both or even more like Olive said. Maybe we consider the platform, right? Just to keep the show going.

[0:19:58.9] DC: That’s definitely one of my favorite ideas in this episode is that when we talk about orchestrators and runtimes,youit may be coming to this episode, thinking that we’re talking about Kubernetes and Docker. Because that’s the simplest way to think about this, right? For people who are familiar with Kubernetes that the way they think about it. But if you think about it, if you take a step back and squint a little.

As Michael has pointed out, an application is an orchestrator, right? Functions within your application, might be the equivalent of the runtime, like threads in your application, you know, basically moving back and forth. To Josh’s point, as the functions are parts of your application to become more popular and grow in popularity and you realize, I need the scale, I need 20 things, people that handle the amount of load that’s coming to that particular function.

Well, our microservices, right? Let’s break these things up and make it so that they’re scalable and now we have to think about what problems or orchestration level who we’re able to think about at the application layer so that we can support those things. I have all these other requirements. I need to be able to actually handle a life cycle of those functions that I pointed out.

How do I do that? And that is where all of this point is like you know, you need a platform. You need something that is going to express to you primitives that enable you to handle that part kind of automatically. The way that you want to putting about big time how much you’re on pedal but anyway, yeah. That is definitely my favorite idea of this episode. Anybody familiar with other examples of runtimes or orchestrators? 

[0:21:26.5] JR: From back in the CoreOS days we had an orchestrator called Fleet if you recall that Duffie I am sure you do. So that was an orchestrator that attempted to orchestrate the System D units, which was really cool and what’s funny about System D or sorry, not system but Fleet back in the day is I recall with a couple of customers when Kubernetes was popularizing where they used Fleet to bootstrap the System D units that would then run their Kubernetes cluster, right? 

So think like orchestrating the Kubelet and the API server, back before we typically run those as containers themselves. So that was really cool one, I think it is officially deprecated now but it had a cool evolution. 

[0:22:05.2] DC: That is neat. One of the fun things with that one is about that particular model for Fleet and actually to some degree Kubernetes as well is like thinking about what we did before and how we came to trying to solve that problem using something like Fleet or even Kubernetes. Before we would use and this is related to the way that all of this is talking about like the Windows environment that you were working on, before we would do this with [inaudible] or Puppet or one of these other tools. 

In which we have a thousand machines, we have some subset of machines that we need to deploy some subset of applications to, we would write orchestration and automation to handle that. We have to go out and inspect that node or one of those nodes, some subset of those nodes, determine what it looked like, figure out if we can get it to where it needs to go and just continually to do that over and over and over again. You know, it was fun but when we got to a Fleet, when we got to things like Kubernetes we would flip that model on its head. 

Instead of going out there and trying to figure out what the world looked like from there, We expected it to move in different responsibility for sorting out that work through the end point. And now we just figured out a way to make it so that that end point could be informed where there was more work rather than telling that thing, here are the things that you must do and you must be there now and I would wait until you write on with a, “Here is what the desired state is. Get to work. Good luck, buddy.” 

You know? Every time there’s lots of times with different orchestration levels over time too. If you think about the way that you are even monitoring the systems. So I am looking at the way that monitoring systems got changed or evolved over time for a very long time to head end of your monitoring system would literally go and connect to the however many X number of machines that you have to execute code there and then bring back the answer. 

Which is probably not the most efficient way to go about that, right? And then you see things evolve over time. You see, “Okay, well maybe I want to have the execution be something that I just farm up to something running on that node and I can just scrape that end point for information.” And some of the other cases I have seen are things like [inaudible] where instead of actually going out to scrape the other end point, you have all of those end points just put something multitask it up with some central endpoint and it pulls all of that in your central endpoint is just responsible for serializing all of that information coming in from everybody. 

And so this is just one of many examples of where we actually tried to think about orchestration differently as we get to a level of scale where we have to solve our problems because the popularity of our application and our workload has take it over. 

[0:24:41.8] MG: I still remember the container orchestration wars, who remembers these? 

[0:24:47.2] JR: Did you say wars, Michael? 

[0:24:48.2] MG: Yeah on the container? 

[0:24:49.1] JR: Yes. 

[0:24:50.0] MG: So like the Mesos versus the Swarm versus the Kubernetes. And then often forgotten is the Nomad, HashiCorp Nomad, which happens to still be around, right? And interestingly and Duffie was just touching on this, these four like Nomad, Swarm, Kubernetes and Mezos, they had completely different implementations off container orchestration if you will and there has been this long debate of who won them. I mean right now we know who won but why did Kubernetes succeed. 

And it is going back to what Olive said is it is this platform thing, right? We don’t talk about it as a container orchestrator anymore but it is a platform to build platforms, right? I think that was the main reason why Kubernetes succeeded because of the way it was designed to do so. That’s a point back to Olive, so I think she is spot on with the platform. I just realized. 

[0:25:41.6] OP: But it is interesting as well because the whole containerization thing as a runtime, sort of usurps the whole stagnancy around updating applications and around some of the long life cycles to release applications of when that release was ready to go to sort of the reluctance to update in the light of potential failures because I talked about before desired state and the platforms I used to manage before. 

It used to be super interesting because we had this facility, where we can see this and we know what the desired state is from central perspective. We can run scan of all of the endpoints and find out which ones are actually at desired state, in terms of all their applications, which ones got conformed to the desired state of the central system and which ones are not and what would the changes be if we were to apply that desired state in terms of file changes application updates. You know we'd run that report sort of fairly regularly. 

Kind of like sort of highlighted like various teams, so you know what your application is kind of way out of date and they’d be a lot more reluctance to update the application because there would be so many changes that were queued up for update but were never actually triggered because it is just the reluctance causing the slow release cycle, that maybe you see now and we are trying to transform with containerization and microservices and that. 

You know my application is working fine and I know there is an update to it but you know that update doesn’t really effect business function right now and so I am just quite happy to leave the application as is. So you know three, four, five updates later that application is now behind and it was just really super interesting from the platform slash orchestrator that it could say, “Listen, you’re five updates behind. And there is like a 100 file updates that need to be applied. So whenever you’re ready we’ll apply those." 

And it was kind of like it almost got to a stage where they would like, “We are not going to apply those, it is too many. We are not going to actually do that. We’re going to new write the application or something in and post it somewhere else.” So from an orchestration super platform perspective and management of that it was super interesting that the orchestrator could know what the desired state should be and report back to the management team. Like what was in and what was out in terms of what the desired state should be and so it was super interesting report to run.

[0:27:57.8] MG: Right. 

[0:27:58.2] OP: So yeah, the whole container organization stuff that allows these quick releases without affecting anything else changed that but at the time, there was all of this like would sit around and go like, “There’s 20 updates that need to be applied to this endpoint.” And nobody wanted to apply those updates. So it’s kind of like then there’d be 21, then there would be 22 and so nobody wanted to apply those because everybody’s stuff was effected then. It was just interesting, interesting times. 

[0:28:26.5] JR: I was going to ask and kind of related to what Olive was talking about and then you prior Michael, I wonder if there is any guidance or experiences we have with determining when you might need an orchestrator. It is like the episode we did a couple of weeks ago, which was 'Should I Kubernetes', right? And you know I think a lot of the fud around Kubernetes as an example often times comes from not actually needing an orchestrator, right? 

You know perhaps running containers with a Docker runtime or Docker orchestrator, however you want to qualify it right? Is actually adequate so if you’re listening to this podcast and thinking, “Do I need to introduce an orchestrator?” You know what are some of the signals that we’ve seen that would show it be worthwhile exploring that?

[0:29:14.1] OP: Yes, so I mean I guess from the whole, you're right Josh, sometimes like what I spoke about before, you know sometimes there is an elemental over-automation some people don’t want all of these automation happening in the background. It is like we don’t want to push the latest updates, we don’t want to have these latest versions because we just want to do it a bit more sort of piecemeal approach. So over automation or the sort of huge automation that Kubernetes provides sometimes is not always what people want. 

They’re quite happy just to run them as to say bit by bit themselves. And you know Kubernetes is an orchestrator but it is kind of combined with the whole applications that is trying to orchestrate in terms of the containers that is running, right? And the applications that is running. So that is when that sort of comes into play. So when things want to be released quickly and customers are ready to be that agile and ready to run fast that is where that orchestration — 

Orchestration to me uncovers to me automation, right? Back in the day we all used to write scripts to do this right and so manual scripts to do this, this, this and a bit of script to this and a bit of script to that. Kubernetes is kind of bringing that from an enterprise perspective and do all of that for you but you have to understand that what it’s doing under the covers is what you want it to do. So you have to be ready from an end user perspective or that whoever is consuming Kubernetes. 

The applications that is orchestrating or the containers that is orchestrating, they have to be those kind of application that kind of run at speed. Applications that are slow running don’t really benefit in my opinion from the super orchestration that is Kubernetes. 

[0:30:49.1] MG: Yeah I think for me the lines are blurring these days a bit because it’s so hard to find a project that is not leverage Kubernetes. I once used — like you are going to build a new app something like that and then you feel like, “Okay I need a database as well,” okay, here’s your database in Kubernetes. So Kubernetes became so ubiquitous that it is almost impossible to get around it because all of these artifacts that we get like software is almost shipped for Kubernetes. So you need Kubernetes to kind of assemble the pieces together. 

I think where I would not use Kubernetes is this project where I have a very clear picture of their requirements meaning there is a single app that maybe like an older app or it is just written and avoid that doesn’t need scaling. It is pretty static as, Olive said, it doesn’t require any sophisticated configuration management, et cetera and just wrote it out with primitive like Dystem D primitives, right? 

And System D is perfectly fine as well. It is also a local host of orchestrator, which can keep it up running and other stuff like that. But that is where I was saying the lines are blurring, we were building and appliance for some automation and we were asking ourselves should we Kubernetes for the appliance and the appliance itself is just one appliance, right? It is not multi scale out and it might not even have to be but we were using Kubernetes for two reasons. 

First, the software that we required to put in there some for some fast backend it's been shipped for Kubernetes and maintain for Kubernetes. So that was like yeah, we could do it without Kubernetes but there is so much momentum around Kubernetes for the software as well. So we use Kubernetes. That is the first check box and second, we weren’t sure for customers adopting those appliance whether they would come around and say, “Look, we need scaling. We need HA, we’re like the higher availability because the software is so critical now and part of our infrastructure.” 

And so we didn’t want to go back and rewrite the whole architecture because we miss that decision in the early days. And so even though right now we would not have needed it, we were just looking ahead and it was like, “Okay, maybe we need those scale out features.” Et cetera and that is where we decided to go Kubernetes where today it would have been fine without. 

[0:32:47.1] JR: Yeah, you both like perfectly encapsulated my experience too. I see two avenues constantly, right? Which is one is now that Kubernetes is getting more ubiquitous to Michael’s point, doing certain things is just easier on Kubernetes believe it or not because people are designing for it. They are setting up ways to deploy easily, run things easily on it. I think that’s going to continue and then there is another one to Olive’s point, which is like I like that parallel with the notion of automation a lot. 

If you want to take your automation to the next step to some degree, right? Kubernetes could be viable if it is justified. Like an example that I often times run into is I will work with shops where they deploy a lot of their containers using Ansible and you know maybe you could even think of Ansible as an orchestrator. Like I know technically it can config management and so on but there’s parallels there, right? It can talk to Docker, it can run the container. 

And for a lot of groups that is super, super adequate. The extra layer of Kube is totally not justified for them but a lot of them get to that point where it’s like, “Oh my gosh, if I can just declaratively state how I want this app to run and it goes across all my runtimes be it Docker or otherwise, I won’t be managing as much Ansible automation code.” My declarative state will be a lot more Kubernetes-focused or container focused rather than Ansible, which is a tool for a lot of things, right? 

So it is really kind of finding when you hit that tattered edge or sharp edge I should say in knowing that it is a time to jump to maybe a more mature orchestrator. 

[0:34:09.0] MG: I had one comment for Josh, which is — like you asking this question when there is a need for an orchestrator kind of this should I Kubernetes or not? I mean there is also and I don’t want to get into that flame war but just this kind of I am not going to do with Kubernetes because it is way too complex. I am going to go serverless. Like I am already in AWS, I’m not going to do Kubernetes, right? 

And so the beauty of this episode is even though we talked a lot about Kubernetes, the title is Orchestrators and Runtimes, right? And so even though you might be using some higher level framework or platform, call it Lambda or whatever, under the covers there is an orchestrator that orchestrates these little functions and containers some on the platform even though you are not using it, right? But there is an orchestrator. So I think even there this episode makes sense as well because we have sometimes not even knowing that there is an orchestrator in play. In the case of AWS its custom one, right? 

It is not Kubernetes in this sense at least for certain parts of the platform but there is orchestrator, orchestrations going on. There is runtimes, right? And so I think that is something to consider for our audience as well even though we touched a lot on Kubernetes, orchestration, runtimes, they are safe to assume under the covers there is always an orchestrator doing things even though you might not be using it directly or knowing it in the cloud. Yeah, I just wanted to throw that out. 

[0:35:24.2] JR: No, I love that and I think one thing I have become convinced of from this episode that I probably wasn’t prior, is that if you look at some of the complexities of the abstraction that you enter in, like a simple way to maybe look at it is I understand Kubernetes really well and underlying that is probably some container orchestrator and the parallel that I hadn’t drawn until this episode is that even if I don’t understand some of the depths and the weeds of how the container runtime works, it’s probably got similar concepts from an orchestrator perspective as my attraction that I work with, right? 

So I feel more enabled to like not be as intimidated to go one layer down and know that that runtime is probably just controlling some other lower level primitive with a bunch of knobs, right? So it’s been a really interesting parallel to draw and you could take that anywhere. You can start at the serverless level that’s maybe backed by Kubernetes, that’s maybe back by containers. It just keeps going lower and lower and lower. 

[0:36:17.4] MG: Awesome, Olive anything else that we forgot to mention? 

[0:36:21.1] OP: No, I mean it is super interesting like it kind of distant deputizing to the why Kubernetes episode as well, you know everybody has their own sort of automation and just you know Kubernetes, you know I still think it’s orchestrator slash automation and everybody has their own — all the people that I have interfaced that you know everybody is very good at running their own automation. You know we all have been involved in teams that have written our own stuff to automate stuff, right? 

To automate our workloads, to make our life easier. And Kubernetes just brings a lot of that sort of in house automation to kind of more of an enterprise level at this sort of like can you do driven type orchestration layers so you can get a nice warm feeling that the stuff that you have automated sort of in house of your own bat is kind of like backed by something like Kubernetes is actually doing the same things that you have written in-house. 

If we are going to go in the – is it a runtime where orchestrator, you know if we are tying off this episode, to me definitely it is going to be in and around the orchestration, automation element and maybe it is kind of my background as well but like Kubernetes just plays in that space where it just makes the management of your things, your end points, the things you need to manage of which now there is loads because you’re stuck from them, the microservices container route, you’ve not got loads of things to manage. 

Before there was bare metal stuff and then there was VM’s and now you got containers. So you kind of go containers to hundreds of thousands. And so for something to automate that for you is like great. Because for you to keep maintaining your in house developed sort of automation, which is super awesome and it is exactly what you need it just gets a bit more complex to manage when you start going down the containerization route. So enter Kubernetes for that orchestration automation there for me. 

[0:38:06.4] MG: Yeah it makes perfect sense. So my take on this is if you look at just from a container perspective, let’s say the container ecosystem. We have [inaudible] Foundry, which uses [inaudible] but they have this prototype out there and it is pretty clear where they are moving was using Kubernetes as the orchestrator. and we had a Red Hat where they started an open shift with their own orchestration engine and quickly realized that Kubernetes is way more powerful. 

And that would be way more momentum and this design was just better. So Open Shift was redesigned and has been using Kubernetes for a while and then we had companies like Zalando, who are pretty famous and active also into Kubernetes in the community there as well as who wrote their own container orchestration like Olive said. Like your custom in house, built in house container orchestration solution and they could didn’t realize it is just so much labor and burden to maintain this platform. 

And doesn’t do community around it where you can just Google for, “Hey, how does it work to get my volume running.” Right? And so they decided to move to Kubernetes and they are one of the biggest users of Kubernetes today. So I think there is also a common theme that we have seen in this exploration of different options and now consolidating around Kubernetes as an orchestrator but also as Joe usually says, it’s s platform for building platforms. So it’s more than just an orchestrator but that is what I take out of this episode here as well even though we focused on orchestration. 

[0:39:23.1] DC: Yeah I like that. One of the other things that I, kind of to your point Michael, that I think has come up a few times and it seems pretty relevant here, which is like again, if you look back in time and different things that we have built over time, almost every single time when we start breaking apart monoliths and we’ll start to stuff and start adventuring into micro services and those sorts of things, we sort of reinvent that entire world over and over and over again. 

Like from the point that we define service discovery to the point where we define what the infrastructure needs to be able to provide, you kind of have reinvented this in many cases and if you look at pretty much any fortune probably 1,000 company you are going to find the skeletons of those previous attempts at defining all of those things over and over and over again, right?

Where I think the Kubernetes piece rest in is in finding it one of the first platforms that’s come along that’s like look, maybe we don’t have to reinvent all of that over and over and over again, maybe we can define primitives that actually get you to the place where you can just consume them just the way you would like some of the primitives that your Java runtime impresses and get you to a better place to actually start rather than having to reinvent everything over and over and over again. And that is definitely the power of it, I think. 

[0:40:36.6] MG: I agree, awesome. 

[0:40:39.8] DC: Awesome, anybody else have any other thing that you would like to add up? 

[0:40:43.3] JR: Yeah, in wrapping up I mean it is kind of the same statement I made before but I am leaving this episode, at least, feeling kind of like the difference between the two in summary for me is not that important anymore, you know? It’s just like breaking it down as layers of abstraction and acknowledging us it as such. I think there is definitely value in discerning the two to some degree but not getting just too hung up on it and feeling like you have to put these rigid definitions in place. 

[0:41:08.3] MG: Right that is a nice way to put it. 

[0:41:09.9] DC: Awesome, I think if nobody else has anything else they want to discuss on this topic, I definitely got a lot out of this discussion and we can call it a day. Thank you all and we’ll see you all next week. 

[0:41:20.0] MG: Thanks, bye-bye. 

[END OF EPISODE]

[0:41:22.1] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
