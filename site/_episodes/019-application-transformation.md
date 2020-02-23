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
episode_id: application-transformation
episode_number: 19 
title: Application Modernization with Chris Umbel and Shaun Anderson
# "description" is a short version of the show notes:
description: Our guests help companies to update their systems and move into more up-to-date setups through the Swift methodology and our conversation focusses on this journey from legacy code to a more manageable solution.  We lay the groundwork for the conversation, defining a few of the key terms and concerns that arise for typical clients and then Shaun and Chris share a bit about their approach to moving things forward. 
# "notes" is the entire show notes:
notes: Today on the show we are very lucky to be joined by Chris Umbel and Shaun Anderson from Pivotal to talk about app transformation and modernization! Our guests help companies to update their systems and move into more up-to-date setups through the Swift methodology and our conversation focusses on this journey from legacy code to a more manageable solution.  We lay the groundwork for the conversation, defining a few of the key terms and concerns that arise for typical clients and then Shaun and Chris share a bit about their approach to moving things forward. From there, we move into the Swift methodology and how it plays out on a project before considering the benefits of further modernization that can occur after the initial project. Chris and Shaun share their thoughts on measuring success, advantages of their system and how to avoid roll back towards legacy code. For all this and more, join us on The Podlets Podcast, today!
guests: 
    - name: Chris Umbel
      url: https://twitter.com/chrisumbel
    - name: Shaun Anderson
      url: https://twitter.com/swiftbird68
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Duffie Cooley
      url: https://twitter.com/mauilio
    - name: Olive Power
      url: https://twitter.com/opowero
points:
    - A quick introduction to our two guests and their roles at Pivotal. 
    - Differentiating between application organization and application transformation.
    - Defining legacy and the important characteristics of technical debt and pain.
    - The two-pronged approach at Pivotal; focusing on apps and the platform.
    - The process of helping companies through app transformation and what it looks like.
    - Overlap between the Java and .NET worlds; lessons to be applied to both.
    - Breaking down the Swift methodology and how it is being used in app transformation. 
    - Incremental releases and slow modernization to avoid roll back to legacy systems.  
    - The advantages that the Swift methodology offers a new team. 
    - Possibilities of further modernization and transformation after a successful implementation. 
    - Measuring success in modernization projects in an organization using initial objectives. 
 
# Be sure to check the episode's hackmd for additional links:
links:
    - name: Chris Umbel 
      url: https://github.com/chrisumbel
    - name: Shaun Anderson 
      url: https://www.crunchbase.com/person/shaun-anderson
    - name: Pivotal 
      url: https://pivotal.io/
    - name: VMware 
      url: https://www.vmware.com/
    - name: Michael Feathers 
      url: https://michaelfeathers.silvrback.com/
    - name: Steeltoe 
      url: https://steeltoe.io/
    - name: Alberto Brandolini 
      url: https://leanpub.com/u/ziobrando
    - name: Swiftbird 
      url: https://www.swiftbird.us/
    - name: EventStorming 
      url: https://www.eventstorming.com/book/
    - name: Stephen Hawking 
      url: http://www.hawking.org.uk/
    - name: Istio 
      url: https://istio.io/
    - name: Stateful and Stateless Workload Episode 
      url: https://thepodlets.io/episodes/009-stateful-and-stateless/
    - name: Pivotal Presentation on Application Transformation
      url: https://content.pivotal.io/slides/application-transformation-workshop
 
# Add only the YT id to the end of the URL below:
video: https://www.youtube.com/embed/lkrZPfqdaqU
related: 
- 016-cloud-native-apps
- 014-jobs-in-cloud-native
---
EPISODE 19

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.0] CC: Hi, everybody. Welcome back to The Podlets. Today, we have an exciting show. It's myself on, Carlisia Campos. We have our usual guest hosts, Duffie Cooley, Olive Power and Josh Rosso. We also have two special guests, Chris Umbel. Did I say that right, Chris?

[0:01:03.3] CU: Close enough.

[0:01:03.9] CC: I should have checked before.

[0:01:05.7] CU: Umbel is good.

[0:01:07.1] CC: Umbel. Yeah. I'm not even the native English speaker, so you have to bear with me. Shaun Anderson. Hi.

[0:01:15.6] SA: You said my name perfectly. Thank you.

[0:01:18.5] CC: Yours is more standard American. Let's see, the topic of today is application modernization. Oh, I just found out word I cannot pronounce. That's my non-pronounceable words list. Also known as application transformation, I think those two terms correctly used alternatively? The experts in the house should say something.

[0:01:43.8] CU: Yeah. I don't know that I would necessarily say that they're interchangeable. They're used interchangeably, I think by the general population though.

