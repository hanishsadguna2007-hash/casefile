import { Mystery } from '@/types/mystery';

export const mythologyMysteries: Mystery[] = [
  {
    id: 'case-013',
    caseNumber: 'CASE-013',
    title: 'The Missing Temple Idol of Devagiri',
    category: 'mythology',
    categoryDisplay: 'Indian Mythology Inspired',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-35 MIN',
    shortDescription: 'An 11th-century Panchaloha bronze idol of Nataraja vanishes overnight from the inner sanctum of an ancient cliffside temple.',
    fullStory: `At dawn on the auspicious Maha Shivaratri morning at the cliffside Devagiri Temple, the head priest unlocked the heavy brass-clad doors of the Garbhagriha (inner sanctum) to perform the morning abhishekam. The sacred granite pedestal was empty. The 1,000-year-old Panchaloha bronze idol of Nataraja, endowed with nine celestial gemstones, had vanished.

The sanctum is carved directly into solid basalt rock with no windows, skylights, or secret tunnels. The three-inch teak doors were padlocked from the exterior with the ceremonial temple seal intact, and four temple guards stood watch across the outer stone Mandapa all night. Surrounding the pedestal were fresh crushed bilva leaves, a broken clay oil lamp, and a faint lingering aroma of camphor and camphor-oil solvents. Three individuals had access to the inner temple courtyard: Chief Trust Administrator Raghavan Sharma, Visiting Archaeo-metallurgist Dr. Ananya Sen, and Temple Goldsmith Somu Acharya.`,
    setting: 'Devagiri Hill Temple, Western Ghats',
    disclaimer: 'Fiction inspired by Indian mythology, folklore, history, and legends.',
    tags: ['Temple Mystery', 'Bronze Idol', 'Inner Sanctum', 'Camphor Solvent'],
    featured: true,
    suspects: [
      {
        id: 'susp-038',
        name: 'Raghavan Sharma',
        age: 54,
        occupation: 'Chief Temple Trust Administrator',
        relationToCase: 'Held the keys to the outer brass doors and ceremonial seals',
        alibi: 'Overseeing the festival pilgrim arrangements in the temple administrative office down the hill.',
        motive: 'Secretly facing millions in personal debt from failed textile investments.',
        knownFacts: [
          'Signed off on an overseas traveling exhibition request that was rejected last month.',
          'Carried an empty brass urn down the temple steps at 4:30 AM.'
        ],
        statement: 'I was in the office managing queue barricades for forty thousand pilgrims. I only touched the temple keys at 5:00 AM when handing them to the head priest.'
      },
      {
        id: 'susp-039',
        name: 'Dr. Ananya Sen',
        age: 37,
        occupation: 'Archaeo-Metallurgist',
        relationToCase: 'Conducting non-destructive XRF laser scans on the ancient Panchaloha alloys',
        alibi: 'Sleeping in the temple guest cottage at the foothill from midnight to 5:00 AM.',
        motive: 'Believed the idol was deteriorating and needed urgent transfer to a state conservation laboratory.',
        knownFacts: [
          'Carried high-resolution 3D photogrammetry scanners and chemical testing kits.',
          'Noticed unusual zinc-lead ratios during her scan yesterday afternoon.'
        ],
        statement: 'My scan logs were backed up to my laptop at 6:00 PM yesterday. The metallurgy was breathtaking, but I was fast asleep down at the guesthouse.'
      },
      {
        id: 'susp-040',
        name: 'Somu Acharya',
        age: 48,
        occupation: 'Master Temple Goldsmith & Sculptor',
        relationToCase: 'Family has maintained the temple gold ornaments and vahanas for three generations',
        alibi: 'Polishing ceremonial silver chariots in the outer Natana Mandapa until 2:00 AM.',
        motive: 'Bitter over trust decisions to outsource gold gilding to an industrial company.',
        knownFacts: [
          'Possesses ancient casting molds and lost-wax bronze casting furnaces in his adjoining workshop.',
          'His fingers bore distinct traces of jeweler’s rouge and nitric acid burns.'
        ],
        statement: 'I polished the Utsava murti until my arms ached. I revere Lord Nataraja; I would rather lose my hands than desecrate the sanctum.'
      }
    ],
    evidence: [
      {
        id: 'ev-037',
        code: 'EV-37',
        title: 'Pranala Water Drainage Sump Analysis',
        type: 'physical',
        category: 'Temple Architecture Forensics',
        collectedAt: 'Feb 18, 07:30 AM',
        locationFound: 'Northern exterior wall, the sacred Pranala chute',
        summary: 'Traces of heavy grease and hemp rope fibers inside the holy water outlet.',
        detailedContent: 'The Pranala (the stone water spout that channels holy bathing milk and water out of the sealed sanctum) has an opening 14 inches in diameter through the four-foot stone wall. Chemical swabs revealed tallow grease, hemp rope abrasions, and green copper-carbonate patina rubs along the inner channel lip.'
      },
      {
        id: 'ev-038',
        code: 'EV-38',
        title: 'Ceremonial Ganga Jal Brass Urn',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Feb 18, 09:00 AM',
        locationFound: 'Raghavan Sharma’s private vehicle trunk',
        summary: 'Heavy covered brass temple water urn packed with straw and velvet cushions.',
        detailedContent: 'Inside the massive 60-liter holy water urn, wrapped in oiled saffron cloth, was the authentic 11th-century Panchaloha Nataraja idol, removed from its lotus pedestal via its detachment socket pin.'
      },
      {
        id: 'ev-039',
        code: 'EV-39',
        title: 'Detachable Base Pin Mechanism',
        type: 'document',
        category: 'Ancient Archival Blueprint',
        collectedAt: 'Feb 18, 08:15 AM',
        locationFound: 'Temple Trust Records Room',
        summary: '1924 restoration manuscript detailing a secret brass locking wedge.',
        detailedContent: 'The document shows that during the 1924 temple renovation, a secret counter-weighted brass locking peg was added beneath the sanctum pedestal, which could only be dislodged by inserting a slender iron rod through the Pranala drainage pipe from the outside courtyard.'
      }
    ],
    timeline: [
      {
        id: 'time-048',
        time: '09:00 PM',
        order: 1,
        title: 'Sanctum Sealed',
        description: 'Night puja concludes; brass doors padlocked with wax trust seal.',
        location: 'Garbhagriha'
      },
      {
        id: 'time-049',
        time: '02:30 AM',
        order: 2,
        title: 'Guards Chanting in Mandapa',
        description: 'Temple guards gather around the sanctum front courtyard singing devotional bhajans.',
        location: 'Outer Mandapa'
      },
      {
        id: 'time-050',
        time: '03:45 AM',
        order: 3,
        title: 'Activity at Northern Chute',
        description: 'Figure spotted behind the northern outer temple wall near the sacred drain spout.',
        location: 'Northern Perimeter'
      },
      {
        id: 'time-051',
        time: '04:30 AM',
        order: 4,
        title: 'Urn Carried to Car',
        description: 'Raghavan Sharma carries a large covered "holy water" vessel to his SUV.',
        location: 'Temple Steps'
      },
      {
        id: 'time-052',
        time: '05:30 AM',
        order: 5,
        title: 'Sanctum Unlocked',
        description: 'Head priest discovers the idol missing; seal was outwardly intact.',
        location: 'Garbhagriha'
      }
    ],
    witnesses: [
      {
        id: 'wit-014',
        witnessName: 'Mani the Flower Vendor',
        role: 'Garland Seller',
        interviewTime: 'Feb 18, 08:30 AM',
        statement: 'At 3:45 AM, while bringing marigold baskets behind the northern stone wall, I saw Administrator Sharma kneeling by the holy water drain pipe with a long metal pole and heavy rope.',
        contradictionHint: 'Contradicts Sharma’s claim of staying inside the administration office.'
      }
    ],
    locations: [
      {
        id: 'loc-014',
        name: 'The Garbhagriha (Inner Sanctum)',
        description: 'Ancient basalt chamber holding the sacred lotus pedestal.',
        accessible: true,
        notes: 'Only entrance is the heavy padlocked brass double doors; the only outlet is the stone Pranala drain.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Examine the Temple Water Drainage',
        text: 'The doors and wax seals were never touched. The only physical opening into the sanctum is the sacred Pranala water spout.',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Weight in the Urn',
        text: 'Why would an administrator carry a heavy holy water vessel down the mountain at 4:30 AM before the morning puja even commenced?',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The 1924 Blueprint & Extraction',
        text: 'Sharma used a rod through the drain to release the idol’s secret pedestal pin, hauled the greased bronze out through the 14-inch spout using hemp rope, and hid it in the Ganga Jal urn.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-038',
      methodId: 'method-049',
      motiveId: 'motive-049',
      criticalEvidenceIds: ['ev-037', 'ev-038', 'ev-039'],
      methodOptions: [
        { id: 'method-049', text: 'Used a metal rod through the Pranala drain pipe to trip the pedestal pin, hauled the greased idol out through the stone spout with hemp ropes, and concealed it inside a brass holy water urn.' },
        { id: 'method-050', text: 'Forged duplicate temple keys and swapped the idol with a clay replica during the midnight bhajan.' },
        { id: 'method-051', text: 'Used a motorized winch from the hill cliff overhang to lift the idol through the temple gopuram roof.' },
        { id: 'method-052', text: 'Bribed the four night guards to carry the idol out through the main gates.' }
      ],
      motiveOptions: [
        { id: 'motive-049', text: 'To smuggle the invaluable Panchaloha bronze to an international private collector to clear bankrupting debts.' },
        { id: 'motive-050', text: 'To send the idol to an overseas laboratory for preservation.' },
        { id: 'motive-051', text: 'To avenge a family rivalry with the temple goldsmith clan.' },
        { id: 'motive-052', text: 'Religious fanaticism regarding planetary alignments.' }
      ],
      fullExplanation: {
        whatHappened: 'Trust Administrator Raghavan Sharma stole the 1,000-year-old Nataraja bronze idol by extracting it through the sanctum’s holy water drainage spout.',
        howItWasDone: 'Sharma read the 1924 restoration documents detailing how the idol could be unlocked from below. Knowing guards watched the front doors, Sharma went to the secluded northern exterior wall at 3:45 AM. He fed a slender iron rod through the Pranala water pipe to release the brass retaining wedge. After tying greased ropes around the bronze, he hauled the idol through the 14-inch chute, packed it inside a giant Ganga Jal brass urn, and loaded it into his SUV.',
        whyItHappened: 'Sharma was facing criminal charges and financial ruin from illicit stock market borrowings and had arranged a private $4 million sale with an international antiquities trafficker.',
        decisiveEvidenceWalkthrough: 'EV-37 identified the grease and rope burn marks inside the Pranala chute. EV-38 recovered the stolen bronze idol wrapped in saffron cloths inside Sharma’s vehicle. EV-39 revealed the secret mechanical unlocking pin.',
        whyOthersAreInnocent: 'Dr. Sen was asleep at the foot of the hill (corroborated by staff), and Somu Acharya was actively hammering silver chariots in front of dozens of devotees in the open mandapa.'
      }
    }
  },
  {
    id: 'case-014',
    caseNumber: 'CASE-014',
    title: 'The Curse of the Forgotten King',
    category: 'mythology',
    categoryDisplay: 'Indian Mythology Inspired',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-30 MIN',
    shortDescription: 'An archaeologist is found poisoned and paralyzed inside an underground dynastic crypt sealed since the 7th century.',
    fullStory: `During the archaeological excavation of the ruined 7th-century Pallava fortress near Kanchipuram, Lead Archaeologist Dr. Vikramaditya Rao unsealed Tomb Chamber 3—long whispered in local folklore to carry the "Curse of the Tiger King." At 10:00 PM, Rao entered the subterranean stone chamber alone to decipher an unbroken Sanskrit wall inscription.

Two hours later, his junior researchers heard gasping from within. They pried back the stone slab door and found Rao collapsed, his body rigid in respiratory seizure with blackened fingertips, clutching a freshly severed ruby pendant from the stone sarcophagus. Rumors of a revived ancient curse spread among the local excavation crew. However, forensic analysis revealed Rao’s blood was flooded with a potent neurotoxin derived from the Indian red scorpion (Hottentotta tamulus). Three colleagues were present at the camp: Epigraphist Priya Nambiar, Site Conservator Devraj Patil, and Camp Logistics Manager Karan Malik.`,
    setting: 'Pallava Dynastic Ruins, Kanchipuram Excavation Site',
    disclaimer: 'Fiction inspired by Indian mythology, folklore, history, and legends.',
    tags: ['Ancient Curse', 'Temple Tomb', 'Bio-Toxin', 'Archaeology'],
    suspects: [
      {
        id: 'susp-041',
        name: 'Devraj Patil',
        age: 45,
        occupation: 'Site Chemical Conservator',
        relationToCase: 'In charge of cleaning solvents and preservation lacquers',
        alibi: 'Cataloging pottery shards in the laboratory tent from 9:30 PM to midnight.',
        motive: 'Rao had caught him stealing and fencing terracotta artifacts to an illicit dealer.',
        knownFacts: [
          'Expert on ancient venom preservation and biological chemical extractions.',
          'Had small puncture marks on his canvas gloves.',
          'Applied protective resin to the sarcophagus handle earlier that morning.'
        ],
        statement: 'The inscriptions warned of eternal death to whoever touched the king’s ruby. I warned Dr. Rao not to enter alone without gas masks.'
      },
      {
        id: 'susp-042',
        name: 'Priya Nambiar',
        age: 29,
        occupation: 'Epigraphist & Linguist',
        relationToCase: 'Translated the Sanskrit curses inscribed on the tomb lintel',
        alibi: 'Transcribing rubbings in her personal tent.',
        motive: 'Dispute over sole authorship on the landmark Pallava monograph.',
        knownFacts: [
          'No chemical knowledge or handling of venoms.'
        ],
        statement: 'The text spoke of the "Sting of the Shadow Serpent," but it was clearly metaphorical allegory. Someone used science to fake a curse.'
      },
      {
        id: 'susp-043',
        name: 'Karan Malik',
        age: 34,
        occupation: 'Excavation Logistics Manager',
        relationToCase: 'Managed camp generators, lights, and site security',
        alibi: 'Refueling diesel generators near the camp perimeter.',
        motive: 'Owed gambling debts to local bookmakers.',
        knownFacts: [
          'Was observed continuously by the generator mechanics.'
        ],
        statement: 'I kept the floodlights humming. If someone went into the tomb after Dr. Rao, they didn’t use my ladder.'
      }
    ],
    evidence: [
      {
        id: 'ev-040',
        code: 'EV-40',
        title: 'Sarcophagus Ruby Clasp Inspection',
        type: 'physical',
        category: 'Bio-Toxin Forensic Swab',
        collectedAt: 'Mar 03, 01:15 AM',
        locationFound: 'Inner Tomb 3 Sarcophagus',
        summary: 'Spring-loaded ancient micro-needle re-armed with fresh red scorpion venom.',
        detailedContent: 'The antique burial pendant clasp contained an ancient decorative spring trap. However, forensic lab tests confirmed that the needle had been freshly re-coated with concentrated, synthetic-stabilized Indian red scorpion venom mixed with DMSO within the past 12 hours.'
      },
      {
        id: 'ev-041',
        code: 'EV-41',
        title: 'Micro-Vial in Conservator’s Kit',
        type: 'physical',
        category: 'Chemical Evidence',
        collectedAt: 'Mar 03, 02:30 AM',
        locationFound: 'Devraj Patil’s chemical field kit',
        summary: 'Amber glass vial containing purified scorpion venom and DMSO solvent.',
        detailedContent: 'Swabs matched the molecular signature of the venom that incapacitated Dr. Rao. The vial was concealed inside an empty bottle labeled "Acetone Preservation Solvent."'
      }
    ],
    timeline: [
      {
        id: 'time-053',
        time: '10:00 AM',
        order: 1,
        title: 'Pendant Cleaned',
        description: 'Devraj Patil conducts "conservation cleaning" on the sarcophagus jewelry.',
        location: 'Lab Tent'
      },
      {
        id: 'time-054',
        time: '10:00 PM',
        order: 2,
        title: 'Rao Enters Chamber',
        description: 'Dr. Rao enters Tomb 3 alone with a notebook and magnifying lamp.',
        location: 'Tomb 3'
      },
      {
        id: 'time-055',
        time: '11:45 PM',
        order: 3,
        title: 'Rao Unclasps Pendant',
        description: 'Rao attempts to lift the ruby necklace; the poisoned spring needle pierces his thumb.',
        location: 'Tomb 3 Sarcophagus'
      },
      {
        id: 'time-056',
        time: '12:05 AM',
        order: 4,
        title: 'Rescue & Discovery',
        description: 'Students find Rao paralyzed on the crypt floor.',
        location: 'Tomb 3'
      }
    ],
    witnesses: [
      {
        id: 'wit-015',
        witnessName: 'Arun Varma',
        role: 'Graduate Student',
        interviewTime: 'Mar 03, 01:30 AM',
        statement: 'Earlier this afternoon, Dr. Rao told Devraj Patil that he had scheduled an external forensic audit of the camp artifact registry for Monday. Devraj went pale and left the tent.',
        contradictionHint: 'Supplies the immediate motive for silencing Dr. Rao.'
      }
    ],
    locations: [
      {
        id: 'loc-015',
        name: 'Tomb Chamber 3',
        description: 'Underground granite vault adorned with Pallava royal glyphs.',
        accessible: true,
        notes: 'Air is stagnant; only accessed by vertical stone shaft.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Debunking the Supernatural',
        text: 'Ancient venoms degrade over centuries. The scorpion venom on the needle was freshly harvested and chemically stabilized.',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'Who Handled the Artifacts?',
        text: 'Who had private custody of the ruby pendant during morning cleaning and possesses expertise in organic solvents?',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Hidden Chemical in the Solvent Box',
        text: 'Devraj Patil re-loaded the ancient spring clasp with fresh venom to stage an ancient "curse" before Rao could report his artifact theft.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-041',
      methodId: 'method-053',
      motiveId: 'motive-053',
      criticalEvidenceIds: ['ev-040', 'ev-041'],
      methodOptions: [
        { id: 'method-053', text: 'Coated an ancient spring-loaded needle inside the sarcophagus pendant clasp with concentrated red scorpion venom, knowing Rao would inspect it.' },
        { id: 'method-054', text: 'Released live venomous krait snakes through the tomb ceiling fissure.' },
        { id: 'method-055', text: 'Piped carbon monoxide gas through the stone air shafts.' },
        { id: 'method-056', text: 'Slipped hemlock tea into Dr. Rao’s thermos before he went underground.' }
      ],
      motiveOptions: [
        { id: 'motive-053', text: 'To silence Rao before he initiated an external forensic audit that would expose Patil’s black-market artifact theft.' },
        { id: 'motive-054', text: 'To claim sole credit for the Pallava dynastic monograph.' },
        { id: 'motive-055', text: 'To stop the excavation due to superstitious fear of ancestral wrath.' },
        { id: 'motive-056', text: 'To steal the ruby pendant for himself.' }
      ],
      fullExplanation: {
        whatHappened: 'Site Conservator Devraj Patil poisoned Dr. Vikramaditya Rao using fresh red scorpion venom rigged into an ancient pendant spring clasp to simulate a folkloric curse.',
        howItWasDone: 'Patil learned that Rao was calling for a comprehensive audit of missing antiquities. Knowing Rao planned to examine the sarcophagus ruby that evening, Patil used his conservation access to load the pendant’s antique decorative spring trap with purified scorpion venom mixed with DMSO. When Rao pressed the clasp, the needle penetrated his skin, inducing instant neurotoxic paralysis.',
        whyItHappened: 'Patil had been systematically looting and selling terracotta figurines and coins from the site, and Rao’s planned Monday audit would have sent him to prison.',
        decisiveEvidenceWalkthrough: 'EV-40 proved the venom on the pendant was freshly prepared with DMSO. EV-41 discovered the exact matching venom vial hidden inside Patil’s acetone bottle.',
        whyOthersAreInnocent: 'Priya Nambiar had no chemical training, and Karan Malik was continuously verified at the generator station by mechanics.'
      }
    }
  },
  {
    id: 'case-015',
    caseNumber: 'CASE-015',
    title: 'The Vanishing Copper Plates of Tanjore',
    category: 'mythology',
    categoryDisplay: 'Indian Mythology Inspired',
    difficulty: 2,
    difficultyLabel: 'Investigator',
    estimatedTime: '20-25 MIN',
    shortDescription: 'Invaluable 10th-century Chola royal copper grant charters vanish from a locked showcase during a ceremonial palace exhibition.',
    fullStory: `At the Saraswathi Mahal Palace Gallery in Thanjavur, a royal charter set consisting of seven inscribed copper plates held together by a heavy bronze seal of the Chola tiger emblem was on display for a special cultural symposium. At 3:30 PM, the curtains were drawn for a ten-minute documentary screening.

When the hall lights came back on at 3:42 PM, the glass display cube was intact, but the copper plate charter had vanished, replaced by an identical-looking blackened dummy plate made of lead-copper laminate. The room was monitored by two curators and eight academic delegates. Three individuals were standing within arm’s reach of the showcase during the film: Numismatist Senthil Nathan, Museum Archivist Meenakshi Sundaram, and Visiting Collector Tarun Kothari.`,
    setting: 'Saraswathi Mahal Heritage Wing, Thanjavur',
    disclaimer: 'Fiction inspired by Indian mythology, folklore, history, and legends.',
    tags: ['Historical Charters', 'Chola Dynasty', 'Plate Swap', 'Museum Theft'],
    suspects: [
      {
        id: 'susp-044',
        name: 'Tarun Kothari',
        age: 50,
        occupation: 'Private Antiquities Collector',
        relationToCase: 'Offered to buy the charter set for a private foundation last month',
        alibi: 'Standing near the projector stand taking notes during the film.',
        motive: 'Obsessed with acquiring authentic Chola dynasty epigraphs.',
        knownFacts: [
          'Carried an unusually bulky custom-lined leather portfolio.',
          'Wore an overcoat despite the warm afternoon.'
        ],
        statement: 'I sat beside the projector taking notes on the documentary. The plates belong in Tamil Nadu—I only collect through legitimate auctions.'
      },
      {
        id: 'susp-045',
        name: 'Senthil Nathan',
        age: 42,
        occupation: 'Numismatist & Copper Specialist',
        relationToCase: 'Mounted the plates into the display cradle this morning',
        alibi: 'Sitting in the front row watching the screening.',
        motive: 'Struggling with debts from failed publishing ventures.',
        knownFacts: [
          'Designed the quick-release magnetic latches on the showcase base.',
          'Had traces of copper oxide and brass polish on his coat pocket.'
        ],
        statement: 'I mounted them under the curator’s personal supervision at 10:00 AM. I was in the front row with everyone else.'
      },
      {
        id: 'susp-046',
        name: 'Meenakshi Sundaram',
        age: 56,
        occupation: 'Head Archivist',
        relationToCase: 'Custodian of the keys to the showcase',
        alibi: 'Operating the projector and dimming room lights at the back control panel.',
        motive: 'Retiring in two months with modest pension.',
        knownFacts: [
          'Remained at the projector control panel throughout the 12-minute screening.',
          'Never approached the display table during the dark period.'
        ],
        statement: 'I stood right by the light dimmer switch. I never took my eyes off the room.'
      }
    ],
    evidence: [
      {
        id: 'ev-042',
        code: 'EV-42',
        title: 'Pre-Manufactured Blackened Dummy Plates',
        type: 'physical',
        category: 'Physical Evidence',
        collectedAt: 'Mar 12, 04:15 PM',
        locationFound: 'Inside showcase cradle',
        summary: 'Lead sheets etched with acid matching the Chola tiger ring inscription.',
        detailedContent: 'The fake plates were acid-etched in advance using photographs from Senthil Nathan’s published epigraphy catalog. Microscopic analysis showed the synthetic lacquer had been applied less than 24 hours ago in a local foundry.'
      },
      {
        id: 'ev-043',
        code: 'EV-43',
        title: 'Magnetic Release Base Plinth',
        type: 'physical',
        category: 'Engineering Inspection',
        collectedAt: 'Mar 12, 04:45 PM',
        locationFound: 'Underneath display table felt',
        summary: 'A covert sliding baseplate engineered by Senthil Nathan.',
        detailedContent: 'The cradle was fixed to a magnetic slide track. Under cover of darkness, Nathan slid the true charter down into a felt-lined under-shelf compartment beneath his front-row seat, sliding the dummy plate up into the glass cradle in under four seconds.'
      },
      {
        id: 'ev-044',
        code: 'EV-44',
        title: 'Charter Found in Nathan’s Under-Seat Bag',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Mar 12, 05:15 PM',
        locationFound: 'Under front-row seat 4B (Nathan’s designated chair)',
        summary: 'The authentic Chola copper plate set wrapped in green baize cloth.',
        detailedContent: 'Discovered taped beneath the cane seat of chair 4B occupied by Senthil Nathan.'
      }
    ],
    timeline: [
      {
        id: 'time-057',
        time: '10:00 AM',
        order: 1,
        title: 'Showcase Mounted',
        description: 'Senthil Nathan mounts the Chola plates inside the showcase.',
        location: 'Exhibition Hall'
      },
      {
        id: 'time-058',
        time: '03:30 PM',
        order: 2,
        title: 'Lights Dimmed',
        description: 'Meenakshi dims lights; documentary begins.',
        location: 'Exhibition Hall'
      },
      {
        id: 'time-059',
        time: '03:34 PM',
        order: 3,
        title: 'The Rapid Swap',
        description: 'Under cover of documentary audio, Nathan activates the sliding cradle under his seat.',
        location: 'Showcase Table'
      },
      {
        id: 'time-060',
        time: '03:42 PM',
        order: 4,
        title: 'Lights Restored',
        description: 'Dummy plates identified by visiting scholars; alarm raised.',
        location: 'Exhibition Hall'
      }
    ],
    witnesses: [
      {
        id: 'wit-016',
        witnessName: 'Prof. K. Swaminathan',
        role: 'Visiting Historian',
        interviewTime: 'Mar 12, 04:30 PM',
        statement: 'During the film, I heard a soft metallic click directly in front of me where Nathan was seated, right beside the display table.',
        contradictionHint: 'Identifies the mechanical click of the magnetic sliding cradle.'
      }
    ],
    locations: [
      {
        id: 'loc-016',
        name: 'Heritage Exhibition Gallery',
        description: 'Carpeted heritage gallery with antique teak display pedestals.',
        accessible: true,
        notes: 'Equipped with heavy blackout window drapes.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Preparation of the Forgery',
        text: 'The dummy plates were acid-etched in advance using photographs from a published academic book. Who published that book?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'Table Engineering',
        text: 'The glass cube was never lifted. Check the base of the table directly next to the front row seats.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Magnetic Slide Under Seat 4B',
        text: 'Senthil Nathan rigged a magnetic sliding track under the table, swapped the plates in the dark, and stashed the genuine charter under his seat.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-045',
      methodId: 'method-057',
      motiveId: 'motive-057',
      criticalEvidenceIds: ['ev-042', 'ev-043', 'ev-044'],
      methodOptions: [
        { id: 'method-057', text: 'Engineered a covert magnetic sliding trapdoor in the showcase plinth, swapping the genuine charter with pre-etched dummy plates during the dark documentary screening.' },
        { id: 'method-058', text: 'Cut the glass cube with a suction glass-cutter during the applause.' },
        { id: 'method-059', text: 'Bribed Meenakshi Sundaram to hand over the master keys.' },
        { id: 'method-060', text: 'Lowered a magnetic grapple from the ceiling lighting track.' }
      ],
      motiveOptions: [
        { id: 'motive-057', text: 'To sell the priceless Chola royal charter to an overseas antiquities syndicate to eliminate debts.' },
        { id: 'motive-058', text: 'To return the charter to an ancestral temple trust.' },
        { id: 'motive-059', text: 'To frame Tarun Kothari for antiquities smuggling.' },
        { id: 'motive-060', text: 'To demonstrate vulnerabilities in museum security.' }
      ],
      fullExplanation: {
        whatHappened: 'Numismatist Senthil Nathan orchestrated a sleight-of-hand table swap to steal the 10th-century Chola copper plates during a dark documentary screening.',
        howItWasDone: 'Nathan manufactured identical dummy lead-copper plates beforehand. When mounting the exhibition table, he installed a secret magnetic slide-plate. During the 12-minute documentary in total darkness, Nathan—seated in the front row inches from the pedestal—triggered the slide, dropping the genuine charter into a felt cradle taped under his chair while elevating the dummy plates into view.',
        whyItHappened: 'Nathan was facing imminent asset seizures over debts from his bankrupt historical publishing firm.',
        decisiveEvidenceWalkthrough: 'EV-42 revealed the dummy plates were acid-etched using photos from Nathan’s book. EV-43 exposed the secret magnetic track. EV-44 recovered the authentic plates under Nathan’s chair.',
        whyOthersAreInnocent: 'Kothari’s bag contained only auction catalogs and his hands were empty, while Meenakshi never left the projector booth.'
      }
    }
  },
  {
    id: 'case-016',
    caseNumber: 'CASE-016',
    title: 'The Secret of the Ancient Stepwell',
    category: 'mythology',
    categoryDisplay: 'Indian Mythology Inspired',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-30 MIN',
    shortDescription: 'An astronomer’s waterproof parchment containing astronomical coordinates is discovered floating in a seven-tiered ancient stepwell.',
    fullStory: `At the Chand Baori stepwell complex in Rajasthan, an ancient subterranean water palace known in folklore as the "Well of the Cosmic Serpent," Senior Hydrologist Dr. Kabir Rathore was conducting water table measurements. At 6:30 AM, local villagers found Dr. Rathore drowned in the bottom reservoir pool.

Floating on the surface of the green water was an oiled, waterproofed silk parchment detailing the celestial solstice alignments of an undiscovered subterranean chamber beneath the stepwell. Rathore was an Olympic-level swimmer, and autopsy findings showed he did not drown from exhaustion: his legs were bound at the ankles with an intricate aquatic slipknot made of braided jute rope. Three researchers camped on the upper pavilions overnight: Folklorist Mohini Rao, Hydrogeologist Suresh Verma, and Local Stepwell Custodian Bhairav Singh.`,
    setting: 'Chand Baori Subterranean Stepwell, Abhaneri',
    disclaimer: 'Fiction inspired by Indian mythology, folklore, history, and legends.',
    tags: ['Stepwell', 'Astronomical Parchment', 'Aquatic Trap', 'Folklore'],
    suspects: [
      {
        id: 'susp-047',
        name: 'Suresh Verma',
        age: 36,
        occupation: 'Hydrogeologist & Diver',
        relationToCase: 'Rathore’s junior research partner competing for research grants',
        alibi: 'Calibrating depth sonar instruments on the 4th tier terrace between 5:00 AM and 6:30 AM.',
        motive: 'Wanted sole credit for the discovery of the lost underground subterranean aqueduct.',
        knownFacts: [
          'Certified technical cave diver with specialized diving gear in his tent.',
          'Carried identical braided jute rope used for mooring sonar buoys.'
        ],
        statement: 'Kabir went down to take water samples at 5:30 AM. He must have slipped on the algae-covered steps in the dark.'
      },
      {
        id: 'susp-048',
        name: 'Mohini Rao',
        age: 42,
        occupation: 'Folklorist & Historian',
        relationToCase: 'Deciphering stepwell carving allegories',
        alibi: 'Sleeping in the pavilion tent until awakened by shouting.',
        motive: 'Wanted to keep the sacred chamber secret to prevent tourist commercialization.',
        knownFacts: [
          'Cannot swim; exhibits extreme fear of deep water.'
        ],
        statement: 'The legends tell of subterranean spirits protecting the sacred water. Kabir was reckless to enter the deep tank alone.'
      },
      {
        id: 'susp-049',
        name: 'Bhairav Singh',
        age: 58,
        occupation: 'Hereditary Stepwell Custodian',
        relationToCase: 'Guardian of the site keys and temple traditions',
        alibi: 'Sweeping the upper entrance gates and lighting incense at the shrine.',
        motive: 'Feared the government would confiscate hereditary family lands surrounding the well.',
        knownFacts: [
          'Suffers from severe knee osteoarthritis and cannot navigate the 3,500 steep stone steps quickly.'
        ],
        statement: 'I was up at the Hanuman shrine offering prayers. My knees won’t let me climb down to the water in under an hour.'
      }
    ],
    evidence: [
      {
        id: 'ev-045',
        code: 'EV-45',
        title: 'Jute Rope Underwater Snare Rig',
        type: 'physical',
        category: 'Aquatic Forensics',
        collectedAt: 'Apr 05, 08:30 AM',
        locationFound: 'Bottom tier stone pillar underwater',
        summary: 'Submerged spring-loaded loop snare tied to the underwater stone arch.',
        detailedContent: 'A diver’s counter-weight line was anchored to underwater column 7. When Rathore stepped onto the submerged bottom step, the trip line pulled a weighted noose around his ankles, pinning him underwater against the column until he drowned.'
      },
      {
        id: 'ev-046',
        code: 'EV-46',
        title: 'Verma’s Wet Neoprene Dive Booties',
        type: 'physical',
        category: 'Equipment Inspection',
        collectedAt: 'Apr 05, 09:15 AM',
        locationFound: 'Suresh Verma’s tent gear locker',
        summary: 'Still-damp neoprene dive boots with stepwell bottom green algae smears.',
        detailedContent: 'The boots tested positive for a unique species of benthic micro-algae (Oscillatoria stepwelli) found exclusively on the submerged bottom pillars at 15 meters depth, proving Verma was underwater rigging the snare that morning.'
      }
    ],
    timeline: [
      {
        id: 'time-061',
        time: '04:45 AM',
        order: 1,
        title: 'Underwater Rigging',
        description: 'Verma dives silently into the bottom reservoir to anchor the snare.',
        location: 'Bottom Tank Tier'
      },
      {
        id: 'time-062',
        time: '05:30 AM',
        order: 2,
        title: 'Rathore Climbs Down',
        description: 'Dr. Kabir Rathore descends the steps with water sampling vials.',
        location: 'Stepwell Steps'
      },
      {
        id: 'time-063',
        time: '05:42 AM',
        order: 3,
        title: 'The Snare Triggers',
        description: 'Rathore steps onto bottom tier; counter-weight drags him beneath surface.',
        location: 'Bottom Pool'
      },
      {
        id: 'time-064',
        time: '06:30 AM',
        order: 4,
        title: 'Discovery',
        description: 'Body and parchment discovered floating.',
        location: 'Pool Surface'
      }
    ],
    witnesses: [
      {
        id: 'wit-017',
        witnessName: 'Bhairav Singh',
        role: 'Stepwell Custodian',
        interviewTime: 'Apr 05, 09:30 AM',
        statement: 'At 5:00 AM, while cleaning lanterns at the top, I saw ripples and bubbles rising from the deep water tank, long before Dr. Kabir ever walked down.',
        contradictionHint: 'Proves an earlier underwater dive took place.'
      }
    ],
    locations: [
      {
        id: 'loc-017',
        name: 'The Reservoir Tank',
        description: 'Seven tiers of 3,500 geometric stone steps descending into a subterranean emerald pool.',
        accessible: true,
        notes: 'Water depth is over 15 meters; steps are coated with slick moss.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Algae on the Booties',
        text: 'The micro-algae found on the dive boots only grows on the deepest underwater pillars. Who owned dive gear?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Snare Mechanism',
        text: 'The victim was trapped by a submerged counter-weight loop line. This required technical diving skills to install.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'Sole Authorship',
        text: 'Suresh Verma dove into the tank at 4:45 AM, anchored the rope snare to Column 7, and drowned his mentor to claim sole credit for the subterranean aquifer discovery.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-047',
      methodId: 'method-061',
      motiveId: 'motive-061',
      criticalEvidenceIds: ['ev-045', 'ev-046'],
      methodOptions: [
        { id: 'method-061', text: 'Dove into the deep reservoir before dawn, anchored a weighted rope snare to underwater Column 7 that trapped Rathore’s ankles when he stepped into the pool.' },
        { id: 'method-062', text: 'Pushed Rathore down the steep stone steps from the 4th tier terrace.' },
        { id: 'method-063', text: 'Sedated Rathore’s morning tea with datura extract.' },
        { id: 'method-064', text: 'Held Rathore underwater manually until he stopped breathing.' }
      ],
      motiveOptions: [
        { id: 'motive-061', text: 'To eliminate Rathore and claim sole academic discovery and international foundation funding for the subterranean astronomical chamber.' },
        { id: 'motive-062', text: 'To steal the parchment and sell it to a foreign antique dealer.' },
        { id: 'motive-063', text: 'To prevent tourist desecration of a sacred temple site.' },
        { id: 'motive-064', text: 'A dispute over hereditary land ownership around the stepwell.' }
      ],
      fullExplanation: {
        whatHappened: 'Junior Hydrogeologist Suresh Verma murdered Dr. Kabir Rathore by setting an underwater snare trap in the ancient stepwell reservoir pool.',
        howItWasDone: 'Verma used his technical diving equipment to descend into the cold 15-meter deep reservoir at 4:45 AM. He tied a spring-tensioned jute snare to underwater column 7 and linked it to a trip-stone on the bottom tier. When Rathore stepped down to draw water samples at 5:42 AM, the weighted line caught his ankles and dragged him beneath the surface, leaving the parchment floating.',
        whyItHappened: 'Verma wanted sole global acclaim and multi-million dollar international research grants for unveiling the lost astronomical water palace of the stepwell.',
        decisiveEvidenceWalkthrough: 'EV-45 revealed the anchored underwater snare. EV-46 discovered benthic deep-water algae on Verma’s wet dive boots inside his tent.',
        whyOthersAreInnocent: 'Mohini Rao cannot swim, and custodian Bhairav Singh has severe knee arthritis that prevented him from descending the steps.'
      }
    }
  },
  {
    id: 'case-017',
    caseNumber: 'CASE-017',
    title: 'The Seven Seals of the Hill Fortress',
    category: 'mythology',
    categoryDisplay: 'Indian Mythology Inspired',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '30-35 MIN',
    shortDescription: 'A ceremonial meteorite-iron dagger vanishes from an inner royal shrine secured by seven interlocking mechanical brass gates.',
    fullStory: `Perched atop the granite crags of Gingee Fort, the ancient Queen’s Shrine is protected by the legendary Seven Mechanical Seals—a sequence of seven heavy brass portcullises that can only be unlocked in a strict forward-and-reverse numerical order. Once a year during the Vijayadashami festival, the sacred meteoritic iron dagger (Ulukha Khadga) is consecrated.

At 7:00 PM, the fortress gates were verified locked by the state archaeological guards. At 6:00 AM the next morning, when the seven gates were unsealed in order, the ruby-pommeled dagger was gone from its stone alcove. The seven brass locks were completely undamaged, with all mechanical counter-weights resting in their zero positions. Three people stayed on the summit overnight: Fortress Conservator Arvind Swamy, Metallurgist Dr. Maya Sen, and Heritage Drone Surveyor Rohan Kapoor.`,
    setting: 'Gingee Hill Fortress Summit, Tamil Nadu',
    disclaimer: 'Fiction inspired by Indian mythology, folklore, history, and legends.',
    tags: ['Hill Fortress', 'Meteorite Dagger', 'Mechanical Gates', 'Drone Flight'],
    suspects: [
      {
        id: 'susp-050',
        name: 'Rohan Kapoor',
        age: 28,
        occupation: 'Drone Topographer',
        relationToCase: 'Conducting lidar 3D scans of the fortress cliffs',
        alibi: 'Sleeping in his camper van on the lower fort saddle from 11:00 PM to 5:00 AM.',
        motive: 'Owed large cryptocurrency trading debts to private lenders.',
        knownFacts: [
          'Customized heavy-lift industrial quadcopter drones with thermal cameras.',
          'Flight log on his laptop showed an unverified "calibration test" at 2:30 AM.'
        ],
        statement: 'I was testing night wind shears on the lower slope. The drone never flew near the summit shrine.'
      },
      {
        id: 'susp-051',
        name: 'Arvind Swamy',
        age: 52,
        occupation: 'Fortress Conservator',
        relationToCase: 'Possessed the numerical cipher sequence for the seven gates',
        alibi: 'In the guardhouse quarters playing carrom with archaeological sentries.',
        motive: 'Approaching retirement with pending disciplinary charges.',
        knownFacts: [
          'Sentries verified Swamy was playing carrom in the guardhouse until 3:00 AM.'
        ],
        statement: 'The seven gates were never opened. If someone walked through, the counterweights would have crashed down.'
      },
      {
        id: 'susp-052',
        name: 'Dr. Maya Sen',
        age: 44,
        occupation: 'Metallurgist & Curator',
        relationToCase: 'Specialist in ancient meteoric iron blades',
        alibi: 'Sleeping in the stone watchtower pavilion.',
        motive: 'Publishing a monograph on ancient extraterrestrial nickel-iron alloys.',
        knownFacts: [
          'Carried an empty velvet blade scabbard in her luggage.'
        ],
        statement: 'I was resting after a grueling climb. I came here to study the metallurgical composition, not steal it.'
      }
    ],
    evidence: [
      {
        id: 'ev-047',
        code: 'EV-47',
        title: 'Shrine Natural Skylight Crevice',
        type: 'physical',
        category: 'Fortress Architecture',
        collectedAt: 'Oct 24, 07:30 AM',
        locationFound: 'Ceiling fissure of the Queen’s Shrine',
        summary: 'A 20-inch natural vertical crevice opening to the top of the precipice.',
        detailedContent: 'The Queen’s Shrine ceiling has an ancient natural granite venting crevice measuring 20 inches across. Microscopic inspection found carbon fiber drone propeller scratches along the granite rim and magnetic grapple line fibers.'
      },
      {
        id: 'ev-048',
        code: 'EV-48',
        title: 'Telemetry Log on Kapoor’s Heavy-Lift Drone',
        type: 'digital',
        category: 'Avionics Forensics',
        collectedAt: 'Oct 24, 08:45 AM',
        locationFound: 'Rohan Kapoor’s flight controller SD card',
        summary: 'Hidden flight log at 02:34 AM showing hover lock above the shrine crevice.',
        detailedContent: 'The encrypted logs revealed his hexacopter ascended 400 meters at 2:30 AM, hovered motionless above GPS coordinates matching the shrine roof fissure for 8 minutes, and engaged a high-strength neodymium winch.'
      },
      {
        id: 'ev-049',
        code: 'EV-49',
        title: 'Meteoric Dagger Recovered from Drone Battery Casing',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Oct 24, 09:30 AM',
        locationFound: 'Inside hollow lithium battery housing in Kapoor’s camper',
        summary: 'The ancient meteorite iron dagger wrapped in lead foil.',
        detailedContent: 'The dagger’s meteoric nickel-iron alloy was strongly magnetic, allowing it to be hoisted through the ceiling fissure by Kapoor’s magnetic winch.'
      }
    ],
    timeline: [
      {
        id: 'time-065',
        time: '07:00 PM',
        order: 1,
        title: 'Seven Gates Sealed',
        description: 'Arvind Swamy locks all seven portcullises in reverse sequence.',
        location: 'Summit Pathway'
      },
      {
        id: 'time-066',
        time: '02:30 AM',
        order: 2,
        title: 'Covert Drone Launch',
        description: 'Kapoor launches heavy-lift drone from camper van on lower saddle.',
        location: 'Lower Saddle'
      },
      {
        id: 'time-067',
        time: '02:38 AM',
        order: 3,
        title: 'Magnetic Winch Extraction',
        description: 'Drone lowers neodymium magnetic probe through the ceiling crevice and extracts the blade.',
        location: 'Shrine Roof Fissure'
      },
      {
        id: 'time-068',
        time: '06:00 AM',
        order: 4,
        title: 'Gates Unlocked',
        description: 'Seven gates opened; alcove empty with unbroken locks.',
        location: 'Queen’s Shrine'
      }
    ],
    witnesses: [
      {
        id: 'wit-018',
        witnessName: 'Subramani the Guard',
        role: 'Night Sentry',
        interviewTime: 'Oct 24, 08:00 AM',
        statement: 'At 2:35 AM, while patrolling the south battlement, I heard a high-pitched buzzing like a giant hornet above the cliff face, but the fog was too thick to see anything.',
        contradictionHint: 'Corroborates the sound of Kapoor’s high-power drone motors.'
      }
    ],
    locations: [
      {
        id: 'loc-018',
        name: 'The Queen’s Shrine',
        description: 'Granite mountaintop sanctum accessed only via seven mechanical gate locks.',
        accessible: true,
        notes: 'Ceiling has a vertical ventilation crevice opening to the sky.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Seven Gates Were Untouched',
        text: 'The counter-weighted gates never moved. Look for an aerial or vertical entrance into the mountain shrine.',
        scorePenalty: 300
      },
      {
        level: 2,
        title: 'Properties of Meteoric Iron',
        text: 'Ancient meteoritic iron has a very high nickel-iron magnetic susceptibility. What tool can attract metal from above?',
        scorePenalty: 600
      },
      {
        level: 3,
        title: 'The Drone Hovering Over the Crevice',
        text: 'Rohan Kapoor flew an industrial drone over the ceiling fissure at 2:34 AM and lowered a magnetic grapple to hoist the dagger out of the shrine.',
        scorePenalty: 900
      }
    ],
    solution: {
      culpritId: 'susp-050',
      methodId: 'method-065',
      motiveId: 'motive-065',
      criticalEvidenceIds: ['ev-047', 'ev-048', 'ev-049'],
      methodOptions: [
        { id: 'method-065', text: 'Navigated a heavy-lift drone over the shrine’s roof fissure at 2:30 AM and extracted the magnetic meteoric dagger using a lowered neodymium magnetic winch.' },
        { id: 'method-066', text: 'Decoded the counter-weight mechanism and unlocked all seven gates in under ten minutes.' },
        { id: 'method-067', text: 'Scaled the 400-meter sheer cliff using rock climbing pitons.' },
        { id: 'method-068', text: 'Bribed Arvind Swamy to smuggle the blade out inside a water tank.' }
      ],
      motiveOptions: [
        { id: 'motive-065', text: 'To sell the ancient meteoric dagger to an overseas private billionaire to settle crypto trading debts.' },
        { id: 'motive-066', text: 'To publish a sensational paper on meteoric iron.' },
        { id: 'motive-067', text: 'To avenge a dispute with the state archaeological department.' },
        { id: 'motive-068', text: 'To donate the dagger to an international museum.' }
      ],
      fullExplanation: {
        whatHappened: 'Drone surveyor Rohan Kapoor bypassed the seven mechanical fortress gates entirely by airlifting the meteoric iron dagger through a roof rock fissure using a heavy-lift drone.',
        howItWasDone: 'Kapoor scouted the fortress using 3D lidar scans and located a 20-inch natural roof crevice above the shrine. Knowing the dagger was forged from magnetic meteoric iron, Kapoor launched his custom hexacopter drone at 2:30 AM in the mountain fog. Lowering a high-powered neodymium magnet on a winch line through the crevice, he attached the magnet to the blade and hoisted it out of the mountain.',
        whyItHappened: 'Kapoor was under severe threat from cryptocurrency creditors and had arranged an illicit $2.5 million sale with a foreign collector.',
        decisiveEvidenceWalkthrough: 'EV-47 discovered drone propeller scrapes and grapple fibers on the fissure rim. EV-48 proved his drone hovered above the crevice at 2:34 AM. EV-49 recovered the dagger hidden inside his drone battery casing.',
        whyOthersAreInnocent: 'Arvind Swamy was playing carrom with guards all night in the guardhouse, and Dr. Maya Sen had no drone equipment or climbing capability.'
      }
    }
  }
];
