---
episode_id: 004-observability
episode_number: 4
title: Understanding Observability
description: Observability - what the term means, how it relates to the process of software development, and the importance of investing in a culture of observability.
notes: Welcome to the fourth episode of The Podlets podcast! Today we speak to the topic of observability - what the term means, how it relates to the process of software development, and the importance of investing in a culture of observability. Each of us has a slightly different take on what exactly observability is, but roughly we agree that it is a set of tools that you can use to observe the interactions and behavior of distributed systems. Kris gives some handy analogies to help understand the growing need for observability due to rising scale and complexity. We then look at the three pillars of observability, and what each of these pillars look like in the process of testing and running a program. We also think more about how observability applies to the external problems that might arise in a system. Next up, we cover how implementing observability in teams is a cultural process, and how it is important to have a culture that accepts the necessity of failure and extensive time spend problem-solving in coding. Finally, the conversation shifts to how having a higher culture of observability can do away with the old problem of calling the dinosaur in a team who knows the code backward every time an error crops up. 
# video: https://www.youtube.com/embed/dQw4w9WgXcQ
# related: # appears in sidebar, no limit in related episodes. identify by `episode_id`
# - 001-cloud-native
---

EPISODE 04

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:40.5] CC: Hi everyone, welcome back to episode four. Today we’re going to talk about observability. I am Carlisia Campos. Today here on the show with me are Duffy Coolie. 

[0:00:52.7] DC: How are you doing folks? I’m Duffy Coolie, I’m staff field engineer here at VMware and looking forward to this topic.

[0:00:58.9] CC: Also with us is Kris Nova.

[0:01:03.2] CN: Hey everyone, I’m Kris Nova. I’m a developer advocate. I code a lot. I hang out in Kubernetes.

[0:01:09.7] CC: I don’t want to be left out. I’m an engineer in the open source project called Valero that does backup and recovery for your Kubernetes applications. So, observability, why do we care?

[0:01:25.6] KN: That’s the million-dollar question right there honestly.

[0:01:28.0] DC: It sure is.

[0:01:30.3] KN: I don’t know, I have a lot of thoughts on observability. I feel like it’s one of those words that it’s kind of like dev ops. It depends which day of the week you ask a specific person, what observability means that you’ll get a different answer.

[0:01:43.3] DC: Yeah, I agree with that. It seems like it’s one of those very hot topics. I mean, it feels like people often conflate the idea of monitoring and logging of an application with the idea of observability and what that means. I’m looking forward to kind of digging into the details of that.

[0:01:59.9] KN: What does observability mean to you Duffy?

[0:02:04.0] DC: In my take, observability is a set of tools that can be applied to describe the way that data moves through a distributed system. Whether that data is a particular request or a particular transaction, in this way, you can actually understand the way all of these distributed parts of this system that we’re building are actually interacting. As you can imagine, things like monitoring and metrics are a part of it, right?

Like being able to actually understand how the code is operating for this particular piece of the system, it’s definitely a key part of understanding how that system is operating but when we think of it as a big distributed system with terrible network demons in between and lots of other kind of stuff in between. I feel like we need kind of a higher level of context for what’s actually happening between all those things and that’s where I feel like the term observability fits.

[0:02:55.5] KN: Year, I think I generally agree with that. I’ve got a few nuances that I like to pick out but I have high opinions but yeah, I mean, I hear a lot about it. I have my own ideas on what it means but like, why do we need it?

[0:03:06.2] DC: I want to hear your idea to what it is, how would you define it?

[0:03:08.8] KN: I mean, we have an hour to listen to me rant about observability. I mean, basically, okay, I’m an infrastructure engineer. I wrote this book Cloud Native Infrastructure, everything to me is some layer of software running on top of it, infrastructure, and observability to me is, it solves this problem of how do I gain visibility into something that I want to learn more about. I think my favorite analogy for observability, have you all ever been to like you know, like a gas station or a convenience store?

On the front door, it’s like a height scale chart, it will say like four feet, five feet, six feet, seven feet. I always wondered what that was for and I remember I went home one day and I googled it and it turns out, that’s actually for, if the place ever gets robbed as the person runs out the front door, you get a free height measurement of how tall they are so you can help identify them later.

To me, that’s like the perfect description of observability. It’s like cleverly sneaking and things into your system that can help you with a problem later downstream.

[0:04:10.0] DC: I like that.

[0:04:11.0] KN: Yeah.

[0:04:12.5] CC: Observability is sort of a new term because it’s not necessarily something that I, as a developer would jump in and say, “Gee, my project doesn’t do observability. I need it.” I understand metrics and I understand logging, monitoring. Now I hear observability. Of course I read about it to talk about it on the show and I have been running into this word everywhere but why are people talking about observability? That’s my question.

