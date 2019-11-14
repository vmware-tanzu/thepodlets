---
episode_id: 003-why-api-contracts-are-important
episode_number: 3
title: Why Contracts Are Important
description: In this episode of the Podlets Podcast, we are diving into contracts and some of the building blocks of the Cloud-Native application. 
notes: In this episode of the Podlets Podcast, we are diving into contracts and some of the building blocks of the Cloud-Native application. The focus is on the importance of contracts and how API's help us and fit into the cloud native space. We start off by considering the role of the API at the center of a project and some definitions of what we consider to be an API in this sense. This question of API-first development sheds some light onto Kubernetes and what necessitated its birth. We also get into picking appropriate architecture according to the work at hand, Kubernetes' declarative nature and how micro-services aid the problems often experienced in more monolithic work. The conversation also covers some of these particular issues, while considering possible benefits of the monolith development structure. We talk about company structures, Conway's Law and best practices for avoiding the pitfalls of these, so for all this and a whole lot more on the subject of API's and contracts, listen in with us, today!
# related: # appears in sidebar, no limit in related episodes. identify by `episode_id`
# - 001-cloud-native
---

EPISODE 03

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.2] D: Good afternoon everybody, my name is Duffy and I’m back with you this week. We also have Josh and Carlisia and a new member of our cast, Patrick Barker.

[0:00:49.4] PB: Hey, I’m Patrick, I’m an upstream contributor to Kubernetes. I do a lot of stuff around auditing.

[0:00:54.7] CC: Glad to be here. What are we going to talk about today?

[0:00:57.5] D: This week, we’re going to talk about some of the building blocks of a cloud native application. This week we’re going to kind of focus on contracts and how API’s kind of help us and why they’re important to cloud native ecosystem. Usually, with these episodes, we start talking about the problem first and then we kind of dig into why this particular solution, something like a contract or an API is important. 

And so, to kind of kick that of, let’s talk about maybe this idea of API-first development and why that’s important. I know that Josh and Patrick both and Carlisia have all done some very interesting work in this space as far as developing your applications with that kind of a model in mind. Let’s open the floor. 

[0:01:34.1] PB: It’s critical to build API-centric. When you don’t build API-centric, most commonly, you’ll see a cross ecosystem building UI centric, it’s very tempting to do this sort of thing because UI’s are visually enticing and they’re kind of eye candy. But when you don’t go to API-centric and you go that direction, you kind of miss the majority of use cases down the line which are often around an SCK, just ended up being more often than not the flows that are the most useful to people but they’re kind of hard to see it to be getting. 

I think going and saying we’re building a product API-first is really saying, we understand that this is going to happen in the future and we’re making this a principle early, we’re going to enforce these patterns early, so that we develop a complete product that could be used in many fashions.

[0:02:19.6] J: I’ve seen some of that in the past as well working for a company called Nicera, which is a network virtualization company. We really focused on providing an API that would be between you and your network infrastructure and I remember that being really critical that we define effectively what would be the entire public API for that product out in front and then later on, we figured out what obviously to learn this semantics of that sort, to be able to build a mental model around what that API might be, that’s where the UI piece comes in. 

That was an interesting experiment and like, we ended up actually kind of creating what was the kind of creating what was kind of the – an early version of the Swagger UI in which you basically had a UI that would allow you to explore and introspect and play with, all of those different API objects but it wasn’t a UI in the sense that you know, it had like a constrained user story that was trying to be defined, that was my first experience where I was working with a product that had an API-first model.

[0:03:17.0] CC: I had to warm up my brain, I think about why do we build API’s to begin with before I could think why API-first is of a benefit and where the benefits are. And I actually looked up something today and it’s this Jeff Bezos mandate, I had seen this before, right? I mean, why do we view the API’s? API what you’re talking about is data transfer, right? Taking data from over here and sending it over there or you’re making that available so somebody can fetch it. 

