---
episode_id: 016-cloud-native-apps 
episode_number: 16 
title: Cloud Native Apps
description: This episode is an exciting one, where we bring all of our different understandings of what cloud native apps are to the table. The topic is so interesting and diverse and can be interpreted in a myriad of ways. 
notes: Do you know what cloud native apps are? Well, we don’t really either, but today we’re on a mission to find out! This episode is an exciting one, where we bring all of our different understandings of what cloud native apps are to the table. The topic is so interesting and diverse and can be interpreted in a myriad of ways. The term ‘cloud native app’ is not very concrete, which allows for this open interpretation. We begin by discussing what we understand cloud native apps to be. We see that while we all have similar definitions, there are still many differences in how we interpret this term. These different interpretations unlock some other important questions that we also delve into. Tied into cloud native apps is another topic we cover today – monoliths. This is a term that is used frequently but not very well understood and defined. We unpack some of the pros and cons of monoliths as well as the differences between monoliths and microservices. Finally, we discuss some principles of cloud native apps and how having these umbrella terms can be useful in defining whether an app is a cloud native one or not. These are complex ideas and we are only at the tip of the iceberg. We hope you join us on this journey as we dive into cloud native apps!
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Nicholas Lane
      url: https://twitter.com/apinick
points:
    - What cloud native applications mean to Carlisia, Brian, Josh, and Nicholas.
    - Portability is a big factor of cloud native apps.
    - Cloud native applications can modify their infrastructure needs through API calls. 
    - Cloud native applications can work well with continuous delivery/deployment systems.
    - A component of cloud native applications is that they can modify the cloud. 
    - An application should be thought of as multiple processes that interact and link together.
    - It is possible resources will begin to be requested on-demand in cloud native apps.
    - An explanation of the commonly used term ‘monolith.’
    - Even as recently as five years ago, monoliths were still commonly used.
    - The differences between a microservice approach and a monolith approach.
    - The microservice approach requires thinking about the interface at the start, making it harder.
    - Some of the instances when using a monolith is the logical choice for an app.
    - A major problem with monoliths is that as functionality grows, so too does complexity.
    - Some other benefits and disadvantages of monolith apps.
    - In the long run, separating apps into microservices gives a greater range of flexibility.
    - A monolith can be a cloud native application as well.
    - Clarification on why Brian uses the term ‘microservices’ rather than cloud native.
    - ‘Cloud native’ is an umbrella term and a set of principles rather than a strict definition.
    - If it can run confidently on someone else’s computer, it is likely a cloud native application.
    - Applying cloud native principles when building an app from scratch makes it simpler. 
    - It is difficult to adapt a monolith app into one which uses cloud native principles.
    - The applications which could never be adapted to use cloud native principles. 
    - A checklist of the key attributes of cloud native applications.
    - Cloud native principles are flexible and can be adapted to the context.
    - It is the responsibility of thought leaders to bring cloud native thinking into the mainstream. 
    - Kubernetes has the potential to allow us to see our data centers differently.

links:
    - name: Red Hat
      url: https://www.redhat.com/en
    - name: IBM 
      url: https://www.ibm.com/
    - name: VWware 
      url: https://www.vmware.com/
    - name: The New Stack 
      url: https://thenewstack.io/
    - name: 10 Key Attributes of Cloud-Native Applications
      url: https://thenewstack.io/10-key-attributes-of-cloud-native-applications/
    - name: Kubernetes 
      url: https://kubernetes.io/
    - name: Linux 
      url: https://www.linux.org/
video: https://www.youtube.com/embed/d9b5VzYiIF8
related: 
- 001-cloud-native
- 005-cloud-native-infrastructure
- 007-kubernetes-as-per-kelsey-hightower
---
EPISODE 16

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.4] NL: Hello and welcome back, my name is Nicholas Lane. This time, we’ll be diving into what it’s all about. Cloud native applications. Joining me this week are Brian Liles.

[0:00:53.2] BL: Hi.

[0:00:54.3] NL: Carlisia Campos.

[0:00:55.6] CC: Hi everybody, glad to be here.

[0:00:57.6] NL: And Josh Rosso.

[0:00:58.6] JR: Hey everyone.

[0:01:00.0] NL: How’s it going everyone?

[0:01:01.3] JR: It’s been a great week so far. I’m just happy that I have a good job and able to do things that make me feel whole.

[0:01:08.8] NL: That’s awesome, wow.

