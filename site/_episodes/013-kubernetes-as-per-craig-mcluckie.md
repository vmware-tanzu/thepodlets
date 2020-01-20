---
episode_id: 013-kubernetes-as-per-craig-mcluckie 
episode_number: 13 
title: The Past, Present and Future of Kubernetes with Craig McLuckie
description: Craig has loads of expertise and shareable experience in the cloud native space and we have a fascinating chat with him, asking about his work, Heptio and of course, Kubernetes! Craig shares some insider perspective on the space, the rise of Kubernetes and how the increase in Kubernetes' popularity can be managed. 
notes: Today on The Podlets Podcast, we are joined by VMware's Vice President of Research and Development, [Craig McLuckie](https://twitter.com/cmcluck)! Craig is also a founder of Heptio, who were acquired by VMware and during his time at Google he was part of bringing Kubernetes into being. Craig has loads of expertise and shareable experience in the cloud native space and we have a fascinating chat with him, asking about his work, Heptio and of course, Kubernetes! Craig shares some insider perspective on the space, the rise of Kubernetes and how the increase in Kubernetes' popularity can be managed. We talk a lot about who can use Kubernetes and the prerequisites for implementation; Craig insists it is not a one-size-fits-all scenario. We also get into the lack of significantly qualified minds and how this is impacting competition in the hiring pool. Craig comments on taking part in the open source community and the buy-in that is required to meaningfully contribute as well as sharing his thoughts on the need to ship new products and services regularly. We finish off the episode with some of Craig's perspectives on the future of Kubernetes, dangers it poses to code if neglected and the next phase of its lifespan. For this amazing chat with a true expert in his field, make sure to join us on for this episode! 
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Duffie Cooley
      url: https://twitter.com/mauilion 
points:
    - A brief introduction to Craig's history and his work in the cloud native space. 
    - The questions that Craig believes more people should be asking about Kubernetes. 
    - Weighing the explosion of the Kubernetes space; fragmentation versus progress. 
    - The three pieces of enterprise software and aiming to enlarge the 'crystalline core'.
    - Craig's thoughts on specialized Kubernetes operating systems and their tradeoffs. 
    - Quantifying the readiness of an organization to implement Kubernetes. 
    - Craig's reflections on Heptio and the lessons he feels he learned in the process.
    - The skills shortage for Kubernetes and how companies are approaching this issue. 
    - Balancing the needs and level of the community and shipping products regularly.
    - Involvement in the open source community and the leap of faith that is inherent in the process. 
    - The question of microliths; making monoliths more complex and harder to manage. 
    - Masking problems with Kubernetes and how detrimental this can be to your code.  
    - Craig's thoughts on the future of the Kubernetes space and possible changes.
    - The two duty cycles of any technology; the readiness phase that follows the hype.
links:
    - name: Craig McLuckie on LinkedIn
      url: https://www.linkedin.com/in/craigmcluckie
    - name: Craig McLuckie on Twitter
      url: https://twitter.com/cmcluck
    - name: The Podlets on Twitter
      url: https://twitter.com/thepodlets
    - name: Kubernetes 
      url: https://kubernetes.io/
    - name: VMware
      url: https://www.vmware.com/
    - name: Brendan Burns
      url: https://www.linkedin.com/in/brendan-burns-487aa590
    - name: Cloud Native Computing Foundation
      url: https://www.cncf.io/
    - name: Heptio
      url: https://heptio.cloud.vmware.com/
    - name: Mesos
      url: http://mesos.apache.org/
    - name: Velero
      url: https://www.veler.io/
    - name: vSphere
      url: https://www.vmware.com/products/vsphere.html
    - name: Red Hat
      url: https://www.redhat.com/
    - name: IBM 
      url: https://www.ibm.com/
    - name: Microsoft
      url: https://www.microsoft.com/
    - name: Amazon
      url: https://www.amazon.com/ 
    - name: KubeCon
      url: https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/
video: https://www.youtube.com/embed/CCB6gKMGU-Q
related: 
- 007-kubernetes-as-per-kelsey-hightower
- 006-a-conversation-with-joe-beda 
---
EPISODE 13

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically-minded decision maker, this podcast is for you.

[INTERVIEW]

[00:00:41] CC: Hi, everybody. Welcome back to The Podlets podcast, and today we have a special guest, Craig McLuckie. Craig, I have the hardest time pronouncing your last name. You will correct me, but let me just quickly say, well, I’m Carlisia Campos and today we also have Duffy Colley and Josh Rosso on the show. Say that three times fast, Craig McLuckie. 

Please help us say your last name and give us a brief introduction. You are super well-known in the Kubernetes community and inside VMware, but I’m sure there are not enough people that should know about you that didn’t know about you. 

[00:01:20] CM: All right. I’ll do a very quick intro. Hi, I’m Craig McLuckie. I’m a Vice President of Research and Development here at VMware. Prior of VMware, I spent a fair amount of time at Google where my friend Joe and I were responsible for building and shipping Google Compute Engine, which was an interesting exercise in bringing traditional enterprise virtualized workloads into the very sophisticated Google data center. 

We then went ahead and as our next project with Brendan Burns, started Kubernetes, and that obviously worked out okay, and I was also responsible for the ideation and formation of the Cloud Native Computing Foundation. I then wanted to work with Joe again. So we started Heptio, a little startup in the Kubernetes ecosystem. Almost precisely a year ago, we were acquired by VMware. So I’m now part of the VMware company and I’m working on our broader strategy around cloud native apps under the brand [inaudible 00:02:10].

