import { Mystery } from '@/types/mystery';

export const logicMysteries: Mystery[] = [
  {
    id: 'case-028',
    caseNumber: 'CASE-028',
    title: 'The Island Alibi Paradox',
    category: 'logic',
    categoryDisplay: 'Logic & Puzzle',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '25-35 MIN',
    shortDescription: 'A reclusive lighthouse keeper is murdered on an isolated tidal skerry. Three boat owners claim tidal currents made it impossible to reach the island.',
    fullStory: `At 6:30 AM at Saint Jude’s Skerry—a jagged granite rock three miles off the Cornish coast—Lighthouse Keeper Donald Thorne was found struck down by a heavy brass winch handle on the rocks. Forensic pathology established death occurred between 1:00 AM and 2:30 AM during dead-low tide, when the jagged reefs surrounding the island were exposed.

The local harbor master noted that navigating through the razor reefs during low tide is suicide for any standard motorboat unless the vessel takes the narrow, winding northern tidal channel, which requires exactly 45 minutes of engine run-time at high throttle. Three fishermen and boat owners were docked at the mainland harbor during the night: Simon Cole, Gregory Vance, and Philip Ross. Each claimed their engine fuel consumption logs and harbor GPS transponders proved they never left their mainland berths.`,
    setting: 'Saint Jude’s Skerry Lighthouse, Cornish Coast',
    tags: ['Tidal Logic', 'Nautical Chart', 'Fuel Paradox', 'Reef Navigation'],
    suspects: [
      {
        id: 'susp-083',
        name: 'Simon Cole',
        age: 46,
        occupation: 'Lobster Fisherman',
        relationToCase: 'Disputed salvage rights on a wrecked Spanish cargo trawler with Thorne',
        alibi: 'Sleeping aboard his trawler *The Sea Hag* in the mainland harbor from 11:00 PM to 6:00 AM.',
        motive: 'Thorne had reported Cole’s illicit offshore lobster trap line to fishery inspectors.',
        knownFacts: [
          'Master pilot of the northern reef channels.',
          'His vessel engine hour meter showed zero run hours recorded overnight.',
          'Carried an electric trolling motor in his boat locker.'
        ],
        statement: 'My engine hour meter never ticked. Look at the dials—I never fired up the diesel all night.'
      },
      {
        id: 'susp-084',
        name: 'Gregory Vance',
        age: 38,
        occupation: 'Yacht Charter Skipper',
        relationToCase: 'Had borrowed £20,000 from Thorne with the lighthouse deed as collateral',
        alibi: 'Drinking at the harbor pub until 1:00 AM, then asleep in his cottage.',
        motive: 'Threatened with property seizure if loan was not repaid this Friday.',
        knownFacts: [
          'Owns a fiberglass motor launch with twin Yamaha outboards.',
          'Pub bartender confirms Vance stumbled home intoxicated at 1:15 AM.'
        ],
        statement: 'I could barely stand at 1:15 AM. How could I steer through treacherous rocks in pitch darkness?'
      },
      {
        id: 'susp-085',
        name: 'Philip Ross',
        age: 55,
        occupation: 'Harbor Mechanic & Ferry Operator',
        relationToCase: 'Maintained the lighthouse diesel generator engines',
        alibi: 'Rebuilding a carburetor in the harbor workshop until 3:00 AM.',
        motive: 'Thorne had accused him of substituting cheap motor oil in the generator.',
        knownFacts: [
          'Workshop lights were verified on by the harbor patrol sentry.'
        ],
        statement: 'I was covered in grease until 3:00 AM. The harbor patrol saw my lights burning all night.'
      }
    ],
    evidence: [
      {
        id: 'ev-074',
        code: 'EV-74',
        title: 'Bypassed Hour Meter & Lithium Trolling Motor',
        type: 'physical',
        category: 'Marine Engineering',
        collectedAt: 'Feb 16, 08:30 AM',
        locationFound: 'Simon Cole’s boat locker',
        summary: 'A whisper-quiet 48V electric marine pod motor and disconnected diesel hour meter.',
        detailedContent: 'Inspection of *The Sea Hag* revealed Cole had disconnected the ignition wire to the mechanical hour meter, meaning the diesel could run without logging time. Furthermore, he mounted a silent 48V electric lithium trolling motor that allowed him to glide through the low-tide reef channels in dead silence without sonar detection.'
      },
      {
        id: 'ev-075',
        code: 'EV-75',
        title: 'Red Granite Scrapings on Trawler Keel',
        type: 'physical',
        category: 'Geological Forensics',
        collectedAt: 'Feb 16, 09:15 AM',
        locationFound: 'Keel of *The Sea Hag*',
        summary: 'Unique feldspar granite paint transfer found exclusively at Saint Jude’s Skerry.',
        detailedContent: 'The red feldspar granite transfer on Cole’s keel matched the jagged rocks at the entrance to Saint Jude’s landing cove, proving his boat struck the reef while mooring at low tide between 1:30 AM and 2:00 AM.'
      }
    ],
    timeline: [
      {
        id: 'time-104',
        time: '01:00 AM',
        order: 1,
        title: 'Dead Low Tide',
        description: 'Tidal gauge drops to -0.4m; reefs completely break water around the skerry.',
        location: 'Cornish Coast'
      },
      {
        id: 'time-105',
        time: '01:35 AM',
        order: 2,
        title: 'The Skerry Crossing',
        description: 'Cole glides through the northern gap using silent electric propulsion.',
        location: 'Northern Reef Channel'
      },
      {
        id: 'time-106',
        time: '01:50 AM',
        order: 3,
        title: 'The Fatal Strike',
        description: 'Thorne confronted and struck down on the rocks by his own winch bar.',
        location: 'Lighthouse Landing'
      },
      {
        id: 'time-107',
        time: '06:30 AM',
        order: 4,
        title: 'Discovery',
        description: 'Relief keeper finds Thorne’s body on the granite rocks.',
        location: 'Saint Jude’s Skerry'
      }
    ],
    witnesses: [
      {
        id: 'wit-029',
        witnessName: 'Coastguard Radar Operator Sarah Jenkins',
        role: 'Radar Watch Officer',
        interviewTime: 'Feb 16, 09:00 AM',
        statement: 'At 1:20 AM, our coastal thermal sweep picked up a tiny, cold heat-signature moving slowly past the northern reef shoals. It didn’t look like a standard diesel engine plume.',
        contradictionHint: 'Corroborates the zero-emission electric motor propulsion.'
      }
    ],
    locations: [
      {
        id: 'loc-029',
        name: 'Saint Jude’s Skerry',
        description: 'Jagged granite island surrounded by exposed low-tide reefs.',
        accessible: true,
        notes: 'Only navigable via the northern tidal gap.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Engine Hour Fraud',
        text: 'A boat engine hour meter is an electrical circuit. It can be easily disconnected by pulling a single wire.',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'Silent Navigation at Low Tide',
        text: 'The coastal radar saw a vessel with zero heat plume. Who possessed a silent electric lithium trolling motor?',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Red Granite Scrapes',
        text: 'Simon Cole bypassed his diesel meter, navigated using his electric motor, and scraped his keel against the skerry’s unique red granite rocks.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-083',
      methodId: 'method-109',
      motiveId: 'motive-109',
      criticalEvidenceIds: ['ev-074', 'ev-075'],
      methodOptions: [
        { id: 'method-109', text: 'Disconnected his vessel’s engine hour meter, traversed the low-tide reef gap using a silent 48V electric trolling motor, struck Thorne with a winch bar, and returned to harbor.' },
        { id: 'method-110', text: 'Swam three miles in a drysuit through freezing low-tide currents.' },
        { id: 'method-111', text: 'Flew a motorized hang glider onto the lighthouse platform.' },
        { id: 'method-112', text: 'Bribed Philip Ross to pilot the ferry out.' }
      ],
      motiveOptions: [
        { id: 'motive-109', text: 'To silence Thorne before he could testify regarding Cole’s illegal offshore lobster operations and salvage thefts.' },
        { id: 'motive-110', text: 'To erase a £20,000 promissory debt note.' },
        { id: 'motive-111', text: 'To steal the lighthouse brass clockwork mechanism.' },
        { id: 'motive-112', text: 'A drunken pub argument.' }
      ],
      fullExplanation: {
        whatHappened: 'Fisherman Simon Cole navigated secretly to Saint Jude’s Skerry at dead-low tide using an electric motor to murder the lighthouse keeper.',
        howItWasDone: 'Cole unplugged his trawler’s mechanical hour-meter circuit to fake an untouched engine log. To navigate the low-tide reefs without noise or heat detection, he used a custom 48V electric trolling motor. He docked at the skerry landing cove, struck Thorne with a heavy winch bar during an altercation over illegal salvage reporting, and returned to his berth before morning.',
        whyItHappened: 'Thorne had submitted photographic evidence to maritime authorities showing Cole was looting protected historic shipwrecks, which carried a 10-year prison sentence.',
        decisiveEvidenceWalkthrough: 'EV-74 proved Cole tampered with his engine hour meter and possessed the electric trolling motor. EV-75 proved his trawler scraped against the skerry’s unique red granite rocks.',
        whyOthersAreInnocent: 'Gregory Vance was intoxicated and verified at home by neighbors, while Philip Ross was working under continuous observation in the harbor workshop.'
      }
    }
  },
  {
    id: 'case-029',
    caseNumber: 'CASE-029',
    title: 'The Liar’s Dinner Party',
    category: 'logic',
    categoryDisplay: 'Logic & Puzzle',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '25-35 MIN',
    shortDescription: 'At a private dinner party of four cryptographers, host Lord Harrington is poisoned. Exactly two of the four guests make false statements.',
    fullStory: `At Harrington Manor, eccentric mathematician Lord Harrington hosted an intimate dinner for four fellow cryptographers. At 8:30 PM, Lord Harrington collapsed from cyanide poisoning after sipping his mushroom velouté soup. All four guests were seated around the circular mahogany table: Beatrice, Charles, Douglas, and Evelyn.

During police interrogations, the chief inspector noted that each suspect gave two formal statements regarding who touched the soup tureen and who entered the kitchen pantry. Mathematical cross-examination proves that exactly two suspects told pure truth, while exactly two suspects told pure lies (every statement they made was false). The player must use classical logical deduction to deduce who spiked the soup.`,
    setting: 'Harrington Manor Dining Hall, Berkshire',
    tags: ['Logic Puzzle', 'Truths & Lies', 'Cyanide Soup', 'Deduction'],
    suspects: [
      {
        id: 'susp-086',
        name: 'Beatrice Vance',
        age: 34,
        occupation: 'Mathematical Cryptographer',
        relationToCase: 'Colleague whose paper Harrington had disputed',
        alibi: 'Seated at the table opposite Charles.',
        motive: 'Dispute over cryptographic theorem authorship.',
        knownFacts: [
          'Statement 1: "Charles entered the kitchen pantry before dinner."',
          'Statement 2: "Evelyn did not touch Lord Harrington’s soup bowl."'
        ],
        statement: 'Charles went into the pantry before dinner, and Evelyn never touched the soup bowl.'
      },
      {
        id: 'susp-087',
        name: 'Charles Sterling',
        age: 42,
        occupation: 'Algorithm Specialist',
        relationToCase: 'Harrington’s principal co-investor',
        alibi: 'Seated next to Douglas.',
        motive: 'Harrington uncovered Charles’s algorithmic embezzlement.',
        knownFacts: [
          'Statement 1: "Douglas is a liar."',
          'Statement 2: "I never entered the kitchen pantry."'
        ],
        statement: 'Douglas is a liar. And I never entered the kitchen pantry at any point tonight.'
      },
      {
        id: 'susp-088',
        name: 'Douglas Cole',
        age: 39,
        occupation: 'Cipher Historian',
        relationToCase: 'Archivist of Harrington’s mathematical papers',
        alibi: 'Seated beside Charles.',
        motive: 'Seeking the rights to Harrington’s estate papers.',
        knownFacts: [
          'Statement 1: "Charles is telling the truth."',
          'Statement 2: "Beatrice was the one who added cyanide to the soup."'
        ],
        statement: 'Charles is telling the truth. Beatrice was the one who added cyanide to the soup.'
      },
      {
        id: 'susp-089',
        name: 'Evelyn Ross',
        age: 31,
        occupation: 'Logic Professor',
        relationToCase: 'Harrington’s prize protégée',
        alibi: 'Seated next to Beatrice.',
        motive: 'Harrington was planning to name her sole legatee.',
        knownFacts: [
          'Statement 1: "Charles entered the kitchen pantry before dinner."',
          'Statement 2: "Douglas is telling lies."'
        ],
        statement: 'Charles definitely entered the pantry before dinner. Douglas is telling lies.'
      }
    ],
    evidence: [
      {
        id: 'ev-076',
        code: 'EV-76',
        title: 'Cyanide Residue on Kitchen Pantry Salt Cellar',
        type: 'physical',
        category: 'Forensic Chemistry',
        collectedAt: 'Feb 20, 09:30 PM',
        locationFound: 'Pantry spice cabinet',
        summary: 'Potassium cyanide crystals mixed with sea salt.',
        detailedContent: 'Forensic swabbing confirms someone opened the pantry cabinet where the poison was stored and added it to the salt cellar brought to Lord Harrington’s soup bowl.'
      },
      {
        id: 'ev-077',
        code: 'EV-77',
        title: 'Charles’s Cufflinks Coated in Pantry Salt',
        type: 'physical',
        category: 'Physical Evidence',
        collectedAt: 'Feb 20, 10:15 PM',
        locationFound: 'Charles Sterling’s left cufflink',
        summary: 'Traces of salted cyanide powder trapped in his silver cufflink groove.',
        detailedContent: 'Spectrometry confirmed traces of the identical poisoned salt mixture on Charles Sterling’s shirt cuffs.'
      }
    ],
    timeline: [
      {
        id: 'time-108',
        time: '07:45 PM',
        order: 1,
        title: 'Pantry Visit',
        description: 'Perpetrator slips into pantry and spikes the personal soup seasoning.',
        location: 'Kitchen Pantry'
      },
      {
        id: 'time-109',
        time: '08:15 PM',
        order: 2,
        title: 'Soup Served',
        description: 'Soup served to all five diners at the mahogany table.',
        location: 'Dining Hall'
      },
      {
        id: 'time-110',
        time: '08:30 PM',
        order: 3,
        title: 'Harrington Collapses',
        description: 'Lord Harrington consumes the soup and collapses into convulsions.',
        location: 'Dining Hall'
      }
    ],
    witnesses: [
      {
        id: 'wit-030',
        witnessName: 'Lord Harrington’s Chef Pierre',
        role: 'Private Chef',
        interviewTime: 'Feb 20, 09:00 PM',
        statement: 'I saw a man’s dinner jacket passing the pantry door around 7:45 PM while I was stirring the velouté.',
        contradictionHint: 'Confirms a male guest entered the pantry.'
      }
    ],
    locations: [
      {
        id: 'loc-030',
        name: 'Harrington Dining Room',
        description: 'Circular table where four guests and the host were seated.',
        accessible: true,
        notes: 'Pantry is located down the adjacent service corridor.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Deduction Rule: Truths & Lies',
        text: 'Exactly two suspects tell 100% truth; exactly two suspects tell 100% lies. Look at Douglas: "Charles is telling the truth." If Charles is a liar, what does that make Douglas?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'Who is the Pair of Liars?',
        text: 'If Charles is telling the truth, then Douglas is a liar. But Douglas says Charles is telling the truth—a contradiction! Thus, both Charles and Douglas are the two liars.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Truth from Beatrice and Evelyn',
        text: 'Since Charles and Douglas are the liars, Beatrice and Evelyn tell the truth. They both state: "Charles entered the kitchen pantry." Charles lied when he denied it, and the poisoned salt was found on his cufflinks.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-087',
      methodId: 'method-113',
      motiveId: 'motive-113',
      criticalEvidenceIds: ['ev-076', 'ev-077'],
      methodOptions: [
        { id: 'method-113', text: 'Entered the kitchen pantry before dinner to lace the private soup seasoning with cyanide, then lied during interrogation while conspiring with Douglas.' },
        { id: 'method-114', text: 'Dropped cyanide directly into Lord Harrington’s glass across the table.' },
        { id: 'method-115', text: 'Coated the rim of Harrington’s soup spoon with neurotoxin.' },
        { id: 'method-116', text: 'Poisoned the wine bottle before dinner.' }
      ],
      motiveOptions: [
        { id: 'motive-113', text: 'To silence Lord Harrington before he reported Charles’s algorithmic embezzlement to the financial fraud squad.' },
        { id: 'motive-114', text: 'To steal Harrington’s cryptographic theorem papers.' },
        { id: 'motive-115', text: 'To frame Beatrice Vance for murder.' },
        { id: 'motive-116', text: 'An argument over mathematics faculty positions.' }
      ],
      fullExplanation: {
        whatHappened: 'Algorithm specialist Charles Sterling poisoned Lord Harrington’s soup seasoning after entering the pantry, as proven by pure logical deduction.',
        howItWasDone: 'Logical deduction: Notice that Douglas claims Charles is telling the truth. If Charles were telling the truth, Douglas would be telling the truth; but Charles claims Douglas is a liar—an impossible self-contradiction. Therefore, Charles must be a liar, which makes Douglas a liar as well. Since exactly two are liars, Beatrice and Evelyn must be the two truth-tellers. Beatrice and Evelyn both confirm that Charles entered the kitchen pantry at 7:45 PM. Charles lied when he claimed he never entered the pantry.',
        whyItHappened: 'Harrington had discovered Charles was embezzling millions from their joint algorithmic hedge fund and planned to expose him the following morning.',
        decisiveEvidenceWalkthrough: 'EV-76 located the cyanide in the pantry. EV-77 found matching cyanide salt powder on Charles’s cufflinks, confirming the truth of Beatrice’s and Evelyn’s statements.',
        whyOthersAreInnocent: 'Beatrice and Evelyn are proven truth-tellers (their statements are fully consistent), and Douglas’s false claim that Beatrice added the poison was a fabricated lie to protect Charles.'
      }
    }
  },
  {
    id: 'case-030',
    caseNumber: 'CASE-030',
    title: 'The Cipher of the Five Bells',
    category: 'logic',
    categoryDisplay: 'Logic & Puzzle',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '30-40 MIN',
    shortDescription: 'A murdered private banker leaves a final blood-written musical sheet with five discordant notes that decipher the identity of his killer.',
    fullStory: `At 11:45 PM inside his Belgravia townhouse study, private banker and classical organist Alistair Vance was discovered stabbed in the back with an antique silver paper knife. Slumped over his grand piano, Vance had used his final moments to write five musical notes in blood across a blank sheet of manuscript paper:

E - B - G - A - D

Beside the sheet music lay a brass key numbered 504 belonging to the private vaults at Saint Paul’s Depository. Four business associates and choir members were invited to his private recital that evening: Organist Julian Ross, Cryptographer Dr. Alan Turing-Cole, Chorister Simon Finch, and Estate Attorney Marcus Vance. Police determined the musical notes encode an alphanumeric substitution cipher concealing the killer’s name.`,
    setting: 'Belgravia Townhouse Music Study, London',
    tags: ['Musical Cipher', 'Musical Cryptography', 'Blood Note', 'Stabbing'],
    suspects: [
      {
        id: 'susp-090',
        name: 'Julian Ross',
        age: 41,
        occupation: 'Cathedral Organist',
        relationToCase: 'Harbors resentment over Vance buying the 1780 pipe organ',
        alibi: 'In the piano lounge tuning harpsichord strings.',
        motive: 'Vance possessed promissory notes that would foreclose Julian’s home.',
        knownFacts: [
          'Master of musical cryptograms and BACH motif ciphers.',
          'Carried an antique silver collection catalog in his bag.'
        ],
        statement: 'Alistair loved musical riddles, but I was tuning the harpsichord in the rear parlor.'
      },
      {
        id: 'susp-091',
        name: 'Simon Finch',
        age: 36,
        occupation: 'Chorister & Financial Broker',
        relationToCase: 'Managed offshore investments for Vance’s bank',
        alibi: 'Smoking on the front portico between 11:15 PM and 11:45 PM.',
        motive: 'Stole £3 million from client escrow funds; Vance discovered the shortfall.',
        knownFacts: [
          'Initials: S. F.',
          'Wore silver cufflinks matching the silver paper knife hilt.',
          'His name letters correspond to classical solfège interval mappings.'
        ],
        statement: 'I stepped outside to take a phone call. Alistair was playing Chopin when I walked out.'
      },
      {
        id: 'susp-092',
        name: 'Marcus Vance',
        age: 48,
        occupation: 'Estate Attorney & Cousin',
        relationToCase: 'Executor of Alistair’s multi-million pound estate',
        alibi: 'Reviewing property deeds in the downstairs dining room.',
        motive: 'Stood to earn massive commission fees from estate liquidation.',
        knownFacts: [
          'No musical training; cannot read sheet music notation.'
        ],
        statement: 'I don’t know a B-flat from a treble clef. Alistair’s musical games were beyond me.'
      }
    ],
    evidence: [
      {
        id: 'ev-078',
        code: 'EV-78',
        title: 'The Blood-Written Five-Note Manuscript',
        type: 'document',
        category: 'Musical Cryptography',
        collectedAt: 'Feb 26, 12:15 AM',
        locationFound: 'On piano music stand',
        summary: 'Five notes written in blood: E - B - G - A - D on a standard treble clef.',
        detailedContent: 'Under the classical Guido d’Arezzo solfège substitution system and standard 7-pitch cyclic rotation used by organists, the letter values convert directly to scale degrees: E (3), B (7), G (5), A (6), D (2). When indexed against the names of the dinner guests, 3-7-5-6-2 decodes to S-I-M-O-N.'
      },
      {
        id: 'ev-079',
        code: 'EV-79',
        title: 'Silver Paper Knife with Finch’s Blood Prints',
        type: 'physical',
        category: 'Weapon Forensics',
        collectedAt: 'Feb 26, 01:00 AM',
        locationFound: 'Inside umbrella stand in front hallway',
        summary: 'Antique silver paper knife used as murder weapon.',
        detailedContent: 'Latent fingerprints on the blade hilt matched Simon Finch, along with microscopic traces of Alistair’s blood and silver polish residue matching Finch’s evening coat cuffs.'
      },
      {
        id: 'ev-080',
        code: 'EV-80',
        title: 'Vault 504 Audit Ledger',
        type: 'document',
        category: 'Financial Motive',
        collectedAt: 'Feb 26, 02:30 AM',
        locationFound: 'Saint Paul’s Depository',
        summary: 'Documents exposing Simon Finch’s £3 million escrow fraud.',
        detailedContent: 'Key 504 unlocked Vance’s audit vault, which contained sworn depositions ready to be submitted to Scotland Yard the next morning detailing Finch’s systemic fraud.'
      }
    ],
    timeline: [
      {
        id: 'time-111',
        time: '11:15 PM',
        order: 1,
        title: 'Confrontation',
        description: 'Vance informs Simon Finch that Key 504 and the audit files go to police tomorrow.',
        location: 'Music Study'
      },
      {
        id: 'time-112',
        time: '11:28 PM',
        order: 2,
        title: 'The Stabbing',
        description: 'Finch grabs the silver paper knife and strikes Vance from behind.',
        location: 'Music Study'
      },
      {
        id: 'time-113',
        time: '11:32 PM',
        order: 3,
        title: 'Dying Cipher Written',
        description: 'With his dying strength, Vance writes E - B - G - A - D to identify his killer.',
        location: 'Grand Piano'
      },
      {
        id: 'time-114',
        time: '11:45 PM',
        order: 4,
        title: 'Body Discovered',
        description: 'Guests hear silence from the piano and discover Vance collapsed.',
        location: 'Music Study'
      }
    ],
    witnesses: [
      {
        id: 'wit-031',
        witnessName: 'Julian Ross',
        role: 'Cathedral Organist',
        interviewTime: 'Feb 26, 12:45 AM',
        statement: 'Alistair taught musical ciphers to our choir. He always used the standard scale degree transposition to spell names for his musical anagrams.',
        contradictionHint: 'Provides the exact decryption key for the blood notes.'
      }
    ],
    locations: [
      {
        id: 'loc-031',
        name: 'The Music Study',
        description: 'Private music library housing a Steinway grand piano and pipe organ consoles.',
        accessible: true,
        notes: 'Door opens directly to the front portico corridor.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Musical Note Substitution',
        text: 'The five notes are E, B, G, A, D. Think about musical scale degrees in the key of C major (C=1, D=2, E=3, F=4, G=5, A=6, B=7).',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'Numbers to Letters',
        text: 'Scale degrees: E=3, B=7, G=5, A=6, D=2. In musical anagram substitution: 3, 7, 5, 6, 2 corresponds to the 5 letters of one of the guests.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Solfège Decryption',
        text: 'The 5 notes spell SIMON. Simon Finch stabbed Vance to prevent him from presenting the Vault 504 embezzlement audit files to the police.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-091',
      methodId: 'method-117',
      motiveId: 'motive-117',
      criticalEvidenceIds: ['ev-078', 'ev-079', 'ev-080'],
      methodOptions: [
        { id: 'method-117', text: 'Stabbed Vance with an antique silver paper knife from behind after being confronted over Vault 504 embezzlement, discarding the knife in the umbrella stand.' },
        { id: 'method-118', text: 'Poisoned the piano keys with contact strychnine.' },
        { id: 'method-119', text: 'Strangled Vance with an organ pedal cable.' },
        { id: 'method-120', text: 'Hired an outside burglar to stage a robbery.' }
      ],
      motiveOptions: [
        { id: 'motive-117', text: 'To silence Vance before he could deliver Vault 504 audit evidence exposing Finch’s £3 million escrow fraud to Scotland Yard.' },
        { id: 'motive-118', text: 'To steal the 1780 antique pipe organ.' },
        { id: 'motive-119', text: 'To claim Vance’s estate as designated legatee.' },
        { id: 'motive-120', text: 'A dispute over choir musical selections.' }
      ],
      fullExplanation: {
        whatHappened: 'Chorister and broker Simon Finch stabbed banker Alistair Vance to suppress fraud charges, unaware Vance used musical scale degrees to spell SIMON with his dying breath.',
        howItWasDone: 'Vance confronted Finch inside the music study, warning him that Key 504 in the morning would deliver proof of Finch’s £3M escrow embezzlement to Scotland Yard. Finch grabbed an antique silver paper knife from the desk and stabbed Vance in the back. As Finch fled to the front portico, the dying Vance dipped his finger in blood and wrote the scale degrees E (3), B (7), G (5), A (6), D (2) on sheet music, which translates directly to S-I-M-O-N.',
        whyItHappened: 'Finch had systematically looted client bank escrow accounts and faced immediate arrest and disgrace.',
        decisiveEvidenceWalkthrough: 'EV-78 proved the five-note cryptogram spelled SIMON. EV-79 matched Finch’s fingerprints to the murder weapon in the umbrella stand. EV-80 revealed the Vault 504 audit files proving Finch’s motive.',
        whyOthersAreInnocent: 'Julian Ross was tuning the harpsichord in the rear parlor, and Marcus Vance cannot read sheet music and was downstairs reviewing property deeds.'
      }
    }
  }
];
