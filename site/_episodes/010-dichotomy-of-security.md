---
episode_id: 010-the-dichotomy-of-security
episode_number: 10 
title: The Dichotomy of Security
description: Security is inherently dichotomous because it involves hardening an application to protect it from external threats, while at the same time ensuring agility and the ability to iterate as fast as possible. This in-built tension is the major focal point of today’s show. 
notes: Security is inherently dichotomous because it involves hardening an application to protect it from external threats, while at the same time ensuring agility and the ability to iterate as fast as possible. This in-built tension is the major focal point of today’s show, where we talk about all things security. From our discussion, we discover that there are several reasons for this tension. The overarching problem with security is that the starting point is often rules and parameters, rather than understanding what the system is used for. This results in security being heavily constraining. For this to change, a culture shift is necessary, where security people and developers come around the same table and define what optimizing to each of them means. This, however, is much easier said than done as security is usually only brought in at the later stages of development. We also discuss why the problem of security needs to be reframed, the importance of defining what normal functionality is and issues around response and detection, along with many other security insights. The intersection of cloud native and security is an interesting one, so tune in today! 
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Nicholas Lane
      url: https://twitter.com/apinick
points:
    - Often application and program security constrain optimum functionality.
    - Generally, when security is talked about, it relates to the symptoms, not the root problem.
    - Developers have not adapted internal interfaces to security.
    - Look at what a framework or tool might be used for and then make constraints from there.
    - The three frameworks people point to when talking about security, FISMA, NIST, and CIS.
    - Trying to abide by all of the parameters is impossible.
    - It is important to define what normal access is to understand what constraints look like.
    - Why it is useful to use auditing logs in pre-production.
    - There needs to be a discussion between developers and security people. 
    - How security with Kubernetes and other cloud native programs work.
    - There has been some growth in securing secrets in Kubernetes over the past year.
    - Blast radius – why understanding the extent of security malfunction effect is important.
    - Chaos engineering is a useful framework for understanding vulnerability. 
    - Reaching across the table – why open conversations are the best solution to the dichotomy.
    - Security and developers need to have the same goals and jargon from the outset.
    - The current model only brings security in at the end stages of development.
    - There needs to be a place to learn what normal functionality looks like outside of production.
    - How Google manages to run everything in production.
    - It is difficult to come up with security solutions for differing contexts.
    - Why people want service meshes.
links:
    - name: AWS
      url: https://aws.amazon.com/
    - name: Kubernetes 
      url: https://kubernetes.io/
    - name: IAM 
      url: https://aws.amazon.com/iam/
    - name: Securing a Cluster 
      url: https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/
    - name: TGI Kubernetes 065 
      url: https://www.youtube.com/watch?v=0uy2V2kYl4U&list=PL7bmigfV0EqQzxcNpmcdTJ9eFRPBe-iZa&index=33&t=0s
    - name: TGI Kubernetes 066 
      url: https://www.youtube.com/watch?v=C-vRlW7VYio&list=PL7bmigfV0EqQzxcNpmcdTJ9eFRPBe-iZa&index=32&t=0s
    - name: Bitnami 
      url: https://bitnami.com/
    - name: Target 
      url: https://www.target.com/
    - name: Netflix
      url:  https://www.netflix.com/
    - name: HashiCorp 
      url: https://www.hashicorp.com/
    - name: Aqua Sec
      url: https://www.aquasec.com/
    - name: CyberArk 
      url: https://www.cyberark.com/
    - name: Jeff Bezos 
      url: https://www.forbes.com/profile/jeff-bezos/#4c3104291b23
    - name: Istio 
      url: https://istio.io/
    - name: Linkerd 
      url: https://linkerd.io/
video: https://www.youtube.com/embed/WV_8sU5vI6Q
related: 
- 008-disaster-recovery 
- 003-why-api-contracts-are-important
- 005-cloud-native-infrastructure
---
EPISODE 10

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores cloud native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.2] NL: Hello and welcome back to The Kubelets Podcast. My name is Nicholas Lane and this time, we’re going to be talking about the dichotomy of security. And to talk about such an interesting topic, joining me are Duffie Coolie.

[0:00:54.3] DC: Hey, everybody.

[0:00:55.6] NL: Bryan Liles.

[0:00:57.0] BM: Hello

[0:00:57.5] NL: And Carlisia Campos.

[0:00:59.4] CC: Glad to be here.

[0:01:00.8] NL: So, how’s it going everybody?

[0:01:01.8] DC: Great.

[0:01:03.2] NL: Yeah, this I think is an interesting topic. Duffie, you introduced us to this topic. And basically, what I understand, what you wanted to talk about, we’re calling it the dichotomy of security because it’s the relationship between security, like hardening your application to protect it from attack and influence from outside actors and agility to be able to create something that’s useful, the ability to iterate as fast as possible.