[0:01:53.0] CC: Okay. We're going to definitely dig into that, how it does it not make sense to use them interchangeably, because just by the meaning, I would think so, but I'm also not in that world day-to-day and that Shaun and Chris are. By the way, please give us a brief introduction the two of you. Why don't you go first, Chris?

[0:02:14.1] CU: Sure. I am Chris Umbel. I believe it was probably actually pronounced Umbel in Germany, but I go with Umbel. My title this week is the – I think .NET App Transformation Journey Lead. Even though I focus on .NET modernization, it doesn't end there. Touch a little bit of everything with Pivotal.

[0:02:34.2] SA: I'm Shaun Anderson and I share the same title of the week as Chris, except for where you say .NET, I would say Java. In general, we play the same role and have slightly different focuses, but there's a lot of overlap.

[0:02:48.5] CU: We get along, despite the .NET and Java thing.

[0:02:50.9] SA: Usually.

[0:02:51.8] CC: You both are coming from Pivotal, yeah? As most people should know, but I'm sure now everybody knows, Pivotal was just recently as of these date, which is what we are? End of January. This episode is going to be a while to release, but Pivotal was just acquired by VMware. Here we are.

[0:03:10.2] SA: It's good to be here.

[0:03:11.4] CC: All right. Somebody, one of you, may be let's say Chris, because you've brought this up, how this application organization differs from application transformation? Because I think we need to lay the ground and lay the definitions before we can go off and talk about things and sound experts and make sure that everybody can follow us.

[0:03:33.9] CU: Sure. I think you might even get different definitions, even from within our own practice. I'll at least lay it out as I see it. I think it's probably consistent with how Shaun's going to see it as well, but it's what we tell customers anyway. At the end of the day, there are – app transformation is the larger [inaudible] bucket. That's going to include, say just the re-hosting of applications, taking applications from point A to some new point B, without necessarily improving the state of the application itself.

We'd say that that's not necessarily an exercise in paying down technical debt, it's just making some change to an application or its environment. Then on the modernization side, that's when things start to get potentially a little more architectural. That's when the focus becomes paying down technical debt and really improving the application itself, usually from an architectural point of view and things start to look maybe a little bit more like rewrites at that point.

[0:04:31.8] DC: Would you say that the transformation is more in-line with re-platforming, those of you that might think about it?

[0:04:36.8] CU: We'd say that app transformation might include re-platforming and also the modernization. What do you think of that, Shaun?

[0:04:43.0] SA: I would say transformation is not just the re-platforming, re-hosting and modernization, but also the practice to figure out which should happen as well. There's a little bit more meta in there. Typically, app transformation to me is the bucket of things that you need to do to move your product down the line.

[0:05:04.2] CC: Very cool. I have two questions before we start really digging to the show, is still to lay the ground for everyone. My next question will be are we talking about modernizing and transforming apps, so they go to the clouds? Or is there a certain cut-off that we start thinking, “Oh, we need to – things get done differently for them to be called native.” Is there a differentiation, or is this one is the same as the other, like the process will be the same either way?

[0:05:38.6] CU: Yeah, there's definitely a distinction. The re-platforming bucket, that re-hosting bucket of things is where your target state, at least for us coming out of Pivotal, we had definitely a product focus, where we're probably only going to be doing work if it intersects with our product, right? 

We're going to be doing both re-platforming targeted, say typically at a cloud environment, usually Cloud Foundry or something to that effect. Then modernization, while we're usually doing that with customers who have been running our platform, there's nothing to say that you necessarily need a cloud, or any cloud to do modernization. We tend to based on who we work for, but you could say that those disciplines and practices really are agnostic to where things run.

[0:06:26.7] CC: Sorry, I was muted. I wanted to ask Shaun if you wanted to add to that. Do you have the same view?

[0:06:33.1] SA: Yeah. I have the same view. I think part of what makes our process unique that way is we're not necessarily trying to target a platform for deployment, when we're going through the modernization part anyway. We're really looking at how can we design this application to be the best application it can be. It just so happens that that tends to be more 12-factor compliant that is very cloud compatible, but it's not necessarily the way that we start trying to aim for a particular platform.

[0:07:02.8] CC: All right. If everybody allows me, after this next question, I'll let other hosts speak too. Sorry for monopolizing, but I'm so excited about this topic. Again, in the spirit of understanding what we're talking about, what do you define as legacy? Because that's what we're talking about, right? We’re definitely talking about a move up, move forwards. We're not talking about regression and we're not talking about scaling down. We're talking about moving up to a modern technology stack.

