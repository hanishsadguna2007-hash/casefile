import { Mystery } from '@/types/mystery';

export const supernaturalMysteries: Mystery[] = [
  {
    id: 'case-022',
    caseNumber: 'CASE-022',
    title: 'The Ghost Train of Blackwood Junction',
    category: 'supernatural',
    categoryDisplay: 'Supernatural-Style',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'A spectral steam locomotive appears on abandoned tracks at 2:14 AM, vanishing into thin air while local freight depots are burglarized.',
    fullStory: `For three consecutive weeks at exactly 2:14 AM, night watchmen and local residents near Blackwood Junction reported seeing the luminous glowing silhouette of a Victorian steam locomotive barreling down the disused spur line that was decommissioned in 1968. Witnesses reported a blinding headlight, heavy billowing steam, and the terrifying sound of a steam whistle echoing off the ravine cliffs, only for the train to dissolve into mist as it crossed the Blackwood viaduct.

Simultaneously during each spectral appearance, high-value electronics and pharmaceutical shipments were quietly looted from the secure freight siding 800 yards to the east. When police investigated, they found no physical train tracks on the viaduct, but local farmers insisted the ravine was haunted by the 1892 express disaster. Three people had access to the valley terrain: Disused Rail Siding Owner Caleb Vance, Drone & Holographic Technician Derek Miller, and Night Depot Watchman Arthur Higgins.`,
    setting: 'Blackwood Rail Ravine & Freight Depot, Yorkshire',
    disclaimer: 'Supernatural phenomena in this investigation have rational, scientific explanations.',
    tags: ['Ghost Train', 'Optical Illusion', 'Acoustic Trick', 'Smuggling'],
    suspects: [
      {
        id: 'susp-065',
        name: 'Derek Miller',
        age: 32,
        occupation: 'Stage Special Effects & Drone Engineer',
        relationToCase: 'Rents an old warehouse near the abandoned rail spur',
        alibi: 'Claims he was in Manchester attending an optical trade expo on Thursday night.',
        motive: 'Large credit card debts and previous arrest for stolen electronics trafficking.',
        knownFacts: [
          'Owns high-output theatrical fog generators and high-lumens laser projection rigs.',
          'Purchased high-frequency directional acoustic speakers online.'
        ],
        statement: 'I run lighting for arena concerts. I know nothing about phantom trains in the gorge.'
      },
      {
        id: 'susp-066',
        name: 'Caleb Vance',
        age: 63,
        occupation: 'Owner of the Disused Rail Siding',
        relationToCase: 'Fighting a legal battle against the modern logistics depot',
        alibi: 'At home sleeping in the old stationmaster cottage.',
        motive: 'Wants to scare away the logistics depot to reclaim ancestral farmland.',
        knownFacts: [
          'Elderly, walks with a cane, has no electronic or stage engineering experience.'
        ],
        statement: 'The 1892 disaster took my great-grandfather. The dead do not rest when heavy lorries shake the ground.'
      },
      {
        id: 'susp-067',
        name: 'Arthur Higgins',
        age: 49,
        occupation: 'Night Depot Watchman',
        relationToCase: 'Stationed at the modern freight siding during the burglaries',
        alibi: 'Staring at the ghost train across the ravine during the 2:14 AM incidents.',
        motive: 'Under suspicion of collaborating with warehouse thieves.',
        knownFacts: [
          'Abandoned his post to watch the apparition three times in a row.'
        ],
        statement: 'I saw the glowing light with my own eyes! The whistle chilled my spine. I was terrified.'
      }
    ],
    evidence: [
      {
        id: 'ev-060',
        code: 'EV-60',
        title: 'Laser Projector and Cold-Fog Rig in Old Water Tower',
        type: 'physical',
        category: 'Optical Rigging',
        collectedAt: 'Nov 14, 04:00 AM',
        locationFound: 'Inside abandoned railway water tower overlooking viaduct',
        summary: 'A 40,000-lumen laser projector paired with high-pressure glycol fog nozzles.',
        detailedContent: 'The projector was loaded with a 3D animated loop of an 1890s locomotive. Glycol cold-fog nozzles sprayed dense vapor across the open viaduct, creating a volumetric atmospheric projection screen in mid-air.'
      },
      {
        id: 'ev-061',
        code: 'EV-61',
        title: 'Directional Acoustic Sound Cannon',
        type: 'digital',
        category: 'Acoustic Forensics',
        collectedAt: 'Nov 14, 04:30 AM',
        locationFound: 'Disguised inside hollow railway signal box',
        summary: 'Long-range acoustic device (LRAD) playing localized steam whistle audio.',
        detailedContent: 'The ultrasonic sound beam was aimed directly at the modern freight depot guardhouse, convincing the watchman that a train was bearing down on him from 800 yards away.'
      },
      {
        id: 'ev-062',
        code: 'EV-62',
        title: 'Stolen Electronics Recovered in Miller’s Rental Van',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Nov 14, 05:15 AM',
        locationFound: 'Concealed in copse behind Miller’s warehouse',
        summary: '£180,000 worth of stolen smartphones and tablets from the freight depot.',
        detailedContent: 'Miller’s accomplices backed a van up to the unwatched siding while Watchman Higgins was mesmerized by the ghost train illusion.'
      }
    ],
    timeline: [
      {
        id: 'time-084',
        time: '02:10 AM',
        order: 1,
        title: 'Fog Emitters Trigger',
        description: 'Automated glycol nozzles blanket the abandoned viaduct in dense fog.',
        location: 'Blackwood Viaduct'
      },
      {
        id: 'time-085',
        time: '02:14 AM',
        order: 2,
        title: 'The Apparition Fires',
        description: 'Laser projector casts 3D locomotive onto fog; directional whistle blasts guardhouse.',
        location: 'Water Tower / Viaduct'
      },
      {
        id: 'time-086',
        time: '02:16 AM',
        order: 3,
        title: 'Looting the Depot',
        description: 'While the guard stares at the ghost, thieves load cargo from unlocked freight bays.',
        location: 'Freight Depot'
      },
      {
        id: 'time-087',
        time: '02:22 AM',
        order: 4,
        title: 'Disappearance',
        description: 'Laser cuts out; fog dissipates; train vanishes into thin air.',
        location: 'Blackwood Viaduct'
      }
    ],
    witnesses: [
      {
        id: 'wit-023',
        witnessName: 'Arthur Higgins',
        role: 'Depot Watchman',
        interviewTime: 'Nov 14, 03:30 AM',
        statement: 'Every time the train appears, the whistle sounds so deafening in my booth that I can’t hear anything else. I didn’t hear the warehouse roller door being jimmied at all.',
        contradictionHint: 'Demonstrates the acoustic cannon was used to deafen and distract him.'
      }
    ],
    locations: [
      {
        id: 'loc-023',
        name: 'The Blackwood Viaduct',
        description: 'Disused stone viaduct spanning an 80-foot deep river gorge.',
        accessible: true,
        notes: 'Overlooked by an abandoned Victorian water tower.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Timing of the Heists',
        text: 'Every time the ghost train appeared, a cargo bay was looted. The apparition was a deliberate distraction.',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'Volumetric Fog and Light',
        text: 'How can a glowing 3D object appear and vanish mid-air without tracks? Check the old water tower overlooking the valley.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Staged Projectionist',
        text: 'Derek Miller projected a laser animation onto artificial glycol cold-fog while using an acoustic cannon to mesmerize the guard while his crew looted the depot.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-065',
      methodId: 'method-085',
      motiveId: 'motive-085',
      criticalEvidenceIds: ['ev-060', 'ev-061', 'ev-062'],
      methodOptions: [
        { id: 'method-085', text: 'Projected a 3D locomotive animation onto artificial glycol cold-fog using a 40,000-lumen laser rig, while blasting directional audio to distract the depot guard during cargo looting.' },
        { id: 'method-086', text: 'Drove a real disguised diesel truck along the gravel bed covered in luminescent paint.' },
        { id: 'method-087', text: 'Hypnotized the guard using psychotropic gas.' },
        { id: 'method-088', text: 'Bribed Caleb Vance to stage a real ghost ritual.' }
      ],
      motiveOptions: [
        { id: 'motive-085', text: 'To systematically distract the night watchman to loot £180,000 in high-end electronics and pharmaceuticals from the freight depot.' },
        { id: 'motive-086', text: 'To reclaim ancestral land for Caleb Vance.' },
        { id: 'motive-087', text: 'To create a viral paranormal video for social media.' },
        { id: 'motive-088', text: 'To frame Arthur Higgins for dereliction of duty.' }
      ],
      fullExplanation: {
        whatHappened: 'Special effects engineer Derek Miller manufactured the "Ghost Train" using a high-powered laser projector, cold-fog generators, and an acoustic sound cannon to rob the freight depot.',
        howItWasDone: 'Miller concealed industrial glycol fog nozzles across the abandoned viaduct and placed a 40,000-lumen laser projector inside the old water tower. At 2:14 AM, the fog created a dense projection screen onto which an animated 3D steam locomotive was beamed, while an acoustic cannon blasted directional steam whistle sounds at the guard booth. Mesmerized and terrified, the watchman abandoned his monitors, allowing Miller’s crew to loot pallets of electronics.',
        whyItHappened: 'Miller was deep in debt to criminal distributors and used his professional special effects expertise to carry out untraceable commercial warehouse burglaries.',
        decisiveEvidenceWalkthrough: 'EV-60 uncovered the laser projector and fog nozzles in the water tower. EV-61 found the directional acoustic cannon. EV-62 recovered the stolen electronics in Miller’s van.',
        whyOthersAreInnocent: 'Caleb Vance is an elderly man with a cane and no technical expertise, and Arthur Higgins was genuinely terrified by the targeted acoustic cannon.'
      }
    }
  },
  {
    id: 'case-023',
    caseNumber: 'CASE-023',
    title: 'The Village Where Nobody Sleeps',
    category: 'supernatural',
    categoryDisplay: 'Supernatural-Style',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-30 MIN',
    shortDescription: 'In a remote Welsh mining village, residents are driven to panic by phantom nocturnal wailing and vibrating walls occurring only between 1:00 AM and 4:00 AM.',
    fullStory: `In the secluded valley hamlet of Cwm Celyn, rumors spread of a vengeful "Banshee of the Mines." For six weeks, every house in the village experienced low-frequency vibrations, shivering windowpanes, nausea, and an eerie wailing hum starting at 1:00 AM. Over half the residents, exhausted and terrified of a supernatural presence, sold their cottages at rock-bottom prices and fled.

When environmental inspector David Morgan arrived to investigate, he noticed that the strange nausea and acoustic vibrations stopped precisely at 4:00 AM every night. Furthermore, geological surveys recently revealed the valley sits on one of Europe’s richest untapped lithium and rare-earth deposits. Three individuals stood to gain or had access to the valley’s subterranean tunnels: Land Speculator Gavin Sterling, Local Mining Historian Eleri Hughes, and Retired Mine Foreman Tomos Evans.`,
    setting: 'Cwm Celyn Mining Hamlet, Snowdonia Valley',
    disclaimer: 'Supernatural phenomena in this investigation have rational, scientific explanations.',
    tags: ['Infrasound', 'Ghostly Wailing', 'Land Syndicate', 'Lithium Deposit'],
    suspects: [
      {
        id: 'susp-068',
        name: 'Gavin Sterling',
        age: 44,
        occupation: 'Commercial Property Speculator',
        relationToCase: 'Buying up abandoned village cottages through an offshore holding company',
        alibi: 'In Cardiff at luxury hotels on weeknights.',
        motive: 'Acquiring the entire valley floor to sell to a multinational lithium mining consortium for £25 million.',
        knownFacts: [
          'Funded the purchase of 14 abandoned cottages in the past month.',
          'Contracted industrial acoustics and drilling companies last year.'
        ],
        statement: 'I am simply investing in rural revitalization. The villagers chose to sell due to local superstitions.'
      },
      {
        id: 'susp-069',
        name: 'Eleri Hughes',
        age: 36,
        occupation: 'Mining Historian & Folklorist',
        relationToCase: 'Writing a book on local Celtic mine legends',
        alibi: 'In the local archives library during the day.',
        motive: 'Preserving the historic village against modern mining development.',
        knownFacts: [
          'Has campaigned publicly against corporate developers.'
        ],
        statement: 'The mountain has a voice. Our ancestors warned that digging too deep would wake the hollow winds.'
      },
      {
        id: 'susp-070',
        name: 'Tomos Evans',
        age: 62,
        occupation: 'Retired Mine Foreman',
        relationToCase: 'Holds keys to the sealed Victorian drainage adit tunnels',
        alibi: 'At home suffering from insomnia like everyone else.',
        motive: 'Paid a substantial cash consulting fee by Sterling’s holding company.',
        knownFacts: [
          'Visited the abandoned pump house with heavy equipment three weeks ago.',
          'Bank accounts show three consecutive £10,000 cash deposits.'
        ],
        statement: 'I only checked the water drainage so the old shaft wouldn’t collapse into the valley.'
      }
    ],
    evidence: [
      {
        id: 'ev-063',
        code: 'EV-63',
        title: 'Industrial Infrasound Resonance Whistle',
        type: 'physical',
        category: 'Acoustic Engineering',
        collectedAt: 'Nov 22, 09:30 AM',
        locationFound: 'Inside Victorian drainage shaft beneath village churchyard',
        summary: 'A 19 Hz acoustic Helmholtz resonator powered by an industrial air blower.',
        detailedContent: 'The device was connected to the abandoned mine shaft network. Emitting sound at 18.9 Hz (the human eyeball and chest cavity resonant frequency), it induced nausea, visual hallucinations (grey flickering shadows), and deep irrational terror without being audibly recognized as engine noise.'
      },
      {
        id: 'ev-064',
        code: 'EV-64',
        title: 'Timer Relay & Diesel Blower Fuel Slugs',
        type: 'digital',
        category: 'Mechanical Evidence',
        collectedAt: 'Nov 22, 10:15 AM',
        locationFound: 'Sealed pump house behind church',
        summary: 'Digital timer programmed to run from 01:00 AM to 04:00 AM daily.',
        detailedContent: 'The air compressor was fueled with off-road agricultural red diesel purchased on Tomos Evans’s credit card.'
      },
      {
        id: 'ev-065',
        code: 'EV-65',
        title: 'Consultancy Agreement Between Sterling and Evans',
        type: 'document',
        category: 'Contractual Evidence',
        collectedAt: 'Nov 22, 11:30 AM',
        locationFound: 'Tomos Evans’s home safe',
        summary: 'Contract promising a £100,000 bonus if 80% of village cottages were vacated.',
        detailedContent: 'The document outlined a scheme to "induce natural environmental uninhabitable conditions" to compel villagers to sell their deeds to Sterling’s shell corporation.'
      }
    ],
    timeline: [
      {
        id: 'time-088',
        time: '01:00 AM',
        order: 1,
        title: 'Infrasound Triggers',
        description: 'Compressor engaged in mine shaft; 19 Hz resonance waves propagate through bedrock.',
        location: 'Mine Adit'
      },
      {
        id: 'time-089',
        time: '01:30 AM',
        order: 2,
        title: 'Villagers Awaken in Terror',
        description: 'Vibrations, nausea, and flickering peripheral hallucinations afflict households.',
        location: 'Village Cottages'
      },
      {
        id: 'time-090',
        time: '04:00 AM',
        order: 3,
        title: 'Automatic Shutdown',
        description: 'Timer relay cuts power; valley returns to silence.',
        location: 'Pump House'
      }
    ],
    witnesses: [
      {
        id: 'wit-024',
        witnessName: 'Gwen Davies',
        role: 'Local Postmistress',
        interviewTime: 'Nov 22, 11:00 AM',
        statement: 'Every night at 1:00 AM, my teacups rattled and I felt an overwhelming sense of doom, as if a ghost was standing behind my shoulder. Last week, Mr. Sterling’s agent knocked offering cash for my house.',
        contradictionHint: 'Demonstrates the predatory real estate timing linked to the acoustic torture.'
      }
    ],
    locations: [
      {
        id: 'loc-024',
        name: 'The Victorian Mine Adit',
        description: 'Disused stone drainage tunnel running directly beneath the entire village.',
        accessible: true,
        notes: 'Acts as a natural acoustic horn amplifying subterranean frequencies.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Frequency of Fear',
        text: 'Infrasound at 18.9 Hz cannot be consciously heard as a note, but it vibrates the human eyeball and chest wall, triggering severe nausea and panic.',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'The Beneficiary of the Exodus',
        text: 'Who has been buying up every single abandoned cottage at steep discounts right after the wailing began?',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Pump House Contract',
        text: 'Gavin Sterling paid retired mine foreman Tomos Evans to install an infrasound resonator on a 1:00 AM timer in the drainage shaft to terrorize the village into selling.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-068',
      methodId: 'method-089',
      motiveId: 'motive-089',
      criticalEvidenceIds: ['ev-063', 'ev-064', 'ev-065'],
      methodOptions: [
        { id: 'method-089', text: 'Conspired with mine foreman Tomos Evans to install a 19 Hz industrial infrasound resonance generator in the mine tunnels on a 1:00 AM to 4:00 AM timer to terrify residents into selling.' },
        { id: 'method-090', text: 'Pumped hallucinogenic coal gas through household chimney flues.' },
        { id: 'method-091', text: 'Hired actors to dress as spectral banshees with megaphones.' },
        { id: 'method-092', text: 'Broadcasted radio frequencies through microwave cell towers.' }
      ],
      motiveOptions: [
        { id: 'motive-089', text: 'To drive residents out and buy the village cottages at rock-bottom prices before selling the valley to a £25M lithium mining syndicate.' },
        { id: 'motive-090', text: 'To revive Celtic tourism in Snowdonia.' },
        { id: 'motive-091', text: 'To frame Eleri Hughes for inciting mass hysteria.' },
        { id: 'motive-092', text: 'To demolish the village church for personal spite.' }
      ],
      fullExplanation: {
        whatHappened: 'Property speculator Gavin Sterling, in conspiracy with Tomos Evans, manufactured the "Banshee" using 19 Hz infrasound waves to drive villagers out of their homes.',
        howItWasDone: 'Sterling discovered the valley sat on a multi-million-pound lithium deposit. To acquire the land cheaply, he paid mine foreman Tomos Evans to set up an industrial infrasound Helmholtz resonator inside the abandoned Victorian mine tunnels running under the houses. Programmed to activate between 1:00 AM and 4:00 AM, the 18.9 Hz acoustic waves vibrated eyeballs and organs, producing terrifying grey apparitions, nausea, and dread, driving residents to sell their cottages to Sterling’s shell company.',
        whyItHappened: 'Sterling wanted to acquire 100% of the village land deeds to flip the valley floor to an international lithium mining corporation for £25 million.',
        decisiveEvidenceWalkthrough: 'EV-63 located the infrasound generator in the mine shaft. EV-64 recovered the timer relay and fuel records tied to Evans. EV-65 discovered the signed conspiracy contract promising bonuses for cottage evictions.',
        whyOthersAreInnocent: 'Eleri Hughes was campaigning against developers to protect the valley, and Tomos Evans was the hired accomplice carrying out Sterling’s orders.'
      }
    }
  },
  {
    id: 'case-024',
    caseNumber: 'CASE-024',
    title: 'The Footprints to Nowhere',
    category: 'supernatural',
    categoryDisplay: 'Supernatural-Style',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-25 MIN',
    shortDescription: 'In an enclosed snow-covered courtyard, boot prints walk to the center fountain and abruptly terminate in deep untouched powder with no return tracks.',
    fullStory: `At 7:00 AM following a continuous 10-inch snowfall at Blackfriars Priory in Oxfordshire, the antique gold communion chalice was found stolen from the central stone pavilion in the cloister courtyard. The courtyard is completely enclosed by 15-foot sheer masonry walls with no doorways except the main locked iron gate.

In the pristine, untouched snow, a single set of heavy size-10 boot prints walked from the pavilion steps directly to the dry center fountain—and then stopped dead. For 30 feet in every direction, the snow lay smooth, unbroken, and without a single disturbance. There were no return footprints, no ladder marks on the walls, and no snow disturbed on the roof tiles. Local folklore spoke of the "Flying Monk" who ascended to the clouds. Three people had spent the night in the priory: Caretaker Julian Finch, Mountaineering Instructor Marcus Vance, and Visiting Priest Father Thomas.`,
    setting: 'Blackfriars Priory Enclosed Cloister Courtyard, Oxfordshire',
    disclaimer: 'Supernatural phenomena in this investigation have rational, scientific explanations.',
    tags: ['Snow Mystery', 'Footprints', 'Impossible Crime', 'Zipline Rig'],
    suspects: [
      {
        id: 'susp-071',
        name: 'Marcus Vance',
        age: 34,
        occupation: 'Mountaineering Instructor & Arborist',
        relationToCase: 'Guest staying in the priory west wing',
        alibi: 'Sleeping in his room from 10:00 PM until morning.',
        motive: 'Bankrupt climbing supply business with equipment loans due.',
        knownFacts: [
          'Carried high-tensile Dyneema climbing cord and tree-rigging ascenders in his vehicle.',
          'Wears size 10 hiking boots.'
        ],
        statement: 'I looked out my window at 7:00 AM and saw those tracks. It was eerie. You can’t fly out of a walled courtyard.'
      },
      {
        id: 'susp-072',
        name: 'Julian Finch',
        age: 60,
        occupation: 'Priory Caretaker',
        relationToCase: 'Keyholder to the courtyard iron gate',
        alibi: 'Stoking the church basement furnace until 1:00 AM, then asleep in his lodge.',
        motive: 'Threatened with redundancy.',
        knownFacts: [
          'Suffers from sciatica and wears size 8 orthotic shoes.'
        ],
        statement: 'I locked the gate at 9:00 PM. No man can jump fifteen-foot stone walls without wings.'
      },
      {
        id: 'susp-073',
        name: 'Father Thomas',
        age: 51,
        occupation: 'Visiting Priest',
        relationToCase: 'Officiating communion services',
        alibi: 'Writing sermons in the rectory study.',
        motive: 'None identified.',
        knownFacts: [
          'No athletic or rigging capability.'
        ],
        statement: 'It is a sacred mystery, or the work of a phantom. The snow is God’s pure witness.'
      }
    ],
    evidence: [
      {
        id: 'ev-066',
        code: 'EV-66',
        title: 'Overhead Aerial Cable Line & Pulley Swivels',
        type: 'physical',
        category: 'Rigging Forensics',
        collectedAt: 'Jan 15, 08:30 AM',
        locationFound: 'Church bell tower gutter leading to tall courtyard cedar tree',
        summary: 'Ultra-thin, 3mm green Dyneema aerial tension line with a silent zip-pulley.',
        detailedContent: 'A dark green Dyneema line was rigged between the bell tower louvers and a branch of the ancient courtyard cedar tree directly above the center fountain. Using a climbing ascender, the perpetrator dropped down to the fountain, snatched the chalice, and was hoisted straight back up into the tree branches without touching the snow again.'
      },
      {
        id: 'ev-067',
        code: 'EV-67',
        title: 'Chalice Hidden in Marcus Vance’s Rucksack',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Jan 15, 09:15 AM',
        locationFound: 'Inside Marcus Vance’s climbing gear haul bag',
        summary: 'The 17th-century solid gold communion chalice wrapped in wool socks.',
        detailedContent: 'Discovered alongside Dyneema rope cut-offs and tree-climbing friction spurs.'
      }
    ],
    timeline: [
      {
        id: 'time-091',
        time: '11:00 PM',
        order: 1,
        title: 'Snowfall Begins',
        description: 'Heavy snow blankets the priory courtyard continuously until 4:00 AM.',
        location: 'Courtyard'
      },
      {
        id: 'time-092',
        time: '04:15 AM',
        order: 2,
        title: 'The Aerial Extraction',
        description: 'Vance lowers himself on the tension cable directly into the center fountain.',
        location: 'Center Fountain'
      },
      {
        id: 'time-093',
        time: '04:22 AM',
        order: 3,
        title: 'Vertical Ascender Hoist',
        description: 'Vance winches himself straight up into the cedar branches and traverses back to the roof.',
        location: 'Cedar Tree'
      },
      {
        id: 'time-094',
        time: '07:00 AM',
        order: 4,
        title: 'Discovery',
        description: 'Footprints to nowhere discovered in fresh snow.',
        location: 'Courtyard'
      }
    ],
    witnesses: [
      {
        id: 'wit-025',
        witnessName: 'Julian Finch',
        role: 'Caretaker',
        interviewTime: 'Jan 15, 08:00 AM',
        statement: 'I noticed several twigs broken high up in the cedar tree above the fountain, but I thought it was just the weight of the heavy snow.',
        contradictionHint: 'Points to human weight in the tree canopy.'
      }
    ],
    locations: [
      {
        id: 'loc-025',
        name: 'The Cloister Courtyard',
        description: 'Square lawn bounded by stone cloisters with a dry stone fountain in the center.',
        accessible: true,
        notes: 'Ancient cedar tree extends thick branches over the center fountain.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Look Up, Not Down',
        text: 'If there are no return tracks in the snow, how can an athletic climber leave a spot without touching the ground?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'The Cedar Tree Canopy',
        text: 'Broken branches were found in the cedar tree directly over the fountain. Check who has professional tree-rigging and climbing experience.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Dyneema Aerial Traverse',
        text: 'Marcus Vance rigged an overhead cable between the bell tower and the cedar tree, rappelled to the fountain, grabbed the chalice, and winched himself vertically back up.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-071',
      methodId: 'method-093',
      motiveId: 'motive-093',
      criticalEvidenceIds: ['ev-066', 'ev-067'],
      methodOptions: [
        { id: 'method-093', text: 'Rigged a Dyneema tension cable from the bell tower to the cedar tree, rappelled down to the fountain, and used mechanical ascenders to winch himself vertically back up into the canopy.' },
        { id: 'method-094', text: 'Walked backwards in his own footprints while sweeping snow with a broom.' },
        { id: 'method-095', text: 'Used a hot-air weather balloon to descend and ascend.' },
        { id: 'method-096', text: 'Crawled through an underground drainage pipe beneath the fountain.' }
      ],
      motiveOptions: [
        { id: 'motive-093', text: 'To steal the solid gold communion chalice to pay off bankrupting climbing supply equipment loans.' },
        { id: 'motive-094', text: 'To prove the existence of miraculous levitation.' },
        { id: 'motive-095', text: 'To frame Caretaker Julian Finch.' },
        { id: 'motive-096', text: 'A drunken prank during a weekend retreat.' }
      ],
      fullExplanation: {
        whatHappened: 'Mountaineering instructor Marcus Vance executed an aerial vertical cable heist, rappelling into the courtyard and winching himself back into the tree branches to leave "footprints to nowhere."',
        howItWasDone: 'Vance rigged an ultra-thin green Dyneema climbing cable from the bell tower window to the high cedar tree branch directly above the courtyard fountain. After the snow stopped at 4:00 AM, he walked down the pavilion steps, stepped to the dry fountain to snatch the chalice, clipped into his hanging cable harness, and winched himself straight up into the tree canopy, traversing back to the roof without leaving a single return footstep in the snow.',
        whyItHappened: 'Vance was facing total financial collapse and foreclosure on his outdoor adventure center and needed the gold chalice to melt down.',
        decisiveEvidenceWalkthrough: 'EV-66 uncovered the overhead tension line and pulley hidden between the bell tower and cedar branch. EV-67 located the chalice inside Vance’s climbing gear haul bag.',
        whyOthersAreInnocent: 'Julian Finch wears size 8 orthotics (the prints were size 10) and has severe sciatica, while Father Thomas has no physical ability to scale roofs.'
      }
    }
  }
];
