const reveal = (event) => {
    event.target.innerText = "Place Sarah, Steph, Apsara, and Huong in your top 4 in an order of your choosing. Place Josh last."
}

const renderAll = (parentNode, mtcData) => {
    mtcData.forEach(x => {
        parentNode.appendChild(renderMtc(x))
    })
}

const renderMtc = (qnaObject) => {
    const newNode = document.createElement("section")
    const header = document.createElement("h3")
    header.innerText = qnaObject.date
    newNode.appendChild(header)
    newNode.classList.add("mtcSection")
    const nodes = qnaObject.qna.map((x) => 
        renderQuestion(x)
    )
    nodes.forEach(x => {
        newNode.appendChild(x)
    })
    return newNode
}

const renderQuestion = (answer) => {
    const newNode = document.createElement("article")
    const children = answer.map((x, i) => renderAnswer(x, i))
    children.forEach(x => {newNode.appendChild(x)})
    return newNode
}

const renderAnswer = (answer, index) => {
    let newNode
    if(index == 0) {
        newNode = document.createElement("h4");
        newNode.innerText = answer
    } else {
        newNode = document.createElement("p");
        newNode.innerHTML = `<strong>${candidates[index-1]}</strong>: ${answer}`
    }
    return newNode
}

const candidates = [
    "Steph",
    "Josh",
    "Huong",
    "Sarah",
    "Apsara",
    "David",
]