That means, that implies we're talking about something that's legacy. What is legacy? Is it contextual? Do we have a hard definition? Is there a best practice to follow? Is there something public people can look at? Okay, if my app, or system fits this recipe then it’s considered legacy, like a diagnosis that has a consensus.

[0:07:58.0] CU: I can certainly tell you how you can't necessarily define legacy. One of the ways is by the year that it was written. You can certainly say that there are certainly shops who are writing legacy code today. They're still writing legacy code. As soon as they're done with a project, it's instantly legacy. There's people that are trying to define, like another Michael Feathers definition, which is I think any application that doesn't have tests, I don't know that that fits what – our practice necessarily sees legacy as.

Basically, anything that's occurred a significant amount of technical debt, regardless of when the application was written or conceived fits into that legacy bucket. Really, our work isn't necessarily as concerned about whether something's legacy or not as much as is there pain that we can solve with our practice? Like I said, we've modernized things that were in for all intents and purposes, quite modern in terms of the year they were written.

[0:08:53.3] SA: Yeah. I would double down on the pain. Legacy to us often is something that was written as a prototype a year ago. Now it's ready to prove itself. It's going to be scaled up, but it wasn't built with scale in mind, or something like that. Even though it may be the latest technology, it just wasn't built for the load, for example. Sometimes legacy can be – the pain is we have applications on a mainframe and we can't find Cobol developers and we're leasing a giant mainframe and it's costing a lot of money, right? There's different flavors of pain.

It also could be something as simple as a data center move. Something like that, where we've got all of our applications running on Iron and we need to go to a virtual data center somewhere, whether it's cloud or on-prem. Each one of those to us is legacy. It's all about the pain.

[0:09:47.4] CU: I think is miserable as that might sound, that's really where it starts and is listening to that pain and hearing directly from customers what that pain is. Sounds terrible when you think about it that you're always in search of pain, but that isn't indeed what we do and try to alleviate that in some way.

That pain is what dictates the solution that you come up with, because there are certain kinds of pain that aren't going to be solved with say, modernization approach, a more a platformed approach even. You have to listen and make sure that you're applying the right medicine to the right pain.

[0:10:24.7] OP: Seems like an interesting thing bringing what you said, Chris, and then what you said earlier, Shaun. Shaun you had mentioned the target platform doesn't necessarily matter, at least upfront. Then Chris, you had implied bringing the right thing in to solve the pain, or to help remedy the pain to some degree. 

I think what's interesting may be about the perspectives for those on this call and you too is a lot of times our entry points are a lot more focused with infrastructure and platform teams, where they have these objectives to solve, like cost and ability to scale and so on and so forth. It seems like your entry point, at least historically is maybe a little bit more focused on finding pain points on more of the app side of the house. I'm wondering if that's a fair assessment, or if you could speak to how you find opportunities and what you're really targeting.

[0:11:10.6] SA: I would say that's a fair assessment from the perspective of our services team. We're mainly app-focused, but it's almost there's a two-pronged approach, where there's platform pain and application pain. What we've seen is often solving one without the other is not a great solution, right? I think that's where it's challenging, because there's so much to know, right? It's hard to find one team or one person who can point out the pain on both sides.

It just depends on often, how the customer approaches us. If they are saying something like, “We’re a credit card company and we're getting our butts kicked by this other company, because they can do biometrics and we can't yet, because of the limitations of our application.” Then we would approach it from the app-first perspective. If it's another pain point, where our operations, day two operations is really suffering, we can't scale, where we have issues that the platform is really good at solving, then we may start there. It always tends to merge together in the end.

[0:12:16.4] CU: You might be surprised how much variety there is in terms of the drivers for people coming to us. There are a lot of cases where the work came to us by way of the platform work that we've done. It started with our sister team who focuses on the platform side of things. They solve the infrastructure problems ahead of us and then we close things out on the application side. We if our account teams and our organization is really listening to each individual customer that you'll find that there – that the pain is drastically different, right?

There are some cases where the driver is cost and that's an easy one to understand. There are also drivers that are usually like a date, such as this data center goes dark on this date and I have to do something about it. If I'm not out of that data center, then my apps no longer run. The solution to that is very different than the solution you would have to, "Look, my application is difficult for me to maintain. It takes me forever to ship features. Help me with that." There's two very different solutions to those problems, but each of which are things that come our way. It's just that former probably comes in by way of our platform team.

[0:13:31.1] DC: Yeah, that’s an interesting space to operate in in the application transformation and stuff. I've seen entities within some of the larger companies that represent this field as well. Sometimes that's called production engineering or there are a few other examples of this that I'm aware of. I'm curious how you see that happening within larger companies. 

