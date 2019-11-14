---
episode_id: 002-container-orchestration
episode_number: 2
title: Making Sense of Container Orchestration
description: Container orchestration in Kubernetes is so popular today but it can be difficult to know whether container orchestration is right for you. These are just some of the questions and topics we get into today.
notes: Welcome to the second episode of The Podlets Podcast! In this episode, we dive into the exciting world of container orchestration in Kubernetes. We have all heard about container orchestration, but to truly understand this concept, we have to first understand what containers are and why they started! From definitions of containers and how they fit into the bigger cloud landscape, down to the nitty-gritty’s of managing and scaling container orchestration; this episode gives you strong foundation to better understand the functions and impacts of container orchestration today. Container orchestration in Kubernetes is so popular today but it can be difficult to know whether container orchestration is right for you. These are just some of the questions and topics we get into today, and if you’re looking for a solid base to begin your container orchestration process or enquiry – this is the episode for you! 
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia 
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Nicholas Lane
      url: https://twitter.com/soggiest
points:
    - Discover why container orchestration first came about.
    - Find out exactly what a container is and how it functions.
    - Using a container versus a virtual machine or process.
    - Managing container orchestration on a large scale.
    - Learn how container orchestration acts on information.
    - Managing actual state and expected state in container orchestration. 
    - The key benefits of adopting container orchestration.
    - The key difference between container orchestrators.
    - A declarative way to approach resource limiting.
    - How to distinguish between the project and the product.
    - What is it that makes Kubernetes so popular today?
    - How to make an informed decision about using Kubernetes.
    - Find out when you should not be using container orchestration.
links:
    - url: Velero — https://github.com/vmware-tanzu/velero
    - url: Youtube Premium — https://www.youtube.com/premium
    - url: KubeCon China — https://01.org/events/2019/open-source-summit-china-kubecon/ cloudnativecon
    - url: Steven Wong — https://twitter.com/cantbewong
    - url: Cloud Native Social Hour — https://www.youtube.com/watch?v=wxBxcdeMOYE
    - url: Kube Janitor — https://github.com/theMagicalKarp/kube-janitor
    - url: Docker — https://www.docker.com/
    - url: Mesosphere — https://d2iq.com/
    - url: Red Hat — https://www.redhat.com/en
    - url: Kubernetes VS Docker Swarm — https://thenewstack.io/kubernetes-vs-docker-swarm-whats- the-difference/
    - url: Kubernetes Slack Channel — http://slack.k8s.io/
    - url: Podlets Cloud Native Podcast — http://cloudnativepodcast.com/
    - url: The Podlets on Twitter — https://twitter.com/thepodlets

# video: https://www.youtube.com/embed/dQw4w9WgXcQ
# related: # appears in sidebar, no limit in related episodes. identify by `episode_id`
# - 001-cloud-native
---

EPISODE 02

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.3] NL: Hello and welcome back to The Podlets Podcast, Episode Two, Container Orchestration. My name is Nicholas and joining me today this week are Carlisia and Josh.

[0:00:50.9] CC: Hello.

[0:00:50.9] NL: Hello.

[0:00:52.0] CC: Good to be here again.

[0:00:53.7] NL: Yeah. How was your week, everyone?

[0:00:55.6] CC: Very good, lots of work.

[0:00:57.3] NL: Yeah, anything exciting happening in the world of Velero?

[0:01:00.1] CC: Yes, we just got our alpha release for version 1.0 and we are looking for testers, yeah, we want testers.

[0:01:08.2] NL: Awesome.

[0:01:09.2] JR: I’ve been traveling a lot but it’s been good, we’re doing a lot of interesting work with some Kubernetes cluster running in an on premise datacenter which is something we see less and less, now that the cloud providers are kind of taking on their different offering. So it’s cool to hop back to kind of the bare metal and virtualization space and play around there.

[0:01:27.6] NL: That’s cool. I’ve actually got a question for you guys, kind of irrespective of container orchestration, but how do you guys manage travel, right? How do you keep yourself entertained, how do you keep yourself happy while you’re traveling? For me, it’s a lot of podcasts which is great, now that I’m doing a podcast.

[0:01:43.0] CC: Yeah, I do podcasts. I signed up for YouTube premium so I can download videos. I watch the movies on the plane, I have a kindle with lots of books.

[0:01:56.2] NL: Yeah, that’s nice.

[0:01:57.4] CC: Or I just sleep.

[0:01:59.0] NL: I wish I could.

[0:01:59.9] JR: Yeah, sleep is always the first goal, but I also signed up for YouTube Premium and the offline feature is fantastic so there’s so much good info on YouTube, you know? It’s great to like – go to the KubeCon Playlist and just choose offline and then you have all that time in the plane to really sift through talks and what not. It’s been really cool.

[0:02:18.9] CC: Exactly.

[0:02:19.8] NL: That’s a great idea. I’ve actually not used YouTube Premium for that. I’ve only ever used it for like meditation tracks, to use on the airplane. I spend some time in the plane kind of just in my own head a little bit kind of doing some internal self-care if you will.

[0:02:34.0] CC: Nice.

[0:02:34.7] NL: But that gets boring.
EPISODE 02

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.3] NL: Hello and welcome back to The Podlets Podcast, Episode Two, Container Orchestration. My name is Nicholas and joining me today this week are Carlisia and Josh.

[0:00:50.9] CC: Hello.

[0:00:50.9] NL: Hello.

[0:00:52.0] CC: Good to be here again.

[0:00:53.7] NL: Yeah. How was your week, everyone?

[0:00:55.6] CC: Very good, lots of work.

[0:00:57.3] NL: Yeah, anything exciting happening in the world of Velero?

[0:01:00.1] CC: Yes, we just got our alpha release for version 1.0 and we are looking for testers, yeah, we want testers.

[0:01:08.2] NL: Awesome.

[0:01:09.2] JR: I’ve been traveling a lot but it’s been good, we’re doing a lot of interesting work with some Kubernetes cluster running in an on premise datacenter which is something we see less and less, now that the cloud providers are kind of taking on their different offering. So it’s cool to hop back to kind of the bare metal and virtualization space and play around there.

[0:01:27.6] NL: That’s cool. I’ve actually got a question for you guys, kind of irrespective of container orchestration, but how do you guys manage travel, right? How do you keep yourself entertained, how do you keep yourself happy while you’re traveling? For me, it’s a lot of podcasts which is great, now that I’m doing a podcast.

[0:01:43.0] CC: Yeah, I do podcasts. I signed up for YouTube premium so I can download videos. I watch the movies on the plane, I have a kindle with lots of books.

[0:01:56.2] NL: Yeah, that’s nice.

[0:01:57.4] CC: Or I just sleep.

[0:01:59.0] NL: I wish I could.

[0:01:59.9] JR: Yeah, sleep is always the first goal, but I also signed up for YouTube Premium and the offline feature is fantastic so there’s so much good info on YouTube, you know? It’s great to like – go to the KubeCon Playlist and just choose offline and then you have all that time in the plane to really sift through talks and what not. It’s been really cool.

[0:02:18.9] CC: Exactly.

[0:02:19.8] NL: That’s a great idea. I’ve actually not used YouTube Premium for that. I’ve only ever used it for like meditation tracks, to use on the airplane. I spend some time in the plane kind of just in my own head a little bit kind of doing some internal self-care if you will.

[0:02:34.0] CC: Nice.

[0:02:34.7] NL: But that gets boring.

[0:02:36.0] CC: I meditate too, it’s great.

[0:02:38.2] NL: Yeah, it’s good. All right, anything interesting in the cloud native space that you guys have found in the last week?

[0:02:43.6] CC: I have a talk that was accepted for KubeCon China.

[0:02:47.4] NL: Awesome, congratulations.

[0:02:49.6] JR: Congrats.

[0:02:50.6] CC: Yeah, it’s a joint talk with Steven Wong also from Thea Moore. We’re going to talk about data recovery, data protection, recovery, migration in Velero.

[0:03:03.9] NL: That’s great. He’s been coming to the Cloud Native Social Hour pretty regularly. That’s awesome to see some more cross interaction.

[0:03:11.6] CC: Yeah, he is awesome, so knowledgeable.

[0:03:14.0] NL: Great. And Josh?

[0:03:15.5] JR: Very cool. I was actually looking this week since I’m in kind of the Kubernetes mindset, for something that can kind of add a TTL to any Kubernetes resource. So think of something like a service account in Kubernetes and I want to attach a TTL to it such that in four hours, it effectively got swept up and is no longer existent in the system.

There’s some interesting ways that actually Kube ADM, one of the bootstrapping tools, does this. I was trying to kind of replicate that for their tokens, there’s a project by one of these Landau folks. Jacobs, I don’t know if that’s his last of first name, sorry in advance for butchering it, but he’s got a project called Kube Janitor that does effectively that.

With annotations, you can put a TTL on them, your resources and then Kube Janitor will just come through and sweep that up. Which I thought a really cool idea. That was an interesting thing that I saw, it’s no new news, I think it’s been around for a while but it’s the first time that I had run into it.

[0:04:07.6] NL: Nice. For me, our cohost Duffy, turned me on to a tool called Chaos Blade. Recently, I’ve been getting more and more into Chaos engineering and this is apparently an easy to use Chaos engineering toolkit. Something I’ve only just started looking at but I’m pretty excited. I’ll probably play around with that a bit more.

[0:04:25.2] JR: Cool, awesome.

[0:04:26.9] NL: Yeah, this week on the podcast, we are talking about container orchestration and kind of what that is, right? For me, container orchestration is the idea that you need your workloads to run somewhere but you don’t necessarily need to care where they’re running and the way that this has been done traditionally, prior to container orchestration, was like scheduling VM’s or making sure these processes run on certain computers, right?

There’s a lot of automation around that like, when containers came around, we needed some way to make sure that they’re running and it also enabled us to not need to care so much about how things get started in all that. Everything was kind of packaged in a container I think. They need to just be some way to run them. That’s kind of where container orchestration came in, is that kind of your guys’ take on that as well?