[0:01:10.0] BL: Yeah, I’ve been having a good week as well in doing a bit of some fun stuff after work. Like my soon to be in-laws are in town so I’ve been visiting with them and that’s been really fun. Cloud native applications, what does that mean to you all? Because I think that’s an interesting topic.

[0:01:25.0] CC: Definitely not a monolith. I think if you have a monolith running on the clouds, even if you start it out that way, I wouldn’t say it’s a cloud native app, I always think of containerized applications and if you’re using the container system then it’s usually because you want to have a smaller systems in more of them, that sort of thing. 

Also, when I think of cloud native applications, I think that they were developed  the whole strategy of the development in the whole strategy of deploying and shipping has been designed from scratch to put on the cloud system.

[0:02:05.6] JR: I think of it as applications that were designed to run in container. And I also think about things like services, like micro services or macro services to know what you want to call them that we have multiple applications that are made to talk not just with themselves but with other apps and they deliver a bigger functionality through their coordination. Then what I also want to go cloud native apps, I think of apps that we are moving to the cloud, that’s a big topic in itself but applications that we run in the cloud. All of our new fancy services and our SaaS offerings, a lot of these are cloud native apps. 

But then on the other side, I think about applications, they are cloud native are tolerant to failure and on the other side, can actually talk about sells of their health and who they’re talking to.

[0:02:54.8] CC: Gets very complicated.

[0:02:56.6] BL: Yeah. That was the side of that I haven’t thought about.

[0:03:00.7] JR: Actually, it’s for me that always come to mind are obviously portability, right? Wherever you're running this application, it can run somewhat consistently, be it on different clouds or even a lot of people, you know, are running their own cloud which is basically their on-prem cloud, right? That application being able to move across any of those places and often times, containerization is one of the mechanisms we use to do that, right? Which is what we all stated. 

Then I guess the other thing too is like, this whole cloud ecosystem, be it a cloud provider or your own personal – are often times very API driven, right? So, the applications, maybe being able to take advantage of some of those API’s should they need to. Be it for scaling purposes otherwise. It’s really interesting model.

[0:03:43.2] NL: It’s interesting, for me like this question because so far, everyone is getting similar but also different answers. And for me, I’m going to give a silent answer to me, a cloud native application is a lot of things we said like portable. I think of micro services when II] think of a cloud native application. But it’s also an application that can modify the infrastructure it needs via API calls, right?

If your application needs a service or needs a networking connection, it can – the application itself can manifest that via cloud offering, right? That’s what I always thought of as a cloud native application, right? If you need like a database, the application can reach out to like AWS RDS and spin up the database and that was an aspect of I always found very fascinating with cloud native applications, it isn’t necessarily the definition but for me, that’s the part that I was really focused on I think is quite interesting.

[0:04:32.9] BL: Also, CI/CD cloud native apps are made to work well with our CI, our seamless integration and our continuous delivery/deployment systems as well, that’s like another very important aspect of cloud native applications. We should be able to deploy them to production without typing anything in. should be some kind of automated process.

[0:04:56.4] NL: Yeah, that is for sure. Carlisia, you mentioned something that I think it’s good for us to talk about a little bit which is terminology. I keeping coming back to that. You mentioned monolithic apps, what are monoliths then?

[0:05:09.0] CC: I am so hung up on what you just said, can we table that for a few minutes? You said cloud native applications for you is an application that can interact with the infrastructure and maybe for example, is the database. I wonder if you have an example or if you could expand on that, I want to – if everybody agrees with that, I’m not clear on what that even is. Because as a developer which is always my point of view is what I know.

It’s a lot of responsibility for the application to have. And for example, when I would think cloud native and I’m thinking now, maybe I’m going off on a tangent here. But we have Kubernetes, isn’t that what Kubernetes is supposed to do to glue it all together? So, the application only needs to know what it needs to do. But spinning up an all tight system is not one of the things it would need to do?

[0:05:57.3] BL: Sure, actually, I was going to use Kubernetes as my example for cloud native application. Because Kubernetes is what it is, an app, right? It can modify the cloud that it’s running. And so, if you have Kubernetes running in AWS, you can create ELB’s, elastic load balancers. It can create new nodes. It can create new databases if you need, as I mentioned. Kubernetes itself is my example like a cloud native application.

I should say that that’s a good callout. My example of what a cloud native application isn’t necessarily like that’s a rule. All cloud native applications have to modify the cloud in which they exist in. It’s more that they can modify. That is a component of a cloud native application. Kubernetes is being an example there. I don’t know, I guess things like operators inside of Kubernetes like the rook operator will create storage for you when you spin up like root create a Ceph cluster, it will also spin up like the ELB’s behind it or at least I believe it does. Or that kind of functionality.

