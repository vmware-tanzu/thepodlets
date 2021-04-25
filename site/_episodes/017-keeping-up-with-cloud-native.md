---
# TODOs
# 1) Upload mp3 file to omnystudio
# 2) No episode number in the title; add ep number to the "Episode number" field
# 3) Keep it private, but set the date to publish (always on a Mon at 8:30AM)
# 4) Add episode to playlist; save
# 5) Fetch episode slug from Advanced settings > slug (note 1: it can be changed but never after the publish date; note 2: there should be no episode number in the slug)
# 6) Paste the slug into episode_id below
# 7) Commit and open a PR to get the remainder of the checklist 
episode_id: keeping-up-with-cloud-native
episode_number: 17
title: Keeping up with Cloud Native
description: If you work in Kubernetes, cloud native, or any other fast-moving ecosystem, you might have found that keeping up to date with new developments can be incredibly challenging. We think this as well, and so we decided to make today’s episode a tribute to that challenge, as well as a space for sharing the best resources and practices we can think of to help manage it.  
notes: If you work in Kubernetes, cloud native, or any other fast-moving ecosystem, you might have found that keeping up to date with new developments can be incredibly challenging. We think this as well, and so we decided to make today’s episode a tribute to that challenge, as well as a space for sharing the best resources and practices we can think of to help manage it. Of course, there are audiences in this space who require information at various levels of depth, and fortunately the resources to suit each one exist. We get into the many different places we go in order to receive information at each part of the spectrum, such as SIG meetings on YouTube, our favorite Twitter authorities, the KubeWeekly blog, and the most helpful books out there. Another big talking point is the idea of habits or practices that can be helpful in consuming all this information, whether it be waiting for the release notes of a new version, tapping into different TLDR summaries of a topic, streaming videos, or actively writing posts as a way of clarifying and integrating newly learned concepts. In the end, there is no easy way, and passionate as you may be about staying in tune, burnout is a real possibility. So whether you’re just scratching the cloud native surface or up to your eyeballs in base code, join us for today’s conversation because you’re bound to find some use in the resources we share.
hosts: 
    - name: Carlisia Thompson
      url: https://twitter.com/carlisia
    - name: Duffie Cooley
      url: https://twitter.com/mauilion
    - name: Josh Rosso
      url: https://twitter.com/joshrosso
    - name: Olive Power
      url: https://twitter.com/opowero
    - name: Michael Gasch
      url: https://twitter.com/embano1
points:
    - Audiences and different levels of depth that our guests/hosts follow Kubernetes at.
    - What ‘keeping up’ means, merely following news, or actually grasping every new concept?
    - The impossibility of truly keeping up with Kubernetes as it becomes ever more complex.
    - Patterns used to keep up with new developments - the TWKD website, release notes, etc.
    - Twitter’s helpful provision of information, from opinions to tech content, all in one place.
    - How helpful Cindy Sridharan is on Twitter in her orientation toward distributed systems.
    - The active side of keeping up such as writing posts and helping newcomers.
    - More helpful Twitter accounts such as InfoSec.
    - How books provide one source of deep information as opposed to the noise on Twitter.
    - Books - Programming Kubernetes; Managing Kubernetes; Kubernetes Best Practices.
    - Another great resource for seeing Kubernetes in action - the KubeWeeky blog.
    - A call to watch the SIG playlists on the Kubernetes YouTube channel.
    - Tooling - tab management and Michael’s self-built Twitter searcher.
    - Live streaming and CTF live code demonstrations as another resource.
    - How to keep a team updated using platforms like Slack and Zoom.
    - The importance of organizing shared content on Slack.
    - Challenges around not knowing the most important thing to focus on.
    - Cognitive divergence and the temptation of escaping the isolation of coding by socializing.
    - The idea that not seeing keeping up to date as being a personal sacrifice is dangerous.
    - Using multiple different TLDR summaries to cement a concept in one’s brain.
    - Incentives for users rather than developers of projects to share their experiences.
    - The importance of showing appreciation for free resources in keeping motivation up.
links:
    - name: Chris Short
      url: https://chrisshort.net/
    - name: Last Week in Kubernetes Development 
      url: http://lwkd.info/
    - name: 1.17 Release Notes 
      url: https://kubernetes.io/docs/setup/release/notes/
    - name: Release Notes Filter Page 
      url: https://relnotes.k8s.io/
    - name: Cindy Sridharan on Twitter 
      url: https://twitter.com/copyconstruct
    - name: InfoSec on Twitter 
      url: https://twitter.com/infosec?lang=en
    - name: Programming Kubernetes on Amazon 
      url: https://www.amazon.com/Programming-Kubernetes-Developing-Cloud-Native-Applications/dp/1492047104
    - name: Managing Kubernetes on Amazon 
      url: https://www.amazon.com/Managing-Kubernetes-Operating-Clusters-World/dp/149203391X
    - name: Brendan Burns on Twitter 
      url: https://twitter.com/brendandburns
    - name: Kubernetes Best Practices on Amazon 
      url: https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications-ebook/dp/B081J62KLW/
    - name: KubeWeekly
      url: https://kubeweekly.io/
    - name: Kubernetes SIG playlists on YouTube 
      url: https://www.youtube.com/channel/UCZ2bu0qutTOM0tHYa_jkIwg/playlists
    - name: Twitch 
      url: https://www.twitch.tv/
    - name: Honeycomb 
      url: https://www.honeycomb.io/
    - name: KubeKon EU 2019 
      url: https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/
    - name: Aaron Crickenberger on LinkedIn 
      url: https://www.linkedin.com/in/spiffxp/
    - name: Stephen Augustus on LinkedIn 
      url: https://www.linkedin.com/in/stephenaugustus
    - name: Office Hours 
      url: https://github.com/kubernetes/community/blob/master/events/office-hours.md
    - name: think-v.com
      url: http://think-v.com/
    - name: Panel Discussion, Care and Feeding - Burnout and Self Care in our Community
      url: https://www.youtube.com/watch?v=jzzfGNFuwwE
    - name: Kubernetes Slack
      url: https://slack.k8s.io/
    - name: The Morning Paper
      url: https://blog.acolyer.org/
    - name: Kubernetes Operators
      url: http://shop.oreilly.com/product/0636920234357.do
    - name: BaseCS series
      url: https://github.com/vaidehijoshi/basecs-series
    - name:  BaseDS series 
      url: https://github.com/vaidehijoshi/baseds-series
    - name: Go Time podcast
      url: https://changelog.com/gotime
    - name: Software Engineering Daily podcast
      url: https://softwareengineeringdaily.com/category/all-episodes/exclusive-content/Podcast/
    - name: Software Engineering Radio podcast
      url: https://www.se-radio.net/
    - name: A Bootiful Podcast
      url: https://soundcloud.com/a-bootiful-podcast
    - name: Daniel Abadi on Twitter
      url: https://twitter.com/daniel_abadi
    - name: Bill Kennedy on Twitter
      url: https://twitter.com/goinggodotnet
    - name: Wizard Zines (Julia Evans)
      url: https://wizardzines.com/
    - name: PodCTL podcast
      url: http://podcast.podctl.com/
    - name: Kubernetes Podcast from Google
      url: https://kubernetespodcast.com/
    - name: Playlists for each SIG and each WG
      url: https://www.youtube.com/channel/UCZ2bu0qutTOM0tHYa_jkIwg/playlists
    - name: Leank8s on Twitter
      url: https://twitter.com/learnk8s
    - name: Kubernetes Community Forum
      urll: https://discuss.kubernetes.io/
    - name: KubeAcademy
      url: https://kube.academy/
    - name: Learn Cloud-Native
      url: https://twitter.com/learn_cnative
    - name: Henning Jacobs
      url: https://twitter.com/try_except_
    - name: Timo Reimann
      url: https://twitter.com/timoreimann
    - name: Kelsey Hightowe
      url: https://twitter.com/kelseyhightower
    - name: Bjoern Brundert
      url: https://twitter.com/bbrundert
    - name: Puja Abbassi
      url: https://twitter.com/puja108
    - name: ahmet alp balkan
      url: https://twitter.com/ahmetb
    - name: William Lam
      url: https://twitter.com/lamw
    - name: Robin Moffatt
      url: https://twitter.com/rmoff
    - name: Niran
      url: https://twitter.com/NiranEC
