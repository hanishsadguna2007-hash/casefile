import { Mystery } from '@/types/mystery';

export const historicalMysteries: Mystery[] = [
  {
    id: 'case-018',
    caseNumber: 'CASE-018',
    title: 'The Alexandrian Papyrus',
    category: 'historical',
    categoryDisplay: 'Historical & Ancient',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '25-30 MIN',
    shortDescription: 'A 2nd-century Ptolemaic navigation chart is stolen from the French consular library in Alexandria during a harbor thunderstorm.',
    fullStory: `During a fierce Mediterranean squall at the French Archaeological Consulate in Alexandria, the climate display case holding the Ptolemaic Papyrus 412—a 2nd-century maritime map depicting ancient sunken trade ports—was breached. At 11:30 PM, the night watchman heard a crash of glass from the maritime reading room.

Upon entering, he found the armored glass vitrine shattered from the outside balcony. The storm shutters were banging violently against the stonework, and the papyrus was gone. A soggy hemp rope was tied to the balcony balustrade leading down to the stormy harbor seawall. Three individuals were inside the consulate: Senior Egyptologist Prof. Henri Moreau, Greek Antiquities Dealer Nikos Cassavetes, and Maritime Cartographer Sophie Laurent.`,
    setting: 'French Consular Library, Alexandria Harbor',
    tags: ['Historical Map', 'Balcony Break', 'Storm Cover', 'Forgery'],
    suspects: [
      {
        id: 'susp-053',
        name: 'Nikos Cassavetes',
        age: 52,
        occupation: 'Antiquities Broker',
        relationToCase: 'Negotiating a private purchase of the papyrus for a Swiss maritime museum',
        alibi: 'In the smoking lounge on the ground floor drinking brandy between 11:00 PM and 11:45 PM.',
        motive: 'Client offered €1.5 million for the exact navigational coordinates of the sunken port of Heracleion.',
        knownFacts: [
          'Had a damp raincoat hanging in the vestibule.',
          'Carried a brass nautical compass and waterproof chart tube.',
          'Traces of Mediterranean salt water found on his leather shoes.'
        ],
        statement: 'I never went upstairs. The sea spray hits the ground floor terrace whenever a storm rolls into the bay.'
      },
      {
        id: 'susp-054',
        name: 'Prof. Henri Moreau',
        age: 64,
        occupation: 'Senior Egyptologist & Consular Curator',
        relationToCase: 'Chief custodian of the Alexandrian archives',
        alibi: 'Translating Coptic manuscripts in his private bedroom on the third floor.',
        motive: 'Facing mandatory retirement and loss of access to his life’s research.',
        knownFacts: [
          'Was observed by the night watchman at 10:45 PM in his nightgown.',
          'Suffers from severe vertigo and cannot walk on high balconies.'
        ],
        statement: 'The storm was howling so loudly I barely heard the glass break until the watchman blew his whistle.'
      },
      {
        id: 'susp-055',
        name: 'Sophie Laurent',
        age: 33,
        occupation: 'Maritime Cartographer',
        relationToCase: 'Hired to produce digital scans of the papyrus',
        alibi: 'Re-calibrating photographic lamps in the darkroom.',
        motive: 'Competitor for research expeditions.',
        knownFacts: [
          'Scans were completely backed up to the consulate cloud server.',
          'No criminal or financial irregularities.'
        ],
        statement: 'My high-res digital scans are already completed and archived. Stealing the fragile physical papyrus would ruin its fibers.'
      }
    ],
    evidence: [
      {
        id: 'ev-050',
        code: 'EV-50',
        title: 'Seawall Mooring Cleat & Scuba Weights',
        type: 'physical',
        category: 'Harbor Forensics',
        collectedAt: 'Oct 12, 01:00 AM',
        locationFound: 'Seawall directly below library balcony',
        summary: 'A diver’s neoprene weight belt and Zodiac dinghy rope tie.',
        detailedContent: 'Discovered anchored beneath the library balcony. The rubber cleats on the dinghy matched impressions found on Nikos Cassavetes’s private luxury yacht moored 400 meters offshore in the eastern harbor.'
      },
      {
        id: 'ev-051',
        code: 'EV-51',
        title: 'Sealed Carbon-Fiber Tube in Cassavetes’s Cabin',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Oct 12, 02:30 AM',
        locationFound: 'Nikos Cassavetes’s yacht stateroom',
        summary: 'Watertight survival canister containing the authentic Ptolemaic Papyrus.',
        detailedContent: 'Found inside a hidden bilge safe on the yacht. Swabs from the tube lid matched Cassavetes’s cologne and Greek tobacco residue.'
      },
      {
        id: 'ev-052',
        code: 'EV-52',
        title: 'Balcony Glass Shatter Angle Analysis',
        type: 'physical',
        category: 'Ballistics & Impact Forensics',
        collectedAt: 'Oct 12, 12:30 AM',
        locationFound: 'Library window frame',
        summary: 'Glass fragments pushed inward from outside.',
        detailedContent: 'Impact marks on the bronze balcony door show that an external glass punch was used from the balcony itself, proving an outside ascent up the seawall rope.'
      }
    ],
    timeline: [
      {
        id: 'time-069',
        time: '10:30 PM',
        order: 1,
        title: 'Storm Intensifies',
        description: 'Gale force winds and heavy rain buffet the Alexandria harbor consulate.',
        location: 'Alexandria Coast'
      },
      {
        id: 'time-070',
        time: '11:15 PM',
        order: 2,
        title: 'Seawall Infiltration',
        description: 'Infiltrator scales the seawall using a grapple hook under cover of thunder.',
        location: 'Consulate Seawall'
      },
      {
        id: 'time-071',
        time: '11:28 PM',
        order: 3,
        title: 'Glass Breached',
        description: 'Balcony glass punched; papyrus extracted into watertight cylinder.',
        location: 'Maritime Library'
      },
      {
        id: 'time-072',
        time: '11:30 PM',
        order: 4,
        title: 'Watchman Responds',
        description: 'Night watchman enters to find shattered glass and trailing wet footprints.',
        location: 'Maritime Library'
      }
    ],
    witnesses: [
      {
        id: 'wit-019',
        witnessName: 'Tariq Al-Mansoor',
        role: 'Consulate Night Watchman',
        interviewTime: 'Oct 12, 12:15 AM',
        statement: 'When I ran out to the balcony, I saw a high-speed black Zodiac inflatable boat racing away through the harbor breakers toward the private yachts.',
        contradictionHint: 'Connects the heist directly to Cassavetes’s offshore vessel.'
      }
    ],
    locations: [
      {
        id: 'loc-019',
        name: 'Maritime Reading Room',
        description: 'Second-floor vaulted room overlooking the Mediterranean harbor.',
        accessible: true,
        notes: 'Balcony sits directly above the coastal seawall.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Seawall Approach',
        text: 'The glass was shattered from the outside balcony. How did someone reach a second-floor balcony during a raging sea storm?',
        scorePenalty: 250
      },
      {
        level: 2,
        title: 'The Saltwater on the Shoes',
        text: 'Nikos claimed he stayed in the smoking room, but his shoes and raincoat were soaked in deep-water salt spray, and his dinghy cleats match the seawall.',
        scorePenalty: 500
      },
      {
        level: 3,
        title: 'The Bilge Safe on the Yacht',
        text: 'Nikos Cassavetes hired a diver to pilot his Zodiac, climbed the seawall grapple during a thunderclap, and hid the papyrus in his yacht’s bilge safe.',
        scorePenalty: 750
      }
    ],
    solution: {
      culpritId: 'susp-053',
      methodId: 'method-069',
      motiveId: 'motive-069',
      criticalEvidenceIds: ['ev-050', 'ev-051', 'ev-052'],
      methodOptions: [
        { id: 'method-069', text: 'Scaled the seawall from a covert Zodiac dinghy using a grappling hook, punched the balcony glass under cover of thunder, and transferred the papyrus to his yacht safe.' },
        { id: 'method-070', text: 'Bribed Prof. Moreau to swap the papyrus with an Egyptian cotton replica.' },
        { id: 'method-071', text: 'Hid inside the library ceiling before the evening lockdown.' },
        { id: 'method-072', text: 'Used an aerial drone to smash the window from above.' }
      ],
      motiveOptions: [
        { id: 'motive-069', text: 'To sell the original Ptolemaic navigation coordinates to a commercial treasure salvage firm for €1.5 million.' },
        { id: 'motive-070', text: 'To publish a sensational historical monograph.' },
        { id: 'motive-071', text: 'To prevent Prof. Moreau from retiring with honors.' },
        { id: 'motive-072', text: 'To destroy evidence of ancient maritime territorial boundaries.' }
      ],
      fullExplanation: {
        whatHappened: 'Antiquities dealer Nikos Cassavetes orchestrated an amphibious burglary to steal the 2nd-century Alexandrian papyrus for commercial salvage treasure hunters.',
        howItWasDone: 'Under cover of a severe harbor storm, Cassavetes took a motorized Zodiac dinghy from his offshore yacht to the consulate seawall. Using a grappling hook and rope ladder, he climbed onto the library balcony, shattered the glass with a spring-loaded center punch during a thunderclap, rolled the papyrus into a watertight survival tube, and descended back into his dinghy before the watchman could reach the room.',
        whyItHappened: 'Cassavetes had agreed to sell the lost coordinates of Heracleion’s sunken gold treasury to an illicit deep-sea salvage syndicate.',
        decisiveEvidenceWalkthrough: 'EV-50 tied the dinghy cleats and scuba weights on the seawall to Cassavetes’s yacht. EV-51 recovered the papyrus in his yacht’s secret bilge safe. EV-52 proved the entry was made from the balcony.',
        whyOthersAreInnocent: 'Moreau has debilitating vertigo and cannot approach balconies, and Sophie Laurent had already made full digital scans and had no reason to steal the physical relic.'
      }
    }
  },
  {
    id: 'case-019',
    caseNumber: 'CASE-019',
    title: 'The Medici Ledger',
    category: 'historical',
    categoryDisplay: 'Historical & Ancient',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'A 1478 Medici banking ledger containing secret papal debt agreements vanishes from a private Renaissance villa library in Florence.',
    fullStory: `At Villa San Miniato outside Florence, an exhibition was underway celebrating the survival of the 1478 Medici Secret Ledger—a leather-bound parchment recording illicit banking loans between Lorenzo de' Medici and the Vatican. At 11:00 PM, Count Ranieri found the glass study vitrine unlocked and the ledger missing.

The key to the vitrine was locked inside the Count’s antique iron desk, which showed no signs of tampering. On the desk was an unlit oil lamp smelling faintly of citrus and almond oil. Three guests spent the evening in the villa study: Art Historian Dr. Matteo Rossi, Archival Appraiser Francesca Bellini, and Vatican Archivist Father Bernardo.`,
    setting: 'Villa San Miniato, Florence Hills',
    tags: ['Renaissance', 'Invisible Ink', 'Medici Ledger', 'Vatican Secret'],
    suspects: [
      {
        id: 'susp-056',
        name: 'Dr. Matteo Rossi',
        age: 47,
        occupation: 'Renaissance Historian',
        relationToCase: 'Published controversial theories claiming the ledger was a 16th-century forgery',
        alibi: 'Strolling in the courtyard gardens between 10:15 PM and 11:00 PM.',
        motive: 'Desperate to prevent the ledger from being scientifically carbon-dated to protect his academic reputation.',
        knownFacts: [
          'Carried an ultraviolet inspection flashlight and organic chemical solvents in his briefcase.',
          'Had traces of lemon oil on his fingers.'
        ],
        statement: 'I stepped outside to smoke a cigar. The cool air cleared my thoughts. I never touched Ranieri’s desk.'
      },
      {
        id: 'susp-057',
        name: 'Francesca Bellini',
        age: 39,
        occupation: 'Private Archival Appraiser',
        relationToCase: 'Assessing the estate for inheritance tax purposes',
        alibi: 'In the drawing room discussing baroque tapestries with the Countess.',
        motive: 'Struggling with debts from her antique dealership.',
        knownFacts: [
          'Countess verified her continuous presence from 10:00 PM onwards.'
        ],
        statement: 'Countess Ranieri and I were reviewing the dining room tapestries the entire hour.'
      },
      {
        id: 'susp-058',
        name: 'Father Bernardo',
        age: 61,
        occupation: 'Vatican Secret Archives Representative',
        relationToCase: 'Representing the Holy See’s historical commission',
        alibi: 'Reading vespers in the villa chapel.',
        motive: 'Desire to reclaim sensitive Vatican debt records.',
        knownFacts: [
          'Chapel caretaker verified Bernardo remained in the choir pews until 11:15 PM.'
        ],
        statement: 'My mission is observation, not theft. God bears witness I was in the chapel praying.'
      }
    ],
    evidence: [
      {
        id: 'ev-053',
        code: 'EV-53',
        title: 'Wax Impression Block in Rossi’s Pocket',
        type: 'physical',
        category: 'Lock Forensics',
        collectedAt: 'Oct 30, 11:45 PM',
        locationFound: 'Inside Matteo Rossi’s tailored vest pocket',
        summary: 'Dental wax block bearing the impression of the Count’s antique iron desk key.',
        detailedContent: 'Rossi made a dental wax impression of the desk key during tea at 5:00 PM, cut a brass blank using handheld jeweler’s files in his car, and used the duplicate to unlock the desk and vitrine without leaving scratches.'
      },
      {
        id: 'ev-054',
        code: 'EV-54',
        title: 'Citrus Solvent and Burner Lamp',
        type: 'physical',
        category: 'Chemical Forensics',
        collectedAt: 'Oct 30, 11:30 PM',
        locationFound: 'Villa study desk',
        summary: 'Almond oil and citric acid mixture used to dissolve ancient wax seals.',
        detailedContent: 'The solvent allowed Rossi to soften the 500-year-old beeswax seal binding the ledger without cracking the papal insignia, enabling him to slide the parchment leaves out into a flat leather portfolio.'
      },
      {
        id: 'ev-055',
        code: 'EV-55',
        title: 'Ledger Leaves Recovered in Rossi’s Vehicle Spare Tire',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Nov 01, 12:30 AM',
        locationFound: 'Rossi’s Alfa Romeo trunk spare tire compartment',
        summary: 'The original 1478 Medici parchment leaves wrapped in acid-free archival tissue.',
        detailedContent: 'Concealed inside the hollow wheel rim of Rossi’s spare tire.'
      }
    ],
    timeline: [
      {
        id: 'time-073',
        time: '05:00 PM',
        order: 1,
        title: 'Key Impression Taken',
        description: 'Rossi excuses himself to wash hands; presses desk key into wax block.',
        location: 'Study'
      },
      {
        id: 'time-074',
        time: '10:20 PM',
        order: 2,
        title: 'Study Infiltration',
        description: 'Rossi slips into the study while guests are in the drawing room.',
        location: 'Study'
      },
      {
        id: 'time-075',
        time: '10:35 PM',
        order: 3,
        title: 'Wax Seal Dissolved',
        description: 'Citrus-almond solvent applied to soften medieval beeswax.',
        location: 'Study Vitrine'
      },
      {
        id: 'time-076',
        time: '11:00 PM',
        order: 4,
        title: 'Theft Discovered',
        description: 'Count Ranieri enters study to find vitrine empty and keys returned to desk.',
        location: 'Study'
      }
    ],
    witnesses: [
      {
        id: 'wit-020',
        witnessName: 'Gianluigi the Butler',
        role: 'Head Butler',
        interviewTime: 'Oct 30, 11:30 PM',
        statement: 'At 10:25 PM, I saw Dr. Rossi emerging from the study hallway tucking a large dark portfolio under his coat before walking toward the courtyard.',
        contradictionHint: 'Breaks Rossi’s garden stroll alibi.'
      }
    ],
    locations: [
      {
        id: 'loc-020',
        name: 'Villa San Miniato Study',
        description: 'Renaissance library with walnut wainscoting and antique iron safe-desk.',
        accessible: true,
        notes: 'Vitrine key was kept inside the locked iron desk.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Unscratched Lock',
        text: 'The desk lock had zero scratches or pick marks. How could someone open it without force?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'The Citrus Scent',
        text: 'The citrus and almond scent on the desk was a delicate chemical solvent used to dissolve Renaissance beeswax seals without breaking them.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Spare Tire in the Alfa Romeo',
        text: 'Dr. Rossi forged a duplicate key from a wax impression, dissolved the seals to steal the parchment, and stashed the ledger inside his car spare tire.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-056',
      methodId: 'method-073',
      motiveId: 'motive-073',
      criticalEvidenceIds: ['ev-053', 'ev-054', 'ev-055'],
      methodOptions: [
        { id: 'method-073', text: 'Forged a duplicate desk key using dental wax, dissolved the ancient beeswax seals with citrus-almond solvent, and concealed the ledger in his spare tire.' },
        { id: 'method-074', text: 'Bypassed the vitrine glass using a high-frequency diamond vibration tool.' },
        { id: 'method-075', text: 'Lowered a magnetic grapple down the library chimney.' },
        { id: 'method-076', text: 'Bribed Gianluigi the butler to unlock the safe desk.' }
      ],
      motiveOptions: [
        { id: 'motive-073', text: 'To prevent upcoming carbon-dating and pigment tests that would prove his published books were based on false historical theories.' },
        { id: 'motive-074', text: 'To sell the Vatican debt records to an overseas private hedge fund.' },
        { id: 'motive-075', text: 'To frame Father Bernardo for stealing Holy See relics.' },
        { id: 'motive-076', text: 'To claim private insurance rewards on the lost ledger.' }
      ],
      fullExplanation: {
        whatHappened: 'Historian Dr. Matteo Rossi stole the 1478 Medici Ledger using a forged wax-impression key and solvent to prevent scientific tests that would ruin his career.',
        howItWasDone: 'Rossi took a dental wax mold of the desk key during an afternoon visit, filed a blank key in his vehicle, and unlocked the desk and vitrine at 10:20 PM. He used a citrus-almond organic solvent to safely dissolve the 500-year-old beeswax seal without damaging the parchment, slipped the leaves into his portfolio, locked the desk back up, and hid the parchment inside the spare tire of his Alfa Romeo.',
        whyItHappened: 'Rossi’s bestselling academic monographs asserted the Medici ledger was an elaborate 16th-century forgery. The upcoming carbon-dating tests would prove the ledger was 100% authentic, destroying his academic tenure and reputation.',
        decisiveEvidenceWalkthrough: 'EV-53 caught the wax mold in Rossi’s pocket. EV-54 linked the citrus solvent to the desk residue. EV-55 recovered the ancient parchment hidden inside his spare tire.',
        whyOthersAreInnocent: 'Francesca Bellini was in full view of the Countess in the drawing room, and Father Bernardo was verified praying in the chapel choir pews by the caretaker.'
      }
    }
  },
  {
    id: 'case-020',
    caseNumber: 'CASE-020',
    title: 'The Lost Expedition Log',
    category: 'historical',
    categoryDisplay: 'Historical & Ancient',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'The 1912 frozen diary of an Arctic explorer is vandalized inside the Royal Geographical Society vaults, with three crucial coordinate pages sliced out.',
    fullStory: `In the subterranean archives of the Royal Geographical Society in Kensington, the newly thawed diary of Captain Edward Thorne—who vanished near Svalbard in 1912—was being analyzed before its public display. At 8:00 AM, Senior Conservator Helen Vance discovered the display case unclasped.

Three consecutive pages containing Captain Thorne’s final celestial navigation coordinates had been surgically cut from the leather binding with an ultra-fine scalpel. The vault’s biometric keypad recorded three researchers entering between 6:00 PM yesterday and 7:30 AM today: Arctic Geologist Dr. Karl Lindqvist, Cartographic Historian Ronald Vance, and Expedition Sponsor Julian Montgomery.`,
    setting: 'Royal Geographical Society Archives, Kensington',
    tags: ['Arctic Expedition', 'Surgically Sliced Pages', 'Gold Cache Coordinates', 'Scalpel'],
    suspects: [
      {
        id: 'susp-059',
        name: 'Dr. Karl Lindqvist',
        age: 46,
        occupation: 'Arctic Geologist',
        relationToCase: 'Leading a modern mining survey vessel to Svalbard next week',
        alibi: 'In the geology laboratory testing permafrost soil samples until 9:00 PM.',
        motive: 'Thorne’s missing pages recorded the exact location of a rich unmined diamond pipe in northern Spitsbergen.',
        knownFacts: [
          'Holds commercial mining exploration permits for Svalbard.',
          'Possesses surgical micro-scalpels for core sample dissection.',
          'Carried an empty waterproof map pocket in his parka.'
        ],
        statement: 'I am interested in the ice core records, not old journal entries. My flight leaves next Tuesday for Tromsø.'
      },
      {
        id: 'susp-060',
        name: 'Ronald Vance',
        age: 55,
        occupation: 'Cartographic Historian',
        relationToCase: 'Great-nephew of Captain Edward Thorne',
        alibi: 'Cataloging glass lantern slides in the outer reading room.',
        motive: 'Protecting family honor against rumors of mutiny in the diary.',
        knownFacts: [
          'Left the building at 7:00 PM under CCTV observation.',
          'Carried only an umbrella and briefcase, both inspected at security.'
        ],
        statement: 'I want my great-uncle’s memory honored, not mutilated. Cutting his diary is an outrage.'
      },
      {
        id: 'susp-061',
        name: 'Julian Montgomery',
        age: 38,
        occupation: 'Expedition Sponsor',
        relationToCase: 'Funded the glacier recovery mission that retrieved the frozen diary',
        alibi: 'At a dinner party at the Travellers Club until 11:30 PM.',
        motive: 'Claimed ownership rights over all recovered artifacts.',
        knownFacts: [
          'Arrival at the Travellers Club verified by club registry.',
          'Did not re-enter the archives until 8:30 AM.'
        ],
        statement: 'I spent £200,000 recovering that diary. Why would I cut my own historical asset to pieces?'
      }
    ],
    evidence: [
      {
        id: 'ev-056',
        code: 'EV-56',
        title: 'Micro-Scalpel Blade with Calfskin Residue',
        type: 'physical',
        category: 'Forensic Tool',
        collectedAt: 'Nov 20, 09:30 AM',
        locationFound: 'Geology lab chemical disposal bin',
        summary: 'No. 11 surgical scalpel blade matching the precise cut incisions on the diary binding.',
        detailedContent: 'Under stereomicroscopy, the blade displayed 110-year-old aged linen paper fibers, frozen calfskin leather binding fragments, and DNA matching Dr. Karl Lindqvist.'
      },
      {
        id: 'ev-057',
        code: 'EV-57',
        title: 'Missing Pages Inside Geology Core Sample Cylinder',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Nov 20, 11:00 AM',
        locationFound: 'Dr. Lindqvist’s cryo-sample shipping crate',
        summary: 'Three intact brittle pages rolled inside a hollow brass permafrost drill tube.',
        detailedContent: 'The pages contained Captain Thorne’s hand-drawn sketch of "Mount Kimberlite" and sextant coordinates for an exposed diamondiferous kimberlite pipe in Svalbard.'
      }
    ],
    timeline: [
      {
        id: 'time-077',
        time: '06:15 PM',
        order: 1,
        title: 'Lindqvist Badge Swipe',
        description: 'Lindqvist enters the archive vault carrying core sample equipment.',
        location: 'Archive Vault'
      },
      {
        id: 'time-078',
        time: '06:30 PM',
        order: 2,
        title: 'Surgical Incision',
        description: 'Lindqvist uses No. 11 scalpel to excise coordinates from Thorne’s log.',
        location: 'Vault Vitrine'
      },
      {
        id: 'time-079',
        time: '08:00 AM',
        order: 3,
        title: 'Discovery',
        description: 'Morning conservator spots severed pages; alarm raised.',
        location: 'Archive Vault'
      }
    ],
    witnesses: [
      {
        id: 'wit-021',
        witnessName: 'Helen Vance',
        role: 'Senior Conservator',
        interviewTime: 'Nov 20, 09:00 AM',
        statement: 'The cut was made with a surgeon’s precision—no ragged tears. Only someone skilled in delicate geological sample preparation could have sliced through the brittle century-old vellum without splitting the adjacent pages.',
        contradictionHint: 'Points directly to Lindqvist’s micro-scalpel training.'
      }
    ],
    locations: [
      {
        id: 'loc-021',
        name: 'RGS Subterranean Vault',
        description: 'Reinforced climate-controlled room storing 19th- and 20th-century explorer logs.',
        accessible: true,
        notes: 'Monitored by electronic badge entry logs.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Tool of Choice',
        text: 'The cuts were made with a No. 11 surgical core scalpel. Who uses micro-scalpels in their daily scientific work?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'The Arctic Departure',
        text: 'Dr. Lindqvist is sailing to Svalbard next Tuesday on a commercial mining survey. What was he looking for in Thorne’s coordinates?',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Core Drill Cylinder',
        text: 'Lindqvist used his micro-scalpel to excise the kimberlite diamond coordinates and hid them inside a hollow core drill tube in his cryo-crate.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-059',
      methodId: 'method-077',
      motiveId: 'motive-077',
      criticalEvidenceIds: ['ev-056', 'ev-057'],
      methodOptions: [
        { id: 'method-077', text: 'Excised the three coordinate pages using a No. 11 surgical core scalpel during his evening vault access and concealed them inside a hollow drill core cylinder in his expedition freight.' },
        { id: 'method-078', text: 'Photographed the pages and used sulfuric acid to burn the originals.' },
        { id: 'method-079', text: 'Bribed security guards to unlock the vitrine at 3:00 AM.' },
        { id: 'method-080', text: 'Substituted the whole diary with a modern leather replica.' }
      ],
      motiveOptions: [
        { id: 'motive-077', text: 'To secure the secret coordinates of an untapped Svalbard diamondiferous kimberlite pipe for his mining expedition next week.' },
        { id: 'motive-078', text: 'To protect the family reputation of Captain Thorne.' },
        { id: 'motive-079', text: 'To sell the pages at an overseas auction.' },
        { id: 'motive-080', text: 'To sabotage Julian Montgomery’s recovery venture.' }
      ],
      fullExplanation: {
        whatHappened: 'Arctic Geologist Dr. Karl Lindqvist excised three coordinate pages from Captain Thorne’s 1912 diary to monopolize a diamond discovery in Svalbard.',
        howItWasDone: 'Lindqvist entered the vault at 6:15 PM with core-sampling equipment. Using a surgical No. 11 micro-scalpel, he excised the three brittle vellum pages containing the sextant coordinates of Mount Kimberlite. He rolled the pages into a hollow drill tube in his expedition shipping crate, discarded the blade in the lab disposal bin, and prepared to board his survey vessel to stake the mining claim.',
        whyItHappened: 'The diary held the sole recorded coordinates of a multi-million-pound diamond pipe, which Lindqvist planned to register in his name upon arriving in Svalbard.',
        decisiveEvidenceWalkthrough: 'EV-56 matched Lindqvist’s DNA and diary calfskin fibers on the scalpel blade. EV-57 recovered the stolen coordinate pages rolled inside his drill core cylinder.',
        whyOthersAreInnocent: 'Ronald Vance was searched at security with zero items, and Julian Montgomery was verified at the Travellers Club dinner party.'
      }
    }
  },
  {
    id: 'case-021',
    caseNumber: 'CASE-021',
    title: 'The Secret of Room 13 at Old Fort',
    category: 'historical',
    categoryDisplay: 'Historical & Ancient',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-25 MIN',
    shortDescription: 'An 1802 solid silver colonial governor’s seal is replaced by a pewter fake inside a locked armory room at Fort Saint George.',
    fullStory: `At the Fort Saint George Museum in Chennai, the 1802 Great Seal of the East India Company Governor—cast from 1.5 kilograms of solid hallmarked silver—was on display inside the historic Room 13 armory vault. At 4:00 PM during the daily handover, Curator V. Ramanathan noticed that the seal felt strangely light on the balance scale.

Specific gravity testing revealed the seal on display was an exact cast replica made of cheap pewter and lead, finished with silver electroplate. The glass case was locked with its unique dual-lever mortise padlock, and no signs of forcible entry were found. Three individuals had entered Room 13 during the morning inventory: Chief Curator V. Ramanathan, Master Jeweler and Restorer Anthony Cruz, and Heritage Archivist Kavita Rao.`,
    setting: 'Room 13 Armory, Fort Saint George Museum, Chennai',
    tags: ['Colonial Relic', 'Silver Seal', 'Pewter Replica', 'Weight Discrepancy'],
    suspects: [
      {
        id: 'susp-062',
        name: 'Anthony Cruz',
        age: 49,
        occupation: 'Master Silversmith & Restorer',
        relationToCase: 'Contracted to clean tarnish off colonial silver relics',
        alibi: 'Polishing silver salvers in the restoration workshop from 11:00 AM to 3:00 PM.',
        motive: 'Deep debts from private metal casting foundry expansions.',
        knownFacts: [
          'Possesses commercial centrifuge casting machines and silver electroplating tanks.',
          'Carried an unusually heavy leather tool bag when leaving at 3:15 PM.',
          'Had traces of pewter casting sand on his workbench apron.'
        ],
        statement: 'I polished the exterior vitrine brass at 11:30 AM. I never unlocked the case itself.'
      },
      {
        id: 'susp-063',
        name: 'V. Ramanathan',
        age: 58,
        occupation: 'Chief Museum Curator',
        relationToCase: 'Keyholder to the dual-lever mortise padlock',
        alibi: 'Attending administrative budget meetings with the tourism ministry.',
        motive: 'Retiring in three months with unblemished record.',
        knownFacts: [
          'Personally discovered and reported the weight discrepancy.',
          'Has worked at the fort for 32 years.'
        ],
        statement: 'I weigh every precious metal item during the 4:00 PM change of watch. The counterfeit felt noticeably lighter in my palm.'
      },
      {
        id: 'susp-064',
        name: 'Kavita Rao',
        age: 32,
        occupation: 'Archivist & Cataloger',
        relationToCase: 'Auditing 19th-century treaty registries',
        alibi: 'In the document reading room scanning colonial letters.',
        motive: 'None identified.',
        knownFacts: [
          'No metallurgy or metal casting background.',
          'Remained under reading room CCTV.'
        ],
        statement: 'I spent the morning cross-referencing treaty dates. I wouldn’t even know how to melt a silver spoon.'
      }
    ],
    evidence: [
      {
        id: 'ev-058',
        code: 'EV-58',
        title: 'Vulcanized Rubber Mold in Cruz’s Workshop',
        type: 'physical',
        category: 'Manufacturing Evidence',
        collectedAt: 'Dec 02, 05:30 PM',
        locationFound: 'Anthony Cruz’s private workshop locker',
        summary: 'High-temperature vulcanized rubber mold of the 1802 Great Seal.',
        detailedContent: 'The mold bore microscopic silver particles embedded in the silicon rubber and matching casting sprues to the pewter replica found on display.'
      },
      {
        id: 'ev-059',
        code: 'EV-59',
        title: 'Original Solid Silver Seal Recovered in Smelter Crucible',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Dec 02, 06:15 PM',
        locationFound: 'Cruz’s foundry melting kiln',
        summary: 'The 1.5 kg silver seal, wrapped in fireproof ceramic insulation before melting.',
        detailedContent: 'Discovered sitting on the furnace shelf just minutes before the scheduled 7:00 PM smelting cycle.'
      }
    ],
    timeline: [
      {
        id: 'time-080',
        time: '11:30 AM',
        order: 1,
        title: 'Brass Polishing Shift',
        description: 'Cruz enters Room 13 alone with polishing equipment and tool bag.',
        location: 'Room 13'
      },
      {
        id: 'time-081',
        time: '11:45 AM',
        order: 2,
        title: 'The Replica Swap',
        description: 'Cruz uses a pick to open the dual-lever padlock and swaps the seals.',
        location: 'Room 13 Vitrine'
      },
      {
        id: 'time-082',
        time: '03:15 PM',
        order: 3,
        title: 'Departure',
        description: 'Cruz leaves the fort carrying his tool bag.',
        location: 'Fort Gate'
      },
      {
        id: 'time-083',
        time: '04:00 PM',
        order: 4,
        title: 'Weight Audit Discrepancy',
        description: 'Ramanathan discovers weight shortfall on the balance scale.',
        location: 'Room 13'
      }
    ],
    witnesses: [
      {
        id: 'wit-022',
        witnessName: 'Sundaram the Security Guard',
        role: 'Fort Armory Sentry',
        interviewTime: 'Dec 02, 04:30 PM',
        statement: 'Cruz spent twenty minutes polishing the case in Room 13. When he came out, his leather tool bag clanked against the stone archway and looked much heavier on his shoulder than when he arrived.',
        contradictionHint: 'Corroborates Cruz carrying the 1.5 kg silver seal out in his bag.'
      }
    ],
    locations: [
      {
        id: 'loc-022',
        name: 'Room 13 Armory Vault',
        description: 'Thick stone colonial munitions chamber housing historic insignias.',
        accessible: true,
        notes: 'Showcases secured with antique British dual-lever brass padlocks.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Specific Gravity and Metal Casting',
        text: 'The replica was cast from pewter and lead with a silver electroplate. Who in the fort operates casting foundries and electroplating equipment?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'The Clanking Tool Bag',
        text: 'The security sentry noted Cruz’s tool bag was significantly heavier when he walked out at 3:15 PM.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Furnace Crucible',
        text: 'Anthony Cruz manufactured the vulcanized rubber mold beforehand, picked the padlock while polishing the glass, and had the genuine 1.5 kg silver seal ready for the smelting kiln.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-062',
      methodId: 'method-081',
      motiveId: 'motive-081',
      criticalEvidenceIds: ['ev-058', 'ev-059'],
      methodOptions: [
        { id: 'method-081', text: 'Cast an exact pewter replica beforehand using a vulcanized mold, picked the vitrine padlock during polishing, and carried the authentic 1.5 kg silver seal out in his tool bag to melt down.' },
        { id: 'method-082', text: 'Cut the glass bottom using an angle grinder.' },
        { id: 'method-083', text: 'Bribed Curator Ramanathan to leave the case unlocked.' },
        { id: 'method-084', text: 'Replaced the silver seal through an exterior ventilation louver.' }
      ],
      motiveOptions: [
        { id: 'motive-081', text: 'To melt the 1.5 kg antique silver into untraceable bullion ingots to pay off mounting foundry equipment debts.' },
        { id: 'motive-082', text: 'To return the seal to an East India Company descendant.' },
        { id: 'motive-083', text: 'To frame Ramanathan before his retirement.' },
        { id: 'motive-084', text: 'To sell the historical artifact to a private London collector.' }
      ],
      fullExplanation: {
        whatHappened: 'Silversmith Anthony Cruz fabricated an electroplated pewter replica and swapped it with the 1802 solid silver seal to melt it down for bullion.',
        howItWasDone: 'During previous restoration audits, Cruz made a vulcanized rubber cast of the seal. At his foundry, he poured a pewter-lead replica and electroplated it in fine silver. During his scheduled morning polishing in Room 13, he picked the dual-lever padlock, swapped the authentic 1.5 kg silver seal with his replica, and carried the genuine treasure out inside his heavy leather tool bag to his melting kiln.',
        whyItHappened: 'Cruz was facing bankruptcy from high-interest machinery loans and needed liquid silver bullion that could not be traced by police serial numbers.',
        decisiveEvidenceWalkthrough: 'EV-58 uncovered the vulcanized rubber casting mold with silver residue in Cruz’s locker. EV-59 found the authentic 1.5 kg silver seal in his foundry furnace waiting to be smelted.',
        whyOthersAreInnocent: 'Ramanathan reported the discrepancy himself on the scale, and Kavita Rao was on camera scanning colonial manuscripts all morning.'
      }
    }
  }
];
