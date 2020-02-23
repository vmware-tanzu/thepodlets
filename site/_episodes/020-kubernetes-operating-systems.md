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
episode_id: kubernetes-operating-systems 
episode_number: 20
title: Kubernetes Operating Systems
# "description" is a short version of the show notes:
description: Running Kubernetes on conventional operating systems is time-consuming and labor-intensive. Today’s guests Andrew Rynhard and Timothy Gerla have engineered a product that attempts to provide a solution to this problem.  
# "notes" is the entire show notes:
notes: Running Kubernetes on conventional operating systems is time-consuming and labor-intensive. Today’s guests Andrew Rynhard and Timothy Gerla have engineered a product that attempts to provide a solution to this problem. They call it Talos, and it is a modern OS designed specifically to host Kubernetes clusters, managed by a flexible and powerful API. Talos is completely stripped down to the bare components required to run Kubernetes and get information from the system. It stays updated by keeping time with Kubernetes, but also provides the user with a large degree of control in the event that they might need to update a flag. In this episode, Andrew and Timothy get into some of the mechanics and thought processes behind Talos, telling us why they went with a read-only API, how they handle security concerns on the OS, and how a system like theirs might get adopted by the Kubernetes community and layperson more broadly. They get into the advantages provided by a stripped-down solution for systematizing the use of Kubernetes across communities and running new components through clusters rather than on the OS itself. In a space where most participants are largely operating in the dark, it is a pleasure to see innovations like this display such lasting power so make sure you check out this episode.
# Uncomment and add guests if any
guests:
    - name: Tim Gerla
      url: https://twitter.com/tybstar
    - name: Andrew Rynhard
      url: https://twitter.com/andrewrynhard
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Olive Power
      url: https://twitter.com/opowero
points:
    - What a Kubernetes OS is, a stripped-down OS that integrates with Kubernetes.
    - The difficulties of managing and getting Kubernetes installed on regular OSs.
    - Why a Kubernetes OS? Less attack surface and OS compatibility issues.
    - What Talos does, quickly makes nodes part of a Kubernetes cluster by being stripped down.
    - How replacing SSH with an API alleviates some users’ securty concerns.
    - A command-line interface called OSCTL that allows users to explore the API.
    - What does ‘stripped-down’ mean? Talos runs kubelets and gets information from the OS.
    - The ability to run new components through clusters rather than from the OS.
    - How the Kubernetes OS evolves with Kubernetes but gets separately controlled too.
    - Better integrating into Kubernetes by abstracting OS features into Kubernetes as operators.
    - Security precautions, kernel hardening, SSH and Bash removal, and a read-only OS.
    - Usability of Talos for the average Joe, and its consistency across base platforms.
    - Possibilities for interacting with deeper levels of an OS through an API managed OS.
    - How Talos might become appealing to laypeople, decreasing costs for porting to it.
    - Value gained from switching to a purpose-built OS as something which could outweigh costs.
    - Tendencies to hang onto tried and trusted tech even if its predecessors are superior.
# Be sure to check the episode's hackmd for additional links:
links:
    - name: Talos 
      url: https://www.talos-systems.com/
    - name: Timothy Gerla 
      url: http://www.gerla.net/
    - name: Timothy Gerla on Twitter 
      url: https://twitter.com/tybstar
    - name: Andrew Ryndhard on LinkedIn 
      url: https://www.linkedin.com/in/andrewrynhard/
    - name: Andrew Ryndhard on GitHub 
      url: https://github.com/andrewrynhard
    - name: Jed Salazar on LinkedIn 
      url: https://www.linkedin.com/in/jedsalazar/
    - name: Bryan Liles on LinkedIn 
      url: https://www.linkedin.com/in/bryanliles/
    - name: Carlisia Campos on LinkedIn 
      url: https://www.linkedin.com/in/carlisia/
    - name: Red Hat 
      url: https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
    - name: Arch 
      url: https://www.archlinux.org/
    - name: Debian 
      url: https://www.debian.org/
    - name: Linux 
      url: https://www.linux.org/
    - name: Bell Labs  
      url: http://www.bell-labs.com/
    - name: AT&T 
      url: https://www.att.com/
 
