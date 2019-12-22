---
episode_id: 008-disaster-recovery 
episode_number: 8
title: Disaster and Recovery
description: In this episode we discuss some of the different ways that people are backing things up to suit theiwr individual needs, recovery time objectives and recovery point objectives, what high availability can offer your system and more! The team offers a bunch of great safety tips to keep things from falling through the cracks and we get into keeping things simple avoiding too much mutation of infrastructure and why testing your backups can make all the difference.
notes: In this episode of The Podlets Podcast, we are talking about the very important topic of recovery from a disaster! A disaster can take many forms, from errors in software and hardware to natural disasters and acts of God. That being said that are better and worse ways of preparing for and preventing the inevitable problems that arise with your data. The message here is that issues will arise but through careful precaution and the right kind of infrastructure, the damage to your business can be minimal. We discuss some of the different ways that people are backing things up to suit their individual needs, recovery time objectives and recovery point objectives, what high availability can offer your system and more! The team offers a bunch of great safety tips to keep things from falling through the cracks and we get into keeping things simple avoiding too much mutation of infrastructure and why testing your backups can make all the difference. We naturally look at this question with an added focus on Kubernetes and go through a few tools that are currently available. So for anyone wanting to ensure safe data and a safe business, this episode is for you!
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia 
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Olive Power
      url: https://twitter.com/opowero
points:
    - A little introduction to Olive and her background in engineering, architecture, and science. • Disaster recovery strategies and the portion of customers who are prepared.
    - What is a disaster? What is recovery? The fundamentals of the terms we are using.
    - The physicality of disasters; replication of storage for recovery.
    - The simplicity of recovery and keeping things manageable for safety.
    - What high availability offers in terms of failsafes and disaster avoidance.
    - Disaster recovery for Kubernetes; safety on declarative systems.
    - The state of the infrastructure and its interaction with good and bad code.
    - Mutating infrastructure and the complications in terms of recovery and recreation.     
    - Plug-ins and tools for Kubertnetes such as Velero.
    - Fire drills, testing backups and validating your data before a disaster!
    - The future of backups and considering what disasters might look like.
links:
    - name: PostgreSQL
      url: https://www.postgresql.org/
    - name: AWS
      url: https://aws.amazon.com/
    - name: Azure
      url: https://azure.microsoft.com/
    - name: Google Cloud 
      url: https://cloud.google.com/
    - name: Digital Ocean 
      url: https://www.digitalocean.com/
    - name: SoftLayer 
      url: https://www.ibm.com/cloud
    - url: Oracle 
      name: https://www.oracle.com/
    - url: HackIT 
      name: https://hackit.org.uk/
    - name: Red Hat
      url: https://www.redhat.com/
    - name: Velero 
      url: https://blog.kubernauts.io/backup-and-restore-of-kubernetes-applications-using-heptios-velero-with-restic-and-rook-ceph-as-2e8df15b1487
    - name: CockroachDB 
      url: https://www.cockroachlabs.com/
    - name: Cloud Spanner 
      url: https://cloud.google.com/spanner/

video: https://www.youtube.com/embed/gQatd9f_-Kg
related: 
- 006-a-conversation-with-joe-beda
- 007-kubernetes-as-per-kelsey-hightower
- 005-cloud-native-infrastructure
---

EPISODE 08


