---
episode_id: 009-stateful-and-stateless-workloads 
episode_number: 9
title: Stateful and Stateless Workloads 
description: The purpose of today’s show is coming to a deeper understanding of the meaning of ‘stateful’ versus ‘stateless’ apps, and how they relate to the cloud native environment. We cover some definitions of ‘state’ initially and then move to consider how ideas of data persistence and co-ordination across apps complicate or elucidate understandings of ‘stateful’ and ‘stateless’. We then think about the challenging practice of running databases within Kubernetes clusters, which effectively results in an ephemeral system becoming stateful. You’ll then hear some clarifications of the meaning of operators and controllers, the role they play in mediating and regulating states, and also how important they are in a rapidly evolving but skills-scarce environment.  
notes: This week on The Podlets Cloud Native Podcast we have Josh, Carlisia, Duffie, and Nick on the show, and are also happy to be joined by a newcomer, Brian Liles, who is a senior staff engineer at VMWare! The purpose of today’s show is coming to a deeper understanding of the meaning of ‘stateful’ versus ‘stateless’ apps, and how they relate to the cloud native environment. We cover some definitions of ‘state’ initially and then move to consider how ideas of data persistence and co-ordination across apps complicate or elucidate understandings of ‘stateful’ and ‘stateless’. We then think about the challenging practice of running databases within Kubernetes clusters, which effectively results in an ephemeral system becoming stateful. You’ll then hear some clarifications of the meaning of operators and controllers, the role they play in mediating and regulating states, and also how important they are in a rapidly evolving but skills-scarce environment. Another important theme in this conversation is the CAP theorem or the impossibility of consistency, availability and partition tolerance all at once, but the way different databases allow for different combinations of two out of the three. We then move on to chat about the fundamental connection between workloads and state and then end off with a quick consideration about how ideas of stateful and stateless play out in the context of networks. Today’s show is a real deep dive offering perspectives from some the most knowledgeable in the cloud native space so make sure to tune in!
hosts: 
    - name: Carlisia Thompson
      url: https://twitter.com/carlisia
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Nicholas Lane
      url: https://twitter.com/apinick
points:
    - What ‘stateful’ means in comparison to ‘stateless’.
    - Understanding ‘state’ as a term referring to data which must persist.
    - Examples of stateful apps such as databases or apps that revolve around databases.
    - The idea that ‘persistence’ is debatable, which then problematizes the definition of ‘state’.     
    - Considerations of the push for cloud native to run stateless apps.
    - How inter-app coordination relates to definitions of stateful and stateless applications.
    - Considering stateful data as data outside of a stateless cloud native environment.
    - Why it is challenging to run databases in Kubernetes clusters.
    - The role of operators in running stateful databases in clusters.
    - Understanding CRDs and controllers, and how they relate to operators.
    - Controllers mediate between actual and desired states.
    - Operators are codified system administrators.
    - The importance of operators as app number grows in a skill-scarce environment.
    - Mechanisms around stateful apps are important because they ensure data integrity.
    - The CAP theorem, the impossibility of consistency, availability, and tolerance.
    - Why different databases allow for different iterations of the CAP theorem.
    - When partition tolerance can and can’t get sacrificed.
    - Recommendations on when to run stateful or stateless apps through Kubernetes.
    - The importance of considering models when thinking about how to run a stateful app.
    - Varying definitions of workloads.
    - Pods can run multiple workloads
    - Workloads create states, so you can’t have one without the other.
    - The term ‘workloads’ can refer to multiple processes running at once.
    - Why the ephemerality of Kubernetes systems makes it hard to run stateful applications.     
    - Ideas of stateful and stateless concerning networks.
    - The shift from server to browser in hosting stateful sessions. 
links:
    - name: KubeCon+CloudNativeCon 
      url: https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/
    - name: Google Spanner
      url: https://cloud.google.com/spanner/
    - name: CockroachDB 
      url: https://www.cockroachlabs.com/
    - name: CoreOS
      url: https://coreos.com/
    - name: Red Hat
      url: https://www.redhat.com/en
    - name: Metacontroller
      url: https://metacontroller.app/
    - name: Brandon Philips 
      url: https://www.redhat.com/en/blog/authors/brandon-phillips
    - name: MySQL
      url: https://www.mysql.com/
video: https://www.youtube.com/embed/42FP22MpdxM
related: 
- 007-kubernetes-as-per-kelsey-hightower
- 008-disaster-recovery 
- 006-a-conversation-with-joe-beda 
---
EPISODE 009

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[INTERVIEW]

[00:00:41] JR: All right! Hello, everybody, and welcome to episode 6 of The Cubelets Podcast. Today we are going to be discussing the concept of stateful and stateless and what that means in this crazy cloud native landscape that we all work. 

I am Josh Rosso. Joined with me today is Carlisia. 

[00:00:59] CC: Hi, everybody. 

[00:01:01] JR: We also have Duffie. 

[00:01:03] D: Hey, everybody. 

[00:01:04] JR: Nicholas. 