# Add only the YT id to the end of the URL below:
video: https://www.youtube.com/embed/BAh_bNQoOoo
related: 
- 008-disaster-recovery 
- 005-cloud-native-infrastructure
- 010-the-dichotomy-of-security
---
EPISODE 20

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your Cloud Native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[INTERVIEW]

[00:00:41] CC: Hi, everybody. Welcome back to the Podlets. Today we have a special episode, and on the show, we have a special guest, Andrew Ryndhard. Say hi, Andrew.

[00:00:53] AR: Hello, how are you? 

[00:00:55] CC: We also have Timothy Gerla. Say hi, Tim. 

[00:00:58] TG: Hi. Thanks for having me. 

[00:01:00] CC: Yeah. Andrew and Timothy are from Talos. Andrew dropped an issue on our GitHub repo and here we are. It was a great suggestion. What we’re going to talk about today is what they are working on, which is a Kubernetes operating system. We have tons of questions for them for sure. We also have a special participant on the episode today as a co-host, Jed Salazar. Hi, Jed. 

[00:01:28] JS: Hey, everyone. Jed Salazar here from the CRE team here at VMware.  

[00:01:31] CC: And Bryan Liles.

[00:01:32] BL: Hi. 

[00:01:33] CC: Hi. And me, Carlisia Campos. Who’d like to get the party started and kick this off?

[00:01:41] BL: Oh, I’m here. Let’s throw the gauntlet down. We’re talking about Kubernetes operating systems today. I have an operating system, a Mac, or I have Linux. I can run Kubernetes. What is a Kubernetes operating system and why should I even be thinking about this? 

[00:01:58] AR: Sure. I’d like to think about Kubernetes operating system as an operating system that has stripped down the absolute bare minimum to run Kubernetes. Everything that is required to run the kubelet, and essentially that’s it, at least in my opinion. It should be super minimal to start with. 

Second of all, I also think that it should integrate with Kubernetes as well. The combination of just being able to strip down Linux as we know as small as possible and then actually integrating with Kubernetes itself using APIs to figure out things about itself, whatever. I think that that, in my opinion, is what I would call a Kubernetes OS.

[00:02:42] BL: Interesting. Okay. Now that we know a little bit about Kubernetes operating systems, and like I said, I’m starting in early today as the devil’s advocate. Now, like I said before, I have a Mac and I have Linux and I have Windows on my desktop. There’re been lots of efforts from lots of people trying to get Kubernetes running up on Ubuntu or Fedora, and it’s cool that you’re trying to slim this down, but really why would I look at a Kubernetes operating system over my Linux that I’m familiar with? I like Ubuntu with Debian. 

[00:03:17] AR: Sure. That’s a great question. It’s one we get a lot. I like to think that you actually just get less operational overhead when you actually have a Kubernetes-specific operating system. I think that Kubernetes itself is a job, managing it, getting it installed, unfortunately. It’s getting better, but it’s still a job at the end of the day. 

Having to manage Kubernetes and the operating system, everything that you need to pass compliance on the operating system, get all the packages installed, these are all things that we kind of know that Kubernetes needs already and yet we’re still having to go in and app install whatever we might need to get Kubernetes up and running. 

The idea with a Kubernetes operating system in my mind is that we should stop worrying about the individual node, the underlying operating system and start looking at Kubernetes as a whole as a giant machine and we just add machines, nodes to this giant machine that give us extra resources. The less that we have to care about the machine or the underlying operating system, the better, in my mind. We get to focus on Kubernetes. 

Not only that, but because it’s minimal, you get a smaller attack surface. There’re just not things there that you would otherwise have to worry about. I’ve done Kubernetes for three years now and having to go in and worry about updating packages that are just completely unrelated, it’s something that I think we shouldn’t have to do anymore. If you’re dedicated to running your apps and your stack in Kubernetes, then why are we going in and managing the nodes on an individual basis. For that matter, managing things that don’t really have any relevance for running Kubernetes. 

To me, it’s just about abstracting away the operating system and not even having to worry about it anymore and looking at Kubernetes and the entire whole cluster as an operating system. We can’t really get there if we’re having to worry about the two jobs of managing both at the same time.