[0:05:18.3] CC: Yeah, basically, when we say we are orchestrating containers, we basically tell them how to behave, right? For example, I have this container here and I’m going to declare that if it fails, I want it to come back up in this container over there, if you fail just keep that state, don’t do anything and then I might say hey, I want two of you, three of you, I want to – the orchestration part is really just dictating behavior and state.

[0:05:48.6] NL: Yeah, absolutely.

[0:05:49.9] JR: Yeah. I think one interesting thing that came with the advent of containers is, we used to have this notion of you know, what server is my application going to land on or then eventually, you know, what virtual machine is my app eventually going to land on and we think kind of in this units of virtual machines and the paradigm shift a bit, at least in my experience has been now that you have the container unit and you can run many of those on one virtual machine, right?

Your concern about orchestration is not just putting it on machine A and putting it on machine B but it’s kind of like packing multiple of this containers, perhaps on the same virtual machine or same host. The orchestration notion is beyond just the conventional system construct of a different host each time, it’s really interesting.

[0:06:34.0] NL: Yeah, I think it might be important for us actually to take a step back. I realized I kind of jumped right into it, but we should probably settle what a container is, right? Before we can talk about how we can orchestrate them.

A container is basically just a tar ball honestly. That is a packaged application with the instructions for it to run on any system that can accept that tar ball. Containers are broken down into a couple of Linux constructs, C groups and name space, so C groups four, making sure the process runs in its own dedicated memory and then or just like isolated memory. Then name spaces for things like network isolation. 

So that the network traffic that’s going on in the container doesn’t cross over to other processes. Very controlled process initiation based on these instruction. That’s kind of what a container is, a lot of people think that they’re like, kind of like a VM, I’ve heard that a few times where like, “Oh how do I deploy it?” What’s the VMDK for a container? It’s just a process that runs on a computer in a very controlled fashion, that’s literally it. 

[0:07:43.9] JR: Yeah, it’s kind of interesting to think like, at what point in which we kind of started using containers and seeing containers. I’d be curious for either two of you, Carlisia especially, what was your first exposure to the unit of a container and why were you starting to consider using a container versus just a virtual machine or a process?

[0:08:03.0] CC: Frankly, I don’t remember. My first time seeing a container has been a long time but I don’t remember. But probably maybe trying to do some application like some toy application that – an example application. I remember that I was working on an application that we had the option to stuff it into a container as well, but I personally didn’t make the development. 

I wasn’t using it for development. My first usage of container really was about three years ago when I was working for CDN and a CDN as you might imagine has many different parts, so it has very low-level software running to higher level software, right? Really, sometimes, well, not sometimes, it has kernel level applications in systems, and it has API level system. For you to develop one part of it is it was really handy to be able to stuff our different systems into containers and have containers stuck to each other.

We weren’t using the introduction. This was for development, but it was amazing, it was fantastic, we would have applications developed and go. Different systems that needed to talk to each other and we would have applications in C and I think that is to remember but it was amazing. Everything in containers and then we have a tool as well, they were sort of like Kubernetes, it wasn’t Kubernetes.

It was developed in house. That orchestrated all of these things and you know, we simply failed, bringing back up and did a bunch of other things as well. I cannot explain the difference of working like that. It’s so much faster and so I could be a lot more autonomous, being able to run everything myself. I didn’t depend on having access to its server. I ran everything on my laptop, it was fantastic.

[0:10:17.6] NL: Awesome. The first time I ran into a container was back when I was working for Red Hat, right when Open Shift Three CEO came out, that’s when Open Shift kind of moved from the in-house version of Open Shift to adopting Kubernetes. I had been working mostly in the virtualization like infrastructure world like doing a Red Hat enterprise virtualization manager, which is kind of like a Red Hat take on B Sphere, you know, kind of.

I was very used to virtualization and spinning things up. There is some aspects of creating a VM and creating a container that were very similar. It took me awhile for my brain to click. Once I started using open chip to kind of click into like, “Oh this is how they’re different, right?” Whereas, if you’ve just started looking at it, “Well what’s kind of the difference?” They’re all just like, in my command line, they all just come up as like lists of units, right? 

This is a processing unit, that’s a processing unit right there. They’re kind of similar but once you start really getting into the use of it, it was so much different. I had heard like during this process of switching over to these two tools, I had heard of Docker and I was like, it’s something I’ll take a look at and finally, by shifting over to it, I finally was starting to – like oh this is what docker is, this is how we use these and then like, kind of digging into containers there.

It was an interesting switch from an infrastructure standpoint to like, this is how people use containers and then that kind of actually started getting me into development. Now that I didn’t have to care about all this overhead of like where do I put my application, if I want my application around on my computer versus your computer, how do I make sure that the packages are the same bubble?

Once there was that easy way to kind of say, I just want this run everywhere, no matter what, hopefully, that really just like, fascinated me and it kind of took off from there. Josh, what about you?

[0:12:11.6] JR: Yeah, my experience wasn’t to dissimilar. What was interesting is the space I was working in was a lot of legacy Java applications, so we kind of came into containers probably a little bit later than what some of you all did. What was always interesting about it is, you know, we started to really see the value of containers just like Carlisia was saying, we started packaging these apps up and they ran the same in every environment and just really changed our workflow around. 

Initially, it was just like, let’s figure out a way to simply start these containers on different hosts, whether it be like Answerable or even someone going out a host and typing Docker Run, you know, that was how we got these processes to start. As the adoption of containers grew and more and more containers started to come to life in this company, the need for orchestration finally became obvious, right?
I had heard about this project called Kubernetes, I’d heard a bit about Swarm, Mesos and it was always just like I don’t understand why you’d ever need something this complex, right? But eventually you hit this like inflection point where it just becomes insanely obvious, that your life is potentially going to be just chaos without something that can actually figure out, hey, you need to run this container, let me figure out where to put it and make sure that it starts.

I thought that was like a really interesting progression. It used to be really hard also to navigate the options because there were a lot of options and there still are, there’s Swarm Kubernetes, Open Shift, Mesos, so on and so forth.

[0:13:31.9] NL: Yeah, that’s actually a good point to what I’m talking about is that, container orchestration, it seems like we’re all kind of building up to the same point where when containers were kind of taking off, everyone started to see like this is great. But how do I do this at scale? Even like remotely at scale. 

A bunch of people started doing their own thing. So there was Kubernetes, which is the open source version aboard with some changes to make a more friendly for other people, there’s Docker, Docker Swarm and then Mesos, Rancher. But then, Carlisia, your team had their own orchestration, a lot of other companies have their own orchestration as well so it’s not just – you don’t need like this project to do or any of these projects to do container orchestration. You can do it on your own if you need to, right? 

For example, you could take a look at Uber, they aren’t using a project, they’ve rolled their own container orchestration at scale and I think that’s the same, that’s crazy to me but that’s awesome for them to have pulled that off, right?

[0:14:29.4] CC: Yeah, absolutely. When I think of container orchestration, there is the management part and the scaling part because when you think about management for example, I might need a whole set of services to be up and running before I can run the set of services. The orchestration is going to manage that for me. Make sure that the services come up, they’re up and now this set gets kicked off.

If I don’t need to scale, I still need to do this, right? There is usually some sort of dependency. Then in the scaling part which is also – I mean, it’s important for a lot of companies but it’s not important for a lot of companies smaller sized companies, right? 

[0:15:18.7] JR: Maybe we can talk a bit about what kind of information container orchestration works with to determine what it should do, if that sort of makes sense? Like what kinds of things are we telling these systems about and then what is it doing to act on that information?

[0:15:38.0] NL: Yeah, please, go ahead and dive into that a bit more.

[0:15:41.0] JR: Yeah, I guess it seems like the common approach that we run into, at least with Kubernetes and I think it’s true for a lot of these different systems, is the notion of reconciling state, right? We start of kind of with declarative definition if you will of what we want the world to look like and that could be some app running with some amount of replicas and you want it to have a certain amount of CPU and memory available.

Then, these orchestrators usually can just take that declarative notion and sort of act on it, right? I know Nicholas, you’re really close to Kubernetes, would you want to speak to like how exactly it acts on those things like when you give it that declarative API object? What it’s going to do behind the scenes?

[0:16:24.6] NL: Yeah, in Kubernetes, there’s a couple of different systems at play. This is something that I find really fascinating. There’s a lot of reconciliation loops in many different places. In Kubernetes when you first declare to Kubernetes that you want something to happen, you talk to the API server.

The API server then modifies the etcd data store, right? The data store is just, simply ley value pair brain, it’s like the brain of your Kubernetes, right? Only the API server, as far as I’m aware and remembering off the top of my head, that’s the only thing that actually directly communicates to the etcd server. That might be incorrect but for the purpose of this – 

[0:17:04.3] CC: I think that’s correct.

[0:17:06.8] NL: Okay, good. I was suddenly second guessing myself. The API directly can be considered sort of make the changes. Then the controller manager is in a reconciliation loop, saying like, here’s what I think the world looks like and if the world changes based on what etcd is saying, the controller manager maintains actual state and etcd controls expected states. This is where we want to be. If actual state and expected state are different, the controller manager reconciles that. Either it will delete something or add something to the cluster at large to make sure that that state exists.

[0:17:47.6] CC: Based on what’s in the etcd database?

[0:17:50.4] NL: Yes, exactly. It will – the controller manager, based on all the many controllers that are just themselves reconciliation nubs, if any of them are you know, different, it will then kick of something to the schedule which will then inform the various nodes in the cluster, what changes they need to do to reconcile state. Those changes occur, control managers sees that actual state matches expected state and everyone’s fat, dumb and happy.

[0:18:17.3] CC: We actually didn’t talk much about other container orchestrators other than Kubernetes but I’m wondering because I’m not familiar with any others, but others come to mind, Docker, Swarm and Mesosphere, do they operate in the same way? 

