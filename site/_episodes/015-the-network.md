---
episode_id: 015-the-network
episode_number: 15 
title: The Network
description: In this episode we try to dig into what the network actually means. We discover, through our discussion that the network is, in fact, a distributed system. This means that each component of the network has a degree of independence and the complexity of them makes it difficult to understand the true state of the network. 
notes: There are two words that get the blame more often than not when a problem cannot be rooted, the network! Today, along with special guest, [Scott Lowe](https://twitter.com/scott_lowe), we try to dig into what the network actually means. We discover, through our discussion that the network is, in fact, a distributed system. This means that each component of the network has a degree of independence and the complexity of them makes it difficult to understand the true state of the network. We also look at some of the fascinating parallels between networks and other systems, such as the configuration patterns for distributed systems. A large portion of the show deals with infrastructure and networks, but we also look at how developers understand networks. In a changing space, despite self-service becoming more common, there is still generally a poor understanding of networks from the developers’ vantage point. We also cover other network-related topics, such as the future of the network engineer’s role, transferability of their skills and other similarities between network problem-solving and development problem-solving. Tune in today!
hosts: 
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Nicholas Lane
      url: https://twitter.com/apinic
points:
    - The network is often confused with the server or other elements when there is a problem.
    - People forget that the network is a distributed system, which has independent routers.
    - The distributed pieces that make up a network could be standalone computers.
    - The parallels between routing protocols and configuration patterns for distributed systems.
    - There is not a model for eventually achieving consistent networks, particularly if they are old.
    - Most routing patterns have a time-sensitive mechanism where traffic can be re-dispersed.
    - Understanding a network is a distributed system gives insights into other ones, like Kubernetes.
    - Even from a developers’ perspective, there is a limited understanding of the network.
    - There are many overlaps between developers and infrastructural thinking about systems.
    - How can network engineers apply their skills across different systems?
    - As the future changes, understanding the systems and theories is crucial for network engineers.
    - There is a chasm between networking and development.
    - The same ‘primitive’ tools are still being used for software application layers.
    - An explanation of CSMACD, collisions and their applicability. 
    - Examples of cloud native applications where the network does not work at all.
    - How Spanning Tree works and the problems that it solves.
    - The relationship between software-defined networking and the adoption of cloud native technologies.
    - Software-defined networking increases the ability to self-service.
    - With self-service on-prem solutions, there is still not a great deal of self-service.
links:
    - name: Scott Lowe on LinkedIn
      url: https://www.linkedin.com/in/scottslowe/
    - name: Scott Lowe’s blog
      url: https://blog.scottlowe.org/
    - name: Kafka 
      url: https://kafka.apache.org/
    - name: Redis
      url: https://redis.io/
    - name: Raft
      url: https://raft.github.io/
    - name: Packet Pushers
      url: https://packetpushers.net/
    - name: AWS
      url: https://aws.amazon.com/
    - name: Azure 
      url: https://azure.microsoft.com/en-us/
    - name: Martin Casado
      url: http://yuba.stanford.edu/~casado/
video: https://www.youtube.com/embed/auotTi2ZRNI
related: 
- 007-kubernetes-as-per-kelsey-hightower
- 008-disaster-recovery 
- 006-a-conversation-with-joe-beda 
---
EPISODE 15

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.4] DC: Good afternoon everybody.  In this episode, we’re going to talk about the network. My name is Duffie Cooley and I’ll be the lead of this episode and with me, I have Nick.
 
[0:00:49.0] NL: Hey, what’s up everyone.

[0:00:51.5] DC: And Josh.

[0:00:52.5] JS: Hi.

[0:00:53.6] DC: And Mr. Scott Lowe joining us as a guest speaker.

[0:00:56.2] SL: Hey everyone.

[0:00:57.6] DC: Welcome, Scott.

[0:00:58.6] SL: Thank you.

[0:01:00.5] DC: In this discussion, we’re going to try and stay away, like we do always, we’re going to try and stay away from particular products or solutions that are related to the problem. The goal of it is to really kind of dig in to like what the network means when we refer to it as it relates to like cloud native applications or just application design in general.

One of the things that I’ve noticed over time and I’m curious, what you all think but like, one of the things I’ve done over time is that people are kind of the mind that if it can’t root cause a particular issue that they run into, they’re like, “That was the network.” Have you all seen that kind of stuff out there?

[0:01:31.4] NL: Yes, absolutely. In my previous life, before being a Kubernetes architect, I actually used my networking and engineering degree to be a network administrator for the Boeing Company, under the Boeing Corporation. Time and time again, someone would come to me and say, “This isn’t working. The network is down.” And I’m like, “Is the network down or is the server down?” Because those are different things. Turns out it was usually the server.

[0:01:58.5] SL: I used to tell my kids that they would come to me and they would say, the Internet is down and I would say, “Well, you know. I don’t think the entire Internet is down, I think it’s just our connection to the Internet.”

[0:02:10.1] DC: Exactly.

[0:02:11.7] JS: Dad, the entire global economy is just taking a total hit.

[0:02:15.8] SL: Exactly, right.

[0:02:17.2] DC: I frequently tell people that my first distributed system that I ever had a real understanding of was the network, you know? It’s interesting because it kind of like, relies on the premises that I think a good distributed system should in that there is some autonomy to each of the systems, right? They are dependent on each other or even are inter communicate with each other but fundamentally, like when you look at routers and things like that, they are autonomous in their own way. There’s work that they do exclusive to the work that others do and exclusive to their dependencies which I think is very interesting.

[0:02:50.6] SL: I think the fact that the network is a distributed system and I’m glad you said that Duffie, I think the fact the network is a distributed system is what most people overlook when they start sort of blaming the network, right? Let’s face it, in the diagrams, right, the network’s always just this blob, right? Here’s the network, right? It’s this thing, this one singular thing. When in reality, what we have are like 10 or hundreds of devices with the state of the network as a system, distributed in little bitty pieces across all of these devices.