It’s communication. Why do we build API? To make it easier to do that so you can automate, you can expose it, you can gate it with some security, right? Authentication, all of those things and with every increasing amount of data, this becomes more and more relevant and I think when Patrick was saying, when you do it API first, you’re absolutely focusing on making it all of those characteristics a priority, making that work well. 

If you want to make it pretty, okay, you can take that data in. Transforming some other way to make your presentation pretty, to display on the mobile device or whatever.

[0:04:26.4] PB: Yeah, I think another thing with inserting the API design upfront in the software development lifecycle, at least in my experience has been – it allows you to sort of gather feedback from who your consumers will be early on before you worry about the intricacies of all the implementation details, right?

I guess with Nicera’s instant stuff, I wonder when you all made that contract, were you pushing out a Swagger UI or just general API documentation before you had actually implemented the underlying pieces or did that all happen together?

[0:04:58.1] D: With an API-first, we didn’t build out the UI until after the fact so even to the point where we would define a new object in that API, like a distributed logical router for example. We would actually define that API first and we would have test plants for it and all of that stuff and t hen we would surface it in the UI part of it and that’s a great point.

I will say that it is probably to your benefit in the long run to define what all of the things that you’re going to be concerned with are out front. And if you can do that tin a contractual basis, whether that contract is represented by an API or whether that contract is represented by a data model, it’s critical that you have some way of actually defining exactly what that is so that you can also support things like versioning and being able to actually modify that contract as you move forward.

[0:05:45.0] PB: I think another important piece here, too, is when you just look at the data model and the concepts, you focus on those first, you have a tendency to more decompose the problem, right? You start to look at things and you break it down better into individual pieces that combine better and you end up with more use cases and you end up with a more useable API.

[0:06:03.2] D: That’s a good point. Yeah, I think one of the key parts of this contract is kind of like what you’re trying to solve and it’s always important, you know? I think that, when I talk about API-first development, it is totally kind of in line with that, you have to kind of think about what all the use cases are and if you’re trying to develop a contract that might satisfy multiple use cases, then you get this great benefit of thinking of it as you can kind of collapse a lot of the functionality down into a more composable API, rather than having to solve each individual use cases and kind of a myopic way.

[0:06:34.5] CC: Yeah, it’s the concept of reusability, having the ability of making things composable, reusable.

[0:06:40.7] D: I think we probably all seen UI’s that gets stuck in exactly that pattern, to Patrick’s point. They try to solve the user story for the UI and then on the backend, you’re like, why do we have two different data models for the same object, it doesn’t make sense. We have  definitely seen that before.

[0:06:57.2] PB: Yeah, I’ve seen that more times than not, it takes a lot of discipline to really build a UI or an API, you know, first to focus on those pieces first – it’s so tempting to go right to the UI because you get these immediate results and everyone’s like – you really need to bring that back, it takes discipline to focus on the concepts first but it’s just so important to do.

[0:07:19.5] CC: I guess it really depends on what you are doing too. I can see all kinds of benefits for any kind of approach. But I guess, one thing to highlight is that different ways of doing it, you can do a UI-first, presentation first, you can do an API-first and you can do a model-first so those are three different ways to approach the design and then you have to think well, what I’m saying is, you shouldn’t do one just because you don’t know how to do the others, you should really look into what will serve you better.

[0:07:49.4] J: Yeah, with a lot of this talk about API’s and contracts, obviously in software, there’s many levels of contracts we potentially work on, right? There’s the higher level, potential UI stuff and sometimes there’s a lower level pieces with code. Perhaps if you all think it’s a good idea, we could start with talking about what we consider to be an API in the cloud native space and what we’re referring to.

A lot of the API’s we’ve described so far, if I heard everyone correctly, they sounded like they were more so API, as describing perhaps a web service of sorts, is that fair?

[0:08:18.8] PB: That’s an interesting point to bring up. I’m definitely describing the consumption model of a particular service. I’m referring to that contract as an infrastructure guy, I want to be able to consume an API that will allow me to model or create infrastructure. I’m thinking of it from that perspective. 