[00:05:17] JS: Andrew, can I ask a follow up question?

[00:05:18] AR: Sure. 

[00:05:20] JS: I fully agree with all of those statements. I think a general purpose operating system might not be the best job for a specific role, like being a Kubernetes node. As you mentioned, you have to deal with kind of all the various packages that might be beneficial to you if you’re running it for some general purpose. It’s really supposed to be running a workload as a Kubernetes node so you can kind of scope that down. 

I’m just wondering when you kind of make this pitch or kind of let these folks know, how do you get folks to kind of relinquish their desire to have full control over their operating system from being able to install their own security management processes on it or being a little bit shy about not being able to SSH or kind of use their common patterns of operating system management? 

[00:06:09] AR: Oh, that’s a great question. I think the biggest thing that I always answer back is – I can take this in two parts. Let me first of all talk about what – People, they do want to run things on the host. My answer always back is can you run it in Kubernetes? Kubernetes is sort of your package manager, if you will. 

They sit back usually and they’re like, “Hmm. Yeah, I probably could.” If you need to run something on every host, Kubernetes has something for that. It’s a daemon set. Run it on Kubernetes and call it a day. This isn’t something that’s going to work for absolutely everything I imagine. Nothing in the world is like that. But I think for the majority of the use cases out there and for the things that people want to run on the host, you could actually just run it in Kubernetes itself.  

As far as SSH and for those that don’t really know what we’ve done in Talos, in Talos we’ve actually stripped down just the kernel and a small Go lang binary that’s our – That, basically, its whole goal is to create a Kubernetes cluster or make a node part of a Kubernetes cluster as fast as possible, and that’s really it. We’ve gone so far as ripping out Bash and SSH and we’ve actually replaced that with an API.

My answer always back to the SSH question is what is it that you really trying to get out of SSH? 9 times out of 10, it’s, “I want to get information about what’s wrong. I want to do troubleshooting.” If our answer back to them is, “Oh! We have an API for that,” you still at the end of the day – it’s really the information that you’re after. It’s not necessarily that you need SSH to do that. You need a way to get this information and not necessarily have to sit there and wait for a Prometheus metric, see it pulled it every minute. You want something right on the spot. You want to ask a question and you want to get an immediate answer. I feel like we can answer that with an API. 

That tends to satisfy the desire for wanting SSH most of the time. I mean, as you said, people are still going to want to hold on to it, but I think over time we’re going to have to educate people that this is a better way. It’s a read-only API that gives operations engineers a way to get that information that they would otherwise get by SSH-ing and asking via Unix utilities what you want to know.  

[00:08:27] CC: When you say an API, are you also giving them a command line tool or like in the case of Talos, or only an actual API? 

[00:08:37] TG: Yeah, we do provide a command line interface to the API. It’s called OSCTL and it basically wraps our API, and our intention is that that will be used for exploration of the system, automation through scripting languages, etc. Then as you get more sophisticated with your environment, you might begin to build your own tools that interact directly with that API. 

[00:08:56] CC: Cool. Yeah, this is a really cool subject. I wasn’t even aware that Kubernetes operating system was a thing until really recently, and I don’t remember how I came across it. One question I have is, Andrew, you were saying, “Well, we strip down Kubernetes to the bare minimum.” How opinionated is it in your case in specific? When you say you – it’s a stripped down version to the bare minimum, this statement of bare minimum, would there be a consensus in the community that, yes, this set of functionality is the bare minimum? Is it your opinion of what the bare minimum should be?

[00:09:38] AR: Sure. I think at the absolute bare minimum, we need to run the kubelet. In my mind, that’s really all we need, but you still have this practical issue of, like you said, you need to get information off that machine. You need to be able to kind of manage Kubernetes without having to need Kubernetes as a chicken and egg’s problem. That’s where the API was actually born. 

When I started Talos, I actually just built a very minimal strip down route-fs that all that did was run the kubelet. But figuring out why the kubelet wasn’t running successfully obviously was not very easy. I figured, “You know what? Let’s put an API in front of this. I want to keep this as minimal as possible. I want to keep this read-only.” I threw an API in front of it. 