[00:01:05] NL: Yo! 

[00:01:07] JR: And a newcomer to the podcast, we also have Brian. Brian, you want to give us a little intro about yourself? 

[00:01:12] BL: Hi! I’m Brian. I work at VMWare. I do lots of community stuff, including sharing the KubeCon+CloudNativeCon.

[00:01:22] JR: Awesome! Cool. All right. We’ve got a pretty good cast this week. So let’s dive right into it. I think one of the first things that we’ve been talking a bit about is the concept of what makes an application stateful? And of course in reverse, what makes an application stateless? Maybe we could try to start by discerning those two. Maybe starting with stateless if that makes? Does someone want to take that on? 

[00:01:45] CC: Well, I’m going to jump right in. I have always been a developer, as supposed to some of you or all of you have who have system admin backgrounds. The first time that I heard the stateless app, I was like, “What?” That wasn’t recent, okay? It was a long time ago, but that was a knot in my head. Why would you have a stateless app? If you have an app, you’re going to need state. I couldn’t imagine what that was. But of course it makes a lot of sense now. That was also when we were more in the monolithic world.  

[00:02:18] BM: Actually that’s a good point. Before you go into that, it’s a great point. Whenever we start with apps or we start developing apps, we think of an application. An application does everything. It takes input and it does stuff and it gives output. But now in this new world where we have lots of apps, big apps, small apps, we start finding that there’s apps that only talk and coordinate with other apps. They don’t do anything else. They don’t save any data. They don’t do anything. That’s what – where we get into this thing called stateless apps. Apps don’t have any type of data that they store locally.

[00:02:53] CC: Yeah. It’s more like when I envision in my head. You said it brilliantly, Brian. It’s almost like a process. When I started envisioning this world of stateless apps, to me it was like, “Why do we even call them apps? Why don’t we just call them a process?” They’re just shifting back data and forth but they’re not – To me, at the beginning, apps were always stateless. They went together. 

[00:03:17] D: I think, frequently, people think of applications that have only locally relevant stuff that is actually not going to persist to disc, but maybe held in memory or maybe only relevant to the type of connection that’s coming through that application also as stateless, which is interesting, because there’s still some state there, but the premise is that you could lose that state and not lose the functionality of that code.

[00:03:42] NL: Something that we might want to dive into really quickly when talking about stateless and stateful apps. What do we mean by the word state? When I first learned about these things, that was what always screwed me up. I’m like, “What do you mean state? Like Washington? Yeah. We got it over here.”  

[00:03:57] JR: Oh! State. That’s that word. State is one of those words that we use to sound smarter than we actually are 95% of the time, and that’s a number I just made up. When people are talking about state, they mean databases. Yeah. But there are other types of state as well. If you maintain local cache that needs to be persistent, if you have local files that you’re dealing with, like you’re opening files. That’s still state. State really is just that it’s data that must persist.

[00:04:32] D: I agree with that definition. I think that state, whether persisted to memory or persisted to disc or persisted to some external system, that’s still what we refer to as state. 

[00:04:41] JR: All right. Makes sense and sounds about like what I got from it as well. 

[00:04:45] CC: All right. So now we have this world where we talk about stateless apps and stateful apps. Are there even stateful apps? Do we call a database an app? If we have a distributed system where we have one stateless app over here, another stateless app over there and then we have the database that’s connected to the two of them, are we calling the database a stateful app or is that whole thing – How do we call this? 

[00:05:15] NL: Yeah. The database is very much a state as an app with state. I’m very much –

[00:05:19] D: That’s a close definition. Yeah. 

[00:05:21] NL: Yeah. Literally, it’s the epitome of a stateful app. But then you also have these apps that talk to databases as well and they might have local data, like data that – they start a transaction and then complete it or they have a long distributed type transaction. Any apps that revolve around a database, if they store local data, whether it’s within a transaction or something else, they’re still stateful apps. 

[00:05:46] D: Yup. I think you can modify and input data or modify state that has to be persisted in some way I think is a stateful app, even though I do think it’s confusing because of what – As I said before, I think that there are a bunch of applications that we think of, like not everybody considers Spark jobs to be stateful. Spark jobs, for example, are something that would bring data in, mutate that data in some way, produce some output and go away. 

The definition there is that Spark would generally push the resulting data into some other external system. It’s interesting, because in that model, Spark is not considered to be a stateful app because the Spark job could fail, go away, get recreated, pick up the pieces where it left off or just redo that work until all of the work is done. 

In many cases, people consider that to be a stateless application. That’s I think is like the crux – In my opinion, the crux of the confusion around what a stateful and stateless application is, is that people frequently – I think it’s more about where you store – what you mean by persistence and how that actually realizes in your application. If you’re pushing your state to an external database, is your application still stateful? 

[00:06:58] NL: I think it’s a good question, or if you are gathering data from an external source and mutating it in some way, but you don’t need data to be present when you start up, is that a stateful app or a stateless app? Even though you are taking in data, modifying it and checking it, sending out to some other mechanism or serving it in your own way, does that become like a stateless app? If that app gets killed and it comes back and it’s able to recover, is it stateful or stateless? That’s a bit of a gray area, I think.