[00:02:11] CC: Let me start off with a question. I think it is going to be my go-to first question for every guest that we have in the show. Some people are really well-versed in the cloud native technologies and Kubernetes and some people are completely not. Some people are asking really good questions out there, and I try to too as I’m one of those people who are still learning. 

So my question for you is what do you think people are asking that they are not asking the right frame, that you wish they would be asking that question in a different way.

[00:02:45] CM: It’s a very interesting question. I don’t think there’s any bad questions in the world, but one question I encountered a fair bit is, “Hey, I’ve heard about this Kubernetes thing and I want one.” I’m not sure it’s actually the right question, right? Kubernetes is a powerful technology. I definitely think we’re in this sort of peak hype phase of the project. There are a set of opportunities that Kubernetes really brings a much more robust ability to manage, it abstracts  a way infrastructure — there are some very powerful things. But to be able to be really successful with Kubernetes project, there’re a number of additional ingredients that really need to be thought through. 

The questions that ought to be asked are, "I understand the utility of Kubernetes and I believe that it would bring value to my organization, but do I have the skills and capabilities necessary to stand up and run a successful Kubernetes program?" That’s something to really think about. It’s not just about the nature of the technology, but it really brings in a lot of new concepts that challenge organizations. 

If we think about applications that exist in Kubernetes, there’s challenges with observability. When you think the mechanics of delivering into a containerized sort of environment, there are a lot of dos and don’ts that make a ton of sense there. A lot of organizations I’ve worked with are excited about the technology, but they don’t necessarily have the depth of understanding of where it's best used and then how to operate it. 

The second addendum to that is, “Okay, I’m able to deploy Kubernetes, but what happens the next day? What happens if I need to update it? When I need to maintain it? What happens when I discover that I need not one Kubernetes cluster or even 10 Kubernetes clusters, but a hundred or a thousand or 10,000.” Which is what we are starting to see out there in the industry. “Have I taken the right first step on that journey to set me up for success in the long-term?”

I do think there’s just a tremendous amount of opportunity and excitement around the technology, but also think it’s something that organizations really need to look at as not just about deploying a platform technology, but introducing the necessary skills that are necessary to operate and maintain it and the supporting technologies that are necessary to get the workloads on to it in a sustainable way. 

[00:04:42] JR: You’ve raised a number of assumptions around how people think about it I think, which are interesting. Even just starting with the idea of the packaging problem that represents containerization is a reasonable start. So infrequently, do we describe like the context of the problems that — all of the problems that Kubernetes solve that frequently I think people just get way ahead of themselves. It’s a pretty good description. 

[00:05:04] DC: So maybe in a similar vein, Craig, we had mentioned all the pieces that go into running Kubernetes successfully. You have to bolt some things on maybe for security or do some things to ensure observability as adequate, and it seems like the ecosystem has taken notice of all those needs and has built a million projects and products around that space. 

I’m curious of your thoughts on that because it’s like in one way it’s great because it shows it’s really healthy and thriving. In another way, it causes a lot of fragmentation and confusion for people who are thinking whether they can or cannot run Ku, because there are so many options out there to accomplish those kinds of things. So I was just curious of your general thoughts on that and where it’s headed.

[00:05:43] CM: It’s fascinating to see the sort of burgeoning ecosystem around Kubernetes, and I think it’s heartening, because if you think at the very highest level, the world is going to go one of two ways with the introduction of the hyper-scale public cloud. It’s either going to lead us into a world which feels like mainframe era again, where no one ever got [inaudible 00:06:01] Amazon in this case, or by Microsoft, whatever the case. Whoever sort of merges over time as the dominant force. 

But it also represents some challenges where you have these vertically integrated closed systems, innovation becomes prohibitively difficult. It’s hard to innovate in a closed system, because you’re innovating only for organizations that have already taken that dependancy. I think Kubernetes has opened it up, not just in terms of the world of applications that can run Kubernetes, but also this burgeoning ecosystem of supporting technologies that can create value. There’s a reason why startups are building around Kubernetes. There’s a reason they’re looking to solve these problems. 

I do think we’ll see a continued period of consolidation. You're not a cool mainstream enterprise software provider if you don’t have a Kubernetes story today. I think we’ll start to see continued focus and consolidation around a set of the larger organizations that are operating in this space. It’s not accidental that Heptio is a part of VMware at this point. When I looked at the ecosystem, it was pretty clear we need to take a boat to fully materialize the value of Kubernetes and I am pleased to be part of this organization.  

So I do think you’ll start to see a variety of different vendors emerging with a pretty clear, well-defined opinions and relatively turnkey solutions that address the gamut of capabilities. One organization needs to get into Kubernetes. One of the things that delights me about Kubernetes is that if you are a sophisticated organization that is self-identifying as a software company, and this is sort of manifest in the internet space if you’re running a sort of hyper-scale internet service, you are kind of by definition a software company. 

You probably have the skills on hand to make great choices around what projects, follow the communities, identify when things are reaching point of critical mass. You’re running in a space where your system is relatively homogenous. You don’t have just the sort of massive gamut of workloads, a lot of dimension enterprise organizations have. There’s going to be different approaches to the ecosystem depending on which organization is looking at the problem space. 

I do think this is prohibitively challenging for a lot of organizations that are not resourced at the level of a hyper-scale internet company from a technology perspective, where their day job isn’t running a production service for millions or billions of users. I do think situations like that, it makes a tremendous amount of sense to identify and work with someone you trust in the ecosystem, that can help you just navigate the wild map that is the Kubernetes landscape, that can participate in a number of these emerging communities that has the ability to put their thumb on the scale where necessary to make sure that things converge. 