[0:06:57.2] CC: I can see what you're saying because for example, if I choose to use the storage inside something like Kubernetes, then you will be required of my app to call an SDK and connect so that their storage somehow. So, in that sense I guess, you are using your app. Someone correct me if I’m wrong but that’s how the connection is created, right? You just request – but you’re not necessarily saying I want this thing specific, you just say I want this sort of thing like which has their storage and then you define that elsewhere. So, your applications don’t need to know details bit definitely needs to say, I need this. I’m talking about again, when your data storage is running on top of Kubernetes and not outside of it.

[0:07:46.4] BL: Yeah.

[0:07:47.3] NL: That brings up an interesting part of this whole term cloud native app. Because it’s like everything else in the space, our terms are not super concrete and an interesting piece about this is that an application – does an application half the map one to one with the running process? What is an application?

[0:08:06.1] NL: That is interesting because it could say that a serverless app or a serverless rule, whatever serverless really is, I guess we can get into that in another episode. Are those cloud native applications? They’re not just running anywhere.

[0:08:19.8] JR: I will punt on that because I know my boundaries are and that definitely not in my boundaries. But the reason I bring this up is because a little while ago, it’s probably year ago in a Kubernetes [inaudible 0:08:32] apps, we actually have a conversation about what an application was. And the consensus from the community and from the group members was that actually, an application could be made up of multiple processes. So, let’s say you were building this large SaaS service and because you’re selling dog food online, your application could be your dog food application.

But you have inventory management. You have a front end, maybe you haven’t had service, you have a shipping manager and things like that. Sales tax calculator. Are those all applications? Or is it one application? The piece about cloud application are cloud native applications because what we found in Kubernetes is that the way we’re thinking about applications is, an application is multiple processes, that can be linked together and we can tell the whole story of how all those interact and working.

Just something else, another way to think about this.

[0:09:23.5] NL: Yeah, that is interesting, I never really considered that before but that makes a lot of sense. Particularly with the rise of things like GRPC and the ability to send dedicated messages to are like well codified messages too different processes. That gives rise to things like this multi-tenant process as an application.

[0:09:41.8] BL: Right. But going back to your idea around cloud native applications being able to commandeer the resources that they’re needing. That’s something that we do see. We see it within Kubernetes right now. I’ll give you above and beyond the example that you gave is that whenever you create a staple set. And Kubernetes, the operator behind staple set that actually goes and provisions of PPC for you, you requested a resource and whatever you change the number of instances from one to like five, guess what? you get four more PPC’s.

Just think about it, that is actually something that is happening, it’s a little transparent with people. but I can see to the point of we’re just requesting a new resource and if we are using cloud services to watch our other things, or our cloud native services to watch our applications, I could see us asking for this on demand or even a service like a database or some other type of queuing thing on demand.

[0:10:39.2] CC: When I hear things like this, I think, “ Wow, it sounds very complicated. "But then I start to think about it and I think it’s really neat because it is complicated but the alternative would have been way more complicated. I mean, we can talk about, this is sort of how it’s done now. I mean, it’s really hard to go into details on a one-hour episode. We can’t cover the how it’s done or make conceptually, we are sort of throwing a lot of words out there sort of conceptualize it but we can also try to talk about it in a conceptual way how it is done in a non-cloud native world. 

[0:11:15.3] NL: Yeah, I kind of want to get back to the question I posed before, what is a monolithic app, what is a none cloud native app? And not all none cloud native apps are monoliths but this is actually something that I’ve heard a lot and I’ll be honest. I have an idea of what a monolithic app is but I think I don’t have a very good grasp of it.

We kind of talked a bit about like what a cloud native app is, what is a none cloud native or what came before a cloud native applications. What is a monolith?

[0:11:39.8] CC: I’m personally not a big fan of monoliths. Of course, I worked with them but once micro services started becoming common and started developing in that mode. I am much more of a fan of breaking things down for so many different reasons. It is a controversial topic for sure. But to go back to your question, the monolith is basically, you have an app, sort of goes to what Brian was saying, it’s like, what is an app? If you think of an app and like one thing, Amazon is an app, right? 

It’s an app that we use to buy things as consumers. And you know, the other part is the cloud. But let’s look at it like it’s an app that we use to buy things as consumers, we know it’s broken down to so many different services. There is the checkout service, there is the cart service. I mean, I’m imagining, these I can imagine thought, the small services that compose that one Amazon app. 