[00:07:26] JR: Yeah. I feel like a lot of the customers I work with, if the application can get killed even if it has some type of local state, they still refer to it as stateless usually, to me at least, when we talk about it because they think, “I can kind of restart this application and I’m not too worried about losing whatever it may have had.” Let’s say cached for simplicity, right? 

I think that kind of leads us into an interesting question. We’ve talked a lot on this podcast about cloud native infrastructure and cloud native applications and it seems like since the inception of cloud native, there’s always been this push that a stateless app is the best candidate to run or the easiest candidate to run. I’m just curious if we could dive into that for a moment. Why in the cloud native infrastructure area has there always been this push for running stateless applications? Why is it simpler? Those kinds of things.

[00:08:15] BL: Before we dive into that, we have to realize – And this is just a problem of our whole ecosystem, this whole cloud native. We’re very hand-wavy in our descriptions for things. There’re a lot of ambiguous descriptions, and state is one of those. Just keep that in mind, that when we’re talking today, we’re really just talking about these things that store data and when that’s the state. Just keep that in mind as you’re listening to this. 

But when it comes to distributed systems in general, the easiest system is a system that doesn’t need coordination with any other system. If it happens to die, that’s okay. We can just restart it. People like to start there. It’s the easiest thing to start. 

[00:08:58] NL: Yeah, that was basically what I was going to say. If your application needs to tie into other applications, it becomes significantly more complicated to implement it, at least for your first time and in your system. These small applications that only – They don’t care about anybody else, they just take in data or not, they just do whatever. Those are super easy to start with because they’re just like, “Here. Start this up. Who cares? Whatever happens, it happens.”  

[00:09:21] CC: That could be a good boundary to define – I don’t want to jump back too far, but to define where is the stateless app to me is part of a system and just say it depends for it to come back up. Does it depend on something else that has state?  

[00:09:39] BL: I’ll give you an example. I can give you a good example of a stateless app that we use every day, every single one of us, none of us on this call, but when you search Google. You go to google.com and you go to the bar and you type in a search, what’s happening is there is a service at the beginning that collects that search and it federates the search over many different probably clusters of computers so they can actually do the search currently. That app that actually coordinates all that work is a stateless app most likely. All it does is just splits it up and allows more CPUs to do the work. Probably, that goes away. Probably not a problem. You probably have 10 more of them. That’s what I consider stateless. It doesn’t really own any of the data. It’s the coordinator.

[00:10:25] CC: Yeah. If it goes down, it comes back up. It doesn’t need to reset itself to the state where it was before. It can truly be considered a stateless because it can just, “Okay. I reset. I’m starting from the beginning from this clear state.”

[00:10:43] BL: Yes. That’s a good summary of that. 

[00:10:45] CC: Because another way to think about stateless – What makes an app stateful app, does it have to be combined or like deployed and shipped together with the part that maintains the state? That’s a more clear cut definition. Then that app is definitely a stateful app. 

[00:11:05] D: What we frequently talk about in like the cloud native space is like you know that you have a stateless app if you can just create 20 of them and not have to worry about the coordination of them. They are all workers. They are all going to take input. You could spread the load across those 20 in an identical way and not worry about which one you landed on. That’s stateless application. 

A stateful application is a very different thing. You have to have some coordination. You have to say how many databases can you have on a backend? Because you’re persisting data there, you have to be really careful about that you only write to the master database or to the writing database and you could read of any other memories of that database cluster, that sort of stuff.

[00:11:44] CC: It might seem that we are going so deep into this differentiating between stateful and stateless, but this is so important because clusters are usually designed to be ephemeral. Ephemeral means obviously they die down, they are brought back up, the nodes, and you should worry as least as possible with the state of things. 

Then going back to what Joshua is saying, when we are in this cloud native world, usually we are talking about stateless apps, stateless workloads and then we’re going to just talk about what workload means. But then if that’s the case, where are the stateful apps? It’s like we have this vision that the stateful apps live outside the cloud native world? How does it work? But it’s supposed to work.

[00:12:36] BL: Yup. This is the question that keeps a lot of people employed. Making sure my state is available when I need it. You know what? I’m not going to even use that word state. Making sure my data is available wherever I need it and when I need it. I don’t want to go too deep in right now, but this is actually a huge problem in the Kubernetes community in general, and we see it because there’s been lots of advice given, “Don’t run things like databases in your clusters.” This is why we see people taking the ideas of Google Spanner and like CockroachDB and actually going through a lot of work to make sure that you can run databases in Kubernetes clusters. 

The interesting piece about this is that we’re actually to the point where we can run these types of workloads in our clusters, but with a caveat, big star at the end, it’s very difficult and you have to know what you’re doing.

