---
episode_id: 005-cloud-native-infrastructure
episode_number: 5
title: Cloud Native Infrastructure
description: Where does code live and run and what does it mean to create a cloud native infrastructure? Tune in to find out! We also have a conversation about the future of administrative roles in the cloud native space.
notes: This week on The Podlets Podcast, we talk about cloud native infrastructure. We were interested in discussing this because we’ve spent some time talking about the different ways that people can use cloud native tooling, but we wanted to get to the root of it, such as where code lives and runs and what it means to create cloud native infrastructure. We also have a conversation about the future of administrative roles in the cloud native space, and explain why there will always be a demand for people in this industry. We dive into the expense for companies when developers run their own scripts and use cloud services as required, and provide some pointers on how to keep costs at a minimum. Joining in, you’ll also learn what a well-constructed cloud native environment should look like, which resources to consult, and what infrastructure as code (IaC) really means. We compare containers to virtual machines and then weigh up the advantages and disadvantages of bare metal data centers versus using the cloud.
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia 
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Nicholas Lane
      url: https://twitter.com/soggiest
points:
    - A few perspectives on what cloud native infrastructure means.  
    - Thoughts about the future of admin roles in the cloud native space.  
    - The increasing volume of internet users and the development of new apps daily. 
    - Why people in the infrastructure space will continue to become more valuable. 
    - The cost implications for companies if every developer uses cloud services individually. 
    - The relationships between IaC for cloud native and IaC for the could in general. 
    - Features of a well-constructed cloud native environment. 
    - Being aware that not all clouds are created equal and the problem with certain APIs. 
    - A helpful resource for learning more on this topic':' https://www.amazon.com/Cloud-Native-Infrastructure-Applications-Environment/dp/1491984309. 
    - Unpacking what IaC is not and how Kubernetes really works. 
    - Reflecting how it was before cloud native infrastructure, including using tools like vSphere. 
    - An explanation of what containers are and how they compare to virtual machines. 
    - Is it worth running bare metal in the clouds age? Weighing up the pros and cons. 
    - Returning to the mainframe and how the cloud almost mimics that idea. 
    - A list of the cloud native infrastructures we use daily. 
    - How you can have your own “private” cloud within your bare metal data center. 
links:
    - name: VMware RADIO
      url: https://www.vmware.com/radius/vmware-radio-amplifying-ideas-innovation/CoreOS
    - name: Brandon Phillips on LinkedIn
      url: https://www.linkedin.com/in/brandonphilips 
    - name: Kubernetes
      url: https://kubernetes.io/
    - name: Apache Mesos
      url: http://mesos.apache.org
    - name: Ansible
      url: https://www.ansible.com
    - name: Terraform
      url: https://www.terraform.io
    - name: XenServer (Citrix Hypervisor)
      url: https://xenserver.org
    - name: OpenStack
      url: https://www.openstack.org
    - name: Red Hat
      url: https://www.redhat.com/
    - name: Cloud native Infrastructure (book)
      url: https://www.amazon.com/Cloud-Native-Infrastructure-Applications-Environment/dp/1491984309
    - name: Heptio
      url: https://heptio.cloud.vmware.com
    - name: AWS
      url: https://aws.amazon.com
    - name: Azure
      url: https://azure.microsoft.com/en-us/
    - name: vSphere
      url: https://www.vmware.com/products/vsphere.html
    - name: Circuit City 
      url: https://www.circuitcity.com
    - name: Newegg
      url: https://www.newegg.com
    - name: Uber
      url: https://www.uber.com/ 
    - name: Lyft
      url: https://www.lyft.com
# video: https://www.youtube.com/embed/dQw4w9WgXcQ
#related: # appears in sidebar, no limit in related episodes. identify by `episode_id`
#- 001-cloud-native
---

EPISODE 05

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.1] NL: Hello and welcome to episode five of The Podlets Podcast, the podcast where we explore cloud native topics one topic at a time. This week, we’re going to the root of everything, money. No, I mean, infrastructure. My name is Nicholas Lane and joining me this week are Carlisia Campos.

[0:00:59.2] CC: Hi everybody.

[0:01:01.1] NL: And Duffie Cooley.

[0:01:02.4] DC: Hey everybody, good to see you again.

[0:01:04.6] NL: How have you guys been? Anything new and exciting going on? For me, this week has been really interesting, there’s an internal VMware conference called RADIO where we have a bunch of engineering teams across the entire company, kind of get together and talk about the future of pretty much everything and so, have been kind of sponging that up this week and that’s been really interesting to kind of talking about all the interesting ideas and fascinating new technologies that we’re working on.

[0:01:29.8] DC: Awesome.

[0:01:30.9] NL: Carlisia?

[0:01:31.8] CC: My entire team is at RADIO which is in San Francisco and I’m not. But I’m sort of glad I didn’t have to travel.

[0:01:42.8] NL: Yeah, nothing too exciting for me this week. Last week I was on PTO and that was great so this week it has just been kind of getting spun back up and I’m getting back into the swing of things a bit.

[0:01:52.3] CC: Were you spun back up with a script?

[0:01:57.1] NL: Yeah, I was.

[0:01:58.8] CC: With infrastructure I suppose?

