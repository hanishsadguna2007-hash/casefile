import { Mystery } from '@/types/mystery';

export const robberyMysteries: Mystery[] = [
  {
    id: 'case-007',
    caseNumber: 'CASE-007',
    title: 'The Locked Gallery Diamond',
    category: 'robbery',
    categoryDisplay: 'Robbery & Heist',
    difficulty: 2,
    difficultyLabel: 'Investigator',
    estimatedTime: '20-30 MIN',
    shortDescription: 'The 45-carat Blue Sovereign diamond vanished from a hermetically sealed vitrine in the Queen’s Gallery. Four staff members were locked inside.',
    fullStory: `At 8:41 PM on a rainy Thursday, the pressure sensors on Vitrine 4 inside the Queen’s Gallery tripped. The gallery was on lockdown after 7:30 PM closing. The 45-carat Blue Sovereign diamond, valued at £14 million, had vanished from its velvet pedestal.

The display case was constructed of 3-inch laminated bulletproof glass, equipped with internal seismic monitors and argon gas sealing. Amazingly, the vitrine was not smashed, the electronic seal remained unbroken, and no alarms sounded until the internal weight plate detected zero grams. The gallery has no windows, and the vault doors can only be unlocked from the master control room. Four individuals were present on site: Chief Curator Alistair Finch, Master Restorer Clara Webb, Chief of Security Raymond Holt, and Junior Conservator Sanjay Patel.`,
    setting: 'Queen’s Gallery Exhibition Hall, Mayfair',
    tags: ['Jewel Robbery', 'Locked Room', 'Optical Illusion', 'Inside Job'],
    suspects: [
      {
        id: 'susp-019',
        name: 'Alistair Finch',
        age: 62,
        occupation: 'Chief Curator',
        relationToCase: 'Authorized the special display arrangement',
        alibi: 'In the curatorial office reconciling inventory catalogs between 7:45 PM and 8:40 PM.',
        motive: 'Staved off gallery bankruptcy by seeking private collector rewards.',
        knownFacts: [
          'Possesses the physical key to the vitrine’s maintenance base panel.',
          'Carried an empty briefcase into the gallery earlier in the day.'
        ],
        statement: 'I never went near the vitrine after hours. My logs prove I was typing acquisitions in the back office.'
      },
      {
        id: 'susp-020',
        name: 'Clara Webb',
        age: 44,
        occupation: 'Master Optical Restorer',
        relationToCase: 'Installed the specialized anti-reflective optical mirrors in the vitrine yesterday',
        alibi: 'Polishing frame moldings in the adjoining Renaissance hall.',
        motive: 'Secretly contracted by an overseas billionaire collector.',
        knownFacts: [
          'World expert in refractive mirror prisms and optical illusion staging.',
          'Had a specialized carbon-fiber suction tool in her restoration kit.',
          'Thermal sensors detected anomalous heat radiating from her work trolley.'
        ],
        statement: 'I was merely waxing the gilt frames in Gallery B. You can inspect my tools—they are purely for woodwork restoration.'
      },
      {
        id: 'susp-021',
        name: 'Raymond Holt',
        age: 50,
        occupation: 'Chief of Security',
        relationToCase: 'Commanded the central CCTV console',
        alibi: 'Seated at the security desk monitoring camera feeds.',
        motive: 'Under investigation for bribery in an unrelated warehouse heist.',
        knownFacts: [
          'Had authority to bypass motion sensors.',
          'Camera 3 (aimed at Vitrine 4) looped a static image between 8:24 PM and 8:40 PM.'
        ],
        statement: 'The cameras showed the diamond sitting on the pedestal peacefully until the weight alarm rang at 8:41 PM.'
      },
      {
        id: 'susp-022',
        name: 'Sanjay Patel',
        age: 28,
        occupation: 'Junior Conservator',
        relationToCase: 'Assisted in setting up the exhibition',
        alibi: 'Cataloging humidity gauges in the storage basement.',
        motive: 'Large credit card debt.',
        knownFacts: [
          'Basement access logs confirm his badge was swiped downstairs throughout the evening.'
        ],
        statement: 'I was replacing silica gel packs downstairs. I didn’t even know the alarm went off until security sirens rang.'
      }
    ],
    evidence: [
      {
        id: 'ev-021',
        code: 'EV-21',
        title: 'Refractive Prism Plate inside Vitrine Base',
        type: 'physical',
        category: 'Optical Rigging',
        collectedAt: 'Oct 09, 09:15 PM',
        locationFound: 'Inside Vitrine 4 bottom plinth',
        summary: 'A motorized 45-degree beam-splitter prism capable of concealing the diamond.',
        detailedContent: 'A two-way refractive optical prism was installed beneath the velvet pedestal. When activated by Clara Webb’s handheld remote, it projected a high-resolution holographic reflection of the diamond onto the glass, while allowing the actual gem to drop into an internal felt chute leading to the floorboard grating.'
      },
      {
        id: 'ev-022',
        code: 'EV-22',
        title: 'Clara’s Hollow Waxing Mallet',
        type: 'physical',
        category: 'Stolen Goods Recovery',
        collectedAt: 'Oct 09, 10:00 PM',
        locationFound: 'Clara Webb’s restoration trolley',
        summary: 'Restoration wood mallet with a magnetic unscrewable brass head.',
        detailedContent: 'Concealed inside the mallet head was the 45-carat Blue Sovereign diamond, packed in silicone gel to prevent rattling.'
      },
      {
        id: 'ev-023',
        code: 'EV-23',
        title: 'Looping CCTV Signal Override',
        type: 'digital',
        category: 'Electronic Forensics',
        collectedAt: 'Oct 09, 09:40 PM',
        locationFound: 'Camera 3 junction box',
        summary: 'A Raspberry Pi dongle plugged into the local video feed.',
        detailedContent: 'The dongle was hardwired directly behind the painting Clara had been "restoring" on Wednesday. It transmitted a cloned 16-minute still image of Vitrine 4 to Holt’s console.'
      }
    ],
    timeline: [
      {
        id: 'time-026',
        time: '07:30 PM',
        order: 1,
        title: 'Gallery Closes',
        description: 'Last public visitors exit; external magnetic vault doors lock.',
        location: 'Main Entrance'
      },
      {
        id: 'time-027',
        time: '08:05 PM',
        order: 2,
        title: 'Security Sweep',
        description: 'Raymond Holt verifies all vitrines visually.',
        location: 'Gallery 4'
      },
      {
        id: 'time-028',
        time: '08:24 PM',
        order: 3,
        title: 'Camera Looping Engaged',
        description: 'CCTV feed for Vitrine 4 is hijacked by local transmitter.',
        location: 'Camera 3 Feed'
      },
      {
        id: 'time-029',
        time: '08:41 PM',
        order: 4,
        title: 'Weight Sensor Alarm',
        description: 'Argon pressure drop triggers internal gallery klaxons.',
        location: 'Vitrine 4'
      }
    ],
    witnesses: [
      {
        id: 'wit-008',
        witnessName: 'Sanjay Patel',
        role: 'Junior Conservator',
        interviewTime: 'Oct 09, 09:30 PM',
        statement: 'Clara was working on the wall panel right behind Vitrine 4 earlier this afternoon. She insisted on adjusting the lighting fixtures herself.',
        contradictionHint: 'Connects Clara directly to the camera junction box and the optical plinth.'
      }
    ],
    locations: [
      {
        id: 'loc-008',
        name: 'Vitrine 4 Exhibition Room',
        description: 'High-security room with reinforced glass cases and polished marble floor.',
        accessible: true,
        notes: 'Floor contains air return vents.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Look at the Restoration Tools',
        text: 'The glass was never broken or picked. How could a restorer use optical tools to hide a theft in plain sight?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'The Video Loop',
        text: 'The security cameras showed the diamond still on display even after the physical weight sensor tripped. Check who had physical access to the Camera 3 junction box.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Hollow Mallet',
        text: 'Clara Webb used an optical beam splitter to project an illusion of the diamond while dropping the real stone into her hollow mallet.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-020',
      methodId: 'method-025',
      motiveId: 'motive-025',
      criticalEvidenceIds: ['ev-021', 'ev-022', 'ev-023'],
      methodOptions: [
        { id: 'method-025', text: 'Rigged an optical beam-splitter prism into the vitrine base to project a holographic phantom of the gem, while the real diamond dropped into a floor chute into her hollow mallet.' },
        { id: 'method-026', text: 'Used a diamond glass cutter on the rear panel and crawled through the ceiling vent.' },
        { id: 'method-027', text: 'Bribed Raymond Holt to open the vitrine lock and swap the gem with cubic zirconia.' },
        { id: 'method-028', text: 'Lowered a magnetic grapple hook through the roof skylight.' }
      ],
      motiveOptions: [
        { id: 'motive-025', text: 'Contracted by an anonymous foreign collector for a £2 million bounty.' },
        { id: 'motive-026', text: 'To rescue the gallery from bankruptcy through insurance payouts.' },
        { id: 'motive-027', text: 'To frame Raymond Holt for security negligence.' },
        { id: 'motive-028', text: 'To pay off Sanjay Patel’s gambling debts.' }
      ],
      fullExplanation: {
        whatHappened: 'Master Optical Restorer Clara Webb stole the 45-carat Blue Sovereign diamond using an optical beam splitter and a hijacked CCTV loop.',
        howItWasDone: 'Clara installed a hidden beam-splitter prism during her maintenance work on the vitrine plinth. By triggering the mechanism remotely, the real diamond sank down an internal felt chute into a floor vent where Clara retrieved it and sealed it inside the hollow head of her restoration mallet. Simultaneously, a transmitter she placed behind a nearby painting fed a looping video of the diamond to the security desk.',
        whyItHappened: 'Clara was recruited by a black-market antiquities syndicate offering £2 million to extract the famous blue diamond without triggering physical glass alarms.',
        decisiveEvidenceWalkthrough: 'EV-21 exposed the motorized prism in the vitrine base. EV-22 located the actual diamond inside Clara’s hollowed wooden mallet. EV-23 uncovered the wireless video loop transmitter installed directly behind Clara’s designated work area.',
        whyOthersAreInnocent: 'Alistair Finch remained in his office with verifiable digital activity logs. Raymond Holt was fooled by the video loop, and Sanjay Patel was confirmed in the basement by badge telemetry.'
      }
    }
  },
  {
    id: 'case-008',
    caseNumber: 'CASE-008',
    title: 'The Vault of Seven Keys',
    category: 'robbery',
    categoryDisplay: 'Robbery & Heist',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-30 MIN',
    shortDescription: 'Bearer bonds worth £30 million vanish from an underground vault requiring seven simultaneous key turns.',
    fullStory: `At Zurich-City Depository, Vault 7 requires seven unique physical keys turned simultaneously by seven different trustees to release the pneumatic time-lock. At 10:00 AM on Monday, all seven trustees gathered, inserted their keys, and swung open the 12-ton door to audit the gold reserves and bearer bonds.

To their horror, Bond Box 14 was empty. The bonds had been logged inside during the Friday afternoon locking ceremony. The vault had remained under continuous biometric monitoring, and no alarms had tripped over the weekend. Furthermore, the electronic lock logs showed that the door was never opened between Friday 5:00 PM and Monday 10:00 AM. One of the keyholders had pulled off an impossible heist from within the system.`,
    setting: 'Zurich-City Depository, Financial District',
    tags: ['Bank Vault', 'Seven Keys', 'Impossible Theft', 'Chemistry'],
    suspects: [
      {
        id: 'susp-023',
        name: 'Heinrich Krause',
        age: 57,
        occupation: 'Chief Vault Master',
        relationToCase: 'Keyholder 1; custodian of the central locking wheel',
        alibi: 'Spent the weekend in Bern at an alpine lodge; passport stamped at railway station.',
        motive: 'Facing a multi-million franc margin call on speculative currency options.',
        knownFacts: [
          'Designed the pneumatic pressure seal 15 years ago.',
          'Carried an unusually dense briefcase into the Friday locking ceremony.'
        ],
        statement: 'The vault cannot be breached without all seven of us. The laws of physics dictate the bonds were inside when we turned the keys on Friday.'
      },
      {
        id: 'susp-024',
        name: 'Dr. Greta Weber',
        age: 49,
        occupation: 'Materials Chemist & Auditor',
        relationToCase: 'Keyholder 4; inspects chemical security seals',
        alibi: 'Attended an academic symposium in Basel over the weekend.',
        motive: 'Funding a private biotechnology startup.',
        knownFacts: [
          'Expert on rapid sublimation and phase-change polymers.',
          'Noticed moisture on the interior vault floor on Monday morning.'
        ],
        statement: 'When we locked the vault on Friday, Box 14 registered the exact required weight on the balance scale.'
      },
      {
        id: 'susp-025',
        name: 'Stefan Meyer',
        age: 42,
        occupation: 'Senior Compliance Officer',
        relationToCase: 'Keyholder 7; verifies serial numbers',
        alibi: 'At home with family in Zurich; confirmed by domestic surveillance.',
        motive: 'Under investigation for insider trading.',
        knownFacts: [
          'Had no technical access to the pneumatic door hydraulics.'
        ],
        statement: 'I verified the seal numbers on Friday at 4:58 PM myself. Everything was in order.'
      }
    ],
    evidence: [
      {
        id: 'ev-024',
        code: 'EV-24',
        title: 'High-Density Dry Ice Residue in Box 14',
        type: 'physical',
        category: 'Forensic Chemistry',
        collectedAt: 'Oct 17, 11:30 AM',
        locationFound: 'Inside Bond Box 14',
        summary: 'Condensed water droplets and cryogenic carbon dioxide sublimation traces.',
        detailedContent: 'Box 14 contained traces of food-grade dry ice compressed into blocks matching the exact dimensions and weight of the £30 million bearer bond bundle. Over the 60-hour weekend, the dry ice block sublimated completely into carbon dioxide gas, which vented harmlessly through the vault air scrubbers.'
      },
      {
        id: 'ev-025',
        code: 'EV-25',
        title: 'Friday Afternoon Courier Manifest',
        type: 'document',
        category: 'Logistics',
        collectedAt: 'Oct 17, 01:00 PM',
        locationFound: 'Secure courier bay',
        summary: 'Package dispatched by Heinrich Krause at 4:30 PM on Friday.',
        detailedContent: 'Krause dispatched a sealed diplomatic courier pouch to a private vault in Geneva at 4:30 PM on Friday—thirty minutes before the locking ceremony. The manifest described it as "personal legal files", but the declared weight was precisely 14.2 kg—the exact weight of the bearer bonds.'
      }
    ],
    timeline: [
      {
        id: 'time-030',
        time: '04:15 PM (Fri)',
        order: 1,
        title: 'Pre-Locking Preparation',
        description: 'Heinrich Krause audits Box 14 alone in the preparation anteroom.',
        location: 'Anteroom 7'
      },
      {
        id: 'time-031',
        time: '04:30 PM (Fri)',
        order: 2,
        title: 'Courier Dispatched',
        description: 'Krause hands a 14.2 kg pouch to an armored courier.',
        location: 'Courier Bay'
      },
      {
        id: 'time-032',
        time: '05:00 PM (Fri)',
        order: 3,
        title: 'Seven Keys Ceremony',
        description: 'All seven keyholders turn their keys; weight scale confirms correct mass.',
        location: 'Vault 7 Entrance'
      },
      {
        id: 'time-033',
        time: '10:00 AM (Mon)',
        order: 4,
        title: 'Vault Reopened',
        description: 'All seven keys turned; Box 14 is empty with moisture inside.',
        location: 'Vault 7'
      }
    ],
    witnesses: [
      {
        id: 'wit-009',
        witnessName: 'Ernst Vogel',
        role: 'Depository Guard',
        interviewTime: 'Oct 17, 12:15 PM',
        statement: 'Mr. Krause carried a heavy insulated cooler into the preparation room on Friday afternoon, saying he brought frozen gourmet salmon for the weekend.',
        contradictionHint: 'The cooler carried the dry ice blocks used to substitute the weight.'
      }
    ],
    locations: [
      {
        id: 'loc-009',
        name: 'Vault 7 Interior',
        description: 'Subterranean steel vault with pneumatic time-lock and filtered ventilation.',
        accessible: true,
        notes: 'Air scrubbers remove ambient carbon dioxide continuously.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Balance Scale Trick',
        text: 'The bonds were weighed inside Box 14 before locking. What solid material can simulate weight and then disappear entirely without a trace over 60 hours?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'Timing of the Theft',
        text: 'The bonds were not stolen during the weekend. They were stolen BEFORE the door was ever locked on Friday afternoon.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Courier Pouch',
        text: 'Krause swapped the bonds for dry ice in the anteroom, dispatched the bonds via courier at 4:30 PM, and let the ice fool the scale at 5:00 PM before it evaporated.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-023',
      methodId: 'method-029',
      motiveId: 'motive-029',
      criticalEvidenceIds: ['ev-024', 'ev-025'],
      methodOptions: [
        { id: 'method-029', text: 'Substituted the bonds with calibrated dry ice blocks prior to the ceremony, dispatched the bonds via courier at 4:30 PM, and allowed the ice to sublimate over the weekend.' },
        { id: 'method-030', text: 'Cloned all seven physical keys using 3D laser imaging and entered the vault at 3:00 AM on Sunday.' },
        { id: 'method-031', text: 'Drilled a micro-tunnel through the adjoining subway foundation wall.' },
        { id: 'method-032', text: 'Hacked the pneumatic pressure sensors to report false weight telemetry.' }
      ],
      motiveOptions: [
        { id: 'motive-029', text: 'To pay off an imminent multi-million franc margin call on currency speculation.' },
        { id: 'motive-030', text: 'To fund an offshore biotechnology research laboratory.' },
        { id: 'motive-031', text: 'To frame Dr. Greta Weber for regulatory malpractice.' },
        { id: 'motive-032', text: 'To trigger an insurance collapse of the Zurich depository.' }
      ],
      fullExplanation: {
        whatHappened: 'Chief Vault Master Heinrich Krause stole £30 million in bearer bonds before the vault was ever locked, substituting them with dry ice to trick the weight balance.',
        howItWasDone: 'During private pre-inspection in the anteroom, Krause removed the 14.2 kg bond bundle and replaced it with identical-weight dry ice blocks brought in an insulated cooler. At 4:30 PM, he handed the stolen bonds to an armored courier dispatched to Geneva. At 5:00 PM, the seven keyholders locked the vault; the balance scale read perfectly normal. Over the weekend, the dry ice completely sublimated into carbon dioxide gas, which was expelled by the air scrubbers.',
        whyItHappened: 'Krause faced financial ruination from catastrophic foreign exchange losses and needed liquid bearer bonds that could not be electronically tracked or canceled.',
        decisiveEvidenceWalkthrough: 'EV-24 confirmed cryogenic dry ice residue in Box 14. EV-25 uncovered Krause’s 14.2 kg courier pouch shipped 30 minutes before vault locking.',
        whyOthersAreInnocent: 'Dr. Weber and Stefan Meyer were never alone with Box 14 and had no contact with external couriers on Friday afternoon.'
      }
    }
  },
  {
    id: 'case-009',
    caseNumber: 'CASE-009',
    title: 'The Phantom Freight',
    category: 'robbery',
    categoryDisplay: 'Robbery & Heist',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'Gold bullion worth £8 million on a sealed armored freight car is replaced by painted lead bars while moving across the Pennines.',
    fullStory: `An armored freight train departed the Royal Mint depot in Newcastle at 1:00 AM bound for Leeds. Carriage 4 carried 120 gold bullion bars inside steel welded strongboxes. The car doors were secured with heavy tamper-evident electronic cable seals.

Upon arrival in Leeds at 4:30 AM, the cable seals were intact and verified against the shipping manifest. However, when the strongboxes were unbolted in the Leeds terminal, the contents were found to be painted lead ingots weighing the exact same mass. The train had stopped only once for seven minutes at a signal delay near High Moor Junction. Three crew members were aboard: Train Driver Patrick Murphy, Armed Guard Captain Donald Vance, and Rail Dispatcher Kenneth Cole.`,
    setting: 'Trans-Pennine Armored Freight Route',
    tags: ['Train Robbery', 'Gold Substitution', 'Cable Seal Bypass', 'Heist'],
    suspects: [
      {
        id: 'susp-026',
        name: 'Patrick Murphy',
        age: 48,
        occupation: 'Senior Train Driver',
        relationToCase: 'Controlled the locomotive throttle and braking',
        alibi: 'In the locomotive cab operating the engine; speedometer logs confirm schedule.',
        motive: 'Facing union disciplinary action and heavy mortgage arrears.',
        knownFacts: [
          'Engine cab is isolated from Carriage 4 by three locked tender bulkheads.',
          'Brake air pressure logs show a brief unauthorized pressure drop near High Moor.'
        ],
        statement: 'The red signal caught me at High Moor. I waited seven minutes until the dispatcher cleared the line.'
      },
      {
        id: 'susp-027',
        name: 'Donald Vance',
        age: 45,
        occupation: 'Armed Guard Captain',
        relationToCase: 'Stationed in the guard caboose directly behind Carriage 4',
        alibi: 'Monitoring the electronic seal receiver in the guard caboose.',
        motive: 'Ex-military specialist with connections to international metal brokers.',
        knownFacts: [
          'Possesses seal crimping tools and duplicate serial number stamping dies.',
          'Had access to the roof gangway connecting the caboose to Carriage 4.'
        ],
        statement: 'The digital seal loop never broke. If anyone touched that door, an alarm would have shrieked on my console.'
      },
      {
        id: 'susp-028',
        name: 'Kenneth Cole',
        age: 39,
        occupation: 'Regional Rail Dispatcher',
        relationToCase: 'Managed track signaling from the central tower',
        alibi: 'In the dispatch tower 30 miles away.',
        motive: 'Distant cousin of a notorious cargo hijacking syndicate.',
        knownFacts: [
          'Toggled the signal light to red at High Moor citing "track maintenance".'
        ],
        statement: 'A sensor reported debris on the rails at High Moor. Standard safety protocol required a stop.'
      }
    ],
    evidence: [
      {
        id: 'ev-026',
        code: 'EV-26',
        title: 'Roof Hatch Hinges on Carriage 4',
        type: 'physical',
        category: 'Mechanical Inspection',
        collectedAt: 'Oct 29, 06:00 AM',
        locationFound: 'Carriage 4 roof',
        summary: 'Freshly oiled bolts on the non-alarmed emergency roof ventilation hatch.',
        detailedContent: 'While the main side doors had electronic cable seals, the roof ventilation hatch had its interior locking pin removed from within prior to departure. A portable rope ladder was anchored to the roof catwalk.'
      },
      {
        id: 'ev-027',
        code: 'EV-27',
        title: 'Pre-Loaded Flatbed Truck at High Moor Quarry',
        type: 'physical',
        category: 'Field Evidence',
        collectedAt: 'Oct 29, 07:30 AM',
        locationFound: 'High Moor abandoned rail siding',
        summary: 'Abandoned flatbed truck containing hydraulic crane and lead ingot molds.',
        detailedContent: 'Tire tracks and gold shavings reveal that during the scheduled 7-minute stop, an external team coordinated by Vance used an overhead quarry gantry crane to swap the crates through the roof hatch.'
      },
      {
        id: 'ev-028',
        code: 'EV-28',
        title: 'Encrypted Radio Log between Vance and Tower',
        type: 'digital',
        category: 'Communications',
        collectedAt: 'Oct 29, 08:00 AM',
        locationFound: 'Dispatcher tower recording spool',
        summary: 'Shortwave radio transmission at 2:44 AM.',
        detailedContent: 'Dispatcher Cole radioed Vance using an unmonitored maintenance frequency: "Signal is red. Package ready for crane transfer at High Moor."'
      }
    ],
    timeline: [
      {
        id: 'time-034',
        time: '01:00 AM',
        order: 1,
        title: 'Departure from Newcastle',
        description: 'Armored train departs with verified gold bullion.',
        location: 'Newcastle Rail Yard'
      },
      {
        id: 'time-035',
        time: '02:40 AM',
        order: 2,
        title: 'High Moor Stop',
        description: 'Train comes to a halt at a red signal beside the disused quarry siding.',
        location: 'High Moor Junction'
      },
      {
        id: 'time-036',
        time: '02:47 AM',
        order: 3,
        title: 'Signal Cleared',
        description: 'Signal turns green; train resumes speed.',
        location: 'High Moor Junction'
      },
      {
        id: 'time-037',
        time: '04:30 AM',
        order: 4,
        title: 'Arrival in Leeds',
        description: 'Lead bars discovered inside strongboxes.',
        location: 'Leeds Depot'
      }
    ],
    witnesses: [
      {
        id: 'wit-010',
        witnessName: 'Patrick Murphy',
        role: 'Train Driver',
        interviewTime: 'Oct 29, 05:30 AM',
        statement: 'When we stopped at High Moor, I noticed the overhead floodlights at the old quarry suddenly turned on for five minutes, then shut off as soon as the signal cleared.',
        contradictionHint: 'Confirms activity at the quarry during the exact minutes of the stop.'
      }
    ],
    locations: [
      {
        id: 'loc-010',
        name: 'High Moor Rail Siding',
        description: 'Abandoned quarry junction equipped with an overhead industrial gantry crane.',
        accessible: true,
        notes: 'Rail track runs directly beneath the quarry loading crane.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Bypassing the Electronic Seals',
        text: 'The electronic cable seals on the side doors were never opened. Where else could cargo be moved in or out of the carriage?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Seven-Minute Delay',
        text: 'The stop at High Moor was deliberately coordinated by Dispatcher Cole and Guard Captain Vance.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'Roof Hatch and Quarry Crane',
        text: 'Vance unpinned the roof hatch beforehand; an overhead crane swapped the crates through the roof at High Moor while the side door seals remained untouched.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-027',
      methodId: 'method-033',
      motiveId: 'motive-033',
      criticalEvidenceIds: ['ev-026', 'ev-027', 'ev-028'],
      methodOptions: [
        { id: 'method-033', text: 'Unpinned the non-alarmed roof hatch beforehand, arranged a false signal halt at High Moor with Dispatcher Cole, and swapped the gold crates with lead via an overhead quarry crane.' },
        { id: 'method-034', text: 'Threw the gold bars into trackside snow drifts while moving at 60 mph.' },
        { id: 'method-035', text: 'Cloned the electronic cable seals and unlocked the side doors at the terminal.' },
        { id: 'method-036', text: 'Smuggled the bullion inside the locomotive coal tender.' }
      ],
      motiveOptions: [
        { id: 'motive-033', text: 'Headed an organized heist syndicate to sell the bullion to overseas black-market smelters.' },
        { id: 'motive-034', text: 'To pay off Patrick Murphy’s mortgage debts.' },
        { id: 'motive-035', text: 'To bankrupt the Royal Mint transport contractor.' },
        { id: 'motive-036', text: 'Political protest against high metal tariffs.' }
      ],
      fullExplanation: {
        whatHappened: 'Guard Captain Donald Vance conspired with Dispatcher Kenneth Cole to execute an aerial crane cargo swap through the roof of Carriage 4 during a staged signal stop.',
        howItWasDone: 'Vance removed the interior bolts of the roof hatch before departure, leaving the side door cable seals completely intact. Dispatcher Cole generated a false red signal at High Moor Quarry. During the seven-minute halt, an accomplice crew using an overhead quarry crane hoisted out the gold crates through the roof hatch and lowered identical-weight lead ingots, leaving the electronic door sensors undisturbed.',
        whyItHappened: 'Vance and Cole organized the heist with an overseas smuggling syndicate for an £8 million payout.',
        decisiveEvidenceWalkthrough: 'EV-26 proved the roof hatch was unbolted. EV-27 found the quarry crane and gold shavings at High Moor. EV-28 captured the radio transmission coordinating the stop.',
        whyOthersAreInnocent: 'Driver Murphy was locked inside the locomotive cab separated by three sealed bulkheads, completely unaware of the roof crane transfer.'
      }
    }
  },
  {
    id: 'case-010',
    caseNumber: 'CASE-010',
    title: 'The Royal Peacock Brooch',
    category: 'robbery',
    categoryDisplay: 'Robbery & Heist',
    difficulty: 2,
    difficultyLabel: 'Investigator',
    estimatedTime: '20-25 MIN',
    shortDescription: 'During an 18-second blackout at a charity gala, an 18th-century sapphire brooch was snatched from the neck of a countess.',
    fullStory: `At 10:15 PM at the Grand Elysium Hotel Ballroom, Countess Cecily Montgomery was mingling during the annual heritage gala. Without warning, the main chandelier and stage spotlights extinguished in an electrical blackout lasting exactly 18 seconds.

When emergency battery lights flickered on, Countess Cecily gasped as her clasp swung empty: the historic Royal Peacock Brooch—encrusted with 120 diamonds and a 30-carat Kashmir sapphire—had been cleanly sheared from her gown. A waiter was standing right behind her with a spilled champagne tray, her ex-husband was at her side offering his arm, and an illusionist who had just concluded his stage performance was exiting the banquet floor.`,
    setting: 'Grand Elysium Hotel Ballroom, Mayfair',
    tags: ['Jewel Robbery', 'Blackout', 'Gala Heist', 'Sleight of Hand'],
    suspects: [
      {
        id: 'susp-029',
        name: 'Julian Montgomery',
        age: 46,
        occupation: 'Ex-Husband & Art Collector',
        relationToCase: 'Stood immediately to the Countess’s right during the blackout',
        alibi: 'Claims he grabbed Cecily’s arm to prevent her from falling in the dark.',
        motive: 'Claimed the brooch was Montgomery family ancestral patrimony improperly retained after the divorce.',
        knownFacts: [
          'Wore an immaculate tuxedo with no hidden pockets.',
          'Had empty hands when lights restored.'
        ],
        statement: 'I held Cecily steady. I wanted the brooch back through courts, not petty theft.'
      },
      {
        id: 'susp-030',
        name: 'Felix the Magnificent',
        age: 35,
        occupation: 'Stage Illusionist',
        relationToCase: 'Performed prestidigitation and pickpocket magic for guests earlier',
        alibi: 'Packing his stage props near the sound booth during the blackout.',
        motive: 'Substantial debts to casino syndicates in Monte Carlo.',
        knownFacts: [
          'Expert in rapid clasp clipping and sleight-of-hand.',
          'His assistant was standing directly beside the hotel electrical breaker panel.',
          'Carried magnetic prop rings capable of attracting precious jewelry.'
        ],
        statement: 'My performance ended at 10:00 PM. I was packing my cards and doves at the rear of the ballroom.'
      },
      {
        id: 'susp-031',
        name: 'Marco Rossi',
        age: 24,
        occupation: 'Catering Waiter',
        relationToCase: 'Spilled a tray of champagne flutes onto the Countess’s dress',
        alibi: 'Tripped in the dark when the power cut out.',
        motive: 'Working for a luxury hotel catering agency for three weeks.',
        knownFacts: [
          'Searched thoroughly by security; no jewelry found on his person.'
        ],
        statement: 'Someone shoved into me in the pitch dark and my tray crashed. I was on my knees picking up broken glass.'
      }
    ],
    evidence: [
      {
        id: 'ev-029',
        code: 'EV-29',
        title: 'Micro-Wire Shears in Stage Prop Trunk',
        type: 'physical',
        category: 'Tools',
        collectedAt: 'Nov 04, 11:00 PM',
        locationFound: 'Felix’s illusionist road case',
        summary: 'Spring-loaded jewelry shears with platinum wire fibers on the blades.',
        detailedContent: 'The miniature surgical steel shears were hidden inside the false bottom of Felix’s magic wand case. Metallurgical analysis confirmed fibers matching the platinum setting of the Peacock Brooch.'
      },
      {
        id: 'ev-030',
        code: 'EV-30',
        title: 'Breaker Panel Tamper Device',
        type: 'digital',
        category: 'Electrical Forensics',
        collectedAt: 'Nov 04, 11:20 PM',
        locationFound: 'Basement utility closet',
        summary: 'A wireless countdown relay attached to the main ballroom circuit breaker.',
        detailedContent: 'The relay was programmed to short the lighting breaker for exactly 18 seconds before automatically resetting. Bluetooth pairing logs showed it was linked to an iPad registered to Felix’s stage crew.'
      },
      {
        id: 'ev-031',
        code: 'EV-31',
        title: 'Doves Cage Inspection',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Nov 04, 11:45 PM',
        locationFound: 'Felix’s prop van in alleyway',
        summary: 'The Royal Peacock Brooch secured inside the harness of a white stage dove.',
        detailedContent: 'The brooch was wrapped in soft felt and clipped inside the release harness of Felix’s trained stage dove, ready to be driven off without triggering body metal detectors.'
      }
    ],
    timeline: [
      {
        id: 'time-038',
        time: '10:00 PM',
        order: 1,
        title: 'Stage Show Ends',
        description: 'Felix concludes his performance and takes a bow.',
        location: 'Main Ballroom Stage'
      },
      {
        id: 'time-039',
        time: '10:14 PM',
        order: 2,
        title: 'Champagne Serving',
        description: 'Waiter Marco Rossi circulates near Countess Cecily.',
        location: 'Ballroom Center'
      },
      {
        id: 'time-040',
        time: '10:15 PM',
        order: 3,
        title: 'The 18-Second Blackout',
        description: 'Lights go dark; champagne tray shatters; jewelry sheared.',
        location: 'Ballroom'
      },
      {
        id: 'time-041',
        time: '10:16 PM',
        order: 4,
        title: 'Emergency Lights On',
        description: 'Brooch discovered missing from Countess Cecily’s gown.',
        location: 'Ballroom'
      }
    ],
    witnesses: [
      {
        id: 'wit-011',
        witnessName: 'Lady Beatrice Thorne',
        role: 'Gala Guest',
        interviewTime: 'Nov 04, 10:40 PM',
        statement: 'Right before the lights went out, I saw Felix’s stage assistant standing suspiciously by the utility door holding a tablet computer.',
        contradictionHint: 'Ties the electrical blackout directly to Felix’s crew.'
      }
    ],
    locations: [
      {
        id: 'loc-011',
        name: 'Grand Ballroom',
        description: 'Opulent hall with chandelier and stage area.',
        accessible: true,
        notes: 'Equipped with perimeter metal detectors at all guest exits.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Cause of the Blackout',
        text: 'The blackout was not an accident; it lasted precisely 18 seconds due to a programmed electronic relay.',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'Metal Detector Avoidance',
        text: 'The thief knew guests would be searched at the door. Where would an illusionist hide a stolen jewel to bypass personal search?',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'Check the Doves',
        text: 'Felix clipped the brooch in the dark using precision shears, then hid it in the harness of his trained stage dove in his prop van.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-030',
      methodId: 'method-037',
      motiveId: 'motive-037',
      criticalEvidenceIds: ['ev-029', 'ev-030', 'ev-031'],
      methodOptions: [
        { id: 'method-037', text: 'Triggered an 18-second breaker blackout via wireless relay, sheared the brooch clasp with micro-shears, and concealed it inside his stage dove’s flight harness.' },
        { id: 'method-038', text: 'Bribed waiter Marco Rossi to drop the brooch into a pitcher of ice water.' },
        { id: 'method-039', text: 'Used a magnetic drone to lift the brooch through an open skylight.' },
        { id: 'method-040', text: 'Swapped the real brooch with a replica during a card trick earlier in the evening.' }
      ],
      motiveOptions: [
        { id: 'motive-037', text: 'To liquidate the £2 million sapphire brooch to satisfy crippling casino debts in Monte Carlo.' },
        { id: 'motive-038', text: 'To return the heirloom to Julian Montgomery’s estate.' },
        { id: 'motive-039', text: 'To prove his sleight-of-hand superiority to the Magic Circle.' },
        { id: 'motive-040', text: 'To frame catering staff for insurance payouts.' }
      ],
      fullExplanation: {
        whatHappened: 'Illusionist Felix the Magnificent stole the Royal Peacock Brooch under cover of a staged 18-second blackout and concealed it inside a trained dove harness.',
        howItWasDone: 'Felix’s assistant rigged a wireless timer relay to the ballroom breaker box. During the blackout, Felix used sleight of hand and micro-wire shears to snip the brooch from Countess Cecily’s gown, bumping the waiter to create acoustic chaos. He slipped the jewel into his prop case and fastened it to a trained dove in his van, allowing him to pass personal pat-downs at the exit.',
        whyItHappened: 'Felix was pursued by aggressive Monte Carlo casino creditors demanding £500,000 within 48 hours.',
        decisiveEvidenceWalkthrough: 'EV-29 found the platinum-cutting micro-shears in his wand case. EV-30 proved his tablet controlled the 18-second power trip. EV-31 recovered the brooch strapped to his stage dove.',
        whyOthersAreInnocent: 'Julian Montgomery had empty hands and no cutting tools, and waiter Marco Rossi was knocked down with broken glass and was completely clear upon searching.'
      }
    }
  },
  {
    id: 'case-011',
    caseNumber: 'CASE-011',
    title: 'The Stolen Renaissance Folio',
    category: 'robbery',
    categoryDisplay: 'Robbery & Heist',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'A 1512 illuminated manuscript by Leonardo da Vinci vanishes from an airtight archival vault in Cambridge.',
    fullStory: `At 7:00 AM on Monday, archival staff at the Cambridge Antiquities Vault unlocked the environmental chamber to prepare for visiting scholars. Display Cradle 2 was empty. The 1512 Renaissance Folio containing Leonardo’s botanical sketches was gone.

The chamber is maintained at 18°C and 45% relative humidity with laser tripwires crisscrossing every square foot. No laser alarm sounded, and the pressure seals showed no air leak. Three academics had clearance to enter the outer vault corridor over the weekend: Archival Director Dr. Simon Drake, Visiting Italian Fellow Dr. Lucia Bellini, and Graduate Research Fellow Oliver Finch.`,
    setting: 'Cambridge Antiquities Archive, Rare Manuscripts Wing',
    tags: ['Art Theft', 'Manuscript', 'Laser Sensor Bypass', 'Heist'],
    suspects: [
      {
        id: 'susp-032',
        name: 'Dr. Simon Drake',
        age: 58,
        occupation: 'Archival Director',
        relationToCase: 'Author of the security protocol',
        alibi: 'Attending an alumni faculty dinner on Saturday night.',
        motive: 'Embezzling endowment acquisitions to cover luxury renovations.',
        knownFacts: [
          'Knew the exact wavelength of the laser detection grid.',
          'His electronic badge was swiped at the outer gate on Saturday at 11:15 PM.'
        ],
        statement: 'I popped in to collect my lecture notes. I never stepped foot into the climate chamber.'
      },
      {
        id: 'susp-033',
        name: 'Dr. Lucia Bellini',
        age: 41,
        occupation: 'Visiting Italian Scholar',
        relationToCase: 'Specialist in Leonardo manuscripts',
        alibi: 'Working in the guest library study from 8:00 PM to midnight.',
        motive: 'Believed the manuscript belonged in Florence and campaigned for repatriation.',
        knownFacts: [
          'Wrote academic papers on Da Vinci ink compositions.',
          'Had her passport ready for an early Monday morning flight.'
        ],
        statement: 'I cherish this folio. Stealing it would expose the delicate parchment to dangerous humidity fluctuations.'
      },
      {
        id: 'susp-034',
        name: 'Oliver Finch',
        age: 26,
        occupation: 'Graduate Fellow & Lab Assistant',
        relationToCase: 'Maintained the laser sensor calibrations',
        alibi: 'Claims he was in his dormitory room studying.',
        motive: 'Struggling with student debt and seeking dealer finder fees.',
        knownFacts: [
          'Possessed optical mirror alignment tools.',
          'Purchased specialized retro-reflective mirrors online.'
        ],
        statement: 'I only calibrate the lasers on Friday afternoons. After that, the system is completely autonomous.'
      }
    ],
    evidence: [
      {
        id: 'ev-032',
        code: 'EV-32',
        title: 'Retro-Reflective Mirror Bypasses',
        type: 'physical',
        category: 'Optical Forensics',
        collectedAt: 'Nov 09, 08:30 AM',
        locationFound: 'Inside laser emitter housings',
        summary: 'Miniature magnetic mirrors redirecting laser beams back to sensors.',
        detailedContent: 'Two precision optical beam splitters were fixed directly onto the laser emitters with low-residue museum putty. The mirrors bent the tripwire beams around the center aisle, leaving an unmonitored walking channel 18 inches wide directly to Cradle 2.'
      },
      {
        id: 'ev-033',
        code: 'EV-33',
        title: 'Custom Hermetic Carrying Tube',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Nov 09, 10:15 AM',
        locationFound: 'Dr. Drake’s private archival locker',
        summary: 'Nitrogen-flushed climate canister containing the stolen Leonardo Folio.',
        detailedContent: 'The custom titanium archival cylinder was packed with inert argon gas matching the vault chamber’s exact composition. Drake’s private thumbprint was found on the sealing gasket.'
      }
    ],
    timeline: [
      {
        id: 'time-042',
        time: 'Friday 05:00 PM',
        order: 1,
        title: 'Vault Sealed',
        description: 'Weekly environmental lock engaged; all lasers active.',
        location: 'Archive Chamber'
      },
      {
        id: 'time-043',
        time: 'Saturday 11:15 PM',
        order: 2,
        title: 'Drake Outer Badge Swipe',
        description: 'Dr. Drake enters outer reading room for 35 minutes.',
        location: 'Outer Gate'
      },
      {
        id: 'time-044',
        time: 'Monday 07:00 AM',
        order: 3,
        title: 'Discovery',
        description: 'Folio discovered missing from Cradle 2.',
        location: 'Display Cradle 2'
      }
    ],
    witnesses: [
      {
        id: 'wit-012',
        witnessName: 'Night Porter Terry Walsh',
        role: 'Campus Night Guard',
        interviewTime: 'Nov 09, 09:00 AM',
        statement: 'Dr. Drake told me he forgot his speech notes when he came in late Saturday. But he was carrying a long cylindrical leather umbrella case that looked surprisingly rigid.',
        contradictionHint: 'The cylinder was the hermetic manuscript transport tube.'
      }
    ],
    locations: [
      {
        id: 'loc-012',
        name: 'Antiquities Vault Chamber',
        description: 'Hermetically sealed archive with multi-axis laser trip grid.',
        accessible: true,
        notes: 'Parchment requires strict humidity control.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Laser Physics',
        text: 'The laser alarm never sounded because the beams were bounced around the aisle using mirrors attached with museum-grade putty.',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Rigid Umbrella Case',
        text: 'The night guard saw Dr. Drake carrying a cylindrical tube into the building on Saturday night.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Nitrogen Canister in the Locker',
        text: 'Dr. Drake used his inside knowledge of the laser frequencies and argon climate systems to steal the folio for private sale.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-032',
      methodId: 'method-041',
      motiveId: 'motive-041',
      criticalEvidenceIds: ['ev-032', 'ev-033'],
      methodOptions: [
        { id: 'method-041', text: 'Attached retro-reflective mirrors to bypass the laser grid, extracted the folio into an argon-pressurized transport tube, and stored it in his archival locker.' },
        { id: 'method-042', text: 'Cut through the chamber glass ceiling using a waterjet drill.' },
        { id: 'method-043', text: 'Replaced the real folio with a photographic facsimile during Friday calibration.' },
        { id: 'method-044', text: 'Hacked the security software to suppress laser trigger logs.' }
      ],
      motiveOptions: [
        { id: 'motive-041', text: 'To sell the manuscript to a private overseas buyer to cover personal embezzlement of university endowment funds.' },
        { id: 'motive-042', text: 'To repatriate the manuscript to Florence.' },
        { id: 'motive-043', text: 'To pay off student loans for Oliver Finch.' },
        { id: 'motive-044', text: 'To embarrass the university administration into upgrading security budgets.' }
      ],
      fullExplanation: {
        whatHappened: 'Archival Director Dr. Simon Drake bypassed his own laser security system to steal the Leonardo da Vinci folio for a private black-market sale.',
        howItWasDone: 'Drake entered the archives late Saturday night carrying an argon-flushed hermetic canister disguised as an umbrella case. Knowing the laser layout, he adhered optical retro-reflectors to the beam housings to bend the tripwires away from the aisle. He removed the folio without triggering any sensor alarms, sealed it in the canister, and stashed it in his personal locker.',
        whyItHappened: 'Drake was on the verge of being caught for embezzling over £500,000 from university funds and needed an immediate multimillion-pound sale.',
        decisiveEvidenceWalkthrough: 'EV-32 revealed the magnetic mirrors glued with museum putty. EV-33 recovered the manuscript with Drake’s thumbprint on the argon gasket inside his locker.',
        whyOthersAreInnocent: 'Dr. Bellini was in the public study under continuous camera surveillance, and student Finch lacked administrative access to the argon charging apparatus.'
      }
    }
  },
  {
    id: 'case-012',
    caseNumber: 'CASE-012',
    title: 'The Silent Heist at Meridian',
    category: 'robbery',
    categoryDisplay: 'Robbery & Heist',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '30-35 MIN',
    shortDescription: 'A physical cryptographic key card controlling a £500M cryptocurrency cold-storage treasury vanishes from an isolated Faraday room.',
    fullStory: `At Meridian Digital Custody, the master offline hardware security module (HSM) is housed in a subterranean Faraday cage shielded against all electromagnetic, radio, and cellular signals. The titanium key card required to sign multi-signature transactions was kept inside a dual-biometric safe.

At 9:00 AM on Wednesday, the safe was opened for the bi-weekly signature rotation. The titanium card was missing. The safe’s electronic keypad showed no unauthorized attempts, and both biometric scans (retinal and palm vein) were logged as successful at 2:14 AM. The building’s airlocks showed that only three executives were in the facility during the night: Chief Information Security Officer Karen Vance, Senior Cryptographer Dr. Alan Turing-Cole, and Facility Facilities Lead Marcus Brody.`,
    setting: 'Meridian Digital Custody, Underground Vault, Canary Wharf',
    tags: ['Cyber Heist', 'Cryptocurrency', 'Faraday Room', 'Biometric Spoofing'],
    suspects: [
      {
        id: 'susp-035',
        name: 'Karen Vance',
        age: 43,
        occupation: 'Chief Information Security Officer',
        relationToCase: 'Authorized retinal scan keyholder',
        alibi: 'Sleeping in the executive rest quarters between 1:00 AM and 6:00 AM.',
        motive: 'Held secret short positions against Meridian’s native token.',
        knownFacts: [
          'Underwent eye surgery three weeks ago.',
          'Possesses high-resolution 3D medical scanning equipment in her office.'
        ],
        statement: 'My eyes were checked after my procedure, but I was sound asleep in room 4B all night.'
      },
      {
        id: 'susp-036',
        name: 'Marcus Brody',
        age: 38,
        occupation: 'Head of Facilities & Physical Security',
        relationToCase: 'Maintained the biometric sensors and environmental airlocks',
        alibi: 'Conducting HVAC coolant maintenance on Level -2.',
        motive: 'Gambling losses and impending bankruptcy.',
        knownFacts: [
          'Had access to high-precision silicone casting compounds used for pipe sealing.',
          'Visited Karen’s office on Tuesday to clean air filters.',
          'Carried an industrial drone casing in his truck.'
        ],
        statement: 'I was cleaning coolant lines in the basement. I have no knowledge of cryptography.'
      },
      {
        id: 'susp-037',
        name: 'Dr. Alan Turing-Cole',
        age: 55,
        occupation: 'Chief Cryptographer',
        relationToCase: 'Palm vein scan keyholder',
        alibi: 'Running algorithmic simulations in the server lab.',
        motive: 'Dispute over cryptographic intellectual property ownership.',
        knownFacts: [
          'Remained in full view of lab camera monitors from midnight to 5:00 AM.'
        ],
        statement: 'The camera at my terminal proves I was working on elliptic curves all night.'
      }
    ],
    evidence: [
      {
        id: 'ev-034',
        code: 'EV-34',
        title: 'Gelatinous Silicone Palm Vein Replica',
        type: 'physical',
        category: 'Forensic Biometrics',
        collectedAt: 'Nov 15, 10:30 AM',
        locationFound: 'Waste bin inside Faraday room',
        summary: 'Synthetic silicone glove matching Alan’s sub-dermal vascular heat map.',
        detailedContent: 'A medical-grade conductive silicone mold infused with infrared-reactive wax was discovered in the bin. It was molded from the palm print Alan left on a coffee thermos in the breakroom.'
      },
      {
        id: 'ev-035',
        code: 'EV-35',
        title: 'High-Resolution Retinal Contact Lens Mold',
        type: 'physical',
        category: 'Biometric Fabrication',
        collectedAt: 'Nov 15, 11:00 AM',
        locationFound: 'Marcus Brody’s tool locker',
        summary: 'Rigid gas-permeable lens printed with Karen’s retinal capillary pattern.',
        detailedContent: 'Brody stole Karen’s post-operative ophthalmology scan files while "cleaning" her office computer on Tuesday. He printed the vascular map onto a contact lens using UV-curable conductive ink.'
      },
      {
        id: 'ev-036',
        code: 'EV-36',
        title: 'Titanium Key Card in Coolant Pipe Trap',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Nov 15, 01:00 PM',
        locationFound: 'HVAC Drain Trap beneath Faraday Cage',
        summary: 'The missing Meridian master hardware card.',
        detailedContent: 'Brody dropped the card down an HVAC air return vent in the Faraday room, intending to retrieve it from the basement drain during his maintenance shift.'
      }
    ],
    timeline: [
      {
        id: 'time-045',
        time: '01:30 AM',
        order: 1,
        title: 'Brody Begins HVAC Maintenance',
        description: 'Marcus Brody logs into the Level -2 environmental mechanical room.',
        location: 'Level -2'
      },
      {
        id: 'time-046',
        time: '02:14 AM',
        order: 2,
        title: 'Biometric Safe Access',
        description: 'Dual biometric authentication logged at the Faraday safe: Karen’s retina + Alan’s palm.',
        location: 'Faraday Safe'
      },
      {
        id: 'time-047',
        time: '09:00 AM',
        order: 3,
        title: 'Theft Discovered',
        description: 'Morning signature ceremony discovers empty safe.',
        location: 'Faraday Room'
      }
    ],
    witnesses: [
      {
        id: 'wit-013',
        witnessName: 'Night Guard Sam Kowalski',
        role: 'Airlock Security Guard',
        interviewTime: 'Nov 15, 10:00 AM',
        statement: 'Marcus was wearing heavy maintenance goggles when he entered the Faraday airlock around 2:00 AM, claiming he needed to check the atmospheric pressure dampers.',
        contradictionHint: 'The goggles concealed the specialized retinal contact lens.'
      }
    ],
    locations: [
      {
        id: 'loc-013',
        name: 'The Faraday Vault',
        description: 'Subterranean copper-mesh shielded chamber with zero wireless penetration.',
        accessible: true,
        notes: 'Equipped with dual biometric retinal and palm vein scanners.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Spoofing the Scanners',
        text: 'Both retinal and palm scans were logged at 2:14 AM, yet neither Karen nor Alan was inside the room. How could both biometrics be spoofed by a third party?',
        scorePenalty: 300
      },
      {
        level: 2,
        title: 'Access to the Files',
        text: 'Who had physical access to Karen’s office computer and Alan’s personal coffee thermos?',
        scorePenalty: 600
      },
      {
        level: 3,
        title: 'The HVAC Drain Trap',
        text: 'Marcus Brody synthesized the retinal lens from stolen medical records and used a conductive silicone glove to open the safe, dropping the card into the HVAC return duct.',
        scorePenalty: 900
      }
    ],
    solution: {
      culpritId: 'susp-036',
      methodId: 'method-045',
      motiveId: 'motive-045',
      criticalEvidenceIds: ['ev-034', 'ev-035', 'ev-036'],
      methodOptions: [
        { id: 'method-045', text: 'Fabricated a retinal contact lens from stolen eye surgery scans and a silicone palm mold from a coffee mug, spoofed the safe at 2:14 AM, and dropped the key card down the HVAC duct.' },
        { id: 'method-046', text: 'Bypassed the electromagnetic safe lock using a neodymium magnetic pulse device.' },
        { id: 'method-047', text: 'Hacked the biometric database from the server room using an SQL injection.' },
        { id: 'method-048', text: 'Coerced Karen Vance into opening the safe at gunpoint.' }
      ],
      motiveOptions: [
        { id: 'motive-045', text: 'To steal the crypto treasury key to settle crippling underworld gambling debts.' },
        { id: 'motive-046', text: 'To short Meridian’s stock for corporate profit.' },
        { id: 'motive-047', text: 'To destroy proprietary cryptographic algorithms.' },
        { id: 'motive-048', text: 'To frame Dr. Alan Turing-Cole.' }
      ],
      fullExplanation: {
        whatHappened: 'Head of Facilities Marcus Brody spoofed both executives’ biometrics to loot the master cryptographic card from the Faraday safe.',
        howItWasDone: 'Brody stole Karen’s ophthalmic retinal scans while servicing her office and printed a conductive contact lens. He also cast a silicone palm replica from Alan’s coffee mug. Wearing the lens and the glove, Brody entered the Faraday cage under the guise of damper repair, opened the safe at 2:14 AM, and dropped the card into the HVAC duct for later recovery.',
        whyItHappened: 'Brody was underwater with loan sharks and needed the cryptocurrency hardware key to authorize a £500M drain to offshore wallets.',
        decisiveEvidenceWalkthrough: 'EV-34 recovered the palm vein silicone mold in the bin. EV-35 found the retinal contact lens in Brody’s tool locker. EV-36 recovered the missing titanium card from the HVAC drain trap.',
        whyOthersAreInnocent: 'Karen was asleep in her quarters (corroborated by room telemetry) and Alan was on video in the server lab continuously.'
      }
    }
  }
];
