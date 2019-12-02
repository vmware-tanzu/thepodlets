---
episode_id: 006-a-conversation-with-joe-beda 
episode_number: 6
title: A Conversation with Joe Beda
description: We use this open table discussion to look at a bunch of exciting topics from Joe's past, present, and future. He shares some of the invaluable lessons he has learned and offers some great tips and concepts from his vast experience building platforms over the years. We also talk about personal things like stress management, avoiding burnout and what is keeping him up at night with excitement and confusion! Large portions of the show are obviously spent discussion different aspects and questions about Kubernetes, including its relationship with etcd and Docker, its reputation as a very complex platform and Joe's thoughts for investing in the space.
notes: For this special episode, we are joined by [Joe Beda](https://twitter.com/jbeda) who is currently Principal Engineer at VMware. He is also one of the founders of Kubernetes from his days at Google! We use this open table discussion to look at a bunch of exciting topics from Joe's past, present, and future. He shares some of the invaluable lessons he has learned and offers some great tips and concepts from his vast experience building platforms over the years. We also talk about personal things like stress management, avoiding burnout and what is keeping him up at night with excitement and confusion! Large portions of the show are obviously spent discussion different aspects and questions about Kubernetes, including its relationship with etcd and Docker, its reputation as a very complex platform and Joe's thoughts for investing in the space. Joe opens up on some interesting new developments in the tech world and his wide-ranging knowledge is so insightful and measured, you are not going to want to miss this! Join us today, for this great episode! 
hosts: 
    - name: Carlisia Campos
      url: https://twitter.com/carlisia 
    - name: Bryan Liles
      url: https://twitter.com/bryanl
    - name: Michael Gasch
      url: https://twitter.com/embano1
points:
    - A quick history of Joe and his work at Google on Kubernetes. 
    - The one thing that Joe thinks sometimes gets lost in translation on these topics. 
    - Lessons that Joe has learned in the different companies where he has worked. 
    - How Joe manages mental stress and maintains enough energy for all his commitments. 
    - Reflections on Kubernetes relationship with and usage of etcd.
    - Is Kubernetes supposed to be complex? Why are people so divided about it? 
    - Joe's experience as a platform builder and the most important lessons he has learned. 
    - Thoughts for venture capitalists looking to invest in the Kubernetes space. 
    - Joe's thoughts on a few different recent developments in the tech world.
    - The relationship and between Kubernetes and Docker and possible ramifications of this. 
    - The tech that is most exciting and alien to Joe at the moment! 
links:
    - name: Eighty Percent
      url:  https://www.eightypercent.net/
    - name: Heptio
      url: https://heptio.cloud.vmware.com/
    - name: Craig McLuckie 
      url: https://techcrunch.com/2019/09/11/kubernetes-co-founder-craig-mcluckie-is-as-tired-of-talking-about-kubernetes-as-you-are/
    - name: Brendan Burns
      url: https://thenewstack.io/kubernetes-co-creator-brendan-burns-on-what-comes-next/
    - name: Microsoft
      url: https://www.microsoft.com
    - name: KubeCon
      url: https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/
    - name: re:Invent
      url: https://reinvent.awsevents.com/
    - name: etcd
      url: https://etcd.io/
    - name: CosmosDB
      url: https://docs.microsoft.com/en-us/azure/cosmos-db/introduction
    - name: Rancher
      url: https://rancher.com/
    - name: PostgresSQL
      url: https://www.postgresql.org/
    - name: Linux
      url: https://www.linux.org/
    - name: Babel
      url: https://babeljs.io/
    - name: React
      url: https://reactjs.org/
    - name: Hacker News
      url: https://news.ycombinator.com/
    - name: BigTable
      url: https://cloud.google.com/bigtable/
    - name: Cassandra
      url: http://cassandra.apache.org/
    - name: MapReduce
      url: https://www.ibm.com/analytics/hadoop/mapreduce
    - name: Hadoop
      url: https://hadoop.apache.org/
    - name: Borg
      url: https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes/
    - name: Tesla
      url: https://www.tesla.com/
    - name: Thomas Edison
      url: https://www.biography.com/inventor/thomas-edison
    - name: Netscape
      url: https://isp.netscape.com/
    - name: Internet Explorer
      url: https://internet-explorer-9-vista-32.en.softonic.com/
    - name: Microsoft Office
      url: https://www.office.com
    - name: VB
      url: https://docs.microsoft.com/en-us/visualstudio/get-started/visual-basic/tutorial-console?view=vs-2019
    - name: Docker
      url: https://www.docker.com/
    - name: Uber
      url: https://www.uber.com
    - name: Lyft
      url: https://www.lyft.com/
    - name: Airbnb
      url: https://www.airbnb.com/
    - name: Chromebook
      url: https://www.google.com/chromebook/
    - name: Harbour
      url: https://harbour.github.io/
    - name: Demoscene
      url: https://www.vice.com/en_us/article/j5wgp7/who-killed-the-american-demoscene-synchrony-demoparty
video: https://www.youtube.com/embed/DAUV2e4Q0Jw
related: # appears in sidebar, no limit in related episodes. identify by `episode_id`
- 001-cloud-native
---

BONUS EPISODE 006

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.9] CC: Hi, everybody. Welcome back to The Podlets. We have a new name. This is our first episode with a new name. Don’t want to go much into it, other than we had to change from The Kubelets to The Podlets, because the Kubelets conflicts with an existing project and we’ve thought it was just better to change. The show, the concept, the host, everything stays the same.