[0:02:00.5] NL: Yes, absolutely. This week on The Podlets Podcast, we are going to be talking about cloud native infrastructure. Basically, I was interested in talking about this because we’ve spent some time talking about some of the different ways that people can use cloud native tooling but I wanted to kind of get to the root of it. Where does your code live, where does it run, what does it mean to create cloud native infrastructure?

Start us off, you know, we’re going to talk about the concept. To me, cloud native infrastructure is basically any infrastructure tool or service that allows you to programmatically create infrastructure and by that I mean like your compute nodes, anything running your application, your networking, software defined networking, storage, Seth, object store, dev sort of thing, you can just spin them up in a programmatical in contract way and then databases as well which is very nice.

Then I also kind of lump in anything that’s like a managed service as part of that. Going back to databases if you use like difference and they have their RDS or RDB tooling that provides databases on the fly and then they manage it for you. Those things to me are cloud native infrastructure. Duffy, what do you think?

[0:03:19.7] DC: Year, I think it’s definitely one of my favorite topics. I spent a lot of my career working with infrastructure one way or the other, whether that meant racking servers in racks and doing it the old school way and figuring out power budgets and you know, dealing with networking and all of that stuff or whether that meant, finally getting to a point where I have an API and my customer’s going to come to me and say, I need 10 new servers, I can be like, one second. Then run all the script because they have 10 new servers versus you know, having to order the hardware, get the hardware delivered, get the hardware racked.

Replace the stuff that was dead on arrival, kind of go through that whole process and yeah. Cloud native infrastructure or infrastructure as a service is definitely near and dear to my heart.

[0:03:58.8] CC: How do you feel about if you are an admin? You work from VMware and you are a field engineer now. You’re basically a consultant but if you were back in that role of an admin at a company and you had the company was practicing cloud native infrastructure things. Basically, what we’re talking about is we go back to this theme of self-sufficiency a lot. I think we’re going to be going back to this a lot too, as we go through different topics. 

Mainly, someone was a server in that environment now, they can run an existing script that maybe you made it for them. But do you have concerns that your job is redundant now that you can just one script can do a lot of your work?

[0:04:53.6] NL Yeah, in the field engineering org, we kind of have this mantra that we’re trying to automate ourselves out of a job. I feel like anyone who is like really getting into cloud native infrastructure, that is the path that they’re taking as well. If I were an admin in a world that was like hybrid or anything like that, they had like on prem or bare metal infrastructure and they had cloud native infrastructure. I would be more than ecstatic to take any amount of the administrative work of like spinning up new servers in the cloud native infrastructure.

If the people just need somewhere they can go click, I got whatever services I need and they all work together because the cloud makes them work together, awesome. That gives me more time to do other tasks that may be a bit more onerous or less automated. I would be all for it.

[0:05:48.8] CC: You’re saying that if you are – because I don’t want the admin people listening to this to stop listening and thinking, screw this. You’re saying, if you’re an admin, there will still be plenty of work for you to do?

[0:06:03.8] NL: Year, there’s always stuff to do I think.  If not, then I guess maybe it’s time to find somewhere else to go.

[0:06:12.1] DC: There was a really interesting presentation that really stuck with me when I was working for CoreOS which is another infrastructure company, it was a presentation by our CTO, his name is Brandon Philips and Brandon put together a presentation around the idea that every single day, there are you know, so many thousand new users of the Internet coming online for the first time. 

That’s so many thousand people who are like going to be storing their photos there, getting emails, doing all those things that we do in our daily lives with the Internet. That globally, across the whole world, there are only about, I think it was like 250k or 300,000 people that do what we do, that understand the infrastructure at a level that they might even be able to automate it, you know? 

That work in the IT industry and are able to actually facilitate the creation of those resources on which all of those applications will be hosted, right? This isn’t even taking into account, the number of applications per day that are brought into the Internet or made available to users, right? That in itself is a whole different thing. How many people are putting up new webpages or putting up new content or what have you every single day. 

Fundamentally, I think that we have to think about the problem in a slightly different way, this isn’t about whether we will have jobs, it’s about how, when we are so outnumbered, how do we as this relatively small force in the world, handle the demand that is coming, that is already here today, right? 

Those people that are listening, who are working infrastructure today, you’re even more valuable when you think about it in those terms because there just aren’t enough people on the planet today to solve those problems using the tools that we are using today, right?

Automation is king and it has been for a long time but it’s not going anywhere, we need the people that we have to be able to actually support much larger numbers or bigger scale of infrastructure than they know how to do today. That’s the problem that we have to solve.

[0:08:14.8] NL: Yeah, totally.

[0:08:16.2] CC: Looking from the perspective of whoever is paying the bills. I think that in the past, as a developer, you had to request a server to run your app in the test environment and eventually you’ll get it and that would be the server that everybody would use to run against, right? Because you’re the developer in the group and everybody’s developing different features and that one server is what we would use to push out changes to and do some level of manual task or maybe we’ll have a QA person who would do it.

That’s one server or one resource or one virtual machine. Now, maybe I’m wrong but as a developer, I think what I’m seeing is I will have access to compute and storage and I’ll run a script and I boot up that resource just for myself. Is that more or less expensive? You know? If every single developer has this facility to speed things up much quicker because we’re not depending on IT and if we have a script. I mean, the reality is not as easy like just, well command and you get it but – 

