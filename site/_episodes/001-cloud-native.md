---
episode_id: 001-cloud-native
episode_number: 1
title: Cloud Native
description: Welcome to the first episode of The Kubelets Podcast! On the show today we’re kicking it off with some introductions to who we all are, how we got involved in VMware and a bit about our career histories up to this point.
notes: Welcome to the first episode of The Kubelets Podcast! On the show today we’re kicking it off with some introductions to who we all are, how we got involved in VMware and a bit about our career histories up to this point. We share our vision for this podcast and explain the unique angle from which we will approach our conversations, a way that will hopefully illuminate some of the concepts we discuss in a much greater way. We also dive into our various experiences with open source, share what some of our favorite projects have been and then we define what the term “cloud native” means to each of us individually. The contribution that the Cloud Native Computing Foundation (CNCF) is making in the industry is amazing, and we talk about how they advocate the programs they adopt and just generally impact the community. We are so excited to be on this podcast and to get feedback from you, so do follow us on Twitter and be sure to tune in for the next episode! 
# video: https://www.youtube.com/embed/dQw4w9WgXcQ
# related: 
# - 002-container-orchestration
# - 004-observability
---

EPISODE 01

[INTRODUCTION]

[00:00:08] ANNOUNCER: Welcome to The Kubelets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss cloud native concepts to help you on your journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re using, building, or managing technology, this podcast is for you.

[EPISODE]

[00:00:32] KN: Welcome to the podcast.

[00:00:33] NL: Hi. I’m Nicholas Lane. I’m a cloud native Architect.

[00:00:36] CC: Who do you work for, Nicholas?

[00:00:38] NL: I've worked for VMware, formerly of Heptio.

[00:00:41] KN: I think we’re all VMware, formerly Heptio, aren’t we?

[00:00:43] NL: Yes.

[00:00:45] CC: That is correct. It just happened that way. Now Nick, why don’t you tell us how you got into this space?

[00:00:53] NL: Okay. I originally got into the cloud native realm working for Red Hat as a consultant. At the time, I was doing OpenShift consultancy. Then my boss, Paul, Paul London, left Red Hat and I decided to follow him to CoreOS, where I met Duffie and Josh. We were on the field engineering team there and the sales engineering team. Then from there, I found myself at Heptio and now with VMware. Duffie, how about you?

[00:01:21] DC: My name is Duffie Cooley. I'm also a cloud native architect at VMware, also recently Heptio and CoreOS. I've been working in technologies like cloud native for quite a few years now. I started my journey moving from virtual machines into containers with Mesos. I spent some time working on Mesos and actually worked with a team of really smart individuals to try and develop an API in front of that crazy Mesos thing. Then we realized, “Well, why are we doing this? There is one that's called Kubernetes. We should jump on that.” That's the direction in my time with containerization and cloud native stuff has taken. How about you Josh?

[00:01:58] JR: Hey, I’m Josh. I similar to Duffie and Nicholas came from CoreOS and then to Heptio and then eventually VMware. Actually got my start in the middleware business oddly enough, where we worked on the Egregious Spaghetti Box, or the ESB as it’s formally known. I got to see over time how folks were doing a lot of these, I guess, more legacy monolithic applications and that sparked my interest into learning a bit about some of the cloud native things that were going on. At the time, CoreOS was at the forefront of that. It was a natural progression based on the interests and had a really good time working at Heptio with a lot of the folks that are on this call right now. Kris, you want to give us an intro?

[00:02:39] KN: Sure. Hi, everyone. Kris Nova. I've been SRE DevOps infrastructure for about a decade now. I used to live in Boulder, Colorado. I came out of a couple startups there. I worked at SolidFire, we went to NetApp. I used to work on the Linux kernel there some. Then I was at Deis for a while when I first started contributing to Kubernetes. We got bought by Microsoft, left Microsoft, the Azure team. I was working on the original managed Kubernetes there. Left that team, joined up with Heptio, met all of these fabulous folks. I think, I wrote a book and I've been doing a lot of public speaking and some other junk along the way. Yeah. Hi. What about you, Carlisia?

[00:03:19] CC: All right. I think it's really interesting that all the guys are lined up on one call and all the girls on another call. 

[00:03:25] NL: We should have probably broken it up more.

[00:03:27] CC: I am a developer and have always been a developer. Before joining Heptio, I was working for Fastly, which is a CDN company. They’re doing – helping them build the latest generation of their TLS management system. At some point during my stay there, Kevin Stuart was posting on Twitter, joined Heptio. At this point, Heptio was about, I don't know, between six months in a year-old.

I saw those tweets go by I’m like, “Yeah, that sounds interesting, but I'm happy where I am.” I have a very good friend, Kennedy actually. He saw those tweets and here he kept saying to me, “You should apply. You should apply, because they are great people. They did great things. Kubernetes is so hot.” I’m like, “I'm happy where I am.”

Eventually, I contacted Kevin and he also said, “Yeah, that it would be a perfect match.” I two months later decided to apply. The people are amazing. I did think that Kubernetes was really hard, but my decision-making went towards two things. The people are amazing and some people who were working there I already knew from previous opportunities. Some of the people that I knew – I mean, I love everyone.