If AWS didn’t have an API, I probably wouldn’t have adopted it, like the UI is not enough to do this job, either, like I need something that I could tie to better abstractions, things like terraform and stuff like that. I’m definitely kind of picturing it from that perspective. 

But I will add one other interesting point to this which is that in some cases, to Josh’s point, these things are broken up into public and private API’s, that might be kind of interesting to dig into. Why you would model it that way. There are certainly different interactions between composed services that you’re going to have to solve for. It’s an interesting point.

[0:09:10.9] CC: Let’s hold that thought for a second. We are acknowledging that there are public and private API’s and we could talk about why their services work there. Other flavors of API’s also, you can have for example, a web service type of API and you can have a command line API, right? You can see a line on top of a web service API which is the crazy like, come to mind, Kubernetes but they have different shapes and different flavors even though they are accessing pretty much the same functionality.

You know, of course, they have different purposes and you have to see a light and another one, yet, is the library so in this case, you see the calls to library which calls the web service API but like Duffy is saying, it’s critical sometimes to be able to have this different entry points because each one has its different advantages like a lot of times, it’s way faster to do things on the command line than it is to be a UI interface on the web that would access that web API which basically, you do want to have. Either your Y interface or CLA interface for that.

[0:10:21.5] PB: What’s interesting about Kubernetes too and what I think they kind of introduced and someone could correct me if I’m wrong but is this kid of concept of a core generative type and in Kubernetes, it ends up being this [inaudible]. From the [inaudible], you’re generating out the web API and the CLI and the SCK and they all just come from this one place, it’s all code gen out of that. 

Kubernetes is really the first place I’ve seen do that but it’s really impressive model because you end up with this nice congruence across all your interfaces. It just makes the product really rockable, you can understand the concepts better because everywhere you go, you end up with the same things and you’re interacting with them in the same way.

[0:11:00.3] D: Which is kind of the defining of type interface that Kubernetes relates to, right?

[0:11:04.6] PB: Obviously, Kubernetes is incredibly declarative and we could talk a bit about declarative versus imperative, almost entirely declarative. You end up with kind of a nice, neat clear model which goes out to YAML and you end up a pretty clean interface.

[0:11:19.7] D: If we’re going to talk about just the API as it could be consumed by other things. I think we’re kind of talking a little bit about the forward facing API, this is one of those things that I think Kubernetes does differently than pretty much any other model that I’ve seen. In Kubernetes, there are no hidden API’s, there’s not private API. 

Everything is exposed all the time which is fascinating. Because it means that the contract has to be solid for every consumer, not just the ones that are public but also anything that’s built on the back end of Kubernetes, the Kublet, controller manager, all of these pieces are going to be accessing the very same API that the user does.

I’ve never seen another application built this way. In most applications, what I see is actually that they might define an API between particular services that you might have a contract between those particular services. Because this is literally — to Carlisia’s point, in most of the models that I’ve seen API’s are contract written, this is about how do I get data or consume data or interact with data, between two services and so there might be a contract between that service and all of its consumers, rather than between the course or within all of the consumers.

[0:12:21.7] D: Like you said, Kubernetes is the first thing I’ve seen that does that. I’m pulling an API right now, there’s a strong push of internal API’s for it. But we’re building on top a Kubernetes product and it’s so interesting how they’ve been able to do that, where literally every API is public and it works well, there really aren't issues with it and I think it actually creates a better understanding of the underlying system and more people can probably contribute because of that.

[0:12:45.8] J: On that front, I hope this is a good segue but I think it would be really interesting to talk about that point you made Patrick, around declarative versus imperative and how the API we’re discussing right now with Kubernetes in particular, it’s almost entirely declarative. Could you maybe expand on that a bit and compare the two?