video: https://www.youtube.com/embed/X2D1qXwlR8U
related: 
- 012-learning-distributed-systems
- 015-the-network
---
EPISODE 17

[INTRODUCTION]

[0:00:08.7] ANNOUNCER: Welcome to The Podlets Podcast, a weekly show that explores Cloud Native one buzzword at a time. Each week, experts in the field will discuss and contrast distributed systems concepts, practices, tradeoffs and lessons learned to help you on your cloud native journey. This space moves fast and we shouldn’t reinvent the wheel. If you’re an engineer, operator or technically minded decision maker, this podcast is for you.

[EPISODE]

[0:00:41.5] DC: Good afternoon everybody and welcome to The Podlets. In this episode, we’re going to talk about, you know, one of the more challenging things that we all have to do, just kind of keep up with cloud native and how we each approach that and what we do. Today, I have a number of cohosts with me, I have Olive Power.

[0:00:56.6] OP: Hi.

[0:00:57.4] DC: Carlisia Thompson.

[0:00:58.6] CC: Hi everybody.

[0:00:59.9] DC: Josh Rosso.

[0:01:01.3] JR: Hey all.

[0:01:02.8] DC: And Michael.

[0:01:01.1] MICHAEL: Hey, hello.

[0:01:04.8] DC: This episode, we’re going to do something a little different than we normally do. In most of our episodes, we try to remain somewhat objective around the problem and the potential solutions for it, rather than prescribing a particular solution. In this episode, however, since we’re talking about how we keep up with all of the crazy things that happen in such a fast ecosystem, we’re going to probably provide quite a number of examples or resources that you yourself could use to drive and to try and keep up to date with what’s happening out there. 

Be sure to check out the notes after the episode is over at thepodlets.io and you will find a link to the episodes up at the top part, click down to this episode, and check out the notes. There will be tons of resources. Let’s get started. 

One of the things I think about that’s interesting about keeping up with something like, you know, a Kubernetes or a fast-moving project, regardless of what that project is, whether it’s Kubernetes or, you know, for a while, it was the Mesos that I was following or OpenStack or a number have been big infrastructure projects that have been very fast moving over time and I think what’s interesting is I find that there’s multiple audiences that we kind of address when we think about what it means to ‘keep up,’ right?

Keeping up with something like a project is interesting because I feel like there’s an audience that it’s actually very interested in what’s happening with the design goals or the code base of the project, and there’s an audience that is very specific to wanting to understand at a high level – like, “Give me the State of the World report like every month or so just so I can understand generally what’s happening with the project, like is it thriving? Is it starting to kind of wane? Are there big projects that it’s taking on?”

And then there’s like, then I feel like there’s an audience somewhere in the middle there where they really want to see people using the project and understand, and know how to learn from those people who are using it so that they can elevate their own use of that project. They’re not particularly interested in the codebase per se but they do want to understand, are they exploring this project at a depth that makes sense for themselves? What do you all think about that?

[0:03:02.0] CC: I think one thing that I want to mention is that this episode, it’s not so much about on-boarding people onto Kubernetes and the Kubernetes ecosystem. We are going to have an episode soon to talk specifically about that. How you get going, like get started. I think Duffy mentioned this so we’re going to be talking about how we all keep up with things. Definitely, there are different audiences, even when we’re talking about keeping up.

[0:03:32.6] JR: Yeah, I think what’s funny about your audience descriptions, Duffy, is I feel like I’ve actually slid between those audiences a bit, right? It’s funny, back in the day, Kubernetes like one-four, one-five days, I feel like I was much more like, “What’s going on in the code?” Like trying to keep track of like how things are progressing.

Now my role is a lot more focused with working with customers and standing up cube and like making a production ready. I feel like I’m a lot more, kind of reactive and more interested to see like, what features have become stable and impact me, you know what I mean? I’m far less in the weeds than I used to be. It’s a super interesting thing.

[0:04:08.3] OP: Yeah, I tend to – for my role, I tend to definitely fall into the number three first which is the kind of general keeping an eye on things. Like when you see like interesting articles pop up that maybe have been linked internally because somebody said, “Oh, check out this article. It’s really interesting.”

Then you find that you kind of click through five or six articles similar but then you can kind of flip to that kind of like, “Oh, I’m kind of learning lots of good stuff generally about things that folks are doing.” To actually kind of having to figure out some particular solution for one of my customers and so having to go quite deep into that particular feature.