I think it’s situational. I think the lovely thing about Kubernetes is that it does give organizations a chance to cut their teeth without having to dig into like a deep procurement cyclewith a major vendor. We see a lot of self-service Kubernetes projects getting initiated. But at some point, almost inevitably, people need a little bit more help, and that’s the role of a lot of these vendors. I think that I truly hope that I’m personally committed to, is that as we start to see the convergence of this ecosystem, as we start to see the pieces falling into place, that we retain an emphasis on the value of community that we also sort of avoid the balkanization and fragmentation, which sometimes comes out of these types of systems. 

We are so much better served as a software company if we can preserve consistency from environment to environment. The reality is as we start looking at large organizations, enterprises that are consuming Kubernetes, it’s almost inevitable that they’re going to be consuming Kubernetes from a number of different sources. Whether the sources are cloud provider delivering Kubernetes services or whether they handle Kubernetes clusters that are dedicated centralized IT team is delivering or whether it’s vendor provided Kubernetes. There’s going to be a lot of different flavors and variants on it. 

I think working within the community not as king makers, but as concerned citizens that are looking to make sure that there are very high-levels of consistency from offering to offering, means that our customers are going to be better served. We’re right now in a time where this technology is burgeoning. It’s highly scrutinized, but it’s not necessarily very widely deployed. So I think it’s important to just keep an eye on that sort of community centricity. Stay as true to our stream as possible. Avoid balkanization, and I think everyone will benefit from that. 

[00:10:16] DC: Makes sense. One of the things I took away from my year, I was just looking kind of back at my year and learning, consolidating my thoughts on what had happened. One of the big takeaways for me in my customer engagements this year was that a number of customers outright came out explicitly and said, “Our success as a company is not going to be measured by our ability to operate Kubernetes, which is true and obvious.” 

But at the same time, I think that that’s a really interesting moment of awareness for a lot of the people that I work with out there in the field, where they realized, you know what, Kubernetes may be the next best thing. It may be an incredible technology, but fundamentally, it’s not going to be the measure by which we are graded success. It’s going to be what we do on top of that that is more interesting. 

So I think that your point about that ecosystem is large enough that people will be consuming Kubernetes for multiple searches is sort of amplified by that, because people are going to look for that easy button as inroad. They’re going to look for some way to get the Kubernetes thing so that they can actually start exploring what will happen on top of it as their primary goal rather than how to get Kubernetes from an operational perspective or even understand the care and feeding of it because they don’t see that as the primary measure of success. 

[00:11:33] CM: That is entirely true. When I think about enterprise software, there’s sort of these three pieces of it. The first piece is the sort of crystaline core of enterprise software. That’s consistent from enterprise to enterprise to enterprise. It’s purchased from primary vendors or it’s built by open source communities. It represents a significant basis for everything. 

There’s the sort of peripheral, the sort of sea of applications that exist around that enterprises built that are entirely unique to their environment, and they’re relatively fluid. Then there’s this weird sort of interstitial layer, which is the integration glue that exists between their crystalline core and those applications and operating practices that enterprises create. 

So I think from my side, we benefit if that crystalline core is as large as possible so that enterprises don’t have to rely on bespoke integration practices as much possible. We also need to make allowances for the idea that that interstitial layer between the sort of core of a technology like Kubernetes and the applications may be modular or sort of extended by a variety of different vendors. If you’re operating in this space, like the telco space, your problems are going to be unique to telco, but they’re going to be shared by every other telco provider. 

One of the beautiful things about Kubernetes is it is sufficiently modular, it is a pretty well-thought resistant. So I think we will start to see a lot of specialization in terms of those integration pieces. A lot of specialization in terms of how Kubernetes is fit to a specific area, and I think that represents an awful opportunity for the community to continue to evolve. But I also think it means that we as contributors to the project need to make allowances for that. We can’t hold opinion to the point where it precludes massive significant value for organizations as they look at modularized and extending the platform.

[00:13:19] CC: What is your opinion on people making specialized Kubernetes operating systems? For example, we’re talking about telcos. I think there’s a Kubernetes OSS specifically for telcos that strip away things that kind of industry doesn’t need. What are the tradeoffs that you see? 

[00:13:39] CM: It’s almost inevitable that you’re going to start to see specialized operating system distributions that are tailored to container-based workloads. I think as we start looking at like the telco space with network function virtualization, Kubernetes promises to be something that we never really saw before. At the end of the day, telco is very broadly deployed open stack as this primary substrate for network function virtualization. 

But at the end of the day, they ended up not just deploying one rendition of open stack. But in many cases, three, four, five, depending on what functions they wanted to run, and there wasn’t a sufficient commonality in terms of the implementations. It became very sort of vendor-centric and balkanized in many ways. I think there’s an opportunity here to work hard as a community to drive convergence around a lot of those Kubernetes constructs so that, sure, the operating system is going to be different. 

If you’re running an NFV data plane implementation, doing a lot of bit slinging, it’s going to look fundamentally different to anything else in the industry, right? But that shouldn’t necessarily mean that you can’t use the same tools to organize, manage and reason about the workloads. A lot of the innovations that happen above that shouldn’t necessarily be tied to that. I think there’s promise there and it’s going to be an amazing test for Kubernetes itself to see how well it scales into those environments.

By and large, I’m a fan of rendered down, container-optimized operating system distributions. There’s a lot of utility there, but I think we also need to be practical and recognize that enterprises have gotten comfortable with the OS landscape that they have. So we have to make allowances that as part of containerizing and distributing your application, maybe you don’t necessarily need to and hopefully re-qualify the underlying OS and challenge a lot of the assumptions. So I think we just need to pragmatic about it.  

