---
episode_id: kubernetes-sucks-for-developers-right-no
# General note: look at other episode files and follow the same format
# TODOs
# 1) Upload mp3 file to omnystudio
# 2) No episode number in the title; add ep number to the "Episode number" field
# 3) Keep it private, but set the date to publish (always on a Mon at 8:30AM)
# 4) Add episode to playlist; save
# 5) Fetch episode slug from Advanced settings > slug (note 1: it can be changed but never after the publish date; note 2: there should be no episode number in the slug)
# 6) Paste the slug into episode_id below
# 7) Commit and open a PR to get the remainder of the checklist
episode_number: 21
title: Kubernetes Sucks for Developers, Right? No.
# "description" is a short version of the show notes:
description: In this episode we focus on Kubernetes and its tooling with Ellen Körbes. Ellen believes that with the right set of tools at your disposal it is not actually necessary to completely understand all of Kubernetes or even be familiar with a lot of its functions. You do not have to start from the bottom every time you start a new project and developers who are new to Kubernetes need not becomes experts in it in order to take advantage of its benefits. 
# "notes" is the entire show notes:
notes: We are joined by Ellen Körbes for this episode, where we focus on Kubernetes and its tooling. Ellen has a position at Tilt where they work in developer relations. Before Tilt, they were doing closely related kinds of work at Garden, a similar company! Both companies are directly related to working with Kubernetes and Ellen is here to talk to us about why Kubernetes does not have to be the difficult thing that it is made out to be. According to them, this mostly comes down to tooling. Ellen believes that with the right set of tools at your disposal it is not actually necessary to completely understand all of Kubernetes or even be familiar with a lot of its functions. You do not have to start from the bottom every time you start a new project and developers who are new to Kubernetes need not becomes experts in it in order to take advantage of its benefits. The major goal for Ellen and Tilt is to get developers code up, running and live in as quick a time as possible. When the system is standing in the way this process can take much longer, whereas, with Tilt, Ellen believes the process should be around two seconds! Ellen comments on who should be using Kubernetes and who it would most benefit. We also discuss where Kubernetes should be run, either locally or externally, for best results and Tilt's part in the process of unit testing and feedback. We finish off peering into the future of Kubernetes, so make sure to join us for this highly informative and empowering chat!
# Uncomment and add guests if any
guests:
    - name: Ellen Körbes
      url: https://twitter.com/ellenkorbes
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Michael Gasch
      url: https://twitter.com/embano1
points:
    - Ellen's work at Tilt and the jumping-off point for today's discussion.
    - The projects and companies that Ellen and Tilt work with, that they are allowed to mention!
    - Who Ellen is referring to when they say 'developers' in this context.
    - Tilt's goal of getting all developers' code up and running in the two seconds range.
    - Who should be using Kubernetes? Is it necessary in development if it is used in production? 
    - Operating and deploying Kubernetes — who is it that does this?
    - Where developers seem to be running Kubernetes; considerations around space and speed. 
    - Possible security concerns using Tilt; avoiding damage through Kubernetes options.
    - Allowing greater possibilities for developers through useful shortcuts.
    - VS Code extensions and IDE integrations that are possible with Kubernetes at present.
    - Where to start with Kubernetes and getting a handle on the tooling like Tilt.
    - Using unit testing for feedback and Tilt's part in this process.
    - The future of Kubernetes tooling and looking across possible developments in the space.
# Be sure to check the episode's hackmd for additional links:
links:
    - name: Ellen Körbes
      url:  http://ellenkorbes.com/
    - name: Ellen Körbes on Twitter   
      url: https://twitter.com/ellenkorbes?lang=en
    - name: Tilt 
      url: https://tilt.dev/
    - name: Garden 
      url: https://garden.io/
    - name: Cluster API
      url: https://cluster-api.sigs.k8s.io/
    - name: Lyft 
      url: https://www.lyft.com/
    - name: KubeCon 
      url: https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/
    - name: Unu Motors
      url: https://unumotors.com/en
    - name: Mindspace 
      url: https://www.mindspace.me/
    - name: Docker
      url: https://www.docker.com/
    - name: Netflix 
      url: https://www.netflix.com/
    - name: GCP 
      url: https://cloud.google.com/
    - name: Azure 
      url: https://azure.microsoft.com/en-us/
    - name: AWS 
      url: https://aws.amazon.com/
    - name: ksonnet `
      url: https://ksonnet.io/
    - name: Ruby on Rails 
      url: https://rubyonrails.org/`
    - name: Lambda 
      url: https://aws.amazon.com/lambda/
    - name: DynamoDB 
      url: https://aws.amazon.com/dynamodb/
    - name: Telepresence 
      url: https://www.telepresence.io/
    - name: Skaffold Google 
      url: https://cloud.google.com/blog/products/application-development/kubernetes-development-simplified-skaffold-is-now-ga
    - name: Python 
      url: https://www.python.org/
    - name: REPL 
      url: https://repl.it/
    - name: Spring 
      url: https://spring.io/community
    - name: Go 
      url: https://golang.org/
    - name: Helm 
      url: https://helm.sh/
    - name: Pulumi 
      url: https://www.pulumi.com/
    - name: Starlark 
      url: https://github.com/bazelbuild/starlark
 
