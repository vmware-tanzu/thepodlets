---
episode_id: 014-jobs-in-cloud-native
episode_number: 14 
title: Jobs in Cloud Native
description: Our topic in today's great episode is how we think jobs in software engineering have changed since the advent of cloud native computing. 
notes: Our topic in today's great episode is how we think jobs in software engineering have changed since the advent of cloud native computing. We begin by giving our listeners an idea of our jobs and speak more to what a job in cloud native would look like as well as how Kubernetes fits into the whole picture. Next up we cover some old challenges and how advances in the field have made those go away while simultaneously opening the gateway to even more abstract problems. We talk about some of the specific new developments and how they have changed certain jobs. For example, QA has not disappeared but rather evolved toward becoming ever more automated, and language evolution has left more space for actual development instead of debugging. Our conversation shifts toward some tips for what to know to get into cloud native and where to find this information. We wrap up our conversation with some thoughts on the future of this exciting space, predicting how it might change but also how it should change. Software engineering is still in a place where it is continuously breaking new ground, so tune in to hear why you should be learning as much as you can about development right now.
hosts: 
   - name: Carlisia Campos
     url: https://twitter.com/carlisia
   - name: Bryan Liles
     url: https://twitter.com/bryanl
   - name: Nicholas Lane
     url: https://twitter.com/apinick
points:
    - The work descriptions of our hosts who merge development, sysadmin, and consulting.
    - What a cloud native related job looks like.
    - Conceptualizing cloud native in relation to development, sysadmin, and DevOps.
    - A cloud native job is anything related to building software for other people’s computers.
    - Kubernetes is just one way of helping software run easily on a cloud.
    - Differences between cloud native today and 10 years ago, added ease through more support.
    - How cloud native developing is the new full stack due to the wide skillset required.
    - An argument that old challenges are gone but have introduced more abstract ones.
    - Advances making transitioning from testing to production more problem-free.
    - How QA has turned into SDE, meaning engineers now write software that tests.
    - Why jobs have matured after the invention of cloud native.
    - Whether the changes in jobs have been one of titles or function.
    - How languages like Rust, Go, and Swift have changed developer jobs by being less buggy.
    - What good support equates to, beyond names like CRE and company size.
    - The many things people who want to get into cloud native should know.
    - Prospective cloud native workers should understand OSs, networking, and more.
    - Different training programs for learning Kubernetes such as CKA and CKAD.
    - Resources for learning such as books, YouTube videos, and podcasts.
    - Predictions and recommendations for the future of cloud native. 
    - Tips for recruiters such as knowing the software they are hiring for.
links:
    - name: Azure 
      url: https://azure.microsoft.com/en-us/
    - name: Google Cloud Platform
      url: https://cloud.google.com/
    - name: AWS 
      url: https://aws.amazon.com/
    - name: Amazon RDS
      url:  https://aws.amazon.com/rds/
    - name: Mesosphere
      url: https://d2iq.com/
    - name: Aurora
      url: https://stackshare.io/stackups/aurora-vs-mesos-vs-mesosphere
    - name: Marathon
      url: https://mesosphere.github.io/marathon/
    - name: Rails Rumble 
      url: http://blog.railsrumble.com/
    - name: Terraform 
      url: https://www.terraform.io/intro/index.html
    - name: Swift
      url: https://developer.apple.com/swift/
    - name: Go
      url: https://golang.org/
    - name: Rust
      url:  https://www.rust-lang.org/
    - name: DigitalOcean 
      url: https://www.digitalocean.com/
    - name: Docker
      url:  https://www.docker.com/
    - name: Swarm 
      url: https://www.santafe.edu/research/results/working-papers/the-swarm-simulation-system-a-toolkit-for-building
    - name: HashiCorp 
      url: https://www.hashicorp.com/
    - name: Programming Kubernetes on Amazon 
      url: https://www.amazon.com/Programming-Kubernetes-Developing-Native-Applications/dp/1492047104
    - name: The Kubernetes Cookbook on Amazon 
      url: https://www.amazon.com/Kubernetes-Cookbook-Building-Native-Applications/dp/1491979682
    - name: Kubernetes Patterns on Amazon 
      url: https://www.amazon.com/Kubernetes-Patterns-Designing-Cloud-Native-Applications/dp/1492050288
    - name: Cloud Native DevOps with Kubernetes on Amazon
      url: https://www.amazon.com/Cloud-Native-DevOps-Kubernetes-Applications/dp/1492040762
    - name: Kubernetes in Action on Amazon 
      url: https://www.amazon.com/Kubernetes-Action-Marko-Luksa/dp/1617293725 
    - name: Managing Kubernetes on Amazon 
      url: https://www.amazon.com/Managing-Kubernetes-Operating-Clusters-World/dp/149203391X
video: https://www.youtube.com/embed/HCqOJvf15RA
related: 
- 007-kubernetes-as-per-kelsey-hightower
- 001-cloud-native
---
EPISODE 14

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.3] NL: Hello and welcome back. This week, we’ll be discussing the thing that’s brought us all together, our jobs. But not just our jobs. I think we’re going to be talking about the difference kind of jobs you can find in cloud native land. This time, I’m your host, Nicolas Lane and with me are Brian Liles.

[0:00:57.1]  BL: Howdy.

[0:00:58.0] NL: And Carlisia Campos.