Do you find that there is a particular size entity that is actually striving to do this work with the tools that they have internally, or do you find that typically, most companies are just need something like an application transformation so you can come in and help them figure out this part of it out?

[0:14:09.9] SA: We've seen a wide variety, I think. One of them is maybe a company really has a commitment to get to the cloud and they get a platform and then they start putting some simple apps up, just to learn how to do it. Then they get stuck with, “Okay. Now how do we with trust get some workloads that are running our business on it?” They will often bring us in at that point, because they haven't done it before. Experimenting with something that valuable to them is — usually means that they slow down.

There's other times where we've come in to modernize applications, whether it's a particular business unit for example, that may have been trying to get off the mainframe for the last two years. They’re smart people, but they get stuck again, because they haven't figured out how to do it. What often happens and Chris can talk about some examples of this is once we help them figure out how to modernize, or the recipes to follow to start getting their systems systematically on to the platform and modernize, that they tend to like forming a competency area around it, where they'll start to staff it with the people who are really interested and they take over where we started from.

[0:15:27.9] CU: There might be a little bit of bias to that response, in that typically, in order to even get in the door with us, you're probably a Fortune 100, or at least a 500, or government, or something to that effect. We're going to be seeing people that one, have a mainframe to begin with. Two, would have say, capacity to fund say a dedicated transformation team, or to build a unit around that. You could say that the smaller an organization gets, maybe the easier it is to just have the entire organization just write software the modern way to begin with.

At least at the large side, we do tend to see people try to build a – they'll use different names for it. Try to have a dedicated center of excellence or practice around modernization. Our hope is to help them build that and hopefully, put them in a position that that can eventually disappear, because eventually, you should no longer need that as a separate discipline.

[0:16:26.0] JR: I think that's an interesting point. For me, I argue that you do need it going forward, because of the cognitive overhead between understanding how your application is going to thrive on today's complex infrastructure models and understanding how to write code that works. I think that one person that has all of that in their head all the time is a little too much, a little too far to go sometimes.

[0:16:52.0] CU: That's probably true. When you consider the size the portfolios and the size of the backlog for modernization that people have, I mean, people are going to be busy on that for a very long time anyway. It's either — even if it is finite, it still has a very long life span at a minimum.

[0:17:10.7] SA: At a certain point, it becomes like painting the Golden Gate Bridge. As soon as you finish, you have to start again, because of technology changes, or business needs and that thing. It's probably a very dynamic organization, but there's a lot of overlap. The pioneering teams set a lot of the guidelines for how the following teams can be doing their modernization work and it just keeps rolling down the track that way. It may be that people are busy modernizing applications off of WebLogic, or WebSphere, and it takes a two years or more to get that completed for this enterprise. It was 20, 50 different projects. To them, it was brand-new each time, which is cool actually to come into that.

[0:17:56.3] JR: I'm curious, I definitely love hear it from Olive. I have one more question before I pass it out and I think we’d love to hear your thoughts on all of this. The question I have is when you're going through your day-to-day working on .NET and Java applications and helping people figure out how to go about modernizing them, what we've talked about so far is that represents some of the deeper architectural issues and stuff.

You've already mentioned 12 factor after and being able to move, or thinking about the way that you frame the application as far as inputs of those things that it takes to configure, or to think with the lifecycle of those things. Are there some other common patterns that you see across the two practices, Java and .NET, that you think are just concrete examples of stuff that people should take away maybe from this episode, that they could look at their app – and they’re trying to get ahead of the game a little bit?

[0:18:46.3] SA: I would say a big part of the commonality that Chris and I both work on a lot is we have a methodology called the SWIFT methodology that we use to help discover how the applications really want to behave, define a notional architecture that is again, agnostic of the implementation details. We’ll often come in with a the same process and I don't need to be a .NET expert and a .NET shop to figure out how the system really wants to be designed, how you want to break things into microservices and then the implementation becomes where those details are.

Chris and I both collaborate on a lot of that work. It makes you feel a little bit better about the output when you know that the technology isn't as important. You get to actually pick which technology fits the solution best, as opposed to starting with the technology and letting a solution form around it, if that makes sense.

[0:19:42.4] CU: Yeah. I'd say that interesting thing is just how difficult it is while we're going through the SWIFT process with customers, to get them to not get terribly attached to the nouns of the technology and the solution. They've usually gone in where it's not just a matter of the language, but they have something picked in their head already for data storage, for messaging, etc., and they're deeply attached to some of these decisions, deeply and emotionally attached to them.

Fundamentally, when we're designing a notional architecture as we call it, really you should be making decisions on what nouns you're going to pick based on that architecture to use the tools that fit that. That's generally a bit of a process the customers have to go through. It's difficult for them to do that, because the more technical their stakeholders tend to be, often the more attached they are to the individual technology choices and breaking that is the principal role for us.