I think you need two things, really. You need to have what’s required by the kubelet. You need a CNI. You need all the utilities that the kubelet will run and you also need a way to query the system. If that is – If in the case of other operating systems that are minimal operating systems, they have decided to do SSH and all the classic utilities that we all know and love, we went another route with an API. But I don’t think the operating system, the route-fs should have any more than what’s required by the kubelet. That would be the pie in the sky dream right there. 

[00:11:01] CC: The two questions that come to my mind are if I wanted to add Kubernetes components to that, would it be possible? If I wanted to add anything to the operating system, would it possible? I think the second question you already answered, which is, well, if you need to run – Correct me if I’m wrong. If you need to run something on the operating system that’s not there, you can run it in the actual cluster. 

[00:11:27] AR: Yeah, that’s the idea, is that Kubernetes gives us the APIs to do – We could schedule to specific nodes. We can schedule to a class of nodes. We can schedule to every single node. I think that you can actually handle a lot of the use cases out there for any kind of application with Kubernetes itself. I think that that’s really strong because you get one single consistent API in managing your infrastructure. I want to deploy applications for this team or this team. At the end of the day, everything is just declarative and Kubernetes will make it happen. You don’t have to worry about the scheduling and all of these different things. The only thing that the operating system is concerned about is making that machine available to the Kubernetes cluster. 

[00:12:10] BL: This idea of slimmed down operating systems, it’s not a new one. CoreOS was doing this years ago. One issue that CoreOS ran into was like, “Well, what’s current?” Well, it depends on what stream you’re on. How do you manage keeping everything up-to-date?

[00:12:28] AR: Our goal is to keep pace with Kubernetes essentially. I know that, traditionally, there’s long-term support and there’s all these different ways of releasing different versions of an operating system, but Kubernetes isn’t really there yet. There is no notion that I know of of LTS in Kubernetes yet. There’s just, I believe, it’s N-2 or something like that where they actually offer official support. 

I think that the operating system is bound to that. I think that it needs to follow Kubernetes as close as possible. There’re constantly different feature gates being opened up. There’re things being graduated to GA. I think especially at this time right now, as rapid as the technology is changing, you need an operating system that is going to evolve with it or at least the operations intelligence to evolve with Kubernetes right alongside it. 

[00:13:20] BL: So that brings up an interesting point. I mean, there are two things here. There’s the operating system itself and there’s Kubernetes. Do they upgrade in lockstep or are they upgraded separately? 

[00:13:29] AR: I could only speak for ourselves. There are people that I think they actually have upgrades kind of be one and the same, where the operating system and a Kubernetes upgrade both happen. We’ve decided started to go the other route where we actually want to evolve our APIs sort of independently, but then give you a way to still manage Kubernetes on its own. We’ve actually done self-hosted Kubernetes. In Talos, we’ll actually bootstrap a lightweight control plane, small control plane and then we’ll spin up another control plane using the Kubernetes API. 

Then now, Kubernetes upgrades simply look like a kubectl edit. I’m going to update my daemon step for my API server. Then from there, you will have to basically update the kub. We use hyperkub for the kubelet. You have to tell Talos, “Use this kubelet image next time you boot.” 

We’ve separated the two I think for good reason. I think that the two should be able to evolve independently to give a little bit more power back to the user. If you combine them, if you couple them really closely, it becomes really, really opinionated. I think we should at least support what Kubernetes supports, and that’s the N-2 and leave it up to the user to kind of configure Kubernetes, but we still have same best practices out of the box.

[00:14:54] BL: Yeah, that makes sense, because yesterday, what did we get? We got a Kubernetes 1.15.10, and I don’t know 16, but we got 1.17.3 yesterday too. You might not want to move, because you might not – 1.17 introduced a whole bunch of deprecations and for custom resource definition. You’re not ready to move yet. We’re on beta 1 for a while for CRDs. I totally see why you had moved that direction.  

[00:15:20] AR: Yeah, that’s exactly it. We can’t impose too much opinion, but I think that we should drive – The opinion at least up until like, “Hey, don’t worry about what’s on this machine. I’m going to make it a Kubernetes node for you. Just tell me which version you want.” I think that’s where we should draw the boundary and then we should still give the controls back to the user as far as what flags do I want to specify. What kind of feature gates? All these various things that you don’t get out of a lot of the different managed products out there. Hopefully we’ll be tittering right on the line of having that convenience of managed but still giving you that power and flexibility to update a flag if you need to.