[0:01:30.2] DC: Exactly. I mean, the idea from this came from putting together a talks for the security conference coming up here in a couple of weeks. And I was noticing that obviously, if you look at the job of somebody who is trying to provide some security for applications on their particular platform, whether that be AWS or GCE or OpenStack or Kubernetes or anything of these things.

It’s frequently in their domain to kind of define constraints for all of the applications that would be deployed there, right? Such that you can provide rational defaults for things, right? Maybe you want to make sure that things can’t do a particular action because you don’t want to allow that for any application within your platform or you want to provide some constraint around quota or all of these things. And some of those constraints make total sense and some of them I think actually do impact your ability to design the systems or to consume that platform directly, right? 

You’re not able to actually make use of the platform as it was designed to be made use of, when those constraints are too tight.

[0:02:27.1] DC: Yeah. I totally agree. There’s kind of a joke that we have in certain tech fields which is the primary responsibility of security is to halt productivity. It isn’t actually true, right? But there are tradeoffs, right? If security is too tight, you can’t move forward, right? Example of this that kind of mind are like, if you’re too tight on your firewall rules where you can’t actually use anything of value.

That’s a quick example of like security gone haywire. That’s too controlling, I think.

[0:02:58.2] BM: Actually. This is an interesting topic just in general but I think that before we fall prey to what everyone does when they talk about security, let’s take a step back and understand why things are the way they are. Because all we’re talking about are the symptoms of what’s going on and I’ll give you one quick example of why I say this. Things are the way they are because we haven’t made them any better.

In developer land, whenever we consume external resources, what we were supposed to do and what we should be doing but what we don’t do is we should create our internal interfaces. Only program to those interfaces and then let that interface of that adapt or talk to the external service and in security world, we should be doing the same thing and we don’t do this. 

My canonical example for this is IAM on AWS. It’s hard to create a secure IM configuration and it’s even harder to keep it over time and it’s even harder to do it whenever you have 150, 100, 5,000 people dealing with this. What companies do is they actually create interfaces where they could describe the part of IAM they want to use and then they translate that over. 

The reason I bring this up is because the reason that people are scared of security is because security is opaque and security is opaque because a lot of people like to keep it opaque. But it doesn’t have to be that way.

[0:04:24.3] NL: That’s a good point, that’s a reasonable design and wherever I see that devoted actually is very helpful, right? Because you highlight a critical point in that these constraints have to be understood by the people who are constrained by them, right? It will just continue to kind of like drive that wedge between the people who are responsible for them top finding t hem and the people who are being affected by them, right? That transparency, I think it’s definitely key.

[0:04:48.0] BM: Right, this is our cloud native discussion, any idea of where we should start thinking about this in cloud native land?

[0:04:56.0] DC: For my part, I think it’s important to understand if you can like what the consumer of a particular framework or tool might need, right? And then, just take it from there and figure out what rational constraints are. Rather than the opposite which is frequently where people go and evaluate a set of rules as defined by some particular, some third-part company. Like you look at CIS packs and you look at like a lot of these other tooling.

I feel like a lot of people look at those as like, these are the hard rules, we must comply to all of these things. Legally, in some cases, that’s the case. But frequently, I think they’re just kind of like casting about for some semblance of a way to start defining constraint and they go too far, they’re no longer taking into account what the consumers of that particular platform might meet, right?

Kubernetes is a great example of this. If you look at the CIS spec for Kubernetes or if you look at a lot of the talks that I’ve seen kind of around how to secure Kubernetes, we defined like best practices for security and a lot of them are incredibly restrictive, right? I think of the problem there is that restriction comes at a cost of agility. You’re no longer able to use Kubernetes as a platform for developing microservices because you provided so much constraints that it breaks the model, you know?

[0:06:12.4] NL: Okay. Let’s break this down again. I can think of a top of my head, three types of things people point to when I’m thinking about security. And spoiler alert, I am going to do some acronyms but don’t worry about the acronyms are, just understand they are security things. The first one I’ll bring up is FISMA and then I’ll think about NIST and the next one is CIS like you brought up.

Really, the reason they’re so prevalent is because depending on where you are, whether you’re in a highly regulated place like a bank or you’re working for the government or you have some kind of automate concern to say a PIPA or something like that. These are the words that the auditors will use with you. There is good in those because people don’t like the CIS benchmarks because sometimes, we don’t understand why they’re there.

But, from someone who is starting from nothing, those are actually great, there’s at least a great set of suggestions. But the problem is you have to understand that they’re only suggestions and they are trying to get you to a better place than you might need. But, the other side of this is that, we should never start with NIST or CIS or FISMA. What we really should do is our CISO or our Chief Security Officer or the person in charge of security.

Or even just our – people who are in charge, making sure our stack, they should be defining, they should be taking what they know, whether it’s the standards and they should be building up this security posture in this security document and these rules that are built to protect whatever we’re trying to do.

And then, the developers of whoever else can operate within that rather than everything literally.