You kind of go – I kind of found myself going right in and then back out, right in, going back out depending on kind of where I am on a particular day of the week. It’s kind of a bit tricky. My brain sometimes doesn’t kind of deal with that sort of deep concentration into one particular topic and then back out again. It’s not easy.

I find it quite tough actually some of the time.

[0:05:05.0] DC: Yeah, I think we can all agree on that. Keeping track of everything is – it’s why the episode, right? How do we even approach it? It seems – I feel like, an audience I haven’t mentioned is the audience that basically just throws up their hands and walks away because there’s just too much to keep track of, right? I feel like we are all that at some point, you know? 

I get that.

[0:05:26.4] OP: That’s why we have Christmas holidays, right? To kind of refresh the brain.

[0:05:31.4] CC: Yeah, I maybe purposefully or maybe not even – not trying to keep up because it is too much, it is a lot, and what I’m trying to do is, go deeper on the things that I already, like sort of know. And things that I am working with on a day to day basis. I only really need to know, I feel like, I really only need to know – because I’m not working directly with customers.

My scope is very well defined and I feel that I really only need to know whenever there’s a new Kubernetes release. I need to know what the release is. We usually – every once in a while, we update our project to the – we bump up the Kubernetes release that we are working against and in general, yeah, it’s like if things come my way, if it’s interesting, I’ll take a look, but mostly, I feel like I work in a spiral.

If I’m doing codes related to controllers and there’s a conference talk about controllers then okay, let me take a look at this to maybe learn how to design this thing better, implement in a better way if I know more about it. If I’m doing, looking at CRDs, same thing. I really like conference talks for education but that’s not so much keeping up with what’s new. Are we talking about educating ourselves with things that we don’t know about?

Things that we don’t know about. Or are we talking about just news?

[0:07:15.6] JR: I think it’s everything. That’s a great question. One of my other questions when we were starting to talk about this was like, what is keeping up even mean, right? I mean, does it mean, where do you find resources that are interesting that keep you interested in the project or are you looking for resources that just kind of keep you up to date with what’s changing? It’s a great question.

[0:07:36.2] MICHAEL: Actually, there was some problem that I faced when I edit the links that I wanted to share in the show. I started writing the links and then I realized, “Well, most of the stuff is not keeping up with news, it’s actually understanding the technology,” because I cannot keep up.

What does help me in understanding specific areas, when I need to dig into them and I think back five or four years into early days of Kubernetes, it was easy to catch up by the time because it was just about Kubernetes. Later right, it became this platform. We realized that it actually this platform thing. Then we extended Kubernetes and then we realized there are CICD-related stuff and operations and monitoring and so the whole ecosystem grew. The landscape grew so much that today, it’s impossible to keep up, right? 

I think I’m interested in all those patterns that you have developed over the years that help you to manage this, let’s say complexity or stream of information.

[0:08:33.9] DC: Yeah, I agree. This year, I was thinking about putting up a talk with Chris Short, it was actually last year. That was about kind of on the same topic of keeping up with it. In that, I kind of did a little research into how that happens and I feel like some of the interesting stuff that came out of that was that there are certain patterns that a project might take on that make it easier or more approachable to, you know, stay in contact with what’s happening.

If we take Kubernetes as an example, there are a number of websites I think that pretty much everybody here kind of follows to some degree, that helps, sort of, kind of, address those different audiences that we were talking about. 

One of the ones that I’ve actually been really impressed with is LWKD which stands for Last Week in Kubernetes Development, and as you can imagine, this is really kind of focused on, kind of – I wouldn’t say it’s like super deep on the development but it is watching for things that are changing, that are interesting to the people who are curating that particular blog post, right? 

They’ll have things in there like, you know, code freezes coming up on this date, IPV6, IPV4, duel stack is merging, they’ll have like some of the big mile markers that are happening in a particular release and where they are in time as it relates to that release. I think if that’s a great pattern and I think that – it’s a very narrow audience, right? It would really only be interesting to people who are interested in, or who are caught up in the code base, or just trying to understand like, maybe I want a preview of what the release notes might look like, so I might just like look for like a weekly kind of thing.

[0:10:03.4] JR: Yeah, speaking of the release notes, right? It’s funny. I do get to look at Last Week in Kubernetes development every now and then. It’s an awesome resource but I’ve gotten to the point where the release notes are probably my most important thing for staying up to date.

Maybe it’s because I’m lazy, I don’t know, but I wait till 1.17 drops, then I go to the release notes and really kind of ingest it because I’ve just struggled so much to kind of keep up with the day to day, “We merged this, we didn’t merge this,” and so on. That has been a huge help for me, you know, day to day, week to week, month to month.

[0:10:37.0] MICHAEL: Well, what was also helpful just on the release notes that the new filter webpage that they put out in 1.15, starting 1.15. Have you all seen that?

[0:10:44.4] JR: I’ve never heard of it.

[0:10:45.4] DC: Rel dot, whatever it is. Rel dot –

[0:10:47.7] MICHAEL: Yeah, if you can share it Duffy, that’s super useful. Especially like if you want to compare releases and features added and – 

[0:10:55.2] DC: I’ll have to dig it up as well. I don’t remember exactly what – 

[0:10:56.7] CC: I’m sorry, say? Which one is that again?

[0:10:59.1] MICHAEL: The real notes. I’ll put it in the hackMD.

[0:11:02.8] DC: Yeah relnotes.k8s.io which is an interesting one because it’s sort of like a comparison engine that allows you to kind of compare what it would have featured like how to feature relates to different versions of stuff.

[0:11:14.4] CC: That’s great. I cannot encourage enough for the listeners to look at the show notes because we have a little document here that we – can I? The resources are amazing. There are so many things that I have never even heard about and sound great – is – I want to go to this whole entire list. Definitely check it out. We might not have time to mention every single thing. I don’t want people to miss on all the goodness that’s been put together.

[0:11:48.7] DC: Agreed, and again, if you’re looking for those notes, you just go to the podlets.io. Click on ‘episodes’ at the right? And then look for this episode and you’ll find that it’s there.

[0:11:58.0] CC: I can see that a lot of the content in those notes are like Twitter feeds. Speaking personally, I’m not sure I’m at the stage yet where I learn a lot about Twitter feeds in terms of technical content. Do you guys find that it’s more around people’s thoughts around certain things so thought-provoking things around Kubernetes and the ecosystem rather than actual technical content. I mean, that’s my experience so far. 