[00:16:04] CC: This episode is so in the style of an interrogation. It’s hilarious. 

[00:16:08] BL: That’s me. I’m digging in. 

[00:16:09] CC: I feel like – No. We are all digging in. It’s just because – At least speaking from myself. I’m super curious. I wanted to ask you, Andrew, at the beginning you were saying that a Kubernetes operating system needs to integrate with Kubernetes and I was sitting here thinking, “Operate? It’s supposed to be Kubernetes.” What did you have in mind when you said that? Did you mean to be able to interface with another Kubernetes cluster? Was that what you meant? 

[00:16:36] AR: Not quite. What I meant by that is there’s this really powerful thing that Kubernetes gives us in CRDs and this idea of operators or controllers. If you can actually have a way to use an operator controller, say, for upgrading your operating system, which we have in Talos, it’s just an upgrade operator lives in Kubernetes and knows how to talk to Kubernetes and it knows how to talk to our API and sort of orchestrate upgrades across the board. 

Part of that is, for example, when you receive the upgrade API on a Talos node, it actually is aware, “Hey, I’m running Kubernetes. I’m going to cordon myself, because I know I’ve gotten this and I know that I’m not going to be able to schedule workload on me.” I think that that’s just one example, but we could probably take that a lot farther one day. 

But I would like to see everything that we know and love about our operating systems today essentially be abstracted and pushed up into Kubernetes as operators. There’s a lot of power in that where you can actually orchestrate things, like I said, like upgrades. I think that that’s one example of how we can integrate better with Kubernetes as how an operating system should, at least. 

[00:17:45] CC: Got you.  

[00:17:46] JS: I was wondering if we can kind of maybe just pivot a little bit, like maybe to satisfy my own curiosities, but I was kind of hoping we could talk a little bit about like some of the selling features. Imagine if I’m a hardened sys admin or security team and basically someone comes up and says, “Hey, I want to run this Kubernetes operating system.” Knowing what I know about the state of security today and operating systems, there’s a lot of efforts to basically kind of contain things. No pun intended, but we have user space operates out of some type of sandbox. We have seccomp to limit sys calls. How does Talos approach security maybe like philosophically or maybe even down to the implementation details? What is security in Talos look like?

[00:18:33] AR: Yeah. Again, our goal is to basically – We want people to forget about the operating system. But to forget about the operating system, you have to know it’s secure. You have to go to great lengths to secure that because you can’t forget about it for that reason. We actually go down to the kernel, we actually apply what’s called the kernel self-protection project. We basically try to harden the kernel, and at boot time, we do a bunch of checks to make sure that your kernel is running at least most of those configurations. I think we have a little bit of work to do as far as enforcing all of them. But we do some checks to ensure that your kernel is compatible with KSPP, for example. 

That alone has a ton of benefits to it. It’s a statically compiled kernel so you it can’t do any kernel module loading and stuff like that. That’s completely prohibited. That alone just kind of cuts off a lot of security issues in itself. Then going up the stack further, we’ve actually stripped out SSH. We stripped out Bash. So you have nothing that you can really log on to anymore. 

Again, that’s just flat out removes a lot of – A whole category of potential attacks potentially. Going even further than that, we’ve actually have Talos running completely out of RAM and it’s a squash-fs. So it’s a read-only file system. The only thing that actually uses a disk is the kubelet. The idea is that we want to make the operating system, again, just have it go away. Having it read-only I think is a really strong thing, and squash-fs in particular, because you can’t remount it, rewrite if you’re a user or something like that. 

Then up in Kubernetes we actually – Out of the box, we try to deploy it with all of the security best practices, the CIS benchmarks and all of that. We go to all the way from the kernel, to our user LAN and even to Kubernetes itself. We try to bring out security best practices out of the box. I think that’s something I’d love to see for Kubernetes itself upstream, but for now that’s what we’re doing. 