[0:04:45.8] KN: Yeah. Well, I think this kind of goes back to the gas station analogy again, right? What do you do when your metaphorical application gets robbed? What happens in the case of a catastrophic problem and how do you go about preparing yourself the best way possible to have an upper hand at solving that problem?

[0:05:04.6] DC: Leah.

[0:05:05.2] KN: Right? You know, some guy robbed a store and ran out the front door and we realized, “We have no idea how tall he is, he could be four feet tall or he could be six feet tall.” You know, we learn the hard way that maybe we should start putting markers on the door. I feel like observability is the same thing but I feel like people just kind of wake up and say like, “I need observability. I’m going to go and you know, I need all of these bells and whistles because my application of course is going to break,” and I feel like in a weird way that’s almost a cop out.

We should be working on application before we work on preparing for catastrophic failure.

[0:05:37.6] CC: Why didn’t I hear the word observability 10 years ago or even five years ago? I think it’s about two years ago.

[0:05:45.9] DC: I’ll argue that the term observability is coming up more frequently and it’s certainly a hot topic today because of effectively context, still comes back down to context. When you’re in a situation where your application, you built like a cloud native architecture of your application, you got a bunch of different services that are intercommunicating or maybe all communicating to some put together shared resource. And things are misbehaving, you’re going to need to have the context to be able to understand how it’s breaking or at what point it’s breaking or where in the tangled web that we move is the problem actually occurring and can we measure that at that point? 

Traditionally like in a monolithic architecture, you're not really looking at that, maybe break over the monolith, you set up a couple of set points, you’re looking for the way particular clip pads work or if you’re on top of the game, you might like instrument your code in such a way that will emit events when particular transactions happen or particular things happen.

You’re going to be looking at those events and logs and looking at metrics to figure out how this one application is performing or behaving. With observability, we have to solve that problem across many systems.

[0:06:54.2] CC: That is why I put on the shownotes that it has to do something with the idea of cattle versus [inaud]. Because, I’m saying this because Duffy was asking me before we started recording why was that on the show notes. Because correct me if I’m wrong, I think you are going the direction of saying you don’t see, you don’t see the relation but the relation that I was thinking about was exactly what you just said.

If I have a monolith, I’m looking at one thing, we’re both looking at one log. I can treat that as my little pad as supposed to when I have many micro services interacting. I can’t even treat anything, if I treated them as badly without that, right? Because I can’t. This is too much. The idea of the reason why observability is necessary sounds to me like that is a problem of scale and complexity.

[0:07:46.2] KN: Yeah, I think that explains why we’re just now hearing it too, right? I’m trying to think of another metaphor here. I guess today’s going to be a metaphor day for me. Got it, okay. I just got back from London last week. I had gotten of the tube and I remember I came up to the surface and blinding light is in my eyes and all of a sudden it’s all sign for Scotland Yard and I was like “Wow, I remember this from all the detective sleuth stories of my childhood.” It dawned on me that the entire point of this part of London was there to help people recover from disasters.

I thought about why we don’t have Scotland Yard type places anymore and it’s because we have security systems and we have like different things in place that we had to kind of learn the hard way we needed and we had to develop technology to help make that easier for us and I feel like we’re just kind of at that cusp of like our first wave of security cameras. Metaphorical security cameras with observability.

We’re at that first wave of, we can instrument our code and we can start building our systems out with this idea of, “I want to be able to view it or observe it over time in the case of trying to learn more about it or debugging a problem.”

[0:08:52.1] DC: Yeah.

[0:08:52.9] CC: How do people handle – I’m asking this question because truly, I have yet to have this problem for my project that I need to do observability in my project. I need to make sure my project is observable. I mean, other than the bread and butter metrics and logging, that’s what we do at Valero. We don’t do anything further than that.

But, I don’t know if those are the things are constitute observability but what Nova just said, my question is, when we want to look at this stuff later but we’re also talking about cattle and this things. Supposedly, your servers are ephemeral. They can go away and go back. How do we look at, how do we observe things if they have gone away?

[0:09:41.1] KN: Year. That’s where we get into like, this exciting world of like, how long do we persist our data and which data do we track? And there’s, you know, a lot of schools of thought and a lot of different opinions around what the right solution here is but I think it kind of just boils down to every application and set of concerns is going to be unique and you’re just going to have to give it some thought.

[0:10:01.9] CC: Should we talk more about that because that sounds very interesting.

[0:10:04.4] KN: Yeah. I mean, I guess we should probably just start off with like, given a simple application, concretely, what does it mean to build out ‘observability’ for that application?