I am super excited today, because we have a special guest, Joe Beda and Bryan Liles, Michael Gasch. Joe, just give us a brief introduction. The other hosts have been on the show before. People should know about them. Everybody should know about you too, but there's always newcomers in the space, so give us a little bit of a background.

[0:01:29.4] JB: Yeah, sure. I'm Joe Beda. I was one of the founders of Kubernetes back when I was at Google, along with Craig McLuckie and Brendan Burns, with a bunch of other folks joining on soon after. I'm currently Principal Engineer at VMware, helping to cover all things Kubernetes and Tanzu related across the company. 

I came into VMware via the acquisition of Heptio, where Bryan's wearing the shirt today. Left Google, did that with Craig for about two years. Then it's almost a full year here at VMware. We're at 11 months officially as of two days ago. Yeah, really excited to be here.

[0:02:12.0] CC:  Yeah, I am so excited. Your name is Joe Beda. I always say Joe Beda.

[0:02:16.8] JB: You know what? It's four letters and it's easy – it's amazing how many different ways there are to pronounce it. I don't get picky about it.

[0:02:23.4] CC: Okay, cool. Well, today I learned. I am very excited about this show, because basically, I get to ask you anything I want.

[0:02:35.9] JB: I’ll do my best to answer.

[0:02:37.9] CC: Yeah. You can always not answer. There are so many interviews of you out there on YouTube, podcasts. We are going to try to do something different. Let me fire the first question I have for you. When people interview you, they ask you yeah, the usual questions, the questions that are very useful for the community. I want to ask you is this, what are people asking you that you think are the wrong questions?

[0:03:08.5] JB: I don't think there's any bad questions like this. I think that there's a ton of interest that's when we're talking about technical stuff at different parts of the Kubernetes stack, I think that there's a lot of business context around the container ecosystem and the companies and around to forming Heptio, all that. A lot of times, I'll have discussions around career and what led me to where I'm at now. I think those are all a lot of really interesting things to talk about all around all that.

The one thing that I think is doesn't always come across is these things are all interrelated. At a certain point, the technology and the business and career and work-life – all those things really impact each other. I think it's a mistake to try and take these things in isolation. There's a ton of lead over. I think one of the things that we tried to do at Heptio, and I think we did a good job is recognized that for anybody senior enough inside of any organization, they really have to be able to play all roles, right? At a certain point, everybody is as a business person, fundamentally, in terms of actually moving the ball forward for the company, for the business as a whole. Yeah. I think one of the things that I enjoy is actually to be able to look at things from all those various different angles and try and find a good path forward.

[0:04:28.7] BL: All right. Taking that, so you've gone from big co to big co, to VC to small co to big co. What does that unique experience taught you and what can you share with us?

[0:04:45.5] JB: Bryan, you know my resume better than I do apparently. I started my career at Microsoft and cut my teeth working on Internet Explorer and doing client side stuff there. I then went to Google in the office up here in Seattle. It was actually in Kirkland, this little hole-in-the-wall, temporary office, preemie work type of thing.

I’m thinking, “Hey, I want to do some server-side stuff.” Worked on Google Talk, worked on ads, worked on cloud, started Kubernetes, was a little burned out. Took some time off, goofed off. Did this entrepreneur-in-residence thing for VC and then started Heptio and then sold the VMware.

[0:05:23.7] BL: When you're in a big company, especially when you're more junior, it's easy to get caught up in playing the game inside of that company. When I say the game, what I mean is that there are measures of success within big companies and there are ways to advance see approval, see rewards that are all very specific to that company. I think the culture of a company is really defined by what are the parameters and what are the successes, the success factors for getting ahead inside of each of those different companies. I think a lot of times, especially when as a Microsoft straight out at college, I did a couple internships at Microsoft and then joining – leaving Microsoft that first time was actually really, really difficult because there is this fear of like, “Oh, my God. Everything's going to be super different.”

It turns out that as you bounced around the industry a little bit, there's actually probably more alike than there is different. The biggest difference I think between large company and small company is really, and I'll throw out some science analogies here. I think, oftentimes organizations are a little bit like the ideal gas law. Okay, maybe going past y'all, but this is – PV = nRT. Pressure times volume equals number of molecules times temperature and the R is a constant.

The idea here is that this is an equation where as you add more molecules to a constrained space, that will actually change the temperature and the pressure and these things all rise. What happens is inside of a large company, you end up with so many people within a constrained space in terms of the product space. When you add more people to the organization, or when you're looking to get ahead, it feels very zero-sum. It very much feels like, “Hey, for me to advance, somebody else has to lose.”

That's not how the real world works, but oftentimes that's how it feels inside of the big company, is that if it feels zero-sum like that. The liberating thing for being at a startup and I think why so many people get addicted to working at startups is that startups are fundamentally not zero-sum. Everybody succeeds and fails together. When a new person shows up, your thought process is naturally like, “Awesome, we got more cylinders in the engine. We’re going to go faster,” which is not always the case inside of a big company.

Now, I think as you get senior enough, all of a sudden these things changes, because you're not just operating within the confines of that company. You're actually again, playing a role in the business, you're looking at the ecosystem, you're looking at the community, you're looking at the competitive landscape and that's where you have your eye on the ball and that's what defines success for you, not the internal company metrics, but really the business metrics is what defines success for you.