[0:18:36.7] NL: Josh, I think you had some more experience than I did with at least, I believe it was Mesosphere?

[0:18:41.8] JR: No, unfortunately not.

[0:18:43.1] NL: I thought – okay, I thought that you had used in your previous life, you’d use at least one other?

[0:18:49.0] JR: No, we did some small proof of concepts on Swarm but we never go very far along with it.

[0:18:54.1] NL: Yeah, I actually, to be honest, I don’t really know much of the difference between like Rancho Lab, Mesosphere and Docker Swarm. I believe that they all act very similarly to Kubernetes but in slightly different way and this is something that I meant to take a look at before, talking about it but I just ran out of time, I’ll be honest.

[0:19:12.8] CC: I guess we’re going to need Part Two to this episode.

[0:19:15.7] NL: This is a big topic, we’ll definitely have to come back and kind of launch on this a bit more. I think they’re all orchestration and all these orchestrators work in the same function, right? Or the same fashion. There’s what you want to happen, what actually exists, how do we get that change to occur, right? 

[0:19:33.8] CC: Was that what you meant, Josh?

[0:19:35.4] JR: Yeah, exactly. I think the one thing to add too is the systems are generally making like really informed decisions when trying to reconcile desired state. By really informed decisions, I mean, they’re obviously aware of a lot about the compute resources available to them.

One big benefit that adopting container orchestration gives you is things like the scheduler are able to look into the system and understand, hey, based on resources I have available in this area, it would be smarter for me to start more containers over here versus over here, right? When you have these larger complex things and you’re trying to kind of think of all your resources as kind of like a sea of compute.

The container orchestration is not only able to get you to a desired state but also to do it in a way that is, at least in most cases, as desirable as possible, right? As far as using resources effectively and a term that we often times throughout there, which is Vin Packing, right? The idea of ensuring that we can know the resources a container needs and pack them together really tightly, so that we’re utilizing the potential hardware or cloud resources that we’re paying for every month. 

A lot of times, the adoption of container orchestration is this really elegant way to move our workloads around but at the same time, it’s a way to really utilize the things we’re paying for and potentially cut costs over time as well.

[0:20:57.5] CC: Yeah, this is one thing that I find fascinating with at least Kubernetes because I haven’t used the other orchestrators. We can boot up let’s say, four machines, and four instances of a machine and deploy Kubernetes on it and tell Kubernetes, “I want these many nodes, these many pods and have this container with apps obviously, or services running in the containers.”

I don’t need to specify even where anything’s going to go. It just spreads the load and keeps managing and monitoring and managing what needs to go where to better utilize the instances.

[0:21:46.2] NL: I think that’s actually an important distinction between the different container orchestrators that exist out there. If I recall correctly, I believe that Mesosphere has a mechanism that can kind of better load balance your containers that are running in the cluster.

At least better than – it can make a kind of a more informed decision on like the state of the cluster and where it took place things than Kubernetes does and that might be one of the key differences between the two. That’s something that I hear a lot in the Kubernetes community. Someone’s like, “I noticed that all of my resources are kind of being put on to one computer and then the rest of them aren’t even being utilized at all, what’s up with that?”

I think there’s something there that’s important to understand which is the Vin packing that Josh was talking about. Also, I pointed like that because on my screen, Josh is right next to me but that might not be the case so I might just look like I’m pointing out from the space.vIt’s important to know that from the capacity of at least in Kubernetes and like most of these orchestrators, if there are resources to be utilized, the orchestrator doesn’t care for the most part. 

Mesosphere has the ability to kind of load balance, as I said but as long as the resources that are available on one computer are the same as any other computer. If one of them is getting like super utilized and the other ones aren’t, it doesn’t really matter, it doesn’t affect the functionality of the cluster at all, right? One meg here and one meg there, essentially the same.

[0:23:11.7] CC: What does the orchestrator do when let’s say I have four instances and I have what I have, I stuffed a bunch of consigners in there and I’m thinking, for this instance, this will give me plenty of memory but I have a leaky app and all of a sudden, my RAM blows up. What happens?

[0:23:34.1] NL: This actually ties into why I look into an orchestration from a cloud native perspective. This is kind of where, container orchestration is cloud native. It takes into account the elastic nature of your resources. If you have this application that’s blowing up, either you can have limits to how many resources the application can utilize, or you can use auto scaling.

In Kubernetes, we have something called Horizontal Plot Auto Scaling and some of the other tools, I’m sure they have the same, but the idea is like, as you’re using more and more resources in the pod, it is taking up this much memory. It then needs to create a new pod, right? Or a new container, right? So a new container needs to get orchestrated and then another one, another one, another one. 

Now, if you have a really aggressive application that is acting kind of maliciously that’s not great because it will take up all the resources in your cluster and that’s not good. But if you just have a very spiky application, it could grow with its needs and then come back down, and no one has to know about it essentially. Your orchestrator can make that happen for you. I think that is really cool. 

[0:24:40.9] CC: It is and what if I am reaching the limits of my resources. I mean there are only so many pods that can stuff in four instances or two instances. So what if I am reaching the limits of my resources? What happens then? How is an orchestrator going to help me? 

[0:24:58.6] JR: Yeah, the nice thing is we can – and most of these orchestrators set some type of parameter around potential CPU that we want to make available in memory, that we want to make available for the app and what is nice about this is at least speaking to Kubernetes, and I am sure it is similar for others, just using some of the underlying technologies that are existent in Linux like Nicholas has mentioned C groups. 

We have the ability when CPU gets too high to potentially throttle it and slow it down or at least limit the amount of CPU it can use in given cycles and with memory, if we start over committing, we now have the ability to potentially kill the application if it is starting to take up more memory than it actually should be allowed to take up. What’s interesting about Kubernetes and other orchestrators is their self-healing model is that sometimes when apps are doing really bad things, like leaking memory all over the place, you might not detect it right away, right? Because it is actually going to potentially limit or kill the app and self-heal it by bringing it back up. 

So it might seem like your app is still online and you don’t necessarily realize that under the hood, Kubernetes was actually restarting it and trying to continually bring it to a state of health, right? So you have a lot of abilities. It is like everything that Nicholas just said about reading how much information or resource the app is taking and potentially scaling based on that, or even setting like hard limits to say, “I want to throttle my app or even potentially kill my app if it starts to act badly and use up more than it should.” So it is a really cool kind of declarative way to approach resource limiting. 

[0:26:29.2] NL: And that is actually something that I don’t think a lot of people including myself work on that much is the throttling aspect, right? Most people are like, “Okay, well whatever. Just take up as many resources as we need.” That’s what it’s there for but maybe you shouldn’t always be doing that. Not every application needs to expand horizontally or vertically, if it’s safe or said. It could be that the application is acting poorly, and they need to be like, “No, you actually don’t need that many resources.”

[0:26:56.4] CC: So let us say any or all of these things are happening, throttling and self-healing, how could I know? I mean I am asking this question, but I know the answer. I mean what tools do people actually use to be informed and notified of these events? 

[0:27:15.9] NL: So this is something I think we are going to get on another episode but just to come breach this into something that – I am also very excited. I am just a very excitable person really, I’m like, people say I’m just like a puppy and they’re not wrong. 

[0:27:27.1] CC: That’s why you’re here Nic. 

[0:27:29.0] NL: What? Me? Who said that? Is observation or observability. So monitoring, alerting, inflecting into your cluster to know what is happening, right? So you could, as Josh was saying like under the hood these things could be happening and the orchestrator is reconciling your cluster and your resource utilization for you and you might not know it but if you have observation and you have monitoring going on, you could see like, “Oh hey this pod is like restarting every 20 minutes.” 

Like it shouldn’t, it doesn’t need to restart every 20 minutes, like clearly the application is still running. So that is not a bad thing but maybe we should fix that, right? So you can be aware of what’s going on, right? 

[0:28:10.3] CC: And I know that there are tools that provide monitoring and observation but Kubernetes itself doesn’t provide that, right? Those are things that we hook into Kubernetes. 

[0:28:21.0] NL: Yes. Yeah that is correct because Kubernetes, and like any of these other orchestraters, are doing what they should be doing, which is being the best orchestrator they could. Having like that package now that you are getting into something that is more like a product and there is nothing wrong with products but that is not what these projects are here to be, right? 

[0:28:40.2] CC: How do you distinguish between the project and the product? 

[0:28:43.0] NL: Now that is interesting. Josh, you want to take this one? 

[0:28:45.7] CC: You opened the door. 

[0:28:47.0] JR: Yeah, I’ll start and then I actually think Nicholas, you might be the best one to speak to this with your background in Open Shift quite frankly, right? So it is kind of like these orchestrators are primitive in a way for how we eventually build a platform and that platform is a larger thing that includes potential monitoring, maybe plugins to continuous integration and continuous delivery. 

There’s a lot of groups or companies that have kind of that whole story or at least parts of that story, packaged up together, right? I mean we do it at the MWare with some of our enterprise offerings around TKS and then Open Shift, at least in my mind, it does that as well. Maybe Nicholas you can speak to that a little bit?

[0:29:27.3] NL: Yeah, so from an Open Shift perspective at least when I was using it, it was trying to be everything you would need to monitor, or to not monitor, but to run a container orchestration system, right? So it has a Docker registry built it. It has monitoring built it. It has some rudimentary charge built in, Ingress, all of these things that don’t necessarily come with Kubernetes like the option Kubernetes. It has a solution around that. 

And I think that is the difference between like project or just an orchestrator and a product. A product is trying to solve a grander enterprise problem versus a project or in this case, an orchestrator, is going to solve one problem and that problem is how do I get these containers to run in a way that my customers – not my customers really, my users expect them to run.

[0:30:18.3] CC: Yeah, fair enough. 

[0:30:19.5] NL: And what do you think on the topic, Carlisia? 