If it was a monolith, those services that you know – those things are different systems that are talking together. The whole thing would be on one code base. It would reside in same code base or it will be deployed together. It will be shipped together. If you make a change in one place and you needed to deploy that, you have to deploy the whole thing together.

You might have teams that are working on separate aspects but they’re working against the same code base. And maybe because of that, that will lend itself to teams not really specializing on separate aspects because everything is together so you might make one change of the impacts another place and then you have to know that part as well. So, there is a lot less specialization and separation of teams as well.

[0:13:32.3] BL: Maybe to give an example of my experience and I think it aligns with a lot of the details Carlisia just went over. Even taking five years back, my experience at least was, we’d write up a ticket and we’d ask somebody to make a server space for us, maybe run [inaudible 0:13:44] on it, right? We’d write all this Java code and we’d package it into these things that run on a JDL somewhere, right? We would deploy this whole big application you know?Let’s call it that dog food app, right? 

It would have maybe even like a state layer and have the web server layer, maybe have all these different pieces all running together, this big code base as Carlisia put it. And we’d deploy it, you know, that process took a lot of time and was very consuming especially when we needed to change stuff, we didn’t have all these modern API’s and this kind of decoupled applications, right?

But then, over time, you know, we started learning more and more about the notion of isolating each of these pieces or layers. So that we could have the web server, isolated in its how, put some site container or a unit and then the state layer and the other layers even isolated, you know, the micro service approach more or less.

And then we were able to scale independently and that was really awesome. so we saw a lot of the gains in that respect. We basically moved our complexity to other areas, we took our complexity that you need to all happen in the same memory space and we moved a lot of it into the network with this new protocols of that different services talk to one another.

It’s been an interesting thing kind of seeing the monolith approach and the micro service approach and how a lot of these micro service apps are in my opinion a lot more like cloud native aligned, if that makes sense? Just seeing how the complexity shows around in that regard.

[0:15:05.8] CC: Let me just say one more thing because it’s actually the biggest aspect of micro services that I like the most in comparison, you know, the aspect of monolith that I hate the most and that I don’t hate it, I appreciate the least, let’s put it that way. Is that, when you have a monolith, it is so easy because design is hard so it’s so easy to couple different parts of your app with other parts of your app and have couples cold and coupled functionality. When you break this into micro services, that is impossible. 

Because it was working with separate code bases. If you force to think what is your interface, you’re always thinking about the interface and what people need to consume from you, your interface is the only way into your app, into your system. I really like the aspect that it forces you to think about your API. And people will argue, “Well you can’t put the same amount of effort into that if you have a monolith.” Absolutely, but in reality, I don’t see it. And like Josh was saying, it is not a walk on the park, but I’d much rather deal with those issues, those complexities that Microsoft has create then the challenges of running a big – 

I’m talking about big monoliths, right? Not something trivial.

[0:16:29.8] JR: I will come to distil this about how I look at monoliths and how it fits into this conversation. A monolith is simply an application that is or a single process in this case that is running both the UI, the front-end code and the code that fetches the state from a data store, whether that be disk or database. That is what a monolith is.

The reasons people use monoliths are many but I can actually think of some very good reasons. If you have code reuse and let’s say you have a website and you were trying to – you have farms and you want to be able to use those form libraries or you have data access and you want to be able to reuse that data access code, a monolith is great.

The problem with monoliths is as functionality becomes larger, complexity becomes larger and not at the same rate. I’m not going to say that it is not linear but it’s not quite exponential. Maybe it logs into or something like that. But the problem is that at a certain point, you’re going to have so much functionality, you’re not going to be able to put it inside of one process, see Rails. Rails is actually a great example of this where we run into the issues where we put so much application into a rail source directory and we try to run it and we basically run up with these huge processes. And we split them up.

But what we found is that we could actually split out the front-end code to one process. We could spit out the middle ware, see multiple process in the middle, the data access layer to another process and we could use those, we could actually take advantage of multiple CPU cores or multiple computers. The problem with this is that with splitting this out, it’s complexity. So, what if you have a [inaudible 0:18:15] is, what I’m trying to say here in a very long way is that monoliths have their places. As a matter of fact, the encourage, at least I still encourage people to start with the monolith. Put everything in one place. Whenever it gets too big, you spit it out. 

But in a cloud native world, because we’re trying to take advantage of containers, we’re trying to take advantage of cords on CPUs, we’re trying to take advantage of multiple computers to do that in the most efficient way, you want to split your application up into smaller pieces so that your front end versus your middle layer, versus your data access layer versus your data layer itself can run on as many computers and as many cores as possible. Therefore, spreading thee risk and spreading the usage because everything should be faster.