[00:13:34] JR: Yeah. I want to dovetail on that Brian, because it’s something that we see all the time. I feel like when we first started setting up, let’s call them clusters, but in our case it was Kubernetes, right? We always saw that data level always being delegated to like if you’re in Amazon, some service that they hosted and so on. But now I think more and more of the customers that at least I’m seeing. I’m sure Nicholas and Duffie too, they’re interested in doing exactly what you just described. 

Cockroach is an example I literally just worked with recently, and it’s just interesting how much more thoughtful they have to be about their cluster operations. Going back to what you said Carlisia, it’s not as easy as just like trashing a cluster and instantiating a new one anymore, like they’re used to. They need to be more thoughtful about keeping that data integrity intact through things like upgrades and disaster recover. 

[00:14:18] D: Another interesting point kind to your point, Brian, is that like, frequently, people are starting to have conversations and concerns around data gravity, which means that I have a whole bunch of data that I need to work with, like to a Spark job, which I mentioned earlier. I need to basically put my compute where that data is. The way that I store that data inside the cluster and use Kubernetes to manage it or whether I just have to make sure that I have some way of bringing up compute workloads close to that data. It’s actually kind of introducing a whole new layer to this whole thing.

[00:14:48] BL: Yeah! Whole new layer of work and a whole new layer of complexity, because that’s actually – The crux of all this is like where we slide the complexity too, but this is interesting, and I don’t want to go too far to this one definitely. This is why we’re seeing more people creating operators around managing data. I’ve seen operators who are bringing databases up inside of Kubernetes. I’ve seen operators that actually can bring up resources outside of Kubernetes using the Kubernetes API. 

The interesting thing about this is that I looked at both solutions and I said, “I still don’t know what the answer is,” and that’s great. That means that we have a lot to learn about the problem, and at least we have some paths for it. 

[00:15:29] NL: Actually, that kind of reminds me of the first time I ever heard the word stateful or stateless – I’m an infrastructure guy. Was around the discussion of operators, which there’s only a couple of years ago when operators were first introduced at CoreOS and some people were like, “Oh! Well, this is how you now operate a stateful mechanism inside of Kubernetes. This is the way forward that we want to propose.” I was just like, “Cool! What is that? What’s state? What do you mean stateful and stateless?” I had no idea. Josh, you were there. You’re like, “Your frontend doesn’t care about state and your backend does.” I’m like, “Does it? I don’t know. I’m not a developer.”

[00:16:10] JR: Let’s talk about exactly that, because I think these patterns we’re starting to see are coming out of the needs that we’re all talking about, right? We’ve seen at least in the Kubernetes community a lot of push for these different constructs, like something called a stateful [inaudible 00:16:21], which isn’t that important right now, but then also like an operator. Maybe we can start by defining what is an operator? What is that pattern and why does it relate to stateful apps?

[00:16:31] CC: I think that would be great. I am not clear what an operator is. I know there’s going to be a controller involved. I know it’s not a CRD. I am not clear on that at all, because I only work with CRDs and we don’t define – like the project I worked on with Velero, we don’t categorize it as an operator. I guess an operator uses specific framework that exists out there. Is it a Kubernetes library? I have no idea.

[00:16:56] BL: We did it to ourselves again. We’re all doing these to ourselves. From the best that I can surmise, the operator pattern is the combination of a CRD plus a controller that will operate on events from the Kubernetes API based on that CRD’s configuration. That’s what an operator is.

[00:17:17] NL: That’s exactly right. 

[00:17:18] BL: To conflate this, Red Hat created the operator SDK, and then you have [inaudible 00:17:23] and you have a Metacontroller, which can help you build operators. Then we actually sometimes conflate and call CRDs operators, and that’s pretty confusing for everyone. Once again, don’t let developers name anything. 

[00:17:41] CC: Wait. So let’s back up a little. Okay. There is an actual library that’s called an operator. 

[00:17:46] BL: Yes. There’s an operator SDK. 

[00:17:47] CC: Referred to as an operator. I heard that. Okay. Great. But let me back up a little because –

[00:17:49] D: The word operator can

[00:17:50] CC: Because if you are developing an app for Kubernetes, if you’re extending Kubernetes, you are – Okay, you might not use CRDs, but if you are using CRDs, you need a controller, right? Because how will you do actions? Then every app that has a CRD – because the alternative to having CRDs is just using the API directly without creating CRDs to reflect to resources. If you’re creating CRDs to reflect to resources, you need controllers. All of those apps, they have CRDs, are operators.  

[00:18:24] D: Yip [inaudible 00:18:25] is an operator.

[00:18:26] CC: [inaudible 00:18:26] not an operator. How can you extend Kubernetes and not be qualified [inaudible 00:18:31] operator?

[00:18:32] BL: Well, there’s a way. There is a way. You can actually just create a CRD and use a CRD for data storage, you know, store states, and you can actually query the Kubernetes API for that information. You don’t need a controller, but we couple them with controllers a lot to perform action based on that state we’ve saved to etcd.

[00:18:50] CC: Duffie. 