The thing that I'm trying to do, here at VMware now is as we do Tanzu is make sure that we recognize the unbounded possibilities in front of us inside of this world, make sure that we actually focus our energy on serving customers. In doing so, out-compete others in the market. It's not a zero-sum game, it's not something where as we bring more folks on that we feel we're competing with them. That's a little rambling of an answer. I don't know if that links together for you, Bryan.

[0:08:41.8] BL: No, no. That was pretty good.

[0:08:44.1] JB: Thanks.

[0:08:46.6] MG: Joe, that's probably going to be a context switch now. You touched on the time when you went through the burnout phase. Then last week, I think you put out a tweet on there's so much stuff going on, which tweet I'm talking about. Yeah. In the Kubernetes community, you’re a rock star. At VMware, you're already a rock star being on stage at VMware shaking hands with Pat. 

I mean, there's so many people, so many e-mails, so many slacks, whatever that you get every day, but still I feel you are able to keep the balance, stay grounded and always have a chat, even though sometimes I don't want to approach you, but sometimes I do when I have some crazy questions maybe. Still you’re not pushing people away. How do you manage with mental stress preventing another burnout? What is the secret sauce here? Because I feel I need to work on that.

[0:09:37.4] JB: Well, I mean it's hard. The tweet that I put out was last week I was coming back from Barcelona and tired of travel. I'm looking forward to right now, we're recording this just before KubeCon. Then after KubeCon, planning to go to re:Invent in Vegas, which is just a social denial-of-service. It's just overwhelming being with that. I was tired of traveling. I posted something and came across a little stronger than I wanted to. That I just hate people, right?

I was at that point where it's just you're traveling and you just don't want to deal with anybody and every little thing is really bugging you and annoying you. I think burnout is an interesting thing. For me and I think there's different causes for different folks. Number one is that it's always fascinating when you start a new job, your calendar is empty, your responsibilities are low. Then as you are successful and you integrate yourself into the organization, all of a sudden you find that you have more work than you have time to do.

Then you hit this point where you try and like, “I'm just going to keep doing it. I'm going to power through.” Then you finally hit this point where you're like, “This is just not humanly possible.” Then you go into a triage mode and then you have to decide what's important. I know that there's more to be done than I can do. I have to be very thoughtful about prioritizing what I'm doing. There's a lot of techniques that you can bring to bear there. Being explicit about what your goals are and what your priorities are, writing those things down, whether it's an OKR process, or whether it's just here's the my top three things that I'm focusing on. Making sure that those things are purposefully meaningful to you, right?

Understanding the difference between urgent and important, which these are business booky type of things, but it's this idea of there are things that feel they have to get done right now and then there are things that are long-term important. If you're not thoughtful about how you do things, you spend all your time doing the urgent things, but you never get to the stuff that's the actually long-term important. That's a really easy trap to get yourself into. Finding ways to delegate to folks is really, really helpful here, in terms of empowering others, trusting them.

It's hard to let go sometimes, but I think being able to set the stage for other people to be successful is really empowering. Then just recognizing it's not all going to get done and that's okay. You can't hold yourself to expect that. Now with respect to burnout, for me, the biggest driver for burnout in my career has been when I felt personal responsibility over something, but I have been had the tools, or the authority, or the ability to impact it.
When you feel in your bones ownership over something, but yet you can't actually really own it, that is what causes burnout for me. I think there are studies talking about how the worst job is middle management. I think it's not being the CEO. It's not being new to the organization, being junior. It's actually being stuck in the middle. Because you're given a certain amount of responsibility, but you aren't always given the tools necessary to be able to drive that. Whereas the folks at the top, oftentimes they don't have those constraints, so they actually own stuff and have agency to be able to take care of it.

I think when you're starting on more junior in the organization, the scope of ownership that you feel is relatively minor. That being stuck in the middle is the biggest driver for me for burnout. A big part of that is just recognizing that sometimes you have to take a step back and personally divest that feeling of ownership when really it's not yours to own.

I'll give you an example, is that I started Google Compute Engine at Google, which is arguably the foundational cloud service for GCP. As it grew, as it became more important to Google, as it got reorged, more or more of the leadership and responsibilities and decision-making, I’m up here in Seattle, move down the mountain view, a lot of that stuff was focused at had been in the cloud market, but then at Google for 10 or 15 years coming in and they're like, “Okay, that's cute. We got it from here,” right?

That was a case where it was my thing. I felt a lot of ownership over it. It was clear after a certain amount of time, hey, you know what? I just work here. I'm just doing my job and I do what I do, but really it’s these other folks that are driving the bus. That's a painful transition to actually go from that feeling of ownership to I just work here. That I think is one of the reasons why oftentimes, people leave the companies. I think that was one of the big drivers for why I ended up leaving Google, was that lack of agency to be able to impact things that I cared about quite a bit.

[0:13:59.8] CC: I think that's one reason why – well, I think that working in the companies where things are moving fast, because they have a very clear, very worthwhile goal provides you the opportunity to just have so much work that you have to say no to a lot of things like where you were saying, and also take ownership of pieces of that work, because there's more work to go around than people to do it.

For example, since Heptio and VM – okay, I’m plugging. This is a big plug for VMware I guess, but it definitely is a place that's moving fast. It's not crazy. It's reasonable, because everybody, pretty much, wherever one of us grown up. There is so much to do and people are glad when you take ownership of things. That really for me is a big source of work satisfaction.

[0:14:51.2] JB: Yeah. I think it's that zero-sum versus positive-sum game. I think that when you – there's a lot more room for you to actually feel that ownership, have that agency, have that responsibility when you're in a positive-sum environment, versus a zero-sum environment.