[0:00:59.6] CC: Hi everybody, glad to be here.

[0:01:02.6] NL: How’s it going you all?

[0:01:03.7] CC: Very good.

[0:01:05.4] NL: Cool. To get us started, let’s talk about our jobs and like what it means to have a job and like the cloud native land from our current perspective. Brian, you want to go ahead and kick us off?

[0:01:17.8] BL: Wow, cloud native jobs. What is my job? My job is – I look at productivity of developers and people who are using Kubernetes. My job is to understand cloud native apps but also understand that the systems that they are running on are complex and whether they’d be Windows or Linux or Mac based, being able to understand those too. Really, my job is the combination of a senior developer, composed with a senior level admin. Whether it be Windows or Linux. 

Maybe I am the actual epitome of DevOps.

[0:01:58.5] NL: Yeah you seem to be kind of fusion of the two. Carlisia?

[0:02:03.3] CC: My job is – so I’m mainly a developer but to do the job that I need to do, I need to be a bit of a DevOps person as well because as I’ve talked many times here on the show, I work on an open source too called Valero that does backup and recovery for Kubernetes clusters. I need to be able to boot up our cluster at least with three main providers. Azure, Google Cloud Platform, and AWS. I need to know how to do that, how to tweak things, how to troubleshoot things and I don’t think when we think of just a straight up developer, that usually is not part of the daily activity.

In that sense, I think, I’m not sure how we would define the cloud native job but I think my job, if there is such a thing, my job definitely is a cloud native job because I have to interact with these cloud native technologies, even beyond what I – the actual app that I’m developing which runs inside a Kubernetes cluster so it all ties in. You Nick?

[0:03:16.0] NL: My job is I’m a cloud native architect or a Kubernetes architect, I’m not sure what we’re calling ourselves these days honestly. What that means is we work with customers to help them along their cloud native journey. Either that means helping them set up like a Kubernetes cluster and then getting them like running with certain tools that are going to make there life easier or helping them develop tools in their cloud environments to help make the running of their jobs easier.

We kind of run the gamut of developers and sys. admins a bit and consultants. We kind of touch a little bit of everything.

Let’s take a step back now and talk about what we think a cloud native job looks like? Because for me, that’s kind of hard to describe. A cloud native job seems to be any job that has to do with some cloud native technology but that’s kind of broad, right?

You could have things from sysadmins, people who are running their cloud infrastructure for the company who are like managing things like, you know, rights access, accounting, that sort of thing, to people who are doing development like yourselves, like Brian and Carlisia, you guys are doing this type of work. Is there anything that you think is like unique to a cloud native job?

[0:04:35.2] CC: Yeah, it’s very interesting to talk about I think because especially in relation to if you don’t have a cloud native job, what do you have and how is it different? I wonder if the new cloud native job title is the new full stack developer for developers because, I think it’s easier to conceptualize what a cloud native job is for a systems admin or dev ops person. 

But for developer, I think it’s a little more tricky, right? Is it the new full stack? Is it now that the developer even if you’re not doing – for example, my application runs inside Kubernetes, it’s an extension of Kubernetes but some applications just run on Kubernetes as a platform. Now, are we talking about developers with a cloud native title like ‘cloud native software engineer’ and for those developers, does it mean that they now have to design, code and deploy consistently? 

You know, in my old days, when I – before doing this type of work, I would deploy apps but it was not all the time. There was a system, every single job I had, the system was different. The one thing that I love about Kubernetes is that if I was just a regular app developer, again as supposed to like extending Kubernetes, right? 

If I was building apps that would run on Kubernetes as supposed to extending Kubernetes, and if I had to deploy them at Kubernetes, if I move jobs and they were working with Kubernetes, this process would be exactly the same and that’s one really cool thing about. I wouldn’t mind – in other words, I wouldn’t mind so much if I had to do deployment in the deployment, the process was the same everywhere.

Because it’s really painful to do like a one off deployment here and there, each place was different, I had to write a ton of notes to make sure, you know – it was like, 200 stacks and if anyone of them, you had to troubleshoot and I’m not a systems admin so it will be a struggle.

[0:06:44.6] BL: Yeah.

[0:06:45.8] CC: Because each system – it’s not that I couldn’t learn but each system would be different and I make – anyway, I think I went off on a tangent.

[0:06:53.1] NL: No worries.

[0:06:54.1] CC: But I also wanted to mention that I searched on LinkedIn for cloud native in the jobs section and there are a ton of job titles, job postings with cloud native in the title like a lot of it is architect but there is also product manager, there is also software engineer, I found the one that was senior Kubernetes engineer. It’s definitely a thing.

[0:07:21.0] BL: All right. What is the question here? 

[0:07:25.6] NL: It was what do we think a cloud native job looks like essentially?

[0:07:29.6] BL: All right. I’m going to blow your mind here. Basically, what is the cloud? The cloud is other people’s computers. It's LPC and what is Kubernetes? Well, basically, it’s a way that we can run our software on other people’s computers, AKA the cloud. Kubernetes makes running software in the cloud easier. What that really breaks down to is if you are writing software on other people’s computers or if you were designing software that runs well on clouds, well, you’re a cloud native person. Actually, the term is basically been co opted for marketing purposes by who knows who.Basically, everyone.