[0:30:22.0] CC: Oh it sounds an awful lot to me like a product is you get money for it and the projects you don’t. 

[0:30:28.1] NL: That is actually very – you’re right, honestly that is really the main distinction. One of them is money based. 

[0:30:34.6] CC: But your description, the descriptions you make for it are very valid – it is very valid because a project by itself may not have enough value for let’s say companies and bundling this project with that project and the other project, which ultimately you’re building the product with a purpose, right? You will have a purpose with that product to have a specific audience for their product set of users. So it is very distinct from taking one part of that product and calling it a product because maybe it is not enough to address and solve problems. 

[0:31:20.3] JR: Yeah, I think that is an important distinction. It is almost like what Nicholas and I were talking about was more about the distinction between what an orchestrator is and what a full platform would be, right? And I think to Carlisia’s point about how we plug in the monitoring and stuff is really important because just like we were talking about with the cloud native landscape in our last podcast, Kubernetes is just one piece of the overall puzzle. 

Kubernetes isn’t your whole platform start to finish, right? It is just the container orchestration portion and you have a lot to build and hook into that to make it a full platform that your company might be onboarding developer workloads onto it. It is just really one piece of that overall puzzle. 

[0:32:01.0] CC: That is beautifully put Josh. 

[0:32:02.9] NL: Yeah, very nicely put. So I’ve got a question for you guys. We’ve been beating around the bush as it were but to me, it seems apparent that in the world of container orchestration, Kubernetes has come out on top. That isn’t to say that it’s the end, right? There could be something that comes out that actually beats Kubernetes, right? But for now, it seems like everyone is looking at Kubernetes and I am curious why it is that you think that – you all might think that Kubernetes took the top space. 

[0:32:32.7] CC: I am scratching my chin. 

[0:32:35.1] NL: Scratching chin emoji. 

[0:32:38.3] JR: Exactly, one thing for sure is I just think Kubernetes did the community thing really, really well and not that it is all about community. It is obviously about technical choices and things of that nature but I think they did, not to say they’re perfect, but they did a really good job of being very inclusive and getting people to join this community and give feedback and the structure of the special interest groups where people get together and focus on various areas of Kubernetes, like scheduling or cluster life cycle and things like that. 

And it is interesting because the community just grew so quickly in my mind, that it just made this massive push into the market because there were so many humans behind it pushing it along. So I think at least among other things, community was one of the biggest. 

[0:33:24.0] CC: I can’t say that I was paying attention in monitoring that space so I don’t know. Of course, I can make guesses, what Josh just said sounds very plausible that he had Google behind it. I am sure it didn’t hurt. Not that we need to be fan boys and fan girls of Google but having a company like that sponsor and put resources behind the project gives a signal that “Okay, this is going to be here for a while.” Even though Google has a reputation of discontinuing things, but at the same time, I think that is significant. 

What else? Definitely the community. I didn’t follow the community from the beginning so only this last year and something, almost two years that I have been working with Velero, that I get to see how the community is and it’s amazing. It’s crazy, so organized. Yeah and it is not perfect, nothing is perfect but it’s incredible. The enthusiasm and the organization and the transparency, it is amazing. 

[0:34:36.6] NL: Yeah, absolutely and I agree with actually both of your points. It’s corporate sponsorship not just Google I mean, I’ll get to this in a second and the community as well and also some of the functionality. But it was both the corporate sponsorship of Google and Red Hat in the early days and not to tap my old you know, “Yeah we did it.” But it Red Hat had a big play into early Kubernetes as a supporter and so what that did is establish, “Hey, Kubernetes is at least enterprised.” 

An enterprise perspective project, right? It is not just, “Hey, this is some open source project. It may or may not work. If it doesn’t, you are on your own.” If you had a company like Google and Red Hat who are both endorsing this project, suddenly enterprises were more interested in taking it onboard, like it was more of a viable concept. 

[0:35:29.4] CC: I’m glad you are here Nic to correct me and make that addition. 

[0:35:34.4] NL: Oh well, yeah I was not correcting you at all. I think – 

[0:35:37.2] CC: No because I didn’t clue into the fact that – I mean I see Red Hat all over the place but I don’t know the dimension of involvement that they had from the beginning, because at the beginning, I was an outsider to all of this.

[0:35:50.8] NL: Yeah, so for perspective, Open Shift 300, which is when I first started getting into it, is based on Kubernetes 1-2, which is pretty early. They were big like they put a lot of resources into the development of the community and for the development of the functionality that exists, right? The horizontal pod auto-scale that we still use today is due in the large part to the contributions of Red Hat, right? The engineering at Red Hat is responsible for that piece, among other things. 

And so with them at play, kind of getting their community and Google’s community coming together and then able to organize this community that I think is a big piece of what took this off or what allowed Kubernetes to take off. That is how grammar works. There is also some pieces of functionality that I think were novel to Kubernetes in the early days, things like Ingres. The way the Kubelet worked was actually kind of unique, like how low level the commands that are being issued by the Kubelet were pretty unique. 

And so it allowed for people to adopt it like the things that were happening from the Kubelet perspective like changes to your IP tables, running a container, changing the C groups and all of these things, those are all well known by people at the time and so there wasn’t anything like arcane happening. It was just, “Hey, this process just runs these commands and that is how it reconciles say, right? And so I think that that kind of functionality really got people to trust what was happening. 

And so, you know it’s like I think the trust and transparency are the big things that people keyed into. The trust comes from the enterprise sponsorship, and also the fact that what was happening from a rudimentary standpoint was pretty simple and so people could wrap their heads around it and then transparency was having this community. Everything happens in the open, everything is recorded and accessible by everyone, right? It wasn’t just like some behind the scenes things happened. 

[0:37:50.7] JR: Yeah and I think that piece is super important, like Nicholas and I, we came from Coreless or our lineage around like open source Kubernetes is not too dissimilar. We spend a lot of time working with customers in pure upstream open source Kubernetes and actually taking some of their issues and requirements to the community and then helping shape the direction of Kubernetes in micro kind of ways, but still important ways to that company. 

And I think companies seeing through the CNCF and seeing through just community leadership and involvement that the things that they care about aren’t just going through a single vendor to make a decision as to whether that thing should be included, but it is being part of a larger community discussion, breeds a lot of confidence in this project in the long term. I think at the end of the day, we started with there will be container orchestrator that many of us use. Or maybe there will be a couple, right? 

There is no question, we need to solve container orchestration as an overall problem and companies are at this point where they are still placing a bet on what they want to use and because of the community, because of the involvement, because of the ability to adopt the project to potential business requirements, I feel like more large and small medium organizations are willing to put their money on Kubernetes as a whole. 

And I don’t think they felt as confident finding some other projects, like Open Stack and then historical Masos perhaps. I am just projecting based on conversations I’ve had but that is why I think a lot of folks are really excited about the future for Kubernetes. 

[0:39:21.3] NL: Yeah that is an excellent point. 

[0:39:23.0] CC: Let’s stick with the theme of projecting in the future and we are going to have to wrap up soon otherwise it is going to be a two hour, I mean this could be a two-hour show. But let’s not make our audience go through that. We’ll have part two. What about, we talk all the time, and people who are in this area, we talk about all the time how everybody knows Kubernetes and da-da-da, but I want to challenge you two, do you think that everybody knows Kubernetes? 

Everybody knows the purpose of Kubernetes, everybody knows if they should be using Kubernetes or not, how are people able to make an informed decision if they should be using Kubernetes? Because I don’t think everybody knows Kubernetes. I think the majority of companies, in terms of volume, because smaller companies I would guess they outnumber the bigger companies and technologists – I think a lot of people are not clear on what this is. 

That’s why we are here but what do we tell them? We have to have an episode to discover that, now that I am thinking about it, but we could wrap this up with some seed ideas for that. 

[0:40:46.9] NL: So that is a great idea and something that I’ve been playing around with introducing myself, is when do you not use container orchestration, right? Just because container orchestration exists doesn’t mean necessarily – 

[0:40:58.0] CC: If you don’t have containers. 

[0:40:59.1] NL: Yeah, one, if you don’t have containers. That is another starter.

[0:41:02.5] CC: It is a real legit thing to say because some people ask me, “Should I start with Kubernetes or containers?” that’s the level of education that we must provide.

[0:41:15.5] NL: Yeah, absolutely and that is something we actually run into a lot in the field is when we are engaging with our customers, part of our job is to help containerize their applications if they are not already there. Trying to help them do that in a logical manner. But for instance, to give an example, my fiancé’s company uses Docker, but they don’t use Kubernetes or any kind of orchestration because they don’t need to. 

Like the amount of the resources that they are going to be using and the amount of and the type of work that they are doing, it doesn’t make sense to use an orchestrator. I have actually talked to some of the engineers about it because they were like, “Oh tell me about this Kubernetes thing” and I’m like, “This is what it is” blah-blah-blah. I finally came up with a metaphor where it’s like your company uses the containers as a shovel. 

If we brought it into like, let us say we’re ploughing a field, right? You’ve got a plow, if you already use Kubernetes that would be like trying to plow the field with a nuclear bomb. It is way more complicated than you need to do. Sure, you can clear a lot of land with a giant bomb but that is way more than you guys need, right? And I think that for me that’s the drawing line. It is like if the complexity makes sense for you to do like, if you’re trying to all of a sudden, establish a farm. 

Not to say that you should use a bomb to plow land but hey, if you need to clear a lot of land a bomb can work, right? That is a terrible metaphor, I am sorry. That went off the rails really fast. 

[0:42:41.3] CC: It wasn’t too bad. 

[0:42:43.8] NL: I actually think that. 

[0:42:46.7] JR: I think, one thing that I will say and this is coming from experience working with organizations is let’s assume that you have justified Kubernetes for yourself, and by the way, I super echo everything that Nicholas just said, you have to be really careful and determine do you actually need to take this thing on? Because it is so hard to do in a lot of ways, right? But let us assume you have taken it on. I think an interesting thing to have empathy about as often times infrastructure dev ops people is you might know Kubernetes really, really well. 