The only thing was that it was an opportunity for me to work with open source. I definitely could not pass that up. I could not be happier to have made that decision now with VMware acquiring Heptio, like everybody here I’m at VMware. Still happy.

[00:05:10] KN: Has everybody here contributed to open source before?

[00:05:14] NL: Yup, I have.

[00:05:15] KN: What's everybody's favorite project they've worked on?

[00:05:18] NL: That's an interesting question. From a business aspect, I really like Dex. Dex is an identity provider, or a middleware for identity provider. It provides an OIDC endpoint for multiple different identity providers. You can absorb them into Kubernetes. Since Kubernetes only has an OIDC – only accepts OIDC job tokens for authentication, that functionality that Dex provides is probably my favorite thing. Although, if I'm going to be truly honest, I think right now the thing that I'm the most excited about working on is my own project, which is starting to join like me, joining into my interest in doing Chaos engineering. What about you guys? What’s your favorite?

[00:05:57] KN: I understood some of those words.

[00:06:00] NL: Those are things we'll touch on on different episodes.

[00:06:03] KN: Yeah. I worked on FreeBSD for a while. That was my first welcome to open source. I mean, that was back in the olden days of IRC clients and writing C. I had a lot of fun, and still I'm really close with a lot of folks in the FreeBSD community, so that always has a special place in my heart, I think, just that was my first experience of like, “Oh, this is how you work on a team and you work collaboratively together and it's okay to fail and be open.”

[00:06:30] NL: Nice.

[00:06:31] KN: What about you, Josh?

[00:06:32] JR: I worked on a project at CoreOS. Well, a project that's still out there called ALB Ingress controller. It was a way to bring the AWS ALBs, which are just layer 7 load balancers and take the Kubernetes API ingress, attach those two together so that the ALB could serve ingress.

The reason that it was the most interesting, technology aside, is just it went from something that we started just myself and a colleague, and eventually gained community adoption. We had to go through the process of just being us two worrying about our concerns, to having to bring on a large community that had their own business requirements and needs, and having to say no at times and having to encourage individuals to contribute when they had ideas and issues, because we didn't have the bandwidth to solve all those problems. It was interesting not necessarily from a technical standpoint, but just to see what it actually means when something starts to gain traction. That was really cool. Yeah, how about you Duffie?

[00:07:30] DC: I've worked on a number of projects, but I find that generally where I fit into the ecosystem is basically helping other people adopt open source technologies. I spent a quite a bit of my time working on OpenStack and I spent some time working on Open vSwitch and recently in Kubernetes. Generally speaking, I haven't found myself to be much of a contributor to of code to those projects per se, but more like my work is just enabling people to adopt those technologies because I understand the breadth of the project more than the detail of some particular aspect.

Lately, I've been spending some time working more on the SIG Network and SIG-cluster-lifecycle stuff. Some of the projects that have really caught my interest are things like, Kind which is Kubernetes in Docker and working on KubeADM itself, just making sure that we don't miss anything obvious in the way that KubeADM is being used to manage the infrastructure again.

[00:08:26] KN: What about you, Carlisia?

[00:08:27] CC: I realize it's a mission what I'm working on at VMware. That is coincidentally the project – the open source project that is my favorite. I didn't have a lot of experience with open source, just minor contributions here and there before this project. I'm working with Valero. It's a disaster recovery tool for Kubernetes. Like I said, it's open source. We’re coming up to version 1 pretty soon. The other maintainers are amazing, super knowledgeable and very experienced, mature. I have such a joy to work with them. My favorites.

[00:09:04] NL: That's awesome.

[00:09:05] DC: Should we get into the concept of cloud native and start talking about what we each think of this thing? Seems like a pretty loaded topic. There are a lot of people who would think of cloud native as just a generic term, we should probably try and nail it down here.

[00:09:19] KN: I'm excited for this one.

[00:09:21] CC: Maybe we should talk about what this podcast show is going to be?

[00:09:26] NL: Sure. Yeah. Totally.

[00:09:27] CC: Since this is our first episode.

[00:09:29] NL: Carlisia, why don't you tell us a little bit about the podcast?

[00:09:31] CC: I will be glad to. The idea that we had was to have a show where we can discuss cloud native concepts. As opposed to talking about particular tools or particular project, we are going to aim to talk about the concepts themselves and approach it from the perspective of a distributed system idea, or issue, or concept, or a cloud native concept. 

From there, we can talk about what really is this problem, what people or companies have this problem? What usually are the solutions? What are the alternative ways to solve this problem? Then we can talk about tools that are out there that people can use. I don't think there is a show that approaches things from this angle. I'm really excited about bringing this to the community.

[00:10:30] KN: It's almost like TGIK, but turned inside out, or flipped around where TGIK, we do tools first and we talk about what exactly is this tool and how do you use it, but I think this one, we're spinning that around and we're saying, “No, let's pick a broader idea and then let's explore all the different possibilities with this broader idea.”

[00:10:50] CC: Yeah, I would say so.

[00:10:52] JR: From the field standpoint, I think this is something we often times run into with people who are just getting started with larger projects, like Kubernetes perhaps, or anything really, where a lot of times they hear something like the word Istio come out, or some technology. Often times, the why behind it isn't really considered upfront, it's just this tool exists, it's being talked about, clearly we need to start looking at it. Really diving into the concepts and the why behind it, hopefully will bring some light to a lot of these things that we're all talking about day-to-day.