[00:18:51] D: I want to back up just for a moment and talk about the controller pattern and what it is and then go from there to operators, because I think it makes it easier to get it in your head. A control pattern is effectively a way to understand desired state and real state and provide some logic or business code that will allow you to converge those two states, your actual state and your desired state. This is a pattern that we see used in almost everything within a distributed system. It’s like within Kubernetes, within most of the kind of more interesting systems that are out there. This control pattern describes a pretty good way of actually managing application flow across distributed systems. 

Now, operators, when they were initially introduced, we were talking about that this is a slightly different thing. Operators, when we introduced the idea, came more from like the operational burden of these stateful applications, things like databases and those sorts of stuff. With the database, etcd for example, you have a whole bunch of operational and runtime concerns around managing the lifecycle of that system. How do I add a new member to the cluster? What do I do when a member dies? How do I take action? 

Right now, that’s somebody like myself waking up at 2 in the morning and working through a run book to basically make sure that that service remains operational through the night. But the idea of an operator was to take that control pattern that we described earlier and make it wake up at 2 in the morning to fix this stuff. We’re going to actually codify the operational knowledge of managing the burden of these stateful applications so that we don’t have to wake up at 2 in the morning and do it anymore. Nobody wants to do that. 

[00:20:32] BL: Yeah. That makes sense. Remember back at KubCon years ago, I know it was one in Seattle where Brandon Philips was on stage talking about operators. He basically was saying if we think about SysOp, system operators, it was a way to basically automate or capture the knowledge of our system administrators in scripts or in a process or in code a la operators. 

[00:20:57] D: The last part that I’ll add to this thing, which I think is actually what really describes the value of this idea to me is that there are only so many people on the planet that do what the people in this blog post do. Maybe you’re one of them that listen to this podcast. People who are operating software or operating infrastructure at scale, there just aren’t that many of us on the planet. So as we add more applications, as more people adopt the cloud native regime or start coming to a place where they can crank out more applications more quickly, we’re going to have to get to a place where we are able to automate the burden of managing those applications, because there just aren’t enough of us to be able to support the load that is coming. There just aren’t enough people on the planet that do this to be able to support that. 

That’s the thing that excites me most about the operator pattern, is that it gives us a place to start. It gives us a place to actually start thinking about managing that burden over time, because if we don’t start changing the way we think about managing that burden, we’re going to run out of people. We’re not going to be able to do it. 

[00:22:05] NL: Yeah. It’s interesting. With stateful apps, we keep kind of bringing them – coming back to stateful apps, because stateful apps are hard and stateless apps are easy, and we’ve created all these mechanisms around operating things with state because of how just complicated it is to make sure that your data is ready, accessible and has integrity. That’s the big one that I keep not thinking about as a SysOps person coming into the Dev world. Data integrity is so important and making sure that your data is exactly what it needs to be and was the last time you checked it, is super important. It’s only something I’m really starting to grasp. That’s why I was like these things, like operators and all these mechanisms that we keep creating and recreating and recreating keep coming about, because making sure that your stateful apps have the right data at the right time is so important.

[00:22:55] BL: Since you brought this up, and we just talked about why a state is so hard, I want to introduce the new term to this conversation, the whole CAP theorem, where data would typically be – in a distributed system at least, your data will be consistent or your data can be available, or if your distributed systems falls in multiple parts, you can have partition tolerance. This is one of those computer science things where you can actually pick two. You can have it be available and have partition tolerance, but your data won’t be consistent, or you can have consistency and availability, but you won’t have partition tolerance. If your cluster splits into two for some reason, the data will be bad.

This is why it’s hard, this is why people have written basically lots of PhD dissertations on this subject, and this is why we are talking about this here today, is because managing state, and particularly managing distributed, is actually a very, very hard problem. But there’s software out there that will help us, and Kubernetes is definitely part of that and stateful sets are definitely part of that as well.

[00:24:05] JR: I was just going to say on those three points, consistently, availability and partition tolerance. Obviously, we’d want all three if we could have them. Is there one that we most commonly tradeoff and give up or does it go case-by-case?

[00:24:17] BL: Actually, it’s been proven. You can’t have all three. It’s literally impossible. It depends. If you have a MySQL server and you’re using MySQL to actually serve data out of this, you’re going to most likely get consistency and availability. If you have it replicated, you might not have partition tolerance. That’s something to think about, and there are different databases and this is actually one of the reasons why there are different databases. This is why people use things like relational databases and they use key value stores not because we really like the interfaces, but because they have different properties around the data.  

[00:24:55] NL: That’s an interesting point and something that I had recently just been thinking about, like why are there so many different types of databases. I just didn’t know. It was like in only recently heard of CAP theorem as well just before you mentioned it. I’m like, “Wow! That’s so fascinating.” The whole thing where you only pick two. You can’t get three. 

Josh, to kind of go back to your question really quickly, I think that partition tolerance is the one that we throw away the most. We’re willing to not be able to segregate our database as much as possible because C and A are just too important, I think. At least that’s what I’m saying, like I am wearing an [inaudible 00:25:26] shirt and [inaudible 00:25:27] is not partition tolerant. It’s bad at it.