[0:07:46.4] DC: Yeah, agreed. Another thing I’ve spent some time talking to people about like when they start rationalizing how to implement these things or even just think about the secure surface or develop a threat model or any of those things, right? One of the things that I think it’s important is the ability to define kind of like what normal looks like, right?

What normal access between applications or normal access of resources looks like. I think that your point earlier, maybe provides some abstraction in front of a secure resource such that you can actually just share that same fraction across all the things that might try to consume that external resource is a great example of the thing.

Defining what that normal access looks like is critical to us to our ability to constrain it, right? I think that frequently people don’t start there, they start with the other side, they’re saying, here are all the constraints, you need to tell me which ones are too tight. You need to tell me which ones to loosen up so that you can do your job. You need to tell me which application needs access to whichever application so that I can open the firewall for you.

I’m like, we need to turn that on its head. We need the environments that are perhaps less secure so that we can actually define what normal looks like and then take that definition and move it into a more secured state, perhaps by defining these across different environments, right?

[0:08:58.1] BM: A good example of that would be in larger organizations, at every part of the organization does this but there is environments running your application where there are really no rules applied. What we do with that is we turn on auditing in those environments so you have two applications or a single application that talks to something and you let that application run and then after the application run, you go take a look at the audit logs and then you determine at that point what a good profile of this application is.

Whenever it’s in production, you set up the security parameters, whether it be identity access or network, based on what you saw in auditing in your preproduction environment. That’s all you could run because we tested it fully in our preproduction environment, it should not do any more than that. And that’s actually something – I’ve seen tools that will do it for AWS IM. I’m sure you can do for anything else that creates auditing law. That’s a good way to get started.

[0:09:54.5] NL: It sounds like what we’re coming to is that the breakdown of security or the way that security has impacted agility is when people don’t take a rational look at their own use case. instead, rely too much on the guidance of other people essentially. Instead of using things like the CIS benchmarking or NIST or FISMA, that’s one that I knew the other two and I’m like, I don’t know this other one. If they follow them less as guidelines and more as like hard set rules, that’s when we get impacts or agility. Instead of like, “Hey. This is what my application needs like you’re saying, let’s go from there.”

What does this one look like? Duffie is for saying. I’m kind of curious, let’s flip that on its head a little bit, are there examples of times when agility impacts security?

[0:10:39.7] BM: You want to move fast and moving fast is counter to being secure?

[0:10:44.5] NL: Yes.

[0:10:46.0] DC: Yeah, literally every single time we run software. When it comes down to is developers are going to want to develop and then security people are going to want to secure. And generally, I’m looking at it from a developer who has written security software that a lot of people have used, you guys had know that.

Really, there needs to be a conversation, it’s the same thing as we had this dev ops conversation for a year – and then over the last couple of years, this whole dev set ops conversation has been happening. We need to have this conversation because from a security person’s point of view, you know, no access is great access.

No data, you can’t get owned if you don’t have any data going across the wire. You know what? Can’t get into that server if there’s no ports opened. But practically, that doesn’t work and we find is that there is actually a failing on both sides to understand what the other person was optimizing for.

[0:11:41.2] BM: That’s actually where a lot of this comes from. I will offer up that the only default secure posture is no access to anything and you should be working from that direction to where you want to be rather than working from, what should we close down? You should close down everything and then you work with allowing this list for other than block list.

[0:12:00.9] NL: Yeah, I agree with that model but I think that there’s an important step that has to happen before that and that’s you know, the tooling or thee wireless phone to define what the application looks like when it’s in a normal state or the running state and if we can accomplish that, then I feel like we’re in a better position to find what that LOI list looks like and I think that one of the other challenges there of course, let’s backup for a second. I have actually worked on a platform that supported many services, hundreds of services, right?

Clearly, if I needed to define what normal looked like for a hundred services or a thousand services or 2,000 services, that’s going to be difficult in a way that people approach the problem, right? How do you define for each individual service? I need to have some decoration of intent. I need the developer to engage here and tell me, what they’re expecting, to set some assumptions about the application like what it’s going to connect to, those dependences are – 

That sort of stuff. And I also need tooling to verify that. I need to be able to kind of like build up the whole thing so that I have some way of automatically, you know, maybe with oversight, defining what that security context looks like for this particular service on this particular platform.

Trying to do it holistically is actually I think where we get into trouble, right? Obviously, we can’t scale the number of people that it takes to actually understand all of these individual services. We need to actually scale this stuff as software problem instead.

[0:13:22.4] CC: With the cloud native architecture and infrastructure, I wonder if it makes it more restrictive because let’s say, these are running on Kubernetes, everything is running at Kubernetes. Things are more connected because it’s a Kubernetes, right? It’s this one huge thing that you’re running on and Kubernetes makes it easier to have access to different notes and when the nodes took those apart, of course, you have to find this connection.