[0:19:00.1] NL: Awesome. That is some great insight into monolithic apps and also the benefit and pros and cons of them. Like something I didn’t have before. Because I’ve only ever heard of a praise monolithic apps and then it’s like said in hushed tones or what the swear word directly after it. And so, it’s interesting to hear the concept of it being that each way you deploy your application is complex but there are different tradeoffs, right? 

It’s the idea that I was like, “Why don’t you want to turn your monolithic into micro services? Well, there’s so much more overhead, so much more yak shaving you have to do to get there to take advantage of micro services. That was awesome, thank you so much for that insight.

[0:19:39.2] CC: I wanted to reiterate a couple aspects of what Brian said and Josh said in regards to that. One huge advantage, I mean, your application needs to be substantial enough that you feel like you need to do that, you’re going to get some advantage from it. when you had that point, and you do that, you’re clearing to services like Josh was saying and Brian was saying, you have the ability to increase your capabilities, your process capabilities based on one aspect of the system that needs it.

So, you have something that requires very low processing, you run that service with certain level of capabilities. And something that like your orders process or your orders micro service. You increase the processing power for that much more than some other part. When it comes to running this in the cloud native world, I think this is more an infrastructure aspect. But my understanding is that you can automate all of that, you can determine, “Okay, I have analyzed my requirements based on history and what I need is stacks. So, I’m going to say tell the cloud native infrastructure, this is what I need in the automation will take care of bringing the system up to that if anything happens.” 

We are always going to be healing your system in an automated way and this is something that I don’t think gets talked about enough like we say, we talk about, “Oh things split up this way and they’re run this way but in an automated mode that these makes all of the difference. 

[0:21:15.4] NL: Yeah that makes a lot of sense actually. So, basically analytic apps don’t give us the benefit of automation or automated deployment versus like micro services kind of give us and cloud native applications give us the rise. 

[0:21:28.2] BL: Yes, and think about this, whenever you have five micro services delivering your applications functionality and you need to upgrade the front-end code for the HTML, whatever generates the HTML. You can actually replace that piece or replace that piece and that not bring your whole application down. And even better yet, you can replace that piece one at a time or two at a time, still have the majority of your applications still running and maybe your users won’t even know at all. 

So, let’s say you have a monolith and you are running multiple versions of this monoliths. When you take that whole application down, you literally take the whole application down not only do you lose front-end capacity, you also lose back-end capacity as well. So, separating your app is actually smarter than the long run because what it gives you is the flexibility to mix and match and you could actually scale the front end at a different level than you did at the backend. 

And that is actually super important in [inaudible 0:22:22] land and actually Python land and .NET land if you’re writing monoliths. You have to scale at the level of your monolith and if you can scale that then you are having wasted resources. So smaller micro services, smaller cloud native apps makes the run of containers, actually will use less resources. 

[0:22:41.4] JR: I have an interesting question for us all. So obviously a lot of cloud native applications usually maybe look like these micro services we’re describing, can a monolith be a cloud native application as well?

[0:22:54.4] BL: Yes, it can. 

[0:22:55.1] JR: Cool. 

[0:22:55.6] NL: Yeah, I think so. As long as the – basically monolith can be deployed in the mechanism that we described like CSAD or can take advantage of the cloud. I believe the monolith can be a cloud native application, sure. 

[0:23:08.8] CC: There are monolith – because I am glad you brought that up because I was going to bring that up because I hear Brian using the micro services in cloud native apps interchangeably and it makes it really hard for me to follow, “Okay, so what is not cloud native application or what is not a cloud native service and what is not a cloud native monolith?” 

So, to start this thread with the question that Josh just asked, which also became my question: if I have a monolith app running a cloud provider is that a cloud native app? If it is not what piece of puzzle needs to exists for that to be considered a cloud native app? And then the follow up question I am going to throw it out there already is why do we care? What is the big deal if it is or if it isn’t? 

[0:23:55.1] BL: Wow, okay. Well let’s see. Let’s unpack this. I have been using micro service and cloud native interchangeably probably not to the best effect. But let me clear up something here about cloud native versus micro services. Cloud native is a big term and it goes further than an application itself. It is not only the application. It is also the environment of the application can run in. It is the process that we use to get the application to production. 