If it’s so easy and that’s what everybody is doing, doesn’t it become expensive for the company?

[0:09:44.3] NL: It can, I think when cloud native infrastructure really became more popular in the workplace and became more like mainstream, there was a lot of talk about the concept of sticker shock, right? It’s the idea of you had this predictable amount of money that was allocated to your infrastructure before, these things cost this much and their value will degrade over time, right?

The server you had in 2005 is not going to be as valuable as the server you buy in 2010 but that might be a refresh cycles like five years or so. But you have this predictable amount of money. Suddenly, you have this script that we’re talking about that can spin up in equivalent resource as one of those servers and if someone just leaves it running, that will run for a long time and so, irresponsible users of the cloud or even just regular users of cloud, it does cost a lot of money to use any of these cloud services or it can cost a lot of money.

Yes, there is some concern about the amount of money that these things cost because honestly, as we’re exploring cloud native topics. One thing keeps coming up is that cloud really just means, somebody else’s computer, right? You’re not using the cost of maintenance or the time it takes to maintain things, somebody else is and you’re paying that price upfront instead of doing it on like a yearly basis, right?

It’s less predictable and usually a bit more than people are expected, right? But there is value there as well.

[0:11:16.0] CC: You’re saying if the user is diligent enough to terminate clusters or the machine, that is how you don’t rack up unnecessary cost?

[0:11:26.6] NL: Right For a test, like say you want to spin up your code really quickly and just need to – a quick like setup like networking and compute resources to test out your code and you spin up a small, like a tiny instance somewhere in one of the clouds, test out your code and then kill the instance. That won’t cost hardly anything.

It didn’t really cost you much on time either, right? You had this automated process hopefully or had a manual process that isn’t too onerous and you get the resource and the things you needed and you’re good. If you aren’t a good player and you keep it going, that can get very expensive very quickly. Because It’s a number of resources used per hour I think is how most billing happens in the cloud.

That can exponentially – I mean, they’re not really exponentially grow but it will increase in time to a value that you are not expecting to see. You get a billing and you’re like holy crap, what is this?

[0:12:26.9] DC: I think it’s also – I mean, this is definitely where things like orchestration come in, right? With the level of obstruction that you get from things like Kubernetes or Mesos or some other tools, you’re able to provide access to those resources in a more dynamic way with the expectation and sometimes one of the explicit contract, that work load that you deploy will be deployed on common equipment, allowing for things like Vin packing which is a pretty interesting term when it comes to infrastructure and means that you can think of the fact that like, for a particular cluster.

I might have 10 of those VMs that we talk about having high value. I attended to those running and then my goal is to make sure that I have enough consumers of those 10 nodes to be able to get my value out of it and so when I split up the environments, we did a little developer has a main space, right?

This gets me the ability to effectively over subscribe those resources that I’m paying for in a way that will reduce the overall cost of ownership or cost of – not ownership, maybe cost of operation for those 10 nodes. Let’s take a step back and go down a like memory lane.

[0:13:34.7] NL: When did you first hear about the concept of IAS or cloud native infrastructure or infrastructure as code? Carlisia?

[0:13:45.5] CC: I think in the last couple of years, same as pretty much coincided with when I started to – you need to cloud native and Kubernetes. I’m not clear on the difference between the infrastructure as code for cloud native versus infrastructure as code for the cloud in general.

Is there anything about cloud native that has different requirements and solutions? Are we just talking about, is the cloud and the same applies for cloud native?

[0:14:25.8] NL: Yes, I think that they’re the same thing. Cloud, like infrastructure is code for the cloud is inherently cloud native, right? Cloud native just means that whatever you’re trying to do, leverages the tools and the contracts that a cloud provides. The basic infrastructure as code is basically just how do I use the cloud and that’s – 

[0:14:52.9] CC: In an automated way.

[0:14:54.7] NL: In an automated way or just in a way, right? A properly constructed cloud should have a user interface of some kind, that uses an API, right? A contract to create these machines or create these resources. So that the way that it creates its own resources is the same that you create the resource if you programmatically do it right. 

Orchestration tool like Ansible or Terraform. The API calls that itself makes and its UI needs to be the same and if we have that then we have a well-constructed cloud native environment.

[0:15:32.7] DC: Yeah, I agree with that. I think you know, from the perspective of cloud infrastructure or cloud native infrastructure, the goal is definitely to have – it relies on one of the topics that we covered earlier in a program around the idea of API first or API driven being such an intrinsic quality of any cloud native architecture, right? 

Because, fundamentally, if we can’t do it programmatically, then we’re kind of stuck in that old world of wrecking servers or going through some human managed process and then we’re right back to the same state that we were in before and there’s no way that we can actually scale our ability to manage these problems because we’re stuck in a place where it’s like one to one rather than one to many.
 
[0:16:15.6] NL: Yeah, those API’s are critical.

[0:16:17.4] DC: The API’s are critical.

[0:16:18.4] NL: You bring up a good point, reminder of something. Not every cloud that you’re going to run into is made the same. There are some clouds that exist and I’m not going to specifically call them out but there are some clouds that exist that the API is people. Using their request and a human being interprets your request and makes the changes. That is a big no-no. Me no like, no good, my brain stopped.