[00:20:33] BL: Can we go back to the interrogation? No. Let’s not go back to an interrogation. Thinking of – If we take the concept of a Kubernetes operating system, that can be updated in a different cadence, then the Kubernetes running on it – Who is Talos for? Who does it make – Could Joe as a neophyte or someone who doesn’t really know the space, will this make their life any easier or is there a special set of expertise that we would need to be fruitful with this? 

[00:21:06] TG: I think from our perspective, we hope that everybody who uses Kubernetes would find something useful in Talos, or a system like Talos. Number one, I think Talos would be a great way to get started on your laptop or workstation. I got some basic features to standup a small Kubernetes cluster there. That’s one place to start. As you move further into production, I think that a Kubernetes OS-based platform would be particularly useful in an environment where you might have multiple clusters spread across different geographical locations, spread across different teams. Maybe spread across different hosting environments. 

We’ve talked to a number of folks who have been running Kubernetess in production for a couple of years now, and these clusters kind of come up organically within a larger organization in different areas, doing different things for the business, managed by different teams. Now that a little bit of time has passed, these organizations are realizing that, “Hey, we’ve got kind of a Kubernetes sprawl problem. We have this team over here on Amazon managing and running Kubernetes one way. We have a separate team managing and running Kubernetes a different way over here on a different kind of platform.”

I think anything that – anywhere where we can drive some consistency across the tooling, consistency across the base platforms would be useful. We also think that the minimal aspect of our system and some of the design decisions we’ve made around security and make it particularly useful in maybe a regulated environment. I think that that claim would hold true for any sort of special purpose operating system or minimal operating system designed for a specific task. 

[00:22:35] BL: Interesting. Just thinking about a concept of a Kubernetes operating system, what’s next? I’m not asking what’s next from Talos, but given all the opportunity all the time and all the knowledge. What should we be doing that we’re not doing right now? 

[00:22:49] AR: Specifically around operating systems or Kubernetes? 

[00:22:52] BL: Well, you know what? You can start with operating systems. I mean, you can go to Kubernetes and then we’ll see if our lists match.  

[00:22:57] AR: That’s a good question. Right off the bat, I’m going to say I don’t really know. I think this is new space. I think that we have a big task in front of us already in getting people to use these kinds of operating systems, hopefully not too big of a task. I’m hoping to see – Because you find these big companies, “Oh! We can’t do this. We can’t do that,” because getting a new OS is hard. 

I think we first of all need to win people over on just these even more minimal operating systems beyond what CoreOS has done. Personally, I don’t know if I could answer that question honestly without just owing something.  

[00:23:33] TG: I’ve got a thought here. One of the things that I’m really interested in beyond just Kubernetes and beyond just the operating system – what is computing going to look like in 5, 10, 15 years? I don’t know if Kubernetes is going to be around. I’m kind of a tech-cynic, right? I’ve seen a lot of fads in my career and things that pop up and are very popular for a couple of years and then sort of disappear. I don’t think Kubernetes is one of those. I think Kubernetes and the concepts and the layers of abstraction that Kubernetes has provided, all of that will remain useful and powerful in distant future whether or not it’s called Kubernetes or if it’s called something else, some new paradigm. 

But what I’m really interested in is seeing what can we do with this idea of an API-managed OS? If you look at the general purpose operating systems out there, some aspects of the system might expose an API. But for the most part, you’re still interacting and interfacing with this system like you were 30 years ago, 35, 40 years ago even. That’s fine. What works works, but everything else today has an API. Kubernetes has a powerful and extensible API and I think that your operating system should have something similar, something comparable, something that you can interact with using the same tools and the same processes and the same ideas that you can at the top of the stack and move some of those concepts down to the host OS level where we’re talking about today. 

[00:24:51] CC: This brings up a point that I’m so curious about, not only the idea of having a Kubernetes operating system, but any idea that is new that you were just talking about, Tim, is – So what works works. For example, every year or every couple of years, I am evaluating a new code editor or I am evaluating a new note taking app, or do-to-list app, those three things. I’m continuously finding something to reevaluate because what I have has never worked for me just the way I think. Actually, recently I found a couple of things that are really good. 