[0:10:18.3] DC: There’s this idea of in a book called Distributed Systems Observability by Cindy Sridharan. I’m probably slaughtering her name but she wrote that there’s like these three pillars and the three pillars are events, metrics and traceability or tracing. Events, metrics and tracing. These are the three pillars of observability. If we were going to lay out the way that those things might apply to just any old application like a monolith then we might look at how – 

[0:10:45.3] KN: Can we just use like a WordPress blog, just like for an example. It’s got a data score, it’s got a thin layer of software and an API.

[0:10:53.0] DC: Sure, like a WordPress app. The first thing we try to do is actually figure out what events we would like to get from the application and figure out how the instrument our application such that we’re getting useful data back as far as like the event stream. Frequently I think that – or in my experience, the things that you want to instrument in your application or it calls that your application is going to make that might represent a period of time, right?

If it’s going to make a call to an external system, that’s something that you would definitely want to emit an event for if you’re trying to understand you know, where the problems are going sideways, like how long it took to actually make a query against the database in the back of a WordPress blog. It’s a great example, right?

[0:11:33.5] KN: Question, you said the word instrumentation. My understanding of instrumentation is there’s kind of a bit of an art to it and you’re actually going in and you're adding like lines of code to your application that on line 13, we say ‘starting transaction’, on line 14, we make an https transaction and on the next line, we have, ‘the event is now over’ and we can sort of see that and discover that we made this https transaction and see where it broke, if it broke at all. Am I thinking about that right? 

[0:12:05.2] DC: I think you are but what’s interesting about that, the reporting on line 14, right? Where you're actually saying the event is over, right? I think that we end up actually measuring this in both in event stream and also in a metric, right? So that we can actually understand, of the last hundred transactions to the database, you know, are we seeing any increase in the amount of time and the process takes, like are we actually, you know, is this something that we can measure with metrics and understand, like, is this value changing over time? And then from the event perspective, that’s where we start tying in things like, contextually, in this transaction, what happened, right?

In this particular event, is there some way that we can correlate the event with perhaps a trace and we’ll talk a little bit more about tracing too but like – so that we can understand, “okay, well, we have” – at 2:00 we see that there is like an incredible amount of latency being introduced when my WordPress blog tries to write to the database and it happens, every day at 2:00. I need to figure out what’s happening there.

That’s a great – to even get to the point where I understand it’s happening at 2:00, I need things like metrics and need things like the events, specifically to give me that time correlation to understand, it’s at two.

[0:13:18.7] KN: This is where we get into what Carlisia just asked about which was how do we solve this problem of what do we do when it goes away? In the case of our 2 PM database latency. For a lack of a better term, let’s just call it the heartbeat, the 2 PM heartbeat. What happens when the server that we’re experiencing, that latency, mysteriously goes away? Where does that data go and then you look at tools like I know Prometheus does this in elastic search, has capability to do this, but you look at how do we start managing time series data and how do we start tracking that and recording it.

It’s a fascinating problem because you don’t actually record 2 PM. To this second and this degree of a second, this thing happened. You record how long it’s been since the previous event. You’re just constantly measuring deltas. It’s the same way that git works. Every time you do a get commit, you don’t’ actually write all 1,000 lines of software, you just write the one line that changed.

[0:14:15.6] DC: Yeah. I think you highlight a really – I mean, both of the two of you highlighted a really good point around like this little cattle versus pets thing. This actually is something that I spent a little time with in a previous life and the challenge is that especially in systems like Kubernetes and other systems where you have – perhaps your application is running or being scaled out dynamically or scaled down dynamically based on load.

You have all of these ephemeral events. You have all of this events that are from pods or from particular instances of your application that are ephemeral, they’re not going to be long lived. This highlights a kind of a new problem that we have to solve, I think, when we start thinking about cloud native architectures in that we have to be able to correlate that particular application with information that gives us the context to understand, like perhaps, this was this version of this application and these events are related to that particular version of the app. 

When we made a change, we saw a great reduction in the amount of time it takes to make that database call and we can correlate those new metrics based on the new version of the app and because we don’t have this like, as a long term entity that we can measure, like this isn’t like a single IP and a single piece of software that is not changing. 

This is any number of instances of our application deployed – like it makes you have to think about this problem fundamentally differently and how you store that data. This is where that cardinality problem that you’re highlighting comes in.

[0:15:45.2] KN: Yeah. Okay, I have a question. Open question for the group. What is the scope here? I guess, to like kind of like build on our WordPress analogy. Let’s say that every day at 2 PM we notice there’s this latency and we’ve spent the last two weeks just endlessly digging through our logs and trying to come up with some sort of hypothesis of what’s going on here and we just can’t find anything.