# Add only the YT id to the end of the URL below:
video: https://www.youtube.com/embed/39UM6UvSVN4
# related needs to be the episode id of the episode, not the file name. Ex: 010-the-dichotomy-of-security
related: 
- should-i-kubernetes  
- 016-cloud-native-apps 
- 001-cloud-native
---
EPISODE 21

[ANNOUNCER]

Welcome to The Podlets Podcast, a weekly show that explores cloud native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision-maker, this podcast is for you.

[EPISODE]

[0:00:41.8] CC: Hi, everybody. This is The Podlets. We are back this week with a special guest, Ellen Körbes. Ellen will introduce herself in a little bit. Also on the show, it’s myself, Carlisia Campos, Michael Gasch and Duffie Cooley.

[0:00:57.9] DC: Hey, everybody.

[0:00:59.2] CC: Today’s topic is Kubernetes Sucks for Developers, right? No. Ellen is going to introduce herself now and tell us all about what that even means.

[0:01:11.7] EK: Hi. I’m L. I do developer relations at Tilt. Tilt is a company whose main focus is development experience when it comes to Kubernetes and multi-service development. Before Tilt, I used to work at Garden. They basically do the same thing, it's just a different approach. That is basically the topic that we're going to discuss, the fact that Kubernetes does not have to suck for developers. You just need to – you need some hacks and fixes and tools and then things get better.

[0:01:46.4] DC: Yeah, I’m looking forward to this one. I've actually seen Tilt being used in some pretty high-profile open source projects. I've seen it being used in Cluster API and some of the work we've seen there and some of the other ones. What are some of the larger projects that you are aware of that are using it today?

[0:02:02.6] EK: Oh, boy. That's complicated, because every company has a different policy as to whether I can name them publicly or not. Let's go around that question a little bit. You might notice that Lyft has a talk at KubeCon, where they're going to talk about Tilt. I can't tell you right now that they use Tilt, but there's that. Hopefully, I found a legal loophole here.

I think they're the biggest name that you can find right now. Cluster API is of course huge and Cluster API is fun, because the way they're doing things is very different. We're used to seeing mostly companies that do apps in some way or another, like websites, phone apps, etc. Then Cluster API is completely insane. It's something else totally.

There's tons of other companies. I'm not sure which ones that are large I can name specifically. There are smaller companies. Unu Motors, they do electric motorcycles. It's a company here in Berlin. They have 25 developers. They’re using Tilt. We have very tiny companies, like Mindspace, their studio in Tucson, Arizona. They also use Tilt and it's a three-person team. We have the whole spectrum, from very, very tiny companies that are using Docker for Mac and pretty happy with it, all the way up to huge companies with their own fleet of development clusters and all of that and they're using Tilt as well.

[0:03:38.2] DC: That field is awesome.

[0:03:39.3] MG: Quick question, Ellen. The title says ‘developers’. Developers is a pretty broad name. I have people saying that okay, Kubernetes is too raw. It's more like a Linux kernel that we want this past experience. Our business developers, our application developers are developing in there. How would you do describe developer interfacing with Kubernetes using the tools that you just mentioned? Is it the traditional enterprise developer, or more Kubernetes developers developing on Kubernetes?

[0:04:10.4] EK: No. I specifically mean not Kubernetes developers. You have people work in Kubernetes. For example, the Cluster API folks, they're doing stuff that is Kubernetes specific. That is not my focus. The focus is you’re a back-end developer, you’re a front-end developer, you're the person configuring, I don't know the databases or whatever. Basically, you work at a company, you have your own business logic, you have your own product, your own app, your own internal stuff, all of that, but you're not a Kubernetes developer.
It just so happens that if the stuff you are working on is going to be pointing at Kubernetes, it's going to target Kubernetes, then one, you're the target developer for me, for my work. Two, usually you're going to have a hard time doing your job. We can talk a bit about why.

One issue is development clusters. If you're using Kubernetes in prod, rule of thumb, you should be using Kubernetes in dev, because you don't want completely separate environments where things work in your environment as a developer and then you push them and they break. You don't want that. You need some development cluster. The type of cluster that that's going to be is going to vary according to the level of complexity that you want and that you can deal with.

Like I said, some people are pretty happy with Docker for Mac. I hear all the time these complaints that, “Oh, you're running Kubernetes on your machine. It's going to catch fire.” Okay, there's some truth to that, but also it depends on what you're doing. No one tries to run Netflix, let's say the whole Netflix on their laptop, because we all know that's not reasonable. People try to do similar things on their mini-Kube, or Docker for Mac. Then it doesn't work and they say, “Oh, Kubernetes on the laptop doesn't work.” No. Yeah, it does. Just not for you.