[00:15:19] DC: I know that’s a dear topic to Josh and I. We’ve fought that battle in the past as well. I do think it’s another one of those things where it’s a set of assumptions. It’s fascinating to me how many different ecosystems are sort of collapsing, maybe not ecosystems. How many different audiences are brought together by a technology like container orchestration. That you are having that conversation with, “You know what? Let’s just change the paradigm for operating systems.” That you are having that conversation with, “Let’s change the paradigm for observability and lifecycle stuff. Let’s change the paradigm for packaging. We’ll call it containers.” 

You know what I mean? It’s so many big changes in one idea. It’s crazy. 

[00:15:54] CM: It’s a little daunting if you think about it, right? I always say, change is easiest across one dimension, right? If I’m going to change everything all at once across all the dimensions, life gets really hard. I think, again, it’s one of these things where Kubernetes represents a lot of value. I walk into a lot of customer accounts and I spend a lot of time with customers. I think based on their experiences, they sort of make one of two assumptions. 

There’s a set of vendors that will come into an environment and say, “Hey, just run this tool against your virtual machine images – and Kubernetes, right?” Then they have another set of vendors that will come in and say, “Yeah. Hey, you just need to go like turn this thing into 12 factor cloud native service mesh-linked applications driven through CICD, and your life is magic.” There are some cases where it makes sense, but there’re some cases where it just doesn’t.

Hey, what uses a 24 gigabyte container? Is that really solving the problems that you have in some systematic way? At the other end of the spectrum, like there’s no world in which an enterprise organization is rewriting 3,000, 5,000 applications to be cloud native from the ground up. It just is not going to happen, right? So just understanding the return investment associated with the migration into Kubernetes. I’m not saying where it make sense and where it doesn’t. It’s such an important part of this story.

[00:17:03] JR: On that front, and this is something Duffy and I talk to our customers about all the time. Say you’re sitting with someone and you’re talking about potentially using Kubernetes or they’re thinking about it, are there like some key indicators that you see, Craig, as like, “Okay. Maybe Kubernetes does have that return on investment pretty soon to justify it." Or maybe even in the reverse, like some things where you think, “Okay, these people are just going to implement Kubernetes and it’s going to become shelf weary.” How do you qualify as an org, “I might be ready to bring on something like Kubernetes.”  

[00:17:32] CM: It’s interesting. For me, it’s almost inevitably – as much about the human skills as anything else. I mean, the technology itself isn’t rocket science. I think the sort of critical success criteria, when I start looking at engagement, is there a cultural understanding of what Kubernetes represents? 

Kubernetes is not easy to use. That initial [inaudible 00:17:52] to the face is kind of painful for people that are used to different experiences. Making sure that the basic skills and expectations are met is really important. I think there’s definitely some sort of acid test around workloads fit as you start looking at Kubernetes. It’s an evolving ecosystem and it’s maturing pretty rapidly, but there are still areas that need a little bit more heavy lifting, right? 

So if you think about like, “Hey, I want to run a vertically-scaled OLTP database in Kubernetes today.” I don’t know. Maybe not the best choice. If the customer knows that, if they have enough familiarity or they’re willing to engage, I think it makes a tremendous amount of sense. 

By and large, the biggest challenge I see is not so much in the Kubernetes space. It’s easy enough to get to a basic cluster. There’re sort of two dimensions to this, there is day two operations. I see a lot of organizations that have worked to create scale up programs of platform technologies. Before Kubernetes there was Mesos and there’s obviously PCF that we’ll be coming more increasingly involved in. 

Organizations that have chewed on creating and deploying a standardized platform often have the operational skills, but you also need to look at like why did that previous technology really meet sort of criteria, and do you have the skills to operate it on a day two basis? Often there’s not – They’ve worked out the day two operational issues, but they still haven’t figured out like what it means to create a modern software supply chain that can deliver into the Kubernetes space. 

They haven’t figured out necessarily how to create the right incentive structures and experiences for the developers that are looking to build, package and deliver into that environment. That’s probably the biggest point of frustration I see with enterprises, is, “Okay. I got to Kubernetes. Now what?” That question just hasn’t been answered. They haven’t really thought through, “These are the CICD processes. This is how you engage your cyber team to qualify the platform for these classes of workloads. This is how you set up a container repo and run scans against it. This is how you assign TTL on images, so you don’t just get massive repo.” 

There’s so much in the application domain that just needs to exist that I think people often trivialize and it’s really taking the time and picking a couple of projects being measured in the investments. Making sure you have the right kind of cultural profile of teams that are engaged. Create that sort of celebratory moment of success. Make sure that the team is sort of metricking and communicating the productivity improvements, etc. That really drives the option and engagement with the whole customer base.

[00:20:11] CC: It sounds to me like you have a book in the making.  

[00:20:13] CM: Oh! I will never write a book. It just seems like a lot of work. Brendan and a buch of my friends write books. Yeah, that seems like a whole lot of work.  

[00:20:22] DC: You had mentioned that you decided you wanted to work with Joe again. You formed Heptio. I was actually there for a year. I think I was around for a bit longer than that obviously. I’m curious what your thoughts about that were as an experiment win. If you just think about it as that part of the journey, do you think that was a success and what did you learn from that whole experiment that you wished everybody knew, just from a business perspective? It might have been business or it might have been running a company, any of that stuff. 