But what I think is, as long as you are working on software that runs on modern infrastructure which means that nodes may go away, you might not own all of your services, you might use a least database server, you know, something like RDS from Amazon. Everyone working in that realm, working with software that may go away with things that aren’t theirs, was doing cloud native work.

We just happen to be doing on Kubernetes because that’s the most popular option right now. It isn’t the only option and it probably won’t be the final option.

[0:08:48.7] CC: Do you see any difference between what is required for a job like that today? Versus maybe 10 years ago or five years ago? Brian?

[0:08:58.0] BL: Yeah, actually, I do see some differences. One of the biggest differences is that there’s a lot more services out there that are provided to help you do what you need to do and so 10 years ago, having a database provider would be hard because one, the network wouldn’t be good enough and you’re hosting company probably didn’t have that unless you were at AWS and even they didn’t have that.

Now, what we get to take advantage off is things are just easier, it’s easier to fire up databases, it’s easier to add nodes to our production. It’s easier to have multiple productions, it’s easier to keep that all in order. It’s easier to put automated configuration around that than it was 10 years ago. 

Now, five years ago, back in 2014, I would actually say that the way that we progressed since then is that we became more mature. I remember when Kubernetes came out and I thought it was going to win but Mesosphere was, mesosphere with Aurora, or marathon was actually better than Kubernetes, just it worked out of the box, for what we thought we could do with it but now, what we have now is we know what we can do with distributed computing and now we have a great set of software for multiple vendors who allow us to do what we want to do.

That’s the best part about now versus five years ago.

[0:10:17.7] CC: Yeah, I have to agree with that, it’s definitely easier. As a developer, I’m not going to tell you it’s easy but it’s easier. As an example. I remember when that was Rails Rumble maybe 10 years ago, I don’t know.

[0:10:31.3] BL: Yeah, I remember.

[0:10:34.0] CC: You did a video showing step by step how to boot up a Linux server to run apps on that server. I don’t remember why we needed to boot up from scratch. Remember that Brian?

[0:10:46.9] BL: I do remember that. That was 2007 or eight? It was a long time ago. 

[0:10:53.0] CC: That was one of the place that made me very impressed about you because I followed all the steps and at the end it worked. You just was – you were right on with – as far as the instructions went.

I think doing that, I think it took me about two hours, I remember it took a long time and because this again, these are things that I do once in a while, I don’t do these things all the time.  Now, we can use a Terraform script and have something running in a matter of 15 minutes if you have.

[0:11:26.9] BL: Side bar. Quick side bar. Yeah, we can use Terraform. I use Terraform for even all my personal infrastructure so things that are running in my house use Terraform. All my work stuff uses Terraform. But still, it’s sometimes easier to just write a script or type in the commands on the command line or click something. We’re still not to the point where using things like Terraform actually makes us not want to do it manually. That’s how I know that we’re not to our ultimate level maturity yet.

But, if you want to, the options are there and they’re pretty good.

[0:12:01.8] CC: Yeah.

[0:12:03.6] NL: Carlisia, you said something that kind of reminded me and maybe kind of get down this path. While we’re talking about like there are certain challenges that we aren’t faced anymore in a cloud native land like things are easier, there are certain things that are easier, not to say that our jobs are easy, like you’re saying Carlisia. But it was something along the lines of like a developer now needs to be – like a cloud native job is now the full stack kind of job or full stack developer. That was the name of the game back in the day, now, it’s a cloud native job.

I actually kind of agree with that in a sense where a cloud native developer or anyone in the cloud native realm has to exist not just in their own silo anymore. You need to understand more of the infrastructure that you’re using to write your code on someone else’s computer better. I actually kind of like that.

[0:12:56.6] CC: Exactly.

[0:12:58.0] NL: Yeah, there are certain challenges now in cloud native that are gone so the things that were hard before like spinning up a server, you know, getting the database, these things are gone and that now that frees us to worry about more complicated or more abstract ideas like how do we have everyone agree on the API to use and thus rises Kubernetes.

[0:13:19.1] CC: Yeah, I see that as a very positive thing. It might sound like – it’s a huge burden to ask developers to now have to now this but again, if we stick to the same stack, the burden diminishes really quickly because you learn it once and then that’s it. That’s been a huge advantage. If it works out this way, I mean, I’m all for like you know, the best technology should win. But there is that advantage.

If we remain using the same container orchestrator, you know, we use containers, we can run our code as if we were running any machine. One advantage that I see is that I’ve had cases where you know, these was working on my computer (™) and it will be deployed and one little stupid thing wouldn’t work because the way the URL was redirected, didn’t work, broke things, I got yelled at. I’m like, “Okay, you want me to do this right? Give me a server.”

Back then, good luck, “I’m going to give you a server, no way.” It was just so expensive, developers will be lucky to get a tasking of our staging environments. And, even when you get there, you had to coordinate with QA and there was a process.

Now, because I have access to my own servers here, right? I can just imagine if I were a developer, building apps to run Kubernetes, admin could just say, “Okay, you have these resources, go for it.” I’ll have my own name space and I could run my code as if it was running and a production environment and I’ll have just more assurance that my code works basically. Which is to me so satisfying. It’s one less thing to worry about if I deploy something to production, I have already tested it.

[0:15:17.3] NL: Yeah, that’s great. That’s something I really do cherish about the current landscape. We can actually test these things out locally and have confidence that they’ll work at least fairly well in production, right?