Everything we’ve talked about so far has been at the application layer of the stack. Instrumenting our application, debugging our application, making it https request. What should we do, or does observability even care if one of our hard drives is failing every day at 2 PM when the cleaning service comes by and accidentally bumps into it or something? How are we going to start learning about these deeper problems that might exist outside of our application layer which in my experience, those are the problems that really stick with you and really cause a lot of trouble.

[0:16:40.0] DC: Yeah, agreed. Or somebody has like scheduled a backup of your database every day at two is what locks the database for a period of time of the backup and you're like “Wait, when did that happen? Why did that happen?”

[0:16:51.4] KN: Somebody like commented out a line in the chron tab and then the server got reset and there’s like some magical bash grip somewhere on the server that goes and rewrites the chron tab. Who knows?

[0:17:00.9] DC: Yeah, these are the needles in the haystack that we’ve all stumbled upon one way or another.

[0:17:05.1] KN: Yeah, does observability, like, are we responsible for instrumenting like the operating system layer, the hardware layer?

[0:17:14.0] CC: Isn’t that what monitoring is, like, some sort of testing from the outside, like an external testing that – of course, you only – it gives us the information after the fact, right? The server already died. My application’s already not available so now I know.

[0:17:31.8] KN: Yeah.

[0:17:32.4] CC: But isn’t monitoring what would address a problem like that?

[0:17:36.1] DC: I think it definitely helps. I think what you're digging at Kris is correlation. Being able to actually identify at a particular period of time, what’s happening across our infrastructure, not just to our application. Being able to – and the important part is like how you even got to that time of day? Like, how do you know that this is happening, like, when you're looking for those patterns, how did you get to the point where you knew that it was happening at 2:00.

If you know that it’s happening at 2:00 because of the event stream per se, right? That actually gives you a time correlation. Now you can look at, “Okay, well now I have a time and now I need to like, scoot back to like a macro level and see” – 

[0:18:10.7] KN: Crank it up at 2 PM.

[0:18:12.9] DC: Yeah. Globally at 2:00, what’s going on in my world, right? Is there, you know – I know that these are the two entities that are responsible. I know that I have a bunch of pods that are running on this cluster, I know that I have a database that may be external to my cluster or maybe on the cluster. I need to really understand what’s happening in the world around those two entities as it correlates to that period of time to give me enough context to even troubleshoot.

[0:18:39.7] CC: How do you do it though? Because I’m still going to go back to the monitoring, I mean, if I’m using external service to ping my service and my service is down, yeah, I’m going to get the timing – right, I can go back and look at the information, the log stream. Would I know that it was because of the server? No. But should I be pinging the server too? Should I ping every layer of the infrastructure? How do people do that?

[0:19:05.4] KN: Yeah, that’s kind of what I was eluding to is like, where does observability at the application level stop and systems observability across the entire stack start and what tools do we have and where are the boundaries there?

[0:19:20.3] DC: I think this is actually where we start talking about the third pillar that we were referring to earlier which was tracing and the ability to understand from the perspective of a particular transaction across the system. What entities that particular transaction will touch and where it spends its time across that entire transaction so my query – what I was trying to do was actually like, you know, submit a comment on a WordPress blog. If I had a way of implementing tracing through that WordPress blog, I might be able to leave myself little breadcrumbs throughout the entire set of systems and understand, “Well, at what point did I – I mean, where in this particular web transaction am I spending time?” I might see that you know, from the load balancer, I begin my trace ID and that load balancer terminates to this pod and inside of that pod, I can see where I’m spending my time.

A little bit of time to kind of load the assets and stuff, a little bit of time for pushing my comments to the database and identifying what that database is, is the important part of that trace. If I understand – I need to know where that traffic is going to go next and how much time I spent in that transaction. You know, again, this is like down to that code layer. We should have some way of actually like leaving us – producing an event that may be related to a particular trace ID so that we can correlate the entire life cycle of that transaction. That unique trace ID across the entire process.

[0:20:45.2] KN: Interesting.

[0:20:45.7] DC: It helps us narrow the field to understand what all the bits are that are actually being touched that are part of the problem. Otherwise, we’re looking at the whole world and like obviously, that’s a much bigger haystack, right?

[0:21:00.4] KN: One of the things that I’ve kind of learned about Kubernetes is as I’ve been like working with Kubernetes and explaining it to people and going down the road and talking and doing public speaking. I found that it’s very easy for users to understand Kubernetes if you break it down into three things. Compute, network and storage.

What I’m kind of getting that here is like the application layer is probably going to be more relevant to the compute layer. Storage is going to be where – that’s observability. Storage is going to be more monitoring. That’s going to be what is my system doing, where am I storing my data, and then network is kind of related to tracing, what you’re looking at here, and these aren’t like necessarily one to one but it just kind of have – distribution of concerns here.