[0:13:00.8] PB: It’s interesting thing that Kubernetes has really brought to the forefront – I don’t know if there’d be another notable declarative API be terraform. This notion of you just declare state within a file and in some capacity, you just apply that up to a server and then that state is acted on by a controller and it brings us straight to fruition. 

I mean, that’s almost indicative of Kubernetes at this point I think. It’s so ingrained into the product and it’s one of the first things to kind of do that and that it’s almost what you think of when you think of Kubernetes. And with the advent of CRD’s and what not, that’s now, they want to be extended out to really in the use case you would have, that would fit this declarative pattern of just declaring to say which it turns out there’s a ton of use cases and that’s incredibly useful.

Now, they’re kind of looking at, in core Kubernetes, could we add imperative functionality on top of the declarative resources, which is interesting too. They’re looking at that for V2 now because there are limitations, there are some things that just do fit in to declarative pattern perfectly that would fit just the standard rest.

You end up some weird edges there. As they’re going towards V2, they’re starting to look at could we mix imperative and declarative, which is and even maybe more interesting idea if you could do that right.

[0:14:09.3] CC: In the Kubernetes world, what would that look like? 

[0:14:11.3] PB: Say you have an object that just represents something like on FOO, you have a YAML file and you're declaring FOO to be some sort of thing, you could apply that file and then now that state exist within the system and things noticed that that state of change that they’re acting on that state, there are times when you might want that FOO to have another action.

Besides just applying states, you may want it to have some sort of capability on top of the point, let’s say, they’re quite a few use cases that come in where that turns into a thing. It’s something to explore, it’s a bit of a Pandora’s box if you will because where does that end. Kubernetes is kind of nice that it does enforce constraints at this core level and it produces these really kind of deep patterns within the system that people will find kind of easy to understand at least at a high level.

Granted, you go deep into it, it gets highly complex but enforcing like name spaces as this concept of just a flat name space with declarative resources within it and then declarative resources themselves just being confined to the standard rest verbs, is a model that people I think understand well. I think this is part of the success for Kubernetes is just that people could get their hands around that model. It’s also just incredibly useful.

[0:15:23.7] D: Another way to think about this is like, you probably seen articles out there that kind of describe the RESTful model and talking about whether REST can be transactional. Let’s talk a little bit about what that means. I know the implementation of an API pattern or an interface pattern might be. That the client sends information to the server and that the server locks that client connection until it’s able to return the result, whatever that result is.

Think of this, in some ways, this is very much like a database, right? As a client of a database, I want to insert a row into a database, the database will lock that row, it will lock my connection, it will insert that row and it will return success and in this way, it’s synchronous, right? It’s not trying to just accept the change, it just wants to make sure that it returns to a persisted that change to the database before, letting go of the connection.

This pattern is probably one of the most common patterns in interfaces in the world like it is way super common. But it’s very different than the restful pattern or some of the implementations of a restful pattern. In which what we say, especially in this declarative model, right? In a declarative model, the contract is basically, I’m going to describe a thing and you're going to tell me when you understand the thing I want to describe.

It’s asynchronous. For example, if I were interacting with Kubernetes and I said, cube kettle create pod, I would provide the information necessary to define that pod declaratively and I would get back from the API server 200 okay, pod has been accepted. It doesn’t mean to it's been created. It means it’s been accepted as an object and persisted to disk. Now, to understand from a declarative perspective, where I am in the life cycle of managing that pod object, I have to query that API again.

Hey, this pod that I ask you to make, are you done making it and how does this work and where are you in that cycle of creating that thing? This is where I like within Kubernetes, we have the idea of a speck which defines all of the bits that are declaratively described and we have the idea of a status which describes what we’ve been up to around that declarative object and whether we’ve actually successfully created it or not.

I would argue that from a cloud native perspective that declarative model is critical to our success. Because it allows us to scale and it allows us to provide an asynchronous API around those objects that we’re trying to interact with and it really changes the game as far as like, how we go about implementing those inputs.