Still, it’s supposed to make it easy. I wonder if security from a perspective of somebody, needing to put a restriction and add miff or example, makes it harder or if it makes it easier to just delegate, you have this entire area here for you and because your app is constrained to this space or name space or this part, this node, then you can have as much access as you need, is there any difference? Do you know what I mean? Does it make sense what I said?

[0:14:23.9] BM: There was actually, it’s exactly the same thing as we had before. We need to make sure that applications have access to what they need and don’t have access to what they don’t need. Now, Kubernetes does make it easier because you can have network policies and you can apply those and they’re easier to manage than who knows what networking management is holding you have.

Kubernetes also has pod security policies which again, actually confederates this knowledge around my pod should be able to do this or should not be able to run its root, it shouldn’t be able to do this and be able to do that. It’s still the same practice Carlisia, but the way that we can control it is now with a standard set off tools.

We still have not cracked the whole nut because the whole thing of turning auditing on to understand and then having great tool that can read audit locks from Kubernetes, just still aren’t there. Just to add one more last thing that before we add VMWare and we were Heptio, we had a coworker who wrote basically dynamic audit and that was probably one of the first steps that we would need to be able to employ this at scale. 

We are early, early, super early in our journey and getting this right, we just don’t have all the necessary tools yet. That’s why it’s hard and that’s why people don’t do it.

[0:15:39.6] NL: I do think it is nice to have t hose and primitives are available to people who are making use of that platform though, right? Because again, kind of opens up that conversation, right? Around transparency. The goal being, if you understood the tools that we’re defining that constraint, perhaps you’d have access to view what the constraints are and understand if they’re actually rational or not with your applications.

When you’re trying to resolve like I have deployed my application in dev and it’s the wild west, there’s no constraints anywhere. I can do anything within dev, right? When I’m trying to actually promote my application to staging, it gives you some platform around which you can actually sa, “If you want to get to staging, I do have to enforce these things and I have a way and again, all still part of that same API, I still have that same user experience that I had when just deploying or designing the application to getting them deployed.”

I could still look at again and understand what the constraints are being applied and make sure that they’re reasonable for my application. Does my application run, does it have access to the network resources that it needs to? If not, can I see where the gaps are, you know?

[0:16:38.6] DC: For anyone listening to this. Kubernetes doesn’t have all the documentation we need and no one has actually written this book yet. But on Kubernetes.io, there are a couple of documents about security and if we have shownotes, I will make sure those get included in our shownotes because I think there are things that you should at least understand what’s in a pod security policy.

You should at least understand what’s in a network security policy. You should at least understand how roles and role bindings work. You should understand what you’re going to do for certificate management. How do you manage this certificate authority in Kubernetes? How do you actually work these things out? This is where you should start before you do anything else really fancy. At least, understand your landscape.

[0:17:22.7] CC: Jeffrey did a TGI K talk on secrets. I think was that a series? There were a couple of them, Duffie? 

[0:17:29.7] DC: Yeah, there were. I need to get back and do a little more but yeah.

[0:17:33.4] BM: We should then add those to our shownotes too. Hopefully they actually exist or I’m willing to see to it because in assistance.

[0:17:40.3] CC: We are going to have shownotes, yes.

[0:17:44.0] NL: That is interesting point, bringing up secrets and secret management and also, like secured Inexhibit. There are some tools that exist that we can use now in a cloud native world, at least in the container world. Things like vault exist, things like well, now, KBDM you can roll certificate which is really nice. We are getting to a place where we have more tooling available and I’m really happy about it.

Because I remember using Kubernetes a year ago and everyone’s like, “Well. How do you secure a secret in Kubernetes?” And I’m like, “Well, it sure is basics for you to encode it. That’s on an all secure.”

[0:18:15.5] BM: I would do credit Bitnami has been doing sealed secrets, that’s been out for quite a while but the problem is that how do you suppose to know about that and how are you supposed to know if it’s a good standard? And then also, how are you supposed to benchmark against that? How do you know if your secrets are okay?

We haven’t talked about the other side which is response or detection of issues. We’re just talking about starting out, what do you do?

[0:18:42.3] DC: That’s right.

[0:18:42.6] NL: It is tricky. We’re just saying like, understanding all the avenues that you could be impacted is kind of a daunting task. Let’s talk about like the Target breach that occurred a few years ago? If anybody doesn’t remember this, basically, Target had a huge credit card breach from their database and basically, what happened is that t heir – If I recalled properly, their OIDC token had a – not expired but the audience for it was so broad that someone had hacked into one computer essentially like a register or something and they were able to get the OIDC token form the local machine. 

The authentication audience for that whole token was so broad that they were able to access the database that had all of the credit card information into it. These are one of these things that you don’t think about when you’re setting up security, when you’re just maybe getting started or something like that. 

What are the avenues of attack, right? You’d say like, “OIDC is just pure authentication mechanism, why would we need to concern ourselves with this?” And then but not understanding kind of what we were talking about last because the networking and the broadcasting, what is the blast radius of something like this and so, I feel like this is a good example of sometimes security can be really hard and getting started can be really daunting.