[00:20:45] CM: So I’m very  happy with the way that Heptio went. There were a few things that sort of stood out for me as things that folks should think about if they’re going to start a startup or they want to join a startup. The first and foremost I would say is design the culture to the problem at hand. Culture isn’t accidental. I think that Heptio had a pretty distinct and nice culture, and I don’t want to sound self-congratulatory. 

I mean, as with anything, a certain amount of this is work, but a lot of it is luck as well. Making sure that the cultural identity of the company is well-suited to the problem at-hand. This is critical, right? When I think about what Heptio embodied, it was really tailored to the specific journey that we were setting ourselves up for. 

We were looking to be passionate advocates for Kubernetes. We were looking to walk the journey with our customers in an authentic way. We were looking to create a company that was built around sustainability. I think the culture is good and I encourage folks either the thing you’re starting is a startup or looking to join one, to think hard about that culture and how it’s going to map to the problems they’re trying to solve. 

The other thing that I think really motivated me to do Heptio, and I think this is something that I’m really excited to continue on with VMware, was the opportunity to walk the journey with customers. So many startups have this massive reticence to really engage deeply in professional services. In many ways, Google is fun. I had a blast there. It’s a great company to work for. We were able to build out some really cool tech and do good things. 

But I grew kind of tired of writing letters from the future. I was, “Okay, we are flying cars." When you're interacting with the customer. I can’t start my car and get to work. It’s great that you have flying cars, but right now I just need to get in my car, drive down the block and get out and get to work. 

So walking the journey with customers is probably the most important learning from Heptio and it’s one of the things I’m kind of most proud of. That opportunity to share the pain. Get involved from day one. Look at that as your most valuable apparatus to not just build your business, but also to learn what you need to build. Having a really smart set of people that are comfortable working directly with customers or invested in the success of those customers is so powerful. 

So if you’re in the business or in the startup game, investors may be leery of building out a significant professional service as a function, because that’s just how Silicon Valley works. But it is absolutely imperative in terms of your ability to engage with customers, particularly around nascent technologies, filled with gaps where the product doesn’t exist. Learn from those experiences and bring that back into the core product. 

It’s just a huge part of what we did. If I was ever in a situation where I had to advice a startup in the sort of open source space, I’d say lean into the professional service. Lean into field engineering. It’s a critical way to build your business. Learn what customers need. Walk the journey with them and just develop a deep empathy.

[00:23:31] CC: With new technology, that was a concern about having enough professionals in the market who are knowledgeable in that new technology. There is always a gap for people to catch up with that. 

So I’m curious to know what customers or companies, prospective customers, how they are thinking in terms of finding professionals to help them? Are they’re concerned that there’s enough professionals in the market? Are they finding that the current people who are admins and operators are having an easy time because their skills are transferable, if they’re going to embark on the Kubernetes journey? What are they telling you? 

[00:24:13] CM: I mean, there’s a huge skills shortage. This is one of the kind of primary threats to the short term adoption of Kubernetes. I think Kubernetes will ultimately permeate enterprise organizations. I think it will become a standard for distributed systems development. Effectively emerging as an operating system for distributed systems, is people build more natively around Kubernetes. But right now it’s like the early days of Linux, where you deploy Linux, you’d have to kind of build it from scratch type of thing. It is definitely a challenge. 

For enterprise organizations, it’s interesting, because there’s a war for talent. There’s just this incredible appetite for Kubernetes talent. There’s always that old joke around the job description for like 10 years of Kubernetes experience on a five-year project. That certainly is something we see a lot. 

I’d take it from two sides. One is recognizing that as an enterprise organization, you are not going to be able to hire this talent. Just accept that sad truth. You can hire a seed crystal for it, but you really need to look at that as something that you’re going to build out as an enablement function for your own consumption. 

As you start assessing individuals that you’re going to bring on in that role, don’t just assess for Kubernetes talent. Assess for the ability to teach. Look for people that can come in and not just do, but teach and enable others to do it, right? Because at the end of the day, if you need like 50 Kubernauts at a certain level, so does your competitor and all of your other competitors. So does every other function out there. There’s just massive shortage of skills. 

So emphasizing your own – taking on the responsibility of building your own expertise. Educating your own organization. Finding ways to identify people that are motivated by this type of technology and creating space for them and recognizing and rewarding their work as they build this out. Because it’s far more practical to hire into existing skillset and then create space so that the people that have the appetite and capability to really absorb these types of disruptive technologies can do so within the parameters of your organization. 

Create the structures to support them and then make it their job to help permeate that knowledge and information into the organization. It’s just not something you can just bring in. The skills just don’t exist in the broader world. Then for professionals that are interested in Kubernetes, this is definitely a field that I think we’ll see a lot of job security for a very long-time. Taking on that effort, it’s just well worth the journey. 

Then I’d say the other piece of this is for vendors like VMware, our job can’t be just delivering skills and delivering technology. We need to think about our role as an enablers in the ecosystem as folks that are helping not just build up our own expertise of Kubernetes that we can represent to customers, but we’re well-served by our customers developing their own expertise. It’s not a threat to us. It actually enables them to consume the technologies that we provide. So focusing on that enablement through us as integration partners and [inaudible] community, focusing on enablement for our customers and education programs and the things that they need to start building out their capacity internally, is going to serve us all well.

[00:27:22] JR: Something going back to maybe the Heptio conversation, I’m super interested in this. Being a very open source-oriented company, at VMware this is of course this true as well. We have to engage with large groups of humans from all different kinds of companies and we have to do that while building and shipping product to some degree. So where I’m going with this is like – I remember back in the Heptio days, there was something with dynamic audit logging that we were struggling with, and we needed it for some project we were working on. 