But that doesn’t mean your thousands and thousands of developers have any idea what Kubernetes is at all and that is a massive disconnect we see in organizations all the time where they are trying to onboard folks onto Kubernetes, and they haven’t fully abstracted Kubernetes away, which some companies do and that could be a really good pattern too. Like developers deploy their apps, they don’t even know Kubernetes are running them under the hood. That is a really neat pattern as well.

But assuming they are just trying to bring developers onto Kubernetes, they don’t really have the same amount of empathy for them and they just think like, “This should be really easy. It is just a bunch of yemel files, you’ll figure it out,” but they totally forget about all of the complexities that they originally learned about. Like how does pod to pod networking work and things like that. 

I just think that to your question Carlisia, it is interesting because one massive group in a company can know a lot about Kubernetes and forget what it was like to learn how something like Kubernetes or container orchestration worked. I think a lot of that is bridging the gap and really having some amount of education to bring everyone up to speed, even in the same organization. 

[0:44:21.2] CC: I am dying to have an episode on just that alone because it is quite challenging. When you are faced with Kubernetes, I mean the very first thing is that there are terminologies that you haven’t seen before and they’re like, “How does that map to what I already know?” and then sometimes it doesn’t map. It is completely new so. 

[0:44:43.1] JR: Yeah and when the benefits aren’t super obvious to you, it is really hard to get bought in and be willing to invest your own time and energy into it, right? And we forget that it is just not super obvious why Kubernetes makes sense for a lot of folks. 

[0:44:56.6] NL: Yeah, absolutely. That is a good point that even I sometimes forget like when someone says, “Well, why would I want Kubernetes?” I’m like, “Why wouldn’t you want Kubernetes?” like duh, it works so well in my brain why don’t you get it? But it is good to take a step back out of yourself and you know, be empathetic to the people you’re talking about in the community. 

I think Carlisia, you mentioned that we should be wrapping this up pretty soon and I think I totally agree. Before we go, I want to say if you want to contribute to any container orchestration about Kubernetes in specific since that is the one we want to work with the most, we totally encourage you to start contributing to these projects. Like with Kubernetes, we have the Kubernetes-Kubernetes Repo that has a lot of information on how to start contributing. I believe that Mesosphere has their own repos and the information online available for them. 

And I don’t know, I am not sure if there is much in a way of Docker or Swarm anymore that you can contribute to. I am not sure, but for Kubernetes, we have the Kubernetes-Kubernetes Repo and the Kubernetes Slack channel K8S at slack.k8s.io. Please join us and start talking about your container orchestration journey. 

[0:46:08.6] CC: And Kates by the way is K8S and I am going to say that because at some events and some people were up in the stage and they’re like, “Kates this, Kates that” and I am sitting with someone in the back and I’m like, “Who’s Kate?” 

[0:46:24.3] NL: Or I have seen people who are like, “K-eight-S” is the acronym and what that means is that there is eight letters between K and S in Kubernetes. That is all that means. I have seen some people do K8 and it drives me up every wall. I actually start constructing walls and it continues to drive me up them. I am in an infinite regression of walls. 

[0:46:44.6] CC: All right everybody, thank you for listening. It’s great that you are here, and we are going to be back with more cloud native goodness. 

[0:46:53.8] NL: Yeah, absolutely. All right, cheers. 

[0:46:56.0] JR: Thanks. 

[0:46:56.8] CC: Goodbye. 

[END OF INTERVIEW]

[0:46:58.7] ANNOUNCER: Thank you for listening to the Podlets Cloud Native Podcast. Find us on Twitter @thepodlets and on the Podlets.io website where you will find transcripts and show notes. We’ll be back next week. Stay tuned by subscribing. 

[END]

[0:02:36.0] CC: I meditate too, it’s great.

[0:02:38.2] NL: Yeah, it’s good. All right, anything interesting in the cloud native space that you guys have found in the last week?

[0:02:43.6] CC: I have a talk that was accepted for KubeCon China.

[0:02:47.4] NL: Awesome, congratulations.

[0:02:49.6] JR: Congrats.

[0:02:50.6] CC: Yeah, it’s a joint talk with Steven Wong also from Thea Moore. We’re going to talk about data recovery, data protection, recovery, migration in Velero.

[0:03:03.9] NL: That’s great. He’s been coming to the Cloud Native Social Hour pretty regularly. That’s awesome to see some more cross interaction.

[0:03:11.6] CC: Yeah, he is awesome, so knowledgeable.

[0:03:14.0] NL: Great. And Josh?

[0:03:15.5] JR: Very cool. I was actually looking this week since I’m in kind of the Kubernetes mindset, for something that can kind of add a TTL to any Kubernetes resource. So think of something like a service account in Kubernetes and I want to attach a TTL to it such that in four hours, it effectively got swept up and is no longer existent in the system.

There’s some interesting ways that actually Kube ADM, one of the bootstrapping tools, does this. I was trying to kind of replicate that for their tokens, there’s a project by one of these Landau folks. Jacobs, I don’t know if that’s his last of first name, sorry in advance for butchering it, but he’s got a project called Kube Janitor that does effectively that.

With annotations, you can put a TTL on them, your resources and then Kube Janitor will just come through and sweep that up. Which I thought a really cool idea. That was an interesting thing that I saw, it’s no new news, I think it’s been around for a while but it’s the first time that I had run into it.

[0:04:07.6] NL: Nice. For me, our cohost Duffy, turned me on to a tool called Chaos Blade. Recently, I’ve been getting more and more into Chaos engineering and this is apparently an easy to use Chaos engineering toolkit. Something I’ve only just started looking at but I’m pretty excited. I’ll probably play around with that a bit more.

[0:04:25.2] JR: Cool, awesome.

[0:04:26.9] NL: Yeah, this week on the podcast, we are talking about container orchestration and kind of what that is, right? For me, container orchestration is the idea that you need your workloads to run somewhere but you don’t necessarily need to care where they’re running and the way that this has been done traditionally, prior to container orchestration, was like scheduling VM’s or making sure these processes run on certain computers, right?

There’s a lot of automation around that like, when containers came around, we needed some way to make sure that they’re running and it also enabled us to not need to care so much about how things get started in all that. Everything was kind of packaged in a container I think. They need to just be some way to run them. That’s kind of where container orchestration came in, is that kind of your guys’ take on that as well?

[0:05:18.3] CC: Yeah, basically, when we say we are orchestrating containers, we basically tell them how to behave, right? For example, I have this container here and I’m going to declare that if it fails, I want it to come back up in this container over there, if you fail just keep that state, don’t do anything and then I might say hey, I want two of you, three of you, I want to – the orchestration part is really just dictating behavior and state.

[0:05:48.6] NL: Yeah, absolutely.

[0:05:49.9] JR: Yeah. I think one interesting thing that came with the advent of containers is, we used to have this notion of you know, what server is my application going to land on or then eventually, you know, what virtual machine is my app eventually going to land on and we think kind of in this units of virtual machines and the paradigm shift a bit, at least in my experience has been now that you have the container unit and you can run many of those on one virtual machine, right?

Your concern about orchestration is not just putting it on machine A and putting it on machine B but it’s kind of like packing multiple of this containers, perhaps on the same virtual machine or same host. The orchestration notion is beyond just the conventional system construct of a different host each time, it’s really interesting.

[0:06:34.0] NL: Yeah, I think it might be important for us actually to take a step back. I realized I kind of jumped right into it, but we should probably settle what a container is, right? Before we can talk about how we can orchestrate them.

A container is basically just a tar ball honestly. That is a packaged application with the instructions for it to run on any system that can accept that tar ball. Containers are broken down into a couple of Linux constructs, C groups and name space, so C groups four, making sure the process runs in its own dedicated memory and then or just like isolated memory. Then name spaces for things like network isolation. 

So that the network traffic that’s going on in the container doesn’t cross over to other processes. Very controlled process initiation based on these instruction. That’s kind of what a container is, a lot of people think that they’re like, kind of like a VM, I’ve heard that a few times where like, “Oh how do I deploy it?” What’s the VMDK for a container? It’s just a process that runs on a computer in a very controlled fashion, that’s literally it. 

[0:07:43.9] JR: Yeah, it’s kind of interesting to think like, at what point in which we kind of started using containers and seeing containers. I’d be curious for either two of you, Carlisia especially, what was your first exposure to the unit of a container and why were you starting to consider using a container versus just a virtual machine or a process?

[0:08:03.0] CC: Frankly, I don’t remember. My first time seeing a container has been a long time but I don’t remember. But probably maybe trying to do some application like some toy application that – an example application. I remember that I was working on an application that we had the option to stuff it into a container as well, but I personally didn’t make the development. 

I wasn’t using it for development. My first usage of container really was about three years ago when I was working for CDN and a CDN as you might imagine has many different parts, so it has very low-level software running to higher level software, right? Really, sometimes, well, not sometimes, it has kernel level applications in systems, and it has API level system. For you to develop one part of it is it was really handy to be able to stuff our different systems into containers and have containers stuck to each other.

We weren’t using the introduction. This was for development, but it was amazing, it was fantastic, we would have applications developed and go. Different systems that needed to talk to each other and we would have applications in C and I think that is to remember but it was amazing. Everything in containers and then we have a tool as well, they were sort of like Kubernetes, it wasn’t Kubernetes.

It was developed in house. That orchestrated all of these things and you know, we simply failed, bringing back up and did a bunch of other things as well. I cannot explain the difference of working like that. It’s so much faster and so I could be a lot more autonomous, being able to run everything myself. I didn’t depend on having access to its server. I ran everything on my laptop, it was fantastic.

[0:10:17.6] NL: Awesome. The first time I ran into a container was back when I was working for Red Hat, right when Open Shift Three CEO came out, that’s when Open Shift kind of moved from the in-house version of Open Shift to adopting Kubernetes. I had been working mostly in the virtualization like infrastructure world like doing a Red Hat enterprise virtualization manager, which is kind of like a Red Hat take on B Sphere, you know, kind of.