[0:15:04.9] BL: All right, so now I want to ask your technical question.

[0:15:08.1] JB: All right.

[0:15:09.5] BL: Not a really hard one. Just more of how you think about this. Kubernetes is five and almost five and a half years old. One of the key components of Kubernetes is etcd. Now knowing what we know now and 2019 with Kubernetes have you used etcd as its key store? Or would you have gone another direction?

[0:15:32.1] JB: I think etcd is a good fit. The truth of the matter is that we didn't give that decision as much thought as we probably should have early on. We saw that it was relatively easy to stand up and get going with. At least on paper, it had the qualities that we were looking for, so we started building with it and then just ran with it. Something like ZooKeeper was also something we could have taken, but the operational overhead at the time of ZooKeeper was very different from etcd.

I think we could have gone in the direction of them and this is why [inaudible 0:15:58.5] for a lot of their tools, where they actually build the data store into the tool in a native way. I think that can lead in some ways to a simpler getting started experience, because there's just one thing to boot up, but also it's more monolithic from a backup, maintenance, recovery type of thing. The one thing that I think we probably should have done there in retrospect is to try and create a little bit more of an arm's length relationship in Kubernetes and etcd. In terms of having some cleaner interfaces, some more contractor and stuff, so that we could have actually swapped something else out.

There's folks that are doing it, so it's not impossible, but it's definitely not something that's easy to do, or well-supported. I think that that's probably the thing that I wouldn't change in that space. Another thing we might want to change, I think it might have been good to be more explicit about being able to actually shard things out, so that you could have multiple data stores for multiple resources and actually find a way to horizontally scale. Now we do that with events, because we were writing events into etcd and that's just a totally different stream of data, but everything else right now – I think now there's room to do this into the future. I think we've been able to push etcd vertically up until now. There will come a time where we need to find ways to shard that thing up horizontally.

[0:17:12.0] CC: Is it possible though to use a different data store than etcd for Kubernetes?

[0:17:18.4] JB: The things that I'm aware of here and there may be more and I may not be a 100% up to date, is I do know that the Azure folks created a proxy layer that speaks to the etcd protocol, but that is actually implemented on the backend using CosmoDB. That approach there was to essentially create a translation layer.

Then Rancher created this project, which is a little bit if you've – been added a bit of a fork of Kubernetes, where they're I believe using PostgresSQL as the database for Kubernetes. I haven't looked to see exactly how they ended up swapping that in. My guess is that there's some chewing gum and bailing wiring and it's quite a bit of effort for each version upgrade to be able to actually adapt that moving forward. Don't know for sure. I haven't looked deeply.

[0:18:06.0] CC: Okay. Now I would love to philosophize a little bit, or maybe a lot about Kubernetes. In the spirit of thinking of different questions to ask, so I had a bunch of questions and then I was thinking, “How could I ask this question in a different way?” Maybe this is not the right “question.” Here is the way I came up with this question.

We’re so divided out there. One camp loves Kubernetes, another camp, "So hard, so complicated, it’s so complex. Why even bother with it? I don't understand why people are using this." Basically, there is that sentiment that Kubernetes is complicated. I don't think anybody would refute that. Now is that even the right way to talk about Kubernetes? Is it even not supposed to be complicated? I mean, what kind of a tool is it that we are thinking, it should just work, it should be just be super simple. Is it true that it should be a super simple tool to use?

[0:19:09.4] JB: I mean, that's a loaded question [inaudible]. Let me just first say that number one, if people are complaining, I mean, I'm stealing this from Tim [inaudible], who I think this is the way he takes some of these things in stride. If people are complaining, then you're relevant, right? If nobody is complaining, then nobody cares about what you're doing. I think that it's a good thing that folks are taking a critical look at Kubernetes. That means that they're taking a look at it, right?

For five years in, Kubernetes is on an upswing. That's not going to necessarily last forever. I think we have work to do to continually earn Kubernetes’s place in the technology stack over time. Now that being said, Kubernetes is a super, super flexible tool. It can do so many things in so many different situations. It's used from everything from in retail stores across the tens of thousands of stores, any type of solutions. People are looking at it for telco, 5G. People are looking at it to even running it inside cars, which scares me, right? Then all the way up to folks like at CERN using it to do data analytics for hiring and physics, right?

The technology that I look at that's probably most comparable to that is something like Linux. Linux is actually scalable from everything from a phone, all the way up to an IBM mainframe, but it's not easy, right? I mean, to be able to adapt it across all that things, you have to essentially download the kernel type, make config and then answer 5,000 questions, right, for those who haven't done that. It's not an easy thing to do.

I think that a lot of times, people might be looking at Kubernetes at the wrong level to be able to say this should be simple. Nobody looks at the Linux kernel that you get from git cloning, Linux’s fork and compiling it and saying, “Yeah, this is too hard.” Of course it's hard. It's the Linux kernel. You expect that you're going to have a curated experience if you want something easy, right? Whether that be an Android phone or Ubuntu or what have you.

I think to some degree, we're still in the early days where people are dealing with it perhaps at to raw level, versus actually dealing with it in a more opinionated way. Now I think the fascinating thing for Kubernetes is that it provides a lot of the extension points and patterns, so that we don't know exactly what those higher-level easier-to-use abstractions are going to look like, but we know, or at least we're pretty confident that we have the right tools and the right environment to be able to experiment our way there. I think we're not there yet, but we're set up for success. That's the first thing.