[0:19:54.6] DC: Yeah, I agree. To Bryan’s point, it’s like, how do you test against this? How do you know that what you’ve defined is enough, right? We can define all of these constraints and we can even think that they’re pretty reasonable or rational and the application may come up and operate but how do you know? How can you verify that? What you’ve done is enough?

And then also, remember. With OIDC has its own foundations and loft. You realize that it’s a very strong door but it’s only a strong door, it also do things that you can’t walk around a wall and that it’s protecting or climb over the wall that it’s protecting. There’s a bit of trust and when you get into things like the target breach, you really have to understand blast radius for anything that you’re going to do.

A good example would be if you’re using shared key kind of things or like public share key. You have certificate authorities and you’re generating certificates. You should probably have multiple certificate authorities and you can have a basically, a hierarchy of these so you could have basically the root one controlled by just a few people in security.

And then, each department has their own certificate authority and then you should also have things like revocation, you should be able to say that, “Hey, all this is bad and it should all go away and it probably should have every revocation list,” which a lot of us don’t have believe it or not, internally. Where if I actually kill our own certificate, a certificate was generated and I put it in my revocation list, it should not be served and in our clients that are accepting that our service is to see that, if we’re using client side certificates, we should reject these instantly.

Really, what we need to do is stop looking at security as this one big thing and we need to figure out what are our blast radius. Firecracker, blowing up in my hand, it’s going to hurt me. But Nick, it’s not going to hurt you, you know? If someone drops in a huge nuclear bomb on the United States or the west coast United States, I’m talking to myself right now.

You got to think about it like that. What’s the worst that can happen if this thing gets busted or get shared or someone finds that this should not happen? Every piece off data that you have that you consider secure or sensitive, you should be able to figure out what that means and that is how whenever you are defining a security posture that’s butchered to me. Because that is why you’ll notice that a lot of companies some of them do run open within a contained zone. So, within this contained zone you could talk to whomever you want. We don’t actually have to be secure here because if we lose one, we lost them all so who cares? 

So, we need to think about that and how do we do that in Kubernetes? Well, we use things like name spaces first of all and then we use things like this network policies and then we use things like pod security policies. We can lock some access down to just name spaces if need be. You can only talk to pods and your name space. And I am not telling you how to do this but you need to figure out talking with your developer, talking to the security people. 

But if you are in security you need to talk to your product management staff and your software engineering staff to figure out really how does this need to work? So, you realize that security is fun and we have all sorts of neat tools depending on what side you’re on. You know if you are on red team, you’re half knee in, you’re blue team you are saving things. We need to figure out these conversations and tooling comes from these conversations but we need to have these conversation first. 

[0:23:11.0] DC: I feel like a little bit of a broken record on this one but I am going to go back to chaos engineering again because I feel like it is critical to stuff like this because it enables a culture in which you can explore both the behavior of applications itself but why not also use this model to explore different ways of accessing that information? Or coming up with theories about the way the system might be vulnerable based on a particular attack or a type of attack, right? 

I think that this is actually one of the movements within our space that I think provides because then most hope in this particular scenario because a reasonable chaos engineering practice within an organization enables that ability to explore all of the things. You don’t have to be red team or blue team. You can just be somebody who understands this application well and the question for the day is, “How can we attack this application?”

Let’s come up with theories about the way that perhaps this application could be attacked. Think about the problem differently instead of thinking about it as an access problem, think about it as the way that you extend trust to the other components within your particular distributed system like do they have access that they don’t need. Come up with a theory around being able to use some proxy component of another system to attack yet a third system. 

You know start playing with those ideas and prove them out within your application. A culture that embraces that I think is going to be by far a more secure culture because it lets developers and engineers explore these systems in ways that we don’t generally explore them. 

[0:24:36.0] BM: Right. But also, if I could operate on myself I would never need a doctor. And the reason I bring that up is because we use terms like chaos engineering and this is no disrespect to you Duffie, so don’t take it as this is panacea or this idea that we make things better and true. That is fine, it will make us better but the little secret behind chaos engineering is that it is hard. It is hard to build these experiments first of all, it is hard to collect results from these experiments. 

And then it is hard to extrapolate what you got out of the experiments to apply to whatever you are working on to repeat and what I would like to see is what people in our space is talking about how we can apply such techniques. But whether it is giving us more words or giving us more software that we can employ because I hate to say it, it is pretty chaotic in chaos engineering right now for Kubernetes.

Because if you look at all the people out there who have done it well. 

And so, you look at what Netflix has done with pioneering this and then you listen to what, a company such us like Gremlin is talking about it is all fine and dandy. You need to realize that it is another piece of complexity that you have to own and just like any other things in the security world, you need to rationalize how much time you are going to spend on it first is the bottom line because if I have a “Hello, World!” app, I don’t really care about network access to that. 

Unless it is a “Hello, World!” app running on the same subnet as some doing some PCI data then you know it is a different conversation. 