That is a poorly constructed cloud native environment. In fact, I would say it is not a cloud native environment at all, it can barely call itself a cloud and sentence. Duffie, how about you? When was the first time you heard the concept of cloud native infrastructure?

[0:17:01.3] DC: I’m going to take this question in a form of like, what was the first programmatic infrastructure of those service that I played with. For me, that was actually like back in the Nicera days when we were virtualizing the network and effectively providing and building an API that would allow you to create network resources and a different target that we were developing for where things like XenServer which the time had a reasonable API that would allow you to create virtual machines but didn’t really have a good virtual network solution.

There were also technologies like KVM, the ability to actually use KVM to create virtual machines. Again, with an API and then, although, in KVM, it wasn’t quite the same as an API, that’s kind of where things like OpenStack and those technologies came along and kind of wrapped a lot of the capability of KVM behind a restful API which was awesome. But yeah, I would say, XenServer was the first one and that gave me the ability to – like a command line option with which I could stand up and create virtual machines and give them so many resources and all that stuff.

You know, from my perspective, it was the Nicera was the first network API that I actually ever saw and it was also one of the first ones that I worked on which was pretty neat.

[0:18:11.8] CC: When was that Duffie?

[0:18:13.8] DC: Some time ago. I would say like 2006 maybe?

[0:18:17.2] NL: The TVs didn’t have color back then.

[0:18:21.0] DC: Hey now.

[0:18:25.1] NL: For me, for sort of cloud native infrastructure, it reminded me, it was the open stack days I think it was really when I first heard the phrase like I – infrastructure as a service. At the time, I didn’t even get close to grocking it. I still don’t know if I grock it fully but I was working at Red Hat at the time so this was probably back in like 2012, 2013 and we were starting to leverage OpenStack more and having like this API driven toolset that could like spin up these VMs or instances was really cool to me but it’s something I didn’t really get into using until I got into Kubernetes and specifically Kubernetes on different clouds such as like AWS or AS Ram.

We’ll touch on those a little bit later but it was using those and then having like a CLI that had an API that I could reference really easily to spin things up. I was like, holy crap, this is incredible. That must have been around like the 2015, 16 timeframe I think.

I think I actually heard the phrase cloud native infrastructure first from our friend Kris Nova’s book, Cloud Native Infrastructure. I think that really helped me wrap my brain around really what it is to have something be like cloud native infrastructure, how the different clouds interact in this way. I thought that was a really handy book, I highly recommend it. Also, well written and interesting read.

[0:19:47.7] CC: Yes, I read it back to back and when I joined what I have to, I need to read it again actually.

[0:19:53.6] NL: I agree, I need to go back to it. I think we’ve touched on something that we normally do which is like what does this topic mean to us. I think we kind of touched on that a bit but if there’s anything else that you all want to expand upon? Any aspect of infrastructure that we’ve not touched on?

[0:20:08.2] CC: Well, I was thinking to say something which is reflects my first encounter with Kubernetes when I joined Heptio when it was started using Kubernetes for the very first time and I had such a misconception of why Kubernetes was. I’m saying what I’m going to say to touch base on what I want to say – I wanted to relate what infrastructure as code is not.

[0:20:40.0] NL: That’s’ a very good point actually, I like that.

[0:20:42.4] CC: Maybe, what Kubernetes now, I’m not clear what it is I’m going to say. Hang with me. It’s all related. I work from Valero, Valero is out, they run from Kubernetes and so I do have to have Kubernetes running for me to run Valero so we came on my machine or came around on the cloud provider and our own prem just for the pluck. 

For Kubernetes to run, I need to have a cluster running. Not one instance because I was used to like yeah, I could bring up an instance or an instance or two. I’ve done this before but bringing up a cluster, make sure that everything’s connected. I was like, then this. When I started having to do that, I was thinking. I thought that’s what Kubernetes did. Why do I have to bother with this?

Isn’t that what Kubernetes supposed to do, isn’t it like just Kubernetes and all of that gets done? Then I had that realization, you know, that encounter where reality, no, I still have to boot up my infrastructure. That doesn’t go away because we’re doing Kubernetes. Kubernetes, this abstraction called that sits on top of that infrastructure. Now what? Okay, I can do it manually while DJIK has a great episode where Joe goes and installs everything by hand, he does thing like every single thing, right? Every single step that you need to do, hook up the network KP’s.

It’s brilliant, it really helps you visualize what happens when all of the stuff, how all the stuff is brought up because ideally, you’re not doing that by hand which is what we’re talking about here. I used for example, cloud formation on AWS with a template that Heptio also has in partnership with AWS, there is a template that you can use to bring up a cluster for Kubernetes and everything’s hooked up, that proper networking piece is there.

You have to do that first and then you have Kubernetes installed as part of that template. But the take home lesson for me was that I definitely wanted to do it using some sort of automation because otherwise, I don’t have time for that.

[0:23:17.8] DC: Ain’t nobody got time for that, exactly.

[0:23:19.4] CC: Ain’t got no time for that. That’s not my job. My job is something different. I’m just boarding these stuff up to test my software. Absolutely very handy and if you put people is not working with Kubernetes yet. I just wanted to clarify that there is a separation and the one thing is having your infrastructure input and then you have installed Kubernetes on top of that and then you know, you might have, your application running in Kubernetes or you can have an external application that interacts with Kubernetes.

