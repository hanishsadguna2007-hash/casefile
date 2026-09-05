import { Mystery } from '@/types/mystery';

export const modernMysteries: Mystery[] = [
  {
    id: 'case-025',
    caseNumber: 'CASE-025',
    title: 'The Algorithmic Blackmail',
    category: 'modern',
    categoryDisplay: 'Modern Mysteries',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-30 MIN',
    shortDescription: 'The CEO of an AI unicorn receives extortion demands that predict his exact private verbal conversations held inside an offline executive boardroom.',
    fullStory: `At Synthetix AI in Shoreditch, CEO Liam Cross received an anonymous encrypted email demanding £5 million in Bitcoin. The email included verbatim transcripts of three private conversations held inside the 14th-floor executive boardroom—a secure, RF-shielded room swept daily for bugs, where mobile phones and laptops are strictly prohibited.

The transcripts contained private mergers-and-acquisitions terms whispered between Cross and his venture capital partners just four hours earlier. Forensic cyber teams confirmed the corporate network had no external malware intrusions. Three senior executives attended the offline boardroom meetings: Chief Technology Officer Sarah Vance, Chief Financial Officer Neil Patel, and Facilities Director Greg Morris.`,
    setting: 'Synthetix AI Headquarters, 14th Floor Boardroom, Shoreditch',
    tags: ['Cyber Crime', 'Laser Microphone', 'Office Blackmail', 'Insider Threat'],
    suspects: [
      {
        id: 'susp-074',
        name: 'Greg Morris',
        age: 41,
        occupation: 'Facilities & Hardware Maintenance Director',
        relationToCase: 'Installed the new smart thermostat and motorized window shades',
        alibi: 'In the basement HVAC control room during the afternoon meetings.',
        motive: 'Denied company equity shares before the upcoming IPO.',
        knownFacts: [
          'Possesses micro-soldering and custom IoT firmware development skills.',
          'Replaced the boardroom smart thermostat unit yesterday morning.',
          'Purchased ESP32 Wi-Fi micro-controllers online.'
        ],
        statement: 'I just maintain the heating and physical building. I don’t even understand machine learning algorithms.'
      },
      {
        id: 'susp-075',
        name: 'Sarah Vance',
        age: 36,
        occupation: 'Chief Technology Officer',
        relationToCase: 'Lead architect of Synthetix’s core AI models',
        alibi: 'Present in the boardroom during all three conversations.',
        motive: 'Threatened with being replaced by an external CTO post-IPO.',
        knownFacts: [
          'Deposited personal devices in the security lockbox outside the door.',
          'Wore an analog mechanical watch.'
        ],
        statement: 'I was sitting right across the table from Liam. Everything we discussed was strictly confidential.'
      },
      {
        id: 'susp-076',
        name: 'Neil Patel',
        age: 45,
        occupation: 'Chief Financial Officer',
        relationToCase: 'Managing the £50M acquisition negotiations',
        alibi: 'Present in the boardroom during all discussions.',
        motive: 'Secretly shorted company partner stocks.',
        knownFacts: [
          'Followed all security protocols.',
          'No hardware or electronics tampering experience.'
        ],
        statement: 'This leak threatens our entire acquisition. Why would I destroy my own valuation?'
      }
    ],
    evidence: [
      {
        id: 'ev-068',
        code: 'EV-68',
        title: 'Implanted Micro-Transmitter in Smart Thermostat',
        type: 'digital',
        category: 'Hardware Espionage',
        collectedAt: 'Jan 28, 08:30 PM',
        locationFound: 'Boardroom wall thermostat housing',
        summary: 'A MEMS acoustic microphone and ESP32 chip drawing power from HVAC 24V line.',
        detailedContent: 'The hardware was soldered onto the back of the official Honeywell thermostat circuit board. It converted room acoustic audio into encrypted data packets and transmitted them over the building’s unmonitored industrial building automation Zigbee network.'
      },
      {
        id: 'ev-069',
        code: 'EV-69',
        title: 'Receiving Laptop in Basement Boiler Room',
        type: 'digital',
        category: 'Cyber Forensics',
        collectedAt: 'Jan 28, 09:15 PM',
        locationFound: 'Locked tool cage in basement boiler room',
        summary: 'A Raspberry Pi Zigbee receiver connected to Greg Morris’s personal cloud account.',
        detailedContent: 'The device recorded the audio streams from the 14th-floor thermostat, converted them into text using an open-source speech-to-text API, and drafted the extortion emails.'
      }
    ],
    timeline: [
      {
        id: 'time-095',
        time: 'Yesterday 09:00 AM',
        order: 1,
        title: 'Thermostat Replacement',
        description: 'Greg Morris replaces boardroom thermostat citing "temperature calibration error."',
        location: '14th Floor Boardroom'
      },
      {
        id: 'time-096',
        time: 'Today 02:00 PM',
        order: 2,
        title: 'Private M&A Discussion',
        description: 'Liam Cross whispers buyout terms to Sarah and Neil in the offline room.',
        location: '14th Floor Boardroom'
      },
      {
        id: 'time-097',
        time: 'Today 06:12 PM',
        order: 3,
        title: 'Extortion Email Received',
        description: 'Anonymous Bitcoin extortion arrives with verbatim transcripts.',
        location: 'CEO Email Inbox'
      }
    ],
    witnesses: [
      {
        id: 'wit-026',
        witnessName: 'Chloe Bennett',
        role: 'Executive Assistant',
        interviewTime: 'Jan 28, 08:00 PM',
        statement: 'Mr. Morris insisted on fixing the boardroom thermostat alone yesterday morning and told me not to let anyone enter until he finished his wiring.',
        contradictionHint: 'Connects Morris directly to the thermostat tampering window.'
      }
    ],
    locations: [
      {
        id: 'loc-026',
        name: 'The 14th Floor Boardroom',
        description: 'Faraday-shielded conference room with acoustic double-glazing.',
        accessible: true,
        notes: 'Building HVAC wires pass through the drywall into the central mechanical chase.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Inside the Physical Fixtures',
        text: 'Mobile devices were banned from the room. What permanent electrical fixture was recently replaced?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'Building Automation Channels',
        text: 'The data did not travel over corporate Wi-Fi. Check the industrial Zigbee frequency used by building environmental controls.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Boiler Room Receiver',
        text: 'Greg Morris implanted a MEMS microphone inside the thermostat and routed the audio to a Zigbee receiver in his basement tool cage.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-074',
      methodId: 'method-097',
      motiveId: 'motive-097',
      criticalEvidenceIds: ['ev-068', 'ev-069'],
      methodOptions: [
        { id: 'method-097', text: 'Implanted a MEMS acoustic microphone and ESP32 transmitter inside the boardroom thermostat, transmitting audio over building Zigbee networks to a receiver in the basement.' },
        { id: 'method-098', text: 'Used a laser microphone aimed at the window from an opposite building.' },
        { id: 'method-099', text: 'Bribed Sarah Vance to smuggle in a recording smartwatch.' },
        { id: 'method-100', text: 'Hacked the boardroom smart lighting bulbs via Bluetooth.' }
      ],
      motiveOptions: [
        { id: 'motive-097', text: 'Resentment over denied stock options before the IPO, seeking a £5M Bitcoin payout.' },
        { id: 'motive-098', text: 'To assist a rival AI company in corporate espionage.' },
        { id: 'motive-099', text: 'To frame Neil Patel for financial insider leaks.' },
        { id: 'motive-100', text: 'Personal revenge over salary disputes.' }
      ],
      fullExplanation: {
        whatHappened: 'Facilities Director Greg Morris bugged the executive boardroom using an implanted micro-transmitter inside the smart thermostat to blackmail the CEO.',
        howItWasDone: 'Morris replaced the boardroom thermostat yesterday under the pretense of calibration. Inside the casing, he soldered a MEMS microphone and an ESP32 chip powered by the 24V HVAC transformer. The audio was transmitted over the non-monitored Zigbee HVAC building network to a hidden receiver in his basement tool cage, where speech-to-text software generated the transcripts used in the extortion emails.',
        whyItHappened: 'Morris was furious after being denied equity in the upcoming multi-billion dollar IPO and sought an untraceable cryptocurrency ransom.',
        decisiveEvidenceWalkthrough: 'EV-68 identified the soldered MEMS microphone inside the thermostat. EV-69 recovered the Zigbee receiver and draft emails in Morris’s basement tool cage.',
        whyOthersAreInnocent: 'Sarah Vance and Neil Patel complied strictly with all security lockbox protocols and had zero access to the hardware components.'
      }
    }
  },
  {
    id: 'case-026',
    caseNumber: 'CASE-026',
    title: 'The Disappearing Influencer',
    category: 'modern',
    categoryDisplay: 'Modern Mysteries',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-25 MIN',
    shortDescription: 'A popular live streamer vanishes mid-broadcast from her smart penthouse during an apparent home invasion.',
    fullStory: `At 9:42 PM during a live gaming broadcast to 200,000 viewers, gaming streamer Chloe Ray was sitting in her smart penthouse gaming studio. Suddenly, the background studio lights flickered off, glass shattered in the living room off-camera, and viewers heard Chloe scream "Who are you?!" before the webcam feed abruptly glitched to static.

Police arrived 12 minutes later. The heavy digital deadbolt on the penthouse door was locked. Inside, Chloe was gone. Her phone was sitting on her streaming desk, a window in the living room was shattered onto the balcony, and an expensive diamond watch was left untouched on the vanity. Three individuals had keycard codes or were seen nearby: Her Manager Max Vance, Her Ex-Boyfriend Tyler Reed, and Delivery Driver Liam Cole.`,
    setting: 'Skyline Luxury Penthouse, Canary Wharf',
    tags: ['Live Stream', 'Staged Kidnapping', 'OBS Loop', 'Social Media Hoax'],
    suspects: [
      {
        id: 'susp-077',
        name: 'Tyler Reed',
        age: 26,
        occupation: 'Ex-Boyfriend & Crypto Trader',
        relationToCase: 'Issued a public restraining order last month',
        alibi: 'In a gym three miles away; keycard log verified.',
        motive: 'Public disputes and stalking allegations.',
        knownFacts: [
          'Gym security cameras confirm his presence during the live stream broadcast window.'
        ],
        statement: 'I was working out. Check the gym cameras. I haven’t spoken to Chloe in weeks.'
      },
      {
        id: 'susp-078',
        name: 'Max Vance',
        age: 33,
        occupation: 'Talent Manager & Producer',
        relationToCase: 'Managed Chloe’s brand sponsorships and streaming contracts',
        alibi: 'In his sports car parked across the street from the building.',
        motive: 'Chloe was signing with a rival agency next week, which would cost him his 20% commission.',
        knownFacts: [
          'Had access to Chloe’s streaming broadcasting software (OBS) and smart home control app.',
          'Purchased a one-way flight to Dubai booked in a false name.'
        ],
        statement: 'I was waiting outside to pick her up for a late dinner meeting. When the stream crashed, I ran to the lobby.'
      },
      {
        id: 'susp-079',
        name: 'Liam Cole',
        age: 22,
        occupation: 'Food Delivery Courier',
        relationToCase: 'Delivered sushi to the penthouse floor at 9:30 PM',
        alibi: 'Descending in the building elevator at 9:38 PM.',
        motive: 'None.',
        knownFacts: [
          'Lobby CCTV logged him leaving the building at 9:39 PM.'
        ],
        statement: 'I handed her the sushi at 9:30 PM. She seemed nervous and told me to leave quickly.'
      }
    ],
    evidence: [
      {
        id: 'ev-070',
        code: 'EV-70',
        title: 'Pre-Recorded OBS Media Source Injection',
        type: 'digital',
        category: 'Streaming Forensics',
        collectedAt: 'Feb 02, 10:45 PM',
        locationFound: 'Chloe’s streaming PC',
        summary: 'The "live" scream and glass-break sequence was a pre-recorded .mp4 video file.',
        detailedContent: 'Digital forensic audit of the OBS software showed that the camera input was switched to a pre-recorded video file titled "staged_stream_out.mp4" at 9:40 PM via a remote web-hook API from Max Vance’s phone. Chloe had actually left the building an hour earlier in disguise.'
      },
      {
        id: 'ev-071',
        code: 'EV-71',
        title: 'Chloe Found in Vance’s Private Getaway SUV',
        type: 'physical',
        category: 'Recovery',
        collectedAt: 'Feb 02, 11:30 PM',
        locationFound: 'Stansted Private Airfield Terminal Parking',
        summary: 'Chloe Ray alive and unharmed with blonde wig and new passport.',
        detailedContent: 'Chloe and Max had staged the entire kidnapping hoax to generate worldwide publicity, escape her restrictive talent exclusivity contracts, and flee to Dubai.'
      }
    ],
    timeline: [
      {
        id: 'time-098',
        time: '08:30 PM',
        order: 1,
        title: 'Chloe Leaves Early',
        description: 'Chloe Ray slips down the freight elevator in disguise.',
        location: 'Freight Exit'
      },
      {
        id: 'time-099',
        time: '09:00 PM',
        order: 2,
        title: 'Pre-Recorded Stream Broadcasts',
        description: 'Stream begins playing scheduled pre-recorded gameplay loop.',
        location: 'Streaming Server'
      },
      {
        id: 'time-100',
        time: '09:42 PM',
        order: 3,
        title: 'The Staged Attack',
        description: 'Remote trigger plays pre-recorded scream and static glitch to 200,000 viewers.',
        location: 'Twitch Feed'
      }
    ],
    witnesses: [
      {
        id: 'wit-027',
        witnessName: 'Doorman Dave Miller',
        role: 'Building Concierge',
        interviewTime: 'Feb 02, 10:15 PM',
        statement: 'At 8:30 PM, a woman wearing a heavy hoodie and sunglasses carrying a duffel bag left via the rear fire doors. In hindsight, it matched Miss Ray’s height.',
        contradictionHint: 'Proves Chloe left well before the supposed 9:42 PM kidnapping.'
      }
    ],
    locations: [
      {
        id: 'loc-027',
        name: 'Penthouse Gaming Studio',
        description: 'High-end studio with acoustic foam, multi-cam rig, and smart lighting.',
        accessible: true,
        notes: 'Living room window was broken from the inside outward.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'Inside or Outside Glass?',
        text: 'The shattered glass in the living room fell outward onto the balcony. The window was broken from inside the apartment.',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'OBS Software Logs',
        text: 'The broadcast was not live. Check the OBS logs for pre-recorded media file playback.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Viral Hoax',
        text: 'Max Vance and Chloe staged the kidnapping using a pre-recorded broadcast loop to escape contracts and flee to Dubai.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-078',
      methodId: 'method-101',
      motiveId: 'motive-101',
      criticalEvidenceIds: ['ev-070', 'ev-071'],
      methodOptions: [
        { id: 'method-101', text: 'Conspired with Chloe to broadcast a pre-recorded OBS video loop of a fake kidnapping while she escaped to Stansted Airport in disguise to void her contracts.' },
        { id: 'method-102', text: 'Broke in through the balcony and abducted her using chloroform.' },
        { id: 'method-103', text: 'Hired courier Liam Cole to smuggle her out in an insulated delivery box.' },
        { id: 'method-104', text: 'Lowered her down the building facade on a window washer crane.' }
      ],
      motiveOptions: [
        { id: 'motive-101', text: 'To generate massive viral publicity, void restrictive agency contracts, and flee with Chloe to Dubai.' },
        { id: 'motive-102', text: 'To collect ransom money from her parents.' },
        { id: 'motive-103', text: 'To frame Tyler Reed for revenge.' },
        { id: 'motive-104', text: 'A dispute over unpaid streaming sponsorships.' }
      ],
      fullExplanation: {
        whatHappened: 'Manager Max Vance and influencer Chloe Ray faked a dramatic kidnapping during a live stream using a pre-recorded OBS broadcast loop.',
        howItWasDone: 'Chloe slipped out of the building at 8:30 PM. Her streaming software was programmed to play pre-recorded gameplay, capped by a staged scream and static glitch triggered remotely by Max at 9:42 PM. Chloe broke the living room window from the inside before leaving to simulate a break-in. Max waited in his car to drive her directly to Stansted Airport.',
        whyItHappened: 'Chloe was locked in a draconian 5-year agency exclusivity contract; staging her disappearance allowed them to void the contract, cash in on viral hype, and relaunch under new brands in Dubai.',
        decisiveEvidenceWalkthrough: 'EV-70 proved the live stream was a pre-recorded video file triggered via web-hook. EV-71 recovered Chloe and Max together with false passports at the private airfield.',
        whyOthersAreInnocent: 'Tyler Reed was on camera at the gym miles away, and courier Liam Cole left the building before the stream ever cut off.'
      }
    }
  },
  {
    id: 'case-027',
    caseNumber: 'CASE-027',
    title: 'The Drone Over BioGen',
    category: 'modern',
    categoryDisplay: 'Modern Mysteries',
    difficulty: 3,
    difficultyLabel: 'Detective',
    estimatedTime: '20-25 MIN',
    shortDescription: 'A modified racing drone crashes into the courtyard of BioGen Labs carrying an encrypted flash drive containing stolen genetic sequencing data.',
    fullStory: `At 11:20 PM at the BioGen Pharmaceuticals campus in Cambridge, an unauthorized quadcopter drone collided with the glass atrium roof and crashed into the courtyard fountain. Recovered from the drone’s carbon-fiber gimbal was a water-resistant USB flash drive loaded with confidential mRNA cancer vaccine sequences stolen from the secure Level-4 biology server just twelve minutes earlier.

The server room requires biometric keycard entry, and its external network connections were physically air-gapped. Three employees were working late in the research wing: Lead Bio-Informatics Engineer Dr. Kenji Sato, Laboratory Technician Elena Rostova, and Facility Network Specialist Marcus Brody.`,
    setting: 'BioGen Research Campus, Cambridge Science Park',
    tags: ['Industrial Espionage', 'Air-Gapped Server', 'Drone Crash', 'RF Exfiltration'],
    suspects: [
      {
        id: 'susp-080',
        name: 'Dr. Kenji Sato',
        age: 39,
        occupation: 'Lead Bio-Informatics Engineer',
        relationToCase: 'Possesses access credentials to the Level-4 genomics server',
        alibi: 'In his office writing research grant reports from 10:00 PM to midnight.',
        motive: 'Dispute over royalties on the patent application.',
        knownFacts: [
          'Possesses commercial drone pilot licenses.',
          'Had high-frequency USB rubber-ducky flash drives in his desk drawer.'
        ],
        statement: 'I was working on grant deadlines. I don’t fly drones in the rain.'
      },
      {
        id: 'susp-081',
        name: 'Elena Rostova',
        age: 29,
        occupation: 'Laboratory Technician',
        relationToCase: 'Maintains cryo-sample centrifuges',
        alibi: 'Preparing cell culture media in the wet lab under video surveillance.',
        motive: 'Financial struggles.',
        knownFacts: [
          'CCTV confirms she was pipetting cell media in the wet lab continuously.'
        ],
        statement: 'I never touched the servers. I was with the cell cultures all night.'
      },
      {
        id: 'susp-082',
        name: 'Marcus Brody',
        age: 44,
        occupation: 'Facility Network Specialist',
        relationToCase: 'Managed server room ventilation and optical firewalls',
        alibi: 'Checking router status in the communications hub.',
        motive: 'Contracted by an overseas biotechnology competitor for £1 million.',
        knownFacts: [
          'Had access to the server room roof ventilation duct.',
          'Carried an RF drone ground controller in his car trunk.'
        ],
        statement: 'I was monitoring routing tables. I don’t know how files got onto that drone.'
      }
    ],
    evidence: [
      {
        id: 'ev-072',
        code: 'EV-72',
        title: 'Roof Ventilation Drop Duct & Solenoid Clamp',
        type: 'physical',
        category: 'Infiltration Mechanism',
        collectedAt: 'Feb 10, 12:15 AM',
        locationFound: 'Server room ceiling duct',
        summary: 'A mechanical cable clamp installed inside the roof air exhaust.',
        detailedContent: 'Sato connected a USB exfiltration drive inside the server room, threaded it through the ceiling exhaust duct, and released it directly into the drone’s magnetic claw hovering over the roof vent before high winds blew the drone into the atrium glass.'
      },
      {
        id: 'ev-073',
        code: 'EV-73',
        title: 'Drone Flight Controller GPS Log',
        type: 'digital',
        category: 'Avionics Forensics',
        collectedAt: 'Feb 10, 12:45 AM',
        locationFound: 'Crashed drone flight memory chip',
        summary: 'Flight path showing takeoff from Dr. Kenji Sato’s assigned parking bay.',
        detailedContent: 'The telemetry log recorded the drone took off from Space 42 (Dr. Sato’s reserved parking spot) at 11:12 PM, piloted via an iPad app linked to Sato’s corporate device ID.'
      }
    ],
    timeline: [
      {
        id: 'time-101',
        time: '11:08 PM',
        order: 1,
        title: 'Server Access',
        description: 'Dr. Sato’s badge logs into the air-gapped Level-4 server room.',
        location: 'Server Room'
      },
      {
        id: 'time-102',
        time: '11:12 PM',
        order: 2,
        title: 'Drone Launch',
        description: 'Quadcopter takes off from parking bay towards the research roof.',
        location: 'Parking Bay 42'
      },
      {
        id: 'time-103',
        time: '11:20 PM',
        order: 3,
        title: 'Wind Gust and Crash',
        description: 'Drone catches 40-knot wind gust, collides with atrium skylight, and crashes.',
        location: 'Atrium Courtyard'
      }
    ],
    witnesses: [
      {
        id: 'wit-028',
        witnessName: 'Security Officer Tyler Scott',
        role: 'Campus Sentry',
        interviewTime: 'Feb 10, 12:30 AM',
        statement: 'Right after the crash, I saw Dr. Sato run out of the side research doors looking frantically up at the skylight before turning back inside.',
        contradictionHint: 'Demonstrates Sato knew of the crash immediately.'
      }
    ],
    locations: [
      {
        id: 'loc-028',
        name: 'Level-4 Server Room',
        description: 'Air-gapped cleanroom housing genomic sequencing arrays.',
        accessible: true,
        notes: 'Ventilation exhaust opens to the building roof.'
      }
    ],
    hints: [
      {
        level: 1,
        title: 'The Air-Gapped Exfiltration',
        text: 'The server was disconnected from the internet. How could digital files reach a drone in the sky?',
        scorePenalty: 200
      },
      {
        level: 2,
        title: 'Flight Origin',
        text: 'Check the flight controller GPS logs. The drone launched from reserved parking space 42.',
        scorePenalty: 400
      },
      {
        level: 3,
        title: 'The Ceiling Vent Hand-Off',
        text: 'Dr. Kenji Sato copied the data, dropped the USB drive up through the server roof vent into his hovering drone, but sudden winds crashed the craft.',
        scorePenalty: 600
      }
    ],
    solution: {
      culpritId: 'susp-080',
      methodId: 'method-105',
      motiveId: 'motive-105',
      criticalEvidenceIds: ['ev-072', 'ev-073'],
      methodOptions: [
        { id: 'method-105', text: 'Downloaded the genome data to a USB drive in the air-gapped room, passed it through the roof ventilation exhaust to his pre-programmed drone launched from his parking space.' },
        { id: 'method-106', text: 'Transmitted the data via long-range Bluetooth to a rogue cell tower.' },
        { id: 'method-107', text: 'Bribed Elena Rostova to smuggle the flash drive out in her centrifuge cooler.' },
        { id: 'method-108', text: 'Hacked the atrium glass sensors to open a skylight window.' }
      ],
      motiveOptions: [
        { id: 'motive-105', text: 'To sell the confidential mRNA vaccine patent secrets to an overseas pharmaceutical corporation after royalty disputes.' },
        { id: 'motive-106', text: 'To release the vaccine formulas open-source for public benefit.' },
        { id: 'motive-107', text: 'To frame Marcus Brody for security breaches.' },
        { id: 'motive-108', text: 'To pay off research laboratory debts.' }
      ],
      fullExplanation: {
        whatHappened: 'Lead Bio-Informatics Engineer Dr. Kenji Sato copied classified vaccine sequences from the air-gapped server and attempted to fly them out via a drone.',
        howItWasDone: 'Because the server had no internet connections, Sato entered the room at 11:08 PM and downloaded the genome data to an encrypted USB drive. He fed the drive up through a roof exhaust vent where his autonomous quadcopter—launched from his reserved parking space—caught the magnetic package. However, sudden 40-knot wind gusts caused the drone to lose stability and smash through the glass atrium roof.',
        whyItHappened: 'BioGen had cut Sato out of the lucrative patent royalties for the cancer vaccine, prompting him to negotiate a multimillion-dollar sale with an overseas competitor.',
        decisiveEvidenceWalkthrough: 'EV-72 revealed the USB mechanical clamp in the server exhaust duct. EV-73 proved the drone launched from Sato’s parking spot and was piloted by his tablet.',
        whyOthersAreInnocent: 'Elena Rostova was on camera pipetting cell cultures, and Brody was working in the telecom hub with verified switch logs.'
      }
    }
  }
];