[00:25:31] BL: This is why Google introduced Spanner, and Spanner in some situations can get free with tradeoffs and a lot of really, really smart stuff, but most people can’t run this scale. But we do need to think about partition tolerance, especially with data whenever – Let’s say you run a store and you have multiple instances across the world and someone buys something from inventory, what is your inventory look like at any particular point? You don’t have to answer my question, of course, but think about that. These are still very important problems if fiber gets cut across the Atlantic and now I’ve sold more things than I have. 

Carlisia, speaking to you as someone who’s only been a developer, have you moved your thoughts on state any further?

[00:26:19] CC: Well, I feel that I’m clear on – Well, I think you need to clarify your question better for me. If you’re asking if I understand what it means, I understand what it means. But I actually was thinking to ask this question to all of you, because I don’t know the answer, if that’s the question you’re asking me. I want to put that to the group. Do you recommend people, as in like now-ish, to run stateful workloads? We need to talk about workloads mean. 

Run stateful apps or database in sites if they’re running a Kubernetes cluster or if they’re planning for that, do you all as experts recommend that they should already be looking into doing that or they should be running for now their stateful apps or databases outside of the cloud native ecosystem and just connecting the two? Because if that’s what your question was, I don’t know. 

[00:27:21] BL: Well, I’ll take this first. I think that we should be spending lots of more time than we are right now in coming up community-tested solutions around using stateful sets to their best ability. What that means is let’s say if you’re running a database inside of Kubernetes and you’re using a stateful set to manage this, what we do need to figure out is what happens when my database goes down? The pod just kills? When I bring up a new version, I need to make sure that I have the correct software to verify integrity, rebuilt things, so that when it comes back up, it comes back up correctly. That’s what I think we should be doing.

[00:27:59] JR: For me, I think working with customers, at least Kubernetes-oriented folks, when they’re trying to introduce Kubernetes as their orchestration part of their overall platform, I’m usually just trying to kind of meet them where they’re at. If they’re new to Kubernetes and distributed systems as a whole, if we have stateless, let’s call them maybe simpler applications to start with, I generally have them lean into that first, because we already have so much in front of us to learn about. I think it was either Brian or Duffie, you said it introduces a whole bunch more complexity. You have to know what you’re doing. You have to know how to operate these things. If they’re new to Kubernetes, I generally will advise start with stateless still. But that being said, so many of our customers that we work with are very interested in running stateful workloads on Kubernetes.

[00:28:42] CC: But just to clarify what you said, Josh, because you spoke like an expert, but I still have beginner’s ears. You said something that sounded to me like you recommend that you go stateless. It sounded to me like that. What you really say is that they take out the stateless part of what they have, which they might already have or they might have to change and put the stateless. You’re not suggesting that, “Oh! You can’t do stateful anymore. You need to just do everything stateless.” What you’re saying is take the stateless part of your system, put that in Kubernetes, because that is really well-tested and keep the stateful outside of that ecosystem. Is that right? 

[00:29:27] JR: I think that’s a better way to put it. Again, it’s not that Kubernetes can’t do stateful. It’s more of a concept of biting off more than you can chew. We still work with a lot of people who are very new to these distributed systems concepts, and to take on running stateful workloads, if we could just delegate that to some other layer, like outside of the cluster, that could be a better place to start, at least in my experience. Nicholas and Duff might have different – 

[00:29:51] NL: Josh, you basically nailed it like what I was going to say, where it’s like if the team that I’m working with is interested in taking on the complexity of maintaining their databases, their stateful sets and making sure that they have data integrity and availability, then I’m all for them using Kubernetes for a stateful set. 

Kubernetes can run stateful applications, but there is all this complexity that we keep talking about and maintaining data and all that. If they’re willing to take on their complexity, great, it’s there for you. If they’re not, if they’re a little bit kind of behind as – Not behind, but if they’re kind of starting out their Kubernetes journey or their distributed systems journey, I would recommend them to move that complexity to somebody else and start with something a little bit easier, like a stateless application. 

There are a lot of good services that provide data as a service, right? You’ve got dataview as RDS  is great for creating stateful application. You can leverage it anytime and you’ve got like dedicated wires too. I would point them to there first if they don’t want to take on like complexity. 

[00:30:51] D: I completely agree with that. An important thing I would add, which is in response to the stateful set piece here, is that as we’ve already described, managing a stateful application like a database does come with some complexity. So you should really carefully look at just what these different models provide you. Whether that model is making use of a stateful set, which provides you like ordinality, ensuring that things start up in a particular order and some of the other capabilities around that stuff. 

But it won’t, for example, manage some of the complexity. A stateful set won’t, for example, try and issue a command to the new member to make sure that it’s part of an existing database cluster. It won’t manage that kind of stuff. So you have to really be careful about the different models that you’re evaluating when trying to think about how to manage a stateful application like a database. 