As an extension of Kubernetes, right? Which is what I – the project that I work on.

[0:24:01.0] NL: That’s a good point and that’s something we should dive into and I’m glad that you brought this up actually, that’s a good example of a cloud native application using the cloud native infrastructure. Kubernetes has a pretty good job of that all around and so the idea of like Kubernetes itself is a platform. You have like a platform as a service that’s kind of what you’re talking about which is like, if I spin up.

I just need to spin up a Kubernetes and then boom, I have a platform and that comes with the infrastructure part of that. There are more and more to like, of this managed Kubernetes offerings that are coming out that facilitate that function and those are an aspect of cloud native infrastructure. Those are the managed services that I was referring to where the administrators of the cloud are taking it upon themselves to do all that for you and then manage it for you and I think that’s a great offering for people who just don’t want to get into the weeds or don’t want to worry about the management of their application. Some of these like – 

For instance, databases. These managed services are awesome tool and going back to Kubernetes a little bit as well, it is a great show of how a cloud native application can work with the infrastructure that it’s on. For instance, when Kubernetes, if you spin up a service of type load balancer and it’s connected to a cloud properly, the cloud will create that object inside of itself for you, right? A load balancer in AWS is an ELB, it’s just a load balancer in Azure and I’m not familiar with the other terms that the other clouds use, they will create these things for you.

I think that the dopest thing on the planet, that is so cool where I’m just like, this tool over here, I created it I n this thing and it told this other thing how to make that work in reality.

[0:25:46.5] DC: That is so cool. Orchestration magic.

[0:25:49.8] NL: Yeah, absolutely.

[0:25:51.6] DC: I agree, and then, actually, I kind of wanted to make a point on that as well which is that, I think – the way I interpreted your original question, Carlisia was like, “What is the difference perhaps between these different models that I call the infrastructure-esque code versus a plat… you know or infrastructure as a service versus platform as a service versus containers as a service like what differentiates these things and for my part, I feel like it is effectively an evolution of the API like what the right entry point for your consumer is. So in the form, when we consider container orchestration. 

We consider things like middle this in Kubernetes and technologies like that. We make the assumption that the right entry point for that user is an API in which they can define those things that we want to orchestrate. Those containers or those applications and we are going to provide within the form of that platform capability like you know, service discovery and being able to handle networking and do all of those things for you. So that all you really have to do is to find like what needs to be deployed. 

And what other services they need to rely on and away you go. Whereas when you look at infrastructure of the service, the entry point is fundamentally different, right? We need to be thinking about what the infrastructure needs to look at like I would might ask an infrastructure as a service API how man machines I have running and what networks they are associated with and how much memory and disk is associated with each of those machines. 

Whereas if I am interacting with a platform as a service, I might ask whatever the questions about those primitives that are exposed by their platform, how many deployments do I have? What name spaces do I have access to do? How many pods are running right now versus how many I ask that would be running? Those questions capabilities. 

[0:27:44.6] NL: Very good point and yeah I am glad that we explored that a little bit and cloud native infrastructure is not nothing but it is close to useless without a properly leveraged cloud native application of some kind. 

[0:27:57.1] DC: These API’s all the way down give you this true flexibility and like the real functionality that you are looking for in cloud because as a developer, I don’t need to care how the networking works or where my storage is coming from or where these things are actually located. What the API does any of these things. I want someone to do it for me and then API does that, success and that is what cloud native structure gets even. 

Speaking of that, the thing that you don’t care about. What was it like before cloud? What do we have before cloud native infrastructure? The things that come to mind are the things like vSphere. I think vSphere is a bridge between the bare metal world and the cloud native world and that is not to say that vSphere itself is not necessarily cloud native but there are some limitations. 

[0:28:44.3] CC: What is vSphere? 

[0:28:46.0] DC: vSphere is a tool that VMware has created a while back. I think it premiered back in 2000, 2000-2001 timeframe and it was a way to predictably create and manage virtual machines. So in virtual machine being a kernel that sits on top of a kernel inside of a piece of hardware. 

[0:29:11.4] CC: So is vSphere two virtual machines where to Kubernetes is to containers? 

[0:29:15.9] DC: Not quite the same thing I don’t think because fundamentally, the underlying technologies are very different. Another way of explaining the difference that you have that history is you know, back in the day like 2000, 90s even currently like what we have is we have a layer of people who are involved in dealing with physical hardware. They rack 10 or 20 servers and before we had orchestration and virtualization and any of those things, we would actually be installing an operating system and applications on those servers. 

Those servers would be webservers and those servers will be database servers and they would be a physical machine dedicated to a single task like a webserver or database. Where vSphere comes in and XenServer and then KVM and those technologies is that we think about this model fundamentally differently instead of thinking about it like one application per physical box. We think about each physical box being able to hold a bunch of these virtual boxes that look like virtual machines. 

And so now those virtual machines are what we put our application code. I have a virtual machine that is a web server. I have a virtual machine that is a database server. I have that level of abstraction and the benefit of this is that I can get more value out of those hardware boxes than I could before, right? Before I have to buy one box or one application, now I can buy one box for 10 or 20 applications. When we take that to the next level, when we get to container orchestration. 