And no way, aside from logging in to each one of these devices are we able to assemble what the overall state is, right? Even routing protocols mean, their entire purpose is to assemble some sort of common understanding of what the state of the network is. Melding together, not just IP addresses which are these abstract concept but physical addresses and physical connections. And trying to reason to make decisions about them, how we center across and it’s far more complex and a lot of people understand, I think that’s why it’s just like the network is down, right?

When reality, it’s probably something else entirely.

[0:03:58.1] DC: Yeah, absolutely. Another good point to bring up is that each of these distributed pieces of this distributed system are in themselves like basically like just a computer. A lot of times, I’ve talked to people and they were like, “Well, the router is something special.” And I’m like, “Not really. Technically, a Linux box could just be a router if you have enough ports that you plug into it. Or it could be a switch if you needed to, just plug in ports.”

[0:04:24.4] NL: Another good interesting parallel there is like when we talk about like routing protocols which are a way of – a way that allow configuration changes to particular components within that distributed system to be known about by other components within that distributed system.

I think there’s an interesting parallel here between the way that works and the way that configuration patterns that we have for distributed systems work, right? If you wanted to make a configuration only change to a set of applications that make up some distributed system, you might go about like leveraging Ansible or one of the many other configuration models for this. 

I think it’s interesting because it represents sort of an evolution of that same idea in that you’re making it so that each of the components is responsible for informing the other components of the change, rather than taking the outside approach of my job is to actually push a change that should be known about by all of these concepts, down to them.

Really, it’s an interesting parallel. What do you all think of that?

[0:05:22.2] SL: I don’t know, I’m not sure. I’d have to process that for a bit. But I mean, are you saying like the interesting thought here is that in contrast to typical systems management where we push configuration out to something, using a tool like an Ansible, whatever, these things are talking amongst themselves to determine state?

[0:05:41.4] DC: Yeah, it’s like, there are patterns for this like inside of distributed systems today, things like Kafka and you know, Kafka and Gossip protocol, stuff like this actually allows all of the components of a particular distributed system to understand the common state or things that would be shared across them and if you think about them, they’re not all that different from a routing protocol, right?

Like the goal being that you give the systems the ability to inform the other systems in some distributed system of the changes that they may have to react to. Another good example of this one, which I think is interesting is like, what they call – when you have a feature behind a flag, right? You might have some distributed configuration model, like a Redis cache or database somewhere that you’ve actually – that you’ve held the running configuration of this distributed system.

And when you want to turn on this particular feature flag, you want all of the components that are associated with that feature flag to enable that new capability. Some of the patterns for that are pretty darn close to the way that routing protocol models work.

[0:06:44.6] SL: Yeah, I see what you're saying. Actually, that’ makes a lot of sense. I mean, if we think about things like Gossip protocols or even consensus protocols like Raft, right? They are similar to routing protocols in that they are responsible for distributing state and then coming to an agreement on what that state is across the entire system. And we even apply terms like convergence to both environments like we talk about how long it takes routing protocol to converge. And we might also talk about how long it takes for and ETCD cluster to converge after changing the number of members in the cluster of that nature.

The point at which everybody in that distributed system, whether it be the network ETCD or some other system comes to the same understanding of what that shared state is.

[0:07:33.1] DC: Yeah, I think that’s a perfect breakdown, honestly. Pretty much every routing technology that’s out there. You know, if you’re taking that – the computer of the network, you know, it takes a while but eventually, everyone will reconcile the fact that, “Yeah, that node is gone now.”

[0:07:47.5] NL: I think one thing that’s interesting and I don’t know how much of a parallel there is in this one but like as we consider these systems like with modern systems that we’re building at scale, frequently we can make use of things like eventual consistency in which it’s not required per se for a transaction to be persisted across all of the components that it would affect immediately.

Just that they eventually converge, right? Whereas with the network, not so much, right? The network needs to be right now and every time and there’s not really a model for eventually consistent networks, right?

[0:08:19.9] SL: I don’t know. I would contend that there is a model for eventually consistent networks, right? Certainly not on you know, most organizations, relatively simple, local area networks, right? But even if we were to take it and look at something like a Clos fabric, right, where we have top of rack switches and this is getting too deep for none networking blokes that we know, right?

Where you take top of rack switches that are talking layer to the servers below them or the end point below them. And they’re talking layer three across a multi-link piece up to the top, right? To the spine switches, so you have leaf switches, talking up spine switches, they’re going to have multiple uplinks. If one of those uplinks goes down, it doesn’t really matter if the rest off that fabric knows that that link is down because we have the SQL cost multi pathing going across that one, right?

In a situation like that, that fabric is eventually consistent in that it’s okay if you know, knee dropping link number one of leaf A up to spine A is down and the rest of the system doesn’t know about that yet. But, on the other hand, if you are looking at network designs where convergence is being handled on active standby links or something of that nature or there aren’t enough paths to get from point A to point B until convergence happens then yes, you’re right.

I think it kind of comes down to network design and the underlying architecture and there are so many factors that affect that and so many designs over the years that it’s hard to – I would agree and from the perspective of like if you have an older network and it’s been around for some period of time, right? You probably have one that is not going to be tolerant, a link being down like it will cause problems.

[0:09:58.4] NL: Adds another really great parallel in software development, I think. Another great example of that, right? If we consider for a minute like the circuit breaking pattern or even like you know, most load balancer patterns, right? In which you have some way of understanding a list of healthy end points behind the load balancer and were able to react when certain end points are no longer available.

I don’t consider that a pattern that I would relate to specifically if they consent to eventual consistency. I feel like that still has to be immediate, right? We have to be able to not send the new transaction to the dead thing. That has to stop immediately, right? It does in most routing patterns that are described by multi path, there is a very time sensitive mechanism that allows for the re-dispersal of that traffic across known paths that are still good. And the work, the amazing amount of work that protocol architects and network engineers go through to understand just exactly how the behavior of those systems will work.