[0:20:37.4] OP: Is there any help, or any investment, or any coordination with those vendors, or the purveyors of the technologies that perhaps legacy applications are, or indeed the platforms they're running on, is there any help on that side from those vendors to help with application transformation, or making those applications better? 

Or do organizations have to rely on a completely independent, so the team like you guys to come in and help them with that? Do you understand my point? Is there any internal – like you mentioned WebLogic, WebSphere, do the purveyors of those platforms try and drive the transformation from within there? Or is it organizations who are running those apps have to rely on independent companies like you, or like us to help them with that?

[0:21:26.2] SA: I think some of it depends on what the goal of the modernization is. If it's something like, we no longer want to pay Oracle licensing fees, then of course, obviously they – WebLogic teams aren't going to be happy to help. That's not always the case. Sometimes it's a case where we may have a lot of WebLogic. It's working fine, but we just don't like where it's deployed and we'd like to containerize it, move it to Kubernetes or something like that. In that case, they're more willing to help. At least in my experience, I've found that the technology vendors are rightfully focused just on upgrading things from their perspective and they want to own the world, right?

WebLogic will say, “Hey, we can do everything. We have clustering. We have messaging. We've got good access to data stores.” It's hard to find a technology vendor that has that broader vision, or the discipline to not try to fit their solutions into the problem, when maybe they're not the best fit.

[0:22:30.8] CU: I think it's a broad generalization, but specifically on the Java side it seems that at least with app server vendors, the status quo is usually serving them quite well. Quite often, we’re adversary – a bit of an adversarial relationship with them on occasion. I could certainly say that within the .NET space, we've worked a relatively collaboratively with Microsoft on things like Steeltoe, which is a I wouldn't say it's a springboot analog, but at least a microservice library that helps people achieve 12-factor cloud nativeness. That's something where I guess Microsoft represents both the legacy side, but also the future side and were part of a solution together there.

[0:23:19.4] SA: Actually, that's a good point because the other way that we're seeing vendors be involved is in creating operators on Kubernetes side, or Cloud Foundry tiles, something that makes it easy for their system to still be used in the new world. That's definitely helpful as well.

[0:23:38.1] CC: Yeah, that's interesting.

[0:23:39.7] JR: Recently, myself me people on my team went through a training from both Shaun and Chris, interestingly enough in Colorado about this thing called the SWIFT methodology. I know it's a really important methodology to how you approach some of the application transformation-like engagements. Could you two give us a high-level overview of what that methodology is?

[0:24:02.3] SA: I want to hear Chris go through it, since I always answer that question first.

[0:24:09.0] CU: Sure. I figured since you were the inventor, you might want to go with it Shaun, but I'll give it a stab anyway. Swift is a series of exercises that we use to go from a business problem into what we call a notional architecture for an application. The one thing that you'll hear Shaun say all the time that I think is pretty apt, which is we're trying to understand how the application wants to behave.

This is a very analog process, especially at the beginning. It's one where we get people who can speak about the business problem behind an application and the business processes behind an application. We get them into a room, a relatively large room typically with a bunch of wall space and we go through a series of exercises with them, where we tease that business process apart. We start with a relatively lightweight version of Alberto Brandolini’s event storing method, where we map out with the subject matter experts, what all of the business events that occur in a system are. That is a non-technical exercise, a completely non-technical exercise. As a matter of fact, all of this uses sticky notes and arts and crafts.

After we've gone through that process, we transition into Boris diagram, which is an exercise of Shaun's design that we take the domains that we've, or at least service candidates that we've extrapolated from that event storming and start to draw out a notional architecture. Like an 80% idea of what we think the architecture is going to look like. We're going to do this for slices of – thin slices of that business problem. At that point, it starts to become something that a software developer might be interested in.

We have an exercise called Snappy that generally occurs concurrently, which translates that message flow, Boris diagram thing into something that's at least a little bit closer to what a developer could act upon. Again, these are sticky note and analog exercises that generally go on for about a week or so, things that we do interactively with customers to try to get a purely non-technical way, at least at first, so that we can understand that problem and tell you what an architecture is that you can then act on.

We try to position this as a customer. You already have all of the answers here. What we're going to do as facilitators of these is try to pull those out of your head. You just don't know how to get to the truth, but you already know that truth and we're going to design this architecture together. 

How did I do, Shaun?