But looking at those Twitter feeds, maybe I guess I might need to follow some of those feeds. What do you all think?

[0:12:30.0] MICHAEL: Do you mean the tweets are from those like learn [inaudible 0:12:32] or the person to be tweets?

[0:12:35.3] OP: You’ve listed some of there, Michael, and some sort of.

[0:12:37.6] MICHAEL: I just wanted to get some clarity. The reason I listed so many Twitter accounts there is because Twitter is my only kind of newsfeed if you will. I used Feedly and RSS and others before and emails and threads. But then I just got overwhelmed and I had this feeling of missing out on all of those times. 

That’s why I said, “Okay, let’s just use Twitter.” To your question, most of these accounts are people who have been in the Kubernetes space for very long, either running Kubernetes, developing on Kubernetes, having opinions about Kubernetes.

Opinions in general on topics related to cloud native because we didn’t want to make the search just about Kubernetes. Most of these people, I really appreciate their thoughts and some of them also just a retweet things that they see which I missed somewhere else and not necessarily just opinions. I think It’s a good mix of these accounts, providing options, some guidance, and also just news that I miss out on because not being on the other channels.
 
[0:13:35.6] OP: Yeah, I agree because sometimes you can kind of read – I tend to require a lot of sort of blog posts and sort of web posts which, you know, without realizing it can be kind of opinionated and then, you know, it’s nice to then see some Twitter feeds that kind of actually just kind of give like a couple of words, a kind of a different view which sometimes makes me think “Okay, I understand that topic from a certain article that I’ve read, it’s just really nice to hear a kind of a different take on it through Twitter.”

[0:14:03.0] CC: I think some of the accounts, like fewer of the accounts – and there are a bunch of things that – there are listed accounts here that I didn’t know before so I’ll check them out. I think fewer of the accounts are providing technical content, for example, Cindy Sridharan, not pronouncing it correctly but Cindy is great, she puts out a lot of technical content and a lot of technical opinion and observations that is really good to consume. I wish I had time to just read her blog posts and Twitter alone.

She’s very oriented towards distributed systems in general, so she’s not even specific just Kubernetes. Most of the accounts are very opinionated and the benefit for me is that sometimes I catch people talking about something that I didn’t even know was a thing. It’s like, “Oh, this is a thing I should know about for the work that I do,” and like Michael was saying, you know, sometimes I catch retweets that I didn’t catch before and I just – I’m not checking out places, I’m not checking – hash tagging Reddit.

I rely on Twitter and the people who I follow to – if there is a blog post that sounds important, I just trust that somebody would, that I’m going to see it multiple times until like, “Okay, this is content that is related to something and I’m working on, that I want to get better at.” Then I’ll go and look at it. My sources are mainly Twitter and YouTube and it’s funny because I love blog posts but it’s like I haven’t been reading them because it takes a long time to read a blogpost.

I give preference to video because I can just listen while I’m doing stuff. I sort of stopped reading blog post which is sad. I also want to start writing posts because it’s so helpful for me to engrain the things that I’m learning and hopefully it will be helpful to other people too. But in any case, go Duffy.

[0:16:02.8] DC: A number of people that I follow – I have been cultivating my feed pretty carefully, trying to get a broad perspective of technical stuff that’s happening. But also I’ve been trying to develop my persona on Twitter a bit more, right? I’m actually trying to build my audience there. What’s interesting there is I’ve been trying to – to that end, what I’ve been doing is like trying to amplify voices that I think aren’t heard enough out there, right?

If I see an article by somebody who is just coming into Kubernetes. or just coming into distributed systems and they’ve taken an effort to really lay out something that they found really interesting about pretty much anything, right? I’m like, “Okay, that’s pretty awesome,” and I’ll try to amplify that, right? Sometimes I even get involved or I’ll, not directly in public on Twitter but I’ll offer to help edit or help provide whatever our guidance I can provide around that sort of stuff. 

If I see people like having a difficult time with a particular project or something like that, I’ll reach out privately and say, “Hey, can I help you with it so you can go out there and do a great job,” you know? That is something I love to do. I think your point about like not necessarily going at Twitter for the deep knowledge stuff but more just like making sure that you have a broad enough awareness of what’s happening in different ecosystems that you’re not surprised by the things when the things change, right? 

A couple of other people that I follow are Akira Asuta, I can’t say enough about that person. They are amazing, they have been doing like, incredibly deep security stuff as it relates to containerization and stuff like that for quite a while. I’m always like, learning brand new things to me when following folks like that. I’ve been kind of getting more interested in InfoSec Twitter lately, learning how people kind of approach that problem. 

Also some of the bias arounds that which has been pretty interesting. Both the bias against people who are in InfoSec which seems weird to me. Also, how InfoSec approaches a problem, like do they put it like a learning experience or they approach it like an attack experience.

It’s been kind of fascinating to get in there.

[0:18:08.1] OP: You know, I kind of use Twitter as well for some of this stuff but you know, books are kind of a resource as well but in my head, kind of like at the opposite scale. You know, I obviously don’t read as many books as I read twitter feeds, right? It’s just kind of like, with Twitter, you can kind of digest the whole of the stuff and with books, it’s kind of like – I tend to be trying – because I know, I’m only going to read – like I’m only going to read maybe one/two books a year.

I’ve kind of like – as I said before, blog posts seem to take up my reading time and books kind of tend to be for like on airplanes and stuff. So if – they’re just kind of two opposite resources for me but I find actually, the content of books are probably stuff that I digest a bit more because you know, it’s kind of like, I don’t know, back to the old days. It’s kind of a physical thing on hand and I can kind of read it and digest it a bit more than the kind of throwaway stuff that kind of keeps on Twitter.

Because to be honest, I don’t know what’s on Twitter. Who is kind of a person to listen to or who is not or who is – I just try and form my own opinions and then, again, it kind of gets a bit overwhelming, because it’s a lot of content just streaming through continuously, whereas a book, it’s kind of like just one source of information that is kind of like a bit more personal that I can digest a bit more.

[0:19:18.1] JR: Any particular book recommendation in 2019, Olive, that you found particularly interesting?