Such that we don’t see traffic. Black hole in the network for a period of time, right? If we don’t send traffic to the trash when we know or we have for a period of time, while things converge is really has a lot going for it.

[0:11:07.0] SL: Yeah, I would agree. I think the interesting thing about discussing eventual consistency with regards to the networking is that even if we take a relatively simple model like the DOD model where we only have four layers to contend with, right? We don’t have to go all the way to this seven-layer OSI model. But even if we take a simple layer like the DOD four-layer model, we could be talking about the rapid response of a device connected at layer two but the less than rapid response of something operating at layer three or layer four, right? 

In the case of a network where we have these discreet layers that are intentionally loosely coupled which is another topic, we could talk about from a distribution perspective, right? We have these layers that are intentionally loosely coupled, we might even see consistency and the application of the cap theorem, behave differently at different layers of their model.

[0:12:04.4] DC: That’s right. I think it’s fascinating like how much parallel there is here. As you get into like you know, deep architectures around software, you’re thinking of these things as it relates to like these distributed systems, especially as you’re moving toward more cloud native systems in which you start employing things like control theory and thinking about the behaviours of those systems both in aggregate like you know, some component of my application, can I scale this particular component horizontally or can I not, how am I handling state.

So many of those things have parallels to the network that I feel like it kind of highlights I’m sure what everybody has heard a million times, you know, that there’s nothing new under the sun. There’s million things that we could learn from things that we’ve done in the past.

[0:12:47.0] NL: Yeah, totally agree. I recently have been getting more and more development practice and something that I do sometimes is like draw out like how all of my functions and my methods, and take that in rack with each other across a consisting code base and lo and behold when I draw everything out, it sure does look a lot like a network diagram. All these things have to flow together in a very specific way and you expect the kind of returns that you’re looking for.

It looks exactly the same, it’s kind of the – you know, how an atom kind of looks like a galaxy from our diagram? All these things are extrapolated across like – 

[0:13:23.4] SL: Yeah, totally.

[0:13:24.3] NL: Different models. Or an atom looks like a solar system which looks like a galaxy.
 
[0:13:28.8] SL: Nicholas, you said your network administrator at Boeing?

[0:13:30.9] NL: I was, I was a network engineer at Boeing.

[0:13:34.0] SL: You know, as you were sitting there talking, Duffie, so, I thought back to you Nick, I think all the times, I have a personal passion for helping people continue to grow and evolve in their career and not being stuck. I talk to a lot of networking folks, probably dating because of my involvement, back in the NSX team, right? But folks being like, “I’m just a network engineer, there’s so much for me to learn if I have to go learn Kubernetes, I wouldn’t even know where to start.”

This discussion to me underscores the fact that if you understand how a network is a distributed system and how these theories apply to a network, then you can extrapolate those concepts and apply them to something like Kubernetes or other distributed systems, right? Immediately begin to understand, okay. Well, you know, this is how these pieces talk to each other, this is how they come, the consensus, this is where the state is stored, this is how they understand and exchange date, I got this.

[0:14:33.9] NL: if you want to go down that that path, the controlled plane of your cluster is just like your central routing back bone and then the kublets themselves are just your edge switches going to each of your individual smaller network and then the pods themselves have been nodes inside of the network, right? You can easily – look at that, holy crap, it looks exactly the same.

[0:14:54.5] SL: Yeah, that’s a good point.

[0:14:55.1] DC: I mean, another interesting part, when you think about how we characterize systems, like where we learn that, where that skillset comes from. You raise a very good point. I think it’s an easier – maybe slightly easier thing to learn inside of networking, how to characterize that particular distributed system because of the way the components themselves are laid out and in such a common way.

Where when we start looking at different applications, we find a myriad of different patterns with particular components that may behave slightly differently depending, right? Like there are different patterns within software like almost on per application bases whereas like with networks, they’re pretty consistently applied, right? Every once in a while, they’ll be kind of like a new pattern that emerges, that it just changes the behavior a little bit, right? Or changes the behavior like a lot but at the same time, consistently across all of those things that we call data center networks or what have you.

To learn to troubleshoot though, I think the key part of this is to be able to spend the time and the effort to actually understand that system and you know, whether you light that fire with networking or whether you light that fire with like just understanding how to operationalize applications or even just developing and architecting them, all of those things come into play I think.

[0:16:08.2] NL: I agree. I’m actually kind of curious, the three of us have been talking quite a bit about networking from the perspective that we have which is more infrastructure focused. But Josh, you have more of a developer focused background, what’s your interaction and understanding of the network and how it plays?

[0:16:24.1] JS: Yeah, I’ve always been a consumer of the network. It’s something that is sat behind an API and some library, right? I call out to something that makes a TCP connection or an http interaction and then things just happen. I think what’s really interesting hearing talk and especially the point about network engineers getting into thee distributed system space is that I really think that as we started to put infrastructure behind API’s and made it more and more accessible to people like myself, app developers and programmers, we started – by we, you know, I’m obviously generalizing here.

But we started owning more and more of the infrastructure. When I go into teams that are doing big Kubernetes deployments, it’s pretty rare, that’s the conventional infrastructure and networking teams that are standing up distributed systems, Kubernetes or not, right? It's a lot of times, a bunch of app developers who have maybe what we call dev-ops, whatever that means but they have an application development background, they understand how they interact with API’s, how to write code that respects or interacts with their infrastructure and they’re standing up these systems and I think one of the gaps of that really creates is a lot of people including myself just hearing you all talk, we don’t understand networking at that level. 