I was very used to virtualization and spinning things up. There is some aspects of creating a VM and creating a container that were very similar. It took me awhile for my brain to click. Once I started using open chip to kind of click into like, “Oh this is how they’re different, right?” Whereas, if you’ve just started looking at it, “Well what’s kind of the difference?” They’re all just like, in my command line, they all just come up as like lists of units, right? 

This is a processing unit, that’s a processing unit right there. They’re kind of similar but once you start really getting into the use of it, it was so much different. I had heard like during this process of switching over to these two tools, I had heard of Docker and I was like, it’s something I’ll take a look at and finally, by shifting over to it, I finally was starting to – like oh this is what docker is, this is how we use these and then like, kind of digging into containers there.

It was an interesting switch from an infrastructure standpoint to like, this is how people use containers and then that kind of actually started getting me into development. Now that I didn’t have to care about all this overhead of like where do I put my application, if I want my application around on my computer versus your computer, how do I make sure that the packages are the same bubble?

Once there was that easy way to kind of say, I just want this run everywhere, no matter what, hopefully, that really just like, fascinated me and it kind of took off from there. Josh, what about you?

[0:12:11.6] JR: Yeah, my experience wasn’t to dissimilar. What was interesting is the space I was working in was a lot of legacy Java applications, so we kind of came into containers probably a little bit later than what some of you all did. What was always interesting about it is, you know, we started to really see the value of containers just like Carlisia was saying, we started packaging these apps up and they ran the same in every environment and just really changed our workflow around. 

Initially, it was just like, let’s figure out a way to simply start these containers on different hosts, whether it be like Answerable or even someone going out a host and typing Docker Run, you know, that was how we got these processes to start. As the adoption of containers grew and more and more containers started to come to life in this company, the need for orchestration finally became obvious, right?
I had heard about this project called Kubernetes, I’d heard a bit about Swarm, Mesos and it was always just like I don’t understand why you’d ever need something this complex, right? But eventually you hit this like inflection point where it just becomes insanely obvious, that your life is potentially going to be just chaos without something that can actually figure out, hey, you need to run this container, let me figure out where to put it and make sure that it starts.

I thought that was like a really interesting progression. It used to be really hard also to navigate the options because there were a lot of options and there still are, there’s Swarm Kubernetes, Open Shift, Mesos, so on and so forth.

[0:13:31.9] NL: Yeah, that’s actually a good point to what I’m talking about is that, container orchestration, it seems like we’re all kind of building up to the same point where when containers were kind of taking off, everyone started to see like this is great. But how do I do this at scale? Even like remotely at scale. 

A bunch of people started doing their own thing. So there was Kubernetes, which is the open source version aboard with some changes to make a more friendly for other people, there’s Docker, Docker Swarm and then Mesos, Rancher. But then, Carlisia, your team had their own orchestration, a lot of other companies have their own orchestration as well so it’s not just – you don’t need like this project to do or any of these projects to do container orchestration. You can do it on your own if you need to, right? 

For example, you could take a look at Uber, they aren’t using a project, they’ve rolled their own container orchestration at scale and I think that’s the same, that’s crazy to me but that’s awesome for them to have pulled that off, right?

[0:14:29.4] CC: Yeah, absolutely. When I think of container orchestration, there is the management part and the scaling part because when you think about management for example, I might need a whole set of services to be up and running before I can run the set of services. The orchestration is going to manage that for me. Make sure that the services come up, they’re up and now this set gets kicked off.

If I don’t need to scale, I still need to do this, right? There is usually some sort of dependency. Then in the scaling part which is also – I mean, it’s important for a lot of companies but it’s not important for a lot of companies smaller sized companies, right? 

[0:15:18.7] JR: Maybe we can talk a bit about what kind of information container orchestration works with to determine what it should do, if that sort of makes sense? Like what kinds of things are we telling these systems about and then what is it doing to act on that information?

[0:15:38.0] NL: Yeah, please, go ahead and dive into that a bit more.

[0:15:41.0] JR: Yeah, I guess it seems like the common approach that we run into, at least with Kubernetes and I think it’s true for a lot of these different systems, is the notion of reconciling state, right? We start of kind of with declarative definition if you will of what we want the world to look like and that could be some app running with some amount of replicas and you want it to have a certain amount of CPU and memory available.

Then, these orchestrators usually can just take that declarative notion and sort of act on it, right? I know Nicholas, you’re really close to Kubernetes, would you want to speak to like how exactly it acts on those things like when you give it that declarative API object? What it’s going to do behind the scenes?

[0:16:24.6] NL: Yeah, in Kubernetes, there’s a couple of different systems at play. This is something that I find really fascinating. There’s a lot of reconciliation loops in many different places. In Kubernetes when you first declare to Kubernetes that you want something to happen, you talk to the API server.

The API server then modifies the etcd data store, right? The data store is just, simply ley value pair brain, it’s like the brain of your Kubernetes, right? Only the API server, as far as I’m aware and remembering off the top of my head, that’s the only thing that actually directly communicates to the etcd server. That might be incorrect but for the purpose of this – 

[0:17:04.3] CC: I think that’s correct.

[0:17:06.8] NL: Okay, good. I was suddenly second guessing myself. The API directly can be considered sort of make the changes. Then the controller manager is in a reconciliation loop, saying like, here’s what I think the world looks like and if the world changes based on what etcd is saying, the controller manager maintains actual state and etcd controls expected states. This is where we want to be. If actual state and expected state are different, the controller manager reconciles that. Either it will delete something or add something to the cluster at large to make sure that that state exists.

[0:17:47.6] CC: Based on what’s in the etcd database?

[0:17:50.4] NL: Yes, exactly. It will – the controller manager, based on all the many controllers that are just themselves reconciliation nubs, if any of them are you know, different, it will then kick of something to the schedule which will then inform the various nodes in the cluster, what changes they need to do to reconcile state. Those changes occur, control managers sees that actual state matches expected state and everyone’s fat, dumb and happy.

[0:18:17.3] CC: We actually didn’t talk much about other container orchestrators other than Kubernetes but I’m wondering because I’m not familiar with any others, but others come to mind, Docker, Swarm and Mesosphere, do they operate in the same way? 

[0:18:36.7] NL: Josh, I think you had some more experience than I did with at least, I believe it was Mesosphere?

[0:18:41.8] JR: No, unfortunately not.

[0:18:43.1] NL: I thought – okay, I thought that you had used in your previous life, you’d use at least one other?

[0:18:49.0] JR: No, we did some small proof of concepts on Swarm but we never go very far along with it.

[0:18:54.1] NL: Yeah, I actually, to be honest, I don’t really know much of the difference between like Rancho Lab, Mesosphere and Docker Swarm. I believe that they all act very similarly to Kubernetes but in slightly different way and this is something that I meant to take a look at before, talking about it but I just ran out of time, I’ll be honest.

[0:19:12.8] CC: I guess we’re going to need Part Two to this episode.

[0:19:15.7] NL: This is a big topic, we’ll definitely have to come back and kind of launch on this a bit more. I think they’re all orchestration and all these orchestrators work in the same function, right? Or the same fashion. There’s what you want to happen, what actually exists, how do we get that change to occur, right? 

[0:19:33.8] CC: Was that what you meant, Josh?

[0:19:35.4] JR: Yeah, exactly. I think the one thing to add too is the systems are generally making like really informed decisions when trying to reconcile desired state. By really informed decisions, I mean, they’re obviously aware of a lot about the compute resources available to them.

One big benefit that adopting container orchestration gives you is things like the scheduler are able to look into the system and understand, hey, based on resources I have available in this area, it would be smarter for me to start more containers over here versus over here, right? When you have these larger complex things and you’re trying to kind of think of all your resources as kind of like a sea of compute.

The container orchestration is not only able to get you to a desired state but also to do it in a way that is, at least in most cases, as desirable as possible, right? As far as using resources effectively and a term that we often times throughout there, which is Vin Packing, right? The idea of ensuring that we can know the resources a container needs and pack them together really tightly, so that we’re utilizing the potential hardware or cloud resources that we’re paying for every month. 

A lot of times, the adoption of container orchestration is this really elegant way to move our workloads around but at the same time, it’s a way to really utilize the things we’re paying for and potentially cut costs over time as well.

[0:20:57.5] CC: Yeah, this is one thing that I find fascinating with at least Kubernetes because I haven’t used the other orchestrators. We can boot up let’s say, four machines, and four instances of a machine and deploy Kubernetes on it and tell Kubernetes, “I want these many nodes, these many pods and have this container with apps obviously, or services running in the containers.”

I don’t need to specify even where anything’s going to go. It just spreads the load and keeps managing and monitoring and managing what needs to go where to better utilize the instances.

[0:21:46.2] NL: I think that’s actually an important distinction between the different container orchestrators that exist out there. If I recall correctly, I believe that Mesosphere has a mechanism that can kind of better load balance your containers that are running in the cluster.

At least better than – it can make a kind of a more informed decision on like the state of the cluster and where it took place things than Kubernetes does and that might be one of the key differences between the two. That’s something that I hear a lot in the Kubernetes community. Someone’s like, “I noticed that all of my resources are kind of being put on to one computer and then the rest of them aren’t even being utilized at all, what’s up with that?”

I think there’s something there that’s important to understand which is the Vin packing that Josh was talking about. Also, I pointed like that because on my screen, Josh is right next to me but that might not be the case so I might just look like I’m pointing out from the space.vIt’s important to know that from the capacity of at least in Kubernetes and like most of these orchestrators, if there are resources to be utilized, the orchestrator doesn’t care for the most part. 

Mesosphere has the ability to kind of load balance, as I said but as long as the resources that are available on one computer are the same as any other computer. If one of them is getting like super utilized and the other ones aren’t, it doesn’t really matter, it doesn’t affect the functionality of the cluster at all, right? One meg here and one meg there, essentially the same.