[0:19:23.5] OP: I’m still reading, and it’s on the list for the episode notes actually, Programming Kubernetes. I just want to kind of get into that sort of CRD sort of mindset a bit. I think that’s kind of an area that’s interesting and an area that a lot of people will want to use in their organizations, right, because it’s going to do some of the extensibility to Kubernetes that’s just not there out of the box and everybody wants something that’s not out of the box or always in my experience.

[0:19:47.4] MICHAEL: I found the Managing Kubernetes, I think was it, by – from Brendan Burns and some other folks which was just released I think in the end of last year. Super deep and that is kind of the opposite to the Programming Kubernetes, because I like that as well. That is more geared towards understanding architecture and operations.

Operational concepts – 

[0:20:05.0] OP: They’re probably the two books I’ve read.

[0:20:08.4] MICHAEL: Okay.

[0:20:08.9] OP: One a year, remember? 

[0:20:11.4] MICHAEL: Yeah.

[0:20:14.6] OP: Prolific reading.

[0:20:19.6] CC: I think if you know what you need to learn about cloud native or Kubernetes, there’s amazing books out there, and if you are still exploring Kubernetes and trying to learn, I cannot recommend this book enough. If you are watching this on YouTube, you’ll see the cover. It’s called Kubernetes Best Practices because it’s about Kubernetes best practices but what they did simultaneously and maybe they didn’t even realize is just they gave a map for the entire thing.

You go, “Oh, these are all the elements in Kubernetes.” Of course, it’s saying, “Okay, this is the best way to go about setting the stuff up,” and this is relatively thin but I just think that going through this book, you get really fast overview of the elements in Kubernetes. Then you can go to other books like Managing Kubernetes to go deep and understand all of the knobs and switches.

[0:21:24.6] DC: I want to bring it back to the patterns that we see successful projects. Projects that you think are approachable but, you know, projects that are out there that make it easy for you to kind of stay – or easier at least to stay up to date with them, what some of those patterns are that you think are useful for projects.

We’re talking about like having a couple of different entry points from kind of a weekly report mechanism, we’ve talked about the one that LWKD is, I don’t think we got to talk about KubeWeekly which is actually a weekly blog that is actually curated by a lot of the CNCF ambassadors. KubeWeekly is also broken up in different sections, so like sometimes they’ll just talk about –  but they’re actually going out actively and trying to find articles of people using Kubernetes and then trying to post those.

If you’re interested in understanding how people are actually out there using it, then that’s a great place to go find articles that are kind of related to that. What are some other patterns that we see that are out there that are useful for books?

[0:22:27.6] DC: One that I really like. Kubernetes, for everyone listening has this notion of special interest groups, SIGs oftentimes. They’re focused on certain areas of the project. There’s some for networking and storage and life cycles of clusters and what’s amazing, I try to watch them somewhat weekly, I don’t always succeed.

They’re all on YouTube and if you go to the Kubernetes project YouTube, there’s playlists for every SIG. A lot of times I’m doing work relating to life cycles of clusters. I’ll open up the cluster life cycle playlist and I’ll just watch the weekly meetings. While it doesn’t always pertain to completely to me, it lets me understand kind of where the developers and contributor’s heads are at and where they’re kind of headed with a lot of different things. 

There’s a link to that as well if anyone wants to check it out.

[0:23:15.9] MICHAEL: Exactly, to add to that. If you don’t have the time to watch the videos, the meeting notes that these gentlemen and women put together are amazing. Usually, I just scroll through and if it’s something to triggers, I go into the episode and watch it.

[0:23:28.7] OP: I almost feel like we should talk about tooling to handle all of this stuff, for example, right now, I think I have 200 tabs opened. I just started learning about some chrome extensions to manage tabs. I haven’t started really using them but I need. I don’t have a good system. My system is open a video that I’m pretty sure I want to watch and just get to that tab eventually until something happens in my chrome goes bust and I lose everything.

I wanted to mention that when we say watch YouTube, some things you don’t need to sit there and actually watch, you can just listen to it and if you pay for the five bucks for YouTube premium – I don’t get a commission you people, but I’m just saying, for me, it’s so helpful. I can just turn off you know, put my phone on my pocket and keep listening to it without having to have the phone open and on the whole time. It’s very handy.

It’s just like listening to a podcast. I also listen to podcasts lots of days.

[0:24:35.1] MICHAEL: For tooling, since I’m just mostly on Twitter and by the time I was using or starting to use Twitter, they didn’t have this bookmark function, so I was basically abusing likes or favorites at the time, I think, to bookmark. What I realized later, my bookmarks grew, well, my likes grew.

I wanted to go back and find something but that through the Twitter search was just impossible. I blew the tiny little go tool, kind of my first exercise there to just parse my likes and then use JQ because it’s all JSON to query and manipulate the stuff. I almost use it every day because I was like, that was a talk or blog post about scheduling and just correct for scheduling and the likes.

I’m sure there’s a better tool or way of doing that but for me, that’s mine too. Because that’s my workflow.
 
[0:25:27.6] DC: Both of the two blogs that you mentioned both KubeWeekly and LWKD, they both have the ability to take – you can submit stories to them. If you come across things that are interesting and you’d like to put that up on an aggregator somewhere, this is one of the ways to kind of solve that problem because at least if it gets cleared up on an aggregator, you know that you go back to the aggregator to see it, so that helps.

Some other ones I’ve seen out there, I’ve seen people, I’ve seen a number of interesting startups now, starting to kind of like put out a podcast or – and I have started to see a number of people like you know, engaging with Twitch and also doing things like what we do with TJK.io which is like have sort of some kind of a weekly thing where you are just hacking on stuff live and just exploring it whether that is related to – if you think of about TJK is we’re going to do without being related necessarily to anything that we are doing at VMware just anything to do with the community but obviously if you are working for one of the small companies like Honeycomb or some other company. 

A smaller kind of startup, you can really just get people more aware of that because for some reason people love to watch others code. They love to understand how people go through that, what are their thought process is and I find it awesome as well. I think it is amazing to me how big a draw that is, you know? 

[0:26:41.1] OP: And is there lots of them out there Duffy? Is that kind of an easy searchable thing or is it like how do you know those things are going on? 