[0:26:05.5] DC: Yeah. I agree and I am certainly not trying to version as a panacea but what I am trying to describe is that I feel like I am having a culture that embraces that sort of thinking is going to enable us to be in a better position to secure these applications or to handle a breach or to deal with very hard to understand or resolve problems at scale, you know? Whether that is a number of connections per second or whether that is a number of applications that we have horizontally scaled. 

You know like being able to embrace that sort of a culture where we asked why where we say “well, what if…” or if we actually come up you know embracing the idea of that curiosity that got you into this field, you know what I mean like the thing that is so frequently our cultures are opposite of that, right? It becomes a race to the finish and in that race to the finish, lots of pieces fall off that we are not even aware of, you know? That is what I am highlighting here when I talk about it. 

[0:26:56.5] NL: And so, it seems maybe the best solution to the dichotomy between security and agility is really just open conversation, in a way. People actually reaching across the aisle to talk to each other. So, if you are embracing this culture as you are saying Duffie the security team should be having constant communication with the application team instead of just like the team doing something wrong and the security team coming down and smacking their hand. 

And being like, “Oh you can’t do it this way because of our draconian rules” right? These people are working together and almost playing together a little bit inside of their own environment to create also a better environment. And I am sorry.I didn’t mean to cut you off there, Bryan. 

[0:27:34.9] BM: Oh man, I thought it was fleeting like all my thoughts. But more about what you are saying is, is that you know it is not just more conversations because we can still have conversations and I am talking about sider and subnets and attack vectors and buffer overflows and things like that. But my developer isn’t talking, “Well, I just need to be able to serve this data so accounting can do this.”

 And that’s what happens a lot in security conversations. You have two groups of individuals who have wholly different goals and part of that conversation needs to be aligning or jargon and then aligning on those goals but what happens with pretty much everything in the development world, we always bring our networking, our security and our operations people in right at the end, right when we are ready to ship, “Hey make this thing work.” And really it is where a lot of our problems come out. 

Now security either could or wanted to be involved at the beginning of a software project what we actually are talking about what we are trying to do. We are trying to open up this service to talk to this, share this kind of data. Security can be in there early saying, “Oh no you know, we are using this resource in our cloud provider. It doesn’t really matter what cloud provider and we need to protect this. This data is sitting here at rest.”

If we get those conversations earlier, it would be easier to engineer solutions that to be hopefully reused so we don’t have to have that conversation in the future.

[0:29:02.5] CC: But then it goes back to the issue of agility, right? Like Duffie was saying, wow you can develop, I guess a development cluster which has much less restrictive restrictions and they move to a production environment where the proper restrictions are then – then you find out or maybe station environment let’s say. And then you find out, “Oh whoops. There are a bunch of restrictions I didn’t deal with but I didn’t move a lot faster because I didn’t have them but now, I have to deal with them.” 

[0:29:29.5] DC: Yeah, do you think it is important to have a promotion model in which you are able to move toward a more secure deployment right? Because I guess a parallel to this is like I have heard it said that you should develop your monolith first and then when you actually have the working prototype of what you’re trying to create then consider carefully whether it is time to break this thing up into a set of distinct services, right? 

And consider carefully also what the value of that might be? And I think that the reason that that’s said is because it is easier. It is going to be a lower cognitive load with everything all right there in the same codebase. You understand how all of these pieces interconnect and you can quickly develop or prototype what you are working on. Whereas if you are trying to develop these things into individual micro services first, it is harder to figure out where the line is. 

Like where to divide all of the business logic. I think this is also important when you are thinking about the security aspects of this right? Being able to do a thing when which you are not constrained, define all of these services and your application in the model for how they communicate without constraint is important. And once you have that when you actually understand what normal looks like from that set of applications then enforce them, right? 

If you are able to declare that intent you are going to say like these are the ports on the list on for these things, these are the things that they are going to access, this is the way that they are going to go about accessing them. You know if you can declare that intent then that is actually that is a reasonable body of knowledge for which the security people can come along and say, “Okay well, you have told us. You informed us. You have worked with us to tell us like what your intent is. We are going to enforce that intent and see what falls out and we can iterate there.” 

[0:31:01.9] CC: Yeah everything you said makes sense to me. Starting with build the monolith first. I mean when you start out why which ones will have abstract things that you don’t really – I mean you might think you know but you’re only really knowing practice what you are going to need to abstract. So, don’t abstract things too early. I am a big fan of that idea. So yeah, start with the monolith and then you figure out how to break it down based on what you need. 

With security I would imagine the same idea resonates with me. Don’t secure things that you don’t need you don’t know just yet that needs securing except the deal breaker things. Like there is some things we know like we don’t want production that are being accessed some types of production that are some things we know we need to secure so from the beginning. 