We realized, “You know what? Maybe I don’t need the full abstraction of a machine. I just need enough of an abstraction to give me enough, just enough isolation back and forth between those applications such that they have their own file system but they can share the kernel but they have their own network” but they can share the physical network that we have enough isolation between them but they can’t interact with each other except for when intent is present, right? 

That we have that sort of level of abstraction. You can see that this is a much more granular level of abstraction and the benefit of that is that we are not actually trying to create a virtual machine anymore. We are just trying to effectively isolate processes in a Linux kernel and so instead of 20 or maybe 30 VMs per physical box, I can get a 110 process all day long you know on a physical box and again, this takes us back to that concept that I mentioned earlier around bin packing. 

When we are talking about infrastructure, we have been on this eternal quest to make the most of what we have to make the most of that infrastructure. You know, how do we actually – what tools and tooling that we need to be able to see the most efficiency for the dollar that we spend on that hardware? 

[0:32:01.4] CC: That is simultaneously a great explanation of container and how containers compare with virtual machines, bravo. 

[0:32:11.6] DC: That was really low crap idea that was great. 

[0:32:14.0] CC: Now explain vSphere please I still don’t understand it. I don’t know what it does. 

[0:32:19.0] NL: So vSphere is the one that creates the many virtual machines on top of a physical machine. It gives you the capability of having really good isolation between these virtual machines and inside of these virtual machines you feel like you have like a metal box but it is not a metal box it is just a process running on a metal box. 

[0:32:35.3] CC: All right, so it is a system that holds multiple virtual machines inside the same machine. 

[0:32:41.8] NL: Yeah, so think of it in the cloud native like infrastructure world, vSphere is essentially the API or you could think of it as the cloud itself, which is in the sense an AWS but for your datacenter. The difference being that there isn’t a particularly useful API that vSphere exposes so it makes it harder for people to programmatically leverage, which makes it difficult for me to say like vSphere is a cloud native app like tool. 

It is a great tool and it has worked wonders and still works wonders for a lot of companies throughout the years but I would hesitate to lump into a cloud native functionality. So prior to cloud native or infrastructures and service, we had these tools like vSphere, which allowed us to make smaller and smaller VMs or smaller and smaller compute resources on a larger compute resource and going back to something, we’re talking about containers and how you spin up these processes. 

Prior to things that containers and in this world of VM’s a lot of times what you do is you would create a VM that had your application already installed into it. It is burnt into the image so that when that VM stood up it would spin up that process. So that would be the way that you would start processes. The other way would be through orchestration tools similar to Ansible but they existed right or Ansible. That essentially just ran SSH on a number of servers to startup tools like these processes and that is how you’d get distributed systems prior to things like cloud native and containers.

[0:34:20.6] CC: Makes sense. 

[0:34:21.6] NL: And so before we had vSphere we already had XenServer. Before we had virtual machine automation, which is what these tools are, virtual machine automation we had bare metal. We just had joes like Duffie and me cutting our hands on rack equipment. A server was never installed properly unless my blood is on it essentially because they are heavy and it is all metal and it sharpens some capacity and so you would inevitably squash a hand or something. 

And so you’d rack up the server and then you’d plug in all the things, plug in all the plugs and then set it up manually and then it is good to go and then someone can use it at will or in a logical manner hopefully and that is what we had to do before. It’s like, “Oh I need a new compute resource” okay well, let us call Circuit City or whoever, let us call Newegg and get a new server in and there you go” and then there is a process for that and yeah I think, I don’t know I’m dying of blood loss anymore. 

[0:35:22.6] CC: And still a lot of companies are using bare metal as a matter of course, which brings up another question, if one would want to ask, which is, is it worth it these days to run bare metal if you have the clouds, right? One example is we see companies like Uber, Lyft, all of these super high volume companies using public clouds, which is to say paying another company for all the data, traffic of data, storage of data in computes and security and everything. 

And you know one could say, you would save a ton of money to have that in house but using bare metal and other people would say there is no way that this costs so much to host all of that. 

[0:36:29.1] NL: I would say it really depends on the environment. So usually I think that if a company is using only cloud native resources to begin with, it is hard to make the transition into bare metal because you are used to these tools being in place. 

A company that is more familiar like they came from a bare metal background and moved to cloud, they may leverage both in a hybrid fashion well because they should have tooling or they can now create tooling so that they can make it so that their bare metal environment can mimic the functionality of the cloud native platform, it really depends on the company and also the need of security and data retention and all of these thing to have like if you need this granularity of control bare metal might be a better approach because of you need to make sure that your data doesn’t leave your company in a specific way putting it on somebody else’s computer probably isn’t the best way to handle that. 

So there is a balancing act of how much resources are you using in the cloud and how are you using the cloud and what does that cost look like versus what does it cost to run a data center to like have the physical real estate and then have like run the electricity VH fact, people’s jobs like their salaries specifically to manage that location and your compute and network resources and all of these things. That is a question that each company will have to ask. 

There is normally like hard and fast answer but many smaller companies something like the cloud is better because you don’t have to like think of all these other costs associated with running your application. 

[0:38:04.2] CC: But then if you are a small company. I mean if you are a small company it is a no brainer. It makes sense for you to go to the clouds but then you said that it is hard to transition from the clouds to bare metal. 