[0:15:30.2] CC: It’s not just running things locally, you can actually get access to like a little slice of let’s say an AWS server and just shift your things there and test it there. But because these system admins people, they can just carve out that little one slice for your team of even in the per person basis, maybe that’s too much but it’s relatively uncomplicated to do that and not very costly.

[0:15:56.9] NL: Yeah. You mentioned a team and the name of a team that I haven’t heard of in quite some time which is QA. How do we think the rise of cloud native have affected jobs and also kind of tangential to that, what were jobs like prior to cloud native because I haven’t heard of a QA team in many of the organizations that I’ve touched. Now, I’m not touching their like production dev team that they actually make this, I just haven’t heard of that name in a while and I’m wondering if like jobs like that have kind of gone away with the rise of cloud native.

[0:16:27.7] BL: No, I’m going to end that rumor right here, that is a whole untruth.

[0:16:33.8] NL: That was not a rumor, I’ve just conjecture I my part, literally unfounded. 

[0:16:38.7] BL: We got to think what does QA do? QA is supposed to be responsible for the quality of our applications and when they first started, there wasn’t a lot of good tooling so a lot of our QA people were manual testers. They started the app, they clicked on everything, they put in all the inputs until it came back and they were professional app breakers.

I’d say, over a decade ago, we got more automated tools and moving into now, you can automate your web browser, you can actually write software to do all the actions that a human would do. What we found is that QA as profession has actually matured and you can see that because Google, I don’t think they even have QA, they have, what do they call them? Software engineers under test or SDE’s. What they do are – they’re developers in their own right but they write software that makes it easier for developers to write code that works well and a code that can be tested. I think that the roll has matured and has taken another angle in a lot of cases but even where we work.

There are QA engineers in our group and we still need them because you’ve seen the meme where you talk about unit testing and it would be like a door that had all the right parts but it didn’t fit in it’s casing or too hot handles on a sink. The pieces work right? They both put out hot water but together they didn’t work. We still have that, it just looks a little bit different now.

Also, a lot of software is not written in a huge monolithic cycle where we would take six months to release anew version or a year or a year and a half. Now, people are trying to turn around a lot of software quicker so QA has had to optimize how they work to work in those processes. They’re still there though.

[0:18:37.8] CC: I would hope so. I mean, I can’t answer the question if the question is do we have as much QA efforts out there as before. I don’t know, but I hope so because if you don’t have a QA, if you’re not QAing your apps, then you’re users are. That’s not good. For my team for example, we do our own QA but we do QA. We don’t have separate people doing it, we do it ourselves. It might be just because it’s pretty special, I mean, we are a small team to begin with and what we do is very specialized. It will be difficult to bring someone in and teach them and if they’re just running QA, I don’t know, maybe – I don’t think it will be that difficult, we can just have constructions, you know.

“Run this command, this is what the output should be” – I don’t’ think it would be that difficult, take that back, but still, we do it ourselves.

[0:19:31.7] NL: The question was more – less in line with like, “What happened to QA?” It was more like, how do we think that cloud native has affected jobs and the job market and it sounds like, that jobs have changed because of cloud native, they’ve matured as we were just discussing with QA where people aren’t doing the same kind of drudgery or the same kind of toil that they were doing before. Now, we’re using more tooling to do our jobs and kind of lifting up each position to be more cloud native-y, right? More development and infrastructure focus at the same time. At least, that’s what I was getting from it.

[0:20:09.8] BL: Yeah, I think that is true but I think all types of development jobs, especially jobs that are in the cloud native space have changed. One good example would be, with organizations moving to cloud native apps, we’re starting to see, and this is all anecdotal, I have no evidence to back this up, that there are more developers who are on call for the software they write because one, they know it better than anyone else and they’re closer to it.

And two, because having an ops group that just supports app isn’t conducive to being productive because there’s no way that one group can understand all apps. What we’re finding is that in this new cloud native era that jobs are maturing and they’re getting new functionality, they’re losing some functionality, some jobs are combining but it’s still at the end of the day, it’s the same thing we were doing 20 years ago but it all just has new titles and we use new software to do it. Which is good.

Because on some of these ideas that we came up with, 20, 30 years ago are still good ones today.

[0:21:15.5] NL: Yeah, that’s actually an interesting question. Do you think that it’s just the titles that are changing or are the functions changing, right? It’s like sys admins used to be sys admins, now they’re CREs, well then there are dev ops for a while and now they’re CRE’s, more SRA’s I should say. Our support team are now CREs, Customer Reliability Engineering. Is that just a title change or are there functional differences? I’m inclined to believe that they’re functional differences.

[0:21:43.9] BL: I think it’s both, I think it’s the same reason why all engineers after two years in the field are somehow senior engineers. People feel like they have progress when they get new titles even though you’re the most junior engineer on this team, how can you be a senior engineer?

And then also the same thing with CRE, shout out to Google for making that term popular but really, what it comes down to is maybe the focus changed but maybe it didn’t. Maybe we were already doing that, maybe we were already doing resilience engineering with our customers and maybe we already had great customer support or customer success team.

But I do think that there has been some changes in jobs because what we’re finding is that with modern languages that people are using so teams are moving away from C++ to things like Swift and Go and Rust. We’re finding that because our software is easier to write, we actually don’t have to think about some of the things that we did before.