[0:26:48.4] DC: Oddly enough Twitter, most of the time, yeah. I mean, most of the time I see that kind of stuff happening on Twitter, like somebody will like – I will scope with this or a number of other people will say, “Hey, I am going to do a live stream during this period of time on this,” and I have actually seen a number of people doing live streams on CTFs, which are capture the flags. That one’s really been fascinating to me because it has been how do people think about approaching the security of an application. 

Like where do they look for weak spots and how do you determine, how do you approach that kind of a problem, which is fascinating. So yeah, I think it is important to remember that like you know, you are not the only one trying to keep up to date with all of this stuff, right? The one thing we all have said pretty consistently here is that it is a lot, and it is not just Kubernetes, right? Like any fast moving project. It could be your favorite Ruby module that has 200 contributors, right? 

It doesn’t matter what it is, it is a lot to keep a track of, and it represents some of that cognitive overheads that you have to think about. That is a lot to take on. Even if it is overwhelming, if you find value in being up to date with these things, just figure out – there are so many resources out there that address these different audiences and figure out what the right measure for you is. You don’t have to go deep on the code on everything. 

Sometimes it might be better to just try and find a source of information that gives you a high enough of a view. Maybe you are looking at the blog posts that come out on Kubernetes.io every release and you are just looking at the release notes and if you just read the release notes every release, that is already miles ahead of what I have seen a lot of folks out there when they are starting to ask me questions about how do you keep up to date. 

[0:28:35.9] JR: I’m curious, we have been talking a lot about keeping up as an individual. Do you all have strategies for how you help, let’s say your overall team, keep up with all the things that are going on? To give an example, Duffy, Olive and myself, at least at one point, were on the same team and we’d go out to disparate customers and see all of these different new things that they are trying to do or new projects that they are using. 

So we’d have to think about how do we get together and share that internally to make sure we are bringing the whole team along with what is going on in the ecosystem especially from a customer perspective. I know one of the ways that we do that is having demos and things of that nature that we share weekly. Are there other strategies that you all use with your teams to kind of share interesting information and news? 

[0:29:25.5] M: So what we do is mostly the way we share in our team, and we are a small team. We use Slack. We pre-filter in terms of like if there is stuff that I think is valuable for me and probably not for the whole team – obviously we are not going to share, but I think if it is related to something that the team has or to come grant and then I will share on Slack but we don’t have any formal way. I know people use some reports, weekly reports, or other platforms to distribute but we just use Slack. 

[0:29:53.0] DC: I think one of the things – one of the patters that we had at [inaudible 0:29:54] that I thought was actually super helpful was that we would engage a conversation. “I learned a cool new thing about whatever today,” and so we would say, “I am going to – ” and then we would start a Zoom call around that and then people could join if they wanted to, to be a part of the live discussion or not, and if they didn’t, they would still be able to see a recorded Zoom pop up in the channel later on. 

So even if your time zones don’t line up, like I know it is 2 AM or 3 AM or something like that for Olive right now, you can still go back to those recorded sessions and you’ll just see it on your daily Slack stuff. You would be able to see, “Oh there was a conversation about whether you should deploy Kubernetes crossed availibility zones or not. I would like to go see that,” and see what the inputs were, and so that can be helpful. 

[0:30:42.5] JR: Yeah, that is a super interesting observation. It is almost like remote-first teams that are used to these processes of recording everything and putting it in a Google doc. They are more equipped for that information sharing perhaps than like the water cooler conversations you’d have in the office. 

[0:30:58.5] OP: And on the Slack or any of the communication tool, we have different channels because we are all in lots of channels and to have channels dedicated to a particular subject is absolutely the way to go because otherwise in my previous company that seem to be kind of one main channel that all the architect used to discussed everything on and you know sometimes you join and you’re like, “What is everybody talking about?” 

There would be literally about a hundred messages on some sort of theme that I have never heard of. So you come away from that thinking that, “That is the main channel. Where is the bit – is there messages in the middle that I missed that were just normal discussions as opposed to in around the technical stuff,” and so it made me a bit sad, right? I would be like, “I haven’t understood something and there is a whole load of stuff on this channel that I don’t understand.” 

But it is the kind of central channel for everyone. So I think you end up then start looking up things that they are discussing and then realizing actually that is not really anything related to what I need to know about today or next week. It might be something for the future but I’ve got other stuff to focus on. So my point is that those communication channels for me sometimes can make me feel a little bit behind the curve or very much sort of reactive in trying to jump on things that are actually not really anything to do with me for me now and wasting my time slightly and kind of messing with my head a little bit in that like, “I really need to try and focus out stuff,” and actually putting the right content in the right channel, at least from a higher level, helps me decide whether I want to like look at that channel today, and stuff that should be in the channel is not kind of in a conversation channel. So organization of where that content is, is important to me.

[0:32:37.6] CC: I am so in the same page with you Olive. That is the way my brain works as well. I want to have multiple channels, like if we are talking about Slack or any chat tool, but some people have such aversion to multiple channels. They really have a hard time dealing with too many – like testing their threshold of what they think is too many channels. So I am always mindful too, like it has to work for everybody but if it was up to me, there will be one channel per topic. So I know where to focus on.

But you said something that is so interesting. How do we even just – like you were saying in the context of channel, multiple channels, and I go, if I need to pay attention to this this week as oppose to like, I don’t need to look at this until some time in the future. How do we even decide what we focus on that is useful for us in the moment versus it would be good for me to know but I don’t need to know right now. 

I am super bad at this. When I see something that is going to give me the fundamentals, like I have other priorities now, I sort of always want to consume that to learn the fundamentals because I think in the long term phase of, but then I neglect physically what I need to know to do in the moment and I am trying to sort of fish there and get focused on in the moment things. Anybody else have a hard time? 

[0:34:04.5] DC: You are not alone on that, yeah. 

[0:34:06.7] CC: It is terrible. 

[0:34:08.3] MICHAEL: Something that I wish I would do more often as like being a good citizen is like when you read a lot, probably 90% of my time is not writing but reading, maybe even more and then I share and then on Twitter, the tweet for them the most successful ones in terms of retweets or likes are the ones where I do like TLDR’s or some screen captures like too long to read. Where people don’t have the time, they might want to read the article but they don’t have the time. 

But if you put in like a TLDR like either a tweet or a thread on it, a lot of people would jump onto it because they can just easily capture it and they can still read the full article if they want but that is something that I learned and it is pretty – what is the right word? Helpful to my followers and the community but I just don’t do it that often unfortunately. If I am writing, summarizing, writing, I kind of remember. That is how the brain works. It is a nice side effect. 