When stuff falls over and it’s either truly the network or it’s getting blamed on the network, it’s often times, just because we truly don’t understand a lot of these things, right? Encapsulation, meshes, whatever it might be, we just don’t understand these concepts at a deep level and I think if we had a lot more people with network engineering backgrounds, shifting into the distributed system space.

It would alleviate a bit of that, right? Bringing more understanding into the space that we work in nowadays.

[0:18:05.4] DC: I wonder if maybe it also would be a benefit to have like more cross discussions like this one between developers and infrastructure kind of focused people, because we’re starting to see like as we’re crossing boundaries, we see that the same things that we’re doing on the infrastructure side, you’re also doing in the developer side. Like cap theorem as Scott mention which is the idea that you can have two out of three of consistency, availability and partitioning.

That also applies to networking in a lot of ways. You can only have a network that is either like consistent or available but it can’t handle partitioning. It can be a consistent to handle partitioning but it’s not always going to be available, that sort of thing. These things that apply in from the software perspective also apply to us but we think about them as being so completely different.

[0:18:52.5] JS: Yeah, I totally agree. I really think like on the app side, a couple of years ago, you know, I really just didn’t care anything outside of the JVM like my stuff on the JVM and if it got out to the network layer of the host like just didn’t care, know, need to know about that at all. But ever since cloud computing and distributed systems and everything became more prevalent, the overlap has become extremely obvious, right?

In all these different concepts and it’s been really interesting to try to ramp up on that.

[0:19:19.6]:19.3] NNL: Yeah, I think you know Scott and I both do this. I think as I imagine, actually, this is true of all four of us to be honest. But I think that it’s really interesting when you are out there talking to people who do feel like they’re stuck in some particular role like they’re specialists in some particular area and we end up having the same discussion with them over and over again. You know, like, “Look, that may pay the bills right now but it’s not going to pay the bills in the future.” 

And so you know, the question becomes, how can you, as a network engineer take your skills forward and not feel as though you’re just going to have to like learn everything all over again. I think that one of the things that network engineers are pretty decent at is characterizing those systems and being able to troubleshoot them and being able to do it right now and being able to like firefight those capabilities and those skills are incredibly valuable in the software development and in operationalizing applications and in SRE models.

I mean, all of those skills transfer, you know? If you’re out there and you’re listening and you feel like I will always be a network engineer, consider that you could actually take those skills forward into some other role if you chose to.

[0:20:25.1] JS: Yeah, totally agree. I mean, look at me, the lofty career that I’ve been come to.

[0:20:31.4] SL: You know, I would also say that the fascinating thing to me and one of the reasons I launched, I don’t say this to like try and plug it but just as a way of talking about the reason I launched my own podcast which is now part of packet pushers, was exploring this very space and that is like we’ve got folks like Josh who comes from the application development spacing is now being, you know, in a way, forced to own and understand more infrastructure and we’ve got the infrastructure folks who now in a way, whether it be through the rise of cloud computing and abstractions away from visible items are being forced kind of up the stack and so they’re coming together and this idea of what does the future of the folks that are kind of like in our space, what does that look like?

How much longer does a network engineer really need to be deeply versed in all the different layers? Because everything’s been abstracted away by some other type of thing whether it’s VPC’s or Azure V Nets or whatever the case is, right? I mean, you’ve got companies bringing the VPC model to on premises networks, right? As API’s become more prevalent, as everything gets sort of abstracted away, what does the future look like, what are the most important skills and it seems to me that it’s these concepts that we’re talking about, right? 

This idea of distributed systems and how distributed systems behave and how the components react to one another and understanding things like the cap theorem that are going to be most applicable rather than the details of trouble shooting VGP or understanding AWS VPC’s or whatever the case may be.

[0:22:08.5] NL: I think there is always going to be a place for the people who know how things are running under the hood from like a physical layer perspective, that sort of thing, there’s always going to be the need for the grave beards, right? Even in software development, we still have the people who are slinging kernel code in C. And you know, they’re the best, we salute you but that is not something that I’m interested in it for sure.

We always need someone there to pick up the pieces as it were. I think that yeah, having just being like, I’m a Cisco guy, I’m a Juniper guy, you know? I know how to pawn that or RSH into the switch and execute these commands and suddenly I’ve got this port is now you know, trunk to this V neck crap, I was like, Nick, remember your training, you know? 

How to issue those commands, I wonder, I think that that isn’t necessarily going away but it will be less in demand in the future.

[0:22:08.5] SL: I’m curious to hear Josh’s perspective as like having to own more and more of the infrastructure underneath like what seems to be the right path forward for those folks?

[0:23:08.7] JS: Yeah, I mean, unfortunately, I feel like a lot of times, it just ends up being trial by fire and it probably shouldn’t be that. But the amount of times that I have seen a deployment of some technology fall over because we overlapped the site range or something like that is crazy. Because we just didn’t think about it or really understand it that well.

You know, like using one protocol, you just described BGP. I never ever dreamt of what BGP was until I started using attributed systems, right? Started using BGP as a way to communicate routes and the amount off times that I’ve messed up that connection because I don’t have a background in how to set that up appropriately, it’s been rough. I guess my perspective is that the technology has gotten better overall and I’m mostly obviously in the Kubernetes space, speaking to the technologies around a lot of the container networking solutions but I’m sure this is true overall. It seems like a lot of the sharp edges have been buffed out quite a bit and I have less of an opportunity to do things terribly wrong.

I’ve also noticed for what it’s worth, a lot of folks that have my kind of background or going out to like the AWS is the Azure’s of the world. They’re using all these like, abstracted networking technologies that allow t hem to do really cool stuff without really having to understand how it works and they’re often times going back to their networking team on prem when they have on prem requirements and being like it should be this easy or XY and Z and they’re almost like pushing the networking team to modernize that and make things simpler. Based on experiences they’re having with these cloud providers.