With Go, technically, you don‘t have to worry about memory access. With Rust, 100%, you don’t have to worry about null pointer exceptions, they don’t exist. Now that we freed our developers to do more development rather than more debugging, then what we can find is that the jobs will actually change over time.

But at the end of the day, and even where we work right now and then all over the place, people are devs, they do ops stuff, they do security stuff or they’re pointing here at Boston. I challenge anyone listening to this to find something where I am not telling the truth, we might do both or more than one thing but at the end of the day, we can still break it down to what people do.

[0:23:24.8] NL: Yeah, Carlisia, any thoughts on that?

[0:23:26.1] CC: No, I think that was nice with me, sounds right.

[0:23:29.8] NL: Yeah, I agree. I think that there are some functional changes. I think that support versus CRE isn’t just like getting tickets received and then going to a ticket queue and filing those things. I think there are some changes with like, I know from our CRE team they are actively going out and saying like, “Here’s our opinion based on these technologies and this is like why we validated these things,” that are reevaluating their support model constantly and just making sure that they’re like abreast of everything that’s going on so they can more resiliently engineer their customer support.

[0:24:04.5] BL: But hold on, one second though. That’s what I’m talking about with the marketing because guess what? It is supported, a good support team would be doing all those things whether it’s called customer reliability engineering or whatever, it’s support, it’s customer success, it’s getting in front of our customer’s problems and having the answers before they even ask the question, that’s good support.

Whenever we label things like CRE, that’s somebody and some corporate marketing center who thought that that was a good idea. But it doesn’t mean because you don’t call that CRE, it’s not good support because I will tell you in the past, DigitalOcean, we did that and the term CRE didn’t even exist yet but we were out there in front of problems whenever we could be and we thought that was good for our customers. What we’re finding is that people have the capabilities now with the progress of whatever technologies we have that we can actually give our customers good support, and you don’t have to be a Google sized company to do that anymore, that’s the plus. 

[0:25:02.9] NL: Yeah, I agree with that. 

[0:25:05.5] CC: I want us to talk a little bit about for people who are not working in a cloud native space but they see it coming or they want to move towards doing something more in that area, what should they be looking at? What should that be brushing up on their learning or incorporating into their what they are currently doing and of course different roles and so it will be different for each different role. We have developers we have DevOps or SRE or admins or operators, managers, recruiters. It changes a little bit for everybody. 

[0:25:47.5] BL: Well I will hop in here first and say it is all code at the end of the day. When it comes down to what we are doing in cloud native for ops, it doesn’t really matter. You could take a lot of the same principles and do them on prem or wherever else you happen to be. I mean I am not trying to diminish the role of anyone that we work with or anyone in our industry whenever I say this though but when it comes down to it, what I see is people understand the operating system, mostly Linux. 

People understand public key encryption so they understand PKI, you know we deal with a lot of certs. They understand networking, they can tell you how many IPs are in a 23 and if I am giving you side or numbers out there. These are things that people know. I don’t think there is anything specific for cloud native other than learning Kubernetes itself or Mesosphere or Docker, Swarm or whatever or the tool from HashiCorp that always escapes me whenever I have to say it out loud. But it is all the same thing. 

What you need to know and to be good at any job where you are doing ops, you need to understand the theory of operating computers. You need to understand operating systems, networking and how that all works and then all things around and some security.

For developers now, it is a little bit interesting because a lot of the apps that we are writing these days are more stateless. So for a developer you need to think more about my app may crash. 
So anything that I am holding a memory that is important can go away at any given time. So either, one, I need to store it on more than one thing, I need to have it in a restrictive fashion or, two, I need to store it in the database instantly 

And I would once again challenge anyone to say that if you are a developer who can actually understand those topics, you would be able to apply for a cloud native job in this space because frankly a lot of developers, a lot of cloud native developers writing apps working cloud native, two years ago they were doing something else. 

[0:27:50.1] CC: Yeah that sounds right. I think for developers where you said I think focusing on authentication, how do you handle secret keys and the question of row authentication and row authorization and if you can even be well-versed in developing clients and servers and handling certs for that interaction and I guess it comes down to being well-versed in distributed systems development is what this whole cloud native is all about and on top of that I think being well-versed on how to push your apps into containers. 

You know create images, creating containers, pushing them into repository, pulling them from the repository and manipulating and creating containers in different ways and then on top of that maybe you want to learn Kubernetes and we can talk about that too but I wanted to give Nick a chance to talk about his aspects. 

[0:28:59.0] NL: I agree with pretty much everything you guys have said. I think the only thing I would add is like really understanding how to use and work with an API and an API driven environment because that is what a lot of cloud native is, right? It is using someone else’s computer so how do you do that? It is via an API like we’re talking about containers and orchestration, those are all done hopefully within API. Luckily, if you are using Kubernetes, which likely you are. It is all API driven. 

And so using an API, I think, and getting familiar with that. Most developers I think at some point are familiar with that but just that would be the main thing I would think too, outside of what you and Brian have already said are what is needed to do like a cloud native job. 

[0:29:40.2] CC: Yeah. Now if someone wanted to learn Kubernetes, well there is the Kubernetes Academy. 

[0:29:47.5] NL: There is a Kubernetes Academy. 

[0:29:49.4] CC: That is pretty awesome but do you think going through the certification would help? 