[0:35:04.9] DC: I was saying, this is definitely one of those things where you can be the change you want to see if you, you know?

[0:35:08.6] M: Yeah, I know. 

[0:35:10.0] DC: This is awesome. I would also say that what you just raised Carlisia is like a super valid point. I mean like not everybody’s brain works the same way, right? There are people who are neuro-divergent. There are people who think very linearly and they are very comfortable with that and there are people who don’t. So it is a struggle I think regardless of how your brain is wired to understand to how to prioritize the attention you will give any given subject. 

In some cases, your brain is not wired – your brain is almost wired against that whole idea, like you are just not set up for success when it comes to figuring out how to prioritize your attention. 

[0:35:49.0] CC: You hit the nail on the head. We are so set up for failure in that department because there are so many interesting conversations and you want to hop in and you want to be a part of the conversation and part of the group and socialize. Our work is so isolating to really put our heads down and just work, it can be so isolating. So it is great to participate in conversations out there even if it is for only via Twitter. I mean, obviously we are very biased towards Twitter here in this group. 

But I am not even this on Twitter so just keep that in mind that we are cognizant of that but in any case, I don’t know what the answer is but what I am trying always to cut down on that, those social activities that seem so appealing. I don’t know how to do that from working out. 

[0:36:43.9] JR: I am in the same boat. 2020, I am hoping to let more of that go and to your point, it is not that there is no value in it. It is just, I don’t know, I am not deriving the same amount of quality out of it because I am so just multiplexed all over the place, right? So we’ll see how it goes. 

[0:36:59.9] CC: Oh if any listener has opinions and obviously it seems that all of us are helpless in that department. Share with us, please. 

[0:37:12.5] DC: It is a tricky one. I think it is also interesting because I find that when we talk about things like work-life balance, we think of the idea of maybe work-life balance is that when you come at the end of the day and you go home and you don’t think about work, right? Sometimes we think that work-life balance means that you have a certain amount of time off that you can actually spend with your family and your friends or your community, what have you, and not be engaging on multiple fronts. 

Just be that – have that be your focus, but when it comes to things like keeping up, when it comes to things like learning or elevating your education and stuff, it seems like, for the most part, and this is just my own assumption, I am curious how you all feel about this, that we don’t – that that doesn’t enter into it, right? Your personal time is totally on the table when it comes to how do you keep up with these things. We don’t even think about it that way, right? 

I know I personally don’t. I definitely have to do more and cut back on the amount of time that I spend reading. I am right there with Michael on 90% of my time when my eyes are open, they are either reading or staring up on the sky while I try to think about what I am going to write next. You know one way or the other it is like that is what I am doing. 

[0:38:24.0] CC: Yeah. 

[0:38:25.1] MICHAEL: I noticed last year on my Twitter feed, more people than the years before will complain about like personal burn out. I saw a pattern, like reading those people’s tweets, I saw a pattern there. It wasn’t really like a spiral and then they realized and they shot down like deleted Twitter from their phones or any messaging and other stuff, and I think I am at the point where I also need to do that when it comes to vacation PDO, or whatever. 

Because I am just like, as you said Duffy, my free time is on the table when it comes to Twitter and catching up and keeping up because work-life balance in my mind is not work but what is not work for like – Kubernetes is exciting, adding in all the space, like what is not work there? I need to really get better at that because I think I might end in the same spiral of just soaking in more until I just – 

[0:39:17.7] CC: Yeah and like Josh said, it is not that there isn’t a value. Obviously we derive a huge value, that is why we’re on it, but you have to weigh things and what are your goals and is that the best way to your goals from where you are right now, and maybe you know, Twitter you use for a while, ramp up your knowledge, ramp up the connections because it is great for making connections, and then you step back and focus on something else, then to go on a cycle. 

This is how I am thinking now. It is just like what Olive was saying, you know, books are great, blog posts are great, and I absolutely agree with that. It is just that I don’t have even the time and when I have the time, I would be reading code and I would be reading things all day long, it is just really tiring for me at the end of the day to sit down and read more. I want to invest in learning how to speed read to solve that problem because I read a lot of books and blog posts. So something on my list.

[0:40:22.8] DC: One of the biggest tips on speed reading I ever learned is that frequently when you read you think of saying the word and if you can get out of that habit, if you get out of the habit of saying the word even with your mouth or you just get out of that habit that will already increase the quickness of what you read.

[0:40:39.5] CC: That is so interesting. 

[0:40:41.4] DC: Yeah, that is a trippy one. 

[0:40:43.1] CC: Because I think being bilingual, I totally like – that really helps me understand things, by saying the words.

[0:40:52.9] DC: I think the point that we are all working around here is, there is a great panel that came out at KubeCon EU in 2019 was put on by Aaron Crickenberger, Esther McNaMara, Steven Augustus, these folks are all very high output people. I mean, they do a lot of stuff especially with regard to community and so they put on a panel that was talking about burn out and self-care and I think that it is definitely worth checking that one out. 

And actually also thinking about what keeping up means to you and making sure that you are measuring that against your ability to sustain, is incredibly important, right? I feel like keeping up is one of those subjects where we end up – it is almost insidious in its way to – it is a thing that we can just do all the time. We can just spend all of our time, any free moment that you have, you are sitting on the bus, you are trying to keep up with things. 

And because that happens so much, I feel like that is sort of one of the ways that we can feel burnt out as you are seeing today. We can feel like we did a lot of things but there was no real result to it and keep in mind that that’s part of it, right? Like when you are thinking about how we are keeping up with it, make sure that the value to your time is still something that you have some cognizance about, that you have some thought about, like is it worth it to me to just spend this six hours reading everything, right? 

Or would it be better for me to spend some amount of time just not reading, you know? Like doing something else, you know? Like bake a cake for crying out loud, you know? 

[0:42:29.5] CC: Something that a lot of times we don’t allow ourselves to do and I decided to speak for everybody I am sorry, I just do nothing, because our brain needs that. We need to not be listening, not be reading, just nothing. Just sit and look at the ceiling, our brain needs that. Ideally, look at nature, like look outside, look at the air, go for a walk. We need that, because that recharges the brain. Anyway, one thing also that I want to bring up, maybe we can mention real quick because we are coming up at the top of the hour. 