[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[00:00:41] CC: Hi, everybody. We are back. This is episode number 8. Today we have on the show myself, Carlisia Campos and Josh.

[00:00:51] JR: Hello, everyone.

[00:00:52] CC: That was Josh Rosso. And Olive Power.  

[00:00:55] OP: Hello. 

[00:00:57] CC: And also Brian Lyles. 

[00:00:59] BL: Hello. 

[00:00:59] CC: Olive, this is your first time, and I didn’t even give you a heads-up. But tell us a little bit about your background.

[00:01:06] OP: Yeah, sure. I’m based in the UK. I joined VMware as part of the Heptio acquisition, which I joined Heptio way back last year in October. The acquisition happened pretty quickly for me. Before that, I was at Red Hat working on some of their cloud management tooling and a bit of OpenShift as well. 

Before that, I worked with HP and Fujitsu. I kind of work in enterprise management a lot, so things like desired state and automation are kind of things that have followed me around through most of my career. Coming in here to VMware, working in the cloud native applications business unit is kind of a good fit for me. 

I’m a mom of two and I’m based in the UK, which I have to point out, currently undergoing a heat wave. We’ve had about like 3 weeks of 25 to 30 degrees, which is warm, very warm for us. Everybody is in a great mood.  

[00:01:54] CC: You have a science background, right? 

[00:01:57] OP: Yeah, I studied chemistry in university and then I went on to do a PhD in cancer research. I was trying to figure out ways where we could predict how different people will going to respond to radiation treatments and then with a view to tailoring everybody’s treatment to make it unique for them rather than giving the same treatment to different who present you with the same disease but were response very, very different. Yeah, that was really, really interesting.  

[00:02:22] CC: What is your role at VMware? 

[00:02:23] OP: I’m a cloud native architect. I help customers predominantly focus on their Kubernetes platforms and how to build them either from scratch or help them get more production-ready depending on where they are in their Kubernetes journey. It’s been really exciting part of being part of Heptio and following through into the VMware acquisition. We’re going to speak to customers a lot at very exciting times for them. They’re kind of embarking on their Kubernetes journey a lot of them. We’re with them from the start and every step of the way. That’s really rewarding and exciting.

[00:02:54] CC: Let me pick up on that thread actually, because one thing that I love about this group for me, because I don’t get to do that. You all meet customers and you know what they are doing. Get that knowledge first-hand. What would you say the percentage of the clients that you see, how disaster recovery strategy, which by the way is a topic of today’s show. 

[00:03:19] OP: I speak to customers a lot. As I mentioned earlier, a lot of them are like in different stages of their journey in terms of automation, in terms of infrastructure of code, in terms of where they want to go for their next platform. But there generally in the room a team that is responsible for backup and recovery, and that’s generally sort of leads into this storage team really because you’re trying to backup state predominantly. 

When we’re speaking to customers, we’ll have the automation people in the room. We’ll have the developers in the room and we’ll have the storage people in the room, and they are the ones that are primarily – Out of those three sort of folks I’ve mentioned, they’re the ones that are primarily concerned about backup. How to back up their data. How to restore it in a way that satisfies the SLAs or the time to get your systems back online in a timely manner. They are the force concerned with that.

[00:04:10] JR: I think it’s interesting, because it’s almost scary how many of our customers  don’t actually have a disaster recovery strategy of any sort. I think it’s often times just based on the maturity of the platform. A lot of the applications and such, they’re worried about downtime, but not necessarily like it’s going to devastate the business in a lot of these apps. I’m not trying to say that people don’t run mission critical apps on things like Kubernetes. It’s just a lot of people are very new and they’re just kind of ramping up. It’s a really complicated thing that we work with our customers on, and there’re so many like layers to this. I’m sure layers that we’ll get into. There are things like disaster recovery of the actual platform. 

If Kubernetes, as an example, goes down. Getting it back up, backing up its data store that we call etcd. There’s obviously like the applications disaster recovery. If a cluster of some sort goes own, be it Kubernetes or otherwise, shifting some CI system and redeploying that into some B cluster to bring it back up. Then to Olive’s point, what she said, it all comes back to storage. Yeah. I mean, that’s where it gets extremely complicated. Well, at least in my mind, it’s complicated for me, I should say. 

When you’re thinking about, “Okay, I’m running this PostgreS as a service thing on this cluster.” It’s not that simple to just move the app from cluster A to cluster B anymore. I have to consider what do I do with the data? How do I make sure I don’t lose it out? Then that’s a pretty complicated question to answer. 

[00:05:32] OP: I think a lot of the storage providers, vendors playing in that storage space are kind of looking at novel ways to solve that and have adapted their current thinking maybe that was maybe slightly older thinking to new ways of interacting with Kubernetes cluster to provide that ongoing replication of data around different systems outside of the Kubernetes and then allowing it to be ported back in when a Kubernetes cluster – If we’re talking about Kubernetes in this instance as a platform, porting that data back in. 

There’re a lot of vendors playing in that space. It’s kind of an exciting space really to see how different people are figuring out how to back up distributed systems in reliable manner, because different people want different levels of backup. Because of the microservices nature of the cloud native architectures that we predominantly deal with, your application is not just one thing anymore. Certain parts of that application need to be recovered fairly quickly, and other parts don’t need to recover that quickly. 

It’s all about functionality ultimately that your end customers or your end users see. If you think about visually as like a banking application, for example, where if you’re looking at things like – The customer is interacting with that and they can check their financial details and they can check the current stages of their account, then they are two different services. But the actual service to transfer money into their account is down. It’s still a pretty functional system to the end user. But in the background, all those great systems are in place to recover that transfer of money functionality, but it’s not detrimental to your business if that’s down. 

There’ll be different SLAs and different objectives in terms of recovery, in terms of the amount of time that it takes for you to restore. All of that has to be factored in into disaster recovery plans and it’s up to the company and we can help as much as possible for them to figure out which feats of the applications and which feats of your business need to conform to certain SLAs in terms of recovery, because different feats will have different standards and different times in and around that space. It’s a complicated thing. It definite is.

[00:07:29] BL: I want to take a step back and unpack this term, disaster recovery, because I can assure you, careers and fortunes have been made on helping people get this right. Before we get super deep into this, what’s a disaster and then what’s a recovery for that? Have you thought about that at a fundamental level?

[00:07:45] OP: Just for me, if we would kind of take it at face value. A physical disaster, they could be physical ones or software-based ones. Physical ones can be like earthquakes or floodings, fires, things like that that are happening either in your region or can be fairly widespread across the area that you’re in, or software, cyber attacks that are perhaps to your own internal systems, like your system has been compromised. That’s fairly local to you. 

There are two different design strategies there. Physical disaster, you have to have a recover plan that is outside of that physical boundary that you can recover your system from somewhere that’s not affected by that physical disaster. For the recovery in terms of software in terms of your system has been compromised, then the recovery from that is different.

I’m not an expert on cyber attacks and vulnerabilities, but the recovery from there for companies trying to recover from that, they plan for it as much as possible. So they down their systems and try and get patches and fixes to them as quickly as possible and spin the system backups.

[00:08:49] BL: I’m understanding what you’re saying. I’m trying to unpack it for those of us listening who don’t really understand it. I’m going to go through what you said and we’ll unpack it a little bit. Physical from my assumption is we’re running workloads. Let’s say we’re just going to say in a cloud, not on-premise. We’re running workloads in let’s say AWS, and in the United States, we can take care local diversity by running in East and West regions. 

Also, we can take care of local diversity by running in availability, but they don’t reach it, because AWS is guaranteed that AZ1 and AZ3 have different network connections, are not in the same building, and things like that. Would you agree? Do you see that? I mean, this is for everyone out there. I’m going to go from super high-level down to more specific. 

[00:09:39] OP: I personally wouldn’t argue that, except not everybody is on AWS.

[00:09:43] BL: Okay. AWS, or Azure, or Google Cloud, DigitalOcean, or SoftLayer, or Oracle, or Packet. If I thought about this, probably we could do 20 more. 

[00:09:55] JR: IBM.  

[00:09:56] BL: IBM. That’s why I said SoftLayer. They all practice in the physical diversity. They all have different regions that you can deploy software. Whether it’s be data locality, but also for data protection. If you’re thinking about creating a planet for this, this would be something you could think about. Where does my rest? What could happen to that data? Building could actually just fall over on to itself. All the hard drives are gone. What do I do?

[00:10:21] OP: You’re saying that replication is a form of backup? 

[00:10:26] BL: I’m actually saying way more than that. Before you even think about things when it comes to disaster recovery, you got to define what a disaster is. Some applications can actually run out of multiple physical locations.

Let’s go back to my AWS example, because it’s everywhere and everyone understands how AWS works at a high-level. Sometimes people are running things out of US-East-1 and US-West-2, and they could run both of the applications. The reason they can do that is because the individual transactions of whatever they’re doing don’t need to talk to one another. They connect just websites out of places. 

To your point, when you talk about now you have the issue where maybe you’re doing inventory management, because you have a large store and you’re running it out of multiple countries. You’re in the EU and you’re somewhere on APAC as well. What do you do about that? 

Well, there are a couple of ways that – I could think about how we would do that. We could actually just have all the database connections go back to one single main service. Then what we could do with that main service is that we could have it replicated in their local place and then we can replicate it in a remote place too. If the local place goes up, at least you can point all the other sites back to this one. That’s the simplest way. 

The reason I wanted to bring this up, is because I don’t like acronyms all that much, but disaster recovery has two of my favorite ones and they’re called RPO and RTO. Really, what it comes down to is you need to think about when you have a disaster, no matter that disaster is or how you define it, you have RTO. Basically, it’s the time that you can be down before there’s a huge issue. Then you have something called DPO, which is without going into all the names, is how far you can go since your last backup before you have business problems. 

Just thinking about those things is how we should think about our backup disaster recovery, and it’s all based on how your business works or how your project works and how long you can be down and how much data you have. 

[00:12:27] CC: Which goes to what Olive was saying. Please spell out to us what RTO and RPO stand for.  

[00:12:35] BL: I’m going to look them up real quick, because I literally pushed those acronym meanings out. I just know what they mean. 

[00:12:40] OP: I think it’s recovery time objective and recovery data objective. 

[00:12:45] BL: Yeah. I don’t know what the P stands for, but it is for data. 

[00:12:49] OP: Recovery. 

[00:12:51] BL: It’s the recovery points. Yeah. That’s what it is. It is the recovery point objective, RPO; and recovery time objective, RTO. You could tell that I’ve spent a lot of time in enterprise, because we don’t even define words. The acronym means what it is. Do you know what the acronym stands for anymore?  

[00:13:09] OP: How far back in terms of data can we go that was still okay? How far back in time can we be down, basically, until we’re okay? 

[00:13:17] CC: It is true though, and as Josh was saying, some teams or companies or products, especially companies that are starting their journey, their cloud native journey. They don’t have a backup, because there are many complicated things to deal with, and backup is super complicated, I mean, the disaster recovery strategy. Doing that is not trivial. 

But shouldn’t you start with that or at least because it is so complex? It’s funny to me when people say I don’t have that kind of a strategy. Maybe just like what Bryan said why utilizing, spreading out your data through regions, that is a strategy in itself, and there’s more to it.

[00:14:00] JR: Yeah. I think I oversimplified too much. Disaster recovery could theoretically be anything I suppose. Going back to what you were saying, Brian, the recovery aspect of it. Recovery for some of the customers I work with is literally to stand on a brand-new cluster, whatever that cluster is, a cluster, that is their platform. Then redeploy all the applications on top of it. 

That is a recovery strategy. It might not be the most elegant and it might make assumptions about the apps that run on it, but it is a recovery strategy that somewhat simple, simple to kind of conceptualize and get started with. 

I think a lot of the customers that I work with when they’re first getting their bearings with distributed system of sorts, they’re a lot more concerned about solving for high availability, which is what you just said, Carlisia, where we’re spreading across maybe multiple sites. There’s the notion of different parts of the world, but there’s also the idea of like what I think Amazon has coined availability zones. Making sure if there is a disaster, you’re somewhat resilient to that disaster like Brian was saying with moving connections over and so on. 

Then once we’ve done high-availability somewhat well, depending on the workloads that are running, we might try to get a more fancy recovery solution in place. One that’s not just rebuild everything and redeploy, because the downtime might not be acceptable. 

[00:15:19] BL: I’m actually going to give some advice to all the people out there who might be listening to this and thinking about disaster recovery. First of all, all that complex stuff, that book you read, forget about it. Not because you don’t need to know. It’s because you should only think about what’s in scope at any given time. 

When you’re starting an application, let’s say I’m actually making a huge assumption that you’re using someone else’s cloud. You’re using public cloud. Whenever you’re in your data center, there’s a different problem. Whenever you’re using public cloud, think about what you already have. All the major public clouds had a durable object storage. Many 9s of durability and then fewer 9s, but still a lot of 9s of availability too. The canonical example there is S3. When you’re designing your applications and you know that you’re going to have disaster issues, realize that S3 is almost always going to be there, unless it was 2017 and it goes down, or the other two failures that it had. Pretty much, it will be there. Think about how do I get that data into S3. I’m just saying, you can use it for storage. It’s fairly cheap for how much storage you can get. You can make it sure it’s encrypted, and using IM, you can definitely make sure that people who have the right pillages can see it. The same goes with Azure and the same goes with Google. That’s the first phase.

The second phase is that now you’re going to say, “Well, what is a relational database?” Once again, use your cloud provider. All the major cloud providers have great relational databases, and actually key value stores as well. The neat thing about them is you can actually set them up sometimes to run in a whole region. You can set them up to do automated backups. At least the minimum that you have, you actually use your cloud provider for what it’s valuable for. 

Now, you’re not using a cloud provider and you’re doing it on-premise, I’m going to tell you, the simple answer is I hope you have a little bit of money, because you’re going to have to pay somebody either one of Kubernetes architects or you’re going to pay somebody else to do it. There’s no easy button for this kind of solution. 

Just for this little mini-rant, I’m going to leave everyone with the biggest piece of advice, the best piece of advice that I can ever leave you if you’re running relational databases. If you are running a relational database, whether it’d be PostgreS, MySQL, Aurora, have it replicated. But here’s the kicker, have another replica that you delay and make it delay 10 minutes, 15 minutes, not much longer than that. 

Because what’s going to happen, especially in a young company, especially if you’re using Rails or something like that, you’re going to have somebody who is going to have access to production, because you’re a small company, you haven’t really federated this out yet. Who’s going to drop your main database table? They’re just going to do it and it’s going to happen and you’re going to panic. 

If you have it in a replica, that databases go in a replica, you have a 10-minute delay replica – 10 minutes to figure it out before the world ends. Hopefully someone deletes the master database. You’re going to know pretty quickly and you can just cut that replica out, pull that other one over. I’m not going to say where i learned this trick. We had to employ it multiple times, and it saves our butts multiple times. That’s my favorite thing to share. 

[00:18:24] OP: Is that replica on separate system? 

[00:18:26] BL: It was on a separate system. I actually don’t say, because it will be telling on who did it. Let’s say that it was physically separate from the other one in a different location as well. 

[00:18:37] OP: I think we’ve all been there. We’ve all have deleted something that maybe – 

[00:18:41] CC: I’m going to tell who did it. It was me. 

[00:18:45] BL: Oh no! It definitely wasn’t me. 

[00:18:46] OP: We mentioned HA. Will the panel think that there’s now a slightly inverse relationship between the amount of HA that you architect for versus the disaster recovery plan that you have implemented on the back of that? More you’re architecting around HA, like the less you architect or plan for DR. Not eliminating ether of them.

[00:19:08] BL: I see it more.  Mean, it used to be 15 years ago.  

[00:19:11] CC: Sorry. HA, we’re talking about high availability. 

[00:19:15] BL: When you think about high availability, a lot of sites were hosted. This is really before you had public cloud and a lot of people were hosting things on WebHost or they’re hosting themselves. Even if you are a company who had like a big equinox of level 3, you probably didn’t have two facilities at two different equinoxes or level 3, which probably does had one big cage and you just had diversity in the systems in there. 

We found people had these huge tape backups and we’re very diligent about swapping our tapes out. One thing you did was we made sure that – I mean, lots of practice of bringing this huge system down, because we assumed that the database would die and we would just spend a few hours bringing it back up, or days. Now with high availability, we can architect systems where that is less of a problem, because we could run more things that manage our data. Then we can also do high availability in the backend on the database side too. We can do things like multi-writes and multi-reads. We can actually write our data in multiple places. 

What we find when we do this is that the loss of a single database or a slice of processing/webhosts just means that our services degraded, which means we don’t really have a disaster in this point and we’re trying to avoid disasters. 

[00:20:28] JR: I think on that point, the way I’ve always thought about it, and I’ll admit this is super overly simplified, but like successful high availability or HA could make your lead to perform disaster recovery less likely, can, maybe, right? It’s possible.  

[00:20:45] BL: Also realize that everybody is running in public cloud. In that case, well, you can still back your stuff up to public cloud even if you’re not running in public cloud. There are still people out there who are running big tape arrays, and I’ve seen them. I’ve seen tape arrays that are wider. I’m sitting in an 80-inch wide table, bigger than this table with robotic arms and takes the restic and you had to make sure that you got the text right for that particular day doing your implementation. 

I guess what I’m saying is that there is a balance. HA, high availability, if you’re doing it in a truly high available way, you can’t miss whole classes of disaster. But I’m not saying that you will not have disaster, because if that was the case, we won’t be having this discussion right now. 

I’d like to move the conversation just a little bit to more cloud native. If you’re running on Kubernetes, what should you think about for disaster recovery? What are the types of disasters we could have? How could we recover them?

[00:21:39] JR: Yeah. I think one thing that comes to mind, I was actually reading the Kubernetes Best Practices book last night, but I just got an O’Reilly membership. Awesome. Really cool book. One of the things that they had recommended early on, which I thought was a really good pull out is that since Kubernetes is a declarative system where we write these manifests to describe the desired state of our application and how it should run, recommending that we make sure to keep that declarative state in source control, just like we would our code so that if something were to go wrong, it is somewhat more trivial to redeploy the application should we need to recover. That does assume we’re not worried about like data and things like that, but it is a good call out I think. I think the book made a good call out. 

[00:22:22] OP: That’s on the declarative system and enable to bring your systems back up to the exact way they were before kind of itself adds comfort to the whole notion that they could be disaster. If they was, we can spin up backup relatively quickly. That’s back from the days of automation where the guys originally – I came from Red Hat, so fork at Ansible. 

We’re kind of trying to do the infrastructure as a code, being able to deploy, redeploy, redeploy in the same manner as the previous installation, because I’ve been in this game long-time now and I’ve spent a lot of time working with processes in and around building physical servers. That process will get handled over to lots of different teams. It was a huge thing to build these things, to get one of these things built and signed off, because it literally has to pass through the different teams to do their own different bits of things. 

The idea that you would get a language that had the functionality that suited the needs of all those different teams, of the store team, could automate their piece, which they were doing. They just wasn’t interactive with any of the other teams. The network people would automate theirs and the application install people would do their bit. The server OS people would do their bit. 

Having a process that could tie those teams together in terms of a language, so Ansible, Puppet, Chef, those kinds of things try to unite those teams and it can all do your automation, but we have a tool that can take that code and run it as one system end-to-end. At the end of that, you get an up and running system. If you run it again, you get all the systems exactly the same as the previous one. If you run it again, you get another one. 

Reducing the time to build these things plays very importantly into this space. Disaster is only disaster in terms of time, because things break all the time. How that affects you and how quickly you can recover. If you can recover in like seconds, in minutes and it hasn’t affected your business at all, then it wasn’t really a disaster. 

The time it takes you to recover, to build your things back is key. All that automation and then leading on to Kubernetes, which is the next step, I think, this whole declarative, self-healing and implementing the desired state on a regular basis really plays well into this space. 

[00:24:25] CC: That makes me think, I don’t completely understand because I’m not out there architecting people’s systems. The one thing that I do is building this backup tool, which happens to be for Kubernetes. I don’t completely get the limitations and use cases, but my question is, is it enough to have the declarations of how your infrastructure should be in source control? Because what if you’re running applications on the platform and your applications are interacting with a platform, change in the state of the platform. Is that not something that happens? 

Of course, ideally, having those declarations and source control of course is a great backup, but don’t you also want to back up the changes to state as they keep happening?

[00:25:14] BL: Yeah, of course. That has been used for a long-time. That’s how replication works. Literally, you take the change and you push it over the wire and it gets applied to the remote system. The problem is, is that there isn’t just one way to do this, because if you do only transaction-based. If you only do the changes, you need a good base to start with, because you have to apply those changes to something. How do you get that piece? I’m not asking you to answer that. It’s just something to think about. 

[00:25:44] JR: I think you’ve hit a fatal flaw too, Carlisia, and like what that simplified just like having source control model kind of falls over. I think having that declarative kind of stamped out, this is the ideal nature of the world to this deployment and source control has benefits beyond just that of disaster recovery scenario, right? 

For stateless applications especially, like we talked about in the previous podcast, it can actually be all lead potentially, which is so great. Move your CI system over to cluster B. Boom! You’re back up and running. That’s really neat. A lot of our customers we work with, once we get them to a point where they’re at that stage, they then go, “Well, what about all these persisted volumes?” which by the way is evolving on a computer, which is a Kubernetes term. But like what about all these parts on like disk that I don’t want to lose if I lose my cluster? That it totally feeds into why tools like the one you work on are so helpful. Maybe I don’t know if now would be a good time. But maybe, Carlisia, you could expand on that tool. What it tries to solve for? 

[00:26:41] CC: I want to back up a little though. Let’s put aside stateful workloads and volumes and databases. I was talking about the infrastructure itself, the state of the infrastructure. I mean, isn’t that common? I don’t know the answer to this. I might be completely off. Isn’t that common for you to develop a cloud native application that is changing the state of the infrastructure, or is this something that’s not good to do? 

[00:27:05] JR: It’s possible that you can write applications that can change infrastructure, but think about that. What happens when you have bad code? We all have bad code. Our people like to separate those two things. You can still have infrastructure as code, but it’s separated from the application itself, and that’s just to protect your app people from your not app people and vice versa. 

A lot of that is being handled through systems that people are writing right now. You have Ansible from IBM. You have things like HashiCorp and all the things that they’re doing. They have their hosted thing. They have their own premise thing. They have their local thing. People are looking at that problem. 

The good thing is that that problem hasn’t been solved. I guess good and bad at the same time, because it hasn’t been solved. So someone can solve it better. But the bad thing is that if we’re looking for good infrastructure as code software, that has not been solved yet. 

[00:27:57] OP: I think if we’re talking about containerized applications, I think if there was systems that interacted or affected or changed the infrastructure, they would be separate from the applications. As you were saying, Brian, you just expanded a little bit [inaudible 00:28:11] containerized or sandboxed, processes that were running separate to the main application. 

You’re separating out what’s actually running and doing function in terms of application versus systems that have to edit that infrastructure first before that main application runs. They’re two separate things. If you had to restore the infrastructure back to the way it was without rebuilding it, but perhaps have a system whereby if you have something editing the infrastructure, you would always have something that would edit it back. 

If you have the process that runs to stop something, you’d also have a process that start at something. If you’re trying to [inaudible 00:28:45] your applications and if it needs to interact with other things, then that application design should include the consideration of what do I need to do to interact with the infrastructure. If I’m doing something left-wise, I have to do the opposite in equal reaction right-wise to have an effectively clean application. That’s the kind of stuff I’ve seen anyway.

[00:29:04] JR: I think it maybe even fold into a whole other topic that we could even cover on another podcast, which is like the notion of the concern of mutating infrastructure. If you have a ton of hands in those cookie jars and they’re like changing things all over the place, you’re losing that potential single source of declarative truth even, right? It just could become very complicated. I think maybe to the crux of your original point, Carlisia. Hopefully I’m not super off. If that is happening a lot, I think it could actually make recover more complicated, or maybe recovery is not the way to put it, but recreating the infrastructure, if that makes sense.

[00:29:36] BL: Your infrastructure should be deterministic, and that’s why I said you could. I know we talked about this before about having applications modify infrastructure. Think about that. Can and should are two different things. If you have it happen within your application due to input of any kind, then you’re no longer deterministic, unless you can figure out what that input is going to be. Be very careful about that. 

That’s why people split infrastructure as code from their other code. You could still have CI, continuous integration and continuous delivery/deployment for both, but they’re on different pipelines with different release metrics and different monitoring and different validation to make sure they work correctly.

[00:30:18] OP: Application design plays a very important role now, especially in terms of cloud native architecture. We’re talking a lot about microservices. A lot of companies are looking to re-architect their applications. Maybe mistakes that were made in the past, or maybe not mistakes. It’s perhaps a strong word. But maybe things that were allowed in the past perhaps are now best practices going forward. If we’re looking to be able to run things independently of each other, and by definition, applications independent on the infrastructure, that should be factored in into the architecture of those applications going forward. 

[00:30:50] CC: Josh asked me to talk a little bit about Velerao. I will touch up on it quickly. First of all, we’d love to have a whole show just about infrastructure code, GitOps. Maybe that would be two episodes. Velero doesn’t do any backup of the infrastructure itself. It works at the Kubernetes level. We back up the Kubernetes clusters including the volumes. If you have any sort of stateful app attached to a pod that can get backed up as well. 

If you want to restore that to even a different service provider, then the one you backed up from, we have a restic plugin that you can use. It’s embedded in the Velero tool. So you can do that using this plugin. There are few really cool things that I find really cool about Velero is, one, you can do selective backups, which really, really don’t recommend. We recommend you always back up everything, but you can do selective restores. That would be – If you don’t need to restore a whole cluster, why would you do it? You can just do parts of it. 

It’s super simple to use. Why would you not have a backup? Because this is ridiculously simple. You do it through a command line, and we have a scheduler. You can just put your backup on scheduler. Determine the expiration date of each backup. A lot of neat simple features and we are actively developing things all the time. 

Velero is not the only one. It’d be fair to mention, and I’m not a super well versed on the tools out there, but etcd itself has a backup tool. I’m not familiar with any of these other tools. One thing to highlight is that we do everything through the Kubernetes API. That’s for example one reason why we can do selective backup or restores. Yes, you can backup etcd completely yourself, but you have to back up the whole thing. If you’re on a managed service, you wouldn’t be able to do that, because you just wouldn’t have access. 

All the tools like we use to back up to the etcd offers or a service provider. PX-motion. I’m not sure what this is. I’m reading the documentation here. There is this K10 from [inaudible 00:33:13] Canister. I haven’t used any of these tools. [inaudible 00:33:16].

[00:33:17] OP: I just want to say, Velero, the last customer I worked on, they wanted to use Velero in its capacity to be able to back up a whole cluster and then restore that whole cluster on a different cloud provider, as you mentioned. They weren’t thoroughly using it as – Well, they were using it as backup, but their primary function was that they wanted to populate the cluster as it was on a brand-new cloud provider. 

[00:33:38] CC: Yeah. It’s a migration. One thing that, like I said, Velero does, is back up the cluster, like all the Kubernetes objects, because why would we want to do that? Because if you’re declaring – Someone explain to everybody who’s listening, including myself. Some people bring this up and they say, “Well, I don’t need to back up the Kubernetes objects if all of that is declared and I have the declaration is source control. If something happens, I can just do it again.  

[00:34:10] BL: Untrue, because just for any given Kubernetes object, there is a configuration that you created. Let’s say if you’re creating an appointment, you need spec replicas, you need the spec templates, you need labels and selectors. But if you actually go and pull down that object afterwards, what you’ll see is there is other things inside of that object. If you didn’t specify any replicas, you get the defaults or other things that you should get defaults for. 

You don’t want to have a lousy backup and restore, because then you get yourself into a place where if I go back this thing up and then I restore it to a different cluster to actually test it out to see if it works, it will be different. Just keep that in mind when you’re doing that.

[00:34:51] JR: I think it just comes down to knowing exactly what Brian just said, because there certainly are times where when I’m working with a customer, there’s just such a simple use case at the notion of redeploying the application and potentially losing some of those factors that may have mutated overtime. They just shrug to it and go, “Whatever.” 

It is so awesome that tools like Velero and other tools are bridging that gap, and I think to a point that Olive made, not only just backing that stuff up and capturing it state as it was in the cluster, but providing us with a good way to section out one namespace or one group of applications and just move those potentially over and so on. Yeah, it just kind of comes to knowing what exactly are you going to have to solve for and how complex your solution should be. 

[00:35:32] BL: Yeah. We’re getting towards the end, and I wanted to make sure that we talked about testing your backup, because that’s a popular thing here. People take backups. I’ve done my backups, whether I dump to S3, or I have Velero dumping to S3, or I have some other method that is in an invalid backup, it’s not valid until someone comes and takes that backup, restore it somewhere and actually verifies that it works, because there’ll be nothing worse than having yourself in a situation where you need a backup and you’re in some kind of disaster, whether small or large, and going to find out that, “Oh my gosh! We didn’t even backup the important thing.” 

[00:36:11] CC: That is so true. I have only been in this backup world for a minute, but I mean I’ve needed to backup things before. I don’t think I’ve learned this concept after coming here. I think I’ve known this concept. It just became stronger in my mind, so I always tell people, if you haven’t done that restore, you don’t have a backup.

[00:36:29] JR: One thing I love to add on to that concept too is having my customers run like fire drills if they’re open to it. Effectively, having a list of potential terrible things that can happen, from losing a cluster to just like losing an important component. Unlike one person the team, let’s say, once a week or one a month, depending on their tolerance, just chooses something from that list and does it, not in production, but does it. It gives you the opportunity to test everything end-to-end. Did your learning fire off? When you did restore to your points, was the backup valid? Did the application come back online? It’s kind of a lot of like semi-fun, using the word fun loosely there. Fun ways that you can approach it, and it really is a good way to kind of stress test.

[00:37:09] BL: I do have one small follow up on that. You’re doing backups, and no matter how you’re doing them, think about your strategy and then how long to keep data. I mean, whether it’s due to regulation or just physical space and it costs money. You just don’t backup yesterday and then you’d backup again. Backup every day and keep the last 8 days and then, like old school, would actually then have a full backup and keep that for a while just in case, because you never know.

[00:37:37] CC: Good point too. Yeah. I think a lot of what we said goes to what – It was Olive I think who said it first. You have to understand your needs. 

[00:37:46] OP: Yeah, just which bits have different varying degrees of importance in terms of application functionality for your end user. Which bits are absolutely critical and which bits can buy you a little bit more time to recover.

[00:37:58] CC: Yeah. That would definitely vary from product to product. As we are getting into this idea of ephemeral clusters and automation and we get really good at automating things and bringing things back up, is it possible that we get to a point where we don’t even talk about disasters anymore, or you just have to grow, bring this up cluster or this system, and does it even matter why [inaudible 00:38:25]. We’re not going to talk about this aspect, because what I’m thinking is in the past, in a long, long time ago, or maybe not so long time ago. When I was working with application, and that was a disaster, it was a disaster, because it felt like a disaster. Somebody had to go in manually and find out what happened and what to fix and fix it manually. It was complete chaos and stress.

Now if they just like keep rolling and automate it, something goes down, you bring it back up. Do you know what I mean? It won’t matter why. Are we going to talk about this in terms of it was a disaster? Does it even matter what caused it? Maybe it was a – Recovery from a disaster wouldn’t look any different than a planned update, for example.

[00:39:12] BL: I think we’re getting to a place – And I don’t know whether we’re 5 years away or 10 years away or 20 years away, a place where we won’t have the same class of disaster that we have now. Think about where we’ve come over the past 20 years. Over the past 20 years, be basically looked at hardware in a rack is replace. I can think about 1988, 1999 and 2000. We rack a whole bunch of servers, and that server will be special. 

Now, at these scales, we don’t care about that anymore. When a server goes away, we have 50 more just like it. The reason we were able to do that across large platforms is because of Linux. Now with Kubernetes, if Kubernetes keeps on going in the same trajectory, we’re going to basically codify these patterns that makes hardware loss not a thing. We don’t really care if we lose a server. You have 50 more nodes that look just like it. 

We’re going to start having the software – The software is always available. Think about like the Google Spanner. Google Spanner is multi-location, and it can lose notes and it doesn’t lose data, and it’s relational as well. That’s what CockroachDB is about as well, about Spanner, and we’re going into the place where this kind of technology is available for anyone and we’re going to see that we’re not going to have these kinds of disasters that we’re having now. I think what we’ll have now is bigger distributed systems things where we have timing issues and things like that and leader election issues. But I think those cool stuff can’t be phased out at least over the next computing generation.

[00:40:39] OP: It’s maybe more around architectures these days and applications designers and infrastructure architects in the container space and with Kubernetes orchestrating and maintaining your desired state. You’re thinking that things will fail, and that’s okay, because it will go back to the way it was before. The concept of something stopping in mid-run is not so scary anymore, because it would get put back to its state. 

Maybe you might need to investigate if it keeps stopping and starting and Kubernetes keeps bringing it back. The system is actually still fully functional in terms of end users. You as the operator might need to investigate why that’s so. But the actual endpoint is still that your application is still up and running. Things fail and it’s okay. That’s maybe a thing that’s changed from maybe 5 years ago, 10 years ago.

[00:41:25] CC: This is a great conversation. I want to thank everybody, Olive Power, Josh Rosso, Brian Lyles. I’m Carlisia Campos singing off. Make sure to subscribe. This was Episode 8. We’ll be back next week. See you.

[END OF EPISODE]

[0:50:00.3] KN: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