[0:17:47.2] CC: This is so interesting, it was definitely a mind bender for me when I started developing against Kubernetes. Because what do you mean you’ve returned the 200 okay, and the thing is not created yet. When does it get created? It’s not hard to understand but I was so not used to that model. I think it gives us a lot of control. So it is very interesting that way and I think you might be right, Duffy, that it might be critical to the success of native apps because it is always like the way I am thinking about it right now just having heard you is almost like with all the models, let’s say you are working with a database in that transactional system. 

The data has be inserted and that system decides to retry or not once the transaction is complete as we get a result back. With a Kubernetes model or cloud native model, I don’t know what, which is both a proper things to say, the control is with us. We send the request, Kubernetes is going to do its thing, which allows us to move on too, which is great, right? Then I can check for the result, when I want to check and then I can decide what to do with the results when I want to do anything with it if it all, I think it gives us a lot more control as developers. 

[0:19:04.2] D: Agreed. And I think another thing that has stuck in my head around this model whether it would be declared over imperative is that I think that Go Lang itself has actually really enabled us to adopt that asynchronous model around things that threads are first class, right? You can build a channel to handle each individual request, that you are not in this world where all transactions have to stop until this one is complete and then we’ll take the next one out of queue and do that one. 

We're no longer in that kind of a queue model, we can actually handle these things in parallel quite a bit more. It makes you think differently when you are developing software. 

[0:19:35.9] J: It’s scary too that you can check this stuff into a repo. The advent of Git Ops is almost parallel to the advent of Kubernetes and Terra Form and that you can now have this state that is source controlled and then you just apply it to the system and it understands what to do with it and how to put all of the pieces together that you gave it, which is a super powerful model. 

[0:19:54.7] D: There is a point to that whole asynchronous model. It is like the idea of the API that has a declarative or an imperative model and this is an idea and distributed system that is [inaudible]. It is like edge triggering or level triggering but definitely recommend looking up this idea. There is a great article on it on Hack Noon and what they highlight is that the pure abstract perspective there is probably no difference between edge and level triggering. 

But when you get down to the details especially with distributed systems or cloud native architectures, you have to take into account the fact that there is a whole bunch of disruption between your services pretty much all the time and this is the challenge of distributed systems in general, when you are defining a bunch of unique individual systems that need to interact and they are going to rely on an unreliable network and they are going to rely on unreliable DNS. 

And they’re going to rely on all kinds of things that are going to jump in the way of between these communication models. And the question becomes how do you build a system that can be resilient to those interruptions. The asynchronous model absolutely puts you in that place, where if you are in that situation wherein you say, “Create me a pod.” And that pod object is persisted and now you can have something else to do the work that will reconcile that declared state with the actual state until it works. 

It will just keep trying and trying and trying until it works. In other models, you basically say, “Okay, well what work do I have to do right now and I have to focus on doing this work until it stops.” What happens if the process itself dies? What happens if any of the interruptions that we talk about happen? Another good example of this is the Kafka model versus something like a watch on etcd, right? In Kafka, you have these events that you are watching for. 

And if you weren’t paying attention when that event went by, you didn’t get that event. It is not still there. It is gone now whereas like with etcd and models like that, what you are saying is I need to reconcile my expectancy of the world with what the desired thing is. And so I am no longer looking for events. I am looking for a list of work that I have to reconcile to, which is a very different model for these sorts of things. 

[0:21:47.9] J: In Kubernetes, it becomes the informer pattern. If you all don’t know, which is basically at the core of the informer is just this concepts of list and watch where you are just watching for changes but every so often you list as well in case you missed something. I would argue that that pattern is so much more powerful than the Kafka model you’re just going to skin as well because like you mentioned, if you missed an event in Kafka somehow, someway is very difficult to reconcile that state. 

Like you mentioned, your entire system can go down in a level set system. You bring it back up and because it is level set, everything just figures itself out, which is a lot nicer than your entire system going down in an edge-based system and trying to figure out how to put everything back together yourself, which is not a fun time, if you have ever done it. 