[0:26:44.7] SA: I couldn't have said it better myself. I would say one of the interest things about this process is the reason why it was developed the way it was is because in the world of technology and especially engineers, I definitely seen that you have two modes of thought when you come from the business world to the to the technical world. Often, engineers will approach a problem in a very different way and a very focused, blindered way than business folks. Ultimately, what we try to think of is that the purpose for the software is to enable the business to run well. In order to do that, you really need to understand at least at a high-level, what the heck is the business doing?

Surprisingly and almost consistently, the engineering team doing the work is separated from the business team enough that it's like playing the telephone game, right? Where the business folks say, “Well, I told them to do this.” The technical team is like, “Oh, awesome. Well then, we're going to use all this amazing technology and build something that really doesn't support you.” This process really brings everybody together to discover how the system really wants to behave. Also as a side effect, you get everybody agreeing that yes, that is the way it's supposed to be. It's exciting to see teams come together that actually never even work together. You see the light bulbs go on and say, “Oh, that's why you do that.”

The end result is in a week, we can go from nobody really knows each other, or quite understands the system as a whole, to we have a backlog of work that we can prioritize based on the learnings that we have, and feel pretty comfortable that the end result is going to be pretty close to how we want to get there. Then the biggest challenge is defining how do we get from point A to point B. That's part of that layering of the Swift method is knowing when to ask those questions.

[0:28:43.0] JR: A micro follow-up and then I'll keep my mouth shut for a little bit. Is there a place that people could go online to read about this methodology, or just get some ideas of what you just described?

[0:28:52.7] SA: Yeah. You can go to swiftbird.us. That has a high-level overview of more the public facing of how the methodology works. Then there's also internal resources that are constantly being developed as well. That's where I would start.

[0:29:10.9] CC: That sounds really neat. As always, we are going to have links on the show notes for all of this. I checked out the website for the EventStorming book. There is a resources page there and has a list of a bunch of presentations. Sounds very interesting.

I wanted to ask Chris and Shaun, have you ever seen, or heard of a case where a company went through the transformation, or modernization process and then they roll back to their legacy system for any reason?

[0:29:49.2] SA: That's actually a really good question. It implies that often, the way people think about modernization would be more of a big bang approach, right? Where at a certain point in time, we switch to the new system. If it doesn't work, then we roll back. Part of what we try to do is have incremental releases, where we're actually putting small slices into production where you're not rolling back a whole – from modern back to legacy. It's more of you have a week's worth of work that's going into production that's for one of the thin slices, like Chris mentioned.

If that doesn't work where there's something that is unexpected about it, then you're rolling back just a small chunk. You're not really jumping off a cliff for modernization. You're really taking baby steps. If it's a two step forward and one step back, you're still making a lot of really good progress. You're also gaining confidence as you go that in the end in two years, you're going to have a completely shiny new modern system and you're comfortable with it, because you're getting there an inch of the time, as opposed to taking a big leap.

[0:30:58.8] CU: I think what's interesting about a lot of large organizations is that they've been so used to doing big bang releases in general. This goes from software to even process changes in their organizations. They’ve become so used to that that it often doesn't even cross their mind that it's possible to do something incrementally. We really do often times have to get spend time getting buy-in from them on that approach.

You'd be surprised that even in industries that you’d think would be fantastic with managing risk, when you look at how they actually deal with deployment of software and the rolling out of software, they’re oftentimes taking approaches that maximize their risk. There's no way to make something riskier by doing a big bang. Yeah, as Shaun mentioned, the specifics of the swift are to find a way, so that you can understand where and get a roadmap for how to carve out incremental slices, so that you can strangle a large monolithic system slowly over time. That's something that's pretty powerful.

Once someone gets bought in on that, they absolutely see the value, because they're minimizing risk. They're making small changes. They're easy to roll back one at a time. You might see people who would stop somewhere along the way, and we wouldn't necessarily say that that's a problem, right? Just like not every app needs to be modernized, maybe there's portions of systems that could stay where they are. Is that a bad thing? I wouldn't necessarily say that it is. Maybe that's the way that – the best way for that organization.

[0:32:35.9] DC: We've bumped into this idea now a couple of different times and I think that both Chris and Shaun have brought this up. It's a little prelude to a show that we are planning on doing. 

One of the operable quotes from that show is the greatest enemy of knowledge is not the ignorance, it is the illusion of knowledge. It's a quote by Stephen Hawking. It speaks exactly to that, right? When you come to a problem with a solution in your mind that is frequently difficult to understand the problem on its merit, right? It’s really interesting seeing that crop up again in this show.