The second thing is that Kubernetes introduces a whole bunch of different concepts and ideas and these things are different and uncomfortable for folks. It's hard to learn new things. It's hard for me to learn new things and it's hard for everybody to learn new things. When you compare Kubernetes to say, getting started with the modern front-end web development stack, with things like Babel and React and how do you deploy this and what are all these different options and it changes on a weekly basis. There's a hell of a lot in common actually between these two ecosystems. They're both really hard, they both introduce all these new concepts and you have to be embedded in it to really get it.

Now that being said, if you just wanted take raw JavaScript, or jQuery and have at it, you can do it and you'll see on Hacker News articles every once in a while where people are like, “Hey, I've programmed my site with jQuery and it's just fine. I don't need all this new stuff,” right? Just like you'll see folks saying like, “I just SSH’d in and actually ran some stuff and it works fine. I don't need all this Kubernetes stuff.” If that works for you, that's great. Kubernetes doesn't have to solve every problem for every person.

Then the next thing is that I think that there's a lot of people who've been solving these problems again and again and again and again, but they've been solving them in their own way. It's not uncommon when you look at back-end systems, to join a company, look at what they've built and found that it's a complicated, bespoke system of chewing gum and baling wire with maybe a little bit Ansible, maybe a little bit of Puppets and bash. Everybody has built their own, complex, overwrought system to do a lot of the stuff that Kubernetes does.

I think one of the values that we see here is that these things are complex, unique complex to do it, but shared complexity is more valuable than personal complexity. If we can agree on some of these concepts, then that's something that can be leveraged widely and it will fade to the background over time, versus having everybody invent their own complex system every time they need to solve these problems.

With that all said, we got a ton of work to do. It's not like we're done here and I'm not going to actually sit here and say Kubernetes is easy, or that every complex thing is absolutely necessary and that we can't find ways to simplify it. We clearly can. I just think that when folks say, “Hey, I just want this to be easy." I think they're being a little bit too naïve, because it's a very difficult problem domain.

[0:23:51.9] BL: I'd like to add on to that. I think about this a lot as well. Something that Joe said to me few years back, where Kubernetes is the platform for creating platforms, it is very applicable here. Where we are looking at as an industry, we need to stop looking at Kubernetes as some estimation. Your destination is really running your applications that give you pleasure, or make your business money. Kubernetes is a tool to enable us to think about our applications more, rather than the underlying ecosystem. We don't think about servers. We want to think about storage and networking, even things like finding things in your cluster. You don't think about that. Kubernetes gives it to you.

If we start thinking about Kubernetes as a way to enable us to do better things, we can go back to what Joe said about Linux. Back whenever I started using Linux in the mid-90s, guess what? We compiled it. Make them big. That stuff was hard and it was slow. Now think about this, in my office I have three different Linux distributions running. You know what? I don't even think about it anymore. 

I don't think about configuring X. I don't think about anything. One thing that from Kubernetes is going to grow is it's going to – we're going to figure out these problems and it's going to allow us to think of these other crazy things, which is going to push the industry further. Think maybe 20 years from now if we're still running Kubernetes, who cares? It's just going to be there. We're going to think about some other problem and it could be amazing. This is good times.

[0:25:18.2] JB: At one point. Sorry, the dog’s going to bark here. I mean, at one point people cared about some of the BIOS that they were running on our computers, right? That was something that you stressed out about. I mean, back in the bad old days when I was doing DOS gaming and you're like, “Oh, well this BIOS is incompatible with the –” IRQ's and all that. It's just background now.

[0:25:36.7] CC: Yeah, I think about this too as a developer. I might have mentioned this before in this podcast. I have never gone from one job to another job and had to use the same deployment system. Every single job I've ever had, the deployment system is completely different, completely different set of tooling and completely different process. 

Just being able to walk out from one job to another job and be able to use the same platform for deployment, it must be amazing. On the flip side, being able to hire people that will join your organization already know how your deployment works, that has value in itself. It's a huge value that I don't think people talk about enough.

[0:26:25.5] JB: Well honestly, this was one of the motivations for creating Kubernetes, is that I looked around Google early on and Google is really good at importing open source, circa 2000, right? 

This is like, “Hey, you want to use libpng, or you want to use this library, or whatever.” That was the type of open source that Google is really, really good at using. Then Google did things, like say release the Big Table paper. Then somebody went through and then created Cassandra out of it. Maybe there's some ideas in Cassandra that actually build on top of big table, or you're looking at MapReduce versus Hadoop.

All of a sudden, you found that these things diverge and Google had zero ability to actually import open source, circa 2010, right? It could not back import systems, because the operational characteristics of these things were solely alien when compared to something like Borg. You see this also, like we would acquire companies and it would take those companies way too long to be able to essentially re-platform themselves on top of Borg, because it was just so different.

This is one of the reasons, honestly, why we ended up doing something like GCE is to actually have a platform that was actually more familiar from acquisition. It's one of the reasons we did it. Then also introducing Kubernetes, it's not Borg. It's a cousin of Borg inside of Google. For those who don't know, Borg is the container system that’s been in production at Google for probably 15 years now, and the spiritual grandfather to Kubernetes in a lot of ways.

A lot of the ideas that you learn from Kubernetes are applicable to Borg. It's not nearly as big a leap for people to actually change between them, as it was before, Kubernetes was out there.