[00:11:23] CC: Yeah. Really focusing on the what and the why. The how is secondary. That's what my vision of this show is.

[00:11:33] KN: I like it.

[00:11:34] NL: That's something that really excites me, because there are a lot of these concepts that I talk about in my day-to-day life, but some of them, I don't actually think that I understand pretty well. It's those words that you've heard a million times, so you know how to use them, but you don't actually know the definition of them.

[00:11:48] CC: I'm super glad to hear you say that mister, because as a developer in many not a system – not having a sysadmin background. Of course, I did sysadmin things as a developer, but not it wasn't might day-to-day thing ever.

When I started working with Kubernetes, a lot of things I didn't quite grasp and that's a super understatement. I noticed that I mean, I can ask questions. No problem. I will dig through and find out and learn. The problem is that in talking to experts, a lot of the time when people, I think, but let me talk about myself. A lot of time when I ask a question, the experts jump right to the how. What is this? “Oh, this is how you do it.” I don't know what this is. Back off a little bit, right? Back up. I don't know what this is. Why is this doing this? I don't know.

If you tell me the how before I understand what that even is, I'm going to forget. That's what's going to happen. I mean, it’s great you're trying to make an effort and show me the how to do something. This is personal, the way I learn. I need to understand the how first. This is why I'm so excited about this show. It's going to be awesome. This is what we’re going to talk about.

[00:13:10] DC: Yeah, I agree. This is definitely one of the things that excites me about this topic as well, is that I find my secret super power is troubleshooting. That means that I can actually understand what the expected relationships between things should do, right? Rather than trying to figure out. Without really digging into the actual problem of stuff and what and the how people were going, or the people who were developing the code were trying to actually solve it, or thought about it. It's hard to get to the point where you fully understand that that distributed system. I think this is a great place to start.

The other thing I'll say is that I firmly believe that you can't – that you don't understand a thing if you can't teach it. This podcast for me is about that. Let's bring up all the questions and we should enable our audience to actually ask us questions somehow, and get to a place where we can get as many perspectives on a problem as we can, such that we can really dig into the detail of what the problem is before we ever talk about how to solve it. Good stuff.

[00:14:09] CC: Yeah, absolutely.

[00:14:11] KN: Speaking of a feedback loop from our audience and taking the problem first and then solution in second, how do we plan on interacting with our audience? Do we want to maybe start a GitHub repo, or what are we thinking?

[00:14:25] NL: I think a GitHub repo makes a lot of sense. I also wouldn't mind doing some social media malarkey, maybe having a Twitter account that we run or something like that, where people can ask questions too.

[00:14:36] CC: Yes. Yes to all of that. Yeah. Having an issue list that in a repo that people can just add comments, praises, thank you, questions, suggestions for concepts to talk about and say like, “Hey, I have no clue what this means. Can you all talk about it?” Yeah, we'll talk about it. Twitter. Yes. Interact with those on Twitter. I believe our Twitter handle is TheKubelets.

[00:15:02] KN: Oh, we already have one. Nice.

[00:15:03] NL: Yes. See, I'm learning something new already.

[00:15:07] CC: We already have. I thought you were all were joking. We have the Kubernetes repo. We have a github repo called –

[00:15:13] NL: Oh, perfect.

[00:15:14] CC: heptio/thekubelets.

[00:15:18] DC: The other thing I like that we do in TGIK is this HackMD thing. Although, I'm trying to figure out how we could really make that work for us in a show that's recorded every week like this one. I think, maybe what we could do is have it so that when people can listen to the recording, they could go to the HackMD document, put questions in or comments around things if they would like to hear more about, or maybe share their perspectives about these topics. Maybe in the following week, we could just go back and review what came in during that period of time, or during the next session.

[00:15:49] KN: Yeah. Maybe we're merging the HackMD on the next recording.

[00:15:53] DC: Yeah.

[00:15:53] KN: Okay. I like it.

[00:15:55] DC: Josh, you have any thoughts? Friendster, MySpace, anything like that?

[00:15:58] JR: No. I think we could pass on MySpace for now, but everything else sounds great.

[00:16:04] DC: Do we want to get into the meat of the episode?

[00:16:07] KN: Yeah.

[00:16:08] DC: Our true topic, what does cloud native mean to all of us? Kris, I'm interested to hear your thoughts on this. You might have written a book about this?

[00:16:19] KN: I co-authored a book called Cloud Native Infrastructure, which it means a lot of things to a lot of people. It's one of those umbrella terms, like DevOps. It's up to you to interpret it. I think in the past couple of years of working in the cloud native space and working directly at the CNCF as a CNCF ambassador, Cloud Native Computing Foundation, they're the open source nonprofit folks behind this term cloud native.

I think the best definition I've been able to come up with is when you're designing software and you start your main function to be built around the cloud, or to be built around what the cloud enables us to do in the services a cloud to offer you, that is when you start to look at cloud native engineering. I think all cloud native infrastructure is, it's designing software that manages and mutates infrastructure in that same way. I think the underlying theme here is we're no longer caddying configurations disk and doing system D restarts. Now we're just sending HTTPS API requests and getting messages back.