[0:22:33.2] D: These are some patterns in the contracts that we see in the cloud native ecosystem and so it is really interesting to talk about them. Did you have another point Josh around API’s and stuff? 

[0:22:40.8] J: No, not in particular. 

[0:22:42.2] D: So I guess we give into like what some of the forms of these API’s to talk about. We could talk about RESTful API’s versus to TIPC-based API’s or maybe even just interfaces back and forth between modular code and how that helped you architect things. 

One of the things I’ve had conversations with people around is we spend a lot of our time conditioning our audience when in cloud native architecture to the idea that monliths are bad, bad, bad and they should never do them. And that is not necessarily true, right? And I think it is definitely worth talking through like why we have these different opinions and what they mean. 

When I have that conversation with customers, frequently a monolith makes sense because as long as you’re able to build modularity into it and you are being really clear about the interfaces back and forth between those functions with the idea that if you have to actually scale traffic to or from this monolith. If the function that you are writing needs to be effectively externalized in such a way that can handle an amount of work that will surpass what the entire monolith can handle. 

As long as you are really clear about the contract that you are defining between those functions then later on, when it comes to a time to externalize those functions and embrace kind of a more microservices based model mainly due to traffic reload or any of the other concerns that kind of drive you toward a cloud native architecture, I think you are in a better spot and this is definitely one of the points of the contract piece that I wanted to raise up. 

[0:24:05.0] CC: I wonder though how hard it is for people to keep that in mind and follow that intention. If you have to break things into micro services because you have bottlenecks in your monolith and maybe have to redo the whole thing, once you have the micro services, you have gone through the exercise of deciding, you know this goes here, these goes there and once you have the separate modules it is clear where they should go. 

But when you have a monolith it is so easy to put things in a place where they shouldn’t be. It takes so much discipline and if you are working on a team that is greater than two, I don’t know. 

[0:24:44.3] PB: There are certain languages that lend themselves to these things like when you are writing Java services or there are things where it is easy to — when writing even quickly, rapidly prototyping an application that has multiple functions to be careful about those interfaces that you are writing, like Go because it is a strongly type language kind of forces you into this, right? There are some other languages that are out that make it difficult to be sloppy about those interfaces. 

And I think that is inherently a good thing. But to your point like you are looking at some of the larger monoliths that are out there. It is very easy to fall into these patterns where instead of an asynchronous API or an asynchronous interface, you have just a native interface and you are a asynchronous interface in which you expect that I would be able to call this functional and put something in there. I will get the result back and that is a pattern for monoliths. Like that is how we do it in monoliths. 

[0:25:31.8] CC: Because you say in there also made me think of the Conway’s Law because when we separate these into micro services and I am not saying micro services is right for everything for every team and every company. But I am just saying if you are going through that exercise of separating things because you have bottlenecks then maybe in the future you have to put them elsewhere. Externalize them like you said. 

If you think if the Conway’s Law if you have a big team, everybody working on that same monolith that is when things are in depth in the place that they shouldn’t be. The point of micro services is not just to technically separate things but to allow people to work separately and that inter-team communication is going to be reflected in the software that they are creating but because they are forced to communicate and hopefully they do it well that those micro services should be well-designed but if you have a monolith and everyone working on the same project, it gets more confusing. 

[0:26:31.4] D: Conway’s Law as an overview is basically that an organization will build software and laid out similar to the way the thought musician itself is architected. So if everybody in the entire company is working on one thing and they are really focused on doing that one thing, you’d better build a monolith. If you have these groups that are disparate and are really focused on some subset of work and need to communicate with each other to do that thing then you are going to build something more similar or maybe more capable as a micro service. 

That is a great point. So actually one of the things about [inaudible] that I found so fascinating with it, it would be a 100 people and we were everywhere. So communication became a problem that absolutely had to be solved or we wouldn’t be able to move forward as a team. 