[0:33:08.6] CU: I think even oftentimes, the advantage of a very discovery-oriented method, such as Swift is that it allows you to start from scratch with a problem set with people maybe that you aren't familiar with and don't have some of that baggage and can ask the dumb questions to get to some of the real answers. It's another phrase that I know Shaun likes to use is that our roles is facilitator to this method are to ask dumb questions. I mean, you just can't put enough value on that, right? The only way that you're going to break that established thinking is by asking questions at the root.

[0:33:43.7] OP: One question, actually there was something recently that happened in the Kubernetes community, which I thought was pretty interesting and I'd like to get your thoughts on it, which is that Istio, which is a project that operates as a service mesh, I’m sure you all are familiar with it, has recently decided to unmodernize itself in a way. 

It was originally developed as a set of microservices. They have had no end of difficulty in getting in optimizing the different interactions between those services and the nodes. Then recently, they decided this might be a good example of when to monolith, versus when to microservice. I'm curious what your thoughts are on that, or if you have familiarity with it.

[0:34:23.0] CU: What's actually quite – I'm not going to necessarily speak too much to this. Time will tell as to if the monolithing that they're doing at the moment is appropriate or not. Quite often, the starting point for us isn't necessarily a monolith. What it is is a proposed architecture coming from a customer that they're proud of, that this is my microservice design. You'll see a simple system with maybe hundreds of nano-services.

The surprise that they have is that the recommendation from us coming out of our Swift sessions is that actually, you're overthinking this. We're going to take that idea that you have any way and maybe shrink that down and to save tens of services, or just a handful of services. I think one of the mistakes that people make within enterprises, or on microservices at the moment is to say, “Well, that's not a microcservice. It’s too big.” Well, how big or how small dictates a microservice, right? Oftentimes, we at least conceptually are taking and combining services based on the customers architecture very common.

[0:35:28.3] SA: Monoliths aren't necessarily bad. I mean, people use them almost as a pejorative, “Oh, you have a monolith.” In our world it's like, well monoliths are bad when they're bad. If they're not bad, then that's great. The corollary to that is micro-servicing for the sake of micro-servicing isn't necessarily a good thing either. When we go through the Boris exercise, really what we're doing is we're showing how domain-based, or capabilities relate to each other. That happens to map really well in our opinion to first, cut microservices, right?

You may have an order service, or a customer service that manages some of that. Just because we map capabilities and how they relate to each other, it doesn't mean the implementation can't even be as a single monolith, but componentized inside it, right? That's part of what we try really hard to do is avoid the religion of monolith versus microservices, or even having to spend a lot of time trying to define what a microservice is to you. It's really more of well, a system wants to behave this way. Now, surprise, you just did domain-driven design and mapped out some good 12-factor compliant microservices should you choose to build it that way, but there's other constraints that always apply at that point.

[0:36:47.1] OP: Is there more traction in organizations implementing this methodology on a net new business, rather than current running businesses or applications? Is there are situations more so that you have seen where a new project, or a new functionality within a business starts to drive and implement this methodology and then it creeps through the other lines of business within the organization, because that first one was successful?

[0:37:14.8] CU: I'd say that based on the nature of who our customers are as an app transformation practice, based on who those customers are and what their problems are, we're generally used to having a starting point of a process, or software that exists already. There's nothing at all to mandate that it has to be that way. As a matter of fact, with folks from our labs organization, we've used these methods in what you could probably call greener fields.

At the end of the day when you have a process, or even a candidate process, something that doesn't exist yet, as long as you can get those ideas onto sticky notes and onto a wall, this is a very valid way of getting – turning ideas into an architecture and an architecture into software.

[0:37:59.4] SA: We've seen that happen in practice a couple times, where maybe a piece of the methodology was used, like EventStorming just to get a feel for how the business wants to behave. Then to rapidly try something out in maybe more of a evolutionary architecture approach, MVP approach to let's just build something from a user perspective just to solve this problem and then try it out. 

If it starts to catch hold, then iterate back and now drill into it a little bit more and say, “All right. Now we know this is going to work.” We're modernizing something that may be two weeks old just because hooray, we proved it's valuable. We didn't necessarily have to spend as much upfront time on designing that as we would in this system that's already proven itself to be of business value.

[0:38:49.2] OP: This might be a bit of a broad question, but what defines success of projects like this? I mean, we mentioned earlier about cost and maybe some of the drivers are to move off certain mainframes and things like that. If you're undergoing an application transformation, it seems to me like it's an ongoing thing. How do enterprises try to evaluate that return on investment? How does it relate to success criteria? I mean, faster release times, etc., potentially might be one, but how was that typically evaluated and somebody internally saying, “Look, we are running a successful project.”