That's a complaint I particularly dislike, because it comes from a – it's a blanket statement that has no – let's say, no facts behind it. Yeah, if you're a small company, Docker for Mac is going to work fine for you. Let's say you have a beefy laptop with 30 gigs of ram, you can put a lot of software in 30 gigs. You can put a lot of microservices in 30 gigs.

That's going to work up to a point and then it's going to break. When it breaks, you're going to need to move to a cloud, you're going to need to do remote development and then you're going to Go to GCP, or Azure, or Amazon. You're going to set up a cluster there. Some people use the managed Kubernetes options. Some people just spin up a bunch of machines and wire up Kubernetes by themselves. That's going to depend on basically how much you have in terms of resources and in terms of needs.

Usually, keeping up a remote cluster that works is going to demand more infrastructure work. You're going to need people who know how to do that, to keep an eye on that. There's all the billing aspect, which is you can run Docker for Mac all day and you're not going to pay extra. If you leave a bunch of stuff running on Google, you're going to have a bill at the end of the month that you need to pay attention to. That is one thing for people to think about.

Another aspect that I see very often that people don't know what to do with is config files. You scroll Twitter, you scroll Kubernetes Twitter for five minutes and there's a joke about YAML. We all hate editing YAML. Again, the same way people make jokes about using about Kubernetes setting your laptop on fire, I would argue that you're not meant to edit Kubernetes YAML by hand. The tooling for that is arguably not as mature as the tooling when it comes to Kubernetes clusters to run on your laptop. You have stuff like YAML templates, you have ksonnet. I think there's one called customize, but I haven't used it myself.

What I see in every company from the two-person team to the 600 person team is no one writes Kubernetes YAML by hand. Everyone uses a template solution, a templating solution of some sort. That is the first thing that I always tell people when they start making jokes about YAML, is if you’re editing YAML by hand, you're doing it wrong. You shouldn't do that in the first place. It's something that you set up once at some point and you look at it whenever you need to. On your day-to-day when you're writing your code, you should not touch those files, not by hand.

[0:08:40.6] CC: We're five minutes in and you threw so much at us. We need to start breaking some of this stuff down.

[0:08:45.9] EK: Okay. Let me throw you one last thing then, because that is what I do personally. One more thing that we can discuss is the development feedback loop. You're writing your code, you're working on your application, you make a change to your code. How much work is it for you to see that new line of code that you just wrote live and running? For most people, it's a very long journey. I asked that on Twitter, a lot of people said it was over half an hour. A very tiny amount of people said it was between five minutes and half an hour and only a very tiny fraction of people said it was two seconds or less.

The goal of my job, of my work, the goal of Tilt, the tool, which is made by the company I work for, also called Tilt, is to get everyone in that two seconds range. I've done that on stage and talks, where we take an application and we go from, “Okay, every time you make a change, you need to build a new Docker image. You need to push it to a registry. You need to update your cluster, blah, blah, blah, and that's going to take minutes, whole minutes.” We take that from all that long and we dial it down to a couple seconds.

You make a change, or save your file, snap your fingers and poof, it's up and running, the new version of your app. It's basically a real-time, perceptually real-time, just like back and when everyone was doing Ruby on Rails and you would just save your file and see if it worked basically instantly. That is the part of this discussion that personally I focus more on.

[0:10:20.7] CC: I'm going to love to jump to the how in a little bit. I want to circle back to the beginning. I love the question that Michael asked at the beginning, what is considered developer, because that really makes a difference, first to understand who we are talking about. I think this conversation can go in circles and not that I'm saying we are going circles, but this conversation out in the wild can go in circles. Until we have an understanding of the difference between can you as a developer use Kubernetes in a somewhat not painful way, but should you?

I'm very interested to get your take and Michael and Duffie’s take as well as far as should we be doing this and should all of the developers will be using Kubernetes through the development process? Then we also have to consider people who are not using Kubernetes, because a lot of people out there are not using communities. For developers and special, they hear Kubernetes is painful and definitely enough for developers. Obviously, that is not going to qualify Kubernetes as a tool that they’re going to look into. It's just not motivating.

If there is anything that that would make people motivated to look into Kubernetes that would be beneficial for them not just for using Kubernetes for Kubernetes sake, but would it be useful? Basically why? Why would it be useful?

[0:11:50.7] EK: I think from the point of view of a developer, you should try and stay away from Kubernetes for as long as you can. Kubernetes comes in when you start having issues of scale. It's a production matter, it's not a development matter. I don't know, like a DevOps issue, operations issue. Ideally, you put off moving your application to Kubernetes as long as possible. This is an opinion. We can argue about this forever. Just because it introduces a lot of complexity and if you don't need that complexity, you should probably stay away from it.

To get to the other half of the question, which is if you're using Kubernetes in production, should you use Kubernetes in development? Now here, I'm going to say yes a 100% of the time. Blanket statement of course, we can argue about minutiae, but I think so. Because if you don't, you end up having separate environments. Let's say you're using Docker Compose, because you don't like Kubernetes. You’re using Kubernetes in production, so in development you are going to need containers of some sort.