[0:27:09.5] J: An observation that I had in my past life helping folks, breaking apart Java monoliths like you said Duffy, assume they had really good interfaces and contracts right? And that made it a lot easier to find the breaking points for their API’s to pull those API’s out into a different type of API. They went from this programmatic API, that was in the JBM where things were just intercommunicating to an API that was based on a web service. 

And an interesting observation I oftentimes found was that people didn’t realize that in removing complexity from within the app to the network space that oftentimes caused a lot of issues and I am not trying to down API’s because obviously we are trying to talk about the benefits of them but it is an interesting balancing act. Oftentimes when you are working with how to decouple a monolith, I feel like you actually can go too far with it. It can cause some serious issues. 

[0:27:57.4] D: I completely agree with that. That is where I wanted to go with the idea of why we say that building a monolith is bad and like with the challenges of breaking those monoliths apart later. But you are absolutely right. When you are going to introduce the wild chaos that is a network between your services, are you going to externalize functions and which means that you have to care a lot more about where you store a state because that state is no longer shared across all of the things. 

It means that you have to be really super careful about how you are modeling that. If you get to the point where this software that you built that is a monolith that is wildly successful and all of its consumers are networked based, you are going to have to come around on that point of contracts. Another thing that we haven’t really talked on so much is like we all agree that maybe like an API for say the consumer model is important. 

We have talked a little bit about whether private API’s or public API’s make sense. We described one of the whacky things that Kubernetes does, which is that there are no private API’s. It is all totally exposed all the time. I am sure that all of us have seen way more examples of things that do have a private API mainly because perhaps the services are trained. Service A always fact to service B. Service B has an API that it may be a private API. 

You are never going to expose to your external customers only to service A or to consumers of that internal API. One of the other things that we should talk about is when you are starting to think about these contracts. One of the biggest and most important bits is how you handle the lifecycle of those API’s, as they change right? Like I say add new features or functionality or as I deprecate old features and functionality, what are my concerns as it relates to this contract. 

[0:29:33.5] CC: Tell me and take my money. 

[0:29:37.6] D: I wish there was like a perfect answer. But I am pretty convinced that there are no perfect answers. 

[0:29:42.0] J: I spent a lot of time in the space recently and I have researched it for like a month or so and honestly, there are no perfect answers to try to version an API. Every single on of them has horrible potential consequences to it. The approach Kubernetes took is API evolution, where basically all versions of the API have to be backwards compatible and they basically all translate to what is an internal type in Kubernetes and everything has to be translatable back to that. 

This is nice for reasons. It is also very difficult to deal with at times because if you add things to an API, you can’t really every remove them without a massive amount of deprecation effort basically moderating the usage of that API specifically and then somehow deprecating it. It is incredibly challenging. 

[0:30:31.4] PB: I think it is 1-16 in which they finally turn off a lot of the deprecated API’s that Kubernetes had. So a lot of this stuff that has been moved for some number of versions off to different spaces for example deployments used to be extensions and now they are in apps. They have a lot of these things. Some of the older API’s are going to be turned off by default in 1-16 and I am really interested to see how this plays out you know from kind of a chaos level perspective. 

But yeah you’re right, it is tough. Having that backwards compatibility definitely means that the contract is still viable for your customers regardless of how old their client side looks like but this is kind of a fingernail problem, right? You are going to be in a situation where you are going to be holding those translations to that stored object for how many generations before you are able to finally get rid of some of those old API’s that you’ve have obviously moved on from. 

[0:31:19.6] CC: Deprecating an end point is not reviewed at all and ideally like better with, you would be able to monitor the usage of the end point and see as you intend deprecating is the usage is going lower and if there is anything you can do to accelerate that, which actually made me think of a question I have for you guys because I don’t know the answer to this. 

Do we have access to the end points usage, the consumption rate of Kubernetes end points by any of the cloud service providers? It would be nice if we did. 

[0:31:54.9] D: Yeah, there would be no way for us to get that information right? The thing about Kubernetes is something that you are going to run on your own infrastructure and there is no phone home thing like that. 