[0:24:44.2] DC: Yeah, what do you mean I can’t create a load balancer that crosses between these two disparate data centers as it easily is. Just issuing a single command. Doesn’t this just exist from a networking standpoint? Even just the idea that you can issue an API command and get a load balancer, just that idea alone, the thousands of times I have heard that request in my career.

[0:25:08.8] JS: And like the actual work under the hood to get that to work properly is it’s a lot, there’s a lot of stuff going on.

[0:25:16.5] SL: Absolutely, yeah, 

[0:25:17.5] DC: Especially when you’re into plumbing, you know? If you’re going to create a load balancer with API, well then, what API does the load balancer use to understand where to send that traffic when it’s being balanced. How do you handle discovery, how do you hit like – obviously, yeah, there’s no shortage on the amount of work there.

[0:25:36.0] JS: Yeah.

[0:25:36.3] DC: That’s a really good point, I mean, I think sometimes it’s easy for me to think about some of these API driven networking models and the cost that come with them, the hidden cost that come with them. An example of this is, if you’re in AWS and you have a connectivity between wo availability, actually could be any cloud, it doesn’t have to be an AWS, right? If you have connectivity between two different availability zones and you’re relying on that to be reliable and consistent and definitely not to experience, what tools do you have at your disposal, what guarantees do you have that that network has even operating in a way that is responsive, right? And in a way, this is kind of taking us towards the observability conversation that I think we’ve talked a little bit about the past.

Because I think it highlights the same set of problems again, right? You have to understand, you have to be able to provide the consumers of any service, whether that service is plumbing, whether it’s networking, whether it’s your application that you’ve developed that represents a set of micro service. You have to provide everybody a way or you know, have to provide the people who are going to answer the phone at two in the morning.

Or even the robots that are going to answer the phone at two in the morning. I have to provide them some mechanism by which to observe those systems as they are in use.

[0:26:51.7] JS: I’m not convinced that very many of the cloud providers do that terribly well today, you know? I feel like I’ve been burned in the past without actually having an understanding of the state that we’re in and so it is interesting maybe the software development team can actually start pushing that down toward the networking vendors out there out in the world.

[0:27:09.9] NL: Yeah that would be great. I mean I have been recently using a managed Kubernetes service. I have been kicking the tires on it a little bit. And yeah there has been a couple of times where I had just been got by networking issues. I am not going to get into what I have seen in a container network interface or any of the technologies around that. We are going to talk about that another time. But the CNI that I am using in this managed service was just so wonky and weird. 

And it was failing from a network standpoint. The actual network was failing in a sense because the IP addresses for the nodes themselves or the pods wasn’t being released properly and because of our bag. And so, the rules associated with my account could not remove IP addresses from a node in the network because it wasn’t allowed to and so from a network, I ran out of IP addresses in my very small site there.

[0:28:02.1] SL: And this could happen in database, right? This could happen in a cache of information, this could happen in pretty much the same pattern that you are describing is absolutely relevant in both of these fields, right? And that is a fascinating thing about this is that you know we talk about the network generally in these nebulous terms and that it is like a black box and I don’t want them to know anything about it. I want to learn about it, I don’t want to understand it. 

I just want to be able to consume it via an API and I want to have the expectation that everything will work the way it is supposed to. I think it is fascinating that on the other side of that API are people maybe just like you who are doing their level best to provide, to chase the cap theorum into it’s happy end and figure out how to actually give you what you need out of that service, you know? So, empathy I think is important. 

[0:28:50.4] NL: Absolutely, to bring that to an interesting thought that I just had where on both sides of this chasm or whatever it is between networking and develop, the same principles exists like we have been saying but just to elicited on it a little bit more, it’s like on one side you have like I need to make sure that these ETCD nodes communicate with each other and that the data is consistent across the other ones. So, we use a protocol called RAFT, right? 

And so that’s eventually existent tool then that information is sent onto a network, which is probably using OSPF, which is “open shortest path first” routing protocol to become eventually consistent on the data getting from one point to the other by opening the shortest path possible. And so these two things are very similar. They are both these communication protocols, which is I mean that is what protocol means, right? The center for communication but they’re just so many different layers. 

Obviously of the OSI model but people don’t put them together but they really are and we keep coming back to that where it is all the same thing but we think about it so differently. And I am actually really appreciating this conversation because now I am having a galaxy brain moment like boo.

[0:30:01.1] SL: Another really interesting one like another galaxy moment, I think that is interesting is if you think about – so let us break them down like TCP and UTP. These are interesting patterns that actually do totally relate again just in software patterns, right? In TCP the guarantee is that every data gram, if you didn’t get the entire data gram you will understand that you are missing data and you will request a new version of that same packet. 

And so, you can provide consistency in the form of retries or repeats if things don’t work, right? Not dissimilar from the ability to understand like that whether you chuck some in data across the network or like in a particular data base, if you make a query for a bunch of information you have to have some way of understanding that you got the most recent version of it, right? Or ETCD supports us by using the revision by understanding what revision you received last or whether that is the most recent one. 

And other software patterns kind of follow the same model and I think that is also kind of interesting. Like we are still using the same primitive tools to solve the same problems whether we are doing it at a software application layer or whether we are doing it down in the plumbing at the network there, these tools are still very similar. Another example is like UTP where it is basically there are no repeats. You either got the packet or you didn’t, which sounds a lot like an event stream to me in some ways, right? 

Like it is very interesting, you just figured out like I put in on the line, you didn’t get it? It is okay, I will put another line here in a minute you can react to that one, right? It is an interesting overlap. 

[0:31:30.6] NL: Yeah, totally. 

[0:31:32.9] JS: Yeah, the comparison to event streams or message queues, right? There is an interesting one that I hadn’t considered before but yeah, there are certainly parallels between saying, “Okay I am going to put this on the message queue,” and wait for the acknowledgement that somebody has taken it and taken ownership of it as oppose to an event stream where it is like this happened. I admit this event. If you get it and you do something with it, great. 