[0:31:51.9] BM: Right. But I will still iterate that it is always denied by default, just remember that. It is security is actually the opposite way. We want to make sure that we have the least amount and even if it is harder for us you always want to start with un-allowed TCP communication on port 443 or UDP as well. That is what I would allow rather than saying shut everything else off. But this, I would rather have the way that we only allow that and that also goes in with our declarative nature in cloud native things we like anyways. We just say what we want and everything else doesn’t exists.

[0:32:27.6] DC: I do want to clarify though because I think what you and I, we are the representative of the dichotomy right at this moment, right? I feel like what you are saying is the constraint should be the normal, being able to drop all traffic, do not allow anything is normal and then you have to declare intent to open anything up and what I am saying is frequently developers don’t know what normal looks like yet. They need to be able to explore what normal looks like by developing these patterns and then enforce them, right, which is turning the model on its head. 

And this is actually I think the kernel that I am trying to get to in this conversation is that there has to be a place where you can go play and learn what normal is and then you can move into a world in which you can actually enforce what that normal looks like with reasonable constraint. But until you know what that is, until you have that opportunity to learn it, all we are doing here is restricting your ability to learn. We are adding friction to the process. 

[0:33:25.1] BM: Right, well I think what I am trying to say here layer on top of this is that yes, I agree but then I understand what a breach can do and what bad security can do. So I will say, “Yeah, go learn. Go play all you want but not on software that will ever make it to production. Go learn these practices but you are going to have to do it outside of” – you are going to have a sandbox and that sandbox is going to be unconnected from the world I mean from our obelisk and you are going to have to learn but you are not going to practice here. This is not where you learn how to do this.

[0:33:56.8] NL: Exactly right, yeah. You don’t learn to ride a motorcycle on the street you know? You’d learn to ride a motorcycle on the dirt and then you could take those skills later you know? But yeah I think we are in agreement like production is a place where we do have to enforce all of those things and having some promotion level in which you can come from a place where you learned it to a place where you are beginning to enforce it to a place where it is enforced I think is also important. 

And I frequently describe this as like development, staging and production, right? Staging is where you are going to hit the edges from because this is where you’re actually defining that constraint and it has to be right before it can be promoted to production, right? And I feel like the middle ground is also important. 

[0:34:33.6] BM: And remember that production is any environment production can reach. Any environment that can reach production is production and that is including that we do data backup dumps and we clean them up from production and we use it as data in our staging environment. If production can directly reach staging or vice versa, it is all production. That is your attack vector. That is also what is going to get in and steal your production data. 

[0:34:59.1] NL: That is absolutely right. Google actually makes an interesting not of caveat to that but like side point to that where like if I understand the way that Google runs, they run everything in production, right? Like dev, staging and production are all the same environment. I am more positing this is a question because I don’t know if anybody of us have the answer but I wonder how they secure their infrastructure, their environment well enough to allow people to play to learn these things?

And also, to deploy production level code all in the same area? That seems really interesting to be and then if I understood that I probably would be making a lot more money. 

[0:35:32.6] BM: Well it is simple really. There were huge people process at Google that access gatekeeper for a lot of these stuff. So, I have never worked in Google. I have no intrinsic knowledge of Google or have talked to anyone who has given me this insight, this is all speculation disclaimer over. But you can actually run a big cluster that if you can actually prove that you have network and memory and CPU isolation between containers, which they can in certain cases and certain things that can do this. 

What you can do is you can use your people process and your approvals to make sure that software gets to where it needs to be. So, you can still play on the same clusters but we have great handles on network that you can’t talk to these networks or you can’t use this much network data. We have great things on CPU that this CPU would be a PCI data. We will not allow it unless it’s tied to CPU or it is PCI. Once you have that in place, you do have a lot more flexibility. But to do that, you will have to have some pretty complex approval structures and then software to back that up. 

So, the burden on it is not on the normal developer and that is actually what Google has done. They have so many tools and they have so many processes where if you use this tool it actually does the process for you. You don’t have to think about it. And that is what we want our developers to be. We want them to be able to use either our networking libraries or whenever they are building their containers or their Kubernetes manifest, use our tools and we will make sure based on either inspection or just explicit settings that we will build something that is as secure as we can given the inputs.

And what I am saying is hard and it is capital H hard and I am actually just pitting where we want to be and where a lot of us are not. You know most people are not there. 

[0:37:21.9] NL: Yeah, it would be nice if we had like we said earlier like more tooling around security and the processes and all of these things. One thing I think that people seem to balk on or at least I feel is developing it for their own use case, right? It seems like people want an overarching tool to solve all the use cases in the world. And I think with the rise of cloud native applications and things like container orchestration, I would like to see people more developing for themselves around their own processes, around Kubernetes and things like that. 

I want to see more perspective into how people are solving their security problems, instead of just like relying on let’s say like HashiCorp or like Aqua Sec to provide all the answers like I want to see more answers of what people are doing. 