I think because it’s actually why the topic of an operator came up kind of earlier, which was that like there are a lot of primitives within Kubernetes in general that provide you a lot of capability for managing things like stateful applications, but they may not entirely suit your needs. Because of the complexity with stateful applications, you have to really kind of be really careful about what you adopt and where you jump in.

[00:32:04] CC: Yeah. I know just from working with Velero, which is a tool for doing backup and recovery migration of Kubernetes clusters. I know that we backup volumes. So if you have something mounted on a volume, we can back that up. I know for a fact that people are using that to backup stateful workloads. We need to talk about workloads. But at any case, one thing to – I think one of you mentioned is that you definitely also need to look at a backup and recovery strategy, which is ever more important if you’re doing stateful workloads.

[00:32:46] NL: That’s the only time it’s important. If you’re doing stateless, who cares? 

[00:32:49] BL: Have we defined what a workload is? 

[00:32:50] CC: Yeah. But let me say something. Yeah, I think we should do an episode on that maybe, maybe not. We should do an episode on GitOps type of thing for related things, because even though you – Things are stateless, but I don’t want to get into it. Your cluster will change state. You can recover in stuff from like a fresh version. But as it goes through a lifecycle, it will change state and you might want to keep that state. I don’t know. I’m not the expert in that area, but let’s talk about workloads, Brian. 

Okay. Let me start talking about workloads. I never heard the term workload until I came into the cloud native world, and that was about a year ago or when they started looking in this space more closely. Maybe a little bit before a year ago. It took me forever to understand what a workload was. Now I understand, especially today, we’re talking about a little bit before we started recording. Let me hear from you all what it means to you.

[00:34:00] BL: This is one of those terms, and I’m sure like the last any ex-Googlers about this, they’ll probably agree. This is a Google term that we actually have zero context about why it’s a term. I’m sure we could ask somebody and they would tell us, but workloads to me personally are anything that ultimately creates a pod. Deployments create replica sets, create pods. That whole thing is a workload. That’s how I look at it.

[00:34:29] CC: Before there were pods, were there workloads, or is a workload a new thing that came along with pods?

[00:34:35] BL: Once again, these words don’t make any sense to us, because they’re Google terms. I think that a pod is a part of a workload, like a deployment is a part of a workload, like a replica set is part of a workload. Workload is the term that encompasses an entire set of objects.

[00:34:52] D: I think of a workload as a subset of an application. When I think of an application or a set of microservices, I might think of each of the services that make up that entire application as a workload. I think of it that way because that’s generally how I would divide it up to Brian’s point into different deployment or different stateful sets or different – That sort of stuff. Thinking of them each as their own autonomous piece, and altogether they form an application. That’s my think of it.

[00:35:20] CC: To connect to what Brian said, deployment, will always run in the pods, which is super confusing if you’re not looking at these things, just so people understand, because it took me forever to understand that. The connection between a workload, a deployment and a pod. 

Pods contain – If you have a deployment that you’re going to shift Kubernetes – I don’t know if shift is the right word. You’re going to need to run on Kubernetes. That deployment needs to run somewhere, in some artifact, and that artifact is called a pod. 

[00:35:56] NL: Yeah. Going back to what Duffie said really quickly. A workload to me was always a process, kind of like not just a pod necessarily, but like whatever it is that if you’re like, “I just need to get this to run,” whatever that is. To me that was always a workload, but I think I’m wrong. I think I’m oversimplifying it. I’m just like whatever your process is. 

[00:36:16] BL: Yeah. I would give you – The reason why I would not say that is because a pod can run multiple containers at once, which ergo is multiple processes. That’s why I say it that way.

[00:36:29] NL: Oh! You changed my mind. 

[00:36:33] BL: The reason I bring this up, and this is probably a great idea for a future show, is about all the jargon and terminology that we use in this land that we just take as everyone knows it, but we don’t all know it, and should be a great conversation to have around that. But the reason I always bring up the whole workload thing is because when we think about workloads and then you can’t have state without workloads, really. I just wanted to make sure that we tied those two things together.  

[00:36:58] CC: Why can you not have state without workloads? What does that mean?

[00:37:01] BL: Well, the reason you can’t have state without workloads is because something is going to have to create that state, whether that workload is running in or out a cluster. Something is going to have to create it. It just doesn’t come out of nowhere. 

[00:37:11] CC: That goes back to what Nick was saying, that he thinks a workload is a process. Was that was you said, Nick? 

[00:37:18] NL: It is, yeah, but I’m renegading on that.  

[00:37:23] CC: At least I could see why you said that.  Sorry, Brian. I cut you off.

[00:37:28] BL: What I was saying is a workload ultimately is one or more processes. It’s not just a process. It’s not a single process. It could be 10, it could be 1.  

[00:37:39] JS: I have one final question, and we can bail on this and edit it out if it’s not a good one to end with. I hope it’s not too big, but I think maybe one thing we overlooked is just why it’s hard to run stateful workloads in these new systems like Kubernetes. We talked about how there’s more complexity and stuff, but there might be some room to talk about – People have been spinning up an EC2 server, a server on the web and running MySQL on it forever. Why in like the Kubernetes world of like pods and things is it a little bit harder to run, say, MySQL just [inaudible 00:38:10]. Is that something worth diving into?