Let's say you're using Docker Compose. Now you're maintaining two different environments. You update something here, you have to update it there. One day, it's going to be Friday, you're going to be tired, you're going to update something here, you're going to forget to update something there, or you're going to update something there and it's going to be slightly different. Or maybe you're doing something that has no equivalent between what you're using locally and what you're using in production. Then basically, you're in trouble.

I've heard from many companies that the main reason they decided to use Kubernetes in development is that they wanted to mimic production as closely as possible. One argument we can have here is that – oh, but if you're using Kubernetes in development, that's going to add a lot of overhead and you're not going to be able to do your job right. I agree that that was true for a while, but right now we have enough tooling that you can basically make Kubernetes disappear and you just focus on being a developer, writing your code, doing all of that stuff. Kubernetes is sitting there in the background. You don't have to think about it and you can just go on about your business with the advantage that now, your development environment and your production environment are going to very closely mimic each other, so you're not going to have issues with those potential disparities.

[0:14:10.0] CC: All right. Another thing too is that I think we're making an assumption that the developers we are talking about are the developers that are also responsible for deployment. Sometimes that's the case, sometimes that's not the case and I'm going to shut up now. It would be interesting to talk about that too between all of us, is that what we see? Is that the case that now developers are responsible? It's like, developers DevOps is just so ubiquitous that we don't even consider differentiating between developers and ops people? All right?

[0:14:45.2] DC: I think I have a different spin on that. I think that it's not necessarily that developers are the ones operating the infrastructure. The problem is that if your infrastructure is operated by a platform that may require some integration at the application layer to really hit its stride, then the question becomes how do you as a developer become more familiar? What is the user experience as of, or what I should say, what's the developer experience around that integration? 

What can you do to improve that, so that the developer can understand better, or play with how service discovery works, or understand better, or play with how the different services in their application will be able to interact without having to redefine that in different environments? Which is I think what Ellen point was.

[0:15:33.0] EK: Yeah. At the most basic level, you have issues as such as you made a change to a service here, let's say on your local Docker Compose. Now you need to update your Kubernetes manifest on your cluster for things to make sense. Let's say, I don't know, you change the name of a service, something as simple as that. Even those kinds of things that sounds silly to even describe, when you're doing that every day, one day you're going to forget it, things are going to explode, you're not going to know why, you're going to lose hours trying to figure out where things went wrong.

[0:16:08.7] MG: Also the same with [inaudible] maybe. Even if you use Kubernetes locally, you might run a later version of Kubernetes, maybe use kind for local development, but then your cluster, your remote cluster is on three or four versions behind. Shouldn't be because of the versions of product policy, but it might happen, right?

Then APIs might be deprecated, or you're using different API. I totally agree with you, Ellen, that your development environment should reflect production as close as possible. Even there, you have to make sure that prod, like your APIs matches, API types matches and all the stuff right, because they could also break.

[0:16:42.4] EK: You were definitely right that bugs are not going away anytime soon.

[0:16:47.1] MG: Yeah. I think this discussion also remembers me of the discussion that the folks in the cloud will have with AWS Lambda for example, because there's similar, even though there are tools to simulate, or mimic these platforms, like serverless platforms locally, the general recommendation there is to embrace the cloud and develop in the cloud natively in the cloud, because that's something you cannot resemble. You cannot run DynamoDB locally. You could mimic it. You could mimic lambda runtimes locally. Essentially, it's going to be different.

That's also a common complaint in the world of AWS and cloud development, which is it's really not that easy to develop locally, where you're supposed to develop on the platform that the code is being shipped and run on to, because you cannot run the cloud locally. It sounds crazy, but it is. I think the same is with Kubernetes, even though we have the tools. I don't think that every developer runs Kubernetes locally. Most of them maybe doesn't even have Docker locally, so they use some spring tools and then they have some pipeline and eventually it gets shipped as a container part in Kubernetes.

That's what I wanted to throw in here as more like a question experience, especially for you Ellen with these customers that you work with, what are the different profiles that you see from the maturity perspective and these customers large enterprises might be different and the smaller ones that you mentioned. How do you see them having different requirements, as also Carlisia said, do they do ops, or DevOps, or is it strictly separated there, especially in large enterprises?

[0:18:21.9] EK: What I see the most, let's get the last part first.

[0:18:24.6] MG: Yeah, it was a lot of questions. Sorry for that.

[0:18:27.7] EK: Yeah. When it comes to who operates Kubernetes, who deploys Kubernetes, definitely most developers push their code to Kubernetes themselves. Of course, this involves CI and testing and PRs and all of that, so it's not you can just go crazy and break everything.

When it comes to operating the production cluster, then that's separate. Usually, you have someone writing code and someone else operating clusters and infrastructure. Sometimes it's the same person, but they're clearly separate roles, even if it's the same person doing it. Usually, you go from your IDE to PR and that goes straight into production once the whole process is done.

Now we were talking about workflows and Lambda and all of that. I don't see a good solution for lambda, a good development experience for Lambda just yet. It feels a bit like it needs some refinement still. When it comes to Kubernetes, you asked do most developers run Kubernetes locally? Do they not? I don't know about the numbers, the absolute numbers. Is it most doing this, or most doing that? I'm not sure. I only know the companies I'm in touch with.