[0:38:17.3] NL: It can and it really depends on the people that you have working for you. Like if the people you have working for you are good and creating automation and are good and managing infrastructure of any kind, it shouldn’t be too bad but as we’re moving more and more into a cloud focused world, I wonder if those people are going to start going away. 

[0:38:38.8] CC: For people who are just listening on the podcast, Duffie was heavily nodding as Nick was saying that. 

[0:38:46.5] DC: I was. I do, I completely agree with the statement that it depends on the people that you have, right? And fundamentally I think the point I would add to this is that Uber or a company like Uber or a company like Lyft, how many people do they employ that are focused on infrastructure, right? And I don’t know the answer to this question but I am positioning it, right? And so, if we assume that they have – that this is a pretty hot market for people who understand infrastructure. 

So they are not going to have a ton of them, so what specific problems do they want those people that they employ that are focused on infrastructure to solve right? And we are thinking about this as a scale problem. I have 10 people that are going to manage the infrastructure for all of the applications that Uber has, maybe have 20 people but it is going to be a percentage of the people compared to the number of people that I have maybe developing for those applications or for marketing or for within the company. 

I am going to have, I am going to be, I am going to quickly find myself off balance and then the number of applications that I need to actually support that I need to operationalize to be able to get to be deployed, right? Versus the number of people that I have doing the infrastructure work to provide that base layer for which problems in application will be deployed, right? I look around in the market and I see things like orchestration. I see things like Kubernetes and Mezos and technologies like that. 

That can provide kind of a multiplier or even AWS or Azure or GCP. I have these things act as a multiplier for those 10 infrastructure pull that I have, right? Because no – they are not looking at trying to figure out how to store it, you know get this data. They are not worried about data centers, they are not worried about servers, they are not worried about networking, right? They can actually have ten people that are decent at infrastructure that can expand, that can spin up very large amounts of infrastructure to satisfy the developing and operational need of a company the size of Uber reasonably.

But if we had to go back to a place where we had to do all of that in the physical world like rack those servers, deal with the power, deal with the cool low space, deal with all the cabling and all of that stuff, 10 people are probably not enough. 

[0:40:58.6] NL: Yeah, absolutely. I put into numbers like if you are in the cloud native workspace you may need 1% of your workforce dedicated to infrastructure, but if you are in the bare metal world, you might need 10 to 20% of your workforce dedicated just to running infrastructure. because the overtly overhead of people’s work is so much greater and a lot of it is focused on things that are tangible instead of things that are fundamental like automation, right? 

So those 1% or Uber if I am pulling this number totally out of nowhere but if that one percent, their job is to usually focus around automating the allocation of resources and figuring out like the tools that they can use to better leverage those clouds. In the bare metal environment, those people’s jobs are more like, “Oh crap, suddenly we are like 90 degrees in the data center in San Jose, what is going on?” and then having someone go out there and figuring out what physical problem is going on. 

It is like their day to day lives and something I want to touch on really quickly as well with bare metal, prior to bare metal we had something kind of interesting that we were able to leverage from an infrastructure standpoint and that is mainframes and we are actually going back a little bit to the mainframe idea but the idea of a mainframe, it is essentially it is almost like a cloud native technology but not really. So instead of you using whatever like you are able to spin up X number of resources and networking and make that work. 

With the mainframe at work is that everyone use the same compute resource. It was just one giant compute resource. There is no networking native because everyone is connected with the same resource and they would just do whatever they needed, write their code, run it and then be done with it and then come off and it was a really interesting idea I think where the cloud almost mimics a mainframe idea where everyone just connects to the cloud. 

Does whatever they need and then comes off but at a different scale and yeah, Duffie do you have any thoughts on that? 

[0:43:05.4] DC: Yeah, I agree with your point. I think it is interesting to go back to mainframe days and I think from the perspective of like what a mainframe is versus like what the idea of a cluster in those sorts of things are is that it is kind of like the domain of what you’re looking at. Mainframe considers everything to be within the same physical domain whereas like when you start getting into the larger architectures or some of the more scalable architectures you find that just like any distributed system we are spreading that work across a number of physical nodes. 

And so we think about it fundamentally differently but it is interesting the parallels between what we do, the works that we are doing today versus what we are doing in maintain times. 

[0:43:43.4] NL: Yeah, cool. I think we are getting close to a wrap up time but something that I wanted to touch on rather quickly, we have mentioned these things by names but I want to go over some of like the cloud native infrastructures that we use on a day to day basis. So something that we don’t mention them before but Amazon’s AWS is pretty much the number one cloud, I’m pretty sure, right? That is the most number of users and they have a really well structured API. 

A really good seal eye, peace and gooey, sometimes there is some problems with it and it is the thing that people think of when they think cloud native infrastructure. Going back to that point again, I think that AWS was agreed, AWS is one of the largest cloud providers and has certainly the most adoption as an infrastructure for cloud native infrastructure and it is really interesting to see a number of solutions out there. IBM has one, GCP, Azure, there are a lot of other solutions out there now. 

That are really focused on trying to follow the same, it could be not the same exact patterns that AWS has but certainly providing this consistent API for all of the same resources or for all of the same services serving and maybe some differentiating services as well. So it is yeah, you could definitely tell it is sort of like for all the leader. You can definitely tell that AWS stumbled onto a really great solution there and that all of the other cloud providers are jumping on board trying to get a piece of that as well. 