[0:27:58.6] MG: Joe, I got a similar question, because it seems to be like you're a platform builder. You've worked on GCE, Kubernetes obviously. If you would be talking to another platform architect or builder, what would be something that you would recommend to them based on your experiences? What is a key ingredient, technically speaking of a platform that you should be building today, or the main thing, or the lesson learned that you had from building those platforms, like technical advice, if you will?

[0:28:26.8] JB: I mean, that's a really good question. I think in my mind, the mark of a good platform is when people can use it to do things that you hadn't imagined when you were building it, right? The goal here is that you want a platform to be a force multiplier. You wanted to enable people to do amazing things. You compare, again the Linux kernel, even something as simple as our electrical grid, right? 

The folks who established those standards, God knows how long ago, right? A 150 years ago or whenever, the whole Tesla versus Thomas Edison, [inaudible]. Nobody had any idea the long-term impact that would have on society over time. I think that's the definition of a successful platform in my mind.

You got to keep that in mind, right? I think that for me, a lot of times people design for the first five minutes at the expense of the next five years. I've seen in a lot of times where you design for hey, I'm getting a presentation. I want to be able to fit something amazing on one slot. You do it, but then all of a sudden somebody wants to do something different. They want to go off course, they want to go off the rails, they want to actually experiment and the thing is just brittle. It's like, “Hey, it does this. It doesn't do anything else. Do you want to do something else? Sorry, this isn't the tool for you.”

For me, I think that's a trap, right? Because it's easy to get it early users based on that very curated experience. It's hard to keep those users as they actually start using the thing in anger, as they start interfacing with the real world, as they deal with things that you didn't think of as a platform.

I'm always thinking about how can every that you put in the platform be used in multiple ways? How can you actually make these things be composable building blocks, because then that gives you the opportunity for folks to actually compose them in ways that you didn't imagine, starting out. I think that's some of it. I started my career at Microsoft working on Internet Explorer. The fascinating thing about Microsoft is that through and through and through and through Microsoft is a platform company. It started with DOS and Windows and Office, but even though Office is viewed as a platform inside of Microsoft.

They fundamentally understand in their bones the benefit of actually starting that platform flywheel. It was really interesting to actually be doing this for the first browser wars of IE versus Netscape when I started my own career, to actually see the fact that Microsoft always saw Internet Explorer as a platform, whereas I think Netscape didn't really get it in the same way, right? They didn't understand the potential, I think in the way that Microsoft did it.

For me, I mean, just being where you start your career, oftentimes you actually sets your patterns in terms of how you look at things over time. I think a lot of this platform thinking comes from just imprinting when I was a baby developer, I think. I don't know. It takes a lot of time to really internalize that stuff.

[0:31:14.1] BL: The lesson here is this a good one, is that when we're building things that are way bigger than us, don't think of your product as the end goal. Think of it as an enabler. When it's an enabler, that's where you get that X multiplier. Then that's where you get all the residuals. Microsoft actually is a great example of it. My gosh. Just think of what Microsoft has been able to do with the power of Office?

[0:31:39.1] JB: Yeah. I look at something like VB in the Microsoft world. We still don't have VB for the cloud era. We still haven't created that. I think there's still opportunity there to actually strike. VB back in the day, for those who weren't there, struck this amazing balance of being easy to get started with, but also something that could actually grow with you over time, because it had all these extension mechanisms where you could actually – there's the marketplace controls that you could buy, you could partner with other developers that were writing C or C++. 

It was an incredible platform. Then they leverage to Office to extend the capabilities of VB. It's an amazing ecosystem. Sorry. I didn't mean to interrupt you, Bryan.

[0:32:16.0] BL: Oh, no. That's all good. I get as excited about it as you do whenever I think about it. It's a pretty exciting place to be.

[0:32:21.8] JB: Yeah. I'll talk to VC's, because I did a startup and the EIR thing and I'll have them ask me things like, “Hey, where should we invest in the Kubernetes space?” My answer is using the BS analogy like, “You got to go where the puck is going.” Invest in the things that Kubernetes enables. What are the things that people can do now that they couldn't do pre-Kubernetes? Those are the things where we're going to see the explosion of growth. It's not about the Kubernetes. It's really about a larger ecosystem that Kubernetes is the seed crystal for.

[0:32:56.2] BL: For those of you listening, if you want to get anything out of here, rewind back about 20 seconds and play that over and over again, what Joe just said.

[0:33:04.2] MG: Yeah. This was brilliant.

[0:33:05.9] BL: It’s where the puck is going. It's not where we are now. We're building for the future. We're not building for now.

[0:33:11.1] MG: I'm looking at this tweetable quotes here, the last 20 seconds, so many tweetable quotes. We have to decide which ones to tweet then.

[0:33:18.5] CC: Well, we’ll tweet them all.

[0:33:20.0] MG: Oh, yes.

[0:33:21.3] JB: Here’s another thing. Here’s another piece of career advice. Successful people are good storytellers. You can have the most beautiful technology, if you can't tell the human story about it, about what it does for folks, then nobody will care. I spend a lot of the time on Twitter and probably too much time, if you ask my family. 

That medium of being able to actually distill your thoughts down into something that is tweetable, quotable, really potent, that is a skill that's worth developing and it's a skill that's worth valuing. Because there's things that are rolling around in my head and I still haven't found a way to get them into a tweet. At some point, I'll figure it out and it'll be a thing. It takes a lot of time to build that skill to be able to refine like that.

[0:34:08.5] CC: I want to say an anecdote of myself. I interview a small – so tiny startup, maybe less than 10 people at the time in Cambridge back when I lived up there. The guy was borderline wanting to hire me and no. I sent him an e-mail to try to influence his decision and it was a long-ass e-mail. They said, “No, thank you.” 