If you don’t get it then you don’t do something with it, great because another event is going to come along soon. So, there you go. 

[0:32:02.1] DC: Yep, I am going to go down a weird topic associated with what we are just talking about. But I am going to get a little bit more into the weeds of networking and this is actually directed into us in a way. So, talking about the kind of parallels between networking and development, in networking at least with TCP and networking, there is something called CSMACD, which is “carry your sense multi,” oh I can’t remember what the A stands for and the CD. 

[0:32:29.2] SL: Access. 

[0:32:29.8] DC: Multi access and then CD is collision detection and so basically what that means is whenever you sent out a packet on the network, the network device itself is listening on the network for any collisions and if it detects a collision it will refuse to send a packet until a certain period of time and they will do a retry to make sure that these packets are getting sent as efficiently as possible. There is an alternative to that called CMSCA, which was used by Mac before they switched over to using a Linux based operating system. 

And then putting a fancy UI in front of it, which collision avoidance would listen and try and – I can’t remember exactly, it would time it differently so that it would totally just avoid any chance that there could be collision. It would make sure that no packets were being sent right then and then send it back up. And so I was wondering if something like that exists in the realm between the communication path between applications. 

[0:33:22.5] JS: Is it collision two of the same packets being sent or what exactly is that? 

[0:33:26.9] DC: With the packets so basically any data going back and forth. 

[0:33:29.7] JS: What makes it a collision? 

[0:33:32.0] SL: It is the idea that you can only transmit one message at a time because if they both populate the same media it is trash, both of them are trash. 

[0:33:39.2] JS: And how do you qualify that. Do you receive an ac from the system or? 

[0:33:42.8] NL: No there is just nothing returned essentially so it is like literally like the electrical signals going down the wire. They physically collide with each other and then the signal breaks. 

[0:33:56.9] JS: Oh, I see, yeah, I am not sure. I think there is some parallels to that maybe with like queuing technologies and things like that but can’t think of anything on like direct app dev side.

[0:34:08.6] DC: Okay, anyway sorry for that tangent. I just wanted to go down that little rabbit-hole a little bit. It was like while we are talking about networking, I was like, “Oh yeah, I wanted to see how deep down we can make this parallel going?” so that was the direction I went. 

[0:34:20.5] SL: Like where is that that CSMACD, a piece is like seriously old school, right? Because it only applied to half duplex Ethernet and as soon as we went to full duplex Ethernet it didn’t matter anymore. 

[0:34:33.7] DC: That is true. I totally forgot about that. 

[0:34:33.8] JS: It applied the satellite with all of these as well. 

[0:34:35.9] DC: Yeah, I totally forgot about that. Yeah and with full duplex, we totally just space on that. This is – damn Scott, way to make me feel old. 

[0:34:45.9] SL: Well I mean satellite stuff, too, right? I mean it is actually any shared media upon which you have to – where if this stuff goes and overlap there, you are not going to be able to make it work right? And so, I mean it is interesting. It is actually an interesting PNL. I am struggling to think of an example of this as well. I mean my brain is going towards circuit breaking but I don’t think that that is quite the same thing. 

It is sort the same thing that in a circuit breaking pattern, the application that is making the request has the ability obviously because it is the thing making the request to understand that the target it is trying to connect to is not working correctly. And so, it is able to make an almost instantaneous decision or at least a very shortly, a very timely decision about what to do when it detects that state. And so that’s a little similar and that you can and from the requester side you can do things if you see things going awry. 

And really and in reality, in the circuit breaking pattern we are making the assumption that only the application making the request will ever get that information fast enough to react to it. 

[0:35:51.8] JS: Yeah where my head was kind of going with it but I think it is pretty off is like on a low level piece of code like it is maybe something you write in C where you implement your own queue in that area and then multiple threads are firing off the same time and there is no block system or mechanism if two threads contend to put something in the same memory space that that queue represents. That is really going down the rabbit hole. I can’t even speak to what degree that is possible in modern programming but that is where my head was. 

[0:36:20.3] NL: Yeah that is a good point. 

[0:36:21.4] SL: Yeah, I think that is actually a pretty good analogy because the key commonality here is some sort of shared access, right? Multiple threads accessing the same stack or memory buffer. The other thing that came to mind to me was like some sort of session multiplexing, right? Where you are running multiple application layer sessions inside a single sort of network connection and those network sessions getting comingled in some fashion. 

Whether through identifiers or sequence number or something else of that nature and therefore, you know garbling the ultimate communication that is trying to be sent. 

[0:36:59.2] DC: Yeah, locks are exactly the right direction, I think. 

[0:37:03.6] NL: That is a very good point.

[0:37:05.2] DC: Yeah, I think that makes perfect sense. Good, all right. Yes, we nailed it. 

[0:37:09.7] SL: Good job. 

[0:37:10.8] DC: Can anybody here think of a software pattern that maybe doesn’t come across that way? When you are thinking about some of the patterns that you see today in cloud native applications, is there a counter example, something that the network does not do at all?

[0:37:24.1] NL: That is interesting. I am trying to think where event streams. No, that is just straight up packets. 

[0:37:30.7] JS: I feel like we should open up one of those old school Java books of like 9,000 design patterns you need to know and we should go one by one and be like, “What about this” you know? There is probably something I can’t think of it off the top of my head. 

[0:37:43.6] DC: Yeah me neither. I was trying to think of it. I mean like I can think of a myriad of things that do cross over even the idea of only locally relevant state, right? That is like a cam table on a switch that is only locally relevant because once you get outside of that switching domain it doesn’t matter anymore and it is like there is a ton of those things that totally do relate, you know? But I am really struggling to come up with one that doesn’t – 

