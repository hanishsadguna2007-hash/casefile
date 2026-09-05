import { Mystery } from '@/types/mystery';

export const crimeMysteries: Mystery[] = [
  {
    id: 'case-001',
    caseNumber: 'CASE-001',
    title: 'The Broken Hourglass',
    category: 'crime',
    categoryDisplay: 'Crime & Detective',
    difficulty: 2,
    difficultyLabel: 'Investigator',
    estimatedTime: '20-25 MIN',
    shortDescription: 'Horologist Arthur Vance was found dead inside his locked workshop. The room was bolted from the inside, with a shattered antique hourglass on the desk.',
    fullStory: `At 11:30 PM on October 14, Arthur Vance—a master clockmaker and collector—was discovered deceased in his private workshop at Vance Manor. The heavy mahogany door was locked from the inside with a solid brass deadbolt, and the windows were latched shut. On his workbench lay a shattered 16th-century Venetian hourglass filled with unusual violet sand, alongside an unfinished pocket watch. 

The medical examiner determined the cause of death was acute potassium cyanide inhalation occurring between 9:30 PM and 10:15 PM. Initial reports suggested suicide, but Vance had just that morning finalized a multi-million dollar museum acquisition. Furthermore, a fine filament of high-tensile nylon was discovered caught in the overhead ventilation grating directly above the workbench. Three individuals were present in the manor during the critical window: his ambitious nephew and apprentice Julian, his personal physician Dr. Elena Ramos, and his housekeeper Martha Higgins.`,
    setting: 'Vance Manor Workshop, Highgate, London',
    tags: ['Locked Room', 'Poison', 'Clockmaker', 'Will Dispute'],
    featured: true,
    suspects: [
      {
        id: 'susp-001',
        name: 'Julian Vance',
        age: 29,
        occupation: 'Apprentice Clockmaker & Nephew',
        relationToCase: 'Sole surviving blood heir to the Vance estate',
        alibi: 'Claims he was in the downstairs tool forge calibrating mainsprings between 9:00 PM and 10:30 PM with loud machinery operating.',
        motive: 'Substantial gambling debts and imminent disinheritance due to Arthur discovering his forgery of antique clock movements.',
        knownFacts: [
          'Possesses master watchmaking tweezers, high-tensile monofilament line, and precision mechanical tools.',
          'Had access to the second-floor ventilation access panel situated right behind his workbench.',
          'Purchased cyanide compounds six weeks ago claiming it was for electroplating watch dials.'
        ],
        statement: 'Uncle Arthur was eccentric and despondent lately. I was downstairs hammering gears all night. You can ask anyone—the forge clattered constantly.'
      },
      {
        id: 'susp-002',
        name: 'Dr. Elena Ramos',
        age: 46,
        occupation: 'Personal Physician',
        relationToCase: 'Attending doctor managing Arthur’s chronic cardiac condition',
        alibi: 'Claims she was in the manor library cataloging Arthur’s prescription logs from 9:15 PM to 10:20 PM.',
        motive: 'Arthur had recently threatened to report her to the medical board for prescription irregularities.',
        knownFacts: [
          'Had immediate access to pharmaceutical poisons.',
          'Carried a medical satchel which was found completely orderly.',
          'Was observed reading by the fireplace by Martha at 9:45 PM.'
        ],
        statement: 'Arthur’s heart was fragile, but he would never harm himself. I remained in the library until Martha brought tea.'
      },
      {
        id: 'susp-003',
        name: 'Martha Higgins',
        age: 58,
        occupation: 'Housekeeper',
        relationToCase: 'Manor housekeeper for 24 years',
        alibi: 'Prepped late evening herbal tea in the kitchen from 9:30 PM to 10:15 PM, then delivered trays to the library.',
        motive: 'Stood to receive a modest lifetime pension in Arthur’s existing will.',
        knownFacts: [
          'Holds spare keys to every room except the workshop deadbolt which can only be turned internally.',
          'Heard a sharp muffled glass shatter around 10:02 PM while in the scullery.'
        ],
        statement: 'Mr. Arthur always bolted his door when working on rare pieces. I knocked at 10:15 PM with his chamomile tea, but there was no reply.'
      }
    ],
    evidence: [
      {
        id: 'ev-001',
        code: 'EV-01',
        title: 'Shattered Venetian Hourglass',
        type: 'physical',
        category: 'Forensic Evidence',
        collectedAt: 'Oct 14, 11:45 PM',
        locationFound: 'Center workbench, directly under air vent',
        summary: 'Fragments of hand-blown glass mixed with violet quartz sand and crystalline potassium cyanide residue.',
        detailedContent: 'Chemical analysis reveals that the upper bulb of the hourglass contained fine potassium cyanide granules concealed beneath a layer of dyed quartz sand. When inverted, the toxic powder would dispense through the orifice. Microscopic inspection shows a microscopic puncture in the glass bulb plug and minute traces of monofilament line adhesive.'
      },
      {
        id: 'ev-002',
        code: 'EV-02',
        title: 'Nylon Monofilament in Ventilation Duct',
        type: 'physical',
        category: 'Ballistics & Rigging',
        collectedAt: 'Oct 15, 01:10 AM',
        locationFound: 'Ceiling ventilation duct above workbench',
        summary: '0.12mm high-tensile clear nylon filament threaded through the vent louvers leading to the forge duct.',
        detailedContent: 'The thread leads through the central chimney chase directly into the workshop below (the forge room occupied by Julian). A small lead counterweight was found looped through the grate, capable of tripping the interior door latch bolt when pulled taut from below.'
      },
      {
        id: 'ev-003',
        code: 'EV-03',
        title: 'Arthur’s Revised Will Draft',
        type: 'document',
        category: 'Legal Document',
        collectedAt: 'Oct 14, 11:55 PM',
        locationFound: 'Writing bureau drawer, unlocked',
        summary: 'Handwritten legal draft revoking all inheritances previously assigned to Julian Vance.',
        detailedContent: 'The document dated October 14 states: "Having discovered Julian’s deceitful counterfeit sales under the Vance hallmark, I hereby revoke all prior testaments and bequest my collection to the British Horological Institute." The notary appointment was set for the following morning at 9:00 AM.'
      },
      {
        id: 'ev-004',
        code: 'EV-04',
        title: 'Forge Noise & Power Log',
        type: 'digital',
        category: 'Equipment Telemetry',
        collectedAt: 'Oct 15, 02:00 AM',
        locationFound: 'Basement mechanical panel',
        summary: 'Automated trip-hammer run cycle logs.',
        detailedContent: 'The automated mechanical trip-hammer was engaged on a repeating cam timer at 9:05 PM, producing rhythmic banging sounds without requiring manual operator presence.'
      },
      {
        id: 'ev-005',
        code: 'EV-05',
        title: 'Workshop Deadbolt Mechanism Inspection',
        type: 'physical',
        category: 'Forensic Locksmithing',
        collectedAt: 'Oct 15, 02:30 AM',
        locationFound: 'Workshop interior door frame',
        summary: 'Scratch marks around the interior turn-knob.',
        detailedContent: 'Fine micro-abrasions were identified on the brass deadbolt thumb-turn. An identical monofilament loop was wound once around the turn-knob, run under the bottom door gap, and pulled from the hallway floorboard.'
      }
    ],
    timeline: [
      {
        id: 'time-001',
        time: '08:30 PM',
        order: 1,
        title: 'Dinner Concluded',
        description: 'Arthur Vance announces he will be in the workshop and does not wish to be disturbed under any circumstance.',
        location: 'Dining Hall'
      },
      {
        id: 'time-002',
        time: '09:05 PM',
        order: 2,
        title: 'Forge Noise Commences',
        description: 'Rhythmic mechanical hammer sounds begin echoing from Julian’s downstairs workshop.',
        location: 'Basement Forge'
      },
      {
        id: 'time-003',
        time: '09:45 PM',
        order: 3,
        title: 'Doctor Spotted in Library',
        description: 'Martha serves fresh water to Dr. Ramos, who is reading medical journals by the fire.',
        location: 'Library'
      },
      {
        id: 'time-004',
        time: '10:02 PM',
        order: 4,
        title: 'Muffled Glass Shatter',
        description: 'A sharp snap and shatter sound is heard through the ventilation trunking in the kitchen.',
        location: 'Kitchen / Vent Trunk'
      },
      {
        id: 'time-005',
        time: '10:15 PM',
        order: 5,
        title: 'Tea Tray Delivered',
        description: 'Martha knocks on the locked workshop door; receives no answer.',
        location: 'Workshop Corridor'
      },
      {
        id: 'time-006',
        time: '11:20 PM',
        order: 6,
        title: 'Door Forcibly Breached',
        description: 'Staff and police break the door panel to find Arthur collapsed across the workbench.',
        location: 'Workshop'
      }
    ],
    witnesses: [
      {
        id: 'wit-001',
        witnessName: 'Martha Higgins',
        role: 'Housekeeper',
        interviewTime: 'Oct 15, 01:30 AM',
        statement: 'Julian swore he was by the forge all evening. But when I went downstairs to fetch coal at 9:50 PM, the hammer was banging away on its own, and Julian wasn’t at his station.',
        contradictionHint: 'Contradicts Julian’s claim of continuous manual calibration.'
      },
      {
        id: 'wit-002',
        witnessName: 'Albert Croft',
        role: 'Manor Estate Guard',
        interviewTime: 'Oct 15, 02:15 AM',
        statement: 'Nobody entered or left the manor grounds. All perimeter gates remained locked from 8:00 PM onwards.',
        contradictionHint: 'Confirms the perpetrator was an internal resident.'
      }
    ],
    locations: [
      {
        id: 'loc-001',
        name: 'The Workshop',
        description: 'Second-floor vaulted room with workbench, ceiling air grate, and heavy deadbolted door.',
        accessible: true,
        notes: 'Door had to be forced open by crowbar from the outside.'
      },
      {
        id: 'loc-002',
        name: 'The Basement Forge',
        description: 'Contains automated trip-hammers, clock gear cutting lathes, and ventilation shaft access.',
        accessible: true,
        notes: 'Shaft directly connects vertically to the workshop ceiling.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Alibi Scrutiny',
        text: 'Examine the nature of the forge noise. Was a human hand actually operating the machinery continuously between 9:00 PM and 10:30 PM?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Locked-Room Rigging',
        text: 'Review the monofilament thread found in the ventilation duct and abrasions on the deadbolt. How could a door be bolted from outside after exiting?',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'Motive and Timeline Alignment',
        text: 'Julian knew his inheritance would be extinguished the very next morning at 9:00 AM. His watchmaking tools and monofilament thread match the rigging mechanism exactly.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-001',
      methodId: 'method-001',
      motiveId: 'motive-001',
      criticalEvidenceIds: ['ev-001', 'ev-002', 'ev-004', 'ev-005'],
      methodOptions: [
        { id: 'method-001', text: 'Poisoned the antique hourglass sand and locked the room from outside using rigged monofilament line through the door gap and ventilation duct.' },
        { id: 'method-002', text: 'Injected cyanide into Arthur’s evening tea and slipped the key back into the room through the keyhole.' },
        { id: 'method-003', text: 'Shot a poisoned dart through the window from the courtyard and sealed the window with wax.' },
        { id: 'method-004', text: 'Staged a suicide by placing cyanide in Arthur’s medicine bottle while in the library.' }
      ],
      motiveOptions: [
        { id: 'motive-001', text: 'To prevent the execution of Arthur’s revised will the next morning, which would disinherit Julian for selling forged antique clocks.' },
        { id: 'motive-002', text: 'To steal the 16th-century Venetian hourglass for an overseas black-market dealer.' },
        { id: 'motive-003', text: 'To silence Arthur regarding medical malpractice allegations before the medical board.' },
        { id: 'motive-004', text: 'Dispute over unpaid servant wages and inheritance of the manor grounds.' }
      ],
      fullExplanation: {
        whatHappened: 'Arthur Vance was murdered by his nephew Julian Vance to prevent the signing of a disinheriting will scheduled for 9:00 AM the following morning.',
        howItWasDone: 'Julian rigged an automated cam timer on the basement forge trip-hammer to fabricate a sound alibi. He loaded fine potassium cyanide powder into the upper chamber of the Venetian hourglass on Arthur’s bench. After Arthur inhaled the poison upon turning the glass, Julian stepped out, looped high-tensile monofilament around the deadbolt thumb-turn, led the line beneath the door and pulled it tight to throw the bolt from the hallway. He then retracted the door string and discarded the ventilation spool.',
        whyItHappened: 'Julian had racked up massive debts and was selling forged replicas using the Vance hallmark. Arthur discovered the fraud and drafted a revised will completely cutting Julian out of the family fortune.',
        decisiveEvidenceWalkthrough: 'EV-04 proved the forge hammer was running on an automated cam timer without Julian. EV-02 and EV-05 revealed the monofilament line and deadbolt micro-abrasions used to throw the interior lock from the exterior hallway. EV-01 confirmed cyanide was loaded into the hourglass.',
        whyOthersAreInnocent: 'Dr. Elena Ramos was seen by Martha reading in the library at 9:45 PM, and her satchel was untouched. Martha Higgins had no mechanical knowledge or access to monofilament rigging, and her testimony broke Julian’s false alibi.'
      }
    }
  },
  {
    id: 'case-002',
    caseNumber: 'CASE-002',
    title: 'The Midnight Courier',
    category: 'crime',
    categoryDisplay: 'Crime & Detective',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-30 MIN',
    shortDescription: 'A diplomatic courier carrying encrypted trade accords collapses on Platform 4 just before the midnight express departs.',
    fullStory: `At 11:52 PM at Saint Pancras International, diplomatic courier David Sterling was preparing to board the Night Express to Brussels. As he stood beside the sleeper carriage, he suddenly seized with respiratory paralysis and collapsed onto the platform tiles. Despite immediate CPR by station medics, he was pronounced dead at 12:08 AM. His locked leather dispatch case was still handcuffed to his left wrist, but the key hanging around his neck was missing, and the corner of the briefcase bore wet chemical residue.

Preliminary toxicology identified fatal contact absorption of dimethyl mercury compounded with a fast-acting neurotoxin. Three people had physical contact with Sterling on the platform in his final fifteen minutes: railway porter Liam Evans, fellow diplomat Sophie Laurent who shared an espresso with him at the kiosk, and transit police sergeant Marcus Kane who conducted an impromptu security badge inspection.`,
    setting: 'Platform 4, Saint Pancras Railway Station, London',
    tags: ['Poison', 'Diplomacy', 'Platform Murder', 'Contact Poison'],
    suspects: [
      {
        id: 'susp-004',
        name: 'Sophie Laurent',
        age: 38,
        occupation: 'Trade Attaché',
        relationToCase: 'Sterling’s diplomatic colleague traveling to the same summit',
        alibi: 'Claims she bought two espressos at the station café, handed one to David at 11:40 PM, and boarded Carriage B.',
        motive: 'Was being investigated by Sterling for leaking confidential bilateral maritime tariffs.',
        knownFacts: [
          'Purchased drinks using mobile pay at 11:38 PM.',
          'Wore cashmere gloves throughout the evening.',
          'Carried a diplomatic passport exempt from standard bag searches.'
        ],
        statement: 'David was anxious about the summit. We sipped our coffee, shook hands, and I went ahead to my compartment.'
      },
      {
        id: 'susp-005',
        name: 'Liam Evans',
        age: 26,
        occupation: 'Station Porter',
        relationToCase: 'Handled Sterling’s secondary luggage cart',
        alibi: 'Stowage of heavy trunks into the luggage van at the front of the train between 11:35 PM and 11:50 PM.',
        motive: 'Owed money to a loan shark syndicate known to traffic corporate intelligence.',
        knownFacts: [
          'Had grease stains on his uniform jacket.',
          'Briefly steadied Sterling when a luggage cart jostled past him at 11:42 PM.',
          'No chemical or laboratory background.'
        ],
        statement: 'A passenger bumped the cart. I grabbed Mr. Sterling’s elbow so he wouldn’t tumble into the track pit. That’s all.'
      },
      {
        id: 'susp-006',
        name: 'Sgt. Marcus Kane',
        age: 44,
        occupation: 'Railway Transit Police Sergeant',
        relationToCase: 'Inspected Sterling’s diplomatic badge on Platform 4',
        alibi: 'On scheduled perimeter foot patrol along Platform 3 and 4 from 11:30 PM onwards.',
        motive: 'Recently received an anonymous offshore deposit into a Swiss account.',
        knownFacts: [
          'Personally handled Sterling’s metal ID lanyard at 11:44 PM.',
          'Was wearing standard issue nitrile-lined tactical duty gloves.',
          'CCTV shows him dropping a small metallic item into a track ballast drain right after Sterling collapsed.'
        ],
        statement: 'Routine spot check for international express departures. I examined his credentials, saluted, and resumed my sweep.'
      }
    ],
    evidence: [
      {
        id: 'ev-006',
        code: 'EV-06',
        title: 'Sterling’s Metal ID Badge & Lanyard',
        type: 'physical',
        category: 'Forensics',
        collectedAt: 'Oct 22, 12:20 AM',
        locationFound: 'Around victim’s neck',
        summary: 'Micro-needle puncture and transdermal gel residue on the lanyard clasp.',
        detailedContent: 'The reverse clasp of the identification badge was coated with a DMSO-based transdermal neurotoxin gel. When pressed against the skin of the neck during badge re-attachment, it delivered a lethal subcutaneous dosage.'
      },
      {
        id: 'ev-007',
        code: 'EV-07',
        title: 'Ballast Drain Recovery',
        type: 'physical',
        category: 'Physical Evidence',
        collectedAt: 'Oct 22, 01:15 AM',
        locationFound: 'Drain between Track 4 and 5',
        summary: 'A miniature syringe applicator disguised inside a police tactical pen casing and Sterling’s brass dispatch key.',
        detailedContent: 'Recovered from the drain directly opposite where Sgt. Kane was standing when the call for medics went out. The pen applicator bore Sgt. Kane’s service badge serial number etchings.'
      },
      {
        id: 'ev-008',
        code: 'EV-08',
        title: 'Platform 4 High-Speed CCTV Log',
        type: 'digital',
        category: 'Video Surveillance',
        collectedAt: 'Oct 22, 12:45 AM',
        locationFound: 'Station Security Control Server',
        summary: 'CCTV sequence from 11:43 PM to 11:46 PM.',
        detailedContent: 'At 11:44:12 PM, Sgt. Kane asks Sterling for his badge. Kane takes the badge with gloved hands, applies pressure to the clasp under the guise of scanning a barcode, and places it firmly back onto Sterling’s bare collar line.'
      },
      {
        id: 'ev-009',
        code: 'EV-09',
        title: 'Espresso Cup Toxicology Analysis',
        type: 'physical',
        category: 'Forensic Lab',
        collectedAt: 'Oct 22, 12:35 AM',
        locationFound: 'Platform rubbish bin',
        summary: 'Paper espresso cups purchased by Sophie Laurent.',
        detailedContent: 'Both cups contained only standard Arabica roast espresso and sweetener. Completely negative for any neurotoxins or foreign compounds.'
      }
    ],
    timeline: [
      {
        id: 'time-007',
        time: '11:35 PM',
        order: 1,
        title: 'Sterling Enters Platform 4',
        description: 'David Sterling arrives at Platform 4 with locked dispatch case.',
        location: 'Platform 4 Gate'
      },
      {
        id: 'time-008',
        time: '11:40 PM',
        order: 2,
        title: 'Espresso with Sophie',
        description: 'Sophie Laurent greets Sterling and hands him an espresso cup.',
        location: 'Platform 4 Bench'
      },
      {
        id: 'time-009',
        time: '11:44 PM',
        order: 3,
        title: 'Police Spot Check',
        description: 'Sgt. Marcus Kane approaches Sterling, demanding to inspect his diplomatic credentials.',
        location: 'Carriage B Entrance'
      },
      {
        id: 'time-010',
        time: '11:52 PM',
        order: 4,
        title: 'Sudden Collapse',
        description: 'Sterling gasps for breath, drops his cup, and collapses convulsing on the platform.',
        location: 'Platform 4'
      }
    ],
    witnesses: [
      {
        id: 'wit-003',
        witnessName: 'Kiosk Barista Clara Finch',
        role: 'Station Café Barista',
        interviewTime: 'Oct 22, 01:00 AM',
        statement: 'The lady ordered two black coffees. She didn’t tamper with them at all—drank half of hers right in front of me before walking out to the platform.',
        contradictionHint: 'Exonerates Sophie from the beverage poisoning theory.'
      }
    ],
    locations: [
      {
        id: 'loc-003',
        name: 'Platform 4 Boarding Area',
        description: 'Open air train platform bordered by express tracks.',
        accessible: true,
        notes: 'Under high-definition surveillance coverage.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Route of Administration',
        text: 'The toxicology lab ruled out ingestion. Focus on physical items that came into direct contact with the victim’s neck or skin.',
        scorePenalty: 300
      },
      {
        level: 2,
        title: 'Disposal in the Drain',
        text: 'What was discarded into the railway track ballast drain immediately following the collapse?',
        scorePenalty: 600
      },
      {
        level: 3,
        title: 'Gloves and Credential Check',
        text: 'Sgt. Kane’s tactical pen and nitrile gloves allowed him to coat the victim’s badge clasp without exposing himself to the contact neurotoxin.',
        scorePenalty: 800
      }
    ],
    solution: {
      culpritId: 'susp-006',
      methodId: 'method-005',
      motiveId: 'motive-005',
      criticalEvidenceIds: ['ev-006', 'ev-007', 'ev-008'],
      methodOptions: [
        { id: 'method-005', text: 'Coated the victim’s ID lanyard clasp with transdermal neurotoxin during an impromptu inspection using a modified tactical pen applicator.' },
        { id: 'method-006', text: 'Laced the espresso cup lid with cyanide while waiting at the café kiosk.' },
        { id: 'method-007', text: 'Injected the victim with a needle concealed in a baggage cart handle during the luggage collision.' },
        { id: 'method-008', text: 'Sprayed toxic aerosol through the train carriage ventilation vent before departure.' }
      ],
      motiveOptions: [
        { id: 'motive-005', text: 'Bribed by an offshore syndicate to assassinate the courier and dispose of the dispatch key.' },
        { id: 'motive-006', text: 'Personal vengeance over a previous departmental disciplinary hearing.' },
        { id: 'motive-007', text: 'To silence an inquiry into illegal station baggage theft rings.' },
        { id: 'motive-008', text: 'To prevent Sophie Laurent from exposing maritime tariff espionage.' }
      ],
      fullExplanation: {
        whatHappened: 'Transit police sergeant Marcus Kane assassinated diplomat David Sterling using a contact neurotoxin disguised during a routine badge inspection.',
        howItWasDone: 'Kane approached Sterling pretending to perform an international credential verification. Wearing nitrile-lined tactical gloves, Kane used a spring-loaded tactical pen applicator to coat the back of Sterling’s lanyard clasp with transdermal DMSO neurotoxin before clipping it back against Sterling’s bare neck. When Sterling collapsed, Kane swiped the dispatch key and tossed both the key and the applicator pen into the track ballast drain.',
        whyItHappened: 'Kane was paid off through an offshore account by foreign interests seeking to prevent Sterling’s encrypted trade accords from reaching the Brussels summit.',
        decisiveEvidenceWalkthrough: 'EV-06 confirmed the neurotoxin gel on the badge clasp. EV-07 located the serial-numbered tactical pen applicator and the stolen key in the drain where Kane was standing. EV-08 caught Kane on high-speed CCTV pressing the clasp against Sterling’s neck.',
        whyOthersAreInnocent: 'Sophie’s espresso cups tested completely negative for any toxins (EV-09), and porter Liam Evans had no contact with the victim’s neck or badge.'
      }
    }
  },
  {
    id: 'case-003',
    caseNumber: 'CASE-003',
    title: 'Whispers in the Study',
    category: 'crime',
    categoryDisplay: 'Crime & Detective',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'Industrialist Harrison Cole was found shot in his estate study. The only window was shuttered, and a tape recorder played his final conversation.',
    fullStory: `At 8:45 PM, a single gunshot echoed through the east wing of Blackwood Hall. Security rushed to the private study of industrialist Harrison Cole, finding the heavy oak door locked. Upon forcing the door, Cole was discovered slumped over his desk with a fatal gunshot wound to the chest. A vintage reel-to-reel audio recorder on his side table was still playing: it contained a heated argument between Cole and an unidentified man, culminating in Cole shouting "Put that gun down!" followed by the loud crack of a gunshot at tape timestamp 8:44 PM.

However, forensic ballistics noted that the powder stippling around the wound did not match a close-range struggle, and the study’s heavy velvet curtains were tied back. Three people with urgent appointments were present in the estate: Cole’s business partner Vincent Vance, his estranged daughter Claire Cole, and his private estate accountant Gerald Briggs.`,
    setting: 'Blackwood Hall Private Study, Surrey',
    tags: ['Ballistics', 'Audio Deception', 'Alibi Contradiction', 'Will Dispute'],
    suspects: [
      {
        id: 'susp-007',
        name: 'Vincent Vance',
        age: 51,
        occupation: 'Co-Founder & Business Partner',
        relationToCase: 'Cole’s equal shareholder in Vance-Cole Synthetics',
        alibi: 'Was on a transatlantic conference call in the guest study from 8:15 PM to 8:50 PM, confirmed by phone toll records.',
        motive: 'Cole planned to exercise a buyout clause that would force Vincent into bankruptcy.',
        knownFacts: [
          'Toll records show the phone was connected to New York, but speaker was on mute for 18 minutes.',
          'Experienced competition marksman with registered firearms license.',
          'Gunpowder residue was found on the cuffs of his tailored tweed jacket.'
        ],
        statement: 'I was negotiating with New York the entire hour. You can check the overseas phone line.'
      },
      {
        id: 'susp-008',
        name: 'Claire Cole',
        age: 27,
        occupation: 'Sculptor & Daughter',
        relationToCase: 'Estranged daughter fighting over her late mother’s trust fund',
        alibi: 'Walking in the rose garden conservatory with the estate groundskeeper between 8:30 PM and 8:50 PM.',
        motive: 'Threatened with being cut out of the family trust due to lifestyle disputes.',
        knownFacts: [
          'Was seen visibly distressed in the gardens.',
          'Groundskeeper confirmed her presence continuously until the gunshot was heard.'
        ],
        statement: 'Father was cruel to everyone, but I was in the greenhouse trying to calm myself.'
      },
      {
        id: 'susp-009',
        name: 'Gerald Briggs',
        age: 60,
        occupation: 'Private Accountant',
        relationToCase: 'Overseeing Cole’s personal finances for 15 years',
        alibi: 'Reviewing audit ledgers in the downstairs dining room with the butler.',
        motive: 'Embezzled £400,000 from corporate accounts which Cole uncovered that morning.',
        knownFacts: [
          'Suffers from severe arthritis and cannot grip or discharge a high-caliber firearm.',
          'Butler confirmed Briggs remained seated at the dining table.'
        ],
        statement: 'Harrison summoned me to explain ledger discrepancies, but he locked himself in his study before we could speak.'
      }
    ],
    evidence: [
      {
        id: 'ev-010',
        code: 'EV-10',
        title: 'Reel-to-Reel Tape Recorder Analysis',
        type: 'digital',
        category: 'Audio Forensics',
        collectedAt: 'Nov 02, 09:30 PM',
        locationFound: 'Study side table',
        summary: 'Recorded tape reel playing an argument and gunshot sound.',
        detailedContent: 'Acoustic analysis revealed the tape was not a live recording of that evening. Background room acoustic reflections match the guest study downstairs, and the tape loop was set on an automatic timer relay switch plugged into the desk lamp timer circuit.'
      },
      {
        id: 'ev-011',
        code: 'EV-11',
        title: 'Custom .38 Snub-Nose Revolver',
        type: 'physical',
        category: 'Ballistics',
        collectedAt: 'Nov 02, 11:15 PM',
        locationFound: 'Behind water cistern in guest study bathroom',
        summary: 'Recently discharged firearm matching the fatal bullet caliber.',
        detailedContent: 'Ballistic striations on the slug extracted from Cole’s chest match this revolver. Latent fingerprints on the cylinder latch match Vincent Vance.'
      },
      {
        id: 'ev-012',
        code: 'EV-12',
        title: 'Phone Toll Record & Mute Log',
        type: 'document',
        category: 'Telecommunications',
        collectedAt: 'Nov 03, 09:00 AM',
        locationFound: 'BT Telecom Central Exchange',
        summary: 'Detailed call transcript of the transatlantic conference line.',
        detailedContent: 'The New York participants stated that Vincent introduced himself at 8:15 PM, placed his line on mute claiming he needed to retrieve notes, and remained silent until 8:49 PM when he unmuted to say he heard a gunshot.'
      }
    ],
    timeline: [
      {
        id: 'time-011',
        time: '08:15 PM',
        order: 1,
        title: 'Call Connected',
        description: 'Vincent Vance connects transatlantic conference call in the guest study.',
        location: 'Guest Study'
      },
      {
        id: 'time-012',
        time: '08:22 PM',
        order: 2,
        title: 'Cole Enters Study',
        description: 'Harrison Cole retreats into his study, locking the door.',
        location: 'Private Study'
      },
      {
        id: 'time-013',
        time: '08:44 PM',
        order: 3,
        title: 'Simulated Gunshot Tape Fires',
        description: 'Timer circuit triggers pre-recorded argument and blank firing sound through the audio recorder.',
        location: 'Private Study'
      },
      {
        id: 'time-014',
        time: '08:47 PM',
        order: 4,
        title: 'Actual Breach & Discovery',
        description: 'Staff break open the study door to find Cole deceased.',
        location: 'Private Study'
      }
    ],
    witnesses: [
      {
        id: 'wit-004',
        witnessName: 'Thomas Finch',
        role: 'Estate Butler',
        interviewTime: 'Nov 02, 10:15 PM',
        statement: 'Mr. Vance went upstairs to speak with Mr. Cole around 8:20 PM before Cole locked his door. I saw Mr. Vance return to the guest study looking flushed.',
        contradictionHint: 'Demonstrates Vance left his conference room during the mute period.'
      }
    ],
    locations: [
      {
        id: 'loc-004',
        name: 'Private Study',
        description: 'Heavily paneled room on the first floor with vintage tape deck.',
        accessible: true,
        notes: 'Door had key on the inside floor.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Tape Deck Timing',
        text: 'Pay attention to the tape recorder. Was the gunshot heard at 8:44 PM the real moment of murder?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Muted Phone Call',
        text: 'Check the phone records. Being on a phone call does not prove presence if the microphone is muted for 34 minutes.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'Ballistics and Gunpowder Residue',
        text: 'The revolver found in the bathroom contains Vincent’s fingerprints, and his jacket cuffs tested positive for gunshot residue.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-007',
      methodId: 'method-009',
      motiveId: 'motive-009',
      criticalEvidenceIds: ['ev-010', 'ev-011', 'ev-012'],
      methodOptions: [
        { id: 'method-009', text: 'Shot Cole at 8:22 PM, set a tape recorder on a timer to play a simulated argument and gunshot at 8:44 PM, and returned to a muted conference call.' },
        { id: 'method-010', text: 'Rigged a spring rifle outside the study window triggered by the garden groundskeeper.' },
        { id: 'method-011', text: 'Hired an outside assassin who escaped through the secret bookcase passageway.' },
        { id: 'method-012', text: 'Poisoned Cole with gas released through the heating radiator.' }
      ],
      motiveOptions: [
        { id: 'motive-009', text: 'To prevent Cole from enforcing a corporate buyout clause that would bankrupt Vance.' },
        { id: 'motive-010', text: 'To steal the bearer bonds stored in Cole’s wall safe.' },
        { id: 'motive-011', text: 'To prevent Cole from writing his daughter Claire back into the estate will.' },
        { id: 'motive-012', text: 'Covering up embezzlement of £400,000 from company accounts.' }
      ],
      fullExplanation: {
        whatHappened: 'Vincent Vance murdered his business partner Harrison Cole at 8:22 PM and used an audio timer trick to construct a false time of death.',
        howItWasDone: 'Vance connected his international conference call at 8:15 PM, placed his line on mute, walked up to Cole’s study, shot him point blank, and planted a pre-recorded audio tape of an argument set on a lamp timer to blast at 8:44 PM. He hid the gun in the guest bathroom cistern and unmuted his phone at 8:49 PM pretending to react to the gunshot.',
        whyItHappened: 'Cole was forcing a complete buyout of Vance’s shares the next morning, which would result in Vance’s financial ruin.',
        decisiveEvidenceWalkthrough: 'EV-10 proved the tape was staged on a timer circuit. EV-11 matched Vance’s fingerprints to the murder weapon in the cistern. EV-12 confirmed Vance was muted on his conference call during the actual shooting.',
        whyOthersAreInnocent: 'Claire was corroborated continuously in the garden by the groundskeeper. Briggs has severe arthritis and was seated in full view of the butler.'
      }
    }
  },
  {
    id: 'case-004',
    caseNumber: 'CASE-004',
    title: 'The Alibi of Echoes',
    category: 'crime',
    categoryDisplay: 'Crime & Detective',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-25 MIN',
    shortDescription: 'A renowned concert violinist is found strangled in her dressing room during the second movement of a symphony.',
    fullStory: `During the premiere performance of Tchaikovsky’s Violin Concerto at the Royal Symphony Hall, concertmaster Nadia Bell failed to emerge for her third movement solo. When stage managers pried open her dressing room at 9:18 PM, she was found strangled with a braided silk instrument cord behind her dressing screen.

Curiously, her signature Guarneri violin had been heard playing warm-up scales and cadenzas from inside the locked dressing room continuously from 8:50 PM until 9:05 PM, during which time all principal suspects claimed to be in the backstage corridor or orchestra pit. Toxicology revealed she died around 8:40 PM—before the violin music supposedly ended. Three musicians had motive and backstage access: second violinist Damian Cruz, guest conductor Maestro Carl Richter, and Nadia’s understudy Vivienne Sterling.`,
    setting: 'Royal Symphony Hall, London',
    tags: ['Music', 'Backstage Murder', 'Acoustic Trick', 'Strangulation'],
    suspects: [
      {
        id: 'susp-010',
        name: 'Vivienne Sterling',
        age: 24,
        occupation: 'Understudy Violinist',
        relationToCase: 'Direct rival who took over Nadia’s solo upon her absence',
        alibi: 'Claims she was warming up in Practice Room C on the lower level from 8:30 PM to 9:10 PM.',
        motive: 'Desperate for her breakthrough performance in front of international talent scouts.',
        knownFacts: [
          'Possesses identical technique to Nadia.',
          'Left Practice Room C door propped open.',
          'Scratches found on her right wrist.'
        ],
        statement: 'I heard Nadia practicing her cadenza from upstairs. I stayed downstairs until stage management called for the replacement.'
      },
      {
        id: 'susp-011',
        name: 'Damian Cruz',
        age: 33,
        occupation: 'Second Chair Violinist',
        relationToCase: 'Former romantic partner and musical collaborator',
        alibi: 'On stage in the orchestra pit playing the overture from 8:30 PM to 9:15 PM in full view of 1,800 patrons.',
        motive: 'Bitter over royalties from a joint musical score Nadia claimed sole credit for.',
        knownFacts: [
          'Was clearly visible in the orchestra pit continuously during the performance.',
          'Full video recording verifies he never left his chair.'
        ],
        statement: 'I never left my music stand. The entire audience and the cameras saw me.'
      },
      {
        id: 'susp-012',
        name: 'Maestro Carl Richter',
        age: 59,
        occupation: 'Conductor & Artistic Director',
        relationToCase: 'Musical director who hired Nadia',
        alibi: 'Conducted the orchestra on the podium from 8:30 PM to 9:15 PM.',
        motive: 'Nadia had discovered Richter was funneling symphony endowment funds into an offshore shell company.',
        knownFacts: [
          'Had access to master dressing room keys.',
          'However, could not leave the podium during the continuous symphonic piece.'
        ],
        statement: 'My eyes were on the score and the orchestra the whole time. A conductor cannot disappear from the podium.'
      }
    ],
    evidence: [
      {
        id: 'ev-013',
        code: 'EV-13',
        title: 'Bluetooth High-Fidelity Speaker',
        type: 'digital',
        category: 'Audio Device',
        collectedAt: 'Nov 12, 10:00 PM',
        locationFound: 'Inside Nadia’s acoustic violin case',
        summary: 'Miniature speaker paired to Vivienne Sterling’s phone.',
        detailedContent: 'A portable studio speaker was concealed beneath the velvet lining of the spare violin case. Bluetooth connection logs show it received a looped audio file titled "Nadia_Cadenza_Practice.wav" transmitted from Vivienne Sterling’s iPhone between 8:50 PM and 9:05 PM.'
      },
      {
        id: 'ev-014',
        code: 'EV-14',
        title: 'Silk Violin Bow Cord',
        type: 'physical',
        category: 'Forensic Pathology',
        collectedAt: 'Nov 12, 10:20 PM',
        locationFound: 'Dressing room trash receptacle',
        summary: 'Braided purple silk cord matching Vivienne’s custom bow grip.',
        detailedContent: 'The ligature cord bore epithelial skin cells matching Vivienne Sterling under DNA analysis, as well as blood traces from Nadia’s defensive finger scratches.'
      }
    ],
    timeline: [
      {
        id: 'time-015',
        time: '08:30 PM',
        order: 1,
        title: 'Concert Begins',
        description: 'Orchestra begins Overture; Damian Cruz and Richter take the stage.',
        location: 'Main Auditorium'
      },
      {
        id: 'time-016',
        time: '08:38 PM',
        order: 2,
        title: 'Vivienne Seen in Corridor',
        description: 'Stage technician spots Vivienne carrying an instrument bag near Nadia’s dressing room.',
        location: 'Backstage Hallway'
      },
      {
        id: 'time-017',
        time: '08:50 PM',
        order: 3,
        title: 'Violin Cadenza Heard',
        description: 'Warm-up scales begin playing through Nadia’s dressing room door.',
        location: 'Dressing Room 1'
      },
      {
        id: 'time-018',
        time: '09:18 PM',
        order: 4,
        title: 'Discovery of the Body',
        description: 'Stage managers breach the dressing room when Nadia fails to walk on stage.',
        location: 'Dressing Room 1'
      }
    ],
    witnesses: [
      {
        id: 'wit-005',
        witnessName: 'Julian Hayes',
        role: 'Backstage Stagehand',
        interviewTime: 'Nov 12, 10:45 PM',
        statement: 'I swore I heard Nadia practicing her trills at 9:00 PM. But when I leaned close to the keyhole to knock, the sound sounded slightly flat, like it was coming from an amplifier.',
        contradictionHint: 'Points toward electronic speaker playback.'
      }
    ],
    locations: [
      {
        id: 'loc-005',
        name: 'Dressing Room 1',
        description: 'Sound-dampened private room with full vanity and velvet couch.',
        accessible: true,
        notes: 'Door had latch locked from inside using latch hook string.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Live vs Recorded',
        text: 'The medical examiner placed death at 8:40 PM, yet violin music was heard until 9:05 PM. How could that be?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'Look Inside the Case',
        text: 'Inspect the contents of the spare violin case in the dressing room for electronic equipment.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Scratches on the Wrist',
        text: 'Vivienne’s scratches match Nadia’s fingernail scrape samples, and the speaker logs tie directly to Vivienne’s phone.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-010',
      methodId: 'method-013',
      motiveId: 'motive-013',
      criticalEvidenceIds: ['ev-013', 'ev-014'],
      methodOptions: [
        { id: 'method-013', text: 'Strangled Nadia at 8:40 PM, then streamed a recorded violin practice loop to a concealed Bluetooth speaker to forge an acoustic alibi.' },
        { id: 'method-014', text: 'Poisoned the rosin on Nadia’s violin bow, causing respiratory failure upon inhalation.' },
        { id: 'method-015', text: 'Rigged the overhead dressing room lights to cause a fatal electrical surge.' },
        { id: 'method-016', text: 'Staged an outside intruder through the stage door fire escape.' }
      ],
      motiveOptions: [
        { id: 'motive-013', text: 'To eliminate Nadia and secure the solo spotlight before international talent scouts.' },
        { id: 'motive-014', text: 'To extort money to pay off gambling debts.' },
        { id: 'motive-015', text: 'Retaliation for stolen musical arrangements.' },
        { id: 'motive-016', text: 'Covering up an embezzlement scheme in the orchestra endowment fund.' }
      ],
      fullExplanation: {
        whatHappened: 'Understudy Vivienne Sterling murdered concertmaster Nadia Bell in her dressing room at 8:40 PM to take her place on stage.',
        howItWasDone: 'Vivienne confronted Nadia before the concerto began and strangled her with a silk cord bow grip. She placed a hidden Bluetooth speaker in Nadia’s spare case and transmitted a pre-recorded violin rehearsal track from 8:50 PM to 9:05 PM while she sat in the practice room downstairs, creating the illusion Nadia was still alive and warming up.',
        whyItHappened: 'Vivienne was desperate for her international debut, knowing top scouts and recording labels were in the audience specifically to hear the violin concerto.',
        decisiveEvidenceWalkthrough: 'EV-13 proved the audio was streamed from Vivienne’s smartphone. EV-14 matched Vivienne’s DNA and custom bow cord to the ligature marks on Nadia’s neck.',
        whyOthersAreInnocent: 'Both Damian Cruz and Maestro Richter were performing on stage in plain sight of 1,800 audience members without interruption.'
      }
    }
  },
  {
    id: 'case-005',
    caseNumber: 'CASE-005',
    title: 'Vanished in Cabin 9',
    category: 'crime',
    categoryDisplay: 'Crime & Detective',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '25-35 MIN',
    shortDescription: 'Heiress Genevieve Vance disappears from a high-speed coastal sleeper train between two non-stop tunnel junctions.',
    fullStory: `At 3:15 AM on the Scottish Highlands Coastal Express, the conductor was alerted when Cabin 9 was found wide open. The bed was unmade, a champagne flute lay shattered on the rug, and heiress Genevieve Vance was nowhere to be found. The train had been traveling non-stop at 110 mph across a 45-mile viaduct and tunnel expanse since 1:30 AM with no intermediate stops.

All exterior carriage doors remained alarmed and electronically locked, with zero sensor trips recorded. The cabin window was unlocked but opened only four inches due to safety bar restrictors. Genevieve’s heavy mink coat, handbag, and passport were still in the cabin, but a blood stain was discovered on the brass heating grille beneath the window. Three passengers occupied adjacent first-class compartments: her fiancé Lord Peter Sterling, her private secretary Beatrice Hall, and antique gemologist Donald Ross.`,
    setting: 'Carriage 3, Highlands Coastal Express',
    tags: ['Missing Person', 'Train Mystery', 'Locked Carriage', 'Inheritance'],
    suspects: [
      {
        id: 'susp-013',
        name: 'Lord Peter Sterling',
        age: 36,
        occupation: 'Aristocrat & Fiancé',
        relationToCase: 'Betrothed to Genevieve; wedding set for next month',
        alibi: 'Claims he was asleep in Cabin 7 from 1:00 AM until awakened by the conductor’s commotion at 3:20 AM.',
        motive: 'Bankrupt ancestral estate; Genevieve had threatened to cancel the wedding after discovering his infidelity.',
        knownFacts: [
          'Carried an unusually large oversized leather steamer trunk.',
          'Had scratches on his collarbone concealed by a high turtleneck.',
          'Purchased specialized industrial lock-picking tools online.'
        ],
        statement: 'Genevieve and I were in love. She must have slipped off at the previous junction or been abducted.'
      },
      {
        id: 'susp-014',
        name: 'Beatrice Hall',
        age: 31,
        occupation: 'Private Secretary',
        relationToCase: 'Manages Genevieve’s daily affairs and travel itinerary',
        alibi: 'Typing letters in the club lounge car until 2:30 AM, confirmed by the night bartender.',
        motive: 'Genevieve recently fired her over missing petty cash.',
        knownFacts: [
          'Was observed in the lounge car continuously between 1:45 AM and 2:30 AM.',
          'No physical capability of lifting or moving a body.'
        ],
        statement: 'Miss Vance was agitated at dinner. She said she felt unsafe around Peter.'
      },
      {
        id: 'susp-015',
        name: 'Donald Ross',
        age: 52,
        occupation: 'Gemologist',
        relationToCase: 'Appraising heirloom jewels carried by Genevieve',
        alibi: 'In Cabin 11 reading historical journals; cabin door remained bolted.',
        motive: 'Desire to acquire Genevieve’s emerald parure.',
        knownFacts: [
          'The heirloom emeralds were still intact in Genevieve’s cabin safe.',
          'Had no personal contact with Genevieve after 10:00 PM.'
        ],
        statement: 'I examined the stones in the salon car at 9:30 PM and returned them directly to her. I have nothing to hide.'
      }
    ],
    evidence: [
      {
        id: 'ev-015',
        code: 'EV-15',
        title: 'Oversized Steamer Trunk in Cabin 7',
        type: 'physical',
        category: 'Luggage Forensics',
        collectedAt: 'Nov 18, 04:30 AM',
        locationFound: 'Lord Peter’s compartment (Cabin 7)',
        summary: 'Reinforced leather trunk with drilled ventilation holes and traces of sedative.',
        detailedContent: 'Hidden beneath clothes inside Peter’s trunk was an interior compartment lined with foam dampening. Chemical swabs detected chloroform and hair strands matching Genevieve Vance. When opened by police at Edinburgh terminal, Genevieve’s unconscious body was recovered, suffering from heavy chemical sedation.'
      },
      {
        id: 'ev-016',
        code: 'EV-16',
        title: 'Carriage Connecting Vestibule CCTV',
        type: 'digital',
        category: 'Train Surveillance',
        collectedAt: 'Nov 18, 04:10 AM',
        locationFound: 'Train Operator Security Server',
        summary: 'Footage of Carriage 3 corridor at 2:10 AM.',
        detailedContent: 'Shows a figure in a heavy rain macintosh wheeling an oversized trunk from Cabin 9 to Cabin 7. The figure’s face is shielded, but a distinct signet ring with the Sterling family crest is visible on the left hand.'
      },
      {
        id: 'ev-017',
        code: 'EV-17',
        title: 'Broken Champagne Flute & Blood Smear',
        type: 'physical',
        category: 'Forensic Lab',
        collectedAt: 'Nov 18, 03:45 AM',
        locationFound: 'Cabin 9 floor',
        summary: 'Shattered crystal glass and blood on heating vent.',
        detailedContent: 'The blood on the vent matches Lord Peter Sterling (Type O negative), caused when Genevieve defended herself and scratched him during the struggle before being overcome by chloroform.'
      }
    ],
    timeline: [
      {
        id: 'time-019',
        time: '01:30 AM',
        order: 1,
        title: 'Last Station Departure',
        description: 'Highlands Coastal Express leaves last intermediate stop; enters high-speed non-stop zone.',
        location: 'Inverness Junction'
      },
      {
        id: 'time-020',
        time: '02:05 AM',
        order: 2,
        title: 'Muffled Thud in Cabin 9',
        description: 'Neighbor in Cabin 8 hears a brief thump and shattering glass.',
        location: 'Cabin 9'
      },
      {
        id: 'time-021',
        time: '02:12 AM',
        order: 3,
        title: 'Corridor Movement',
        description: 'Trunk wheeled between Cabin 9 and Cabin 7 as recorded on internal vestibule camera.',
        location: 'Corridor 3'
      },
      {
        id: 'time-022',
        time: '03:15 AM',
        order: 4,
        title: 'Alarm Raised',
        description: 'Conductor discovers Cabin 9 empty with signs of struggle.',
        location: 'Cabin 9'
      }
    ],
    witnesses: [
      {
        id: 'wit-006',
        witnessName: 'Angus MacLeod',
        role: 'Senior Train Conductor',
        interviewTime: 'Nov 18, 03:50 AM',
        statement: 'No exterior door opened—the emergency interlocks are impossible to bypass while moving without bringing the train to a screeching emergency stop.',
        contradictionHint: 'Proves the victim never fell or was thrown from the moving train.'
      }
    ],
    locations: [
      {
        id: 'loc-006',
        name: 'Cabin 9',
        description: 'First-class luxury sleeper compartment with locked four-inch restricted window.',
        accessible: true,
        notes: 'Impossible for an adult to fit through the window restrictors.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Closed System',
        text: 'The conductor confirmed no exterior doors opened, and the window only opens four inches. The victim must still be on the train.',
        scorePenalty: 300
      },
      {
        level: 2,
        title: 'Luggage Inspection',
        text: 'Who brought an unusually large piece of luggage that was never properly inspected?',
        scorePenalty: 600
      },
      {
        level: 3,
        title: 'The Signet Ring on Camera',
        text: 'Corridor CCTV captured the person moving the trunk wearing the Sterling family signet ring, and Peter has defensive scratches matching the struggle.',
        scorePenalty: 900
      }
    ],
    solution: {
      culpritId: 'susp-013',
      methodId: 'method-017',
      motiveId: 'motive-017',
      criticalEvidenceIds: ['ev-015', 'ev-016', 'ev-017'],
      methodOptions: [
        { id: 'method-017', text: 'Chloroformed Genevieve inside her cabin and concealed her inside an altered, ventilated steamer trunk in his own compartment to smuggle her off at terminal.' },
        { id: 'method-018', text: 'Threw her out of the cabin window while the train slowed on the viaduct.' },
        { id: 'method-019', text: 'Disguised her in a porter uniform and hid her in the engine boiler room.' },
        { id: 'method-020', text: 'Lowered her with a rope to a waiting road vehicle under the railway bridge.' }
      ],
      motiveOptions: [
        { id: 'motive-017', text: 'To kidnap and incapacitate her, preventing her from calling off the wedding and disinheriting his bankrupt estate.' },
        { id: 'motive-018', text: 'To steal the emerald parure and flee to France.' },
        { id: 'motive-019', text: 'To avenge an old family vendetta between the Highlands clans.' },
        { id: 'motive-020', text: 'Blackmail over forged shipping bonds.' }
      ],
      fullExplanation: {
        whatHappened: 'Lord Peter Sterling incapacitated Genevieve Vance with chloroform and concealed her inside an oversized steamer trunk in Cabin 7.',
        howItWasDone: 'Peter entered Cabin 9 at 2:05 AM. When Genevieve resisted and shattered a champagne glass, he subdued her with chloroform, incurring a scratch on his collarbone. He placed her unconscious body into his custom-ventilated steamer trunk and wheeled it back into Cabin 7, intending to roll her out into a private ambulance upon arriving at Edinburgh.',
        whyItHappened: 'Genevieve had uncovered Peter’s bankruptcy and mistresses and planned to publicly break the engagement, which would have ruined his aristocratic standing.',
        decisiveEvidenceWalkthrough: 'EV-15 found Genevieve alive but sedated inside Peter’s trunk. EV-16 identified Peter’s Sterling family crest ring wheeling the trunk on CCTV. EV-17 matched Peter’s blood to the struggle in Cabin 9.',
        whyOthersAreInnocent: 'Beatrice was logged continuously in the lounge car (witness confirmed), and gemologist Ross never left his cabin, leaving all jewels untouched.'
      }
    }
  },
  {
    id: 'case-006',
    caseNumber: 'CASE-006',
    title: 'The Silhouette on 4th Floor',
    category: 'crime',
    categoryDisplay: 'Crime & Detective',
    difficulty: 4,
    difficultyLabel: 'Inspector',
    estimatedTime: '30-35 MIN',
    shortDescription: 'A controversial city councilor is shot dead during a live televised press conference from an opposite high-rise.',
    fullStory: `At 7:02 PM during a live evening broadcast outside City Hall, Councilor Raymond Ortiz was struck down by a single high-caliber rifle round. The bullet entered at a steep downward trajectory. Ballistic reconstruction traced the trajectory to Room 402 of the dilapidated St. Jude Hotel across the plaza.

Inside Room 402, police discovered a primed sniper rifle on a tripod resting on the windowsill, along with spent cartridge casings and a cigarette butt. However, the hotel room door was chained from the inside, and a timer wire led from the trigger to a solenoid relay connected to an old ham radio transmitter. Three individuals were tied to the building and the victim: investigative journalist Frank Vance, disaffected former security guard Roman Burke, and political lobbyist Sandra Chen.`,
    setting: 'St. Jude Hotel & City Hall Plaza, Central District',
    tags: ['Ballistics', 'Remote Rigging', 'Political Assassination', 'Sniper Frame'],
    suspects: [
      {
        id: 'susp-016',
        name: 'Roman Burke',
        age: 41,
        occupation: 'Ex-Military Security Guard',
        relationToCase: 'Fired by Ortiz two months ago after blowing the whistle on contract kickbacks',
        alibi: 'Claims he was in a tavern three blocks away playing darts between 6:30 PM and 7:30 PM.',
        motive: 'Publicly swore revenge against Ortiz for destroying his career and pension.',
        knownFacts: [
          'Expert marksman with extensive tactical weapons training.',
          'His fingerprint was found on the outside doorknob of Room 402.',
          'Rented Room 402 three days prior under a fake alias.'
        ],
        statement: 'I checked out of that flea-bag room yesterday! Someone is trying to set me up.'
      },
      {
        id: 'susp-017',
        name: 'Sandra Chen',
        age: 39,
        occupation: 'Political Campaign Strategist',
        relationToCase: 'Ortiz’s former campaign manager facing bribery indictments',
        alibi: 'Standing in the media pool ten feet from Ortiz when the shot rang out.',
        motive: 'Ortiz was planning to turn state’s evidence and testify against Chen’s lobbying firm.',
        knownFacts: [
          'Held an electronic transmitter fob in her purse.',
          'Has an engineering background in telecommunications and radio control.',
          'Purchased surplus military solenoid relays online.'
        ],
        statement: 'I was standing right in front of the cameras when the bullet struck poor Raymond. I nearly got hit myself.'
      },
      {
        id: 'susp-018',
        name: 'Frank Vance',
        age: 48,
        occupation: 'Investigative Journalist',
        relationToCase: 'Publishing an exposé on city hall corruption',
        alibi: 'In the City Hall press room setting up camera equipment.',
        motive: 'Looking for a sensational career-defining story.',
        knownFacts: [
          'Possesses no firearm experience.',
          'Rushed outside with his camera immediately after the shot to capture the aftermath.'
        ],
        statement: 'I heard the crack and saw Raymond drop. I ran outside to film the emergency response.'
      }
    ],
    evidence: [
      {
        id: 'ev-018',
        code: 'EV-18',
        title: 'Radio-Frequency Solenoid Trigger',
        type: 'digital',
        category: 'Electronics & Weaponry',
        collectedAt: 'Dec 05, 07:45 PM',
        locationFound: 'Room 402, St. Jude Hotel',
        summary: 'Electronic solenoid bolted to rifle trigger activated via 433 MHz RF pulse.',
        detailedContent: 'The sniper rifle was fixed on a bench vise aimed directly at the podium microphone. The trigger was depressed not by human finger, but by a 12V high-torque solenoid connected to an encrypted radio receiver tuned to 433.92 MHz.'
      },
      {
        id: 'ev-019',
        code: 'EV-19',
        title: 'Handheld RF Keyfob in Chen’s Bag',
        type: 'physical',
        category: 'Forensic Hardware',
        collectedAt: 'Dec 05, 08:30 PM',
        locationFound: 'Sandra Chen’s handbag',
        summary: 'Disguised keyless entry fob matching the receiver’s frequency.',
        detailedContent: 'The fob frequency exactly matches the 433.92 MHz receiver on the tripod. Broadcast log timestamps show the transmit button was depressed at 7:02:14 PM—the exact microsecond Ortiz was shot.'
      },
      {
        id: 'ev-020',
        code: 'EV-20',
        title: 'Rented Room 402 Lease & Framing Clues',
        type: 'document',
        category: 'Documentary Evidence',
        collectedAt: 'Dec 05, 08:00 PM',
        locationFound: 'St. Jude Hotel Desk',
        summary: 'Room reservation paid in cash with Roman Burke’s stolen ID copy.',
        detailedContent: 'Burke had reported his wallet and ID card stolen from his gym locker two weeks ago. Security footage at the hotel check-in showed a woman matching Sandra Chen’s height and trench coat paying the desk clerk with cash.'
      }
    ],
    timeline: [
      {
        id: 'time-023',
        time: '06:55 PM',
        order: 1,
        title: 'Podium Setup',
        description: 'Councilor Ortiz takes the podium in front of live news cameras.',
        location: 'City Hall Plaza'
      },
      {
        id: 'time-024',
        time: '07:00 PM',
        order: 2,
        title: 'Speech Begins',
        description: 'Ortiz begins announcing comprehensive cooperation with the federal prosecutor.',
        location: 'City Hall Plaza'
      },
      {
        id: 'time-025',
        time: '07:02 PM',
        order: 3,
        title: 'The Fatal Shot',
        description: 'Sandra Chen reaches into her purse; the rifle in Room 402 discharges via RF remote.',
        location: 'City Hall Plaza / Room 402'
      }
    ],
    witnesses: [
      {
        id: 'wit-007',
        witnessName: 'Tavern Bartender Joe Kelly',
        role: 'Bartender',
        interviewTime: 'Dec 05, 08:45 PM',
        statement: 'Roman Burke was at my bar from 6:30 PM to past 7:30 PM having a pint and throwing darts. He never once stepped out.',
        contradictionHint: 'Validates Roman Burke’s physical absence from Room 402 at the time of shooting.'
      }
    ],
    locations: [
      {
        id: 'loc-007',
        name: 'Room 402, St. Jude Hotel',
        description: 'Fourth-floor corner room with direct line of sight to City Hall podium.',
        accessible: true,
        notes: 'Door chained from inside using a gravity-drop weight rig.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Remote Trigger Mechanism',
        text: 'The rifle was mounted in a bench vise with a solenoid trigger. The shooter did not need to be in the room at 7:02 PM.',
        scorePenalty: 300
      },
      {
        level: 2,
        title: 'Signals in the Crowd',
        text: 'Who in the media crowd had access to high-tech electronic transmitters and an urgent motive to silence Ortiz?',
        scorePenalty: 600
      },
      {
        level: 3,
        title: 'The Keyfob in the Handbag',
        text: 'Sandra Chen was standing near the podium and pressed the disguised RF trigger in her purse at 7:02:14 PM.',
        scorePenalty: 900
      }
    ],
    solution: {
      culpritId: 'susp-017',
      methodId: 'method-021',
      motiveId: 'motive-021',
      criticalEvidenceIds: ['ev-018', 'ev-019', 'ev-020'],
      methodOptions: [
        { id: 'method-021', text: 'Staged a fixed sniper rifle with an RF solenoid receiver in Room 402, framed Roman Burke with stolen ID, and triggered the shot from her purse in the crowd.' },
        { id: 'method-022', text: 'Fired the rifle manually through the window and escaped via the fire escape rope.' },
        { id: 'method-023', text: 'Hired an undercover assassin from the tavern to shoot from the roof.' },
        { id: 'method-024', text: 'Detonated a concealed explosive charge hidden inside the podium microphone.' }
      ],
      motiveOptions: [
        { id: 'motive-021', text: 'To silence Ortiz before he could present federal grand jury testimony implicating Chen’s firm in bribery.' },
        { id: 'motive-022', text: 'Personal dispute over campaign debt repayment.' },
        { id: 'motive-023', text: 'To assist Roman Burke in his wrongful termination lawsuit.' },
        { id: 'motive-024', text: 'To create a sensational news story for media ratings.' }
      ],
      fullExplanation: {
        whatHappened: 'Lobbyist Sandra Chen assassinated Councilor Raymond Ortiz using a remotely-triggered sniper rifle while standing right in the audience.',
        howItWasDone: 'Chen rented Room 402 using Roman Burke’s stolen ID, locked a heavy rifle into a bench vise aimed at the podium, and wired the trigger to a 433 MHz RF solenoid. Standing casually ten feet from Ortiz during the press conference, she triggered the transmitter hidden in her purse at 7:02 PM.',
        whyItHappened: 'Ortiz was on the verge of delivering sworn testimony to federal prosecutors revealing Chen’s lobbying firm had paid hundreds of thousands in illicit bribes.',
        decisiveEvidenceWalkthrough: 'EV-18 identified the remote RF solenoid. EV-19 confirmed the keyfob in Chen’s handbag transmitted the firing code at 7:02:14 PM. EV-20 revealed Chen rented the room using Burke’s stolen wallet.',
        whyOthersAreInnocent: 'Burke was playing darts at the tavern in full view of the bartender (confirmed by witness), and journalist Vance had no weapons or electronics expertise.'
      }
    }
  }
];