[00:38:13] NL: Yeah, I think so. I would say that for things like, say, applications, like databases particularly, they are less resilient to outages. While Kubernetes itself is dedicated to – Or most container orchestrations, but Kubernetes specifically, are dedicated to running your pods continuously as long as they will, that it is still somewhat of a shifting landscape. You do have priority and preemption. If you don’t set those things up properly of if there’s just like a total failure of your system at large, your stateful application can just go down at any time. Then how do you reconcile the outage in data, whatever data that might have gotten lost? Those sorts of things become significantly more complicated in an environment like Kubernetes where you don’t necessarily have access to a command line to run the commands to recover as easy. You may not, but it’s the same.

[00:39:01] BL: Yes. You got to understand what databases do. Disk is slow, whether you have spinning disk or you have disk on chip, like SSD. What databases do in a lot of cases is they store things in memory. So if it goes away, didn’t get stored. In other cases, what databases do is they have these huge transactional logs, maybe they write them out in files and then they process the transaction log whenever they have CPU time. If a database dies just suddenly, maybe its state is inconsistent because it had items that were to be processed in a queue that haven’t been processed. Now it doesn’t know what’s going on, which is why –

[00:39:39] NL: That’s interesting. I didn’t know that. 

[00:39:40] BL: If you kill MySQL, like kill MySQL D with a -9, why it might not come back up. 

[00:39:46] JR: Yeah. Going back to Kubernetes as an example, we are living in this newer world where things can get rescheduled and moved around and killed and their IPs changed and things. It seems like this environment is, should I say, more ephemeral, and those types of considerations becoming to be more complex. 

[00:40:04] NL: I think that really nails it. Yeah. I didn’t know that there were transactional logs about databases. I should, I feel like, have known that but I just have no idea. 

[00:40:11] D: There’s one more part to the whole stateful, stateless thing that I think is important to cover, but I don’t know if we’ll be able to cover it entirely in the time that we have left, and that is from the network perspective. If you think about the types of connections coming into an application, we refer to some of those connections as stateful and stateless. I think that’s something we could tackle in our remaining time, or what’s everybody’s thought?

[00:40:33] JR: Why don’t you try giving us maybe a quick summary of it, Duffie, and then we can end on that. 

[00:40:36] CC: Yeah. I think it’s a good idea to talk about network and then address that in the context of network. I’m just thinking an idea for an episode. But give us like a quick rundown. 

[00:40:45] D: Sure. A lot of the kind of older monolithic applications, the way that you would scale these things is you would have multiple of them and then you would have some intelligence in the way that you’re routing connections down to those applications that would describe the ability to ensure that when Bob accesses a website and he authenticates, he’s going to authenticate to one specific instance of this application and the intelligence up in the frontend is going to handle the routing to make sure that Bob’s connection always comes back to that same instance. This is an older pattern. 

It’s been around for a very long time and it’s certainly the way that we first kind of learned to scale applications before we’ve decided to break into maker services and kind of handle a lot of this routing in a more resilient way. That was kind of one of the early versions of how we do this, and that is a pretty good example of a stateful session, and that there is actually some – Perhaps Bob has authenticated and he has a cookie that allows him, that when he comes back to that particular application, a lot of the settings, his browser settings, whether he’s using the dark theme or the light theme, that sort of stuff, is persisted on the server side rather than on the client side. That’s kind of what I mean by stateful sessions. 

Stateless sessions mean it doesn’t really matter that the user is terminating to the same end of point, because we’ve managed to keep the state either with the client. We’re handling state on the browser side of things rather on the server side of things. So you’re not necessarily gaining anything by pushing that connection back to the same specific instance, but just to a service that is more widely available. 

There are lots of examples of this. I mean, Brian’s example of Google earlier. Obviously, when I come back to Google, there are some things I want it to remember. I want it to remember that I’m logged in as myself. I want it to remember that I’ve used a particular – I want it to remember my history. I want it to remember that kind of stuff so that I could go back and find things that I looked at before. There are a ton of examples of this when we think about it.

[00:42:40] JR: Awesome! All right, everyone. Thank you for joining us in episode 6, Stateful and Stateless. Signing off. I’m Josh Rosso, and going across the line, thank you Nicholas Lane.  

[00:42:54] NL: Thank you so much. This was really informative for me.  

[00:42:56] JR: Carlisia Thompson.

[00:42:57] CCC: This was a great conversation. Bye, everybody. 

[00:42:59] JR: Our new comer, Brian Liles. 

[00:43:01] BL: Until next time. 

[00:43:03] JR: And Duffie Cooley. 

[00:43:05] DCC: Thank you so much, everybody.

[00:43:06] JR: Thanks all. 

[00:43:07] CCC: Bye!

[END OF EPISODE]

[0:50:00.3] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
