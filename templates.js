// Starter handout content. These are DRAFTS for a hand therapist to review,
// correct, and customize before giving to any patient — not verified clinical
// instructions. Edit directly in the app; changes are saved automatically.

const STARTER_TEMPLATES = [
  {
    id: "carpal-tunnel",
    eyebrow: "PATIENT INFORMATION",
    title: "Carpal Tunnel Syndrome",
    intro:
      "Noticing tingling, numbness, or pain in your thumb, index, and middle fingers, especially at night? Here's what's going on, and a few gentle things that can help.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "A narrow passage in your wrist, the carpal tunnel, carries the median nerve and several tendons",
          "Extra pressure in the tunnel irritates the nerve",
          "This causes the tingling, numbness, or weakness you may be feeling"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear a wrist splint at night to keep your wrist neutral",
          "This takes pressure off the nerve while you sleep",
          "Take regular breaks from repetitive hand movements",
          "Gently shake out or stretch your hand through the day"
        ]
      },
      {
        heading: "Equipment and setup tips",
        bullets: [
          "An ergonomic keyboard, wrist rest, or vertical mouse can reduce wrist strain if you work at a computer",
          "For hand tools, larger or padded handles reduce the grip force needed",
          "A wrist splint isn't just for night, it can help during aggravating daytime tasks too"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold can help settle acute tingling or a flare after a heavy day",
          "Warmth before activity can ease general stiffness, avoid direct heat if symptoms are acutely irritated"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid sustained gripping or wrist bending for long periods, break tasks up",
          "Alternate hands for repetitive tasks where possible",
          "Reduce vibration exposure from power tools where you can, or use anti vibration gloves"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging isn't usually needed, carpal tunnel is often diagnosed from your symptoms and a physical assessment",
          "A nerve conduction study may be requested if the diagnosis is unclear or symptoms are severe"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most people improve with splinting and activity changes alone",
          "If symptoms persist or worsen, we may suggest referral to your GP or a hand surgeon to discuss further options"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing weakness in your hand",
          "Symptoms affecting your sleep most nights",
          "No improvement after a few weeks of self care"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Splinting for carpal tunnel syndrome",
        authors: "Karjalainen et al.",
        year: "2023",
        note: "Found limited evidence that a night splint helps more than no treatment in the short term.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010003.pub2/full"
      }
    ]
  },
  {
    id: "trigger-finger",
    eyebrow: "PATIENT INFORMATION",
    title: "Trigger Finger",
    intro:
      "Does one of your fingers catch, click, or lock as you bend or straighten it? This is a common condition and usually responds well to the right care.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The tendon that bends your finger runs through small pulleys",
          "Irritation and swelling can catch the tendon on a pulley",
          "This causes the clicking or locking sensation"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Rest the finger from repetitive gripping",
          "Use a small splint to keep the finger straighter",
          "Try gentle range of motion exercises",
          "Ease a locked finger through the movement rather than forcing it straight"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "Larger handled tools and utensils reduce the strain of repetitive gripping",
          "A padded grip on frequently used tools, like secateurs or kitchen utensils, can help"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Warmth before activity can ease stiffness and help the finger move more freely",
          "Cold can help settle swelling after a flare"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid repetitive full grip tasks where possible while it settles",
          "Take regular breaks from tools or activities that involve sustained gripping"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging usually isn't needed, trigger finger is diagnosed from your symptoms and how the finger moves",
          "An ultrasound is occasionally used if the diagnosis is unclear"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Many cases settle with splinting, activity changes, and time",
          "If it isn't improving, we may suggest referral to your GP or a hand surgeon to discuss options such as a steroid injection or a small procedure to release the pulley"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Your finger locks in a bent position and won't straighten",
          "Symptoms are getting in the way of daily tasks"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Corticosteroid injection for trigger finger in adults",
        authors: "Peters-Veluthamaningal et al.",
        year: "2009",
        note: "Based on limited data, found a steroid injection may work better than local anaesthetic alone by 4 weeks.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005617.pub2/full"
      }
    ]
  },
  {
    id: "de-quervains",
    eyebrow: "PATIENT INFORMATION",
    title: "De Quervain's Tenosynovitis",
    intro:
      "Sore, sharp pain along the thumb side of your wrist, especially when gripping or twisting? Here's a plain language explanation of what's going on.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Two tendons that move your thumb run through a tunnel on the thumb side of your wrist",
          "Inflammation of these tendons and their sheath causes pain",
          "Gripping, twisting, or lifting with the thumb tucked in can hurt"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear a thumb spica splint to rest the tendons",
          "Modify or take breaks from repetitive thumb and wrist movement",
          "Avoid lifting with the wrist bent and thumb out"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "Larger handled tools reduce strain on the thumb tendons",
          "Avoid lifting a baby or heavy items with your wrist bent and thumb out, lift with a flat wrist and supported forearm instead"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold can help settle pain and swelling after aggravating activity",
          "Warmth before gentle movement can ease stiffness once the acute stage has settled"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid repetitive thumb and wrist movements like wringing or twisting where possible",
          "Share load between both hands rather than repeatedly using the affected thumb"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging usually isn't needed, De Quervain's is diagnosed from your symptoms and a simple examination",
          "An ultrasound is occasionally used if the diagnosis is unclear"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most cases improve with splinting and activity changes",
          "If pain persists despite treatment, we may suggest referral to your GP or a hand surgeon to discuss further options such as a steroid injection"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain isn't easing with rest and splinting",
          "Pain is limiting everyday activities like lifting or holding"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Corticosteroid injection for de Quervain's tenosynovitis",
        authors: "Peters-Veluthamaningal et al.",
        year: "2009",
        note: "Based on a single small trial in pregnant or breastfeeding women, found injection may work better than splinting alone. Not yet confirmed in the wider population.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005616.pub2/full"
      }
    ]
  },
  {
    id: "splint-care",
    eyebrow: "SPLINT CARE",
    title: "Looking After Your Splint",
    intro:
      "Your splint is an important part of your recovery. A little care keeps it working well and comfortable to wear.",
    sections: [
      {
        heading: "Wearing your splint",
        bullets: [
          "Wear your splint as we've discussed with you",
          "If straps feel too tight, too loose, or it's rubbing, contact us rather than adjusting it yourself"
        ]
      },
      {
        heading: "Keeping it clean",
        bullets: [
          "Wipe your splint with a damp cloth and mild soap as needed",
          "Avoid soaking it in water",
          "Keep it away from direct heat, such as a heater, car dashboard, or hot water"
        ]
      },
      {
        heading: "Checking your skin",
        bullets: [
          "Check the skin under your splint daily",
          "Look for redness, marks that don't fade, or rubbing",
          "Contact us if you notice numbness or tingling while wearing it"
        ]
      }
    ],
    footerNote: "If your splint is damaged, doesn't fit well, or you have any concerns, please contact the clinic."
  },
  {
    id: "wound-scar-care",
    eyebrow: "POST SURGERY CARE",
    title: "Wound and Scar Care",
    intro:
      "Looking after your wound in the early stages helps it heal well and sets your scar up to settle nicely over time.",
    sections: [
      {
        heading: "In the first few weeks",
        bullets: [
          "Keep your wound clean and dry as advised",
          "Follow the dressing instructions from your appointment",
          "Avoid soaking the area, baths, swimming, or dishwater, until it's healed enough"
        ]
      },
      {
        heading: "Once your wound has healed",
        bullets: [
          "Gentle scar massage, once cleared by your therapist, keeps the scar soft and mobile",
          "Moisturise the area regularly",
          "Protect it from direct sun exposure"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing redness, swelling, warmth, or discharge",
          "A fever",
          "Any concerns at all about how your wound looks or feels"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "tendon-glide",
    eyebrow: "HOME EXERCISE PROGRAMME",
    title: "Gentle Finger Tendon Glides",
    intro:
      "These gentle movements help your finger tendons glide smoothly and can ease stiffness. Move slowly and only into a comfortable range.",
    sections: [
      {
        heading: "How to do them",
        bullets: [
          "Move through each shape in order, holding each position for about 5 seconds",
          "Complete one slow, comfortable set",
          "Repeat as often as your therapist has recommended"
        ]
      }
    ],
    exercises: [
      { name: "Straight hand", instruction: "Fingers straight and together, like a flat hand.", icon: "hand-flat" },
      { name: "Hook fist", instruction: "Bend the top two joints of your fingers, keeping your knuckles straight.", icon: "fist-hook" },
      { name: "Full fist", instruction: "Curl your fingers all the way into your palm.", icon: "fist-full" },
      { name: "Straight fist", instruction: "Bend at your knuckles with fingertips straight, like a tabletop.", icon: "fist-tabletop" },
      { name: "Straight hand", instruction: "Return to a flat, straight hand to finish the set.", icon: "hand-flat" }
    ],
    footerNote: "Stop and let your therapist know if any movement causes sharp pain, not just gentle stretching."
  },
  {
    id: "mallet-finger",
    eyebrow: "PATIENT INFORMATION",
    title: "Mallet Finger",
    intro:
      "Got a fingertip that's a bit ‘droopy’ and just won't straighten on its own? This is a common injury, and splinting almost always does the trick.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The tendon that straightens your fingertip (the extensor tendon) is stretched or torn",
          "Often caused by a ball or object jamming the tip of your finger",
          "This leaves the last joint drooping and unable to straighten"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear a mallet splint to hold your fingertip fully straight, 24 hours a day",
          "This is the most important part of your recovery",
          "Even brief bending, such as during a dressing change, can set healing back to day one"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray is often taken to check for a small fracture at the joint alongside the tendon injury",
          "This helps confirm the best splinting approach for your finger"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most mallet fingers heal well with consistent splinting alone",
          "If there's a larger fracture, the joint is out of place, or splinting hasn't worked, we may refer you to a hand surgeon to discuss further options"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Your splint comes off or gets wet",
          "The fingertip bends even briefly",
          "The skin under the splint looks irritated or sore"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Interventions for treating mallet finger injuries",
        authors: "Handoll and Vaghela",
        year: "2004",
        note: "Based on only 4 small, methodologically weak trials, found not enough evidence to identify the single best splinting method.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004574.pub2/abstract"
      }
    ]
  },
  {
    id: "dupuytrens",
    eyebrow: "PATIENT INFORMATION",
    title: "Dupuytren's Contracture",
    intro:
      "Noticing a thickened cord or lump in your palm, or a finger that's slowly pulling in towards your palm? Here's a plain language look at what's going on.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Thickening of the tissue under the skin of your palm (the fascia)",
          "Can form cords over time",
          "These cords may gradually pull one or more fingers into a bent position, most often the ring and little fingers"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Keep your hand mobile in the early stages",
          "Monitor any change in finger position",
          "If a finger becomes hard to straighten, surgical and non surgical options are available, we'll talk through what suits you"
        ]
      },
      {
        heading: "Everyday tips",
        bullets: [
          "Larger handled tools and utensils can help if grip is affected by a tightening cord",
          "Warmth before activity can ease general hand stiffness, though it won't change the cord itself",
          "There's no proven way to slow the cord's progression through exercise or equipment, our role is monitoring it and referring you on at the right time if it progresses"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging isn't usually needed, Dupuytren's is diagnosed by how your hand looks and feels"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "If a finger becomes hard to straighten and it's affecting your daily tasks, we can refer you to a hand surgeon to discuss treatment options",
          "Options a surgeon may discuss include a needle procedure, an injection, or surgery, depending on how the contracture is affecting you"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "A finger becoming harder to straighten",
          "The contracture affecting daily tasks, like putting your hand flat on a table or into a pocket"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Surgery for Dupuytren's contracture of the fingers",
        authors: "Rodrigues et al.",
        year: "2015",
        note: "Found insufficient evidence to determine which surgical procedure works best, and questioned the value of routine splinting after surgery.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010143.pub2/full"
      }
    ]
  },
  {
    id: "cubital-tunnel",
    eyebrow: "PATIENT INFORMATION",
    title: "Cubital Tunnel Syndrome",
    intro:
      "Getting tingling or numbness in your ring and little finger, especially when your elbow is bent for a while? This is often related to the nerve that runs behind your elbow.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The ulnar nerve runs through a narrow tunnel behind the inside of your elbow, the same spot as your funny bone",
          "Compression or irritation here can cause tingling, numbness, or weakness",
          "This is usually felt in your ring and little fingers"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Avoid resting or leaning on your elbow",
          "Avoid keeping your elbow fully bent for long periods, such as while sleeping or on the phone",
          "A soft elbow support or padding at night can help some people"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "A soft elbow pad or cushion reduces pressure on the nerve when resting your arm",
          "An ergonomic phone or headset setup avoids prolonged elbow bending"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold can settle irritation after aggravating activity",
          "Warmth can ease general stiffness around the elbow"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid resting on your elbow on hard surfaces",
          "Take breaks from prolonged elbow bending, like phone calls or reading"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging isn't usually needed, cubital tunnel is often diagnosed from your symptoms and a physical assessment",
          "A nerve conduction study may be requested if the diagnosis is unclear or symptoms are severe"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Many cases improve with activity changes and night positioning alone",
          "If you have increasing weakness or symptoms aren't improving, we may suggest referral to your GP or a hand surgeon"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing weakness in your hand",
          "Your grip getting weaker",
          "Symptoms not easing with these changes"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Treatment for ulnar neuropathy at the elbow",
        authors: "Caliandro et al.",
        year: "2025",
        note: "For mild to moderate cases, found written self-management guidance alone worked about as well as adding splints or exercises.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD006839.pub5/full"
      }
    ]
  },
  {
    id: "tennis-elbow",
    eyebrow: "PATIENT INFORMATION",
    title: "Tennis Elbow (Lateral Elbow Pain)",
    intro:
      "Pain on the outside of your elbow that flares up with gripping or lifting? This is a common overload injury, and it usually improves well with the right approach.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Tendons that extend your wrist and fingers attach on the outside of your elbow",
          "Repeated or heavy gripping and lifting can overload these tendons",
          "This causes pain, tenderness, and sometimes weakness in your grip"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Reduce, not necessarily stop, heavy gripping and lifting for a while",
          "Try a counterforce brace just below the elbow",
          "Follow a graded loading exercise programme from your therapist"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "A counterforce brace just below the elbow reduces load on the tendon during activity",
          "Larger handled tools and utensils reduce grip force needed",
          "An ergonomic mouse and keyboard setup helps if computer use is a factor"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold after activity can help settle pain and inflammation",
          "Warmth before activity or exercises can ease stiffness"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Reduce heavy gripping and lifting with the palm facing down, this loads the tendon most",
          "Build activity back up gradually rather than returning to full load at once"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging usually isn't needed, tennis elbow is diagnosed from your symptoms and a physical assessment",
          "An ultrasound or MRI is occasionally used if the diagnosis is unclear or symptoms are unusually persistent"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most cases improve well with a loading exercise programme over a few months",
          "If pain persists despite a proper trial of therapy, we may suggest referral to your GP or a specialist to discuss further options such as an injection"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain is limiting everyday tasks like carrying a mug or shaking hands",
          "Pain isn't easing with rest"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Manual therapy and exercise for lateral elbow pain",
        authors: "Wallis et al.",
        year: "2024",
        note: "Found manual therapy and exercise may slightly reduce pain and disability in the short term, though benefits were modest and not clearly sustained long term.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD013042.pub2/full"
      }
    ]
  },
  {
    id: "golfers-elbow",
    eyebrow: "PATIENT INFORMATION",
    title: "Golfer's Elbow (Inner Elbow Pain)",
    intro:
      "Pain on the inside of your elbow, especially with gripping or bending your wrist? This is the mirror image of tennis elbow, and responds to a similar approach.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Tendons that flex your wrist and fingers attach on the inside of your elbow",
          "Repetitive gripping, lifting, or throwing can overload these tendons",
          "This causes pain and tenderness"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Ease off heavy gripping and wrist bending activities for a while",
          "Follow a gradual, therapist guided loading programme",
          "This gives the tendons the best chance to recover strength and settle"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "A counterforce brace just below the elbow can reduce tendon load",
          "Larger handled tools reduce the grip force needed"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold after activity helps settle pain and inflammation",
          "Warmth before activity or exercises eases stiffness"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Reduce repetitive wrist flexion and heavy gripping where possible",
          "Build activity back up gradually with a therapist guided plan"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging usually isn't needed, golfer's elbow is diagnosed from your symptoms and a physical assessment",
          "An ultrasound or MRI is occasionally used if the diagnosis is unclear or symptoms are unusually persistent"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most cases improve well with a loading exercise programme over a few months",
          "If pain persists despite a proper trial of therapy, we may suggest referral to your GP or a specialist to discuss further options such as an injection"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Tingling into your ring and little fingers alongside the elbow pain",
          "No improvement with rest and activity changes"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "ganglion-cyst",
    eyebrow: "PATIENT INFORMATION",
    title: "Ganglion Cyst",
    intro:
      "Found a soft lump near a joint or tendon in your wrist or hand? Most of the time, this is a ganglion cyst, and it's more of a nuisance than a worry.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "A fluid filled sac develops from a joint or tendon sheath",
          "Most common on the back of the wrist",
          "Size can change over time and it may come and go"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Many ganglions settle on their own without treatment",
          "Rest or splinting the area if it's uncomfortable or limiting movement",
          "Drainage or surgical options can be discussed if needed"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging isn't usually needed, a ganglion is often diagnosed by how it looks and feels",
          "An ultrasound can confirm the diagnosis if there's any uncertainty"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "If it's persistently uncomfortable or you'd like it removed, we can refer you to a hand surgeon to discuss drainage or excision"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "The lump is growing or becoming painful",
          "It's affecting your grip or range of motion",
          "You'd simply like it assessed"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "thumb-cmc-oa",
    eyebrow: "PATIENT INFORMATION",
    title: "Thumb Base Arthritis (CMC Joint Osteoarthritis)",
    intro:
      "Aching or sharp pain at the base of your thumb, especially with pinching or twisting? This is a common form of arthritis, and there's a lot that can help.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The joint at the base of your thumb (the CMC joint) gives your thumb its wide range of movement",
          "Wear and tear of the cartilage here (osteoarthritis) can develop",
          "This makes pinching, gripping, and twisting movements painful"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear a thumb splint during aggravating tasks, like opening jars or writing",
          "Modify how you grip",
          "Use larger handled tools",
          "Pace repetitive thumb tasks"
        ]
      },
      {
        heading: "Joint protection and equipment",
        bullets: [
          "Built up or larger handled utensils, pens, and tools reduce pinch force",
          "A jar opener or electric can opener avoids high load pinching",
          "Key turners and lever style tap handles protect the thumb base from twisting load",
          "A thumb splint during flare ups or heavy tasks gives the joint extra support"
        ]
      },
      {
        heading: "Managing flares with heat and cold",
        bullets: [
          "Warmth before activity, a warm pack or running your hands under warm water, can ease stiffness",
          "Cold, an ice pack wrapped in a cloth for 10 to 15 minutes, can settle a flare that's hot or swollen",
          "Alternating both is fine, use whichever feels more soothing"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Spread heavy tasks across your whole hand rather than pinching with your thumb where you can",
          "Slide or push objects instead of pinching and lifting where possible",
          "Break repetitive tasks into shorter bursts with breaks between"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray may be used to confirm the diagnosis and see how advanced the joint changes are",
          "This isn't always needed if symptoms and examination findings are clear"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Splinting, joint protection, and activity changes help many people manage well long term",
          "If these aren't enough, we can refer you back to your GP to discuss further options, including an injection or a surgical opinion"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain is persistent",
          "The base of your thumb looks more prominent or is changing shape"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "tfcc-injury",
    eyebrow: "PATIENT INFORMATION",
    title: "TFCC Injury (Wrist Cartilage Injury)",
    intro:
      "Pain on the little finger side of your wrist, especially with twisting or weight bearing through your hand? This may involve the small cartilage disc that cushions your wrist.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The TFCC is a cushion of cartilage and ligaments on the little finger side of your wrist",
          "It can be injured by a fall onto an outstretched hand",
          "Repetitive twisting and loading can also cause injury"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Avoid weight bearing through the hand",
          "Avoid twisting movements, like turning a doorknob or wringing out a cloth",
          "A wrist splint can support the joint while symptoms ease"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "A wrist splint supports the joint during aggravating tasks",
          "Avoid tasks that load the wrist in a twisted or weight bearing position where possible"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold can settle pain and swelling after aggravating activity",
          "Warmth can ease general stiffness once the acute stage has passed"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid pushing up from a chair or twisting through the wrist",
          "Share load with your other hand for lifting and twisting tasks"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray may be taken to rule out a fracture",
          "An MRI or wrist arthroscopy is sometimes used if symptoms persist and the diagnosis needs confirming"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Many TFCC injuries settle with splinting and activity changes",
          "If symptoms persist despite this, we may suggest referral to a hand surgeon for further assessment"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Clicking with pain",
          "Ongoing weakness",
          "No improvement after a few weeks"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "hand-oa",
    eyebrow: "PATIENT INFORMATION",
    title: "Osteoarthritis of the Hand",
    intro:
      "Stiff, achy joints in your fingers, especially first thing in the morning? Osteoarthritis is common as we age, and there's plenty you can do to keep your hands moving well.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Osteoarthritis is wear of the smooth cartilage that cushions your joints",
          "Can lead to stiffness, aching, and small bony bumps around finger joints",
          "Tends to come and go in flares"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Gentle daily movement keeps joints mobile, even during a flare",
          "Warm your hands before activity",
          "Pace repetitive tasks",
          "Use larger handled tools"
        ]
      },
      {
        heading: "Joint protection and equipment",
        bullets: [
          "Larger handled tools, utensils, and pens reduce the grip force needed",
          "Jar openers, electric tin openers, and lever tap handles protect small joints from twisting load",
          "A rocker knife or two handled mug can help on days joints are stiff or sore"
        ]
      },
      {
        heading: "Managing flares with heat and cold",
        bullets: [
          "A warm hand bath or warm pack before activity can ease morning stiffness",
          "Cold packs can help settle a joint that's hot, swollen, or newly flared",
          "Short, regular use works better than prolonged heat or cold in one go"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Use your palm or whole hand to carry loads rather than gripping with fingertips",
          "Slide heavy items rather than lifting where you can",
          "Pace repetitive tasks like chopping, kneading, or wringing, with breaks between"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray may be used to confirm the diagnosis and see how advanced the joint changes are",
          "This isn't always needed if the pattern of symptoms is clear"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Joint protection and activity pacing help many people manage well long term",
          "If a particular joint remains very painful, we can refer you back to your GP to discuss further options"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "A joint becomes hot or significantly swollen",
          "Pain is limiting activities you enjoy"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Exercise for hand osteoarthritis",
        authors: "Østerås et al.",
        year: "2017",
        note: "Found low quality evidence of small, short term improvements in hand pain, function, and finger stiffness with exercise, not clearly sustained at 6 to 12 months.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010388.pub2/full"
      }
    ]
  },
  {
    id: "wrist-sprain",
    eyebrow: "PATIENT INFORMATION",
    title: "Wrist Sprain",
    intro:
      "Twisted or jarred your wrist and now it's sore and a bit swollen? Here's what's likely going on, and how to help it along.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "A sprain means ligaments supporting your wrist have been stretched or partially torn",
          "Often caused by a fall or sudden twisting movement"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Rest, gentle elevation, and a supportive brace or bandage in the first couple of days",
          "Gentle movement within a comfortable range once initial soreness settles",
          "Avoid complete immobility"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold in the first couple of days helps settle pain and swelling",
          "Warmth once acute swelling has passed can ease stiffness and support movement"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid weight bearing through the wrist, like pushing up from a chair, until it's more settled",
          "Build load back up gradually rather than returning straight to heavy tasks"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray is often taken to rule out a fracture alongside the sprain",
          "Further imaging, such as an MRI, is occasionally used if symptoms don't settle as expected"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most sprains settle well with a gradual return to movement and activity",
          "If your wrist continues to feel unstable or painful, we may suggest referral to your GP or a hand surgeon for further assessment"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain or swelling isn't easing after a few days",
          "Your wrist feels unstable",
          "You're struggling to bear weight through your hand"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "thumb-ucl-sprain",
    eyebrow: "PATIENT INFORMATION",
    title: "Thumb Ligament Sprain (Skier's Thumb)",
    intro:
      "Jammed or wrenched your thumb, and now the base feels unstable or sore with gripping? This often involves a key ligament that stabilises your thumb.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Involves the ulnar collateral ligament, on the inside of your thumb's base knuckle",
          "This ligament stabilises your thumb during pinching and gripping",
          "Commonly injured by a fall onto an outstretched thumb, or a forceful sideways wrench"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear a thumb splint to protect the ligament while it heals",
          "Keeps the joint stable during daily tasks",
          "Avoid forceful pinching or gripping, such as opening jars, until reassessed"
        ]
      },
      {
        heading: "Managing symptoms with heat and cold",
        bullets: [
          "Cold helps settle pain and swelling in the early stages",
          "Warmth can ease stiffness once you're cleared to start gentle movement"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid forceful pinching or gripping until your thumb is reassessed",
          "Build pinch strength back up gradually once cleared"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray is often taken to rule out a fracture alongside the ligament injury",
          "An ultrasound or MRI may be used if there's concern about a more significant tear"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Many cases are well managed with splinting and therapy alone",
          "If instability or a significant tear is suspected, we may refer you to a hand surgeon for a specialist opinion, as some tears need surgical repair"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "This injury is worth having properly assessed if you haven't already",
          "Your thumb feels unstable",
          "Pinching remains painful"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "distal-radius-fracture",
    eyebrow: "PATIENT INFORMATION",
    title: "Recovering from a Wrist Fracture",
    intro:
      "Out of your cast or fixation and wondering what comes next? Here's a general guide to getting your wrist moving and strong again.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "A break in the larger forearm bone, close to the wrist",
          "Once your bone is stable enough, confirmed by your surgeon or fracture clinic, focus shifts to restoring movement",
          "Strength is rebuilt gradually after that"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Gentle range of motion exercises for your wrist, fingers, and elbow",
          "Manage swelling with elevation and hand movement",
          "Strengthening is introduced gradually once your bone has healed enough, as advised by your surgeon"
        ]
      },
      {
        heading: "Equipment and everyday tips",
        bullets: [
          "A wrist support can give extra confidence during early return to daily tasks",
          "Larger handled tools and utensils reduce load while your grip strength rebuilds",
          "Non slip jar openers and lever tap handles help if twisting is still uncomfortable"
        ]
      },
      {
        heading: "Managing stiffness with heat and cold",
        bullets: [
          "Warmth before your exercises can ease stiffness and help movement feel easier",
          "Cold after activity can help if you notice swelling or aching later in the day"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Build weight bearing and lifting back up gradually, don't jump straight to full load",
          "Avoid heavy gripping or catching a fall on that hand until your therapist confirms you're ready",
          "Two handed lifting is a good stepping stone before returning to one handed heavy tasks"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "X-rays are used to diagnose your fracture and check it's healing in a good position",
          "Your surgeon or fracture clinic will let you know if any further images are needed"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Your fracture is managed by your surgeon or the fracture clinic, and we work alongside them on your therapy",
          "We'll flag any concerns about your healing or progress directly with your surgical team"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing pain",
          "New numbness or tingling",
          "Stiffness isn't easing with your home exercises"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist.",
    sources: [
      {
        title: "Rehabilitation for distal radial fractures in adults",
        authors: "Handoll et al.",
        year: "2015",
        note: "Found insufficient evidence to determine the single best rehabilitation approach, with very low quality evidence that hand therapy helps more than instructions alone shortly after cast removal.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003324.pub3/full"
      }
    ]
  },
  {
    id: "scaphoid-fracture",
    eyebrow: "PATIENT INFORMATION",
    title: "Scaphoid Fracture",
    intro:
      "Fell onto an outstretched hand and now have pain on the thumb side of your wrist? The scaphoid is a small but important bone, and it needs careful management to heal well.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The scaphoid is a small bone on the thumb side of your wrist",
          "It has a limited blood supply, so healing can take longer than other fractures",
          "It's commonly injured in a fall onto an outstretched hand"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear your cast or splint exactly as prescribed, for as long as advised",
          "Avoid removing it early, even if pain has settled",
          "Gently move your fingers, elbow, and shoulder to help prevent stiffness elsewhere"
        ]
      },
      {
        heading: "Adaptive equipment while you're in a cast",
        bullets: [
          "One handed tools, like a rocker knife, jar opener, or electric can opener, help while your other hand does the work",
          "A non slip mat stabilises bowls, jars, or paper for one handed tasks",
          "Slip on shoes or elastic laces avoid needing two hands to fasten them",
          "A cast cover or waterproof sleeve keeps it dry and clean in the shower"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Because scaphoid fractures can be hard to see on an early X-ray, a repeat X-ray, CT, or MRI is sometimes arranged a couple of weeks later if you're still sore",
          "Your surgeon or fracture clinic will let you know if follow up imaging is needed"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Your fracture is managed by your surgeon or the fracture clinic, and we work alongside them on your therapy",
          "Because scaphoid fractures can be slow to heal, ongoing surgical follow up is a normal part of your care, not a sign anything has gone wrong"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing pain or new numbness",
          "Your cast or splint feels loose, cracked, or uncomfortable",
          "Any questions about your healing timeframe"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "metacarpal-fracture",
    eyebrow: "PATIENT INFORMATION",
    title: "Metacarpal Fracture",
    intro:
      "Broken one of the long bones in your hand, often after a punch or a fall? Here's a general guide to what happens next.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The metacarpals are the long bones between your wrist and knuckles",
          "A break here is sometimes called a boxer's fracture when it involves the little finger knuckle",
          "Often caused by a direct blow or a fall"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear your splint or cast as prescribed to support the bone while it heals",
          "Elevate your hand to manage swelling",
          "Keep your uninjured fingers moving to prevent stiffness, unless told otherwise"
        ]
      },
      {
        heading: "Adaptive equipment while you're healing",
        bullets: [
          "One handed tools, like a rocker knife or jar opener, help while your splint restricts that hand",
          "A non slip mat stabilises items for one handed tasks in the kitchen",
          "Slip on shoes or elastic laces avoid needing two hands to fasten them"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid gripping or knocking the hand once your splint is off, until your therapist confirms you're ready",
          "Build hand strength back up gradually with guided exercises rather than jumping straight into heavy tasks"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "X-rays are used to diagnose your fracture and check its position",
          "A follow up X-ray is often taken to confirm it's healing well"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most metacarpal fractures heal well with splinting alone",
          "If the bone is significantly out of position or rotated, your surgeon may discuss a procedure to realign it"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing pain, swelling, or new numbness",
          "Your fingers look rotated or overlap when you gently make a fist",
          "Your splint feels loose or uncomfortable"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "finger-fracture",
    eyebrow: "PATIENT INFORMATION",
    title: "Finger Fracture",
    intro:
      "Jammed, crushed, or twisted a finger and it's now painful and swollen? Finger fractures are common, and most heal well with the right care.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "A break in one of the small bones of your finger (the phalanges)",
          "Can happen through a direct blow, a jam, or a twisting injury"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Wear any splint or buddy tape exactly as advised",
          "Elevate your hand to reduce swelling",
          "Keep your other fingers moving to avoid stiffness"
        ]
      },
      {
        heading: "Adaptive equipment while you're healing",
        bullets: [
          "Larger handled utensils and tools reduce strain while the finger is splinted or buddy taped",
          "A rocker knife helps with cutting food one handed if needed"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Avoid catching or knocking the finger, and avoid heavy gripping until cleared",
          "Once your splint is off, build grip strength back up gradually rather than returning straight to full tasks"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "X-rays are used to diagnose your fracture and check its position",
          "A follow up X-ray is often taken to confirm it's healing well"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most finger fractures heal well with splinting or buddy taping alone",
          "If the bone is significantly out of position or involves a joint, your surgeon may discuss further options"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing pain, swelling, or colour change in the fingertip",
          "The finger looks crooked or rotated",
          "Your splint feels too tight or too loose"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "radial-head-fracture",
    eyebrow: "PATIENT INFORMATION",
    title: "Radial Head Fracture (Elbow)",
    intro:
      "Fallen onto an outstretched arm and now have pain and difficulty straightening your elbow? This is a common elbow fracture, and most people recover well.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The radial head is part of your elbow joint, just below your elbow crease",
          "Commonly fractured in a fall onto an outstretched hand",
          "Can make turning your forearm or straightening your elbow painful"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Follow your surgeon's guidance on your sling or splint",
          "Gentle, early movement within a pain free range is often encouraged, ask us what's right for you",
          "Manage swelling with elevation when resting"
        ]
      },
      {
        heading: "Adaptive equipment and everyday tips",
        bullets: [
          "A sling frees up your other hand while your elbow is protected",
          "Slip on shoes and elastic laces help if reaching or bending is limited",
          "Loose, easy fastening clothing is easier to manage one handed"
        ]
      },
      {
        heading: "Managing stiffness with heat and cold",
        bullets: [
          "Warmth before your exercises can ease stiffness and make movement feel easier",
          "Cold after activity can help settle any swelling or aching"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "X-rays are used to diagnose your fracture and check how many pieces the bone has broken into",
          "Your surgeon will let you know if a CT scan is needed to plan treatment"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Many radial head fractures are managed without surgery, with early movement guided by your surgeon and therapist",
          "More complex fractures may need a surgical opinion, your surgeon will discuss this with you if relevant"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing pain, swelling, or new numbness or tingling in your hand",
          "Your elbow feels like it's locking or catching",
          "Stiffness isn't improving with your home programme"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "cast-care",
    eyebrow: "PATIENT INFORMATION",
    title: "Caring for Your Cast",
    intro:
      "Your cast protects your healing bone. A little care keeps it doing its job comfortably until it's time to come off.",
    sections: [
      {
        heading: "Keeping it dry and clean",
        bullets: [
          "Keep your cast dry, cover it well for showers",
          "Avoid pushing objects down inside it to relieve an itch",
          "Don't trim, cut, or adjust it yourself"
        ]
      },
      {
        heading: "Managing swelling",
        bullets: [
          "Elevate your hand above your heart when resting",
          "Keep your fingers moving regularly, unless told otherwise",
          "Remove tight rings or jewellery before your cast goes on if you can"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Increasing pain, tightness, or numbness",
          "Fingers that look pale, blue, or feel cold",
          "The cast cracks, softens, or has a bad smell"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "boutonniere",
    eyebrow: "PATIENT INFORMATION",
    title: "Boutonniere Deformity",
    intro:
      "Middle knuckle of a finger bent down while the tip is bent back? This pattern has a name, and early splinting makes a real difference.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "The central part of the tendon that straightens your finger, over the middle knuckle, is injured",
          "Often caused by a jam or cut",
          "Without treatment, the middle joint can bend down and the fingertip bend back over time"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Splint the middle knuckle in a straight position",
          "Leave the fingertip free to move",
          "Wear the splint as consistently as advised"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "An X-ray is often taken to check for a small fracture at the joint alongside the tendon injury"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most cases heal well with consistent splinting alone",
          "If there's a larger fracture, the joint is out of place, or splinting hasn't worked, we may refer you to a hand surgeon to discuss further options"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Your splint loosens or feels uncomfortable",
          "You notice the finger position changing"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "raynauds",
    eyebrow: "PATIENT INFORMATION",
    title: "Raynaud's Phenomenon",
    intro:
      "Fingers turning white, then blue, then red in the cold, along with numbness or pain? This is a common response of small blood vessels to cold or stress.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Small blood vessels in your fingers, and sometimes toes, narrow more than usual",
          "Triggered by cold temperatures or stress",
          "This temporarily reduces blood flow"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Keep your whole body warm, not just your hands",
          "Layer your clothing",
          "Wear warm gloves and use hand warmers in colder months",
          "Avoid smoking and reduce caffeine"
        ]
      },
      {
        heading: "Equipment that can help",
        bullets: [
          "Battery heated gloves or hand warmers are useful for outdoor work or cold environments",
          "Moisture wicking glove liners help keep hands dry as well as warm, dampness makes symptoms worse",
          "Insulated or padded tool handles reduce cold transfer during outdoor or manual tasks"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging isn't usually needed for typical Raynaud's",
          "Your GP may arrange blood tests if they suspect an underlying condition is contributing"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Most people manage well with warmth and lifestyle changes alone",
          "If episodes are severe, frequent, or you notice skin changes, we may suggest referral to your GP or a specialist for further assessment"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Episodes becoming more frequent or severe",
          "Skin changes, sores, or ulcers on your fingertips"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "oedema-management",
    eyebrow: "HOME CARE PROGRAMME",
    title: "Managing Swelling (Oedema)",
    intro:
      "Some swelling after an injury or surgery is normal, but keeping it under control helps you move more comfortably and heal well.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Swelling is your body's natural response to injury or surgery",
          "Too much fluid in the tissues can make your hand feel stiff, heavy, and harder to move"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Elevate your hand above your heart when resting",
          "Gently and regularly move your fingers and wrist through their comfortable range",
          "Wear any compression garment as advised"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Swelling getting worse rather than better",
          "Fingers feeling very tight or discoloured",
          "Any new numbness"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "desensitisation",
    eyebrow: "HOME CARE PROGRAMME",
    title: "Desensitisation for a Sensitive Hand",
    intro:
      "Is a scar, fingertip, or part of your hand overly sensitive to touch or textures? A gentle, gradual desensitisation programme can help your nervous system settle.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Nerves in the area can become oversensitive after injury, surgery, or nerve involvement",
          "This causes a strong reaction to light touch or everyday textures"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Gently rub the sensitive area with a variety of textures",
          "Start soft, like cotton wool",
          "Gradually work up to firmer textures, like rice or a towel",
          "Do this a few times a day"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Sensitivity getting worse rather than better",
          "You'd like a specific set of textures and a programme tailored to you"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "scar-massage",
    eyebrow: "HOME CARE PROGRAMME",
    title: "Scar Massage Guide",
    intro:
      "Once your wound has fully healed, scar massage is a simple habit that helps your scar stay soft and supple.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "New scar tissue can become tight, thick, or stuck to the tissue underneath",
          "This may limit movement nearby"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Use a small amount of moisturiser or oil",
          "Massage the scar firmly in small circles, and up and down along its length",
          "A few minutes, a couple of times a day",
          "Some firm pressure is fine, sharp pain is not"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Check with us before starting if your wound hasn't fully closed",
          "The scar is becoming increasingly tight, raised, or restricting movement"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "median-nerve-glide",
    eyebrow: "HOME EXERCISE PROGRAMME",
    title: "Median Nerve Gliding Exercises",
    intro:
      "These gentle movements help the median nerve move smoothly through your wrist and hand. Move slowly and only into a comfortable range, never forcing a stretch.",
    sections: [
      {
        heading: "How to do them",
        bullets: [
          "Move slowly through each position, holding briefly at each step",
          "Complete one gentle set",
          "Repeat as often as your therapist has recommended",
          "Stop if you feel tingling or sharp discomfort"
        ]
      }
    ],
    exercises: [
      { name: "Start", instruction: "Make a loose fist with your wrist straight.", icon: "fist-full" },
      { name: "Fingers open", instruction: "Straighten your fingers and thumb, wrist still straight.", icon: "hand-flat" },
      { name: "Wrist back", instruction: "Gently bend your wrist and fingers back, keeping your thumb relaxed.", icon: "hand-flat" },
      { name: "Thumb out", instruction: "Turn your palm up and gently stretch your thumb out to the side.", icon: "thumb-out" },
      { name: "Gentle stretch", instruction: "With your other hand, very gently stretch your thumb back a little further, only if comfortable.", icon: "thumb-out" }
    ],
    footerNote: "Stop and let your therapist know if any movement causes tingling or sharp pain, not just gentle stretching.",
    sources: [
      {
        title: "Exercise and mobilisation interventions for carpal tunnel syndrome",
        authors: "Page et al.",
        year: "2012",
        note: "Found limited, very low quality evidence that nerve and tendon gliding exercises may help carpal tunnel symptoms and hand function. More research is needed.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD009899/full"
      }
    ]
  },
  {
    id: "wrist-rom",
    eyebrow: "HOME EXERCISE PROGRAMME",
    title: "Wrist Range of Motion Exercises",
    intro:
      "These simple movements help keep your wrist joint mobile. Move slowly and within a comfortable range.",
    sections: [
      {
        heading: "How to do them",
        bullets: [
          "Work through each movement slowly and gently",
          "Complete one comfortable set",
          "Repeat as often as your therapist has recommended"
        ]
      }
    ],
    exercises: [
      { name: "Wrist up", instruction: "Rest your forearm on a table, hand off the edge, and gently bend your wrist up towards the ceiling." },
      { name: "Wrist down", instruction: "From the same position, gently bend your wrist down towards the floor." },
      { name: "Side to side", instruction: "With your palm flat on the table, gently rock your wrist side to side." },
      { name: "Circles", instruction: "Make slow, gentle circles with your wrist, first one way, then the other." }
    ],
    footerNote: "Stop and let your therapist know if any movement causes sharp pain, not just gentle stretching."
  },
  {
    id: "elbow-rom",
    eyebrow: "HOME EXERCISE PROGRAMME",
    title: "Elbow Range of Motion Exercises",
    intro:
      "These simple movements help keep your elbow and forearm mobile. Move slowly and within a comfortable range.",
    sections: [
      {
        heading: "How to do them",
        bullets: [
          "Work through each movement slowly and gently",
          "Complete one comfortable set",
          "Repeat as often as your therapist has recommended"
        ]
      }
    ],
    exercises: [
      { name: "Bend", instruction: "Bend your elbow, bringing your hand towards your shoulder." },
      { name: "Straighten", instruction: "Slowly straighten your elbow out fully, or as far as is comfortable." },
      { name: "Palm up", instruction: "With your elbow bent at your side, rotate your forearm so your palm faces up." },
      { name: "Palm down", instruction: "From the same position, rotate your forearm so your palm faces down." }
    ],
    footerNote: "Stop and let your therapist know if any movement causes sharp pain, not just gentle stretching."
  },
  {
    id: "thumb-rom",
    eyebrow: "HOME EXERCISE PROGRAMME",
    title: "Thumb Range of Motion Exercises",
    intro:
      "These simple movements help keep your thumb joints mobile. Move slowly and within a comfortable range.",
    sections: [
      {
        heading: "How to do them",
        bullets: [
          "Work through each movement slowly and gently",
          "Complete one comfortable set",
          "Repeat as often as your therapist has recommended"
        ]
      }
    ],
    exercises: [
      { name: "Thumb out", instruction: "Move your thumb away from your palm, out to the side." },
      { name: "Thumb across", instruction: "Bring your thumb across your palm towards your little finger." },
      { name: "Thumb circles", instruction: "Make slow circles with your thumb tip, one way then the other." },
      { name: "Pinch and release", instruction: "Gently touch your thumb tip to each fingertip in turn, then release." }
    ],
    footerNote: "Stop and let your therapist know if any movement causes sharp pain, not just gentle stretching."
  },
  {
    id: "putty-strengthening",
    eyebrow: "HOME EXERCISE PROGRAMME",
    title: "Grip Strengthening with Putty",
    intro:
      "Therapy putty is a simple, effective way to gradually rebuild strength in your hand once you're ready to start loading it.",
    sections: [
      {
        heading: "Before you start",
        bullets: [
          "Only begin strengthening once you've been given the go ahead by your therapist",
          "Starting too early can aggravate healing tissue"
        ]
      },
      {
        heading: "How to use it",
        bullets: [
          "Warm the putty in your hands",
          "Work through squeezing, pinching, and finger spreading exercises",
          "Use a resistance that feels challenging but not painful",
          "A few minutes, once or twice a day, is plenty to start"
        ]
      },
      {
        heading: "Progressing",
        bullets: [
          "Move to a firmer putty once squeezing becomes easy",
          "Little and often works better than pushing hard and causing soreness"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "cold-heat-therapy",
    eyebrow: "HOME CARE PROGRAMME",
    title: "Using Cold and Heat at Home",
    intro:
      "Cold and heat can both be useful tools for managing pain and stiffness, it's just about knowing when to reach for which.",
    sections: [
      {
        heading: "When to use cold",
        bullets: [
          "An ice pack wrapped in a cloth, for around 10 to 15 minutes",
          "Most helpful in the first few days after an acute injury or flare up",
          "Helps settle pain and swelling"
        ]
      },
      {
        heading: "When to use heat",
        bullets: [
          "A warm pack or warm water",
          "Helps ease stiffness and relax tight muscles",
          "Useful for chronic stiffness or before exercises, once acute swelling has settled"
        ]
      },
      {
        heading: "A few precautions",
        bullets: [
          "Keep a cloth between your skin and any hot or cold pack",
          "Don't fall asleep with either in place",
          "Take extra care if you have reduced sensation in your hand"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "ergonomic-tips",
    eyebrow: "PATIENT INFORMATION",
    title: "Workstation and Ergonomic Tips",
    intro:
      "Small changes to how you sit and set up your desk can take a lot of strain off your hands, wrists, and elbows through the day.",
    sections: [
      {
        heading: "Your setup",
        bullets: [
          "Keep your wrists in a neutral, relaxed position while typing",
          "Avoid bending them up or resting heavily on a hard edge",
          "Keep your elbows at around a right angle",
          "Relax your shoulders rather than hunching"
        ]
      },
      {
        heading: "Through the day",
        bullets: [
          "Take a short break to move your hands and stretch every 30 to 45 minutes",
          "Even just standing up or shaking out your hands helps",
          "Little, regular breaks make a bigger difference than one long break"
        ]
      },
      {
        heading: "Extra support",
        bullets: [
          "A wrist rest, split keyboard, or vertical mouse can help some people",
          "What works best varies from person to person",
          "We're happy to talk through options suited to your setup"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "preparing-for-surgery",
    eyebrow: "PATIENT INFORMATION",
    title: "Preparing for Your Hand Surgery",
    intro:
      "A little preparation ahead of your surgery helps your recovery get off to the best start.",
    sections: [
      {
        heading: "Before your surgery",
        bullets: [
          "Arrange for someone to drive you home",
          "Have help around the house for the first day or two",
          "Set up a comfortable resting spot with cushions to keep your hand elevated"
        ]
      },
      {
        heading: "What to have ready",
        bullets: [
          "Loose, easy to manage clothing",
          "A way to keep your dressing dry in the shower",
          "Any pain relief recommended by your surgical team"
        ]
      },
      {
        heading: "After your surgery",
        bullets: [
          "We'll usually see you for your first therapy appointment within one to two weeks",
          "We'll confirm the timing with you",
          "Bring any post op information from your surgeon to that appointment"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "post-surgery-recovery",
    eyebrow: "PATIENT INFORMATION",
    title: "Recovery After Hand Surgery",
    intro:
      "Every hand surgery is a little different, so this is general guidance. We'll tailor your specific programme to you and your procedure.",
    sections: [
      {
        heading: "In the early days",
        bullets: [
          "Rest, elevation, and gentle movement of joints your surgeon has cleared support healing",
          "This helps manage swelling",
          "Follow your surgeon's specific instructions about your dressing and any splint"
        ]
      },
      {
        heading: "As you heal",
        bullets: [
          "Your therapy programme progresses gradually",
          "From gentle movement through to strengthening",
          "Paced to your tissue healing and confirmed by your surgeon and therapist"
        ]
      },
      {
        heading: "Looking after yourself",
        bullets: [
          "Recovery can take longer than expected, and that's normal",
          "Pace yourself",
          "Do your home exercises as prescribed",
          "Reach out with any questions"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "rheumatoid-arthritis",
    eyebrow: "PATIENT INFORMATION",
    title: "Rheumatoid Arthritis of the Hand",
    intro:
      "Living with joint pain, swelling, or stiffness from rheumatoid arthritis? Looking after your hands day to day can make a real difference alongside your medical treatment.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Rheumatoid arthritis is a condition where the immune system causes inflammation in the joint lining",
          "This can lead to pain, swelling, stiffness, and over time, changes in joint shape",
          "The hands and wrists are commonly affected"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Pace activities and build in rest breaks, especially during a flare",
          "Use joint protection techniques, like larger handled tools and avoiding tight gripping",
          "Splints can support painful joints during flares or demanding tasks",
          "Gentle regular movement helps keep joints mobile between flares"
        ]
      },
      {
        heading: "Joint protection and equipment",
        bullets: [
          "Larger handled tools and utensils reduce joint stress during flares and beyond",
          "Jar openers, electric openers, and lever tap handles reduce twisting load on small joints",
          "Resting or working splints can support painful joints, we'll advise which suits you and when",
          "An occupational therapy home assessment can identify further useful equipment"
        ]
      },
      {
        heading: "Managing flares with heat and cold",
        bullets: [
          "Warmth, a warm shower, bath, or heat pack, can ease morning stiffness",
          "Cold packs can help settle a joint that's hot, swollen, or acutely flared",
          "Avoid heat directly over a very hot, actively inflamed joint, cold is usually more comfortable there"
        ]
      },
      {
        heading: "Grip and load management",
        bullets: [
          "Distribute load across your whole hand and both hands rather than one gripping finger or thumb",
          "Slide or push heavy items rather than lifting and carrying where possible",
          "Plan demanding tasks for times of day your joints feel best, and pace the rest"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Blood tests and imaging, such as X-rays or ultrasound, are usually arranged by your GP or rheumatologist to confirm the diagnosis and monitor disease activity",
          "We don't order these ourselves, but will flag any changes we notice in your hands to your medical team"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "Rheumatoid arthritis is managed by your GP and rheumatologist, alongside the hands on support we provide",
          "We work alongside your medical team, and will flag any concerns about your hand symptoms or function to them"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "A new or worsening flare that isn't settling",
          "Increasing difficulty with daily tasks",
          "You'd like a splint or joint protection review"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or rheumatologist.",
    sources: [
      {
        title: "Occupational therapy for rheumatoid arthritis",
        authors: "Steultjens et al.",
        year: "2004",
        note: "Found occupational therapy has a positive effect on daily function, with strong evidence specifically supporting joint protection instruction.",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003114.pub2/abstract"
      }
    ]
  },
  {
    id: "nerve-injury-recovery",
    eyebrow: "PATIENT INFORMATION",
    title: "Nerve Injury and Recovery",
    intro:
      "Had an injury or surgery involving a nerve in your hand or arm? Nerve healing is a slow, steady process, and it helps to know what to expect along the way.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Nerves carry sensation and movement signals, and can be injured through cuts, crush injuries, or surgery",
          "Nerves regenerate slowly, often just a few millimetres a week",
          "You may notice changing sensations, tingling, or patches of numbness as it heals"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Protect the area from injury while sensation is reduced, especially from heat and sharp objects",
          "Follow any splinting or positioning advice to protect the healing nerve",
          "Desensitisation or sensory re-education exercises can help as feeling returns, we'll guide you on timing"
        ]
      },
      {
        heading: "Imaging",
        bullets: [
          "Imaging doesn't show nerve function, so it isn't used to track your recovery",
          "A nerve conduction study is sometimes used if there's uncertainty about how a nerve is recovering"
        ]
      },
      {
        heading: "Onward referral",
        bullets: [
          "You'll usually be under the care of your surgical team as well as therapy, we'll keep in touch with them about your progress",
          "If recovery isn't progressing as expected, your surgeon may discuss further options with you"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Sensation or movement getting worse rather than better",
          "A wound over the nerve repair site looking unwell",
          "Any concerns about your recovery not matching what you expected"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or surgeon."
  },
  {
    id: "hand-burns-care",
    eyebrow: "PATIENT INFORMATION",
    title: "Caring for a Hand Burn",
    intro:
      "Burns to the hand need careful care to protect movement and skin as they heal. Here's a general guide alongside your specific wound care plan.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Burns damage the skin and sometimes deeper tissue, and healing time depends on how deep the burn is",
          "Hands are prone to stiffness and tightness while burns heal, given how much your skin needs to stretch to move your fingers"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Follow your dressing and wound care instructions closely",
          "Keep moving your fingers and hand gently within the range advised, to help prevent stiffness",
          "Once healed, moisturise regularly and protect the area from direct sun",
          "Wear any pressure garment or splint as prescribed to support scar healing"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Signs of infection, increasing redness, swelling, warmth, or discharge",
          "Increasing tightness or reduced movement",
          "Any concerns about how the wound or scar is healing"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or burns team."
  },
  {
    id: "return-to-work",
    eyebrow: "PATIENT INFORMATION",
    title: "Returning to Work After a Hand Injury",
    intro:
      "Getting back to work after a hand injury often works best as a gradual, planned process. Here's a fuller picture of how we support that, from workplace set up through to your referral pathway.",
    sections: [
      {
        heading: "Workplace assessment",
        bullets: [
          "We can visit your workplace, or talk through it with you in detail, to understand the specific demands of your role",
          "This includes tasks like lifting, gripping, typing, using tools, or driving",
          "A proper assessment lets us recommend changes that suit your actual job, not generic advice",
          "We'll also look at how often and how heavily each task loads the injured area"
        ]
      },
      {
        heading: "Adapting your job",
        bullets: [
          "Modified duties, lighter tasks, reduced hours, or a change in task order can all ease the load while you recover",
          "Rotating between tasks helps avoid repetitive strain on the healing area",
          "Building in regular short breaks matters more than one long break at the end of the day",
          "We'll work through specific sticking points in your role with you, not just general principles"
        ]
      },
      {
        heading: "Setting up your workstation",
        bullets: [
          "Keep your wrist in a neutral position, not bent up or resting heavily on a hard edge",
          "Elbows at around a right angle, shoulders relaxed rather than hunched",
          "Chair height and screen position matter too, poor posture upstream adds strain downstream",
          "A document holder, footrest, or monitor riser can help if your current setup is forcing awkward positions",
          "For standing or manual roles, bench height and how far you reach to work also affect load on your hand and wrist"
        ]
      },
      {
        heading: "Adaptive equipment that can help",
        bullets: [
          "Built up or larger handled tools and utensils reduce the grip force needed",
          "Voice to text software or dictation tools can reduce typing load",
          "Key turners, jar openers, and lever style tap handles help with pinch heavy tasks",
          "Ergonomic mice, split keyboards, or a vertical mouse can suit some wrist and elbow conditions",
          "For trade or manual roles, padded gloves, tool grips, or anti vibration equipment can reduce strain",
          "We'll help identify what will genuinely help for your specific role, rather than a generic list of gadgets"
        ]
      },
      {
        heading: "How the referral process works",
        bullets: [
          "If your injury is work related, your claim is usually managed through ACC, and we'll liaise with your case manager as part of your care",
          "Your GP or specialist may also be involved, and we can send updates to help keep everyone aligned",
          "We can write reports for your employer outlining temporary restrictions or recommended modified duties",
          "If a formal workplace assessment or vocational support is needed, we can refer you on to the right person",
          "You're welcome to loop in your manager or HR contact at any point in this process"
        ]
      },
      {
        heading: "Planning a graded return",
        bullets: [
          "Return to work plans usually start with reduced hours or modified duties, then build up in stages",
          "We'll set review points to check how you're coping and adjust the plan as needed",
          "A return that moves faster than your hand is ready for can set your recovery back, pacing genuinely matters",
          "We'll work with you and your employer to agree realistic timeframes"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain or swelling that flares up with work tasks",
          "You feel your duties are progressing faster than your hand is ready for",
          "You need updated paperwork for your employer or ACC",
          "Anything about your return to work plan isn't feeling realistic"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist or ACC case manager."
  },
  {
    id: "return-to-sport",
    eyebrow: "PATIENT INFORMATION",
    title: "Returning to Sport After a Hand Injury",
    intro:
      "Keen to get back to your sport? A staged return helps you get back doing what you love while protecting your recovery.",
    sections: [
      {
        heading: "Planning your return",
        bullets: [
          "We'll talk through the specific demands of your sport, gripping, catching, contact, weight bearing",
          "Taping, strapping, or a protective splint can support you as you build back up",
          "A graded return to training before competition gives your hand time to adjust"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Build grip and load tolerance gradually with your therapy programme",
          "Warm up thoroughly before training or play",
          "Listen to your hand, some muscle fatigue is normal, sharp or sudden pain is not"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain, swelling, or instability during or after activity",
          "You're unsure whether you're ready for full contact or competition",
          "You'd like a specific return to sport plan"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "compression-garment-care",
    eyebrow: "HOME CARE PROGRAMME",
    title: "Caring for Your Compression Garment",
    intro:
      "Your compression garment supports healing and helps manage swelling or scarring. A little care keeps it working well.",
    sections: [
      {
        heading: "Wearing it",
        bullets: [
          "Wear your garment for the hours advised each day",
          "It should feel firm and supportive, not painful or restrictive",
          "Put it on first thing, before swelling builds up through the day, if advised"
        ]
      },
      {
        heading: "Washing and care",
        bullets: [
          "Hand wash in cool water with a mild soap",
          "Avoid wringing, tumble drying, or direct heat",
          "Lay flat to dry"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "The garment feels too tight, too loose, or is losing its stretch",
          "Numbness, tingling, or colour change while wearing it",
          "Skin irritation under the garment"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  },
  {
    id: "managing-persistent-pain",
    eyebrow: "PATIENT INFORMATION",
    title: "Managing Persistent Hand or Arm Pain",
    intro:
      "When pain sticks around longer than expected, it can be confusing and frustrating. Understanding a bit more about persistent pain can help you feel more in control.",
    sections: [
      {
        heading: "What's happening",
        bullets: [
          "Persistent pain, pain lasting longer than the usual healing time, doesn't always mean ongoing tissue damage",
          "Your nervous system can become more sensitive over time, amplifying pain signals",
          "This is a real, common experience, not a sign you're imagining it or doing something wrong"
        ]
      },
      {
        heading: "What can help",
        bullets: [
          "Gradually building activity back up, rather than avoiding movement altogether",
          "Pacing tasks, breaking them into smaller chunks with rest between",
          "Stress, sleep, and mood all genuinely influence pain, so looking after these matters too",
          "Working with your therapist on a plan tailored to your goals"
        ]
      },
      {
        heading: "When to get in touch",
        bullets: [
          "Pain that's significantly limiting your daily life or mood",
          "New symptoms alongside the pain that concern you",
          "You'd like to talk through a longer term management plan"
        ]
      }
    ],
    footerNote: "This handout is general information and doesn't replace individual advice from your therapist."
  }
];