Then I think we had a good rapport. I said, well, anything you can tell me about your decision then? He said something along the lines like, I was too verbose. That was pre-Twitter. Twitter I think existed, but it was at the very beginning, I wasn't using it. Yeah, people. Be concise. Decision-makers don't have time to read long things. You need to be able to convey your message in short sentences, few sentences. It's crucial.

[0:35:07.5] BL: All right, so we're nearing the end. I want to ask another question, because these are random questions for Joe. Joe, it is the week before KubeCon North America 2019 and today is actually an interesting day. A couple of neat things happened today. We had Docker. It was neat. Docker split somewhat and it sold part of it and now they're going to be a tools company. That's neat. We're all still trying decoding what that actually is. Here's the neat piece, Apple released a laptop that can have 64 gigabytes of memory.

[0:35:44.4] MG: Has an escape key.

[0:35:45.7] BL: It has an escape key.

[0:35:47.6] MG: This is brilliant.

[0:35:48.6] BL: Yeah. I think the question was what do you think about that?

[0:35:52.8] JB: Okay. Well, so first of all, I mean, Docker is fascinating and I think this is – there's a lot of lessons there and I'm not sure I'm the one to tell them. I think it's easy to armchair-quarterback these things. It's hard to live that story. I think that it's fun to play that what-if game. I think it does show that this stuff is hard. You can have everything in your grasp and then just have it all slip away. I think that's not anybody's fault. It's just there's different strategies, different approaches in how this stuff plays out over time.

On the laptop thing, I think my current laptop has 16 gigs of RAM. One of the things that we're seeing is that as we move towards a microservices world, I gave a talk about this probably three or four years ago. As we move to a microservices world, I think there's one stage where you create a bunch of microservices, but you still view those things as an app. 

You say, "This microservice belongs to this app." Within a mature organization, those things start to grow and eventually what you find is that you have services that are actually useful for multiple apps. Your entire production infrastructure becomes this web of services that are calling each other. Apps are just entry points into these things at different points of that web of infrastructure.

This is the way that things work at Google. When you see companies that are microservices-based, let's take an Uber, or Lyft or an Airbnb. As they diversify the set of products that they're offering, you know they're not running completely independent stacks. You know that there's places where these things connect to behind the scenes in a microservices world. What does that mean for developers? What it means is that you can no longer fit an entire company's worth of infrastructure on your laptop anymore.

Within a certain constraint, you can go through and actually say, “Hey, I can bring up this canonical cut of microservices. I can bring that up on my laptop, but it will have dependencies that I either have to actually call into the prod dependencies, call into specialized staging, or mock those things out, so that I can actually run this thing locally and develop it.” With 64 gig of RAM, I can run more on my laptop, right? There's a little bit of kick in that can down the road in terms of okay, there's this race between more microservicey versus how much I can port on my laptop.

The interesting thing is that where is this going to end? Are we going to have the ability to bring more and more with your laptop? Are you going to be able to run in the split brain thing across like there's people who will create network connections between these things? Or are we going to move to a world where you're doing more development on cluster, in the cloud and your laptop gets thinner and thinner, right?

Either you absolutely need 64 gig because you're pushing up against the boundaries of what you can do on your laptop, or you've given up and it's all running in the cloud. Yet anyways, you might as well just use a Chromebook. It's fascinating that we're seeing this divergence of scaling up, versus actually moving stuff to the cloud. 

I can tell you at Google, a lot of folks, even developers can actually be super, super productive with something relatively thin like Chromebook, because there's so many tools there that really are targeted at doing all that stuff remotely, in Google's production data centers and such. That's I think the interesting implication from a developer point of view with 64 gigabytes of RAM. What you going to do Bryan? You're going to get the 64 gig Mac? You’re going to do it?

[0:39:11.2] BL: It’s already coming. They'll be here week after next.

[0:39:13.2] JB: You already ordered it? You are such an Apple fanboy. Oh, man.

[0:39:18.6] BL: Oh, I'm actually so not to go too much into it. I am a fan of lots of memory. You know what? We work in this cloud native world. Any given week, I’ll work on four to five projects. I'm lazy. I don't want to shut any of them down. Now with 64 gigs, I don't have to shut anything down.

[0:39:37.2] JB: It was so funny. When I was at Microsoft, everybody actually focused on Microsoft Windows boot time. They’re like, “We got to make it boot faster. We got to make it boot faster.” I'm like, I don't boot that often. I just want the thing to resume from sleep, right? If you can make that reliable on that theme.

[0:39:48.7] CC: Yeah. I frequently have to restart my computer, because of memory issues. I don't want to know which app is taking up memory. I have a tool that I can look up, but I just shut it down, flush the memory. 

I do have a question related to Docker. Kubernetes, I don't know if it's right to say that Kubernetes is so reliant on Docker, because I know it works with other container technologies as well. In the worst case scenario, it's obviously, I have no reason to predict this, but in the worst case scenario where Docker, let's say is discontinued, how would that affect Kubernetes?

[0:40:25.3] JB: Early on when we were doing Kubernetes and you're in this relationship with a company like Docker, I looked at what Docker was doing and you're like, “Okay, where is the real value here over time?” In my mind, I thought that the interface with developers that distributed kernel, that API surface area of Kubernetes, that was really the thing and that a lot of the Docker stuff was over time going to fade to the background. 