Hopefully, if the cloud has done what we expect it to do, that broadcast some broader change. As software engineers, we can count on those guarantees to design our software around. I really think that you need to understand that it's starting with the main function first and completely engineering your app around these new ideas and these new paradigms and not necessarily a migration of a non-cloud native app. 

I mean, you technically could go through and do it. Sure, we've seen a lot of people do it, but I don't think that's technically cloud native. That's cloud alien. Yeah. I don't know. That's just my thought.

[00:18:01] DC: Are you saying that cloud native approach is a greenfield approach generally? To be a cloud native application, you're going to take that into account in the DNA of your application?

[00:18:12] KN: Right. That's exactly what I'm saying.

[00:18:14] CC: It's interesting that never said – mentioned cloud alien, because that plays into the way I would describe the meaning of cloud native. I mean, what it is, I think Nova described it beautifully and it's a lot of – it really shows her know-how. For me, if I have to describe it, I will just parrot things that I have read, including her book. What it means to me, what it means really is I'm going to use a metaphor to explain what it means to me.

Given my accent, I’m obviously not an American born, and so I'm a foreigner. Although, I do speak English pretty well, but I'm not native. English is not my native tongue. I speak English really well, but there are certain hiccups that I'm going to have every once in a while. There are things that I'm not going to know what to say, or it's going to take me a bit long to remember.

I rarely run into not understanding it, something in English, but it happens sometimes. That's the same with the cloud native application. If it hasn't been built to run on cloud native platforms and systems, you can migrate an application to cognitive environment, but it's not going to fully utilize the environments, like a native app would. That's my take.

[00:19:47] KN: Cloud immigrant.

[00:19:48] CC: Cloud immigrant. Is Nick a cloud alien?

[00:19:51] KN: Yeah.

[00:19:53] CC: Are they cloud native alien, or cloud native aliens. Yeah.

[00:19:58] JR: On that point, I'd be curious if you all feel there is a need to discern the notion of cloud native infrastructure, or platforms, then the notion of cloud native apps themselves. Where I'm going with this, it's funny hearing the Greenfield thing and what you said, Carlisia, with the immigration, if you will, notion.

Oftentimes, you see these very cloud native platforms, things, the amount of Kubernetes, or even Mesos or whatever it might be. Then you see the applications themselves. Some people are using these platforms that are cloud native to be a forcing function, to make a lot of their legacy stuff adopt more cloud native principles, right? There’s this push and pull. It's like, “Do I make my app more cloud native? Do I make my infrastructure more cloud native? Do I do them both at the same time?” Be curious what your thoughts are on that, or if that resonates with you at all.

[00:20:51] KN: I've got a response here, if I can jump in. Of course, Nova with opinions. Who would have thought? I think what I'm hearing here, Josh is as we're using these cloud native platforms, we're forcing the hand of our engineers. In a world where we may be used to just send this blind DNS request out so whatever, and we would be ignorant of where that was going, now in the cloud native world, we know there's the specific DNS implementation that we can count on. It has this feature set that we can guarantee our software around.

I think it's a little bit of both and I think that there is definitely an art to understanding, yes, this is a good idea to do both applications and infrastructure. I think that's where you get into this what it needs to be a cloud native engineer. Just in the same traditional legacy infrastructure stack, there's going to be good engineering choices you can make and there's going to be bad ones and there's many different schools of thought over do I go minimalist? Do I go all in at once? What does that mean? I think we're seeing a lot of folks try a lot of different patterns here. I think there's pros and cons though.

[00:21:55] CC: Do you want to talk about this pros and cons? Do you see patterns that are more successful for some kinds of company versus others?

[00:22:02] KN: I mean, I think going back to the greenfield thing that we were talking about earlier, I think if you are lucky enough to build out a greenfield application, you're able to bake in greenfield infrastructure management instead as well. That's where you get these really interesting hybrid applications, just like Kubernetes, that span the course of infrastructure and application. If we were to go into Kubernetes and say, “I wanted to define a service of type load balancer,” it’s actually going to go and create a load balancer for you and actually mutate that underlying infrastructure.

The only way we were able to get that power and get that paradigm is because on day one, we said we're going to do that as software engineers; taking the infrastructure where you were hidden behind the firewall, or hidden behind the load balancer in the past. The software would have no way to reason about it. They’re blind and greenfield really is going to make or break your ability to even you take the infrastructure layers.

[00:22:55] NL: I think that's a good distinction to make, because something that I've been seeing in the field a lot is that the users will do cloud native practices, but they’ll use a tool to do the cloud native for them, right? They'll use something along the lines of HashiCorp’s Terraform to create the VMs and the load balancers for them. It's something I think that people forget about is that the application themselves can ask for these resources as well. Terraform is just using an API and your code can use an API to the same API, in fact. I think that's an important distinction.

It forces the developer to think a little bit like a sysadmin sometimes. I think that's a good melding of the dev and operations into this new word. Regrettably, that word doesn't exist right now.

[00:23:42] KN: That word can be cloud native.