In any case, the thing is they just never worked for years. They’re very limited. They don’t match my thinking. But operating system, I would never – Well, I’m not an administrator also, but just like from having my own laptops forever, I’m not going to go out there. That’s not true either, but I was going to say I’m not going to go out there and try a new operating system to see if it’s offering that I already have, then it might be better for me. But that’s not true, because I have done that many times too. So never mind. 

But I think the idea of my question is stance, is how are you communicating to people out there that, “Hey, there is this new thing that maybe it’s working for you – Maybe you think it’s working for you, but you just don’t know that there is a new different way of doing.” When you do try to do that, how are people responding?

I mean, of course, there are those cases where people just know they get it and they immediately resonate with them. But I’m talking about the people who like might benefit from this but they don’t quite grasp. How do you break through that barrier? 

[00:26:38] TG: Sure. Maybe the lay majority.

[00:26:40] CC: Yeah, and how are people responding?  

[00:26:42] TG: Yeah. The great thing about Talos is that people understand pretty immediately what it is, how it works and why we’ve done it. The challenge I think for us and for anybody changing the way that operating systems work. Is it better enough than what I have today or what I had before? Is it worth the switch in costs? I think that switching cost is something that’s pretty well understood in the industry. People have gone through this process and they’ve moved from virtualization to containers, from Docker to Kubernetes, etc. They understand that process and they understand there’s a technical cost. There’s a people cost, etc. We have to show that value.  

I think that progress in our industry is incremental. Our industry is young. We’re not building bridges. We’re not at the level of like the internal combustion engine where the engineering is understood and we know how to build it and we know how to make it so that it doesn’t fall over and explode. Clearly, we’re not quite there yet in the broader world of computing. 

I think anywhere where we can show a little bit of incremental improvement where we can tackle one narrow slice of a problem and make it a little bit better and get to a point where computing is just a little bit safer and a little bit easier and a little bit faster. I think that’ll be a pretty compelling argument and there’s a lot of details involved and we have to talk about how do you get your applications from one operating system to the next? 

15 years ago, it may have been a very big ask to ask someone to port their enterprise application from one operating system to another. They’re so inextricably linked. There’re a lot of connections between the OS and the applications, but today, we have these levels of abstraction. We have containers. We have the Kubernetes orchestration mechanisms and I think that switching cost is going down every release of Kubernetes and every step along the way as people change the way that applications are deployed that switching cost gets a little bit cheaper. It will be easier for us to prove that the value you gain by moving to a purpose-built operating system is greater than the switching cost. 

[00:28:41] CC: Very good points.  

[00:28:42] JS: I feel like there’s a lot of emphasis and focus on the move over. The first steps toward migrating to something new. There’s a lot of emphasis on bootstrapping a cluster. There’s a lot of emphasis on how do I get started. I’m part of a team called customer reliability engineering and we see operators running Kubernetes environments that are durable and have been in the field for many years. I think that there’s kind of a hidden cost in these day two operations where, like today, to effectively be a Kubernetes operator, you need to also have a great deal of understanding of Linux internal operating systems or Linux operating systems internals. These are abstractions on top, but sometimes those abstractions are leaky. So you need to be able to parse IP tables rules. You need to be able to understand how traffic gets routed, all of these aspects of it. 

I’m just wondering how do we kind of get folks shifted from this mindset of I’m going to start with something that’s general purpose and then I’m going to basically make it do what I want it to do by making all of these configuration changes and installing things on top of it to kind of make that not general purpose, but kind of specific focus on it and kind of get people to move back more fundamentally and think, “Well, what if we just started with something that is strictly for running workloads?” We don’t have to worry about installing a security suite on top of this or making this configuration change or hardening requirements or what have you. We’re fundamentally in a better place because we’ve started with something that’s arguably more secure. 

[00:30:21] BL: You know that – I mean, I’m old. I’m old now. I’m realizing this. When I started – Back in my day when we started with Linux, we went through this whole thing of Linux installers and there’re many iterations of Linux installers and it depended on, “Well, did you like what Red Hat was doing? Did you like what Debian project was doing? Oh! Did you like what Arch was doing? Oh! Did you want to do it yourself? Do you want to merge the world with gen 2?”