Am I thinking about that? Kind of the same way you are Duffy?

[0:21:42.8] DC: I think you are. I think what I’m trying to get to is like, I’m trying to identify the tools that I need to be able to understand what’s happening at 2:00 and all of the players involved in that, right? For that, I’m actually relying on tools that are pretty normal like the ability to actually monitor all the systems and understand and have like real time stamps and stuff that describes you know, that nodule server or what have you that says that you know, my backup for my SQL database started at 2:00 and ends at 2:30.

I’m relying on things like an event stream to say you know, get to give me some context of time like when my problem is happening and I’m relying on things like tracing perhaps just should narrow the field so that I can actually understand what’s happening with this particular transaction and what are the systems that I should be looking at, whether that is – there’s a bunch of time being spent on the network, so what’s going on with the network at 2:00. There’s a bunch of times being spent on persisting data to a database, what’s going on with the database? You know, like, this kinda gives me I think enough context to actually get into troubleshooting mode, right?

[0:22:50.2] KN: Yeah and I don’t want to take away from this lovely definition you just dropped on us but I want to take a stab at trying to summarize this. So observability, expands the whole stack. So I mean it is like if you look at the OSI reference model it is going to cover every one of those layers and all it really is just a fancy word for all of the tools to help us solve a problem. Yeah, sorry I am not trying to take away from your definition, right? I want to just simplify it so that like I can grapple it a little bit better. 

[0:23:22.2] CC: How about people? Does culture factor into it or it is just tools? 

[0:23:26.8] KN: I think culture is a huge part of it. Pesky humans. 

[0:23:28.0] DC: Yeah it is. 

[0:23:29.8] CC: Would this culture be tremendously different from what we get now usually at least with modern companies that doing modern software? 

[0:23:40.5] KN: I mean I definitely think like – 

[0:23:41.7] CC: Would it look different? 

[0:23:42.8] KN: Yeah, I definitely think there’s like – you can always tell. Like somebody once asked, “What is the difference between an SRE and a senior SRE?” And they were like, “patience,” And it is like you can always tell folks who have been burned because they take this stuff extremely seriously and I think that culture, like there is commodity there, like people are willing to pay for it if you can actually do a good job at going from chaotic problem, “I have no idea what is going on.” And making sense of that noise and coming up with a concrete tangible output that humans can take action on, I mean that is huge. 

[0:24:16.8] DC: Yeah it is. I was recently discussing the ability – in another medium. We were having a conversation around doing chaos testing and I think that this relates. And the interesting thing that came out of that for me was the idea that you know – I spent a pretty good portion of my career teaching people to troubleshoot, which is kind of weird. You know like teaching somebody to have an intuition about the way that a system works and giving them a place to even begin to troubleshoot a particularly complex problem, especially as we start building more and more complex systems, is really a weird thing to try and do. 

And I think that culturally, when you have embraced technologies like observability and embrace technologies like chaos engineering, I think that culturally you are actually not only enabling your developers, your operators, your SRE’s to experiment and understand how the system breaks at any point, but you are also enabling them to better understand how to troubleshoot and characterize these distributed systems that they are building. 

So I think that – and if that is a part, if that is a cultural norm within your company, I mean think about how many miles ahead you are of like the other people in your industry, right? You have made it through adopting these technologies. You have enabled your engineering teams, whether they’d be the people who are writing the code, whether they’d be the people who are operating the code, or the people who are just trying to keep the whole system up or provide you feedback to experiment and to develop hypothesis around how the system might break at a particular scale and to test that, right? And giving them the tools with which to actually observe this is critical, you know? Like it is amazing. 

[0:26:03.5] KN: Yeah, in my mind, again on my metaphor kick again, I think of the bank robber movies where they take dust and blow it into the air then all of a sudden you can see the lasers. Yeah, I’m feeling like that is what is happening here, is we’re kind of purpose – like chaos testing would just be the practice of intentionally breaking the lasers to make sure the security system works and observability is the practice of actually doing something to make those lasers visible so we can see what is going on. 

[0:26:31.0] CC: So because the two of you spend time with customers, or maybe Duffy more so than Nova, but definitely, I spent zero time. I spent zero. I am curious to know if someone, let’s say an SRE, wants to implement a set of practices that comprise what we are talking about and saying it is observability but they need to get a buy out from other people. How do you suggest they go about doing that?