So, monoliths can be cloud native apps. We can run them through CI/CD. They can run in containers. They can take advantage of their environment. We can scale them independently. but we use micro services instead this becomes easier because our surface area is smaller. So, what I want to do is not use that term like this. Cloud native applications is an umbrella term but I will never actually say cloud native application. I always say a micro service and the reason why I will say the micro service is because it is much more accurate description of that process that is running. Cloud native applications is more of the umbrella. 

[0:25:02.0] JR: It is really interesting because a lot of the times that we are working with customers when they go out and introduce them to Kubernetes, we are often times asked, “How do I make my application cloud native?” To what you are talking about Brian and to your question Carlisia, I feel like a lot of times people are a little bit confused about it because sometimes they are actually asking us, “How do I break this legacy app into smaller micro services,” right? 

But sometimes they are actually asking like, “How do I make it more cloud native?” And usually our guidance or the things that we are working with them on is exactly that, right? It is like getting that application container so we can get it portable whether it is a monolith or a micro service, right? We are containerizing it. We are making it more portable. We are maybe helping them out with health checks that the infrastructure environment that they are running in can tap into it and know the health of that application whether it’s to restart it with Kubernetes as an example. 

We are going through and helping them understand those principles that I think fall more into the umbrella of cloud native like you are saying Brian if I am following you correctly and helping them kind of enhance their application. But it doesn’t necessarily mean splitting it apart, right? It doesn’t mean running it in smaller services. It just means following these more cloud native principles. It is hard talk up so that was continuing to say cloud native right? 

[0:26:10.5] BL: So that is actually a good way of putting it. A cloud native application isn’t a thing. It is a set of principles that you can use to guide yourself to running apps in cloud environments. And it is interesting. When I say cloud environments I am not even really particularly talking about Kubernetes or any type of scheduler. I am just talking about we are running apps on other people’s computers in the cloud this is what we should think about and it goes through those principles. 

Where we use CI/CD, storage maybe most likely will be ephemeral. Actually, you know what? That whole process, that whole virtual machine that we are running on that is ephemeral too, everything will go away. So, cloud native applications is basically a theory that allows us to be strategic about running applications with other people’s computers and storage and networking and compute may go away. So, we do this at this way, this is how to get our 5-9’s or 4-9’s above time because we can actually do this. 

[0:27:07.0] NL: That is actually a great point. The cloud native application is one that can confidently run on somebody else’s computer. That is a good stake in the ground. 

[0:27:15.9] BL: I stand behind that and I like the way that you put it. I am going to steal that and say I made it up. 

[0:27:20.2] NL: Yeah, go ahead. We have been talking about monoliths and cloud native applications. I am curious, since you all are developers, what is your experience writing cloud native applications? 

[0:27:31.2] JR: I guess for green field projects where we are starting from scratch and we are kind of building this thing, it is a really pleasant experience because a lot of things are sort of done for us. We just need to know how to interact with the API or the contract to get the things we need. So that is kind of my blanket statement. I am not trying to say it is easy, I am just saying like it has become quite convenient in a lot of respects when adopting these cloud native principles. 

Like the idea that I have a docker file and I build this container and now I am running this app that I am writing code for all over the place, it’s become such a more pleasant experience and at least in my experience years and years ago with like dropping things into the tomcat instances running all over the place, right? But I guess what’s also been interesting is it’s been a bit hard to convert older applications into the cloud native space, right? 

Because I think the point Carlisia had started with around the idea of all the code being in one place, you know it is a massive undertaking to understand how some of these older applications work. Again, not saying that all older applications are only monoliths. But my experience has been that they generally are. Their bigger code base is hard to understand how they work and where to modify things without breaking other things, right? 

When you go and you say, “All right, let’s adopt some cloud native principles on this app that has been running on the mainframe for decades” right? That is a pretty hard thing to do but again, green field projects I found it to be pretty convenient. 

[0:28:51.6] CC: It is actually easy, Josh. You just rewrite it.

[0:28:54.0] JR: Totally yes. That is always a piece of cake. 
,
[0:28:56.9] BL: You usually write it in Go and then it is cloud native. That is actually the secret to cloud native apps. You write it in Go, you install it, you deploy in Kubernetes, mission accomplish, cloud native to you. 

[0:29:07.8] CC: Anything written in Go is cloud native. We are declaring that here, you heard that here first. 

[0:29:13.4] JR: That is a great question, it’s like how do we get there? That is a hard question and not one that I would basically just wave a magic set of words over and say that we are there. But what I would say is that as we start thinking of moving applications to cloud native first, we need to identify applications that cannot be called updated and I could actually give you some. Your Windows 2003 applications and yes, I do know some of you are running 2003 still. 