Definitely not all developers run Kubernetes on their laptops, because it's a problem of scale. Right now, we are basically stuck with 30 gigs of RAM on our laptops. If your app is bigger than that, tough luck, you're not going to run it on the laptop. What most developers do is they still maintain a local development environment, where they can do development without going to CI. I think that is the main question. They maintain agility in their development process.

What we usually see when you don't have Kubernetes on your laptop and you're using remote Kubernetes, so a remote development cluster in some cloud provider. What most people do and this is not the companies I talk to. This is basically everyone else. What most people will do is they make their development environment be the same, or work the same way as their production environment. You make a change to your code, you have to push a PR that has to get tested by CI. It has to get approved. Then it ends up in the Kubernetes cluster.

Your feedback loop as a developer is insanely slow, because there's so much red tape between you changing a line of code and you getting a new process running in your cluster. Now when you use tools, I call the category MDX. I basically coined that category name myself. MDX is a multi-service development experience tooling.

When you use MDX tools, and that's not just Tilt; it’s Tilt, it’s Garden where I used to work, people use telepresence like that. There is Scaffold from Google and so on. There's a bunch of tools. When you use a tool like that, you can have your feedback loop down to a second like I said before. I think that is the major improvement developers can do if they're using Kubernetes remotely and even if they’re using Kubernetes locally.

I would guess most people do not run Kubernetes locally. They use remotely. We have clients who have clients — we have users who don't even have Docker on their local machines, because if you have the right tooling, you can change the files on your machine. You have tooling running that detects those five changes. It syncs those five changes to your cluster. The cluster then rebuilds images, or restarts containers, or syncs live code that's already running. Then you can see those changes reflected in your development cluster right, away even though you don't even have Docker in your machine. There's all of those possibilities.

[0:22:28.4] MG: Do you see security issues with that approach with not knowing the architecture of Tilt? Even though it's just the development clusters, there might be stuff that could break, or you could break by bypassing the red tape as you said?

[0:22:42.3] EK: Usually, we assign one user per namespace. Usually, every developer has a namespace. Kubernetes itself has enough options that if that's a concern to you, you can make it secure. Most people don't worry about it that much, because it's development clusters. They're not accessible to the public. Usually, there's – you can only access it through a VPN or something of that sort.

We haven't heard about security issues so far. I'm sure they’re going to pop out at some point. I'm not sure how severe it’s going to be, or how hard it's going to be to fix. I am assuming, because none of this stuff is meant to be accessible to the wider Internet that it's not going to be a hard problem to tackle.

[0:23:26.7] DC: I would like to back up for a second, because I feel we're pretty far down the road on what the value of this particular pattern is without really explaining what it is. I want to back this up for just a minute and talk about some of the things that a tooling like this is trying to solve in a use case model, right?

Back in the day when I was learning Python, I remember really struggling with the idea of being able to debug Python live. I came across iPython, which is a REPL and that was – which was hugely eye-opening, because it gave me the ability to interact with my code live and also open me up to the idea that it was an improve over things like having to commit a new log line against a particular function and then push that new function up to a place where it would actually get some use and then be able to go look at that log line and see what's coming out of it, or do I actually have enough logs to even put together what went wrong.

That whole set of use case is I think is somewhat addressed by tooling like this. I do think we should talk about how did we get here and how does that actually and how does like this address some of those things, and which use cases specifically is it looking to address.

I guess where I'm going with this is to your point, so a tooling like Tilt, for example, is the idea that you can, as far as I understand it, inject into a running application, a new instance that would be able to – that you would have a local development control over. If you make a change to that code, then the instance running inside of your target environment would be represented by that new code change very quickly, right? Basically, solving the problem of making sure that you have some very quick feedback loop.

I mean, functionally, that's the killer feature here. I think it’s really interesting to see tooling like that start to develop, right? Another example of that tooling would be the REPL thing, wherein instead of writing your code and compiling your code and seeing the output, you could do a thing where you're actually inside, running as a thread inside of the code and you can dump a data structure and you can modify that data structure and you can see if your function actually does the right thing, without having to go back and write that code while imagining all those data structures in your head. Basic tooling like this, I think is pretty killer.

[0:25:56.8] EK: Yeah. I think one area where that is still partially untapped right now where this tooling could go, and I'm pushing it, but it's a process. It's not something we can do overnight, is to have very high-level patterns, the let's say codified. For example, everyone's copying Docker files and Kubernetes manifests and Terraform can take files, which I forgot what they're called. Everyone's copying that stuff from the Internet from other websites. That's cool.

Oh, you need a container that does such-and-such and sets up this environment and provides these tools. Just download this image and everything is all set up for you. One area where I see things going is for us to have that same portability, but for development environments. For example, I did this whole talk about how to take your Go code, your Go application from I don't know, a 30-seconds feedback loop where you're rebuilding an image every time you make a code change and all of that, down to 1 second.