[0:29:55.3] NL: I think that is a good place to start. So the current certification that exists is the CKA, the Certified Kubernetes Administrator and I think that is a good starting place, especially for someone who is not really touched Kubernetes before. If they’re like, “How do I know the basics of Kubernetes?” going through that certification process I think will be a huge step forward because that really covers most of what you are going to touch on day to day basis for Kubernetes.

[0:30:21.6] CC: And there is the CKAD as well, which is for developer. The CKAD is Certified Kubernetes – 

[0:30:29.7] BL: Application Developer. 

[0:30:31.7] CC: Application Developer and the other one is Certified Kubernetes Admin. 

[0:30:34.9] NL: Yeah I was like, “administrative developer?” like. 

[0:30:38.2] CC: If you are brand new I think it is worth while doing the developer first because it is mostly the commands. You go through the commands just so you have a knowledge of how to interact with Kubernetes and the admin is more like how you manage and how do you troubleshoot a cluster and how do you manage cluster. So it is more involved I think. You need to know more but in any case, I agree with you that it would help because it serves as a syllabus for what to learn. 

It is like, “Okay, these other things that if you know these things, it would help you a lot if you had to do anything with Kubernetes.”

[0:31:14.6] NL: Yeah, I don’t think that you need to have a certification to do a job. I really don’t think so unless it is like required by law like you have to. 

[0:31:23.2] CC: No, yeah not at all what I am saying but if you don’t know anything at all and you’re like, “Where do I start?” I would recommend that. That is not a bad place to start or if you know some things but you feel like you don’t know others and you want to fill in the gaps and you don’t know what your gaps are, also same idea. What do you think Brian? Do you think having this certification would be useful? 

[0:31:46.5] BL: I don’t know, some people need it but I am also barely graduated from high school and I don’t have a college degree. So I have always leaned on myself for learning things on my own schedule, in my own pace on my own terms but some people do need the structure provided to them by certifications and I’ve only heard good things of people taking those tests. So I think for some people it is actually really good but for others, it might be a waste of time because what will actually happen if you get that certification? 

If you work at some large companies, I do know this for a fact by getting your AWS certificates actually had a money thing behind it but in a lot of places I don’t know but it couldn’t hurt. That is the most important piece. It can’t hurt. 

[0:32:36.3] NL: Yeah, I totally agree. You learn at least something even when I am taking a certification exam for something that I was already pretty aware of, I always learned at least one thing by taking like an examination. The last good question that you likely have never even thought off but I also agree with Brian where it is like I don’t have my CKA and I think I am a pretty damn good expert of Kubernetes. So I don’t think anything would change for me to take the exam. 

[0:33:00.2] CC: Oh yeah. I work with so many people who have none of those sort of certifications and they are absolutely experts. I was talking about like it would help me. I want to take those two certifications because it helped me fill in the gaps and I know there is a lot that I am going to learn especially with the admin one. So it is using the curriculum as a guide for what I need to learn and then testing, did I really learn and also it made me feel good but other than that, I don’t think it has any – I don’t know, I don’t think it is bad either. 

[0:33:33.4] BL: And that is the most important piece, what you just said, it made you feel good because you take certifications to test your knowledge against yourself in a lot of cases. So I think it is good. I just realized you can – I mean people cannot see behind me. I don’t think I have as many books as Carlisia’s up there but I have read all mine except for like four of them. 

[0:33:52.6] CC: Yeah, I did not read all of these books. I mean a lot of these books are school related books that I kept because they are really good and books that I have acquired and I have read ome but not all the entire book. Some things I use for reference but definitely have not read. Don’t be impressed, I have not read all of these books. Hopefully one day when I retire maybe. Anyway – 

[0:34:17.7] BL: I think that one interesting thing would be the amount of study that you need to do to gain a certification when you are not working in the space actually gives you that little bit of push that you need to make sure that you understand that you know what you need to know. So if you organically came to cloud native as I did, as I’ll explain in my story, you know I am not really interested in that certification.

 But if I wanted to change, and maybe I wanted to change my focus to doing more graphic stuff and there was a certification for this, maybe I would think about it just to make sure that I knew I was eligible for these jobs that I am trying for, so. 

[0:34:57.8] CC: Yeah. 

[0:34:58.8] NL: Yeah, that makes sense. Also, my books are over there and I have read most of the way through many of my books but not all the way through because a lot of them are boring.

[0:35:09.5] BL: But I will say and since we are talking about books and talking about getting yourself into Kubernetes land, right now is actually the best time to buy books because there is lots of them and I am not actually saying that these books are super awesome but some of them are. Notably this Programming Kubernetes book is pretty awesome and the reason it is so awesome is because my quote is on the back of it. 

[0:35:33.3] NL: I was going to say. 

[0:35:34.4] BL: Yeah, my name is on the back of it and then another book that I just picked up lately is called The Kubernetes Cookbook and it is for building cloud native applications from O’Reilly and the reason that I like it is because I have always, since I mean 20 years ago, I love creating O’Reilly cookbooks because small problem, answer with an exclamation, and then there is another one called Kubernetes Patterns, which I just started and I think it is pretty good too. 