I think we've seen that happen, because when we talk about production systems, we definitely have moved past Docker and we have the CRI, we have Container D, which it was essentially built by Docker, donated to the CNCF as it made its way towards graduation. I think it's graduated now. The governance ties to Docker have been severed at this point. In production systems for Kubernetes, we've moved past that. 

I still think that there's developer experiences oftentimes reliant on Docker and things like Docker files. I think we're moving past that also. I think that if Docker were to disappear off the face of the earth, there would be some adjustment, but I think we have the right toolkits and the right systems to be able to do that. Some of that is open sourced by Docker as part of the Moby project. The whole Docker file evaluation flow is actually in this thing called Build Kit that you can actually use in different contexts outside of the Docker game. 

I think there's a lot of the building action. The thing that I think is the most influential thing that actually I think will stand the test of time is the Docker container image format. That artifact that you upload, that you download, the registry APIs. Now those things have been codified and are moving forward slowly under the OCI, the open container initiative project, which is a little bit of a sister foundation niche type of thing to the CNCF. I think that's the influence over time.

Then related to that, I think the world should be a little bit worried about Docker Hub and what that means for Docker Hub over time, because that is not a cheap service to run. It's done as a public good, similar to github. If the commercial aspects of that are not healthy, then I think it might be disruptive if we see something bad happen with Docker Hub itself. I don't know what exactly the replacement for that would be overnight. That'd be incredibly disruptive.

[0:42:35.8] CC: Should be Harbour.

[0:42:37.7] JB: I mean, Harbour is a thing, but somebody's got a run it and somebody's got to pay the bandwidth bills, right? Thank you to Docker for paying those bandwidth bills, because it's actually been good for not just Docker, but for our entire ecosystem to be able to do that. I don't know what that looks like moving forward. I think it's going to be – I mean, maybe github with github artifacts and it's going to pick up the slack. We’re going to have to see.

[0:42:58.6] MG: Good. I have one last question from my end. Totally different topic, not Docker at all. Or maybe, depends on your answer to it. The question is you're very technical person, what is the technology, or the stuff that your brain is currently spinning on, if you can disclose? Obviously, no secrets. What keeps you awake at night, in your brain?

[0:43:20.1] JB: I mean, I think the thing that – a couple of things, is that stuff that's just completely different from our world, I think is interesting. I think we've entered at a place where programming computers, and so stuff is so specialized. That again, I talk about if you made me be a front-end developer, I would flail for several months trying to figure out how to even be productive, right?

I think similar when we look at something like machine learning, there's a lot of stuff happening there really fast. I understand the broad strokes, but I can't say that I understand it to any deep degree. I think it's fascinating and exciting the amount of diversity in this world and stuff to learn. Bryan's asked me in the past. It's like, “Hey, if you're going to quit and start a new career and do something different, what would it be?” 

I think I would probably do something like generative art, right? Essentially, there's folks out there writing these programs to generate art, a little bit of the moral descendant of Demoscene that was I don't know. I wonder was the Demoscene happened, Bryan. When was that?

[0:44:19.4] BL: Oh, mid 90s, or early 90s.

[0:44:22.4] JB: That’s right. I was never super into that. I don't think I was smart enough. It's crazy stuff.

[0:44:27.6] MG: I actually used to write demoscenes.

[0:44:28.8] JB: I know you did. I know you did. Okay, so just for those not familiar, the Demoscene was essentially you wrote essentially X86 assembly code to do something cool on screen. It was all generated so that the amount of code was vanishingly small. It was this puzzle/art/technical tour de force type of thing.

[0:44:50.8] BL: We wrote trigonometry in a similar – that's literally what we did.

[0:44:56.2] JB:  I think a lot of that stuff ends up being fun. Stuff that's related to our world, I think about how do we move up the stack and I think a lot of folks are focused on the developer experience, how do we make that easier. I think one of the things through the lens of VMware and Tanzu is looking at how does this stuff start to interface with organizational mechanics? 

How does the typical enterprise work? How do we actually make sure that we can start delivering a toolset that works with that organization, versus working against the organization? That I think is an interesting area, where it's hard because it involves people.

Back-end people like programmers, they love it because they don't have to deal with those pesky people, right? They get to define their interfaces and their interfaces are pure and logical. I think that UI work, UX work, anytime when you deal with people, that's the hardest thing, because you don't get to actually tell them how to think. They tell you how to think and you have to adapt to it, which is actually different from a lot of back-end here in logical type of folks.

I think there's an aspect of that that is user experience at the consumer level. There's developer experience and there's a whole class of things, which is maybe organizational experience. How do you interface with the organization, versus just interfacing, whether it's individuals in the developer, or the end-user point of view? I don't know if as an industry, we actually have our heads wrapped around that organizational limits.

[0:46:16.6] CC: Well, we have arrived at the end. Makes me so sad, because we could talk for easily two more hours.

[0:46:24.8] JB: Yeah, we could definitely keep going.

[0:46:26.4] CC: We’re going to bring you back, Joe. Don’t worry.

[0:46:28.6] JB: For sure. Anytime.

[0:46:29.9] CC: Or do worry. All right, so we are going to release these episodes right after KubeCon. Glad everybody could be here today. Thank you. Make sure to subscribe and follow us on Twitter. Follow us everywhere and suggest episode topics for us. 

Bye and until next time.

[0:46:52.3] JB: Thank you so much.

[0:46:52.9] MG: Bye.

[0:46:54.1] BL: Bye. Thank you.

[END OF EPISODE]

[0:46:55.1] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