How do people, projects, how do we really help the users of those projects to be up to date with what they are doing? 

[0:43:18.4] DC: Well yeah I mean this is the different patterns that we are talking about. So I think the blog posts help. I like the idea of having blogs that are targeted towards different audiences. I like the idea of having an aggregate here for putting up a big project. I mean obviously Kubernetes is such a huge ecosystem that if you have things like KubeWeekly and I know that there are actually quite a number of things out there that try and do this. 

But if we can kind of agree on one like KubeWeekly I think is a pretty good one because it is actually run by the CNCF. So it kind of falls within that sort of governance as a model but having an aggregator where you can actually produce content or curate content as it relates to your project that’s helpful, and then office-hours I think is also helpful to Josh’s point. I mean office-hours and SIG hours are very similar things. I mean like office-hours there like how to developers think about what’s happening with the space. 

This is an opportunity for you as an end user to show up and ask questions, those sorts of patterns I think all are incredibly helpful as a project to figure out there to those things. 

[0:44:17.8] OP: Yeah, I know summary articles or the sort of TLDRs that Michael mentioned earlier, I think I need more of those things in my life because I do a lot of reading, because I think my brain is a bit weird in that I need to read something about five or six different times from five or six different articles for it to sort of frame in my head. 

So what I am trying to – like for 2020, I have almost tried to do this, is like if I think somebody knows all about this and it would save me reading those five, six, seven articles and if that person has the time, I try and sort of reach out to them and say, “Listen, have you got 20 minutes or so to explain this topic to me? Can I ask you questions about it?” It just saves me, saves my eyes reading the screen, and it just saves me time. I just need a TLDR summary of a project or a feature or something just so I can know what it is all about in my head and talk fairly sort of confidently about it. 

If I need to get in front and down under the weeds then there is more reading to kind of do for me maybe the coding on the technical side, but sometimes I can’t figure out what this feature sort of means and what is its use case in the real world and I have to read through lots of articles and sometimes kind of vendor specific ones and they’ve got a different slant than maybe an independent one and trying to marry those bits up my head is a bit hard for me and there is sort of wealth of information.

So if you are interested in a topic and there is hundreds of articles and you start reading four or five and they are all slightly different, eventually you figure out that – you are confident and I understand what that product is about but it has taken a long time to get there and it is taken a lot of reading time. So TLDRs is like really work and I think as Josh mentioned before, we have this thing internally where we do bench demos. 

And that is like a TLDR and a show and tell really quickly, like, “This is what this does and this is why we need to know about it and this is why our customers needs to know about it, the end,” you know? And that’s really, really useful because that just saves a whole bunch of people a whole bunch of time figuring out A, whether they need to know about it and B, actually now understanding that product or feature at the end of the five, 10 minutes which is what they typically are. So they are very useful short snippets of information. Maybe we are back to Twitter. 

[0:46:37.8] JR: Similar to the idea of giving a demo Olive, you made me think of something and that is that I think one of the ways that I keep up with the space is actually through writing along with reading and I think the notion of like – and this admittedly takes up time and the whole quality of life conversation comes in but using writing to help develop your thoughts and kind of aggregate all of these crazy inputs and try to be somewhat concise, which I know I struggle with, around something I’ve learned. 

It’s helped me a ton and then that asset kind of becomes reusable to share with other people the thing that you wrote. So for people listening to this I guess maybe a call to action for 2020 if that is your style as well, consider starting to write yourself and becoming a resource, right? Because even if you are new to this space, you’d be amazed at just how writing from your perspective can help other people. 

[0:47:26.3] DC: I think another one that I actually have been impressed with lately is that a number of consumer companies like people out there like Lyft and companies like that have actually started to surface engineering blogs around how they are using technology and how they are using technology to solve things, which I think, as a service provider, as somebody who is involved in the community of Kubernetes, I find those to be incredibly valuable because I get to actually see how those things are doing. 

I mean at the same time, I see things like – we talked about KubeCon, which is a convention that they have every year. Obviously the project is large enough to support it but there is actually an incentive if you are a consumer of that project to go and talk about how you are using it, right? It is incentivized in that it is more likely your talk will be accepted if you are a consumer of the product than somebody building it, right? We hear from people building it all the time. 

I love that idea of incentivizing people who are using this thing get out there and talk about it or share their ideas about it or how they are using it, what problems did it solve for them. That is critical I think. 

[0:48:31.0] CC: Can I also make a suggestion – is to not so much following on the thread that we are talking about just now but kind of on the general thread of this episode. If you have resources that you do use to keep up with things, stop this recording right now and go and give them a like, give them a follow, give them a thumbs up, show somehow appreciation because what Duffy said just now, he was saying, “Oh it is so helpful when I read a blog post.” 

But people who are writing, they want to know that. So give them some indication, it counts a lot. It takes a lot of effort to sit down and write something or produce a podcast and if you take any, derive any benefit from it, show appreciation. It motivates people to keep doing it. 

[0:49:26.4] DC: Yeah, agreed. 

[0:49:27.9] M: I think that is a great bind maybe to close off this episode because it reiterates that just consuming and keeping up that doesn’t necessarily mean you don’t give back, right? So this is a way of giving back, which is really important to keep that flow and creativeness. 

[0:49:41.8] CC: I go through a lot of YouTube videos and sometimes I just play one after the other but sometimes, you know, I have been making a point of going back and liking it. Liking the ones that I like – obviously I don’t like everything. I mean things that I don’t like I don’t listen in but you know what I mean? It takes no effort but just so people know, “OK, you did a good job here.” By the way, go to iTunes and rate us. So we will know that you liked it and it will help people find our show, our podcast, and if you are watching us on YouTube, give us a like. 

[0:50:16.1] DC: All right, well unless anybody has any final thoughts, that is what we wanted to cover this session. So thank you all very, very much and I look forward to seeing you next week. 

[0:50:25.3] M: Bye-bye. 

[0:50:26.3] CC: Thank you so much. 

[0:50:27.4] OP: Bye. 

[0:50:28.1] JR: Bye. 

[END OF EPISODE]

[0:50:28.7] ANNOUNCER: Thank you for listening to The Podlets Cloud Native Podcast. Find us on Twitter at https://twitter.com/ThePodlets and on the http://thepodlets.io/ website, where you'll find transcripts and show notes. We'll be back next week. Stay tuned by subscribing.

[END]