[0:39:24.4] SA: I think part of what we tried to do upfront is identify what the objectives are for a particular engagement. Often, those objectives start out with one thing, right? It's too costly to keep paying IBM or Oracle for WebLogic, or WebSphere. As we go through and talk through what types of things that we can solve, those objectives get added to, right? It may be the first thing, our primary objective is we need to start moving workloads off of the mainframe, or workloads off of WebLogic, or WebSphere, or something like that. There's other objectives that are part of this too, which can include things as interesting as developer happiness, right?

They have a large team of a 150 developers that are really just getting sick of doing the same old thing and having new technology. That's actually a success criteria maybe down the road a little bit, but it's more of a nice to have. In a long-winded answer of saying, when we start these and when we incept these projects, we usually start out with let's talk through what our objectives are and how we measure success, those key results for those objectives. As we're iterating through, we keep measuring ourselves against those.

Sometimes the objectives change over time, which is fine because you learn more as you're going through it. Part of that incremental iterative process is measuring yourself along the way, as opposed to waiting until the end.

[0:40:52.0] CC: Yeah, makes sense. I guess these projects are as you say, are continuous and constantly self-adjusting and self-analyzing to re-evaluate success criteria to go along. Yeah, so that's interesting.

[0:41:05.1] SA: One other interesting note though that personally we like to measure ourselves when we see one project is moving along and if the customers start to form other projects that are similar, then we know, “Okay, great. It's taking hold.” Now other teams are starting to do the same thing. We've become the cool kids and people want to be like us. The only reason it happens for that is when you're able to show success, right? Then other teams want to be able to replicate that.

[0:41:32.9] CU: The customers OKRs, oftentimes they can be a little bit easier to understand. Sometimes they're not. Typically, they involve time or money, where I'm trying to take release times from X to Y, or decrease my spend on X to Y. The way that we I think measure ourselves as a team is around how clean do we leave the campsite when we're done. We want the customers to be able to run with this and to continue to do this work and to be experts.

As much as we'd love to take money from someone forever, we have a lot of people to help, right? Our goal is to help to build that practice and center of excellence and expertise within an organization, so that as their goals or ideas change, they have a team to help them with that, so we can ride off into the sunset and go help other customers.

[0:42:21.1] CC: We are coming up to the end of the episode, unfortunately, because this has been such a great conversation. It turned out to be a more of an interview style, which was great. It was great getting the chance to pick your brains, Chris and Shaun. 

Going along with the interview format, I like to ask you, is there any question that wasn't asked, but you wish was asked? The intent here is to illuminates what this process for us and for people who are listening, especially people who they might be in pain, but they might be thinking this is just normal.

[0:42:58.4] CU: That's an interesting one. I guess to some degree, that pain is unfortunately normal. That's just unfortunate. Our role is to help solve that. I think the complacency is the absolute worst thing in an organization. If there is pain, rather than saying that the solution won't work here, let’s start to talk about solutions to that. We've seen customers of all shapes and sizes. No matter how large, or cumbersome they might be, we've seen a lot of big organizations make great progress. If your organization's in pain, you can use them as an example. There is light at the end of the tunnel.

[0:43:34.3] SA: It's usually not a train.

[0:43:35.8] CU: Right. Usually not.

[0:43:39.2] SA: Other than that, I think you asked all the questions that we always try to convey to customers of how we do things, what is modernization. There's probably a little bit about re-platforming, doing the bare minimum to get something onto to the cloud. We didn't talk a lot about that, but it's a little bit less meta, anyway. It's more technical and more recipe-driven as you discover what the workload looks like. 

It's more about, is it something we can easily do a CF push, or just create a container and move it up to the cloud with minimal changes? There's not conceptually not a lot of complexity. Implementation-wise, there's still a lot of challenges there too. They're not as fun to talk about for me anyway.

[0:44:27.7] CC: Maybe that's a good excuse to have some of our colleagues back on here with you.

[0:44:30.7] SA: Absolutely.

[0:44:32.0] DC: Yeah, in a previous episode we talked about persistence and state of those sorts of things and how they relate to your applications and how when you're thinking about re-platforming and even just where you're planning on putting those applications. For us, that question comes up quite a lot. That's almost zero trying to figure out the state model and those sort of things.

[0:44:48.3] CC: That episode was named States in Stateless Apps, I think. We are at the end, unfortunately. It was so great having you both here. Thank you Duffie, Shaun, Chris and I'm going by the order I'm seeing people on my video. Josh and Olive. 

Until next time. Make sure please to let us know your feedback. Subscribe. Give us a thumbs up. Give us a like. You know the drill. Thank you so much. Glad to be here. Bye, everybody.

[0:45:16.0] JR: Bye all.

[0:45:16.5] CU: Bye.

[END OF EPISODE]

[0:45:17.8] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