[0:32:03.9] CC: Yeah but the cost providers could do that and provide us a nice service to the community. 

[0:32:09.5] D: They could that is a very good point.

[0:32:11.3] PB: [inaudible] JKE, it could expose some of the statistics around those API end points. 

[0:32:16.2] J: I think the model right now is they just ping the community and say they are deprecating it and if a bunch of people scream, they don’t. I mean that is the only way to really know right now. 

[0:32:27.7] CC: The squeaky wheels get the grease kind of thing.

[0:32:29.4] J: Yeah. 

[0:32:30.0] D: I mean that is how it turns out. 

[0:32:31.4] J: In regarding versioning, taking out of Kubernetes for a second, I also think this is one of the challenges with micro service architectures, right? Because now you have the ability to independently deploy a service outside of the whole monolith and if you happen to break something that cracks contractually you said you would and people just didn’t pay attention or you accidentally broke it not knowing, it can cause a lot of rift in a system. 

So versioning becomes a new concern because you are no longer deploying a massive system. You are deploying bits of it and perhaps versioning them and releasing them at different times. So again, it is that added complexity. 

[0:33:03.1] CC: And then you have this set of versions talk to this set of versions. Now you have a matrix and it is very complicated. 

[0:33:08.7] PB: Yeah and you do somewhat have a choice. You can’t have each service independently versioned or you could go with global versioning, where everything within V1 could talk to everything else than V1. But it's an interesting point around breakage because tools like GRPC kind of enforce you to where you cannot break the API, through just how the framework itself is built and that’s why you see GRPC in a lot of places where you see micro services just because it helps get the system stable. 

[0:33:33.1] D: Yeah and I will call back to that one point again, which I think is actually one of Josh’s points. If you are going to build multiple services and you are building an API between them then that means the communication path might be service A to service B and service B to service A. You are going to build this crazy mesh in which you have to define an API in each of these points to allow for that consumption or that interaction data. 

And one of the big takeaways for me in studying the cloud native ecosystem is that if you could define that API and that declarative state as a central model to all of your services then you can flip this model on its head instead of actually trying to define an API between in front of a service. You can make that service a consumer of a centralized API and now you have one contract to right and one contract to standby and all of those things that are going to do work are going to pull down from that central API. 

And do the work and put back into that central API the results, meaning that you are flipping this model on its head. You are no longer locking until service B can return the result to you. You are saying, “Service B here is a declarative state that I want you to accomplish and when you are done accomplishing it, let me know and I will come back for the results,” right? And you could let me know in an event stream. You can let me know by updating a status object that I am monitoring. 

There’s lots of different ways for you to let me know that service B is done doing the work but it really makes you think about the architecture of these distributed systems. It is really one of the big highlights for me personally when I look at the way that Kubernetes was architected. Because there are no private API’s. Everything talks to the API server. Everything that is doing work regardless of what data it’s manipulating but it is changing or modifying. It has to adhere to that central contract. 

[0:35:18.5] J: And that is an interesting point you brought up is that Kubernetes in a way is almost a monolith, in that everything passes through the API server, all the data leaves in this central place but you still have those distributed nature too, with the controllers. It is almost a mix of the patterns in some ways. 

[0:35:35.8] D: Yeah, I mean thanks for the discussion everybody that was a tremendous talk on contracts and API’s. I hope everybody got some real value out of it. And this is Duffy signing off. I will see you next week. 

[0:35:44.8] CC: This is great, thank you. 

[0:35:46.5] J: Cheers, thanks. 

[0:35:47.8] CC: Bye. 

[END OF INTERVIEW]

[0:35:49.2] ANNOUNCER: Thank you for listening to the Podlets Cloud Native Podcast. Find us on Twitter @thepodlets and on the Podlets.io website where you will find transcripts and show notes. We’ll be back next week. Stay tuned by subscribing. 

[END]