One thing that is actually interesting is I was going to bring up – we mentioned the cap theorem and it is an interesting one that you can only pick like two and three of consistency availability and partition tolerance. And I think you know, when I think about the way that networks solve or try to address this problem, they do it in some pretty interesting way. It’s like if you were to consider like Spanning Tree, right? The idea that there can really only be one path through a series of broadcast domains. 

Because we have multiple paths then obviously we are going to get duplicity and the things are going to get bad because they are going to have packets that are addressed the same things across and you are going to have all kinds of bad behaviors, switching loops and broadcast storms and all kinds of stuff like that and so Spanning Tree came along and Spanning Tree was invented by an amazing woman engineer who created it to basically ensure that there was only one path through a set of broadcast domains. 

And in a way, this solved that camp through them because you are getting to the point where you said like since I understand that for availability purpose, I only need one path through the whole thing and so to ensure consistency, I am going to turn off the other paths and to allow for partition tolerance, I am going to enable the system to learn when one of those paths is no longer viable so that it can re-enable one of the other paths. 

Now the challenge of course is there is a transition period in which we lose traffic because we haven’t been able to open one of those other paths fast enough, right? And so, it is interesting to think about how the network is trying to solve with the part that same set of problems that is described by the cap theorem that we see people trying to solve with software routine. 

[0:39:44.9] SL: No man I totally agree. In a case like Spanning Tree, you are sacrificing availability essentially for consistency and partition tolerance when the network achieves consistency then availability will be restored and there is other ways to doing that. So as we move into systems like I mentioned clos fabrics earlier, you know a cost fabric is a different way of establishing a solution to that and that is saying I’d later too. I will have multiple connections. 

I will wait those connections using the higher-level protocol and I will sacrifice consistency in terms of how the routes are exchanged to get across that fabric in exchange for availability and partition columns. So, it is a different way of solving the same problem and using a different set of tools to do that, right? 

[0:40:34.7] DC: I personally find it funny that in the cap theorem there is at no point do we mention complexity, right? We are just trying to get all three and we don’t care if it’s complex. But at the same time, as a consumer of all of these systems, you care a lot about the complexity. I hear it all the time. Whether that complexity is in a way that the API itself works or whether even in this episode we are talking about like I maybe don’t want to learn how to make the network work. 

I am busy trying to figure out how to make my application work, right? Like cognitive load is a thing. I can only really focus on so many things at a time where am I going to spend my time? Am I going to spend it learning how to do plumbing or am I going to spend it actually trying the right application that solves my business problem, right? It is an interesting thing. 

[0:41:17.7] NL: So, with the rise of software defined networking, how did that play into the adoption of cloud native technologies? 

[0:41:27.9] DC: I think it is actually one of the more interesting overlaps in the space because I think to Josh’s point again. his is where we were taking I mean I work for a company called [inaudible 0:41:37], in which we were virtualizing the network and this is fascinating because effectively we are looking at this as a software service that we had to bring up and build and build reliably and scalable. Reliably and consistently and scalable. We want to create this all while we are solving problems. 

But we need it to do within an API. It is like we couldn’t make the assumption with the way that networks were being defined today like going to each component and configuring them or using protocols was actually going to work in this new model of software confined networking. And so, we had an incredible amount of engineers who were really focused from a computer science perspective on how to effectively reinvent network as a software solution. 

And I do think that there is a huge amount of cross over here like this is actually where I think the waters meet between the way the developers think about the problems and the way that network engineers think about the problem but it has been a rough road I will say. I will say that STN I think is actually has definitely thrown a lot of network engineers under their heels because they’re like, “Wait, wait but that is not a network,” you know? Because I can’t actually look at it and characterize it in the way that I am accustomed to looking at characterizing the other networks that I play with. 

And then from the software side, you’re like, “Well maybe that is okay” right? Maybe that is enough, it is really interesting. 

[0:42:57.5] SL: You know I don’t know enough about the details of how AWS or Azure or Google are actually doing their networking like and I don’t even know and maybe you guys all do know – but I don’t even know that aside from a few tidbits here and there that AWS is going to even divulge the details of how things work under the covers for VPC’s right? 

But I can’t imagine that any modern cloud networking solution whether it would be VBPC’s or VNET’s or whatever doesn’t have a significant software to find aspect to it. You know, we don’t need to get into the definitions of what STN is or isn’t. That was a big discussion Duffie and I had six years ago, right? But there has to be some part of it that is taking and using the concepts that are common in STN right? And applying that. Just as the same way as the cloud vendors are using the concepts from compute virtualization to enable what they are doing. 

I mean like the reality is that you know the work that was done by the Cambridge folks on Zen was a massive enabler trade for AWS, right? The word done on KVM also a massive enabler for lots of people. I think GCP is KBM based and V Sphere where VM Ware data as well. I mean all of this stuff was a massive enablers for what we do with compute virtualization in the cloud. I have to think that whether it is – even if it wasn’t necessarily directly stemming out of Martin Casado’s open flow work at Stanford, right? 

That a lot of these software define networking concepts are still seeing use in the modern clouds these days and that is what enables us to do things like issue an API call and have an isolated network space with its own address space and its own routing and satiated in some way and managed. 

[0:44:56.4] JS: Yeah and on that latter point, you know as a consumer of this new software defined nature of networking, it is amazing the amount of I don’t know, I started using like a blanket marketing term here but agility that it is added, right? Because it has turned all of these constructs that I used to file a ticket and follow up with people into self-service things that when I need to poke holes in the network, hopefully the rights are locked down, so I just can’t open it all up.

Assuming I know what I am doing and the rights are correct it is totally self-service for me. I go into AWS, I change the security group roll and boom, the ports have changed and it never looked like that prior to this full takeover of what I believe is STN almost end to end in the case of AWS and so on. So, it is really just not only has it made people like myself have to understand more about networking but it has allowed us to self-service a lot of the things. 