[00:23:44] DC: Cloud here to me breaks down into a different set of topics as well. I remember seeing a talk by Brandon Phillips a few years ago. In his talk, he was describing – he had some numbers up on the screen and he was talking about the fact that we were going to quickly become overwhelmed by the desire to continue to develop and put out more applications for our users. 

His point was that every day, there's another 10,000 new users of the Internet, new consumers that are showing up on the Internet, right? Globally, I think it's something to the tune of about 350,000 of the people in this room, right? People who understand infrastructure, people who understand how to interact with applications, or to build them, those sorts of things.

There really aren't a lot of people who are in that space today, right? We're surrounded by them all the time, but they really just globally aren't that many. His point is that if we don't radically change the way that we think about the development as the deployment and the management of all of these applications that we're looking at today, we're going to quickly be overrun, right? There aren't going to be enough people on the planet to solve that problem without thinking about the problem in a fundamentally different way.

For me, that's where the cloud native piece comes in. With that, comes a set of primitives, right? You need some way to automate, or to write software that will manage other software. You need the ability to manage the lifecycle of that software in a resilient way that can be managed. There are lots of platforms out there that thought about this problem, right? There are things like Mesos, there are things like Kubernetes. There's a number of different shots on goal here. There are lots of things that I've really tried to think about that problem in a fundamentally different way.

I think of those primitives that being able to actually manage the lifecycle of software, being able to think about packaging that software in such a way that it can be truly portable, the idea that you have some API abstraction that brings again, that portability, such that you can make use of resources that may not be hosted on your infrastructure on your own personal infrastructure, but also in the cloud, like how do we actually make that API contract so complete that you can just take that application anywhere? These are all part of that cloud native definition in my opinion.

[00:25:59] KN: This is so fascinating, because the human race totally already learned this lesson with the Linux kernel in the 90s, right? We had all these hardware manufacturers coming out and building all these different hardware components with different interfaces. Somebody said, “Hey, you know what? There's a lot of noise going on here. We should standardize these and build a contract.” That contract then implemented control loops, just like in Kubernetes and then Mesos. Poof, we have the Linux kernel now. We're just distributed Linux kernel version 2.0. The human race is here repeating itself all over again.

[00:26:33] NL: Yeah. It seems like the blast radius of Linux kernel 2.0 is significantly higher than the Linux kernel itself. That made it sound like I was like, pooh-poohing what you're saying. It’s more like, we're learning the same lesson, but at a grander scale now.

[00:26:51] KN: Yeah. I think that's a really elegant way of putting it.

[00:26:54] DC: You do raise a good point. If you are embracing on a cloud native infrastructure, remember that little changes are big changes, right? Because you're thinking about managing the lifecycle of a thousand applications now, right? If you're going full-on cloud native, you're thinking about operating at scale, it's a byproduct of that. Little changes that you might be able to make to your laptop are now big changes that are going to affect a fleet of thousand machines, right?

[00:27:21] KN: We see this in Kubernetes all the time, where a new version of Kubernetes comes out and something totally unexpected happens when it is ran at scale. Maybe it worked on 10 nodes, but when we need to fire up a thousand nodes, what happens then?

[00:27:33] NL: Yeah, absolutely. That actually brings up something that to me, defines cloud native as well. A lot of my definition of cloud native follows in suit with Kris Nova's book, or Kris Nova, because your book was what introduced me to the phrase cloud native. It makes sense that your opinion informs my opinion, but something that I think that we were just starting to talk about a little bit is also the concept of stability. 

Cloud native applications and infrastructure means coding with instability in mind. It's not being guaranteed that your VM will live forever, because it's on somebody else's hardware, right? Their hardware could go down, and so what do you do? It has to move over really quickly, has to figure out, have the guarantees of its API and its endpoints are all going to be the same no matter what. All of these things have to exist for the code, or for your application to live in the cloud.

That's something that I find to be very fascinating and that's something that really excites me, is not trying to make a barge, but rather trying to make a schooner when you're making an app. Something that can, instead of taking over the waves, can be buffeted by the waves and still continue.

[00:28:46] KN: Yeah. It's a little more reactive. I think we see this in Kubernetes a lot. When I interviewed Joe a couple years ago, Joe Beda for the book to get a quote from him, he said, this magic phrase that has stuck with me over the past few years, which is “goal-seeking behavior.” If you look at a Kubernetes object, they all use this concept in Go called embedding. 

Every Kubernetes object has a status in the spec. All it is is it’s what's actually going on, versus what did I tell it, what do I want to go on. Then all we're doing is just like you said with your analogy, is we're just trying to be reactive to that and build to that.

[00:29:23] JR: That's something I wonder if people don't think about a lot. They don't they think about the spec, but not the status part. I think the status part is as important, or more important maybe than the spec.

[00:29:32] KN: It totally is. Because I mean, a status like, if you have one potentiality for status, your control loop is going to be relatively trivial. As you start understanding more of the problems that you could see and your code starts to mature and harden, those statuses get more complex and you get more edge cases and your code matures and your code hardens. Then we can take that and globally in these larger cloud native patterns. It's really cool.

[00:29:58] NL: Yeah. Carlisia, you’re a developer who's now just getting into the cloud native ecosystem. What are your thoughts on developing with cloud native practices in mind?