[0:45:07.0] DC: Yep. 

[0:45:07.8] NL: And also something we can touch on a little bit as well but from a cloud native infrastructure standpoint, it isn’t wrong to say that a bare metal data center can be a cloud native infrastructure. As long as you have the tooling in place, you can have your own cloud native infrastructure, your own private cloud essentially and I know that private cloud doesn’t actually make any sense. That is not how cloud works but you can have a cloud native infrastructure in your own data center but it takes a lot of work. 

And it takes a lot of management but it isn’t something that exists solely in the realm of Amazon, IBM, Google or Microsoft and I can’t remember the other names, you know the ones that are running as well. 

[0:45:46.5] DC: Yeah agreed and actually one of the questions you asked, Carlisia, earlier that I didn’t get a chance to answer was do you think it is worth running bare metal today and in my opinion the answer will always be yes, right? Especially as we think about like it is a line that we draw in the sand is container isolation or container orchestration, then there will always be a good reason to run on bare metal to basically expose resources that are available to us against a single bare metal instance. 

Things like GPU’s or other physical resources like that or maybe we just need really, really fast disk and we want to make sure that we like provide those containers to access to SSDs underlying and there is technology certainly introduced by VMware that expose real hardware from the underlying hype riser up to the virtual machine where these particular containers might run but you know the question I think you – I always come back to the idea that when thinking about those levels of abstraction that provide access to resources like GPU’s and those sorts of things, you have to consider that simplicity is king here, right? 

As we think about the different fault domains or the failure domains as we are coming up with these sorts of infrastructures, we have to think about what would it look like when they fail or how they fail or how we actually go about allocating those resources for ticket of the machines and that is why I think that bare metal and technologies like that are not going away. 

I think they will always be around but to the next point and I think as we covered pretty thoroughly in this episode having an API between me and the infrastructure is not something I am willing to give up. I need that to be able to actually to solve my problems at scale even reasonable scale. 

[0:47:26.4] NL: Yeah, you mean you don’t want to go back to the battle days of around tell netting into a juniper switch and Telnet – setting up your IP – not IP tables it was your IP comp commands. 

[0:47:39.9] DC: Did you just say Telnet? 

[0:47:41.8] NL: I said Telnet yeah or serial, serial connect into it. 

[0:47:46.8] DC: Nice, yeah. 

[0:47:48.6] NL: All right, I think that pretty much covers it from a cloud native infrastructure. Do you all have any finishing thoughts on the topic? 

[0:47:54.9] CC: No, this was great. Very informative. 

[0:47:58.1] DC: Yeah, I had a great time. This is a topic that I very much enjoy. It is things like Kubernetes and the cloud native infrastructure that we exist in is always what I wanted us to get to. When I was in university this was I’m like, “Oh man, someday we are going to live in a world with virtual machines” and I didn’t even have the idea of containers but people can real easily to play with applications like I was amazed that we weren’t there yet and I am so happy to be in this world now. 

Not to say that I think we can stop and we need to stop improving, of course not. We are not at the end of the journey by far but I am so happy we’re at where we are at right now. 

[0:48:34.2] CC: As a developer I have to say I am too and I had this thought in my mind as we are having this conversation that I am so happy too that we are where we are and I think well obviously not everybody is there yet but as people start practicing the cloud native development they will come to realize what is it that we are talking about. I mean I said before, I remember the days when for me to get access to a server, I had to file a ticket, wait for somebody’s approval. 

Maybe I won’t get an approval and when I say me, I mean my team or one of us would do the request and see that. Then you had that server and everybody was pushing to the server like one the main version of our app would maybe run like every day we will get a new fresh copy. The way it is now, I don’t have to depend on anyone and yes, it is a little bit of work to have to run this choreo to put up the clusters but it is so good that is not for me. 

[0:49:48.6] DC: Yeah, exactly. 

[0:49:49.7] CC: I am selfish that way. No seriously, I don’t have to wait for a code to merge and be pushed. It is my code that is right there sitting on my computer. I am pushing it to the clouds, boom, I can test it. Sometimes I can test it on my machine but some things I can’t. So when I am doing volume or I have to push it to the cloud provider is amazing. It is so, I don’t know, I feel very autonomous and that makes me very happy. 

[0:50:18.7] NL: I totally agree for that exact reason like testing things out maybe something isn’t ready for somebody else to see. It is not ready for prime time. So I need something really quick to test it out but also for me, I am the avatar of unwitting chaos meaning basically everything I touch will eventually blow up. So it is also nice that whatever I do that’s weird isn’t going to affect anybody else either and that is great. Blast radius is amazing. 

All right, so I think that pretty much wraps it up for a cloud native infrastructure episode. I had an awesome time. This is always fun so please send us your concepts and ideas in the GitHub issue tracker. You can see our existing episode and suggestions and you can add your own at github.com/heptio/thecubelets and go to the issues tab and file a new issue or see what is already there. All right, we’ll see you next time. 

[0:51:09.9] DC: Thank you. 

[0:51:10.8] CC: Thank you, bye. 

[END OF INTERVIEW]

[0:51:13.9] KN: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the https://thepodlets.io website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