[0:23:11.7] CC: What does the orchestrator do when let’s say I have four instances and I have what I have, I stuffed a bunch of consigners in there and I’m thinking, for this instance, this will give me plenty of memory but I have a leaky app and all of a sudden, my RAM blows up. What happens?

[0:23:34.1] NL: This actually ties into why I look into an orchestration from a cloud native perspective. This is kind of where, container orchestration is cloud native. It takes into account the elastic nature of your resources. If you have this application that’s blowing up, either you can have limits to how many resources the application can utilize, or you can use auto scaling.

In Kubernetes, we have something called Horizontal Plot Auto Scaling and some of the other tools, I’m sure they have the same, but the idea is like, as you’re using more and more resources in the pod, it is taking up this much memory. It then needs to create a new pod, right? Or a new container, right? So a new container needs to get orchestrated and then another one, another one, another one. 

Now, if you have a really aggressive application that is acting kind of maliciously that’s not great because it will take up all the resources in your cluster and that’s not good. But if you just have a very spiky application, it could grow with its needs and then come back down, and no one has to know about it essentially. Your orchestrator can make that happen for you. I think that is really cool. 

[0:24:40.9] CC: It is and what if I am reaching the limits of my resources. I mean there are only so many pods that can stuff in four instances or two instances. So what if I am reaching the limits of my resources? What happens then? How is an orchestrator going to help me? 

[0:24:58.6] JR: Yeah, the nice thing is we can – and most of these orchestrators set some type of parameter around potential CPU that we want to make available in memory, that we want to make available for the app and what is nice about this is at least speaking to Kubernetes, and I am sure it is similar for others, just using some of the underlying technologies that are existent in Linux like Nicholas has mentioned C groups. 

We have the ability when CPU gets too high to potentially throttle it and slow it down or at least limit the amount of CPU it can use in given cycles and with memory, if we start over committing, we now have the ability to potentially kill the application if it is starting to take up more memory than it actually should be allowed to take up. What’s interesting about Kubernetes and other orchestrators is their self-healing model is that sometimes when apps are doing really bad things, like leaking memory all over the place, you might not detect it right away, right? Because it is actually going to potentially limit or kill the app and self-heal it by bringing it back up. 

So it might seem like your app is still online and you don’t necessarily realize that under the hood, Kubernetes was actually restarting it and trying to continually bring it to a state of health, right? So you have a lot of abilities. It is like everything that Nicholas just said about reading how much information or resource the app is taking and potentially scaling based on that, or even setting like hard limits to say, “I want to throttle my app or even potentially kill my app if it starts to act badly and use up more than it should.” So it is a really cool kind of declarative way to approach resource limiting. 

[0:26:29.2] NL: And that is actually something that I don’t think a lot of people including myself work on that much is the throttling aspect, right? Most people are like, “Okay, well whatever. Just take up as many resources as we need.” That’s what it’s there for but maybe you shouldn’t always be doing that. Not every application needs to expand horizontally or vertically, if it’s safe or said. It could be that the application is acting poorly, and they need to be like, “No, you actually don’t need that many resources.”

[0:26:56.4] CC: So let us say any or all of these things are happening, throttling and self-healing, how could I know? I mean I am asking this question, but I know the answer. I mean what tools do people actually use to be informed and notified of these events? 

[0:27:15.9] NL: So this is something I think we are going to get on another episode but just to come breach this into something that – I am also very excited. I am just a very excitable person really, I’m like, people say I’m just like a puppy and they’re not wrong. 

[0:27:27.1] CC: That’s why you’re here Nic. 

[0:27:29.0] NL: What? Me? Who said that? Is observation or observability. So monitoring, alerting, inflecting into your cluster to know what is happening, right? So you could, as Josh was saying like under the hood these things could be happening and the orchestrator is reconciling your cluster and your resource utilization for you and you might not know it but if you have observation and you have monitoring going on, you could see like, “Oh hey this pod is like restarting every 20 minutes.” 

Like it shouldn’t, it doesn’t need to restart every 20 minutes, like clearly the application is still running. So that is not a bad thing but maybe we should fix that, right? So you can be aware of what’s going on, right? 

[0:28:10.3] CC: And I know that there are tools that provide monitoring and observation but Kubernetes itself doesn’t provide that, right? Those are things that we hook into Kubernetes. 

[0:28:21.0] NL: Yes. Yeah that is correct because Kubernetes, and like any of these other orchestraters, are doing what they should be doing, which is being the best orchestrator they could. Having like that package now that you are getting into something that is more like a product and there is nothing wrong with products but that is not what these projects are here to be, right? 

[0:28:40.2] CC: How do you distinguish between the project and the product? 

[0:28:43.0] NL: Now that is interesting. Josh, you want to take this one? 

[0:28:45.7] CC: You opened the door. 

[0:28:47.0] JR: Yeah, I’ll start and then I actually think Nicholas, you might be the best one to speak to this with your background in Open Shift quite frankly, right? So it is kind of like these orchestrators are primitive in a way for how we eventually build a platform and that platform is a larger thing that includes potential monitoring, maybe plugins to continuous integration and continuous delivery. 

There’s a lot of groups or companies that have kind of that whole story or at least parts of that story, packaged up together, right? I mean we do it at the MWare with some of our enterprise offerings around TKS and then Open Shift, at least in my mind, it does that as well. Maybe Nicholas you can speak to that a little bit?

[0:29:27.3] NL: Yeah, so from an Open Shift perspective at least when I was using it, it was trying to be everything you would need to monitor, or to not monitor, but to run a container orchestration system, right? So it has a Docker registry built it. It has monitoring built it. It has some rudimentary charge built in, Ingress, all of these things that don’t necessarily come with Kubernetes like the option Kubernetes. It has a solution around that. 

And I think that is the difference between like project or just an orchestrator and a product. A product is trying to solve a grander enterprise problem versus a project or in this case, an orchestrator, is going to solve one problem and that problem is how do I get these containers to run in a way that my customers – not my customers really, my users expect them to run.

[0:30:18.3] CC: Yeah, fair enough. 

[0:30:19.5] NL: And what do you think on the topic, Carlisia? 

[0:30:22.0] CC: Oh it sounds an awful lot to me like a product is you get money for it and the projects you don’t. 

[0:30:28.1] NL: That is actually very – you’re right, honestly that is really the main distinction. One of them is money based. 

[0:30:34.6] CC: But your description, the descriptions you make for it are very valid – it is very valid because a project by itself may not have enough value for let’s say companies and bundling this project with that project and the other project, which ultimately you’re building the product with a purpose, right? You will have a purpose with that product to have a specific audience for their product set of users. So it is very distinct from taking one part of that product and calling it a product because maybe it is not enough to address and solve problems. 

[0:31:20.3] JR: Yeah, I think that is an important distinction. It is almost like what Nicholas and I were talking about was more about the distinction between what an orchestrator is and what a full platform would be, right? And I think to Carlisia’s point about how we plug in the monitoring and stuff is really important because just like we were talking about with the cloud native landscape in our last podcast, Kubernetes is just one piece of the overall puzzle. 

Kubernetes isn’t your whole platform start to finish, right? It is just the container orchestration portion and you have a lot to build and hook into that to make it a full platform that your company might be onboarding developer workloads onto it. It is just really one piece of that overall puzzle. 

[0:32:01.0] CC: That is beautifully put Josh. 

[0:32:02.9] NL: Yeah, very nicely put. So I’ve got a question for you guys. We’ve been beating around the bush as it were but to me, it seems apparent that in the world of container orchestration, Kubernetes has come out on top. That isn’t to say that it’s the end, right? There could be something that comes out that actually beats Kubernetes, right? But for now, it seems like everyone is looking at Kubernetes and I am curious why it is that you think that – you all might think that Kubernetes took the top space. 

[0:32:32.7] CC: I am scratching my chin. 

[0:32:35.1] NL: Scratching chin emoji. 

[0:32:38.3] JR: Exactly, one thing for sure is I just think Kubernetes did the community thing really, really well and not that it is all about community. It is obviously about technical choices and things of that nature but I think they did, not to say they’re perfect, but they did a really good job of being very inclusive and getting people to join this community and give feedback and the structure of the special interest groups where people get together and focus on various areas of Kubernetes, like scheduling or cluster life cycle and things like that. 

And it is interesting because the community just grew so quickly in my mind, that it just made this massive push into the market because there were so many humans behind it pushing it along. So I think at least among other things, community was one of the biggest. 

[0:33:24.0] CC: I can’t say that I was paying attention in monitoring that space so I don’t know. Of course, I can make guesses, what Josh just said sounds very plausible that he had Google behind it. I am sure it didn’t hurt. Not that we need to be fan boys and fan girls of Google but having a company like that sponsor and put resources behind the project gives a signal that “Okay, this is going to be here for a while.” Even though Google has a reputation of discontinuing things, but at the same time, I think that is significant. 

What else? Definitely the community. I didn’t follow the community from the beginning so only this last year and something, almost two years that I have been working with Velero, that I get to see how the community is and it’s amazing. It’s crazy, so organized. Yeah and it is not perfect, nothing is perfect but it’s incredible. The enthusiasm and the organization and the transparency, it is amazing. 

[0:34:36.6] NL: Yeah, absolutely and I agree with actually both of your points. It’s corporate sponsorship not just Google I mean, I’ll get to this in a second and the community as well and also some of the functionality. But it was both the corporate sponsorship of Google and Red Hat in the early days and not to tap my old you know, “Yeah we did it.” But it Red Hat had a big play into early Kubernetes as a supporter and so what that did is establish, “Hey, Kubernetes is at least enterprised.” 

An enterprise perspective project, right? It is not just, “Hey, this is some open source project. It may or may not work. If it doesn’t, you are on your own.” If you had a company like Google and Red Hat who are both endorsing this project, suddenly enterprises were more interested in taking it onboard, like it was more of a viable concept. 