[00:30:09] CC: I’m not sure I can answer that. When I started developing for Kubernetes, I was like, “What is a pod?” What comes first? How does this all fit together? I joined the project [inaudible 00:30:24]. I don't have to think about that. It's basically moving the project along. I don't have to think what I have to do differently from the way I did things before.

[00:30:36] DC: One thing that I think you probably ran into in working with the application is the management of state and how that relates to – where you actually end up coupling that state. Before in development, you might just assume that there is a database somewhere that you would have to interact with. That database is a way of actually pushing that state off of the code that you're actually going to work with. In this way, that you might think of being able to write multiple consumers of state, or multiple things that are going to mutate state and all share that same database.

This is one of the patterns that comes up all the time when we start talking about cloud native architectures, is because we have to really be very careful about how we manage that state and mainly, because one of the other big benefits of it is the ability to horizontally scale things that are going to mutate, or consume state.

[00:31:29] CC: My brain is in its infancy as it relates to Kubernetes. All that I see is APIs all the way down. It's just APIs all the way down. It’s not very different than as a developer for me, is not very much more complex than developing against the database that sits behind. Ask me again a year from now and I will have a more interesting answer.

[00:31:59] KN: This is so fascinating, right? I remember a couple years ago when Kubernetes was first coming out and listening to some of the original “Elders of Kubernetes,” and even some of the stuff that we were working on at this time. One of the things that they said was we hope one day, somebody doesn't have to care about what's passed these APIs and gets to look at Kubernetes as APIs only. Then they hear that come from you authentically, it's like, “Hey, that's our success statement there. We nailed it.” It's really cool.

[00:32:30] CC: Yeah. I don’t understood their patterns and I probably should be more cognizant about these patterns are, even if it's just to articulate them. To me, my day-to-day challenge is understanding the API, understanding what library call do I make to make this happen and how – which is just programming 101 almost. Not different from any other regular project.

[00:33:01] JR: Yeah. That is something that's nice about programming with Kubernetes in mind, because a lot of times you can use the source code as documentation. I hate to say that particularly is a non-developer. I'm a sysadmin first getting into development and documentation is key in my mind. There's been more than a few times where I'm like, “How do I do this?” You can look in the source code for pretty much any application that you're using that's in Kubernetes, or around the Kubernetes ecosystem. The API for that application is there and it'll tell you what you need to do, right? It’s like, “Oh, this is how you format your config file. Got it.”

[00:33:39] CC: At the same time, I don't want to minimize that knowing what the patterns are is very useful. I haven't had to do any design for Valero for our projects. Maybe if I had, I would have to be forced to look into that. I'm still getting to know the codebase and developing features, but no major design that I had to lead at least.

I think with time, I will recognize those patterns and it will make it easier for me to understand what is happening. What I was saying is that not understanding the patterns that are behind the design of those APIs doesn't preclude me at all so call against it, against them.

[00:34:21] KN: I feel this is the heart of cloud native. I think we totally nailed it. The heart of cloud native is in the APIs and your ability to interact with the APIs. That's what makes it programmable and that's what makes – gives you the interface for you and your software to interact with that.

[00:34:36] DC: Yeah, I agree with that. API first. On the topic of cloud native, what about the Cloud Native Computing Foundation? What are our thoughts on the CNCF and what is the CNCF? Josh, you have any thoughts on that?

[00:34:52] JR: Yeah. I haven't really been as close to the CNCF as I probably should, to be honest with you. One of the great things that the CNCF has put together are programs around getting projects into this, I don't know if you would call it vendor neutral type program. Maybe somebody can correct me on that. Effectively, there's a lot of different categories, like networking and storage and runtimes for containers and things of that nature. There's a really cool landscape that can show off a lot of these different technologies.

A lot of the categories, I'm guessing we'll be talking about on this podcast too, right? Things like, what does it mean to do cloud native networking and so on and so forth? That's my purview of the CNCF. Of course, they put on KubeCon, which is the most important thing to me. I'm sure someone else on this call can talk deeper at an organization level what they do.

[00:35:41] KN: I'm happy to jump in here. I've been working with them for I think three years now. I think first, it's important to know that they are a subsidiary of the Linux Foundation. The Linux Foundation is the original open source, nonprofit here, and then the CNCF is one of many, like Apache is another one that is underneath the broader Linux Foundation umbrella.

I think the whole point of – or the CNCF is to be this neutral party that can help us as we start to grow and mature the ecosystem. Obviously, money is going to be involved here. Obviously, companies are going to be looking out for their best interest. It makes sense to have somebody managing the software that is outside, or external of these revenue-driven companies. That's where I think the CNCF comes into play. I think that's its main responsibility is. 

What happens when somebody from company A and somebody from Company B disagree with the direction that the software should go? The CNCF can come in and say, “Hey, you know what? Let's find a happy medium in here and let's find a solution that works for both folks and let's try to do this the best we can.” I think a lot of this came from lessons we learned the hard way with Linux. In a weird way, we did – we are in version 2.0, but we were able to take advantage of some of the priority here.

[00:36:57] NL: Do you have any examples of a time in the CNCF jumped in and mediated between two companies?