That I would imagine most network engineers were probably tired of doing anyways, right? How many times do you want to go to that firewall and open up that port? Are you really that excited about that? I would imagine not so. 

[0:45:57.1] NL: Well I can only speak from experience and I think a lot of network engineers kind of get into that field because it really love control. And so, they want to know what these ports are that are opening and it is scary to be like this person has opened up these ports, “Wait what?” Like without them even totally knowing. I mean I was generalizing, I was more so speaking to myself as being self-deprecating. It doesn’t apply to you listener. 

[0:46:22.9] JS: I mean it is a really interesting point though. I mean do you think it makes the networking people or network engineers maybe a little bit more into the realm of observability and like knowing when to trigger when something has gone wrong? Does it make them more reactive in their role I guess. Or maybe self-service is not as common as I think it is. It is just from my point of view, it seems like with STN’s the ability to modify the network more power has been put into the developers’ hands is how I look at it, you know? 

[0:46:50.7] DC: I definitely agree with that. It is interesting like if we go back a few years there was a time when all of us in the room here I think are employed by VMware. So, there was a time where VMware’s thing was like the real value or one of the key values that VMware brought to the table was the idea that a developer come and say “Give me 10 servers.” And you could just call an API or make it or you could quickly provision those 10 servers on behalf of that developer and hand them right back. 

You wouldn’t have to go out and get 10 new machines and put them into a rack, power them and provision them and go through that whole process that you could actually just stamp those things out, right? And that is absolutely parallel to the network piece as well. I mean if there is nothing else that SPN did bring to the fore is that, right? That you can get that same capability of just stamping up virtual machines but with networks that the API is important in almost everything we do. 

Whether it is a service that you were developing, whether it is a network itself, whether it is the firewall that we need to do these things programmatically. 

[0:47:53.7] SL: I agree with you Duffie. Although I would contend that the one area that and I will call it on premises STN shall we say right? Which is the people putting on STN solutions. I’d say the one area at least in my observation that they haven’t done well is that self-service model. Like in the cloud, self-service is paramount to Josh’s point. They can go out there, they can create their own BPC’s, create their own sub nets, create their own NAT gateways, Internet gateways to run security groups. Load balancers, blah-blah, all of that right?

 But it still seems to me that even though we are probably 90, 95% of the way there, maybe farther in terms of on premise STN solutions right that you still typically don’t see self-service being pushed out in the same way you would in the public cloud, right? That is almost the final piece that is needed to bring that cloud experience to the on-premises environment. 

[0:48:52.6] DC: That is an interesting point. I think from an infrastructure as a service perspective, it falls into that realm. It is a problem to solve in that space, right? So when you look at things like OpenStack and things like AWS and things like JKE or not JKE but GCE and areas like that, it is a requirement that if you are going to provide infrastructure as a service that you provide some capability around networking but at the same time, if we look at some of the platforms that are used for things like cloud native applications. 

Things like Kubernetes, what is fascinating about that is that we have agreed on a least come – we agreed on abstraction of networking that is maybe I don’t know, maybe a little more precooked you know what I mean? In the assumption within like most of the platforms as a service that I have seen, the assumption is that when I deploy a container or I deploy a pod or I deploy some function as a service or any of these things that the networking is going to be handled for me. 

I shouldn’t have to think about whether it is being routed to the Internet or not or routed back and forth between these domains. I should if anything only have to actually give you intent, be able to describe to you the intent of what could be connected to this and what ports I am actually going to be exposing and that the platform actually hides all of the complexity of that network away from me, which is an interesting round to strike. 

[0:50:16.3] SL: So, this is one of my favorite things, one of my favorite distinctions to make, right? And that is this is the two worlds that we have been talking about, applications and infrastructure and the perfect example of these different perspectives and you even said it or you talked there Duffie like from an IS perspective it is considered a given that you have to be able to say I want a network, right? But when you come at this from the application perspective, you don’t care about a network. 

You just want network connectivity, right? And so, when you look at the abstractions that IS vendors and solutions or products have created then they are IS centric but when you look at the abstractions that have been created in the cloud data space like within Kubernetes, they are application centric, right? And so, we are talking about infrastructure artifacts versus application artifacts and they end up meeting but they are coming at this from two different very different perspectives. 

[0:51:18.5] DC: Yeah. 

[0:51:19.4] NL: Yeah, I agree. 

[0:51:21.2] DC: All right, well that was a great discussion. I imagine that we are probably get into – at least I have a couple of different networking discussions that I wanted to dig into and this conversation I hope that we’ve helped draw some parallels back and forth between the way – I mean there is both some empathy to spend here, right? I mean the people who are providing the service of networking to you in your cloud environments and your data centers are solving almost exactly the same sorts of availability problems and capabilities that you are trying to solve with your own software. 

And I think in itself is a really interesting takeaway. Another one is that again there is nothing new under the sun. The problems that we are trying to solve in networking are not different than the problems that you are trying to solve in applications. We have far fewer tools and we generally network engineers are focused on specific changes that happen in the industry rather than looking at a breathe of industries like I mean as Josh pointed out, you could break open a Java book. 

And see 8,000 patterns for how to do Java and this is true, every programming language that I am aware of I mean if you look at Go and see a bunch of different patterns there and we have talked about different patterns for just developing cloud native aware applications as well, right? I mean there is so many options in the software versus what we can do and what are available to us within networks. And so I think I am rambling a little bit but I think that is the takeaway from this session. 

Is that there is a lot of overlap and there is a lot of really great stuff out there. So, this is Duffie, thank you for tuning in and I look forward to the next episode. 

[0:52:49.9] NL: Yep and I think we can all agree that Token Ring should have won. 

[0:52:53.4] DC: Thank you Josh and thank you Scott. 

[0:52:55.8] JS: Thanks. 

[0:52:57.0] SL: Thanks guys, this was a blast. 

[END OF EPISODE]

[0:52:59.4] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