Really, we come to this point now, no one ever talks about Linux installers anymore. You just put it on there. I think what I’m getting at is that we don’t actually know what we want. I mean we say that we want it to be simpler. We say we want it to be more secure, but we don’t know. Only time will tell, and I think it’s going to be a lot of chipping away at problems. Then people who are wanting to have the bold ideas are saying, “I’m going to out there and create a Kubernetes operating system.” In reality, it may work. We hope it works, or it may not work, but at least we gained just a little tiny bit more knowledge on how we want to run this thing. 

I think – And I’ll just say one more last thing, is that if you look at like Bell Labs, Bell Labs created the vacuum tube, and then like 20 years later, 20 or 30 years later, they created the transistor, twice actually. It took a long time to get the vacuum tube out because it kind of just worked and they just said, “We can’t throw it back. We just can’t throw that away.” 

Maybe we’re seeing a lot of that in Kubernetes. We’re holding on to some good things even though some greater things are going to come, but it might not be here this year or next year. It might be 18 months. It might be 24 months. We just got to really pay attention to that. 

[00:32:02] AR: Brian, when you said you were old, I was going to shake my head internally and then you brought up the vacuum tube and I’m like, “Okay.”

[00:32:07] BL: I mean, I’m not that old.  

[00:32:09] JS: Yeah, I think that’s a good point, Brian. The thing I like to point out is the allegory of the cave. People have been living a certain way for so long they think that these shadows are real and they just know that way of life until some crazy comes along and says, “Hey, there’s a whole world out there,” and no one believes him.

I think we just need to do – Like you said, we just need to do it. When you just create and make it happen and hopefully educate people in the process and just keep chipping away at it. Do the good work.  

[00:32:38] BL: That’s the important piece and that was the power of Bell Labs. You probably can tell. I just read a book about Bell Labs. I’m an expert now. But that was the power of Bell Labs. They didn’t just focus on making product for AT&T. They focused on changing the world, like literally. Who creates a transistor if you knew what one was? You just don’t create that. That’s like some really crazy stuff. 

I try to bring the parallel back to what we’re doing here. We can’t just create this perfect Kubernetes thing, because really, we don’t know what it is. I mean, we can be smart and say, “Well, it needs to be secure. It needs to be networking,” and all these stuff. But you know what? We don’t even have cgroups v2 support yet. We don’t even know where we are. Let’s figure out – Let’s just keep going down the path, but we will suss out these better patterns. 

[00:33:23] CC: Yeah, I like that.  

[00:33:24] BL: That’s it. It is incremental. Here’s the crazy part, and this is the real tough part. You know what? It is incremental, and reality says that not everybody can win. Don’t take your failures as a loss. Take them as, “well, maybe we shouldn’t have done that,” and keep on moving forward because there’s a lot of companies out there who got us at this point in tech that don’t exist anymore, but if they didn’t do what they did, we would not be here right now. It’s not [inaudible 00:33:52].

[00:33:53] CC: Why are we talking about failures? 

[00:33:55] BL: I’m sorry. It’s the ultimate success.  

[00:34:01] CC: Oh gosh! Let’s not end the show in such a downer. 

[00:34:04] BL: No. That’s a happy point though. Let me put the bow on the happy point and then I will stop talking. The thing is, is it’s not the glass is half empty. It is glass is half full. The path to success is littered with failure and it’s not a bad thing. It’s a good thing, because it’s good that we can continue making those failures because we know they lead to successes. That is actually a happy thing. 

[00:34:29] CC: I wonder if Andrew and Tim want to do a little bit of interrogating of us. I think that would be fair.

[00:34:36] AR: I wouldn’t know what to interrogate you guys about.  

[00:34:40] CC: Well, we are coming up at the top of the hour. So it’s time to say goodbye. It was great having you, Andrew, and you, Tim, on the call. Jed, thank you for participating as well. I think it was very informative. With that, I will say, until next week. Bye everybody. 

[00:34:59] TG: Bye. Thanks for having us.  

[00:35:00] CC: My pleasure. 

[00:35:00] AR: Bye-bye. Thank you.

[00:35:02] JS: Thank you. Bye. 

[END OF INTERVIEW] 

[0:35:05.3] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