Those are not cloud native and they never will be and the problem is that you won’t be able to run them in a containerized environment. Microsoft says stop using 2003, you should stop using it. Other applications that won’t be cloud native are applications that require a certain level of machine or server access. We have been able to attract GPU’s. But if you’re working on the IO level like you are actually looking at IO or if you are looking at hardware interrupts. 

Or you are looking at anything like that, that application will never be cloud native. Because there is no way that we can in a shared environment, which most likely your application will be running in, in the cloud. There is no way that first of all that the hypervisor that is actually running your virtual machine wants to give you that process or give you that access or that is not being shared from one to 200 other processes on that server. 

So, applications that want low level access or have real time, you don’t want to run those in the cloud. They cannot be cloud native. That still means a lot of applications can be. 

[0:30:44.7] CC: So, I keep thinking of if I own a tech stack and I every once in a while stop and evaluate, if I am squeezing as most tech as I can out of my system? Meaning am I using the best technology out there to the extent that fits my needs? If I am that kind of person and I don’t know – it’s like when I say I am a decision maker and even if I was a tech person like I am also a tech person, I still would not have – unless I am one of the architects. 

And sometimes even the architects don’t have an entire vision. I mean they have to talk to other architects who have a greater vision of the whole system because systems that can be so big. But at any rate, if I am an architect or I own the tech stack one way or another, my question is, is my system a cloud native system? Is my app a cloud native app? I am not even sure that we clarified enough for people to answer that. I mean it is so complicated, maybe we did hopefully we helped a little bit. 

So basically, this will be my question, how do I know if I am there or not? Because my next step would be well if I am not there then what am I missing? Let me look into it and see if the cost benefit is worth it. But if I don’t know what is missing, what do I look at? How do I evaluate? How do I evaluate if I am there and if I am not, what do I need to do? So, we talked about this a little bit on episode one, which we talked about cloud native like what is cloud native in general and now we are talking about apps. 

And so, you know, there should be a checklist of things that cloud native should at least have these sets of things. Like the 12-factor app, what do you need to have to be considered 12 factor app. We should have a checklist, 12 factor app I think having that checklist is being part of micro-service in the cloud native app. But I think there needs to be more. I just wish we would have that not that we need to come up with that list now but something to think about. Someone should do it, you know? 

[0:32:57.5] JR: Yeah, it would be cool. 

[0:32:58.0] CC: Is it reasonable or now to want to have that checklist?

[0:33:00.6] BL: So, there is, there is that checklist that exist I know that Red Hat has one. I know that IBM has one. I would guess VMware has one on one of our web pages. Now the problem is they’re all different. What I do and this is me trying to be fair here. The New Stack basically they talk about things that are happening in the cloud and tech. If you search for The New Stack in cloud native application, there is a 10-bullet list. That is what I send to people now. 

The reason I send that one rather than any vendor is because a vendor is trying to sell you something. They are trying to sell you their vision of cloud native where they excel and they will give you products that help you with that part like CI/CD, “oh we have a product for that.” I like The New Stack list and actually, I Googled it while you were talking Carlisia because I wanted it to bring it up. So, I will just go through the titles of this list and we’ll make sure that we make this link available. 

So, there is 10 Key Attributes of Cloud-Native Applications. Package as light weight to containers. Developed with best-of-breed languages and frameworks, you know that doesn’t mean much but that is how nebulous this is. Designed as loosely coupled microservices. Centered around API’s for interaction and collaboration. Architected with clean separation of stateless and stateful services. Isolated from server and operating system dependencies. 

Deployed on self-service elastic cloud infrastructure. Managed through agile DevOps processes. Automated capabilities. And the last one, Defined policy-driven resource allocation. And as you see, those are all very much up for interpretation or implementations. So, a cloud native app from my point of view tries to target most of these items and has an opinion on most of these items. So, a cloud native app isn’t just one thing. It is a mindset that I am running. Like I said before, I am running my software on other people’s computers, how can I best do this.?

[0:34:58.1] CC: I added the link to our shownotes. When I look at this list, I don’t see observability. That word is not there. Does it fall under one of those points because observability is another new-ish term that seems to be in parcel of cloud native? Correct me here, people. 

[0:35:19.1] JR: I am. Actually, the eighth item, ‘Manage through agile DevOps processes,’ is actually – they don’t talk about monitoring observability. But for an application for a person who is not developing application, so whether you have a dev ops team or you have an SRE practice, you are going to have to be able to communicate the status and the application whether it be through metrics logs or metrics logs or whatever the other one is. 