There's a lot of hacks in there that span all kinds of stuff, like should you use Go vendor, or should you keep your dependencies cached inside a Docker layer? Those kinds of things. Then I went down a bunch of those things and eventually came up with a workflow that was basically the best I could find in terms of development experience. What is the snappiest workflow? Or for example, you could have what is a workflow that makes it really easy to debug my Go app? You would use applications like Squash and that's a debugger that you can connect to a process running in a large container. Those kinds of things.

If we can prepackage those and offer those to users and not just for Go and not just for debugging, but for all kinds of development workflows, I think that would be really great. We can offer those types of experiences to people who don't necessarily have the inclination to develop those workflows themselves.

[0:28:06.8] DC: Yeah, I agree. I mean, it is interesting. I've had a few conversations lately about the fact that the abstraction layer of coding in the way that we think about it really hasn't changed over time, right? It's the same thing. That's actually a really relevant point. It's also interesting to think about with these sorts of frameworks and this tooling, it might be interesting to think of what else we can – what else we can enable the developer to have a feedback loop on more quickly, right?

To your point, right? We talked about how these different environments, your development environment and your production environment, the general consensus is they should be as close as you can get them reasonably, so that the behavior in one should somewhat mimic the behavior in the other. At least that's the story we tell ourselves. Given that, it would also be interesting if the developer was getting feedback from effectively how the security posture of that particular cluster might affect the work that they're doing. You do actually have to define network policy. Maybe you don't necessarily have to think about it if we can provide tooling that can abstract that away, but at least you should be aware that it's happening so that you understand if it's not working correctly, this is where you might be able to see the sharp edges pop up, you know what I mean? That sort of thing.

[0:29:26.0] EK: Yeah. At the last KubeCon, where was it? In San Diego. There was this running joke. I was running around with the security crowd and there was this joke about KubeCon applies security.yaml. It was in a mocking tone. I'm not disparaging their joke. It was a good joke. Then I was thinking, “What if we can make this real?” I mean, maybe it is real. I don't know. I don't do security myself. What if we can apply a comprehensive enough set of security measures, security monitoring, security scanning, all of that stuff, we prepackage it, we allow users to access all of that with one command, or even less than that, maybe you pre-configure it as a team lead and then everyone else in your team can just use it without even knowing that it's there. Then it just lets you know like, “Oh, hey. This thing you just did, this is a potential security issue that you should know about.” Yeah, I think coming up with these developer shortcuts, it's my hobby.

[0:30:38.4] MG: That's cool. What you just mentioned Ellen and Duffie remembers me on – reminds me on the Spring community, the Spring framework, where a lot of the boilerplate, or beat security stuff, or connections, integrations, etc., is being abstracted away and you just annotate your code a bit and then some framework and Spring obviously, it's a spring framework. In your case Ellen, what you were hinting to is maybe this build environment that gives me these integration hooks where I just annotate. Or even those annotations could be enforced. Standards could be enforced if I don't annotate at all, right? I could maybe override them.

Then this build environment would just pick it up, because it scans the code, right? It has the source code access, so I could just scan it and hook into it and then apply security policies, lock it down, see ports being used, maybe just open them up to the application, the other ones will automatically get blocked, etc., etc. It just came to my mind. I have not done any research there, or whether there's already some place or activity.

[0:31:42.2] EK: Yeah. Because I won't shut up about this stuff, because I just love it, we are doing a – it's in a very early stage right now. We are doing a thing at Tile, we're calling extensions. Very creative name, I suppose. It's basically Go in parts, but for those were closed. It's still at a very early stage. We still have some road ahead of us. For example, we have – let's say this one user and they did some very special integration of Helm and Tilt. You don't have to use Helm by hand anymore. You can just make all of your Helm stuff happen automatically when you're using Tilt.

Usually, you would have to copy I don't know, a 100 lines of code from your Tilt config file and copy that around for other developers to be able to use it. Now we have this thing that it's basically going parts where you can just say load extension and give it a name, it fetches it from a repository and it's running. I think that is basically an early stage of what you just described with Spring, but more geared towards let's say an infra-Kubernetes, like how do you tie infra-Kubernetes, that stuff with a higher level functionality that you might want to use?

[0:33:07.5] MG: Cool. I have another one. Speaking of which, is there any other integrations for IDEs with Tilt? Because I know that VS code for example, has Kubernetes integrations, does the fabric aid and may even plugin, which handles some stuff under the covers.

[0:33:24.3] EK: Usually, Tilt watches your code files and it doesn't care which IDEs you use. It has its own dashboard, which is just a page that you open on your browser. I have just heard this week. Someone mentioned on Slack that they wrote an extension for Tilt. I'm not sure if it was for VS code or the other VS code-like .NET editors. I don't remember what it’s called, but they have a family of those.

I just heard that someone wrote one of those and they shared the repo. We have someone looking into that. I haven't seen it myself. The idea has come up when I was working at Garden, which is in the same area as Tilt. I think it's pertinent. We also had the idea of a VS code extension. I think the question is what do you put in the extension? What do you make the VS code extension do? Because both Tilt and Garden. They have their own web dashboards that show users what should be shown and in the manner that we think should be shown.