[0:35:29.4] CC: I’m glad you are here Nic to correct me and make that addition. 

[0:35:34.4] NL: Oh well, yeah I was not correcting you at all. I think – 

[0:35:37.2] CC: No because I didn’t clue into the fact that – I mean I see Red Hat all over the place but I don’t know the dimension of involvement that they had from the beginning, because at the beginning, I was an outsider to all of this.

[0:35:50.8] NL: Yeah, so for perspective, Open Shift 300, which is when I first started getting into it, is based on Kubernetes 1-2, which is pretty early. They were big like they put a lot of resources into the development of the community and for the development of the functionality that exists, right? The horizontal pod auto-scale that we still use today is due in the large part to the contributions of Red Hat, right? The engineering at Red Hat is responsible for that piece, among other things. 

And so with them at play, kind of getting their community and Google’s community coming together and then able to organize this community that I think is a big piece of what took this off or what allowed Kubernetes to take off. That is how grammar works. There is also some pieces of functionality that I think were novel to Kubernetes in the early days, things like Ingres. The way the Kubelet worked was actually kind of unique, like how low level the commands that are being issued by the Kubelet were pretty unique. 

And so it allowed for people to adopt it like the things that were happening from the Kubelet perspective like changes to your IP tables, running a container, changing the C groups and all of these things, those are all well known by people at the time and so there wasn’t anything like arcane happening. It was just, “Hey, this process just runs these commands and that is how it reconciles say, right? And so I think that that kind of functionality really got people to trust what was happening. 

And so, you know it’s like I think the trust and transparency are the big things that people keyed into. The trust comes from the enterprise sponsorship, and also the fact that what was happening from a rudimentary standpoint was pretty simple and so people could wrap their heads around it and then transparency was having this community. Everything happens in the open, everything is recorded and accessible by everyone, right? It wasn’t just like some behind the scenes things happened. 

[0:37:50.7] JR: Yeah and I think that piece is super important, like Nicholas and I, we came from Coreless or our lineage around like open source Kubernetes is not too dissimilar. We spend a lot of time working with customers in pure upstream open source Kubernetes and actually taking some of their issues and requirements to the community and then helping shape the direction of Kubernetes in micro kind of ways, but still important ways to that company. 

And I think companies seeing through the CNCF and seeing through just community leadership and involvement that the things that they care about aren’t just going through a single vendor to make a decision as to whether that thing should be included, but it is being part of a larger community discussion, breeds a lot of confidence in this project in the long term. I think at the end of the day, we started with there will be container orchestrator that many of us use. Or maybe there will be a couple, right? 

There is no question, we need to solve container orchestration as an overall problem and companies are at this point where they are still placing a bet on what they want to use and because of the community, because of the involvement, because of the ability to adopt the project to potential business requirements, I feel like more large and small medium organizations are willing to put their money on Kubernetes as a whole. 

And I don’t think they felt as confident finding some other projects, like Open Stack and then historical Masos perhaps. I am just projecting based on conversations I’ve had but that is why I think a lot of folks are really excited about the future for Kubernetes. 

[0:39:21.3] NL: Yeah that is an excellent point. 

[0:39:23.0] CC: Let’s stick with the theme of projecting in the future and we are going to have to wrap up soon otherwise it is going to be a two hour, I mean this could be a two-hour show. But let’s not make our audience go through that. We’ll have part two. What about, we talk all the time, and people who are in this area, we talk about all the time how everybody knows Kubernetes and da-da-da, but I want to challenge you two, do you think that everybody knows Kubernetes? 

Everybody knows the purpose of Kubernetes, everybody knows if they should be using Kubernetes or not, how are people able to make an informed decision if they should be using Kubernetes? Because I don’t think everybody knows Kubernetes. I think the majority of companies, in terms of volume, because smaller companies I would guess they outnumber the bigger companies and technologists – I think a lot of people are not clear on what this is. 

That’s why we are here but what do we tell them? We have to have an episode to discover that, now that I am thinking about it, but we could wrap this up with some seed ideas for that. 

[0:40:46.9] NL: So that is a great idea and something that I’ve been playing around with introducing myself, is when do you not use container orchestration, right? Just because container orchestration exists doesn’t mean necessarily – 

[0:40:58.0] CC: If you don’t have containers. 

[0:40:59.1] NL: Yeah, one, if you don’t have containers. That is another starter.

[0:41:02.5] CC: It is a real legit thing to say because some people ask me, “Should I start with Kubernetes or containers?” that’s the level of education that we must provide.

[0:41:15.5] NL: Yeah, absolutely and that is something we actually run into a lot in the field is when we are engaging with our customers, part of our job is to help containerize their applications if they are not already there. Trying to help them do that in a logical manner. But for instance, to give an example, my fiancé’s company uses Docker, but they don’t use Kubernetes or any kind of orchestration because they don’t need to. 

Like the amount of the resources that they are going to be using and the amount of and the type of work that they are doing, it doesn’t make sense to use an orchestrator. I have actually talked to some of the engineers about it because they were like, “Oh tell me about this Kubernetes thing” and I’m like, “This is what it is” blah-blah-blah. I finally came up with a metaphor where it’s like your company uses the containers as a shovel. 

If we brought it into like, let us say we’re ploughing a field, right? You’ve got a plow, if you already use Kubernetes that would be like trying to plow the field with a nuclear bomb. It is way more complicated than you need to do. Sure, you can clear a lot of land with a giant bomb but that is way more than you guys need, right? And I think that for me that’s the drawing line. It is like if the complexity makes sense for you to do like, if you’re trying to all of a sudden, establish a farm. 

Not to say that you should use a bomb to plow land but hey, if you need to clear a lot of land a bomb can work, right? That is a terrible metaphor, I am sorry. That went off the rails really fast. 

[0:42:41.3] CC: It wasn’t too bad. 

[0:42:43.8] NL: I actually think that. 

[0:42:46.7] JR: I think, one thing that I will say and this is coming from experience working with organizations is let’s assume that you have justified Kubernetes for yourself, and by the way, I super echo everything that Nicholas just said, you have to be really careful and determine do you actually need to take this thing on? Because it is so hard to do in a lot of ways, right? But let us assume you have taken it on. I think an interesting thing to have empathy about as often times infrastructure dev ops people is you might know Kubernetes really, really well. 

But that doesn’t mean your thousands and thousands of developers have any idea what Kubernetes is at all and that is a massive disconnect we see in organizations all the time where they are trying to onboard folks onto Kubernetes, and they haven’t fully abstracted Kubernetes away, which some companies do and that could be a really good pattern too. Like developers deploy their apps, they don’t even know Kubernetes are running them under the hood. That is a really neat pattern as well.

But assuming they are just trying to bring developers onto Kubernetes, they don’t really have the same amount of empathy for them and they just think like, “This should be really easy. It is just a bunch of yemel files, you’ll figure it out,” but they totally forget about all of the complexities that they originally learned about. Like how does pod to pod networking work and things like that. 

I just think that to your question Carlisia, it is interesting because one massive group in a company can know a lot about Kubernetes and forget what it was like to learn how something like Kubernetes or container orchestration worked. I think a lot of that is bridging the gap and really having some amount of education to bring everyone up to speed, even in the same organization. 

[0:44:21.2] CC: I am dying to have an episode on just that alone because it is quite challenging. When you are faced with Kubernetes, I mean the very first thing is that there are terminologies that you haven’t seen before and they’re like, “How does that map to what I already know?” and then sometimes it doesn’t map. It is completely new so. 

[0:44:43.1] JR: Yeah and when the benefits aren’t super obvious to you, it is really hard to get bought in and be willing to invest your own time and energy into it, right? And we forget that it is just not super obvious why Kubernetes makes sense for a lot of folks. 

[0:44:56.6] NL: Yeah, absolutely. That is a good point that even I sometimes forget like when someone says, “Well, why would I want Kubernetes?” I’m like, “Why wouldn’t you want Kubernetes?” like duh, it works so well in my brain why don’t you get it? But it is good to take a step back out of yourself and you know, be empathetic to the people you’re talking about in the community. 

I think Carlisia, you mentioned that we should be wrapping this up pretty soon and I think I totally agree. Before we go, I want to say if you want to contribute to any container orchestration about Kubernetes in specific since that is the one we want to work with the most, we totally encourage you to start contributing to these projects. Like with Kubernetes, we have the Kubernetes-Kubernetes Repo that has a lot of information on how to start contributing. I believe that Mesosphere has their own repos and the information online available for them. 

And I don’t know, I am not sure if there is much in a way of Docker or Swarm anymore that you can contribute to. I am not sure, but for Kubernetes, we have the Kubernetes-Kubernetes Repo and the Kubernetes Slack channel K8S at slack.k8s.io. Please join us and start talking about your container orchestration journey. 

[0:46:08.6] CC: And Kates by the way is K8S and I am going to say that because at some events and some people were up in the stage and they’re like, “Kates this, Kates that” and I am sitting with someone in the back and I’m like, “Who’s Kate?” 

[0:46:24.3] NL: Or I have seen people who are like, “K-eight-S” is the acronym and what that means is that there is eight letters between K and S in Kubernetes. That is all that means. I have seen some people do K8 and it drives me up every wall. I actually start constructing walls and it continues to drive me up them. I am in an infinite regression of walls. 

[0:46:44.6] CC: All right everybody, thank you for listening. It’s great that you are here, and we are going to be back with more cloud native goodness. 

[0:46:53.8] NL: Yeah, absolutely. All right, cheers. 

[0:46:56.0] JR: Thanks. 

[0:46:56.8] CC: Goodbye. 

[END OF INTERVIEW]

[0:46:58.7] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter https://twitter.com/ThePodlets and on the https://thepodlets.io website where you will find transcripts and show notes. We’ll be back next week. Stay tuned by subscribing.

[END]