[00:37:02] KN: Yeah. I think the steering committee, the Kubernetes steering committee is a great example of this. It's a relatively new thing. It hasn't been around for a very long time. You look at the history of Kubernetes and we used to have this incubation process that has since been retired. We've tried a lot of solutions and the CNCF has been pretty instrumental and guiding the shape of how we're going to manage, solve governance for such a monolithic project. As Kubernetes grows, the problem space grows and more people get involved. We're having to come up with new ways of managing that.

I think that's not necessarily a concrete example of two specific companies, but I think that's more of as people get involved, the things that used to work for us in the past are no longer working. The CNCF is able to recognize that and guide us out of that.

[00:37:48] DC: Cool. That’s such a very good perspective on the CNCF that I didn't have before. Because like Josh, my perspective with CNCF was well, they put on that really cool party three times a year.

[00:37:58] KN: I mean, they definitely are great at throwing parties.

[00:38:03] NL: They are that.

[00:38:04] CC: My perspective of the CNCF is from participating in the Kubernetes meetup here in San Diego. I’m trying to revive our meetup, which is really hard to do, but different topic. I know that they try to make it easier for people to find meetups, because they have on meetup.com, they have an organization. I don't know what the proper name is, but if you go there and you put your zip code, you'll find any meetup that's associated with them. My meetup here in San Diego is associated, can be easily found.

They try to give a little bit of money for swags. We also give out ads for meetup. They offer help for finding speakers and they also have a speaker catalog on their website. They try to help in those ways, which I think is very helpful, very valuable.

[00:39:06] DC: Yeah, I agree. I know about CNCF, mostly just from interacting with folks who are working on its behalf. Working at meeting a bunch of the people who are working on the Kubernetes project, on behalf of the CNCF, folks like Ihor and people like that, which are constantly amazingly with the amount of work that they do on behalf of the CNCF. I think it's been really good seeing what it means to provide governance over a project. I think that really highlights – that's really highlighted by the way that Kubernetes itself has managed.

I think a lot of us on the call have probably worked with OpenStack and remember some of the crazy battles that went on between vendors around particular components in that stack. I've yet to actually really see that level of noise creep into the Kubernetes situation. I think squarely on the CNCF around managing governance, and also run the community for just making it accessible enough thing that people can plug into it, without actually having to get into a battle about taking ownership of CNI, for example. Nobody should own CNI. That should be its own project under its own governance.

How you satisfy the needs for something like container networking should be a project that you develop as a company, and you can make the very best one that you could make it even attract as many customers to that as you want. Fundamentally, the way that your interface to that major project should be something that is abstracted in such a way that it isn't owned by any one company. There should be a contact in an API, that sort of thing.

[00:40:50] KN: Yeah. I think the best analogy I ever heard was like, “We’re just building USB plugs.”

[00:40:54] DC: That's actually really great.

[00:40:56] JR: To that point Duffie, I think what's interesting is more and more companies are looking to the CNCF to determine what they're going to place their bets on from a technology perspective, right? Because they've been so burned historically from some project owned by one vendor and they don't really know where it's going to end up and so on and so forth. It's really become a very serious thing when people consider the technologies they're going to bet their business on.

[00:41:23] DC: Yeah. When a project is absorbed into the CNCF, or donated to the CNCF, I guess. There are a number of projects that this has happened to. Obviously, if you see that iChart that is the CNCF landscape, there's just tons of things happening inside of there. It's a really interesting process, but I think that from my part, I remember recently seeing Sysdig Falco show up in that list and seeing them donate – seeing Sysdig donate Falco to the CNCF was probably one of the first times that I've actually have really tried to see what happens when that happens.

I think that some of the neat stuff here that happens is that now this is an open source project. It's under the governance of the CNCF. It feels to me more an approachable project, right? I don't feel I have to deal with Sysdig directly to interact with Falco, or to contribute to it. It opens that ecosystem up around this idea, or the genesis of the idea that they built around Falco, which I think is really powerful. What do you all think of that?

[00:42:21] KN: I think, to look at it from a different perspective, that's one example of when the CNCF helps a project liberate itself. There's plenty of other examples out there where the CNCF is an opt-in feature, that is only there if we need it. I think cluster API, which I'm sure we're going to talk about this in a later episode. I mean, just a quick overview is a lot of different vendors implementing the same API and making that composable and modular.

I mean, nowhere along the way in the history of that project has the CNCF had to come and step in. We’ve been able to operate independently of that. I think because the CNCF is even there, we all are under this working agreement of we're going to take everybody's concerns into consideration and we're going to take everybody’s use case in some consideration, work together as an ecosystem. I think it's just even having that in place, whether or not you use it or not is a different story.

[00:43:14] CC: Do you all know any project under the CNCF?

[00:43:17] KN: I have one.

[00:43:19] JR: Well, I've heard of this one. It's called Kubernetes.

[00:43:21] CC: Is it called Kubernetes or Kubernetes?

[00:43:24] JR: It’s called Kubernetes.

[00:43:26] CC: Wow. That’s not what Duffie thinks.

[00:43:29] DC: I don’t say it that way. No, it's been pretty fascinating seeing just the breadth of projects that are under there. In fact, I was just recently noticing that OpenEBS is up for joining the CNCF. There seems to be – it's fascinating that the things that are being generated through the CNCF and going through that life cycle as a project sometimes overlap with one another and it's very – it seems it's a delicate balance that the CNCF would have to play to keep from playing favorites. Because part of the charter of CNCF is to promote the project, right?