If you're going to create a VS code extension, you either replicate that completely and you basically take this stuff that was in the browser and put it in the IDE. I don't particularly see much benefit in that. If enough people ask, maybe we'll do it, but it's not something that I find particularly useful.

Either you do that and you replicate the functionality, or you come up with new functionality. In both cases, I just don't see a very strong point as to what different and IDE-specific functionality should you want.

[0:35:09.0] MG: Yes. The reason why I was asking is that we see all these Pulumi, CDKs, AWS CDKs coming up, where you basically use a programming language to write your application/application infrastructure code and your IDE and then all the templating, that YAML stuff, etc., gets generated under covers.

Just this week, AWS announced the CDKs, like the CDK basically for Kubernetes. I was thinking, with this happening where some of these providers abstract the scaffolding as well, including the build. You don't even have to build, because it's abstracted away under the covers. I was seeing this trend. Then obviously, we still have Helm and the templating and the customize and then you still have the manual as I mentioned in the beginning.

I do like the IDE integration, because that's where I spend most of my time. Whenever I have to leave the IDE, it's a context switch that I have to go through. Even if it's just for opening another file also that I need to edit somewhere. That's why I think having IDE integration is useful for developers, because that's where they most spend up their time. As you said, there might be reasons to not do it in an IDE, because it's just replicating functionality that might not be useful there.

[0:36:29.8] EK: Yeah. In the case of Tilt, all the config is written in Starlark, which is a language and it's basically Python. If your IDE can syntax highlight Python, it can syntax highlight the Tilt config files. About Pulumi and that stuff, I'm not that familiar. It's stuff that I know how it works, but I haven't used it myself. I'm not familiar with the browse and the IDE integration side of it.

The thing about tools like Tilt is that usually, if you set it up right, you can just write your code all day and you don't have to look at the tool. You just switch from your IDE to let's say, your browser where your app is running, so you get feedback and that kind of thing. Once you configure it, you don't really spend much time looking at it. You're going to look at it when there are errors.

You try to refresh your application and it fails. You need to find that error. By the time that happened, you already lost focus from your code anyway. Whether you're going to look for your error on a terminal, or on the Tilt dashboard, that's not much an issue.

[0:37:37.7] MG: That's right. That’s right. I agree.

[0:37:39.8] CC: All this talk about tooling and IDEs is making me think to ask you Ellen. If I'm a developer and let's say, my company decides that we’re going to use Kubernetes. What we are advocating here with this episode is to think about well, if you're going to be the point to Kubernetes in production, you should consider running Kubernetes as a local development environment.

Now for those developers who don't even – haven't even worked with Kubernetes, where do you suggest they jump in? Should they get a handle on – because it's too many things. I mean, Kubernetes already is so big and there are so many toolings around to how to operate Kubernetes itself. For a developer who is, “Okay, I like this idea of having my own local Kubernetes environment, or a development environment somehow may also be in the cloud,” should they start with a tooling like Tilt, or something similar? Would that make it easier for them to wrap their head around Kubernetes and what Kubernetes does? Or should they first get a handle on Kubernetes and then look at a tool like this?

[0:38:56.2] EK: Okay. There are a few sides to this question. If you have a very large team, ideally you should get one or a few people to actually really learn Kubernetes and then make it so that everyone else doesn't have to. Something we have seen is very large company, they are going to do Kubernetes in development. They set up a developer experience team and then for example, they have their own wrapper around Kubectl and then basically, they automate a bunch of stuff so that everyone in the team doesn't have to take a certified Kubernetes application development certificate. Because for people who don't know that certificate, it's basically how much Kubectl can you do off top of your head? That is basically what that certificate is about, because Kubectl is an insanely huge and powerful tool.

On the one hand, you should do that. If you have a big team, take a few people, learn all that you can about Kubernetes, write some wrappers so that people don't have to do Kubectl or something, something by hand. Just make very easy functions, like Kubectl, let’s say you know a name of your wrapper, context and the name and then that's going to switch you to a namespace let's say, where some version of your app is running, so that thing.

Now about the tooling. Once you have your development environment set up and you're going to need someone who has some experience with Kubernetes to set that up in the first place, but once that is set up, if you have the right tooling, you don't really have to know everything that Kubernetes does. You should have at least a conceptual overview. I can tell you for sure, that there's hundreds of developers out there writing code that is going to be deployed to Kubernetes, writing codes that whenever they make a change to their code, it goes to a Kubernetes development cluster and they don't have the first – well, I’m not going to say the first clue, but they are not experienced Kubernetes users. That's because of all the tooling that you can put around.

[0:41:10.5] CC: Yeah, that makes sense.

[0:41:12.2] EK: Yeah. You can abstract a bunch of stuff with basically good sense, so that you know the common operations that need to be done for your team and then you just abstract them away, so that people don't have to become Kubectl experts. On the other side, you can also abstract a bunch of stuff away with tooling. Basically, as long as your developer has the basic grasp of containers and basics of Kubernetes, that stuff, they don't need to know how to operate it, with any depth.