const mtcs = [
    {
        date: "08/11",
        qna: [
            [
                "What is the most pressing issue in victoria, and how would you advocate / use your skills to get it addressed federally?",
                "Climate",
                "Climate",
                "Housing (but to build power)",
                "Housing & CoL (to build for climate as #1)",
                "Cost of living",
                "Climate",
            ],
            [
                "What portfolio would you like to take?",
                "Anything - but her choice would be refugee policy",
                "Social services, health, mental health, education",
                "a portfolio of organising? IDK i didn't really get it",
                "Women & justice, also social services",
                "Education",
                "Happy to take anything",
            ],
            [
                "If elected to the Senate, how would you leverage your position, like Janet did, to address the specific challenges faced by the transgender community in Victoria, particularly in areas such as healthcare, legal recognition, and protection from discrimination?",
                "Focus on lived experience",
                "'I will uphold party policy'",
                "Centre the voices of trans folks - make the party safe for trans folks",
                "Always be a champion for trans people, and trans kids",
                "Have the 2001 policy come to fruition",
                "I mix with diverse people",
            ],
            [
                "How does your experience make you senate ready (basically)",
                "Getting pot legalised, have worked there, etc",
                "I have been a councillor, brought up barbara",
                "I bring policy experience, build people power",
                "Champion debater since 12, mediator, seen law reform through",
                "Facilitated policy development",
                "I have read three thousand books",
            ],
            [
                "Under what circumstances would you make compromises with the LNP? Do you feel making compromises with conservatives helps our cause?",
                "Stamp out the duopoly - will negotiate, won't compromise",
                "Gotta be realistic",
                "Make sure outcomes are building blocks",
                "Will negotiate, won't compromise",
                "Much of change is incremental, parliament is constrained, will work collaboratively",
                "People are complicated",
            ],
            [
                "Following the failure of the voice referendum, what steps will you take towards advancing indigenous rights?",
                "Balance of power, truth and treaty, first nations justice front and centre of negotiators",
                "Sooking about victorian policy, throwing AGFNN under the bus, got his council to support the yes campaign",
                "Our reputation for FN justice is trash, voice was albo, we need to be making ourselves credible for Blak greens, Truth",
                "Truth telling starts with the party, message stick process, better funding",
                "Empower FNs",
                "Support truth telling",
            ],
            [
                "The housing campaign is crucial to the immediate future of our party, and we have already seen damaging talking points about the investment properties of Labor MPs. Are you currently an owner or renter? Do you own, or have an interest, in any investment properties? Will you commit to divesting from any investment properties should you be elected?",
                "Renter in St Kilda, owns a farm",
                "House was tenanted, kicking them out, won't have any investments soon",
                "Owner, heavily mortgaged, 6-7 days working, single mum",
                "Own, heavily mortgaged, has had to chase VCAT, disliked hoarding property",
                "Renter & RAHU member, the problem is investment",
                "Owner, rented most of his life, he has read 40 properties",
            ],
            [
                "As a Senator, what will you do to represent regional Victorians?",
                "Country girl at heart, ballarat rep, campaign managed Rippon, touring, listening, etc etc",
                "Get out to regions, spend time there, needs to be a senator for all of victoria",
                "Reputation and local media - help build solidarity across the state",
                "Bush kids - building communities at grass roots",
                "Not gonna be a latte sipper, need to be in the community",
                "Gotta get out there",
            ],
            [
                "Need to be local activists, bringing people in their 100s, have you had an experience filling town halls with public meetings? Are you willing to do that as a senator?",
                "Filled St Kilda town hall multiple times - build a movement, energise voter base, commit to building voting machines",
                "Had 100 volunteers in 2020",
                "yes, I can fill a room, but what matters is getting them to take action",
                "We build community, regularly speak at events with heaps of people, doing it at campaigns, GAB mentioned",
                "You need to be in the community",
                "Initiated peoples forum",
            ],
        ],
    },
    {
        date: "11/11",
        qna: [
            [
                "Intro",
                "Same I think, more focus on FN",
                "Same, maybe more focus on upbringing in a single parent household",
                "New - opened with a vision of the future, and then ended with experience, v strong imo",
                "Same I think",
                "Same as last time I think",
                "Same one again I think - Climate emergency, biodiversity, environment, equality, and fairness",
            ],
            [
                "The role of a senator is to represent the interests of all people in victoria - what life experiences have you had to enable you to represent people in both rural and urban areas?",
                "First half of life on the farm, but has also run campaigns in the city, representative govts, listen to experiences and platform them in parliament",
                "First couple of years living on a bush block near warnambool, family had experiences",
                "Calls western suburbs home - union organiser all across victoria, getting to know workers is getting to know the communities - make sure you're really representing, and getting an accurate picture",
                "Grew up in alice springs for 20 years - community is vital - lived in armidale too, distance from the city heightens importance of community, feels really connected to the bush",
                "(apologies, I appear to have deleted this accidentally)",
                "Diverse background, mother a refugee, lived in over 40 homes, 20 different jobs, has talked to a lot of people",
            ],
            [
                "We've seen the strength of community engagement from our Queensland MPs like MCM and how important it is to our long term strategy. Could you each talk about what specific work you've done over the past few years to help build grassroots support in the party and how that would continue as a senator? ",
                "Proud of the grassroots work she's done, mentoring greens across the country, state office doing well, doing listen and learn doorknocks in Macnamara, need to be organising more",
                "Firm advocate for using local govt for building the party, and build branches, done that by connecting with people who wouldn't vote for the greens, has build capacity for his own campaigns - not much focus on broader party",
                "Immediately went to union after being the MP, learned organising, now teaches people, and need to activate people on the things they care about - has spoken to max about the right things, and we're doing the right things, is doorknocking housing estates",
                "Wills candidate - really about meeting the community where they're at, need to do continuous campaigning - the role of the senator includes growing the movement and being the senator for the entire state, find ways to engage the community by representation and growing",
                "Mentoring people and helping them get skilled up for campaigning, really detailed",
                "Senate vote in 2004 was the highest of any candidate, has proved he can get people involved",
            ],
            [
                "Can you give examples of when you have put the interests of the party above your own?",
                "Has run unwinnable elections, campaign managed them, campaign led council elections - ultimately this job is bigger than any of us, really enjoys her jobs, the most important role is to be in balance of power - parliament is toxic for women, my skills are best suited to repping the greens",
                "If elected I would stay cognizant of being only one member of the party - gotta conduct themselves as a model member - part of the responsibility is to build the party, has done campaigning",
                "Could have returned to council after losing MP, gotten a cushy retirement, but super passionate - gotta make being in the party really fun",
                "When I was Wills had to give up on working in the business, partner has taken all over the emotional labour - real life impact - would always put the interests of the party above her own and would step back if it was the best thing",
                "Has worked for a lot of campaigns, run in unwinnable elections, worked on a lot of campaigns that weren't about her",
                "Greens have been my life - put a lof of things behind them - have done a lot of greens work",
            ],
            [
                "A successful MP needs to be able to negotiate and work with others across the political divide. Can you give us examples of your achievements in this area.",
                "Worked at the UN representing Aus Aid - negotiating complicated things - worked as a policy advisor to RDN on cannibis reform, reached across the aisle, established first cross party friendship group on drug law reform",
                "Greens take great pride in values and integrity - but we are also confronted with political realities. it's his job to find areas where others might agree with greens policies. He did a motion with all his other ocuncillors.",
                "Working across the divide is a team sport - one of many people who have that responsibility - the more we become a threat the more we get frozen out - formed the vietnamise australian forum with an ALP person - better greens if we can negotiate outside of party politics",
                "Divorce lawyer for a decade, focusing on interest based negotiations, also lobbied the ALP and local labor member to overhaul an intersection - working on prepoll is great",
                "Really important to negotiate as a minor party - worked on the FWC hort award - had to work closely with two labor affiliated unions",
                "Melbourne's first elected green - 1 of 9, got 130 greens polcies passed and acted on, got unanimous treaty agreement in a conservative council",
            ],
            [
                "What work have you done to bring migrant communities into our movement, and do you think it's important that our party room reflect our majority migrant nation?",
                "I have worked to bring in all sorts of people through doorknocking and phonebanking, partner and children are refugees, work very closely with FN communities - gotta win more seats to get a more representative party room",
                "White male, been really pleased to support women and women of colour, my family is mixed race, i think our party and party room should be reflective - needs to have a track record of working with people of all works of life",
                "'David risstrom do better, can't be colour blind' - when I became an MP the entire vietnamese community came and engaged, I am an out green in the community -- we need the party room to reflect our communities - need to do deep work to reflect",
                "Wills, gotta grow it out beyond Bell St, lots of work in that election like Ramadan, engage with people in their communities to show that politics is for them - always engage and be informed by lived experience - working a lot on message stick which addresses white supremacy and white fragilityu",
                "Worked specifically with migrant communities to improve materials for multicultural communities, and engage with the communities to make submissions",
                "Mum was a refugee - did a lot of work with migrant communities, 'colourblind', chock a block of interesting people, focus on how interesting people are - great interest in migrant communities",
            ],
            [
                "What do you feel is the role of a senator internally within the Victorian Greens? How will you use the position to fulfil that role?",
                "We need to excite, engage, and grow membership - can't just focus on parliamentary work - the significance of getting elected reps going out to areas, stay focused and stay connected",
                "Primary internal role of all members who hold public office - aiming to be a model member, none of us a perfect, we all make mistakes - people know what they're going to get with me, always sought to engage with respect and building bridges",
                "Nobody joins to take part in internal conflict - why are people so disengaged? Senator is the culture bearer, to work through things and heal, model love and care and facilitate difficult questions",
                "Janet balances it all really well - visible, engaged, doing state council, star power of a senator on a doorknock building the movement, senator also has a role in building consensus and repairing divisions - governance head for the senate but also leadership in the party",
                "Notes huge power differential between members - perform a unifying role, won't intervene in internal matters unless they contravene four pillars - wants to continue mentoring - wants our party to focus on Big politics, not little corrosive politics",
                "Most important thing is doing things for people - good to talk, but need to translate the talk into what we actually do for others (people animals plants) and make sure that excites people",
            ],
            [
                "We pride ourselves on having a party room with an array of personalities and experiences. What do you, as an individual, offer to the party that you think makes you stand out from other candidates? How will this enhance the party room and parliament?",
                "mother, renter, grew up in country knows how to get her hands dirty - a breadth of relateability to the party room, really enjoys bringing people on the journey, high level of resilience, life experience of losing family members gives urgency, significant professional experience, relationships with pacific island leaders etc",
                "Has worked with extremely difficult personalities - focus on being a peacemaker - I am a high profile government councillor, I spoke at the UN",
                "Really value her relationships - has worked in tough places - for her and party room to be effective, what she brings is a sense of big pictured, anchored in real life in communities in australia - not be locked into that institution that is parliament",
                "Champion debater at 14 - bush kid, lived in city, built the surrogacy community, podcast, trained in mediation, neuridiverse, campaigned for law reform - always be informed by lived experiene of any community impacted by law reform",
                "Secretary of multicultural greens for six years - extensive outreach into multicultural communities that really trust her, has developed 18 high quality policies - a skill set that will develop vote in multicultural communuities",
                "A proven history of being green, being reliable, being keen, working with lots of people, translating that into things that last - not about us as individuals, what we leave behind for the world",
            ],
            [
                "In the event that a Senator disagrees with other Green colleagues to the extent that they decide to resign from the Party, do you think they should also resign as a Senator?",
                "lidia resignation was disappointing, but we need to acknowledge the issues, hope she keeps voting with us - hope and expect any future senators can engage with processes on consensus - just very sad",
                "Pain and disappointment from Lidia, I do think it's fair for members of a political party to feel hard done by, every situation needs to be assessed on its merits (didnt answer)",
                "Would like the party to think about how we are going to preselect people who stand with us and help FN people have a voice in the party",
                "Have been times where she's disagreed - can't envisage that she won't align with the party - will be in the senate because the party put her there, appreciate lidia's work with Blak Sovereignty, will serve out any time as a greens senator",
                "Acknowleges the frustration, but the constitution exists, 18 policy submissions, need to do the work to change the policy rather than just disagreeing (kinda tthing)",
                "Constitutionally yes, but thinks they should resign, I think you should resign if you have moved and the party hasnt",
            ],
            [
                "As we have seen from the recent excellent work of Barb Pocock on the Govt consultant’s scandal, cross examining evasive people in Estimates is an important part of the role of a Greens’ Senator. What experience do you have with that type of work?",
                "has worked as a lawyer and cross examined, has been interrogating ALP people in her role as UN Pacific, core is having a great knowlege of the areas - relationships are key and information gives you the prospect in estimates, would relish the opportunity",
                "I do this for a living - having effective greens in the senate is critical for transparency, a member of the suitability panel",
                "Need to know peoples jobs better than they do, union organiser helping people confront their bosses",
                "Cross examined in legal sector already - had training in advocacy in cross examination - has already had a job to interrogate unethical and evasive people - demaning better from the media too",
                "Award modernisation experience - cross examined manager of the largest farmer, helped develop hard hitting questions and got someone to crumble",
                "Cross examining is asking people questions and getting them to answer them - barrister for 20 years, but is also a policy wonk",
            ],
        ],
    },
    {
        date: "14/11",
        qna: [
            [
                "Intro",
                "Going off script after seeing repeat MTC attendees, focused more on inequality, and personal story",
                "Same speech",
                "focused on organising but gave different stories",
                "New intro focusing on the Greens standing up for ceasefire, and more polished, v v good - easily the best intro we've had",
                "Same intro I think - 18 high quality submissions",
                "Slightly updated - didn't call out the five things",
            ],
            [
                "What demonstrates your ability to work productively with politicians/people with differing viewpoints?",
                "Talked about experience in RDNs office working on drug law reform, working across party lines",
                "7 years on council, conservative council, passed a motion with every councillor, same answer he's given a dozen times by now",
                "experience in state parliament, labor froze us out",
                "Worked as a divorce lawyer, trained in mediation and negotiation, engaged in good faith in state council - always works toward consensus",
                "Worked with unions etc",
                "You're on mute david - first elected green in victoria, 130 policies done on melbourne",
            ],
            [
                "One of the big issues in the climate debate is Australia’s role in the production of fuels feeding greenhouse gas emissions. What path will you seek to pursue in genuinely reducing Australia’s contribution to greenhouse gas emissions bearing in mind issues such as implementability, effectiveness and urgency?",
                "Coal & Gas is the biggest issue, albanese being crap on pacific islands, need to help youth and pacitfic islands - need to win balance of power - very strong answer",
                "message isn't cutting through - we go too big, too abstract - we need to talk about transport and food too",
                "It's about building community trust in the greens - it's a political issue as much as it's a justice issue, policy is good, governments wont change unless we put pressure on them, 'get the masses to win'",
                "Will be focused on lobbying reform, holding labor accountable, would like to see Australia take a leadership role, and build the grassroots",
                "Need to use the levers of parliament, and also build community pressure",
                "Basically the same answer as above - got hybrids in, etc etc",
            ],
            [
                "Considering the Greens need a presence in Parliament to make an impact, what kind of success have you had in the past raising funds and winning votes?",
                "Proud of the work they've done in Macnamara - raised 500k in 2019, have turned macnamara into the most marginal greens seat in the country, strong on grassroots fundraising and media - need all of them to win",
                "Has run a lot of unwinnable seats, has grown charity",
                "we have great fundraising minds - when we pitch fundraising as a radical and and talk to people about the things they care about you can tap new cohorts of donors",
                "Grew the surrogacy community to the point where there are now a cohesive community that lobbies government - in Wills they used community events to fundraise - we need to show volunteers and members that we have a vision that they can be inspired by",
                "Senator plays a support role in campaigns - ran the doorknock in northcote and almost won",
                "Need to do things to get people to donate, he does things and gets people to donate",
            ],
            [
                "There has been much talk this parliamentary term about compromise - from the safeguard mechanism through to the Housing Australia Future Fund (or HAFF). How much do you think we should focus on compromising for incremental gains versus holding our ground out of principle? Are there any policy areas you can tell us you would never compromise on?",
                "In an ideal world we wouldn't have to negotiate - proud of the pressure we put on during HAFF and Safeguard - has negotiated at the UN, go in with a redline of what we won't compromise on - both the ALP and LNP are conservative - redlines on things like refugees, climate, and social causes",
                "Compromise can't be a dirty word - when an opportunity presents to move toward our objectives we should take it, don't vote for things that will take us backwards - long track record etc etc",
                "What we need to think about is the broader picture of the movements that will get us closer to the result we need - if we have incremental gains that build the imagination, with integrity, then that's fine",
                "We're the adults at the table - will consider making incremental changes as a win - wouldn't compromise on human rights and her values, refugees, social justice, etc",
                "Won't compromise on Gonski - answer focused on negotiating with AWU to improve farmer conditions",
                "Have a position, accept others have different ones, put them strongly - but accept you might not get your own way. Talk about areas where both people can win. Be honest.",
            ],
            [
                "What strategies will you use to persuade the federal government not to go through with the stage 3 tax cuts? How important is this to you?",
                "Huge grassroots campaigns in every winnable seat - Macnamara has Josh Burns scared - wills, higgins, etc - roll out the campaign machine - commitment is in building the campaign machine to build pressure",
                "System of taxation is the biggest barrier to getting greens policy done - we need to help Labor to find the political license to back down - we won't win by yelling at them, we need to talk MP to MP",
                "Should be an easy win for us - stage 3 tax cuts are abhorrent - we need to get creative - talked about specific strategies too",
                "Grassroots is the way to get this done - support more doorknocking and campaigning around the cuts, the cuts are very bad, etc",
                "Wants to be on the cost of living senate committee, stage 3 tax cuts are terrible etc, work with other parliamentarians to wind back this tax cut - need to build community pressure",
                "Extremely important - talked a lot about inequality being bad, didn't really cover off what strategies - unless Triple Bottom Line governance is that",
            ],
            [
                "Which portfolio areas would you say you could be given as a Senator and be effective from Day 1, and why?",
                "Analytical and political skills to take on any portfolio - quick snappy answer",
                "Exact same answer as the 08/11 MTC of this question - Social services, health, mental health, education - like EXACT same answer",
                "Spent half her working life in policy in environment and climate - masters in urban planning - was spokesperson for waste, sustainable cities, and prevention of family violence - but the role of the senator in the next 18 months is campaigning on social services housing etc - happy with anything though",
                "Justice portfolio, or part of it, would be best use of skills - has been working with Larissa Waters already on this kind of area - womens portfolio would also be good - social services portfolio would also be good - also passionate about education - but any portfolio would be good",
                "Any portfolio would be fine - has worked across all the policy already ",
                "Environment, legal, is also on the mental health tribunal, transport also works, etc",
            ],
            [
                "Support for the Voice referendum seemed to be confined to better off or educated voters. Similar to our own constituency. What do you see that the Federal Greens could do to reach that wider constituency for whom progressive politics seems to have no appeal?",
                "Also disappointed int he result - showed how far we have to go - what we can do better is grassroots, expanding the size of the party room and being representative",
                "Doesnt think it's fair to say it was confined to better off people - we have a problem with connecting with working class people - thinks local govt is powerful in shifting votes - 7 years in council etc",
                "Talked about how terrible the campaign was - if you were serious about it you wouldn't have done it that way - if we want to build the support behind FN justice we have to earn back our credibility through truth telling, solidarity actions, things that are meaningful - tell the story of why we want reparations and sovereignty for the national identity",
                "Talked about Dental and Free Medicare as an example on how to bring politics to people to make it accessible, and that it matters to them",
                "Talked about heaps of people saying they didn't know what it was about - wants to extend mentoring to FN members",
                "Disappointed by the voice loss - need to speak plainly and honestly, and follow through and do things",
            ],
            [
                "Sex workers are routinely stripped of their social media platforms online just for being a sex worker. Do you believe that sex workers should be able to have safe and consistent access to social media without being deplatformed, censored and shadow banned and what would you do in parliament to achieve safety and fair access for sex workers online?",
                "Fully believes that sex work is work - wants to get informed and meaningfully represent sex workers to ensure safety and equity",
                "Interested in speaking to RUG / Rachael - need to ensure industrial rights for sex workers, need to stop sex slavery and sex trafficking (which is not sex work, this is a very bad pivot)",
                "Can we use the case of sex workers to test the case of the overreach of social media companies - calls out that not all sex workers are victims - they have a right to safely run their business and have the same rights as any other workers",
                "Makes it clear that sex work should be safe - do not conflate sex work with trafficking - compares it to mining and police work - surrogacy and sex work intersect, wants to engage with the sex work industry to ensure representation",
                "Sex work is work, wants to listen and work collaboratively with sex workers to develop senate inquiry, so that sex workers can make submissions - use senate position to support sex workers to make submissions",
                "Sex workers are legitimate workers - has represented a lot of sex workers - they should be able to have their rights respected - wants to get the ACCC involved - get sex workers a legitimate and fair deal",
            ],
        ]
    }
]

const mtcSection = document.getElementById("MtcTranscribe")
renderAll(mtcSection, mtcs)