And just to say that these are not endorsements but this is what I am reading right now. It is like a thousand pages here. The things that I am trying to get through right now to keep up to date with what we are trying to do because actually the biggest problem with what we are doing is that we are trail blazing. So a lot of the things that are happening, like the way that Kubernetes advances every few months is new, new, new, new. 

So there is not a lot of higher art in what we are doing that is public. So what you need to do is turn yourself into someone who actually understands the theory of what we are doing rather than the practical application of it. Understand that piece too but you got to understand the theory, which is why I said I’ve literally doing the same thing for the last 25 years because I learned how to program and I learned a Unix and then I learned Linux and then I learned networking. 

Take all of those lessons and I can apply them all the time. So that is actually the most important part about any of this. 

[0:36:56.9] CC: Yeah, I agree with you like going through the fundamentals helps so much more than going through the specifics and in fact, trying to learn specifics without having fundamentals it can be very painful but then you try to learn the fundamentals and then you go, “Oh yeah, it totally makes sense. I have been trying to listen to YouTube lectures on the server systems and I have a lot of moments of, “Ah that is why Kubernetes works this way to address this problem.” 

And I have that programming book, which is not in my office. I have to find it but yes that is a very good book, I have this. 

[0:37:37.9] BL: Oh Cloud Native DevOps with Kubernetes. That is another good book. 

[0:37:43.5] CC: Yes. 

[0:37:44.3] BL: I have it too. 

[0:37:46.3] CC: I have like that as one? 

[0:37:47.6] BL: Yes. 

[0:37:48.2] CC: Good book and this, I haven’t gotten through it yet. 

[0:37:52.7] BL: It is called Kubernetes in Action. 

[0:37:54.3] CC: Yes, thank you for saying the name because if you are not in the video you wouldn’t know. 

[0:37:58.5] BL: So really what we are saying now – 

[0:37:59.7] CC: People say great things about the Kubernetes in Action, this one. 

[0:38:02.9] BL: So I actually want to bring up another thing and say, I read a lot. I like to read. I read a lot of blog posts and here is another crazy thing, the YouTube videos from like KubeCon every year or every few months, we publish a 180 talks for free and there is some good lessons in those. So the good thing about getting into cloud native is that you can get into it for cheap because all of this information out here Kubernetes source is free. Go read it. 

I mean 5,000 developers have worked on it. I am sure you will get a lot out of that, go do that but like YouTube talks, blog post, just following your favorite SIGK’s, Special Interest Group for Kubernetes, their community meetings. You can learn so much about how this space works and really how to write software in it without spending a dime other than have a computer and Internet.

[0:38:55.5] CC: Yeah and I am going to give a tip for people that I actually caught on not too long ago. I subscribed to YouTube premium, which I think is $5 a month. It is the best $5 I have ever spent because really I don’t have time to sit in front of a video unless it is very special and just watch something and reading is also very – after I spend a whole day reading codes, my mind doesn’t want to read anything else. So I love podcasts and I listen to a lot of podcast. 

And now the YouTube videos are even have been more educational to me because the premium version of YouTube is if your phone locks it will still play. 

[0:39:40.2] BL: And you can download the videos. 

[0:39:42.0] CC: You can download the videos too. Yeah if you go on a camping trip or airplane you have them so it’s been fantastic. I just put my headset, my little Bluetooth headset and as I am doing laundry or as I’m cooking or anything, I am always listening to something. There goes the tip. 

[0:40:01.9] NL: Yeah, I totally agree. I love YouTube premium. No ads as Brian said is the best. I am going to throw out a book recommendation, one written by my colleague and a good friend, Craig Tracy, or co-written called Managing Kubernetes and it is actually like I was saying that these tech books are kind of boring, this one is actually a lot of fun to read. It is written well in a way that I found I kept turning at the page. So I really liked it. 

[0:40:26.3] BL: Yeah, it is only 150 pages too. 

[0:40:29.3] NL: Yeah that is pretty short. 

[0:40:30.5] BL: And the software that Carlisia writes is the last chapter of it, the next to last chapter so. 

[0:40:37.6] NL: Oh shoot, all right throw it out then. 

[0:40:40.4] BL: Well no, I am just saying it is another good book and I like the way you bring this up because this information is out there but I know were coming close to the end and I had one thing that I want to talk about today. 

[0:40:50.3] NL: I was just about to bring that up, please take us away. 

[0:40:52.3] BL: All right, so we talked about where we come from and we talked about things in the space about the jobs, how we keep up to date but really, the most important piece is what happens in the future. You know Kubernetes is only five years old so theoretically cloud native jobs are only a few years old. So how does cloud native move in the future and I do have some thoughts on this one. 

So what we are going to see is what we have seen over the last two decades is that our stacks will get more complex, we will run more apps, we will have more CPU’s and more networking and it is not even Morris Law stuff. We’ll just have more stuff. So what I find is that in the future, what we need to think about are things like automation. We need to think about better resilience. Apps that can actually take care of themselves. So your app goes down, what happens? Well nothing because it brought itself back up. 

So I see that the jobs that we have now are just going to evolve into better versions of what we have right now. So developers will still be developing. The more interesting piece is that we are going to have more developers because more people are taking these boot camp courses, more people are going into computer science in school. So we are actually going to have more developers out there. So all that means is that we are just going to have more problems to solve at least for the next few years. 