I am thinking – traces. So that is actually I think is baked in it is just not called out. So, to get the proper DevOps you would need some observability that is how you get that status when you have a problem. 

[0:35:57.9] CC: So, this is how obscure these things can be. I just want to point this out. It is so frustrating, so literally we have item eight, which Brian has been, as the main developer so he is super knowledgeable. He can look at that and know what it means. But I look at that and the words log metrics, observability none of these words are there and yet Brian knew that that is what it means that that is what he meant. And I don’t disagree with him. I can see it now but why does it have to be so obscure? 

[0:36:29.7] JR: I think a big thing to consider too is like it very much lands on spectrum, right? Like something you would ask Carlisia is how do I qualify if my app is cloud native or what do I need to do? And you know a lot of people in my experience are just adopting parts of this list and that’s totally fine. You know worrying about whether you fully qualify as a cloud native app since we have talked about it as more of a set of principles is something – 

I don’t know if there is too too much value in worrying about whether you can block that label onto your app as much as it is, “Oh I can see our organization our applications having these problems.” Like lacking portability when we move them across providers or going back to observability, not being able to know what is going on inside of the application and where the network packets are headed and they switched to being asked we’re late to see these happening. 

And as those problems come on, really looking at and adopting these principles where it is appropriate. Sometimes it might not be with the engineering efforts without them, one of the more cloud native principles. You know you just have to pick and choose what is most valuable to you. 

[0:37:26.7] BL: Yes, and actually this is what we should be doing as experts, as thought-leaders, as industry movers and shakers. Our job is to make this easier for people coming behind us. At one time, it was hard to even start an application or start your operating system. Remember when we had to load AN1, you know? Remember we had to do that back in the day on our basic, on our Comado64’s or Apple or Apple2. Now you turn your computer on and it comes with instantly. 

We click on application and it works. We need to actually bring this whole cloud movement to that point where things like if you include these libraries and you code with these API’s you get automatic observability. And I am saying that with air quotes but you get the ability to have this thing to monitor it in some fashion. If you use this practice and you have this stack, CI/CD should be super simple for you and we are just not quite there yet. 

And that is why the industry is definitely rotating around this and that is why there has been a lot of buzz around cloud native and Kubernetes is because people are looking at this to actually solve a lot of these problems that we’ve had. Because they just haven’t been solvable because everybody stacks are too different. But this one though, the reason Linux is I think ultimately successful is because it allowed us to do things and all of these Linux things we liked and it worked on all sorts of computers. 

And it got that mindset behind it behind companies. Kubernetes could also do this. It allows us to think about our data centers as potentially one big computer or fewer computers that allows us to make sure things are running. And once we have this, now we can develop new tools that will help us with our observability, with our getting software into production and upgraded and where we need it. 

[0:39:17.1] NL: Awesome. So, on that, we are going to have to wrap up for this week. Let’s go ahead and do a round of closing thoughts. 

[0:39:22.7] JR: I don’t know if I have any closing thoughts. But it was a pleasure talking about cloud native applications with you all. Thanks. 

[0:39:28.1] BL: Yeah, I have one thought is that all of these things that we are talking about it sounds kind of daunting. But it is better that we can have these conversations and talk about things that don’t work rather than not knowing what to talk about in general. So this is a journey for us and I hope you come for more of our journey. 

[0:39:46.3] CC: First I was going to follow up on Josh and say I am thoughtless. But now I want to fill up on Brian’s and say, no I have no opinions. It is very much what Brian said for me, the bridging of what we can do using cloud native infrastructure in what we read about it and what we hear about it like for people who are not actually doing it is so hard to connect one with the other. I hope by being here and asking questions and answering questions and hopefully people will also be very interactive with us. 

And ask us to talk about things they want to know that we all try to connect it too little by little. I am not saying it is rocket science and nobody can understand it. I am just saying for some people who don’t have multi background experience, they might have big gaps. 

[0:40:38.7] NL: And that is for sure. This was a very useful episode for me. I am glad to know that everybody else is just as confused at what cloud native applications actually mean. So that was awesome. It was a very informative episode for me and I had a lot of fun doing it. So, thank you all for having me. Thank you for joining us on this week of the Kublets Podcast. And I just want to wish our friend Brian a very happy birthday. Bye you all. 

[0:41:03.2] CC: Happy birthday Brian. 

[0:41:04.7] BL: Ahhhh. 

[0:41:05.9] NL: All right, bye everyone. 

[END OF EPISODE]

[0:41:07.5] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