But we needed to get consensus in a designed approve at like a bigger community level. I do know to some degree that did limit our ability to ship quickly. So you probably know where I’m going with this. When you’re working on projects or products, how do you balance, making sure the whole community is coming along with you, but also making sure that you can actually ship something?  

[00:28:08] DM: That harkens back to that sort of catch phrase that Tim Sinclair always uses. If you want to go fast, go alone. If you want to go far, go together. I think as with almost everything in the world, these things are situational, right? There are situations where it is so critical that you bring the community along with you that you don’t find yourself carrying the load for something by yourself that you just have to accept and absorb that it’s going to be pushing string. 

Working with an engaged community necessitates consensus, necessitates buy-in not just from you, but from potentially your competitors. The people that you’re working with and recognizing that they’ll be doing their own sort of mental calculus around whether this advantages them or not and whatnot. But hopefully, I think certainly in the Kubernetes community, this is general recognition that making the underlying technology accessible. Making it ubiquitous, making it intrinsically supportable profits everyone. I think there’re a couple of things that I look at. Make the decision pretty early on as to whether this is something you want to kind of spark off and sort of stride off on your own an innovate around, whether it’s something that’s critical to bring the community along with you around. 

I’ll give you two examples of this, right? One example was the work we did around technologies like Valero, which is a backup restore product. It was an urgent and critical need to provide a sustainable way to back up and recover Kubernetes. So we didn’t have the time to do this through Kubernetes. But also it didn’t necessarily matter, because everything we’re doing was build this addendum to Kubernetes. 

That project created a lot of value and we’ve donated to open source project. Anyone can use it. But we took on the commitment to drive the development ourselves. It’s not just we need it to. Because we had to push very quickly in that space. Whereas if you look at the work that we’re doing around things like cluster API and the sort of broader provisioning of Kubernetes, it’s so important that the ecosystem avoids the tragedy of the commons around things like lifecycle management. 

It’s so important that we as a community converge on a consistent way to reason about the deployment upgrade and scaling of Kubernetes clusters. For any single vendor to try to do that by themselves, they’re going to take on the responsibility of dealing with not just one or two environments if you’re a hyperscale cloud provider [inaudible 00:30:27] many can do that. But we think about doing that for, in our case, “Hey, we only deploy into vSphere. Not just what’s coming next, but also earlier versions of vSphere.

We need to be able to deploy into all of the hyper-scalers. We need to deploy into some of the emerging cloud providers. We need to start reasoning about edge. We need to start thinking about all of these. We’re a big company and we have a lot of engineers. But you’re going to get stretched very thin, very quickly if you try to chew that off by yourself. 

So I think a lot of it is situational. I think there are situations where it does pay for organizations to kind of innovate, charge off in a new direction. Run an experiment. See if it sticks. Over time, open that up to the community as it makes sense. The thing that I think is most important is that you just wear your heart on your sleeve. The worst thing you can do is to present a charter that, “Hey, we’re doing this as a community-centric, open project with open design, open community, open source,” and then change your mind later, because that just creates dramas. 

I think it’s situational. Pick the path that makes sense to the problem at-hand. Figure out how long your customer can wait for something. Sometimes you can bring things back to communities that are very open and accepting community. You can look at it as an experiment, and if it makes sense in that experiment perform factor, present it back to the Kubernetes communities and see if you can kind of get it back in. But in some case it just makes sense to work within the structure and constraints of the community and just accept that great things from a community angle take a lot of time. 

[00:31:51] CC: I think too, one additional thing that I don’t think was mentioned is that if a project grows too big, you can always break it off. I mean, Kubernetes is such a great example of that. Break it off into separate components. Break it off into separate governance groups, and then parts can move with different speeds.

[00:32:09] CM: Yeah, and there’s all kinds of options. So the heart of it is no one rule, right? It’s entirely situational. What are you trying to accomplish on what arise and acknowledge and accept that the evolution of the core of Kubernetes is slowing as it should. That’s a signal that the project is maturing. You cannot deliver value at a longer timeline that your business or your customers can absorb then maybe it makes sense to do something on the outside. Just wear your heart on your sleeve and make sure your customers and your partners know what you’re doing. 

[00:32:36] DC: One of your earlier points about how do companies – I think Josh's question and was around how do companies attract talent. You’re basically pointing, and I think that there are some relation to this particular topic because, frequently, I’ve seen companies find some success by making room for open source or upstream engineers to focus on the Kubernetes piece and to help drive that adoption internally. 

So if you’re going to adopt something like a Kubernetes strategy as part of a larger company goal, if you can actually make room within your organization to bring people who are – or to support people who want to focus on that up stream, I think that you get a lot of ancillary benefits from that, including it makes it easier to adopt that technology and understand it and actually have some more skin in the game around where the open source project itself is going. 

[00:33:25] CM: Yeah, absolutely. I think one of the lovely things about the Kubernetes community is this idea of your position is earned, not granted, right? The way that you earn influence and leadership and basically the good will of everyone else in that community is by chopping wood, carrying water. Doing the things that are good for the community. 

Over time, any organization, any human being can become influential and lead based on their merits of their contributions. It’s important that vendors think about that. But at the same time, I have a hard time taking exception with practically any use of open source. At the end of the day, open source by its nature is a leap of faith. You’re making that technology accessible. If someone else can take it, operationalize it well and deliver value for organizations, that’s part of your contract. 

That’s what you absorb as a vendor when you start the thing. So people shouldn’t feel like they have to. But if you want to influence and lead, you do need to. Participate in these communities in an open way. 