Because they might know how to do it or be willing to learn but they might need to get approval or they need to get a buy out – I am sorry, a buy in from their managers, from their colleagues, you know, there is a benefit and there is a cost. How will somebody present that? I mean we just talked about – I am sorry Nova, definitely just give us a laundry list of benefits but how do you articulate that in a way you prove those benefits are worth the cost and what are the costs? What are the tradeoffs? 

[0:27:36.4] KN: Yeah, I mean I think this is such a great question because in my career, I have worked the world’s most paranoid software as a service shop where I mean everything we did, we baked like emergency disaster recovery into it, every layer of everything we did, and I have also worked at shops that are like, “No, we ain’t got time for that, like hurry up and get your code moved and pushed to production,” and I mean I think there is pros and cons to each. 

But I think, you know, as you look at the value you have in your application, you are going to come up with some sort of way of concretely measuring that, of saying like, “This is an application that brings in 500 bucks a month,” or whatever, and depending on that cost or how much your application is worth to you is going to depend on I think how seriously you take it. For instance, a WordPress blog is going to probably not have the same level of observability with concerns than like maybe a bank routing system have. 

So I think as your application gets more and more valuable your need for observability and your need for these tools is going to go up more. 

[0:28:37.6] DC: I agree. I think from the perspective of like, how do you convince, maybe an existing engineering culture to make this jump, to introduce these ideas? I think that that is a tricky question because effectively what you are trying to do is kind of enable that cultural shift that we were talking about before, about like, what tools would set up the culture to succeed as they build out these applications and distributed systems that are going to make up or that are going to comprise the basis of what your product is, right? What tool? 

And getting to that, coming at that from a SRE perspective that needs air cover to be able to actually have those tough conversations with your developers and say, “Look, this is why we do it that way and this is something I can help you do but fundamentally, we need to instrument this code in a way that we can actually observe it and to understand how it is actually operating when we start before we can actually open the front door and let some of that crazy – and let the Internet in,” right? 

We need to be able to understand how and when the doors fall off and if we are not working with our developers who are more focused on understanding, does this function do what it says on the box? Rather than, is this function implemented in a way that might admit events or metrics, right? This is a completely different set of problems from the developer’s perspective.

I have seen a couple of different implementations of how to implement this within an organization and one of them is Facebook’s idea of product engineering or I think it is called product engineering or production engineering, one of the two, and so this idea is that you might have somebody who’s similar in some ways to an SRE. Somebody who understands the infrastructure and understands how to build applications that will reside upon it and is actually embedded with your developer team to say, “You know, before we can legit sign off on this thing, here are the things that this application must have to be able to wire into to enable us to operate this app so that we can observe it and monitor it. Do all the things that we need to do.”
And the great part about that is that it means that you are teaming with the developer team, you have some engineering piece that is teaming with the developer team and enabling them to understand why these tools are there and what they’re for and really – and promoting that engagement. 

[0:30:59.9] CC: And getting to that place is an interesting proposition isn’t it? Because, as a developer, even as a developer, I see the world moving more and more towards developer taking on the ship of the apps and knowing more, more layers of this stack, and if I am a developer and I want to implement, incorporate these practices then I need to convince some one, either a developer, or whoever is in charge of monitoring it and making sure the system is up and running right?

[0:31:33.0] KN: Yeah. 

[0:31:34.3] CC: So one way to go about quantifying the need for that is to say, “Well over the last month we spent X amount of hours trying to find a bug in production,” and that X is a huge number. So you can bring that number and say, “This is how much the number costs in engineering hours,” but on the other hand, you don’t want to be the one to say that it takes you a 100 hours to find one little bug in production, do you? 

[0:32:06.2] KN: Yeah, I mean I feel like this is why agile teams are so successful because baked into how you do your work is sort of this implicit way of tracking your time and your progress. So at the end of the day, if you do spend a 100 hours of work trying to find a bug, it is sort of like, that is the team’s hours that is not your hours and you sort of get this data for free at the end of every sprint. 

[0:32:28.1] CC: Yeah. 

[0:32:28.5] DC: What you brought up is actually another cultural piece of that that I think is a problem. It has to be – I think that frequently we assume there are many – let me put this differently. I have seen companies where in the culture is somewhat damming for people who spend a lot of time trying to troubleshoot something that they wrote and that is a terrible pattern because it means that the people who are out there writing the code, who are just trying to get across the finish line with the thing that needs to be in production, right, have now this incredible pressure on them to not make a mistake and that is not okay. 

We are all here to make mistakes. That is what we do professionally, is make mistakes and the rest is just the gravy, you know what I mean? And so yeah, it makes me nuts that there are organizations that are like that. I feel like we really just in it and what is awesome about this is I see that narrative raising up within the ecosystem that I, you know, around cloud native architectures and other things like that, is that like, you know, you are hired to do a hard job and if we come down on you for thinking that that is a hard job then we are messing up. You are not messing up. 