[0:38:06.5] BM: Oh, it is because tools like Vault are hard to write and hard to maintain and hard to keep correct because you think about other large competitors to vault and they are out there like tools like CyberArk. I have a secret and I want to make sure only certain will keep it. That is a very difficult tool but the HashiCorp advantage here is that they have made tools to speak to people who write software or people who understand ops not just as a checkbox. 

It is not hard to get. If you are using vault it is not hard to get a secret out if you have the right credentials. Other tools is super hard to get the secret out if you even have the right credential because they have a weird API or they just make it very hard for you or they expect you to go click on some gooey somewhere. And that is what we need to do. We need to have better programming interfaces and better operator interfaces, which extends to better security people are basis for you to use these tools. 

You know I don’t know how well this works in practice. But the Jeff Bezos, how teams at AWS or Amazon or forums, you know teams communicate on API and I am not saying that you shouldn’t talk, but we should definitely make sure that our API’s between teams and team who owns security stuff and teams who are writing developer stuff that we can talk on the same level of fidelity that we can having an in person conversation, we should be able to do that through our software as well. 

Whether that be for asking for ports or asking for our resources or just talking about the problem that we have that is my thought-leadering answer to this. This is “Bryan wants to be a VP of something one day” and that is the answer I am giving. I’m going to be the CIO that is my CIO answer. 

[0:39:43.8] DC: I like it. So cool. 

[0:39:45.5] BM: Is there anything else on this subject that we wanted to hit?

[0:39:48.5] NL: No, I think we have actually touched on pretty much everything. We got a lot out of this and I am always impressed with the direction that we go and I did not expect us to go down this route and I was very pleased with the discussion we have had so far. 

[0:39:59.6] DC: Me too. I think if we are going to explore anything else that we talked about like you know, get it more into that state where we are talking about like that we need more feedback loops. We need people developers to talk to security people. We need security people talk to developers. We need to have some way of actually pushing that feedback loop much like some of the other cultural changes that we have seen in our industry are trying to allow for better feedback loops and other spaces.

And you’ve brought up dev spec ops which is another move to try and open up that feedback loop but the problem I think is still going to be that even if we improved that feedback loop, we are at an age where – especially if you ended up in some of the larger organizations, there are too many applications to solve this problem for and I don’t know yet how to address this problem in that context, right? 

If you are in a state where you are a 20-person, 30-person security team and your responsibility is to secure a platform that is running a number of Kubernetes clusters, a number of Vsphere clusters, a number of cloud provider implementations whether that would be AWS or GC, I mean that is a set of problems that is very difficult. It is like I am not sure that improving the feedback loop really solves it. I know that I helps but I definitely you know, I have empathy for those folks for sure. 

[0:41:13.0] CC: Security is not my forte at all because whenever I am developing, I have a narrow need. You know I have to access a cluster.I have to access a machine or I have to be able to access the database. And it is usually a no brainer but I get a lot of the issues that were brought up. But as a builder of software, I have empathy for people who use software, consume software, mine and others and how can’t they have any visibility as far as security goes? 

For example, in the world of cloud native let’s say you are using Kubernetes, I sort of start thinking, “Well, shouldn’t there be a scanner that just lets me declare?” I think I am starting an episode right now –should there be a scanner that lets me declare for example this node can only access this set of nodes like a graph. But you just declare and then you run it periodically and you make sure of course this goes down to part of an app can only access part of the database. 

It can get very granular but maybe at a very high level I mean how hard can this be? For example, this pod can only access that pods but this pod cannot access this name space and just keep checking what if the name spaces changes, the permission changes. Or for example would allow only these answers can do a backup because they are the same users who will have access to the restore so they have access to all the data, you know what I mean? Just keep checking that is in place and it only changes when you want to. 

[0:42:48.9] BM: So, I mean I know we are at the end of this call and I want to start a whole new conversation but this is actually is why there are applications out there like Istio and Linkerd. This is why people want service meshes because they can turn off all network access and then just use the service mesh to do the communication and then they can use, they can make sure that it is encrypted on both sides and that is a honey cave on all both sides. That is why this is operated. 

[0:43:15.1] CC: We’ll definitely going to have an episode or multiple on service mesh but we are on the top of the hour. Nick, do your thing. 

[0:43:23.8] NL: All right, well, thank you so much for joining us on another interesting discussion at The Kubelets Podcast. I am Nicholas Lane, Duffie any final thoughts? 

[0:43:32.9] DC: There is a whole lot to discuss, I really enjoyed our conversations today. Thank you everybody. 

[0:43:36.5] NL: And Bryan? 

[0:43:37.4] BM: Oh it was good being here. Now it is lunch time. 

[0:43:41.1] NL: And Carlisia. 

[0:43:42.9] CC: I love learning from you all, thank you. Glad to be here. 

[0:43:46.2] NL: Totally agree. Thank you again for joining us and we’ll see you next time. Bye. 

[0:43:51.0] CC: Bye. 

[0:43:52.1] DC: Bye. 

[0:43:52.6] BM: Bye. 

[END OF EPISODE]

[0:43:54.7] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