The generation from now, I couldn’t tell you what is going to happen. Maybe we will all be out of work. I will be retired so I probably won’t care but just think about this. Now is the literal best time to get into writing software and specifically for cloud native applications whether you are in operations or you are writing applications that run on clouds or anything like this. This is the best time because it is still beginning and there is more work to do than we have people and if you look through jobs postings you’ll realize that wow, everyone is looking for this. 

[0:42:48.3] CC: Yeah and at the same time, there is a sufficient amount of resources out there for you to learn even if you don’t want to – if you want to or you can’t pay. We now are so much at the beginning that there is nothing so it is a very good time.

[0:43:04.6] NL: Yeah, the wealth of knowledge is out there that is for free is unheard of. It is unprecedented and yeah, I totally agree that this is the best time. Brian, if we go by your thesis throughout this entire episode, basically we are going to be doing the same thing in 20 years as we are doing now. It is the same thing we did 20 years ago. So it is probably going to be like you said, developers are going to develop-ate, sys admins are going to sys administrate. 

[0:43:28.6] CC: I love that. 

[0:43:30.1] BL: And security people are going to complain about everything. 

[0:43:33.4] NL: That is how we are going to change. So we are just going to be running on like quantum applications in 20 years but they are still going to be if/else statements. 

[0:43:41.1] CC: My prediction is that we are going to have greater server access, like easier server access, and especially developers and there will be more buttons to press and more visual tools so you don’t have to be necessarily logging into a server to command lines that we have more tools abstracting all of that detailed work that develops. 

[0:44:07.0] BL: So more abstractions on top of abstractions. 

[0:44:10.1] CC: Yeah that is my prediction. Why not?

[0:44:13.3] BL: Well you know what? I mean if that is true because that is what we have been doing forever now so we are going to continue on doing this thing. 

[0:44:20.0] CC: Because it is what people want. 

[0:44:22.0] BL: Because it works. 

[0:44:23.0] CC: Yeah, it makes life easier for some people. I don’t see why we wouldn’t move in that direction but before we wrap up, unless you guys want to make predictions too, I really wanted to touch base on the hiring side of things. The recruiters and hiring managers before interviewing, I can’t imagine there is a whole bunch of people out there who need to recruit people to do these cloud native jobs and how can we help them? Like can we give them some tips? How can they attract people? What should they be looking for? 

[0:45:03.4] NL: Well, I guess my thought is that I really feel like recruiters need to start learning the technology that they are hiring for. I don’t think that they can hide behind the idea that they’re recruiters and they don’t need to know. If you want to hire good people, if you want to weed out the bad people or whatever it is that you are trying to do, you need to actually learn the technology that you are hiring for and I think like we are saying, there is now a wealth of knowledge that is free for you to access, please look. 

[0:45:32.9] CC: I am not going to disagree with that. 

[0:45:34.3] BL: And the interesting thing is when he says learn it, he doesn’t mean that you have to be able to produce it but you should understand how it works at the minimum. 

[0:45:42.8] NL: Yeah and also know when someone’s BS-ing you in the text screen. 

[0:45:48.2] CC: But it is not easy because you might be going in the direction with the intention of learning and you might misunderstand things and you know how deep do you have to go to not misunderstand the technology? 

[0:46:06.1] BL: You know what? I don’t think there is an answer for that. I think it is just you don’t know and there is something in between being an expert. You need to be something in between where if you’re hiring for cloud native in Kubernetes, you can’t offer a job that wants 10 years of Kubernetes experience. First of all, Kubernetes is huge and no one has all Kubernetes experience throughout the whole stack and second of all, Kubernetes is only five years old. 

So please don’t do that to yourself as well. So you should know how old it is and at least know the parts and what your team is going to be working on but for managers, wow, actually I don’t have a good answer for that. So I am just going to I’ll plan on that one.

[0:46:45.1] CC: Well, how would it be different? Actually it is going to sound like I asked a loaded question but I just now had this realization. I don’t think it would be different from what we were saying in regards to giving tips for people to prepare themselves, to make a move into this space if they are not working with any of this stuff. It will be the same, like try to find people who know distributed systems, they can debug well. I am not even to go into working well with people. That is such a given. Let’s just keep it to the text stack and all of those things that we recommended for people to learn, I don’t know. 

[0:47:26.0] BL: Yeah, it sounds good to me. 

[0:47:28.1] NL: All right, well I think that just about wraps it up for this week of the podcast, the Kubelets Podcast. I thought this was a really interesting discussion. It was cool to talk about where we were and where we are going and you know, and what brought us all together as I said. 

[0:47:44.2] CC: Nick, do you want to share with us what your tagline for this episode was? 

[0:47:48.1] NL: Yeah, the tagline for this episode is CREAM: Cash Rules Everything Around Me. 

[0:47:53.3] BL: Dollar-dollar bills you all. 

[0:47:55.8] CC: Ka-ching, ka-ching, ka-ching

[0:47:58.8] NL: All right, thank you so much. Thank you Brian, thanks for joining us. 

[0:48:03.9] BL: Thank you for having me.

[0:48:05.3] NL: Yeah and thank you Carlisia. 

[0:48:07.6] CC: This was really good, thank you. 

[0:48:09.7] NL: Yeah, I had a lot of fun. Bye, y’all. 

[0:48:13.5] BL: Bye. 

[0:48:14.1] CC: Bye. 

[END OF EPISODE]

[0:48:14.8] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