[0:33:37.2] CC: Yeah absolutely. Building software is very hard and complex. So if you are not making mistakes, you either are not human or you are not making enough changes and in today’s world, we still have humans making software instead of robots. We are not there yet but it is a very risky proposition not to be making continuous changes because you will be left behind. 

[0:34:04.7] KN: Yeah, I feel like there is definitely something to be said about empathy for software engineers. It is very easy to be like, “Oh my gosh you spent a 100 hours looking at this one bug to save 20 dollars, how dare you?” but it is also a lot harder to be like, “Oh you poor thing, you had to dig through a 100 million lines of somebody else’s code in order to find this bug and it took you a 100 hours and you did all of that just to fix this one little bug, how awesome are you?” 

And I feel like that is where we get into the team dynamic of are we a blame-centric team? Do we try to assign blame to a certain person or do we look at this as a team’s responsibility, like this is our code and poor Carlisia over here had to go dig through this code that hasn’t been touched in 10 years,” or whatever. 

[0:34:54.6] CC: Another layer to that is that in my experience, I have never done anything in software or looked at any codes or brought up any system that as trivial as the end result was and especially in relation with the time spent, it has never happened that it wasn’t a huge amount of education that I got to reuse in future work. So does that make sense? 

[0:35:20.2] DC: Yeah and that is what I was referring to is around being able to build up the intuition around how these systems operate like if the longer, the more time you spend in the trenches working on those things, right? If you are enabled leveraging technologies like observability and chaos into the grain to troubleshoot, to come up with a hypothesis about how this would break when this happens, and test it and view the result and come up with a new hypothesis and continue down that path, you will automatically, I mean like, by your nature, build a better intuition yourself around how all of these system operate.

It doesn’t matter whether it is the application you are working on or some other application, you are going to be able to build up their intuition for how to understand and characterize systems in general. You’ll be a better engineer for distributed systems if you are in a culture that is blameless that gives you tools to experiment and gives you tools to validate those experiments and come up with new ones, you know? 

[0:36:21.3] CC: I am going to challenge you and then I am going to agree with you so hang on, okay? So I am going to challenge you, so we are saying that observability, which actually boils down to using automated tools to do all of this work for us that we don’t have to dig in manually on a case by case basis, no that’s wrong?

[0:36:43.4] DC: No, I am saying observability is a set of tools that you can use to observe the interactions and behavior of distributed systems. 

[0:36:53.4] CC: Okay but with automated tools right? 

[0:36:55.2] DC: The automation piece isn’t really I mean do you want to take this one Kris? 

[0:36:59.5] KN: Yeah, I mean I think like they certainly can be automated. I just don’t think that there is a hard bit of criteria that says every one needs to be automated. Like there ain’t nothing wrong with SSH-ing into a server and running a debug script or something if you are having a really bad day. 

[0:37:12.3] CC: Okay but let me go with my theory, just pretend it is because it will sound better. All right, so let us say, not to exclude the option to do it manually too if you want, but let’s say we have these wonderful tools that can automate a bunch of this work for us and we get to look at it from a high level. So what I am thinking is whereas before, if we didn’t have or use those tools or we are not using those tools, we have to do a lot of that work manually. We have to look at a lot more different places and I will challenge you that we develop even more intuition that way. So we are decreasing the level of intuition that we develop potentially by using the tools. 

Now, I am going to agree with you. It was just a rationale that I had to follow. I agree with you, it definitely helps to develop intuition but it is a better quality of intuition because now you can hold these different pieces in your hand because you are looking at it at this higher level. 

Because when you look at the details, you look at thing at this view – at least I am like that. It is like, “Okay, can I hold this one thing, it is big already in my head,” and then for me when I switch context and go look at something else, you know what I looked at over there, and it is hard to, really hard to keep track and really wasteful for – it is impossible to keep all of it in your mind, right? 

And let’s say you have to go through the whole debugging process all over again. If I don’t have notes, it will be like just the first time because I can’t possibly remember. I mean I have been in situations of having to debug different systems and okay, now third time around I am taking notes because the fourth time is just going to be so painful. So having tools that lets us look at things at a higher level I think has the additional benefit of helping us understand the system and hold it together in our heads because okay, we definitely don’t know the little details of how these are happening behind the scene. 

But how useful is that anyway? I’d much rather know how the whole system works together, points of failure like I can visualize, right? 

[0:39:30.1] DC: Yeah. 

[0:39:30.7] KN: I have a question for everyone. Following up on Carlisia’s how she challenged you and then agreed with you, I really want to ask this question because I think Carlisia’s answer is going to be different than Duffy’s and I think that is going to say a lot about the different ways that we are thinking about observability here and it is really fascinating if you think about it. So have either of you worked in a shop before where you had ‘the guy’? 

