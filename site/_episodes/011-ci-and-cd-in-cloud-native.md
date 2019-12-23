---
episode_id: 011-ci-and-cd-in-cloud-native
episode_number: 11 
title: CI and CD in Cloud Native 
description: CI and CD are two terms that usually get spoken about together but are actually two different things entirely if you think about them. We begin by getting into exactly what these differences are, highlighting the regulatory aspects of CD in contrast to the future-focussed nature of CI. We then move on to a deep exploration of their benefits in optimizing processes in cloud native space through automation and surveillance from development to production environments.  
notes: A warm welcome to [John Harris](https://twitter.com/johnharris85) who will be joining us for his first time on the show today to discuss our exciting topic, CI and CD in cloud native! CI and CD are two terms that usually get spoken about together but are actually two different things entirely if you think about them. We begin by getting into exactly what these differences are, highlighting the regulatory aspects of CD in contrast to the future-focussed nature of CI. We then move on to a deep exploration of their benefits in optimizing processes in cloud native space through automation and surveillance from development to production environments. You’ll hear about the benefits of automatic building in container orchestration, the value of make files and local test commands, and the evolution of CI from its ‘rubber chicken’ days with Martin Fowler and Jez Humble. We take a deep dive into the many ways that containers differ from regular binary as far as deployment methods, build speed, automation, run targets, realtime reflections of changes, and regulation. Moreover, we talk to the challenges of transitioning between testing and production environments, getting past human error through automation, and using sealed secrets to manage clusters. We also discuss the benefits and drawbacks of different CI tools such as Kubebuilder, Argo, Jenkins X, and Tekton. Our conversation gets wrapped up by looking at some of the exciting developments on the horizon of CI and CD, so make sure to tune in!
hosts: 
    - name: Bryan Liles 
      url: https://twitter.com/bryanl
    - name: Nicholas Lane
      url: https://twitter.com/apinick
points:
    - The difference between CI and CD.
    - Understanding the meaning of CD, ‘continuous delivery’ and ‘continuous deployment’.
    - Building an artifact that can be deployed in the future is termed ‘continuous integration’.
    - The benefits of continuous integration for container orchestration, automatic building.
    - What to do before starting a project regarding make files and local test commands.
    - Kubebuilder is a tool that scaffolds out the creation of controllers and web hooks.
    - Where CI has got to as far as location since its ‘rubber chicken’ co-located days.
    - The prescience of Martin Fowler and Jez Humble regarding continuous integration.
    - The value of running tests in a CI process for quality maintenance purposes.
    - What makes containers great as far as architecture, output, deployment, and speed.
    - The benefits of CD regarding deployment automation, reflection, and regulation.
    - Transitioning between testing and production environments using targets, clusters, pipelines.
    - Getting past human error through automation via continuous deployment.
    - What containers mean for the traditional idea of environments.
    - How labeling factors into the simplicity of transitioning from development to production.
    - What GitOps means for keeping track of changes in environments using tags.
    - How sealed secrets stop the need to change an app when managing clusters.
    - The tools around CD and what a good CD system should look like.
    - Using Argo and Spinnaker to take better advantage of hardware.
    - How JenkinsX helps mediate YAML when installing into clusters.
    - Why the customizable nature of CI tools can be seen as negative.
    - The benefits of using cloud native-built tools like Tekton.
    - Perspectives on what is missing in the cloud native space.
    - A definition of blue-green deployments and how they operate in service meshes.
    - The business abstraction elements of CI tools that are lacking.
    - Testing and data storage-related aspects of CI/CD that need to be developed.
links:
    - name: John Harris
      url: https://www.linkedin.com/in/johnharris85/
    - name: Jenkins 
      url: https://jenkins.io/
    - name: CircleCI 
      url: https://circleci.com/
    - name: Drone 
      url: https://drone.io/
    - name: Travis     
      url: https://travis-ci.org/
    - name: GitLab 
      url: https://about.gitlab.com/
    - name: Docker 
      url: https://www.docker.com/
    - name: Go 
      url: https://golang.org/
    - name: Rust 
      url: https://www.rust-lang.org/
    - name: Kubebuilder
      url:  https://github.com/kubernetes-sigs/kubebuilder
    - name: Martin Fowler 
      url: https://martinfowler.com/
    - name: Jez Humble 
      url: https://continuousdelivery.com/about/
    - name: David Farley 
      url: https://dfarley.com/index.html
    - name: AMD 
      url: https://www.amd.com/en
    - name: Intel 
      url: https://www.intel.com/content/www/us/en/homepage.html
    - name: Windows
      url:  https://www.microsoft.com/en-za/windows
    - name: Linux   
      url: https://www.linux.org/
    - name: Intel 386 
      url: http://www.computinghistory.org.uk/det/6192/Introduction-of-Intel-386/
    - name: 386SX 
      url: https://www.computerworld.com/article/2475341/flashback--remembering-the-386sx.html
    - name: 386DX 
      url: https://en.wikipedia.org/wiki/Intel_80386
    - name: Pentium 
      url: https://www.intel.com/content/www/us/en/products/processors/pentium.html
    - name: AMD64 
      url: https://www.webopedia.com/TERM/A/AMD64.html
    - name: ARM
      url:  https://en.wikipedia.org/wiki/ARM_architecture
    - name: Tomcat 
      url: http://tomcat.apache.org/
    - name: Netflix 
      url: https://www.netflix.com/za/
    - name: GitOps
      url:  https://www.weave.works/technologies/gitops/
    - name: Weave 
      url: https://www.weave.works/
    - name: Argo
      url:  https://www.intuit.com/blog/technology/introducing-argo-flux/
    - name: Spinnaker 
      url: https://www.spinnaker.io/
    - name: Google X 
      url: https://x.company/
    - name: Jenkins X 
      url: https://jenkins.io/projects/jenkins-x/
    - name: YAML 
      url: https://yaml.org/
    - name: Tekton 
      url: https://github.com/tekton
    - name: Councourse CI
      url:  https://concourse-ci.org/
video: https://www.youtube.com/embed/zjgTs_aCdfI
related: 
- 006-a-conversation-with-joe-beda
- 007-kubernetes-as-per-kelsey-hightower
- 005-cloud-native-infrastructure
---
EPISODE 11

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically-minded decision maker, this podcast is for you.

[EPISODE]

[00:00:41] BL: Back to the Kubelets Podcast, episode 11. I’m Bryan Liles, and today we have Nicholas Lane.

[00:00:50] NL: Hello!

[00:00:51] BL: And joining us for the first time, we have John Harris.

[00:00:55] JH: Hey everyone. How is it going?

[00:00:56] BL: All right! So today we’re going to talk about CI and CD in cloud native. I want to start this off with this whole term CI and CD. We talk about them together, that are two different things almost entirely if you think about them. But CI stands for continuous integration, and then we have CD. What does CD stand for? 

[00:01:19] NL: Compact disk.

[00:01:20] BL: Right. True, and actually I’ve used that term before. I actually do agree. But what else does CD stand for?

[00:01:28] NL: It’s continuous deployment right?

[00:01:30] BL: Yeah, and?

[00:01:31] JH: Continuous delivery. 

[00:01:32] NL: Oh! I forgot about that one.

[00:01:35] BL: Yeah, that’s the interesting thing, is that as we talk about tech and we give things acronyms, CD is just a great one. Change in directories, compact disk, continuous delivery and continuous deployment. Here’s the bonus question, does anyone here know the difference between continuous delivery and continuous deployment? 

[00:01:58] NL: Now that’s interesting.

[00:01:59] JH: I would go ahead and say continuous delivery is the ability to move changes through the pipeline, but you still have the ability to do human intervention at any stage, and usually deployments production and continuous delivery would be a business decision, whereas continuous deployment is no gating and everything just go straight to product. 

[00:02:18] BL: Oh, John! Gold start for you, because that is one of the common ones. I just like to bring that up because we always talk about CI and CD as they are just one thing, but they’re actually way bigger topics and we’ve already introduced three things here. Let’s start at the beginning and let’s talk about continuous integration, a.k.a CI. 

I’ll start off. We have CI, and what is the goal of CI? I think that we always get boggled down with tech terms and all these technology and all these packages from all these companies. But I’d like to boil CI down to one simple thing. The process of continuous integration is to build an artifact that can be deployed somewhere at some future date at some future time by some future person, process. Everything else is a detail of the system you choose to use. Whether you use Jenkins, or CircleCI, or Drone, or you built your own thing, or you’re using Travis, or any of the other online CI tools. At the end of the day, you’re building either – If you’re doing web development. Maybe you’re building out Docker files, because we’re in cloud native. I mean docker images, because we’re in cloud native. But if you’re not, maybe you’re just building JARs, WARs, or EARs, or a ZIP file, or a binary, or something. I’d just like to start off, start this off with there. Any more thoughts on continuous integration?

[00:03:48] NL: Yeah. I think the only times that I’ve ever used something that’s like continuous integration is when I’ve been doing like more container orchestration, like development, things on top of like things like Kubernetes, for instance. The thing I really like about it is like the concept of being able to like, from my computer, save and do an automatic save and push to a local repo and have all of the pieces get built for me automatically somewhere else, and I just love that so much because it saves so much brain thinky juice to run every command to make the binary you need.

[00:04:28] BL: So did you actually create those scripts yourself?

[00:04:30] NL: Some of them. When I’ve used things like GitLab, I use the pipeline that exists there and just fiddled around with like a little bit of code, like some bash there, but like not too much because GitLab has a pretty robust pipeline. Travis — I don’t think I needed to actually. Travis had a pretty good just go make Docker build, scripts already templated out for you.

[00:04:53] JH: Yeah. I’d like to tell people whenever you start any project, whether it’s big or small, especially if it’s on – Not on Windows. I’ll tell you something different if it’s on Windows. But if you’re developing on a Mac or developing on Linux, the first thing you should do in your project is create a make file or your programming language equivalent of a make file, and then in that make file what you should do is write a command that will build your software that runs its tests locally, and also builds – whatever the process is. 

I mean, if you’re running in Go, you do a Go build. If you’re using Rust, build with Rust, or C++, or whatever before you even write any code. The reason why is because the hardest part is making your code build, and if you leave that to the end, you’re actually making it harder on yourself. If your code build works from the beginning, all you have to do is change it to fit what you’re doing rather than thinking about it when it’s crunch time. 

[00:05:57] NL: I actually ran into that exact scenario recently, because I’ve been building some tooling around some Kubernetes stuff, and the first one I did, I built it all manually by hand. Then at the end I was like – I gave it to the person who wanted it and they’re like, “So, where’s the make file?” I’m like, “Where’s the what?” So I had go in and like fill in the make file, and that was a huge pain in the butt. 

Then recently the other thing I’ve been using is Kubebuilder. John, you and I have been talking about Kubebuilder quite a bit, but using Kubebuilder, and one of the things it does for you is it scaffolds out and a make file for you, and that was like going from me doing it by myself to having it already exist for you or just having it at the beginning was so much better. I totally agree with you, Brian.

[00:06:42] BL: So quick point of order here. For those of us who don’t know what Kubebuilder is. What is Kubebuilder?

[00:06:48] NL: Kubebuilder is a tool that was created by members of the Kubernetes Community to scaffold out the creation of controllers and web hooks. What a controller is in Kubernetes is a piece of software that waits, sort of watches a specific object or many specific objects and reconciles them. If they noticed that something has changed and you want to make an action based on that change, the controller does that for you.

[00:07:17] JH: Okay. So it actually makes the action of working with CRDs and Kubernetes much easier than creating it all yourself. 

[00:07:26] NL: Correct. Yeah. So, for instance, the one that I made for myself was a tool that watched, updated and watched a specific CRD, but it wasn’t necessarily a controller. It was just like flagging on whether or not a change occurred, and I used the dynamic client, and that was a huge headache on of itself. 

Kubebuilder has like the ability to watch not just CRDs, but any object in Kubernetes and then reconcile them based on changes. 

[00:07:53] NL: It’s pretty great.

[00:07:54] BL: All right. So back to CI. John, do you have any opinions on CI or anecdotes or anything like that? 

[00:07:59] JH: Yeah. I think one of the interesting things about the original kind of philosophy of CI outside of tooling was like trunk-based development that every develop changes get integrated into trunk as soon as possible. You don’t get into integration hell and rebasing. I guess it’s kind of interesting when you apply that to a cloud native landscape where like when that stuff came out with like Martin Fowler or Jez Humble probably 10, 15 years ago almost now, a lot of dev teams were co-located. You could do CI. I think there was a rubber chicken method where you didn’t use a tool. It was just whoever had the chicken that’s responsible for the build. Just to pull everyone else’s changes. 

But now it seems like everything is branch-based. When you look at a project like Kubernetes, there’s a huge number of contributors all geographically displaced, different time zones, lots of different branches and features going on at the same time. It’s interesting how these original principles of continuous integration from the beginning now apply to these huge projects in the cloud native landscape. 

[00:08:56] BL: Yeah, that’s actually a great point of how prescient Martin Fowler has been for many, many years, and even with Jez Humble being able to see these problems 10, 15 years ago and be able to describe them. I believe Jez Humble wrote the CD book, the continuous delivery book.

[00:09:15] JH: Yeah, with David Farley, I think. 

[00:09:18] NL: Yeah. Yeah, he did. So, John, you brought up some good things about CI. I try to simplify everything. I think the mark of someone who really knows what they’re talking about is being able to explain everything in the simplest words possible, and then you can work backwards when people understand. 

I started off by saying that CI produces an artifact. I didn’t talk about branches or anything like that, or even the integration piece. But now let’s go into that a little bit. There are a lot of misconceptions about CI in general, but one of the things that we talk about is that you have to run test. No, you don’t have to run test, but should you? Yes, 100% of the time. Your CI process, your integration process should actually build your software and run the test, because running the test on this dedicated service or hardware wherever it is ensures that the quality of your software is there at least as much as your developers have insured the quality in the test. 

It’s very important those run, and a lot of bugs of course can be spotted by running a CI. I mean, we are all sorts of developers here, and I tell you what, sometimes I forget to run the test locally and CI catches me before a commit makes it into master and it has a huge typo or a whole bunch of print lines in there.

Moving on here, thinking about CI and cloud native. Whenever you’re creating a cloud native app, have you ever thought about the differences between let’s say creating just a regular binary that maybe runs on a server, but not in a container on somebody’s cloud native stack, i.e. Kubernetes? Have you ever thought about the differences of things to think about? 

[00:11:04] BL: Yeah. So part of it is – I would imagine or I believe it’s like things like resource, like what resources you need or what architecture you’re deploying into. You need the binary to make like run in this – With containerization, it’s easy because you’re like, “I know that the container is going to be this architecture,” but you can’t necessarily guarantee that outside of a containerized world. I mean, I suppose you can being like with the right tooling setup you can be like, “I only want to run on this.”  But that isn’t necessarily guaranteed, because any computer that runs on could be just whatever architecture that happens to land on, right? 

Also, something to – I think of is like how do you start processes on disparate computers in a controlled fashion? Something like, again, with containers, you can trust that the container runtime will run it for you. But without that, it seems like a much harder task.

[00:12:01] NL: Yeah, I would agree. Then I said that containers in general just help us out, because most of our workloads go on some AMD or Intel 64 bit and it’s Linux. We know what our output is going to be. So it’s not like in the old days where you had to actually figure out what your run target was. I mean, that’s even on Intel stacks. I mean, I’m updating myself here where you had like – When the 386 was out and then you had the 386SX and the 386DX, there were different things there, and you actually compile your code different. Then when the 46 came out and then when we had introduction of Pentium chips, things were different. 

But now we can pretty much all target AMD64, and in some cases, I mean, there are some chip things like the bigger encryption things that are in the newer chips. But for the most part, we know what our deployed target is going to be. 

But the cool thing is also that we don’t have to have Intel or AMD64. It could be ARM32 or ARM64, and with the addition to a lot of the work that has been going on in Windows land lately, we can have Windows images. I don’t know so many people were doing that yet. I’m not out and part of the field, but I like that the opportunity is there.

[00:13:25] JH: Oh! I think one of the interesting things is the deployment method as well. Now with containers, everything is kind of an immutable rip and replace. Like if we develop an application, we know that the old container is going to stop when I deploy a new one. I think Netflix were doing a little bit of this before containers and some other folks with like baking AMIs and using that immutable method. But I think before that it was if we had a WAR file, we had to throw it back into Tomcat, let Tomcat pick it up or whatever. Everything was a little bit more flaky in terms of deployment. We had to do a lot of checks around deployment rather than just bring something out, bring something back in blue/green, whatever. 

[00:13:59] BL: Well, I actually like that you brought that up, because that’s actually one of the greatest parts of this whole cloud native thing, is that when we’re using containers and we’re deploying with containers, we know what our file system is going to look like, because we created it. There would not be some rogue file or another configuration there that will trip up our deployment, because at build time, we’ve created the environment. It’s much better than that facility that Netflix was doing with baking AMIs. 

In a previous life, I actually ran the facility for baking AMIs at a large company where we had thousands of developers on more than a thousand dev teams, and we had a lot of spyware. Whenever you had to build an image, it was fine in one account, but if you had let’s say a thousand accounts with the way that AWS works and encrypted images, you actually had to copy all the images to all the accounts. It couldn’t actually boot it from your account. That process would literally take all night to get it done across all of our accounts. 

If you made a mistake, guess what? You get to do it again. So I am glad that we actually have this thing called a container and all these things based on CRI, the container runtime, that we are able to quickly build containers. 

I don’t want to just limit this conversation to continuous integration. Let’s get into the other parts too with deployment and delivery. What is so novel about CD and the cloud native world?
 
[00:15:35] NL: I think to me it’s the ability to have your code or your artifact or whatever it is, whatever you’re working on. When you make a change, you can see the change reflected in reality, whatever your reality looks like, without your intervention. I mean, you might have had to set up all the pipelines and all that jargon, but when you press save in VS code and it creates a branch and runs all your tests and then deploys it for you or delivers it for you into what you’d define as reality, that’s just so nice, because it really kind of sucks having to do the like, “Okay, I’ve got a new deployment. Destroy the old deployment. Put in the new one or like rev the new image tag or whatever in the deployment you’re doing.” All these manual steps, again, thinky-brain juice, it takes pieces of your attention away, and having these pieces like added for you is just so nice.

[00:16:30] BL: Yeah, what do you think, John? 

[00:16:32] JH: Yeah. I think just something in the state of DevOps we’ve bought one of the best predictors for a company’s success is like cycle time of feature from ideation to production. I think like the faster we can get that cycle – It kind of gets me interested. How long does an application take to build? If it takes two hours, how good are you at getting features out there quickly? Maybe one of the drivers with microservices, smaller pieces independently deployed, we can get features out to production quicker, because I think the name of the game is just about enabling developers to put the decision in the hands of the business to decide when the customer should see that feature. I think the tighter we can make that cycle, the better for everyone.

[00:17:14] BL: Oh, no! I agree. I love and hate web services, but what I do like is the idea of making these abstractions smaller, and if the abstractions are smaller, it’s less code. A lot of the languages we use now are faster compiling, let’s say, a large C++ project. That could take literally two hours to compile. But now when we have languages like Go, and Rust is not as fast, but it’s not slow as well. Then we have all of our interpret languages, whether it’d be Python, or JavaScript, or TypeScript, where we can actually go from an idea, run the test in a few minutes and build this image that we can actually run and see it almost in real-time. 

Now with the complexity of the tools, I mean, the features that are built in the tools, we can now easily manage multiple deployment environments, because think about before, you would have a dev environment, and that would be the Wild West. That would be literally where it would be awful. You might have to rebuild it every couple of months. Then you would have staging, and then maybe you would have some kind of pre-prod environment just as like your final smoke test, and then you would have your production. 

Maintaining all the software on all those was extremely hard. But now with the advent of containers, now it’s as simple as identifying the images you want and basically running that image in that environment. I like where we’ve ended up. But with all power comes new problems, and just because we can deploy quicker means we just run into a lot of different problems we didn’t run into before. 

The first one that I’ll bring up is the complexity. Auto conversion between environments, so moving code between test staging and production. How do we do that? Any ideas before I throw some out there?  

[00:19:11] NL: I guess you would have different, or maybe the same pipeline but different targets for like if say you’re using something like Kubernetes. You could have one part of your pipeline deploy initially to this Kubernetes context, which points to like one cluster. It’s building up clusters by environment type and then deploying into those, running your tests, see if it runs properly and then switch over to the next context to apply that image tag and that information and then just go down the chain until you go to production. 

[00:19:44] BL: Well, that’s interesting. One thing I’d like to throw out there, and I’m not advocating any particular product. But the idea of having pipelines for continuous integration and your CD process is great, where you can now have gates and you can basically automate the whole thing. Code goes into CI and we built an artifact, and a message can go out automatically to an approver or not, and that message could say, “Hey! This code is going to be integrated into our trunk or our master branch.” They can either do it themselves manually as a lot of people do or they can actually maybe click on a link or check a checkbox and this gets integrated in. 

Then what automatically could happen at this point is, and I’ve seen a lot of companies doing this, is now we take that software and we spin up a new whole environment and we just install that software. For that one particular feature that you worked on, you can actually get an automatic environment for that. 

Then what we can do is we can take that environment itself and we can now merge this maybe into a staging branch or tag it with a staging label, and that automatically gets moved to staging. Depending on how complicated you are, how advanced you are, now you can actually have it go out to your product people or people who make decisions, maybe your executives, and they can view the software in whatever context it happens to be in. Then they can say, “Okay.”

Now that’s when we’re talking about now we can hit okay and the software just keeps on moving to the pipeline and it gets into production. The whole goal here, and this is actually where your goal should be just in general whenever you’re thinking about continuous delivery or continuous deployment is that any human intervention on the actual moving of code is a liability and is going to break, and it’s going to break because on Friday afternoon at 5:25 PM, someone’s thinking about the weekend and they’re not thinking about code, and they’re going to break your build. Our goal is to build these delivery systems that are Friday afternoon proof. We can push code anytime. It doesn’t matter. We trust our process.  

[00:22:03] JH: I think it’s a great point about environments. I think back in the day, an environment used to be a set of machines, and then test used to be – staging was where there were kind of more stable versions of APIs and folks were more coordinated pushing things into them. What really is an environment? Like you said, when we push micro services or whatever service, we can spin up an entire Kubernetes cluster just for that service. We can set it up. We can run whatever tests we want. We could tear it down. 

With the advent of Elastic compute, and now containers, they really enabled this world where like the traditional idea of an environment and what constitutes an environment is starting to get a bit kind of sloppy and blend into each other. 

[00:22:42] BL: I like it though. I think it’s progress. 

[00:22:45] NL: I totally agree. The one that scares me but I also find like really interesting, is the idea of having all of your environments in one set of machines. So clusters. Having a multi-tenanted set of machines for like dev staging and production, they’re all running in the same place and they’re all just separated by like what configuration of like connectivity from different networking and things like that set up. 

When a user hits your website, bryanliles.com, they should go to the production images, but those are binaries, and those binaries should be running in the same space essentially as the development ones. It’s scary, but it’s also like allows for like some really fast testing and integration. I find it to be very fascinating.

[00:23:33] BL: I mean that’s where we want to be. I find more often than not that people have separate clusters for dev and staging and production. But using the Kubernetes API, you don’t have to do that, because what we can do is we can force deployment or workload to a set of machines based on their label. That’s actually one of the very strong positives for Kubernetes. Forget all the complexity. 

One of the things that makes it easy is to say that I want this particular deployment to only live on my development machines. Well, which development machine? I don’t care. What if we increase our development pool size? We just re-label nodes. It doesn’t matter. Now we can just control that. When it comes down to controlling cost and complexity, this is actually one idea that Kubernetes is leading and just making it easier to actually use more of your hardware. 

[00:24:31] NL: Yeah. Absolutely. That’s so great because if you think about it from a CI/CD standpoint, at that point all you have to do is just change the label to where you’re applying this piece of code. So you’re like, “Node selector, label equals dev. Okay, now it’s staging. Okay, now it’s prod.”  

[00:24:47] BL: So this brings me into the next part of what I want to talk about or introduce to you all today. We’re on a journey as you probably can tell. Now whenever we have our CI process and we’re building and we’re deploying, where do we store our configurations? 

[00:25:04] NL: [inaudible 00:25:04].

[00:25:06] BL: Ever thought about that?

[00:25:08] NL: Okay. I mean, in a Kubernetes perspective, you might be using something like etcd to sort of – But like everything else, what if you’re using Travis? [inaudible 00:25:16] store everything. Everything should be versioned, right? Everything should be –

[00:25:20] BL: Yeah, 100%.

[00:25:24] NL: I would store everything these as much as possible. Now, do I do that all the time? God, no! Absolutely not. I’m a human being after all.

[00:25:32] BL: I mean, that’s what I actually want to bring up, is this concept of GitOps. GitOps was a coined term by my friend, Alexis, who works at Weave. I think Weave created this. Really what it’s about is instead of having – basically, Kubernetes is declarative, and our configurations can be declarative too, because what we can do is make sure is we can have tech space configurations, and for one reason it’s because tech space means it can be versioned. It can be diffs. We take those text versions and we put them in our same repository we put our code in. How do we know what’s in production at any given time or any given time in the past? We just look at the tags of what we did. 

We had a push at 5:15 on August 13th. Of course, this is 5:15, you could see time, because any other time doesn’t exist in the computer land. So what we could do is we could just basically tag that particular version as like 2019-08-13. If I said 5-17-55, and we call 01 just so we could have 100 deploys in a day. If we started doing that, now not only can we control what we have, but we can also know what was on in any given environment at any given time. 

Because with Git and with Mercurial and any other of these – Well, only the popular ones, with Git and Mercurial, you can definitely do this. Any given commit can have multiple tags. You could actually have a tag that hit dev and then a tag that, let’s say, hits staging, and then a tag that hit production, the exact same code but three different tags. So you know at any given time what happened.  

[00:27:18] JH: Yeah, the config thing is so important. I think that was another Jez Humble quote where it was like, “Give me three hours access to your code and I’ll break it. But give me 5 minutes with your configurations and I’ll break it.”

Almost like every big bug is, right, someone was accidentally pointing the prod server to the staging database like, “Oops! Their API was pointing to the wrong port, and everything came down,” or we changed the wrong versions or whatever.

I think that’s one of the intersections of developers and operations folks. We kind of talked about like Dev Ops and things like that. I really love the idea of everything being kept in Git and using GitOps, but then we’ve got things like secrets and configuration that shouldn’t be seen or being able to be edited by developers, but need to be for ops folks. But we still want to keep the single point of truth. Things like sealed secrets have really enabled us to move along in this area where we can keep everything in text-based version. 

[00:28:08] BL: All right. Quick point of order here. Sealed secrets is a controller/CRD created by Bitnami. What it allows you do is, John – 

[00:28:23] JH: It allows you – It creates a CRD, which is sealed secret, which is a special resource type in your cluster and also creates a key, which is only available to that operator running in your cluster. You can submit a sealed secret in plain text or you can submit a secret in plain text and it will throw it back out as an encrypted secret with that key and then you can check that into version control. Then when you go to deploy your software, you can deploy that encrypted secret into the cluster. The operator will pick it up, decrypt it using only the key that it has access to and then put it back in the cluster as a regular secret. Your application just interacts with regular Kubernetes secrets. You don’t need to change your app. They deal with all the encryption outside of the user intervention.  

[00:29:03] BL: I think the most important part of what you said is that this allows us to have no excuses about what we can store in our repositories for our configuration, because someone is going to make the argument, “No, we can’t store secrets, because someone’s going to be able to see them.” Well, guess what? We never even stored an unencrypted secret in our repository. They’re all encrypted, and it’s still secrets. It’s [inaudible 00:29:25]. I don’t know if anyone’s cracked yet. I’m sure maybe a state level actor has thought of it. But for us regular people, even our companies, like even at VMware, or even at Google, they have not done it yet.  So it’s still pretty safe.

Thinking even further now, and really what I’m trying to paint the picture of is not just how do you do CD, but really what CD could look like and how it can actually make you happy rather than sad. 

The next item I wanted to think about was tools around CD and creating tools and what does a good continuous delivery system look like. I kind of hinted about this earlier whenever I was talking about pipelines. The ability to take advantage of your hardware, so we’re deploying to let’s say 100 servers. We’re pulling 5 or 6 services to 100 node cluster. We can do those all at once, and what we can do is you want to have a system that can actually run like this. I could think of a couple. 

From Intuit, there is Argo, and they have Argo CD. There is the tool created by Google and maybe Netflix. I want to have to look that one up. It’s funny, because they quoted –

[00:30:40] JH: Spinnaker?

[00:30:42] BL: Spinnaker. They quoted me in their book, and I don’t remember their name. I’m sorry anyone from Spinnaker product listening. Once again, not advocating any products, but they have the concept of doing pipelines. Then you also have other things for your projects, like if you’re using open source, Drone. Another X Google – I think it was X-Googler that made this. Basically, they have ways you can do more than one thing at a time. 

The most important piece about this is not only can you do more than one thing at a time, is that you have a programmatic check that it’ll make sure that you can verify that whatever you did was successful. We deployed to staging or we deployed to our smoke test servers for our smoke test, and that requires our testing people and an executive signoff. They can actually just wait until they get their signoff or maybe if it goes over a day or so, they can actually – It just fails, and now the build is done. But that part is pretty neat. Any other topics over here before I start throwing out more?

[00:31:45] NL: I think I just have thoughts on some of the tools that we’ve used. Everyone  Jenkins. Jenkins can do anything that you want it to do, but you really have to tighten the screws on it. It is super powerful. It’s kind of like Bash, like Bash scripting. It’s super powerful, but you have to know precisely what you’re doing, otherwise it can really hurt you. 

Actually, I have used Spinnaker in the past, and I’ve really liked it. It has a good UI, very good pipelines. Easy blue/green or canary deployment mechanism, I thought that was great. I’ve looked at Drone, believe it or not, but Drone is actually pretty cool. Check out Drone. I really liked it. 

[00:32:25] BL: Well, since we’re throwing out products, Jenkins, does have JenkinsX. I have not given it the full rundown yet. But what I do like about it, and I think everyone should pay attention to this if you’re doing a product in this space, is that when you install JenkinsX, you install it locally to your machine. You basically get this binary called JX, and you then tell JX to install it into your cluster. Instead of just doing kubectl apply-f a whole bunch of YAML, it actually ask you questions and it sets up GitHub repositories or wherever you need these repositories. It sets up [inaudible 00:33:01] spaces for you. 

There’s no just [inaudible 00:33:05] kubectl apply-f HTTPS: I just owned your system, because that’s actually a problem. Then it solves the YAML sprawl, because YAML and Kubernetes is something that is complained about a lot, but it’s how it’s configured. But it’s also just a detail what we’re supposed to be doing, and we actually work with Joe Beda and I could talk about this all the time, is that the YAML is the implementation, but it’s not the idea. The idea is that we build tools on top of that that create YAML so users have to see less YAML. I think that’s a problem with Jenkins, is that it’s so powerful and they’re like, “Well, we want powerful people or smart people to be able to do smart things. So here you go.” 

The problem with that is that where do I start? It’s a little daunting. So I do think that they definitely came with the much stronger game with this JX command. Just as a little sidebar, we do it as well with our Valero project, and I think that just speaks, should be like the bar for anything. If you’re installing something into a cluster, you should come up with a command line tool that helps you manage the lifecycle of whatever you’re installing to the operator, YAML, whatever. 

[00:34:18] JH: I think what’s interesting about the options, this is definitely one area where there’s so much nuance. Any time you’re in developer tooling, everyone wants to do something slightly differently. All of these tools are so tweak-able that they become so general. I think it’s probably one of the criticisms that could be leveraged against Jenkins is that you can do everything, and that’s actually a negative as well as a positive. Sometimes it’s too overwhelming. There are too many ways of doing things. I’m a fan of some of the more kind opinionated tools in that space. 

[00:34:45] BL: Yeah. I like opinionated tools as well, but the problem that we’re having in this cloud native space is that, yeah, Kubernetes is five-years-old now. We are just getting to the point where we actually understand what a good decision is, because there was a lot of guesses before and we’ve done a lot of things, and some of these have been good ideas, but in some cases they have not been great ideas. 

Even I ran the project case on it. Great idea on paper, but implementation, it required people to know too many things. We’d learned a lot of lessons from that. That’s what I think we’re going to find out in this space is that we’re going to learn little lessons. I say this project from my last project that I was going to bring up is something that I think has learned some of the lessons. 

Google sponsors a project called Tekton, and if you go to – It’s like I believe, and they have some continuous delivery stuff in there and they implement pipelines. But the neat part is, and this is actually the best part, it’s actually a cloud native built service. So every step of your delivery process, from creating images, to actually putting them on clusters, is backed by a Docker image or a container, and I think that part is pretty neat. So now you can define your steps. 

What is your step? Well, you can use one of their pre-baked, run this command, or if you have something special, like the example before I was giving out where you would say that you need an approval, maybe it’s a Slack approval. You send something with Slack and it has a checkbox, check yes if you like me. What we can do now is we can actually control that and it’s easy to write something a little Docker image that can actually make that call and then get the request and then it can move it on. 

If you’re looking at more of a toolkit full of good ideas, I do think that Tekton has definitely has some lots of industry. People are looking at it and it’s probably the best example of getting it right in the cloud native way. Because a lot of the products we have now are not cloud native. We’re talking about Jenkins. We’re talking about Spinnaker and we talk about Drone and Travis, which is totally a SaaS product. They’re not cloud native. 

Actually, the neat part about Tekton is that it actually comes with its own controllers and its own CRDs. So you can actually build these things up using your familiar Kubernetes tooling, which means in theory we could actually use the tooling that we are deploying. We can actually control it in the same way as our applications, because it’s just yet another object that goes in our cluster. 

[00:37:21] NL: That does sound pretty cool. One other that I meant to bring up was Concourse. Have you check out Concourse yet? 

[00:37:27] BL: CouncourseCI. I have not. I have used it, but never in a way where I would have a big opinion on it. 

[00:37:34] NL: I’m kind of in the same place. I think it’s a good idea. It seems really neat, but I need to kick the tires a little more. I will say that I really like the UI. The structure of the UI is really nice. Everything makes sense, and anything you can click on like drills into something a bit deeper. I think that’s pretty cool, but it is one of the shout that I went out to as well as like another tool that I’m aware of. 

[00:37:52] BL: Yeah, that’s pretty interesting. So we’ve gone about 40 minutes now. Let’s actually start winding this down, and the way that I’m going to suggest that we wind this down is thinking about where we are now. What’s missing in this space and what else could we actually be doing in the cloud native space to make this work out better? 

[00:38:12] NL: I think I’d like to see better structured or better examples of blue-green or canary deployments with tests associated, and that might just be like me not looking hard enough at this problem. But anytime I began looking at blue-green, I get the idea of what someone’s done, but I would love to see some implementation details, or any of these opinionated tools having opinions around blue-green and what they specifically do to test it. I feel like I’m just not seeing that. 

[00:38:41] BL: With blue-green, blue-green is hard to do in Kubernetes without an external tool, because for everyone, a blue-green deployment is, I have a software deployment and we’ll give it a color. We’ll call it blue, and I have the next version, and we’ll call it green. Really what I can do is I basically have two versions of my application deployed and I can use my load balancer, or in this case, my service to just change the label or the selector in my service and now I can point at at my green from my blue. Then I want to deploy again, I can just deploy another blue and then change my label selector again. 

The problem with this is that you can do it in Kubernetes, just fine. But out of the box with Kubernetes, you will drop traffic, because guess what? What happens to a connection that was initiated or a session that was initiated on the blue cluster when you went to green? Actually, this is a whole conversation in itself about service meshes and this is actually one of the reasons service mesh is a big topic, because you can do this blue-green, or another example would be Netflix and Redblack, or you get the creative people who are like rainbow deployments, because just having two is not good enough for them. So they want to have any number of deployments going at one time. I agree with that 100%. 

[00:39:57] JH: I think, yeah, integrating tools like launch. [inaudible 00:40:01] and I think there are more which enable – I think we’re missing the business abstractions on this stuff so far. Like you said, it’s kind of hard to do if you need to go into the gritty of it right now, but I think the business abstractions of if we deploy a different version to a certain subset of customers, can we get all of those metrics? Can we get those traces back in? Will you automate it, roll it out? Can we increase the percentage of customers that are seeing those things? Have that all controlled in a Kubernetes native way, but having roll it up to a business and more of an abstraction. I think that stuff is currently missing. I think the underpinning kind of technologies are coming up, stuff like service mesh, but I think it’s the abstraction that’s really going to make it useful, which doesn’t exist today. 

[00:40:39] BL: Yeah. Actually, that’s pretty close to what I was going to say. We built all these tooling that helps us basically as technologists, but really what it comes down to is the business. A lot of the things we’re talking about where we’re talking about CD is important to the business, but when we’re talking about metrics or trace collection, that’s not important to the business, because they only care about the SLA. This is on the SLO side. 

What we really need to do is mature our processes enough that we can actually marry our outputs to something that other people can understand that has no jargon and it’s sales going up, sales going down. Everything else is just a detail. 

So, anything else? 

[00:41:20] NL: Something I think I’d like to see is in our testing, if there was a good way to accurately show the effect of something at load in a CI/CD component. Because one of the things that I’ve run into is like I’ve got this great idea for how this code should work and when I deploy it, it works great. The like a thousand people touch it all at once and it doesn’t work right anymore. I’d love to have some tool along the way that can test things out of load and like show me something that I could fix before all those people touch it.

[00:41:57] BL: Yes, that would be a good tool to have. So John, anything else for you?

[00:42:02] JH: I’ll open a can of worms right at the end and say the biggest problem here is probably going to be data when we have a lot of systems we need to talk to each other and we need the data to align between those systems and we have now proliferation of environments and clusters. Like how do we get that data reliably into the place that it needs to be to make up testing robust enough to get things out there? It’s probably an episode on some – 

[00:42:23] BL: Yeah, that’s a big conversation that if we could answer it, we wouldn’t working at VMware. We would have our own companies doing all these great things. But we can definitely iterate on it. So with that, I think we’re going to wrap it up. Thanks for listening to the Kubelets. I’m Bryan Liles, and with me today was Nicholas Lane and John – Yeah, and John Harris.  

[00:42:47] JH: Thanks everyone.

[00:42:47] BL: All right, we’ll see you next time.

[END OF EPISODE]

[00:42:50] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