[00:34:22] DC: When you were helping form the CNCF and some of those projects, did you foresee it being like a driving goal for people, not just vendors, but also like consumers of the technologies associated with those foundations?

[00:34:34] CM: Yeah, it was interesting. Starting the CNCF, I can speak from the position of where I was inside Google. I was highly motivated by the success of Kubernetes. Not just personally motivated, because it was a project that I was working on. I was motivated to see it emerge as a standard for distributed systems development that attracts the way the infrastructure provider. I’m not ashamed of it. 

It was entirely self-serving. If you looked at Google’s market position at that time, if you looked at where we were as a hyper-scale cloud provider. Instituting something that enabled the intrinsic mobility of workloads and could shuffle around the cards on the deck so to speak [inaudible 00:35:09]. 

I also felt very privileged that that was our position, because we didn’t necessarily have to create artificial structures or constraints around the controls of the system, because that process of getting something to become ubiquitous, there’s a natural path if you approach it as a single provider. I’m not saying who couldn’t have succeeded with Kubernetes as a single provider. But if Red Hat and IBM and Microsoft and Amazon had all piled on to something else, it’s less obvious, right? It’s less obvious that Kubernetes would have gone as far as it did.

So I was setting up CNCF, I was highly motivated by preserving the neutrality. Creating structures that separated the various sort of forms of governance. I always joke that at the time of creating CNCF, I was motivated by the way the U.S. Constitution is structured. Where you have these sort of different checks and balances. So I wanted to have something that would separate vendor interests from things that are maintaining taste on the discreet project. 

The sort of architecture integrity, and maintain separation from customer segments, so that you’d create the sort of natural self-balancing system. It was definitely in my thinking, and I think it worked out pretty well. Certainly not perfect, but it did lead down a path which I think has supported the success  of the project a fair bit. 

[00:36:26] DC: So we talked a lot about Kubernetes. I’m curious, do you have some thoughts, Carlisia?  

[00:36:31] CC: Actually, I know you have a question about microliths. I was very interested in exploring that.  

[00:36:37] CM: There’s an interesting pattern that I see out there in the industry and this manifests in a lot of different ways, right? When you think about the process of bringing applications and workloads into Kubernetes, there’s this sort of pre-dispositional bias towards, “Hey, I’ve got this monolithic application. It’s vertically scaled. I’m having a hard time with the sort of team structure. So I’m going to start tuning it up into a set of microservices that I can then manage discretely and ideally evolve on a separate cadence. This is an example of a real customer situation where someone said, “Hey, I’ve just broken this monolith down into 27 microservices.” 

So I was sort of asking a couple of questions. The first one was when you have to update those 27 – if you want to update one of those, how many do you have to touch? The answer was 27. I was like, “Ha! You just created a microlith.” It’s like a monolith, except it’s just harder to live with. You’re taking a packaging problem and turn it into a massively complicated orchestration problem. 

I always use that jokingly, but there’s something real there, which is there’s a lot of secondary things you need to think through as you start progressing on this cloud native journey. In the case of microservice development, it’s one thing to have API separated microservices. That’s easy enough to institute. But instituting the organization controls around an API versioning strategy such you can start to establish stable  API with consistent schema and being able to sort of manage the dependencies to consuming teams requires a level of sophistication that a lot of organizations haven’t necessarily thought through. 

So it’s very easy to just sort of get caught up in the hype without necessarily thinking through what happens downstream. It’s funny. I see the same thing in functions, right? I interact with organizations and they’re like, “Wow! We took this thing that was running in a container and we turned it into 15 different functions.” I’m like, “Ha! Okay.” You start asking questions like, “Well, do you have any challenges with state coherency?” They’re like, “Yeah! It’s funny you say that. Because these things are a little bit less transactionally coherent, we have to write state watches. So we try and sort of watermark state and watch this thing." 

I’m like, “You’re building a distributed transaction coordinator on your free time. Is this really the best use of your resources?" Right? So it really gets back to that idea that there’s a different tool for a different job. Sometimes the tool is a virtual machine. Sometimes it’s not. Sometimes the tool is a bare metal deployment. If you’re building a quantitative trading application that’s microsecond latency sensitive, you probably don’t want to hypervisor there. 

Sometimes a VM is the natural destination and there’s no reason to move from a VM. Sometimes it’s a container. Sometimes you want to start looking at that container and just modularizing it so you can run a set of things next to each other in the same process space. Sometimes you’re going to want to put APIs between those things and separate them out into separate containers. There’s an ROI. There’s a cause and there’s a benefit associated with each of those transitions. More importantly, there are a set of skills that you have to have as you start looking at their continuum and making sure that you’re making good choices and being wise about it.

[00:39:36] CC: That is a very good observation. Design is such an important part of software development. I wonder if Kubernetes helps mask these design problems. For example, the ones you are mentioning, or does Kubernetes sort of surfaces them even more? 

[00:39:53] CM: It’s an interesting philosophical question. Kubernetes certainly masks some problems. I ran into an early – this is like years ago. I ran into an early customer, who confided in me, "I think we’re writing worse code now." I was like, ”What do you mean?” He was like, “Well, it used to be when we went out of memory on something, we get paged. Now we’ve set out that we go and it just restarts the container and everything continuous.” There’s no real incentive for the engineers to actually go back and deal with the underlying issues and recourse it, because the system is just more intrinsically robust and self-healing by nature. 