[0:41:44.0] MG: Hey Ellen, in the beginning you said that it's all about this feedback loop and iterating fast. Part of a feedback loop for a developer is unit testing, integration testing, or all sorts of testing. How do you see that changing, or benefiting from tools like Tilt, especially when it comes to integration testing? Unit tests usually locally, but the integration testing.

[0:42:05.8] EK: One thing that people can do when they're using Tilt is once you have Tilt running, you basically have all of your application running. You can just set up one-off tasks with Tilt. You could basically set up a script that there's a bunch of stuff, which would basically be what your test does. If it returns zero, it succeeded. If it doesn’t, it failed. You can set something up like that. It's not something that we have right now in a prepackaged farm that you can use right away.

You would basically just say, “Hey Tilt, run this thing for me,” and then you would see if it worked or not. I have to make a plug to the competition right now. Garden has more of that part of it, that part of things set up. They have tests as a separate primitive right next to building and deploying, which is what you usually see. They also have testing. It does basically what I just said about Tilt, but they have a special little framework around it.

With Garden, you would say, “Oh, here's a test. Here's how you run the test. Here's what the test depends on, etc.” Then it runs it and it tells you if it failed or not. With Tilt, it would be a more generic approach where you would just say, “Hey Tilt, run this and tell me if it fails or not,” but without the little wrapping around it that's specific for testing.

When it comes to how things work, like when you're trying to push the production, let's say you did a bunch of stuff locally, you're happy with it, now it's time to push the production. Then there's all that headache with CI and waiting for tests to run and flaky tests and all of that, that I don't know. That is a big open question that everyone's unhappy about and no one really knows which way to run to.

[0:43:57.5] DC: That’s awesome. Where do you see this space going in the future? I mean, as you look at the tooling that’s out there, maybe not specifically to the Tilt particular service or capability, but where do you see some other people exploring that space? We were talking about AWS dropping and CDK and there are different people trying to solve the YAML problem, but more from the developer user experience tooling way, where do you see that space going?

[0:44:23.9] EK: For me, it's all about higher level abstractions and well-defined best practices. Right now, everyone is fumbling around in the dark not knowing what to do, trying to figure out what works and what doesn't. The main thing that I see changing is that given enough time, best practices are going to emerge and it's going to be clear for everyone. If you're doing this thing, you should use this workflow. If you're doing that thing, you should use that workflow. Basically, what happened when IDEs emerged and became a thing, that is the best practice aside.

[0:44:57.1] DC: That's a great example.

[0:44:58.4] EK: Yeah. What I see in terms of things being offered for me tomorrow of — in terms of prepackaged higher level abstractions. I don't think developers should, everyone know how to deal with Kubernetes at a deeper level, the same way as I don't know how to build the Linux kernel even though I use Linux every day. I think things should be wrapped up in a way that developers can focus on what matters to them, which is right now basically writing code.

Developers should be able to get to the office in the morning, open up their computer, start writing code, or doing whatever else they want to do and not worry about Kubernetes, not worry about lambda, not worry about how is this getting built and how is this getting deployed and how is this getting tested, what's the underlying mechanism. I'd love for higher-level patterns of those to emerge and be very easy to use for everyone.

[0:45:53.3] CC: Yeah, it's going to be very interesting. I think best practices is such an interesting thing to think about, because somebody could sit down and write, “Oh, these are the best practices we should be following in the space.” I think, my opinion it's really going to come out of what worked historically when we have enough data to look at over the years.

I think it's going to be as far as tooling goes, like a survival of the fittest. Whatever tool has been used the most, that's what's going to be the best practice way to do things. Yeah, we know today there are so many tools, but I think probably we're going to get to a point where we know what to use for what in the future. With that, we have to wrap-up, because we are at the top of the hour. It was so great to have Ellen, or L, how they I think prefers to be called and to have you on the show, Elle. Thank you so much. I mean, L. See, I can't even follow my own.

You're very active on Twitter. We're going to have all the information for how to reach you on the show notes. We're going to have a transcript. As always people, subscribe, follow us on Twitter, so you can be up to date with what we are doing and suggest episodes too on our github repo. With that, thank you everybody. Thank you L.

[0:47:23.1] DC: Thank you, everybody.

[0:47:23.3] CC: Thank you, Michael and –

[0:47:24.3] MG: Thank you.

[0:47:24.8] CC: - thank you, Duffie.

[0:47:26.2] EK: Thank you. It was great.

[0:47:26.8] MG: Until next time.

[0:47:27.0] CC: Until next week.

[0:47:27.7] MG: Bye-bye.

[0:47:28.5] EK: Bye.

[0:47:28.6] CC: It really was. 

[END OF EPISODE]

[0:47:31.0] ANNOUNCER: Thank you for listening to the Podlets Cloud Native Podcast. Find us on Twitter @thepodlets and on thepodlets.io website. That is ThePodlets, altogether, where you will find transcripts and show notes. We’ll be back next week. Stay tuned by subscribing.

[END]