You know, that one person who just knew the code base inside and out, he had been around for forever, he was a dinosaur and whatever something went wrong you’re like, “We got to get this guy on the phone,” and he would come in and be like, “Oh it is this one line and this one thing that it would take you six months to figure out but let me just fix this really quick,” bam-bam-bam-bam and production is back online. 

[0:40:14.1] CC: Oh code base guy, the system admins guy, like something that is not my app but the system broke, you get that person who knew every like could take one second to figure out what the problem was. 

[0:40:28.9] KN: Have you seen that before though? Like that one person who just have so much tribal knowledge. 

[0:40:33.3] CC: Yeah, absolutely. 

[0:40:34.3] KN: Yeah, Duffy what about you? 

[0:40:36.0] DC: Absolutely. I have both been that guy and seen that guy. 

[0:40:38.8] CC: I have never been that person. 

[0:40:40.2] DC: In lots of shops.

[0:40:42.4] KN: Well what I am kind of digging at here is I think observability, and I mean this in the nicest way possible to all of our folks at home who are actively playing the role of ‘the guy’, I think observability kind of makes that problem go away, right? 

[0:40:56.8] DC: I think it normalizes it to your point. I think that it basically gives you – I think you’re onto it. I think that I agree with you but I think that fundamentally what happens is through tooling like chaos engineering, through tooling like observability, you are normalizing what it looks like to teach anybody to be like that person, right? But that is the key takeaway is like, to Carlisia’s point she might – actually, you know Kris and I, I promise that we will approach some complex distributed systems problem fundamentally differently, right? 

If somebody has a broken Kubernetes cluster, Kris and I are both going to approach that same problem and we will likely both be able to solve that problem but we are going to approach it in different ways and I think that the benefit of having common tooling with which to experiment and understand and observe the behavior of these distributed systems means that, you know, we can normalize what it looks like to be a developer and have a theory about how the system is breaking or would break, and having some way of actually validating that through the use of observability and perhaps chaos engineering depending, and that means that we are turning keys over, turning the keys to the castle over. There is no more bust test. You don’t have to worry about what happens to me at the end of the day. We all have this common receptacle. 

[0:42:16.7] CC: You could go on vacation. 

[0:42:18.1] DC: Yeah. 

[0:42:19.0] CC: No but this is the most excellent point, I am glad you brought it up Nova because what both of you said is absolutely true. I mean, give me a better documentation and I don’t need you anymore because I can be self-sufficient. 

[0:42:33.2] DC: Exactly. 

[0:42:34.9] KN: Yeah so when we’re – 

[0:42:35.5] CC: If you told me to observe where things went wrong and again I go back to that what I said, more and more developers are having to take being asked, I mean some developers are proactively taking on the shift and in other cases they’d been asked to take more ownership of the whole stack and then say from the application level down the stack and, but you gave me tools to observe where things went wrong beyond my code as a developer, I am not going to call the guy.

[0:43:07.3] KN: Yeah. 

[0:43:08.4] CC: So the level of self-sufficient – 

[0:43:10.3] KN: The guy doesn’t want you to call him. 

[0:43:12.5] CC: So it provides – and then the decision – benefit, we could say, is provide the engineer an additional level of self-sufficiency.

[0:43:22.0] KN: Yeah, I mean teach someone to fish, give someone a fish. 

[0:43:25.1] CC: Yeah. 

[0:43:25.6] KN: Yeah. 

[0:43:26.4] DC: Exactly. All right, well that was a great conversation on observability and we talked about a bunch of different topics. This is Duffy and I had a great time in this session and thanks. 

[0:43:38.1] CC: Yeah, we are super glad to be here today. Thanks for listening. Come back next week. 

[0:43:43.4] KN: Thanks for joining everyone and I apologize again to all of our ‘guys’ at home listening. Hopefully we can help you with observability along the way to get everybody’s job a little bit easier. 

[0:43:53.8] CC: And I want to say you know for the girls, we know that you are all there too. That is just a joke. 

[0:43:59.9] KN: Oh yeah, I was totally at it for a while. Good show everyone. 

[0:44:05.3] DC: All right, cheers. 

[0:44:06.8] KN: Cheers. 

[END OF INTERVIEW]

[0:44:08.7] ANNOUNCER: Thank you for listening to the Podlets Cloud Native Podcast. Find us on Twitter @thepodlets and on the Podlets.io website, that is the Podlets, all together, where you will find transcripts and show notes. We’ll be back next week. Stay tuned by subscribing. 

[END]