I think there's definitely some problems that Kubernetes will compound. If you’re very sloppy with your dependencies, if you create a really large, vertically scaled monolith that’s running at VM today, putting it in a container is probably strictly going to make your life worse. Just be respectful of that. But at the same time, I do think that the discipline associated with transition to Kubernetes, if you walk it a little bit further along. If you start thinking about the fact that you’re not running a lot of imperative processes during a production in a push, where deployment container is effectively a bin copy with some minimal post-deployment configuration changes that happen. It sort of leads you on to a much happier path naturally. 

I think it can mask some issues, but by and large, the types of systems you end up building are going to be more intrinsically operationally stable and scalable. But it is also worth recognizing that it’s — you are going to encounter corner cases. I’ve run into a lot of customers that will push the envelope in a direction that was unanticipated by the community or they accidentally find themselves on new ground that’s just unstable, because the technology is relatively nascent. So just recognizing that if you’re going to walk down a new path, I’m not saying don’t, just recognize that you’re probably going to encounter some stuff that’s going to take over to working through. 

[00:41:41] DC: We get an earlier episode about API contracts, which I think highlights some of these stuff as well, because it sort of gets into some of those sharp edges of like why some of those things are super important when you start thinking about microservices and stuff. 

We’re coming to the end of our time, but one of the last questions I want to ask you, we’ve talked a lot about Kubernetes in this episode, I’m curious what the future holds. We see a lot of really interesting things happening in the ecosystem around moving more towards serverless. There are a lot of people who are like — thinking that perhaps a better line would be to move away from like infrastructure offering and just basically allow cloud providers in this stuff to manage your nodes for you. We have a few shots on goal for that ourselves. 

It’s been really an interesting evolution over the last year in that space. I’m curious, what sort of lifetime would you ascribe to it today? What do you think that this is going to be the thing in 10 years? Do you think it will be a thing in 5 years? What do you see coming that might change it?

[00:42:32] CM: It’s interesting. Well, first of all, I think 2018 was the largest year ever for mainframe sales. So we have these technologies, once they’re in enterprise, it tends to be pretty durable. The duty cycle of enterprise software technology is pretty long-lived. The real question is we’ve seen a lot of technologies in this space emerge, ascend, reach a point of critical mass and then fade and they’re disrupted by the technologies. Is Kubernetes going to be a Linux or is Kubernetes going to be a Mesos, right? 

I mean, I don’t claim to know the answer. My belief, and I think this is probably true, is that it’s more like a Linux. When you think about the heart of what Kubernetes is doing, is it’s just providing a better way to build and organized distributed systems. I’m sure that the code will evolve rapidly and I’m sure there will be a lot of continued innovation enhancement. 

But when you start thinking about the fact that what Kubernetes has really done is brought controller reconciler based management to distributed systems developed everywhere. When you think about the fact that pretty much every system these days is distributed by nature, it really needs something that supports that model. So I think we will see Kubernetes sticking. We’ll see it become richer. We’ll start to see it becoming more applicable for a lot of things that we’re starting to just running in VMs. 

It may well continue to run in VMs and just be managed by Kubernetes. I don’t have an opinion about how to reason about the underlying OS and virtualization structure. The thing I do have opinion about is it makes a ton of sense to be able to use a declarative framework. Use a set of well-structured controllers and reconcilers to drive your world into a non-desired state. 

I think that pattern will be – it’s been quite successful. It can be quite durable. I think we’ll start to see organizations embrace a lot of these technologies over time. It is possible that something brighter, shinier, newer, comes along. Anyone will tell you that we made enough mistakes during the journey and there is stuff that I think everyone regret some of the Kubernetes train. 

I do think it’s likely to be pretty durable. I don’t think it’s a silver bullet. Nothing is, right? It’s like any of these technologies, there’s always the cost and there’s a benefit associated with it. The benefits are relatively well-understood. But there’s going to be different tools to do different jobs. There’s going to be new patterns that emerge that simplify things. Is Kubernetes the best framework for running functions? I don’t know. Maybe. Kind of like what the [inaudible] people are doing. But are there more intrinsically optimal ways to do this, maybe. I don’t know. 

[00:45:02] JR: It has been interesting watching Kubernetes itself evolve in that moving target. Some of the other technologies I’ve seen kind of stagnate on their one solution and don’t grow further. But that’s definitely not what I see within this community. It’s like always coming up with something new.  

Anyway, thank you very much for your time. That was an incredible session.

[00:45:22] CM: Yeah. Thank you. It’s always fun to chat. 

[00:45:24] CC: Yeah. We’ll definitely have you back, Craig. Yes, we are coming up at the end, but I do want to ask if you have any thoughts that you haven’t brought up or we haven’t brought up that you’d like to share with the audience of this podcast. 

[00:45:39] CM: I guess the one thing that was going through my head earlier I didn’t say which is as you look at these technologies, there’s sort of these two duty cycles. There’s the hype duty cycle, where technology ascends in awareness and everyone looks at it as an answer to all the everythings. Then there’s the readiness duty cycle, which is sometimes offset. 

I do think we’re certainly peak hype right now in Kubernetes if you attended KubeCon. I do think there’s perhaps a gap between the promise and the reality for a lot of organizations. It's always just council caution and just be judicious about how you approach this. It’s a very powerful technology and I see a very bright future for it. Thanks for your time. 

[00:46:17] CC: Really, thank you so much. It’s so refreshing to hear from you. You have great thoughts. 

With that, thank you very much. We will see you next week. 

[00:46:28] JR: Thanks, everybody. See you. 

[00:46:29] DC: Cheers, folks.

[END OF INTERVIEW] 

[00:46:31] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