I'm always curious to see and I'm fascinated to see how this plays out as we see projects that are normally competitive with one another under the auspice of the same organization, like a CNCF. How do they play this in such a way that they remain neutral, even it would – it seems like it would take a lot of intention.

[00:44:31] KN: Yeah. Well, there's a difference between just being a CNCF project and being an official project, or a graduated project. There's different tiers. For instance, Kubicorn, a tool that I wrote, we just adopted the CNCF, like I think a code of conduct and there was another file I had to include in the repo and poof, were magically CNCF now. It's easy to get onboard. Once you're onboard, there's legal implications that come with that. There totally is this tier ladder stature that I'm not even super familiar with. That’s how officially CNCF you can be as your product grows and matures.

[00:45:06] NL: What are some of the code of conduct that you have to do to be part of the CNCF?

[00:45:11] KN: There's a repo on it. I can maybe find it and add it to the notes after this, but there's this whole tutorial that you can go through and it tells you everything you need to add and what the expectations are and what the implications are for everything.

[00:45:24] NL: Awesome.

[00:45:25] CC: Well, Valero is a CNCF project. We follow the what is it? The covenant?

[00:45:32] KN: Yeah, I think that’s what it is.

[00:45:34] CC: Yes. Which is the same that Kubernetes follows. I am not sure if there can be others that can be adopted, but this is definitely one.

[00:45:45] NL: Yeah. According to Aaron Crickenberger, who was the Release Lead for Kubernetes 1.14, the CNCF code of conduct can be summarized as don't be a jerk.

[00:45:59] KN: Yeah. I mean, there's more to it than that, but –

[00:46:01] NL: That was him.

[00:46:02] KN: Yeah. This is something that I remember seeing an open source my entire career, open source comes with this implication of you need to be well-rounded and polite and listen and be able to take others’ just thoughts and concerns into consideration. I think we just are getting used to working like that as an engineering industry.

[00:46:23] NL: Agreed. Yeah. Which is a great point. It's something that I hadn't really thought of. The idea of development back in the day, it seems like before, there was such a thing as the CNCF are cloud native. It seemed that things were combative, or people were just trying to push their agenda as much as possible. Bully their way through. That doesn't seem that happens as much anymore. Do you guys have any thoughts on that?

[00:46:50] DC: I think what you're highlighting is more the open source piece than the cloud native piece, which I – because I think that when you're working – open source, I think has been described a few times as a force multiplier for software development and software adoption. I think of these things are very true. If you look at a lot of the big successful closed source projects, they have – the way that people in this room and maybe people listening to this podcast might perceive them, it's definitely just fundamentally differently than some open source project. 

Mainly, because it feels it's more of a community-driven thing and it also feels you're not in a place where you're beholden to a set of developers that you don't know that are not interested in your best, and in what's best for you, or your organization to achieve whatever they set out to do.

With open source, you can be a part of the voice of that project, right? You can jump in and say, “You know, it would really be great if this thing has this feature, or I really like how you would do this thing.” It really feels a lot more interactive and inclusive.

[00:47:54] KN: I think that that is a natural segue to this idea of we build everything behind the scenes and then hey, it's this new open source project, that everything is done. I don't really think that's open source. We see some of these open source projects out there. If you go look at the git commit history, it's all everybody from the same company, or the same organization. To me, that's saying that while granted the source code might be technically open source, the actual act of engineering and architecting the software is not done as a group with multiple buyers into it.

[00:48:29] NL: Yeah, that's a great point.

[00:48:31] DC: Yeah. One of the things I really appreciate about Heptio actually is that all of the projects that we developed there were – that the developer chat for that was all kept in some neutral space, like the Kubernetes Slack, which I thought was really powerful. Because it means that not only is it open source and you can contribute code to a project, but if you want to talk to people who are also being paid to develop that project, you can just go to the channel and talk to them, right? It's more than open source. It's open community. I thought that was really great.

[00:48:59] KN: Yeah. That's a really great way of putting it.

[00:49:01] CC: With that said though, I hate to be a party pooper, but I think we need to say goodbye.

[00:49:07] KN: Yeah. I think we should wrap it up.

[00:49:09] JR: Yeah.

[00:49:10] CC: I would like to re-emphasize that you can go to the issues list and add requests for what you want us to talk about.

[00:49:20] DC: We should also probably link our HackMD from there, so that if you want to comment on something that we talked about during this episode, feel free to leave comments in it and we'll try to revisit those comments maybe in our next episode.

[00:49:30] CC: Exactly. That's a good point. We will drop a link the HackMD page on the corresponding issue. There is going to be an issue for each episode, so just look for that.

[00:49:42] KN: Awesome. Well, thanks for joining everyone.

[00:49:45] NL: All right. Thank you.

[00:49:45] CC: Thank you. I'm really glad to be here.

[00:49:48] DC: Hope you enjoyed the episode and I look forward to a bunch more.

[END OF EPISODE]

[00:49:52] KN: Thank you for listening to The Kubelets Cloud Native Podcast. Find us on Twitter @TheKubelets and on the kubelets.io website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
