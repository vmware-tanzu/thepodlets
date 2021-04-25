---
episode_id: 007-kubernetes-as-per-kelsey-hightower
episode_number: 7
title: Kubernetes as per Kelsey Hightower 
description: Kelsey begins by telling us what he has been doing and shares with us his passion for learning in public and why he has chosen to follow this path. From there, we then talk about the issue of how difficult many people still think Kubernetes is. We discover that while there is no doubting that it is complicated, at one point, Linux was the most complicated thing out there. Now, we install Linux servers without even batting an eyelid and we think we can reach the same place with Kubernetes in the future if we shift our thinking!
notes: Today on the show we have esteemed Kubernetes thought-leader, [Kelsey Hightower](https://twitter.com/kelseyhightower), with us. We did not prepare a topic as we know that Kelsey presents talks and features on podcasts regularly, so we thought it best to pick his brain and see where the conversation takes us. We end up covering a mixed bag of super interesting Kubernetes related topics. Kelsey begins by telling us what he has been doing and shares with us his passion for learning in public and why he has chosen to follow this path. From there, we then talk about the issue of how difficult many people still think Kubernetes is. We discover that while there is no doubting that it is complicated, at one point, Linux was the most complicated thing out there. Now, we install Linux servers without even batting an eyelid and we think we can reach the same place with Kubernetes in the future if we shift our thinking! We also cover other topics such as APIs and the debates around them, common questions Kelsey gets before finally ending with a brief discussion on KubeCon. From the attendance and excitement, we saw that this burgeoning community is simply growing and growing. Kelsey encourages us all to enjoy this spirited community and what the innovation happening in this space before it simply becomes boring again. Tune in today!
hosts: 
    - name: Carlisia Thompson
      url: https://twitter.com/carlisia 
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Michael Gasch
      url: https://twitter.com/embano1
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
points:
    - Learn more about Kelsey Hightower, his background and why he teaches Kubernetes!
    - The purpose of Kelsey’s course, Kubernetes the Hard Way.
    - Why making the Kubernetes cluster disappear will change the way Kubernetes works.
    - There is a need for more ops-minded thinking for the current Kubernetes problems.
    - Find out why Prometheus is a good example of ops-thinking applied to a system.
    - An overview of the diverse ops skillsets that Kelsey has encountered.
    - Being ops-minded is just an end –you should be thinking about the next big thing!
    - Discover the kinds of questions Kelsey is most often asked and how he responds.
    - Some interesting thinking and developments in the backup space of Kubernetes.
    - Is it better to backup or to have replicas?
    - If the cost of losing data is very high, then backing up cannot be the best solution.
    - Debates around which instances are not the right ones to use Kubernetes in.
    - The Kubernetes API is the part everyone wants to use, but it comes with the cluster.
    - Why the Kubernetes API is only useful when building a platform.
    - Can the Kubernetes control theory be applied to software?
    - Protocols are often forgotten about when thinking about APIs.
    - Some insights into the interesting work Akihiro Suda’s is doing.
    - Learn whether Kubernetes can run on Edge or not.
    - Verizon, how they are changing the Edge game and what the future trajectory is.
    - The interesting dichotomy that Edge presents and what this means.
    - Insights into the way that KubeCon is run and why it’s structured in the way it is.
    - How Spotify can teach us a lesson in learning new skills!
links:
    - name: Kelsey Hightower
      url: https://twitter.com/kelseyhightower
    - name: Kelsey Hightower on GitHub
      url: https://github.com/kelseyhightower
    - name: Interaction Protocols - It's All about Good Manners
      url: https://www.infoq.com/presentations/history-protocols-distributed-systems
    - name: Akihiro Suda
      url: https://twitter.com/_AkihiroSuda_
    - name: Kubernetes — 
      url: https://kubernetes.io/
    - name: KubeCon North America
      url: https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/
    - name: Linux
      url: https://www.linux.org/
    - name: Amazon Fargate
      url: https://aws.amazon.com/fargate/
    - name: Go
      url: https://golang.org/
    - name: Docker
      url: https://www.docker.com/
    - name: Vagrant
      url: https://www.vagrantup.com/
    - name: Prometheus
      url: https://prometheus.io/
    - name: Kafka
      url: https://kafka.apache.org/
    - name: OpenStack
      url: https://www.openstack.org/
    - name: Verizon
      url: https://www.verizonwireless.com/
    - name: Spotify
      url: https://www.spotify.com/
video: https://www.youtube.com/embed/yYzIOx0Bbg0
related: # appears in sidebar, no limit in related episodes. identify by `episode_id`
- 006-a-conversation-with-joe-beda
- 005-cloud-native-infrastructure  
- 001-cloud-native
---

EPISODE 7

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[INTERVIEW]

[00:00:41] CC: Hi, everybody. Welcome back to The Podlets, and today we have a special guest with us, Kelsey Hightower. A lot of people listening to us today will know Kelsey, but as usual, there are a lot of new comers in this space. So Kelsey, please give us an introduction. 

[00:01:00] KH: Yeah. So I consider myself a minimalist. So I want to keep this short. I work at Google, on Google Cloud stuff. I’ve been involved with the Kubernetes community for what? 3, 4, 5 years ever since it’s been out, and one main goal, learning in public and helping other people do the same. 

[00:01:16] CC: There you go. You do have a repo on your GitHub that it’s about learning Kubernetes the hard way. Are you still maintaining that?

[00:01:26] KH: Yeah. So every six months or so. So Kubernetes is a hard way for those that don’t know. It’s a guide, a tutorial. You can copy and paste. It takes about three hours, and the whole goal of that guide was to teach people how to stand up a Kubernetes cluster from the ground up. So starting from scratch, 6 VMs, you install etcd, all the components, the nodes, and then you run a few test workloads so you can get a feel for Kubernetes. 

The history behind that was when I first joined Google, we were all concerned about the adaption of such a complex system that Kubernetes is, right? Docker Swarm is out at the time. A lot of people are using Mesos and we’re wondering like a lot of the feedback at that time was Kubernetes is too complex. So Kubernetes the hard way was built as an idea that if people understand how it worked just like they understand how Linux works, because that’s also complex, that if people just saw how the moving pieces fit together, then they would complain less about the complexity and have a way to kind of grasp it.

[00:02:30] DC: I’m back. This is Duffie Colley. I’m back this week, and then we also have Michael and Bryan with us. So looking forward to this session talking through this stuff.  

[00:02:40] CC: Yeah. Thank you for doing that. I totally forgot to introduce who else is in this show, and me, Carlisia. We didn’t plan what the topic is going to be today. I will take a wild guess, and we are going to touch on Kubernetes. I have so many questions for you, Kelsey. But first and foremost, why don’t you tell us what you would love to talk about?

One thing that I love about you is that every time I hear an interview of you, you’re always talking about something different, or you’re talking about the same thing in a different way. I love that about the way you speak. I know you offer to be on a lot of podcast shows, which is how we ended up here and I was thinking, “Oh my gosh! We’re going to talk about what everybody is going to talk about, but I know that’s not going to happen.” So feel free to get a conversation started, and we are VMware engineers here. So come at us with questions, but also what you would like to talk about on our show today. 

[00:03:37] KH: Yeah. I mean, we’re all just coming straight off the hills of KubeCon, right? So this big, 12,000 people getting together. We’re super excited about Kubernetes and the Mister V event, things are wrapping up there as well. When we start to think about Kubernetes and what’s going to happen, and a lot of people saw Amazon jump in with Fargate for EKS, right? So those unfamiliar with that offering, over the years, all the cloud providers have been providing some hosted Kubernetes offering, the ideas that the cloud provider, just like we do with hypervisors and virtual machines, would provide this base infrastructure so you can focus on using Kubernetes. 

You’ve seen this even flow down on-prem with VMware, right? VMware saying, “Hey, Kubernetes is going to be a part of this control plane that you can use to Kubernetes’ API to manage virtual machines and containers on-prem.”

So at some point now, where do we go from here? There’s a big serverless movement, which is trying to eliminate infrastructure for all kinds of components, whether that’s compute, database as a storage. But even in the Kubernetes world, I think there’s an appetite when we saw this with Fargate, that we need to make the Kubernetes cluster disappear, right? 

If we can make it disappear, then we can focus on building new platforms that extend the API or, hell, just using Kubernetes as is without thinking about managing nodes, operating systems and autoscalers. I think that’s kind of been the topic that I’m pretty interested in talking about, because that feature means lots of things disappear, right? Programming languages and compilers made assembly disappear for a lot of developers. Assembly is still there. I think people get caught up on nothing goes away. They’re right. Nothing goes away, but the number of people who have to interact with that thing is greatly reduced.

[00:05:21] BL: You know what, Kelsey? I’m going to have you get out of my brain, because that was the exact example that I was going to use. I was on a bus today and I was thinking about all the hubbub, about the whole Fargate EKS thing, and then I was thinking, “Well, Go, for example, can generate assembler and then it compiles that down.” No one complains about the length of the assembler that Go generates. Who cares? That’s how we should think about this problem. That’s a whole solvable problem. Let’s think about bigger things.

[00:05:51] KH: I think it’s because in operations we tend to identify ourselves as the people responsible for running the nodes. We’re the people responsible for tuning the API server. When someone says it’s going to go away, in ops – And you see this in some parts, right? Ops, some people focus a lot more on observability. They can care less about what machine something runs on. They’re still going to try to observe and tune it. You see this in SRE and some various practices. 

But a lot of people who came up in a world like I have in a traditional ops background, you were the one that pixie-booted the server. You installed that Linux OS. You configured it with Puppet. When someone tells you, “We’re going to move on from that as if it’s a good thing.” You’re going to be like, “Hold up. That’s my job.” 

[00:06:36] DC: Definitely. We’ve touched this topic through a couple of different times on this show as well, and it definitely comes back to like understanding that, in my opinion, it’s not about whether there will be a worker for people who are in operations, people who want to focus on that. The real question that come to mind is like there is so much of that work that how are so few of us are going to be able to accomplish it unless we radically re-sync how it will be done. We’re vastly outnumbered. The number of people walking into the internet for the first time every day is mind-boggling.

[00:07:08] KH: In early days, we have this goal of abstract or automating ourselves out of a job, and anyone that tried that a number of times knows that you’re always going to have something else to do. I think if we carry that to the infrastructure, I want to see the ops folks. I was very surprised that Docker didn’t come from operations folks. It came from the developer folks. Same thing for Vagrant and the same thing from Kubernetes. These are developer-minded folks that want to tackle infrastructure problems. 

If I think if ops were to put more skin in the game earlier on, definitely capable of building these systems and maybe they even end up more mature as more operations people put ops-minded thinking to these problems.

[00:07:48] BL: Well, that’s exactly what we should do. Like you said, Kelsey, we will always have a job. Whenever we solve one problem, we could think about more interesting problems. We don’t think about Linux on servers anymore. We just put Linux on servers and we run it. We don’t think about the 15 years where it was little rocky. That’s gone now. So think about what we did there and let’s do that again with what we’re doing now.

[00:08:12] KH: Yeah. I think the Prometheus community is a good example of operations-minded folks producing a system. When you meet the kind of the originators of Prometheus, they took a lot of their operational knowledge and kind of build this metrics and monitoring standard that we all kind of think about now when we talk about some levels of observability, and I think that’s what happens when you have good operations people that take prior experience, the knowledge, and that can happen over code these days. This is the kind of systems they produce, and it’s a very robust and extensible API that I think you start to see a lot of adaption. 

[00:08:44] BL: One more thing on Prometheus. Prometheus is six-years-old. Just think about that, and that’s not done yet, and it’s just gotten better and better and better. We go to give up our old thing so we can get better and better and better. That’s just what I want to add.

[00:08:58] MG: Kelsey, if you look at the – Basically your own history of coming from ops, as I understood your own history, right? Now being kind of one of the poster childs in the Kubernetes world, you see the world changing to serverless, to higher abstractions, more complex systems on one hand, but then on the other side, we have ops. Looking beyond or outside the world of Silicon Valley into the traditional ops, traditional large enterprise, what do you think is the current majority level of these ops people? 

I don’t want to discriminate anyone here. I’m just basically throwing this out as a question. Where do you think do they need to go in terms of to keep up with this evolving and higher level abstractions where we don’t really care about nitty-gritty details?

[00:09:39] KH: Yes. So this is a good, good question. I spent half of my time. So I probably spent time onsite with at least 100 customers a year globally. I fly on a plane and visit them in their home turf, and you definitely meet people at various skill levels and areas of responsibility. I want to make sure that I’m clear about the areas of responsibility. 

Sometimes you’re hired in an area of responsibility that’s below your skillset. Some people are hired to manage batch jobs or to translate files from XML to JSON. That really doesn’t say a lot about their skillset. It just kind of talks about the area of responsibility. So shout out to all the people that are dealing with main frames and having to deal with that kind of stuff. 

But when you look at it, you have the opportunity to rise up to whatever level you want to be in in terms of your education. When we talk about this particular question, some people really do see themselves as operators, and there’s nothing wrong with that. Meaning, they could come in. They get a system and they turn the knobs. You gave me a mainfrastructure me, I will tell you how to turn the knobs on that mainframe. You buy me a microwave, I’ll tell you how to pop popcorn. They’re not very interested in building a microwave. Maybe they have other things that are more important to them, and that is totally okay. 

Then you have people who are always trying to push the boundaries. Before Kubernetes, if I think back to 10 years ago, maybe 8. When I was working in a traditional enterprise, like kind of the ones you’re talking about or hinting at, the goal has always been to abstract away all of these stuff that it means to deploy an application the right way in a specific environment for that particular company. The way I manage to do it was say, “Hey, look. We have a very complex change in management processes.” I work in finance at that time. 

So everything had to have a ticket no matter how good the automation was. So I decided to make JIRA the ticketing system their front door to do everything. So you go to JIRA. There’ll be a custom field that says, “Hey, here are all the RPMs that have been QA’d by the QA team. Here are all the available environments.” You put those two fields in. That ticket goes to change in management and approval, and then something below the scenes automated everything, in that case it was Puppet, Red Hat and VMware, right? 

So I think what most people have been doing if you’re in the world of abstracting this stuff away and making it easier for the company to adapt, you’ve already been pushing these ideas that we call serverless now. I think the cloud providers put these labels on platforms to describe the contract between us and the consumer of the APIs that we present. But if you’re in operations, you should have been trying to abstract away all of these stuff for the last 10 or 15 years. 

[00:12:14] BL: I 100% agree. Then also, think about other verticals. So 23 years ago, I did [inaudible 00:12:22] work. That was my job. But we learned how to program in C and C++ because we were on old Suns, not even Spark machines. We’re on the old Suns, and we wanted to write things in CVE and we wanted to write our own Window managers. That is what we’re doing right now, and that’s why you see like Mitchell Hashimoto with Vagrant and you’re seeing how we’re pushing this thing. 

We have barely scratched the surface of what we’re trying to do. For a lot of people who are just ops-minded, understand that being ops-minded is just the end. You have to be able to think outside of your boundaries so you can create the next big thing.

[00:12:58] KH: Of you may not care about creating the next big thing. There are parts of my life where I just don’t care. For example, I pay Comcast to get internet access, and my ops involvement was going to BestBuy and buying a modem and screwing it into the wall, and I troubleshoot this thing every once in a while when someone in the household complains the internet is down. 

But that’s just far as I’m ever going to push the internet boundaries, right? I am not really interested in pushing that forward. I’m assuming others will, and I think that’s one thing in our industry where sometimes we believe that we all need to contribute to pushing things forward. Look, there’s a lot of value in being a great operations person. Just be welcomed to saying that what we operate will change overtime. 

[00:13:45] DC: Yeah, that’s fair. Very fair. For me, personally, I definitely identify as an operations person. I don’t consider it my life’s goal to create new work necessarily, but to expand on the work that has been identified and to help people understand the value of it. 

I find I sit in between two roles personally. One is to help figure out all of the different edges and pieces and parts of Kubernetes or some other thing in the ecosystem. Second, to educate others on those things, right? Take what I’ve learned and amplify it. Having the amplifying effect. 

[00:14:17] CC: One thing that I wanted to ask you, Kelsey is – I work on the Valero project, and that does back and recovery of Kubernetes clusters. Some people ask me, “Okay. So tell me about the people who are doing?” I’m like, “I don’t want to talk about that. That’s boring. I wanted to talk about the people who are not doing backups.” “Okay. Let’s talk about why you should be doing maybe thinking about that.”

Well, anyway. I wonder if you get a lot of questions in the area of Kubernetes operations or cloud native in general, infrastructure, etc., that in the back of your mind you go, “That’s the wrong question or questions.” Do you get that?

[00:14:54] KH: Yeah. So let’s use your backup example. So I think when I hear questions, at least it lets me know what people are thinking and where they’re at, and if I ask enough questions, I can kind of get a pulse in the trend of where the majority of the people are. Let’s take the backups questions. When I hear people say, “I want to back up my Kubernetes cluster.” I rewind the clock in my mind and say, “Wow! I remember when we used to backup Linux servers,” because we didn’t know what config files were on the disk. We didn’t know where processes are running. So we used to do these PS snapshots and we used to pile up the whole file system and store it somewhere so we can recover it. 

Remember Norton Ghost? You take a machine and ghost it so you can make it again. Then we said, “You know what? That’s a bad idea.” What we should be doing is having a tool that can make any machine look like the way we want it. Config management is boring. So we don’t back those up anymore. 

So when I hear that question I say, “Hmm, what is happening in the community that’s keeping people to ask these questions?” Because if I hear a bunch of questions that already have good answers, that means those answers aren’t visible enough and not enough people are sharing these ideas. That should be my next key note. Maybe we need to make sure that other people know that that is no longer a boring thing, even though it’s boring to me, it’s not boring to the industry in general.

When I hear these question I kind of use it as a keeps me up-to-date, keeps me grounded. I hear stuff like how many Kubernetes clusters should I have? I don’t think there’s a best practice around that answer. It depends on how your company segregates things, or depends on how you understand Kubernetes. It depends on the way you think about things. 

But I know why they’re asking that question, is because Kubernetes presents itself as a solution to a much broader problem set than it really is. Kubernetes manages a group of machines typically backed by IS APIs. If you have that, that’s what it does. It doesn’t do everything else. It doesn’t tell you exactly how you should run your business. It doesn’t tell you how you should compartmentalize your product teams. Those decisions you have to make independently, and once you do, you can serialize those into Kubernetes. 

So that’s the way I think about those questions when I hear them, like, “Wow! Yeah, that is a crazy thing that you’re still asking this question six years later. But now I know why you’re asking that question.”

[00:17:08] CC: That is such a great take on this, because, yes, it in the area of backup, people who are doing backup in my mind – Yeah, they should be independent of Kubernetes or not. But let’s talk about the people who are not doing backups. What motivates you to not do backups? Obviously, backups can be done in many different ways. But, yes. 

[00:17:30] BL: So think about it like this way. Some people don’t exercise, because exercise is tough and it’s hard, and it’s easier to sit on the couch and eat a bag of potato chips than exercise. It’s the same thing with backups. Well, backing up my Kubernetes cluster before Valero was so hard that I’d rather just invest brain cycles in figuring out how to make money. So that’s where people come from when it comes to hard things like backups.

[00:17:52] KH: There’s a trust element too, right? Because we don’t know if the effort we’re putting in is worth it. When people do unit testing, a lot of times unit testing can be seen as a proactive activity, where you write unit tests to catch bugs in the future. Some people only write unit test when there’s a problem. Meaning, “Wow! There’s an odd things in a database. 

Maybe we should write a test to prove that our code is putting odd things. Fix the code, and now the test pass.” I think it’s really about trusting that the investment is worth it. I think when you start to think about backups – I’ve seen people back up a lot of stuff, like every day or every couple of hours, they’re backing up their database, but they’d never restored the database. 

Then when you read their root cause analysis, they’re like, “Everything was going fine until we tried to restore a 2 terabyte database over 100 meg link. Yeah, we never exercised that part.”

[00:18:43] CC: That is very true. 

[00:18:44] DC: Another really fascinating thing to think about the backup piece is that especially like in the Kubernetes with Valero and stuff, we’re so used to having the conversation around stateless applications and being able to ensure that you can redeploy in the case of a failure. You’re not trying to actually get back to a known state the way that like a backup traditionally would. You’re just trying to get back to a running state. 

So there’s a bit of a dichotomy there I think for most folks. Maybe they’re not conceptualizing the need for having to deal with some of those stateful applications when they start trying to just think about how Valero fits into the puzzle, because they’ve been told over and over again, “This is about immutable infrastructure. This is about getting back to running. This is not about restoring some complex state.” So it’s kind of interesting. 

[00:19:30] MG: I think part of this is also that for the stateful services that why we do backups actually, things change a lot lately, right? With those new databases, scale out databases, cloud services. Thinking about backup also has changed in the new world of being cloud native, which for most of the people, that’s also a new learning experiment to understand how should I backup Kafka? It’s replicated, but can I backup it? What about etcd and all those things? Little different things than backing up a SQL database like more traditional system. So backup, I think as you become more complex, stays if needed for [inaudible 00:20:06].

[00:20:06] KH: Yeah. The case is what are you backing up and what do you hope to restore? So replication, global replication, like we do with like cloud storage and S3. The goal is to give some people 11 9s of reliability and replicate that data almost as many geographies as you can. So it’s almost like this active backup. You’re always backing up and restoring as a part of the system design versus it being an explicit action. Some people would say the type of replication we do for object stores is much closer to active restoring and backing up on a continuous basis versus a one-time checkpoint.

[00:20:41] BL: Yeah. Just a little bit of a note, you can back up two terabytes over 100 meg link in like 44 hours and a half. So just putting out there, it’s possible. Just like two days. But you’re right. When it comes to backups, especially for like – Let’s say you’re doing MySQL or Postgres. 

These days, is it better to back it up or is it better to have a replica right next to it and then having like a 10 minute delayed replica right next to that and then replicating to Europe or Asia? Then constantly querying the data that you’re replicating. That’s still a backup. What I’m saying here is that we can change the way that we talk about it. Backup started as conventional as they used to be. There are definitely other ways to protect your data. 

[00:21:25] KH: Yeah. Also, I think the other part too around the backup thing is what is the price of data loss? When you take a backup, you’re saying, “I’m willing to lose this much data between the last backup and the next.” That cost is too high than backing up cannot be your primary mode of operation, because the cost of losing data is way too high, then replication becomes a complementing factor in the whole discussion of backups versus real-time replication and shorter times to recovery.  

I have a couple of questions. When should people not use Kubernetes? Do you know what I mean? I visit a lot of customers, I work with a lot of eng teams, and I am in the camp of Kubernetes is not for everything, right? That’s a very obvious thing to say. But some people don’t actually practice it that way. They’re trying to jam more and more into Kubernetes. So I love to get your insights on where do you see Kubernetes being like the wrong direction for some folks or workloads.

[00:22:23] MG: I’m going to scratch this one from my question list to Kelsey.  

[00:22:26] KH: I’ll answer it too then. I’ll answer it after you will answer it.

[00:22:29] MG: Okay. Who wants to go first?

[00:22:30] BL: All right. I’ll go first. There are cases when I’m writing a piece of software where I don’t care about the service discovery. I don’t care about ingress. It’s just software that needs to run. When I’m running it locally, I don’t need it. If it’s simple enough where I could basically throw it into a VM through a CloudNet script, I think that is actually lower friction than Kubernetes if it’s simple. 

Now, but I’m also a little bit jaded here, because I work for the dude who created Kubernetes, and I’m paid to create solutions for Kubernetes, but I’m also really pragmatic about it as well. It’s all about effort for me. If I can do it faster in CloudNet, I will. 

[00:23:13] DC: For my part, I think that there’s – I have a couple of – I got follow on questions to this real quick. But I do think that if you’re not actively trying to develop a distributed systems, something where you’re actually making use of the primitives that Kubernetes provides, then that already would kind of be a red flag for me. If you’re building a monolithic application or if you’re in that place where you’re just rapidly iterating on a SaaS product and you’re just trying to like get as many commits on this thing until it works and like just really rapidly prototype or even create this thing. 

Maybe Kubernetes isn’t the right thing, because although we’ve come a long way in improving the tools that allow for that iteration, I certainly wouldn’t say that we’re like all the way there yet. 

[00:23:53] BL: I would debate you that, Duffy. 

[00:23:55] DC: All right. Then the other part of it is Kubernetes aside, I’m curious about the same question as it relates to containerization. Is it containerization the right thing for everyone, or have we made that pronouncement, for example?

[00:24:08] KH: I’m going to jump in and answer on this one, because I definitely think we need a way to transport applications in some way, right? We used to do it on floppy disks. We used to do it on [inaudible 00:24:18]. I think the container to me I treat as a glorified [inaudible 00:24:23]. That’s the way I’ve been seeing it for years. Registry store them. They replace [inaudible 00:24:28]. Great. Now we kind of have a more maybe universal packaging format that can handle simple use cases, scratch containers where it’s just your binary, and the more complex use cases where you have to compose multiple layers to get the output, right? I think RPM spec files used to do something very similar when you start to build those thing in [inaudible 00:24:48], “All right. We got that piece.” 

Do people really need them? The thing I get weary about is when people believe they have to have Kubernetes on their laptop to build an app that will eventually deploy to Kubernetes, right? If we took that thinking about the cloud, then everyone would be trying to install open stack on their laptop just to build an app. Does that even make sense? Does that make sense in that context? Because you don’t need the entire cloud platform on your laptop to build an app that’s going to take a request and respond. I think Kubernetes people, I guess because it’s easier to put your on laptop, people believe that it needs to be there. 

So I think Kubernetes is overused, because people just don’t quite understand what it does. I think there’s a case where you don’t use Kubernetes, like I need to read a file from a bucket. Someone uploaded an XML file and my app is going to translate it into JSON. That’s it. In that case, this is where I think functions as a service, something like Cloud Run or even Heroku make a lot more sense to me because the operational complexity is kind of hitting within a provider and is linked almost like an SDK to the overall service, which is the object store, right? 

The compute part, I don’t want to make a big deal about, because it’s only there to process the file that got uploaded, right? It’s almost like a plug-in to an FTP server, if you will. Those are the cases where I start to see Kubernetes become less of a need, because I need a custom platform to do such an obvious operation. 

[00:26:16] DC: Those applications that require the primitives that Kubernetes provides, service discovery, the ability to define ingress in a normal way. When you’re actually starting to figure out how you’re going to platform that application with regard to those primitives, I do see the argument for having Kubernetes locally, because you’re going to be using those tools locally and remotely. You have some way of defining what that platforming requirement is.

[00:26:40] KH: So let me pull on that thread. If you have an app that depends on another app, typically we used to just have a command line flag that says, “This app is over there.” Local host when it’s on my laptop. Some DNS name when it’s in the cluster, or a config file can satisfy that need. So the need for service discovery usually arises where you don’t know where things are. But if you’re literally on your laptop, you know where the things are. You don’t really have that problem. 

So when you bring that problem space to your laptop, I think you’re actually making things worse. I’ve seen people depend on Kubernetes service discovery for the app to work. Meaning, they just assume they can call a thing by name and they don’t support IPs, and ports. 

They don’t support anything, because they say, “Oh! No. No. No. You’ll always be running into Kubernetes.” You know what’s going to happen? In 5 or 10 years, we’re going to be talking like, “Oh my God! Do you remember when you used to use Kubernetes? Man! That legacy thing. I built my whole career porting apps away from Kubernetes to the next thing.” The number one thing we’ll talk about is where people lean too hard on service discovery, or people who built apps that taught to config maps directly. Why are you calling the Kubernetes API from your app? That’s not a good design. I think we got to be careful coupling ourselves too much to the infrastructure.

[00:27:58] MG: It’s a fair point too. Two answers from my end, to your question. So one is I just build an appliance, which basically priced to bring an AWS Lambda experience to the Vsphere ecosystem. Because we don’t – Or actually my approach is that I don’t want any ops people who needs to do some one-off things, like connect this guy to another guy. I don’t want him to learn Kubernetes for that. It should be as simple as writing a function. 

So for that appliance, we had to decide how do we build it? Because it should be scalable. We might have some function as a service component running on there. So we looked around and we decided to put it on Kubernetes. So build the appliance as a traditional VM using Kubernetes on top. For me as a developer, it gave me a lot of capabilities, like self-healing, the self-healing capabilities. But it’s also a fair point that you wrote, Kelsey, about how much do we depend or write our applications being depend on those auxiliary features from Kubernetes? Like self-healing, restarts, for example. 

[00:28:55] KH: Well, in your case, you’re building a platform. I would hate for you to tell me that you rebuilt a Kubernetes-like thing just for that appliance. In your case, it’s a great use case. I think the problem that we have as platform builders is what happens when things start leaking up to the user? You tell a user all they have to care about is functions. Then they get some error saying, “Oh! There’s some Kubernetes security context that doesn’t work.” I’m like, “What the hell is Kubernetes?” That leakage is the problem, and I think that’s the part where we have to be careful, and it will take time, but we don’t start leaking the underlying platform making the original goal untrue. 

[00:29:31] MG: The point is where I wanted to throw this question back was now these functions being written as simple scripts, whatever, and the operators put in. They run on Kubernetes. Now, the operators don’t know that it runs in Kubernetes. But going back to your question, when should we not use Kubernetes. Is it me writing in a higher level abstraction like a function? Not using Kubernetes in first sense, because I don’t know actually I’m using it. But on the covers, I’m still using it. So it’s kind of an answer and not an answer to your question because – 

[00:29:58] KH: I’ve seen these single node appliances. There’s only one node, right? They’re only there to provide like email at a grocery store. You don’t have a distributed system. Now, what people want is the Kubernetes API, the way it deploys things, the way it swaps out a running container for the next one. We want that Kubernetes API. 

Today, the only way to get it is by essentially bringing up a whole Kubernetes cluster. I think the K3S project is trying to simplify that by re-implementing Kubernetes. No etcd, SQLite instead. A single binary that has everything. So I think when we start to say what is Kubernetes, there’s the implementation, which is a big distributed system. Then there’s the API. I think what’s going to happen is if you want the Kubernetes API, you’re going to have so many more choices on the implementation that makes better sense for the target platform. 

So if you’re building an appliance, you’re going to look at K3S. If you’re a cloud provider, you’re going to probably look something like what we see on GitHub, right? You’re going to modify and integrate it into your cloud platform.

[00:31:00] BL: Of maybe what happened with Kubernetes over the next few years is what happened with the Linux API, or the API. Firecracker and gVisor did this, and WSL did this. We can basically swap out Linux from the backend because we can just get on with the calls. Maybe that will happen with Kubernetes as well. So maybe Kubernetes will become a standard where Kubernetes standard and Kubernetes implementation that we have right now. I don’t even know about that one.

[00:31:30] KH: We’re starting to see it, right? When you say here is my pod, and we can just look at Fargate for EKS as an example. When you give them a pod, their implementation is definitely different than what most people are thinking about running these days, right? One pod per VM. Not using Virtual Kube. So they’ve taken that pod spec and tried to uphold its means. But the problem with that, you get leaks. 

For example, they don’t allow you to bind to a host 4. Well, the pod spec says you can bind to a host 4.  Their implementation doesn’t allow you to do it, and we see the same problem with gVisor. It doesn’t implement all the system calls. You couldn’t run the Docker daemon on top of gVisor. It wouldn’t work. So I think as long as we don’t leak, because when we leak, then we start breaking stuff.

[00:32:17] BL: So we’re doing the same thing with Project Pacific here at VMware, where this concept of a pod is actually a virtual machines that loops in like a tenth of a second. It’s pretty crazy how they’ve been able to figure that out. If we can get this right, that’s huge for us. That means we can move out of our appliance and we can create better things that actually work. I’m VMware specific. I’m on AWS and I want this name space. I can use Fargate and EKS. That’s actually a great idea.

[00:32:45] MG: I remember this presentation, Kelsey, that you gave. I think two or three years ago. It might be three years, where you took the Kubernetes architecture and you removed the boxes and the only thing remaining was the API server. This is where it clicked to me as like, “This is right,” because I was focused on the scheduler. I wanted to understand the scheduler. 

But then you zoomed out or your stripped off all these pieces and the only thing remaining was the API server. This is where it clicked to me. It’s like [inaudible 00:33:09] or like the syscall interface. It’s basically my API to do some crazy things that I would have write on my own and assembly kind of something before I could even get started. As well the breakthrough moment for me, this specific presentation.

[00:33:24] KH: I’m working on an analogy to talk about what’s happening with the Kubernetes API, and I haven’t refined it yet. But when the web came out, we had all of these HTTP verbs, put post git. We have a body. We have headers. You can extract that out of the whole web, the web browser plus the web server. If you have tracked out that one piece, the instead of building web package, we can build APIs and GraphQL, because we can reuse many of those mechanisms, and we just call that RESTful interfaces. 

Kubernetes is going through the same evolution, right? The first thing we built was this container orchestration tool. But if you look at the CRDs, the way we do RBAC, the way we think about the status field in a custom object, if you extract those components out, then you end up with this Kubernetes style APIs where we start to treat infrastructure not as code, but as data. That will be the restful moment for Kubernetes, right? 

The web, we extracted it out, then we have REST interfaces. In Kubernetes, once we extracted out, we’ll end up with this declarative way of describing maybe any system. But right now, the fine, or the perfect match is infrastructure. Infrastructure as data and using these CRDs to allow us to manipulate that data. So maybe you start with Helm, and then Helm gets piped into something like Customize. That then gets piped into a mission controller. That’s how Kubernetes actually works, and that data model to API development I think is going to be the unique thing that lasts longer then the Kubernetes container platform does.

[00:34:56] CC: But if you’re talking about – Correct me if I misinterpret it, platform as data. Data to me is meant to be consumed, and I actually have been thinking since you said, “Oh, developers should not be developing apps that connect directly to Kubernetes,” or I think you said the Kubernetes API. Then I was thinking, “Wait. I’ve heard so many times people saying that that’s one great benefit of Kubernetes, that the apps have that access.” Now, if you see my confusion, please clarify it. 

[00:35:28] KH: Yeah. Right. I remember early on when we’re doing config maps, and a big debate about how config maps should be consumed by the average application. So one way could be let’s just make a configs map API and tell every developer that they need to import a Kubernetes library to call the API server, right? Now everybody’s app doesn’t work anymore on your laptop. So we were like, “Of course not.”  

What we should do is have config maps be injected into the file system. So that’s why you can actually describe a config map as a volume and say, “Take these key values from the config map and write them as normal files and inject them into the container so you can just read them from the file system. The other option also was environment variables. You can take a config map and translate them into an environment variables, and lastly, you can take those environment variables and put them into command line flags. 

So the whole point of that is all three of the most popular ways of configuring an app, environment variables, command line flags and files. Kubernetes molded itself into that world so that developers would never tightly couple themselves to the Kubernetes API. 

Now, let’s say you’re building a platform, like you’re building a workflow engine like Argo, or you’re building a network control plane like Istio. Of course, you should use a Kubernetes API. You’re building a platform on top of a platform. I would say that’s kind of the exception to the rule if you’re building a platform. But a general application that’s leveraging the platform, I really think you should stay away from the Kubernetes API directly. You shouldn’t be making sys calls directly [inaudible 00:37:04] of your runtime. The unsafe package in Go. Once you start doing that, Go can’t really help you anymore. You start pining yourself to specific threads. You’re going to be in a bad time. 

[00:37:15] CC: Right. Okay. I think I get it. But you can still use Kubernetes to decouple your app from the machine by using objects to generate those dependencies.  

[00:37:25] KH: Exactly. That was the whole benefit of Kub, and Docker even, saying, “You know what? Don’t worry too much more about C groups and namespaces. Don’t even try to do that yourself.” Because remember, there was a period of time where people were actually trying to build C groups and network namespaces into the runtime. There’s a bunch of like Ruby and Python projects that they were trying to containerize themselves within the runtime. Whoa! What are we doing? Having that second layer now with Containerd on C, we don’t have to implement that 10,000 times for every programming language.

[00:37:56] DC: One of the things I want to come back to is your point that you’d made about the Kubernetes API being like one of the more attractive parts of the projects, and people needing that to kind of move forward in some of these projects, and I wonder if it’s more abstract than that. I wonder if it’s abstract enough to think about in terms of like a level triggered versus edge triggered stuff. Taking control theory, the control theory that basically makes Kubernetes such a stable project and applying that to software architecture rather than necessarily bringing the entire API with you. Perhaps, what you should take from this is the lessons that we’ve learned in developing Kubernetes and apply that to your software. 

[00:38:33] KH: Yeah. I have the fortunate time to spend some time with Mark Burgess. He came out with the Promise Theory, and the Promise Theory is the underpinnings of Puppet Chef, Ansible, CF Engine, and this idea that we would make promises about something and eventually convergent to that state. 

The problem was with Puppet Chef and Ansible, we’re basically doing this with shell scripts and Ruby. We were trying to write all of these if, and, else statements. When those didn’t work, what did you do? You made an exec statement at the bottom and then you’re like, “Oh! Just run some batch, and who knows what’s going to happen?” That early implementations of Promise Theory, we didn’t own the resource that we were making promises about. Anyone could go behind this and remove the user, or the user could have a different user ID on different systems but mean the same thing. 

In the Kubernetes world, we push a lot of that if, else statements into the controller. Now, we force the API not have any code. That’s the big difference. If you look at the Kubernetes API, you can’t do if statements. Terraform, you can do if statements. So you kind of fall into the imperative trap at the worst moments when you’re doing dry runs or something like that. It does a really good of it. Don’t get me wrong. 

So the Kubernetes API says, “You know what? We’re going to go all-in on this idea.” You have to change the controller first and then update the API. There is no escape patches in the API. So it forces a set of discipline that I think gets us closer to the promises, because we know that the controller owns everything. There’s no way to escape in the API itself.

[00:40:07] DC: Exactly. That’s exactly what I was pushing for. 

[00:40:09] MG: I have a somewhat related question and I’m just not sure how to frame it correctly. So yesterday I saw a good talk by someone talking about protocols, like they somewhat forgotten power of protocols in the world of APIs. We got Swagger. We got API definitions. But he made the very easy point of if I give you an open, a close and a write and read method, or an API, you’d still don’t know how to call them in sequence and which one to call it off. 

This is same for [inaudible 00:40:36] library if you look at that. So I always have to force myself, “Should I do anything [inaudible 00:40:40] or I’m not leaking some stuff.” So I look it up. Versus on protocols, if you look at the RFC definitions, they are very, very precise and very plainly outlined of what you should do, how you should behave, how you should communicate between these systems. 

This is more of a communication and less about the actual implementation of an API. I still have to go through that talk again, and I’m going to put it in the show notes. But this kind of opened my mind again a little bit to think more about communication between systems and contracts and promises, as you said, Carlisia. Because we make so many assumptions in our code, especially as we have to write a lot of stuff very quickly, which I think will make things brittle overtime. 

[00:41:21] KH: So the gift and the curse of Kubernetes that it tries to do both all the time. For some things like a pod or a deployment, we all feel that. If I give any Kubernetes cluster a deployment object, I’m going to get back out running pod. This is what we all believe. But the thing is it may not necessarily run on the same kernel. It may not run on the same OS version. It may not even run on the same type of infrastructure, right? This is where I think Kubernetes ends up leaking some of those protocol promises. A deployment gets you a set of running pods.

But then we dropdown to a point where you can actually do your own API and build your own protocol. I think you’re right. Istio is a protocol for thinking about service mesh, whereas Kubernetes provides the API for building such a protocol. 

[00:42:03] MG: Yeah, good point. [inaudible 00:42:04].

[00:42:04] DC: On the Fargate stuff, I thought was a really interesting article, or actually, an interesting project by [inaudible 00:42:10], and I want to give him a shout out on this, because I thought that was really interesting. He wrote an admission controller that leverages autoscaler, node affinity and pod affinity to effectively do the same thing so that whenever there is a new pod created, it will spin up a new machine and associate only that pod with that machine. I was like, “What a fascinating project.” But also just seeing this come up from like the whole Fargate ECS stuff. I was like –

[00:42:34] KH: I think that’s the thread that virtual kubelet is pulling on, right? This idea that you can simplify autoscalling if you remove that layer, right? Because right now we’re trying to do this musical chairs dance, right? Like in a cloud. Imagine if someone gave you the hypervisor and told you you’re responsible for attaching hypervisor workers and the VMs. It would be a nightmare. We’re going to be talking about autoscalling the way we do in the cloud. 

I think Kubernetes moving into a world where a one pod per resource envelope. Today we call them VMs, but I think at some point we’re going to drop the VM and we would just call it a resource envelope. VMs, this is the way we think about that, Firecrackers. Like, “Hey, does it really need to be a complete VM?” Firecracker is saying, “No. It doesn’t. It just needs to be a resource envelope that allows you to run their particular workload.”

[00:43:20] DC: Yeah. Same thing we’re doing here. It’s just enough VM to get you to the point where you can drop those containers on to it.  

[00:43:25] CC: Kelsey, question. Edge? Kubernetes on edge. Yes or no? 

[00:43:29] KH: Again, it’s just like compute on edge has been a topic for discussion forever. Problem is when some people say compute on edge, they mean like go buy some servers from Dell and put it in some building somewhere close to your property as you can. But then you have to go build the APIs to deploy it to that edge. 

What people want, and I don’t know how far off it is, but Kubernetes has set the bar so high that the Kubernetes API comes with a way to low balance, attach storage, all of these things by just writing a few YAML files. What I hear people saying is I want that close to my data center or store as possible. 

When you say Kubernetes on the edge, that’s what they’re saying, is like, “But we currently have one at edge. It’s not enough.” We’ve been providing edge for a very longtime. Open stack was – Remember open stack? Oh! We’re going to do open stack on the edge. But now you’re a pseudo cloud provider without the APIs. 

I think what Kubernetes is bringing to the table is that we have to have a default low balancer. We have to have a default block store. We have to have a default everything and on or for to mean Kubernetes like it does today centralized. 

[00:44:31] BL: Well, Doors have been doing this forever in some form or another. 20 years ago I worked for a Duty Free place, and literally traveled all over the world replacing point of sale. You might think of point of sales as a cash register. There was a computer in the back and it was RS-232 links from the cash register to the computer in the back. Then there was dial-up, or [inaudible 00:44:53] line to our central thing. We’ve been doing edge for a long time, but now we can do edge. 

The central facility can actually manage the compute infrastructure. All they care about is basically CPU and memory and network storage now, and it’s a lot more flexible. The surety is long, but I think we’re going to do it. It’s going to happen, and I think we’re almost right – People are definitely experimenting. 

[00:45:16] KH: You know what, Carlisia? You know what’s interesting now though? I was watching the Reinvent announcement. Verizon is starting to allow these edge components to leverage 5G for the last mile, and that’s something game-changer, because most people are very skeptical about 5G being able to provide the same coverage as 4G because of the wavelength and point-to-point, all of these things. 

But for edge, this thing is a game-changer. Higher bandwidth, but shorter distance. This is exactly what edge want, right? Now you don’t have to dig up the ground and run fiber from point-to-point. So if you could buy in these Kubernetes APIs, plus concepts like 5G, and get in that closer to people, yeah, I think that’s going to change the way we think about regions and zones. That kind of goes away. We’re going to move closer to CDNs, like Cloudflare has been experimenting with their worker technology. 

[00:46:09] DC: On the edge stuff, I think that there’s also an interesting dichotomy happening, right? There’s a definition of edge that we referred to, which is storage stuff and one that you’re alluding to, which is that there may be like some way of actually having some edge capability and a point of presence in a 5G tower or some point with that. 

In some cases, edge means data gravity. You’re actually taking a bunch of data from sensors and you’re trying to store it in a place where you don’t have to pay the cost of moving all of the data form one point to another where you can actually centralize compute. So in those edge cases, you’re actually willing to invest in a high-end compute to allow for the manipulation of that data where that data lake is so that you can afford to move it into some centralized location later.

But I think that that whole space is so complex right now, because there are so many different definitions and so many different levels of constraints that you have to solve for under one umbrella term, which is the edge. 

[00:47:04] KH: I think Bryan was pulling on that with the POS stuff, right? Because instead of you going to go buy your own cash registry and gluing everything together, that whole space got so optimized that you can just buy a square terminal. Plug it on some Wi-Fi and then there you go, right? You now have that thing. 

So once we start to do this for like ML capabilities, security capabilities, I think you’re going to see that POS-like thing expand and that computer get a little bit more robust to do exactly what you’re saying, right? Keep the data local. Maybe you ship models to that thing so that it can get smarter overtime, and then upload the data from various stores overtime. 

[00:47:40] DC: Yup.

[00:47:40] MG: One last question from my end. Switching gears a bit, if allow it. KubeCon. I left KubeCon with some mixed feelings this years. But my perspective is different, because I’m not the typical, one of the 12,000 people, because most of them were new comers actually. So I looked at them and I asked myself, “If I would be new to this huge big world of CNCF and Kubernetes and all these stuff, what would I take from that?” I would be confused. Confused like how from [inaudible 00:48:10] talks, which make it sound like it’s so complex to run all these things through the keynotes, which seems to be like just a lineup of different projects that I all have to get through and install and run. 

I was missing some perspective and some clarity from KubeCon this year, especially for new comers. Because I’m afraid, if we don’t retain them, attract them, and maybe make them contributors, because that’s another big problem. I’m afraid that we’ll lose our base that is using Kubernetes.

[00:48:39] BL: Before Kelsey says anything, and Kelsey was a Kub contrary before I was, but I was a Kub contrary this time, and I can tell you exactly why everything is like it is. Well, fortunately and unfortunately, this cloud native community is huge now. There’s lots of money. There are lots of people. There are lots of interests. If we went back to KubeCon when it was in San Francisco years ago, or even like the first Seattle one, that was a community event. We could make the event for the community. 

Now, there’s community. The people who are creating the products. There’s the end users, the people who are consuming the products, and there are these big corporations and companies, people who are actually financing this whole entire thing. We actually have to balance all three of those. 

As a person who just wants to learn, what are you trying to learn from? Are you learning from the consumption piece? Are you learning to be a vendor? Are you learning to be a contributor? We have to think about that. At a certain point, that’s good for Kubernetes. That means that we’ve been able to do the whole chasm thing. We’ve cross over to chasm. This thing is real. It’s big. It’s going to make a lot of people a lot of money one day. 

But I do see the issue for the person who’s trying to come in and say, “What do I do now?” Well, unfortunately, it’s like anything else. Where do you start? Well, you got to take it all in. So you need to figure out where you want to be. I’m not going to be the person that’s going to tell you, “Well, go do a sig.” That’s not it. 

What I want to tell you is like anything else that we’d have to learn is real hard, whether it’s a programming language or a new technique. Figure out where you want to be and you’re going to have to do some research. Then hopefully you can contribute. I’m sure Kelsey has opinions on this as well. 

[00:50:19] KH: I think Brian is right. I mean, I think it’s just like a pyramid happening. A the very bottom, we’re new. We need to get everybody together in one space and it becomes more of a tradeshow, like an introductory, like a tasting, right? 

When you’re hungry and you go and just taste everything. Then when you figure out what you want, then that will be your focus, and that’s going to change every year for a lot of people. Some people go from consumer to contributor, and they’re going to want something out of the conference. They’re only going to want to go to the contributor day and maybe some of the deep-dive technical tracks. You’re trying to serve everybody in two or three days. So you’re going to start to have like everything pulling for your attention. I think what you got to do is commit. 

If you go and you’re a contributor, or you’re someone what’s building on top, you may have to find a separate event to kind of go with it, right? Someone told me, “Hey, when you go to all of these conferences, make sure you don’t forget to invest in the one-on-one time.” Me going to Oslo and spending an evening with Mark Burgess and really talk about Promise Theory outside of competing for attention with the rest of the conference. 

When I go, I’d like to meet new people. Sit down with them. Out of the 12,000 people, I call it a win if I can meet three new people that I’ve never met before. You know what? I’ll do a follow-up hangout with them to go deeper in some areas. So I think it’s more of a catch all. It’s definitely has a tradeshow feel now, because it’s big and there’s a lot of money and opportunity involved. 

But at the same time, you got to know that, “Hey, you got to go and seek out.” You go to Spotify, right? Spotify has so much music. So many genre I’ve never heard of. But you got to make your own play list. You got to decide what you want, and also, look, go to sessions you know nothing about. Be confused on purpose. I go to Spotify sometimes like, “You know what? What’s happening in country music right now?” Country music top 10. You know what? I’ll try it. I will literally try a new genre and just let it play. Then what you find is you’ll find one song is like, “Oh! Hold on. Who is that?” It turns out that one new artist I actually like some of their music and then I dive deep in that artist, maybe not the whole genre.

[00:52:25] CC: Yeah. It’s like when you’re in school and you go to class and you didn’t do any of the homework, you didn’t do any of the reading. You sit there like, “Hmm.” I sympathize, empathize with the amount to sort through. But if you just slice it and sort through a piece of that, select. Like Kelsey is saying also, I agree with that. It is not easy. I don’t know how it could be any easier unless we knew you and fed you and there was a natural program for you to go through. But as far as conference goes, just sitting there, listening to the words, acquiring the vocabulary, talking to people. Eventually syncs in, and that works for me. 

[00:53:03] BL: I’ll say one last thing on this. If the market besides that, a certain segment of users are not being taken care of, there’ll be another conference. I think you should go that conference. CNCF does not own all the brain space for cloud native and Kubernetes. So we’ll let the market figure that out. 

So you’re right. So we’re 12,000 people two weeks ago in San Diego. I’m not sure how big Amsterdam will be, and I’m sure Boston will be that size. Maybe, maybe 15, maybe even more people. So the community, or the ecosystem will figure it out, like we’ve done with everything. We don’t just have programming – We used to have programming conferences. Now we have all these languages. So we’re growing, but it’s a good thing, because now we can actually focus on those things that we want to talk about. 

[00:53:46] KH: Keep asking that question. You know what I mean? I mean that authenticity. When I don’t see it, you got to remind people of it. You know what I mean? This year, when I decided what to talk about during my keynote, I decided to strip away the live demos, strip away a lot of the stuff and just say, “Maybe I’ll try something new,” to try to bring it back down to my own kind of ground level. 

We need everything. We need people pushing the bar. We need people reminding people. We need other people challenging what we’re reminding people about. Because our glory days are probably painful to some other people. So we got to be careful about how we kind of glorify the past. 

[00:54:23] CC: yeah, and also find each other. Find people who are the same level. Learning together makes thing so much easier. But I personally very much empathize, and one of the reason for this show is to help people understand the whats, the whys. 

Kelsey, we are very much at the end of our time together, but I want to give you an opportunity to make any last questions, comments.

[00:54:48] KH: Yeah. I mean, I always end just pay attention to the fundamentals. That’s the people stuff. Fundamentally, we’re just people working on some stuff. Fundamentally, the technology is roughly the same. When I peel back my 10 years, the tech looks very similar that it did 10 years ago except for the way we do it is slightly different. I think people should find a little bit of encouragement in that. This isn’t overwhelming new. It’s just a remapping of some of these ideas and formalization of these ideas that we’re all seaming to want to work together for the very first time in a long time. So I think it’s just a good time to be in this space. So enjoy it while we have it, because it could be boring again.  

[00:55:26] CC:  Yeah. 

[00:55:27] BL: Yeah.

[00:55:28] DC: Yeah.  

[00:55:29] CC: Could be boring again. That’s a great quote. All right, everybody. Kelsey, thank you so much for being with us. Everybody, thank you. All the hosts. 

[00:55:37] BL: Thank you. 

[00:55:38] MG: Thank you, Carlisia. [inaudible 00:55:38]. 

[00:55:40] CC: Yeah. My pleasure. I’m so grateful to be here, and we will be in your ears next week again. Bye. 

[END OF INTERVIEW]

[00:55:46] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
