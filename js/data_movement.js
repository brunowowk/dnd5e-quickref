data_movement = [
    {
        title: "Move",
        icon: "walk",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft moved",
        reference: "PHB, pg. 190.",
        bullets: [
            "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
            "You can move through a nonhostile creature's space.",
            "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Another creature's space is difficult terrain for you.",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
        ]
    },
    {
        title: "Drop prone",
        icon: "despair",
        subtitle: "Cost: 0ft",
        description: "Movement cost: 0ft (free)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "You can drop prone without using any of your speed",
            "To move while prone, you must crawl or use magic such as teleportation",
            "Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)"
        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Cost: half of speed",
        description: "Movement cost: half of your speed",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "You can't stand up if you don't have enough movement left or if your speed is 0"
        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",

        reference: "PHB, pg. 182.",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ]
    },
    {
        title: "Long jump",
        icon: "jump-across",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 182.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 182.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
        bullets: [
            "This rule is true even if multiple things in a space count as difficult terrain.",
            "Low furniture, rubble, undergrowth, steep stairs, snow, and shallow bogs are examples of difficult terrain. The space of another creature, whether hostile or not, also counts as difficult terrain."
        ]
    },
    {
        title: "Through other creatures",
        icon: "ghost-ally",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 182.",
        description: "Another creature's space counts as difficult terrain and therefore costs an additional 5ft per 5ft of movement",
        bullets: [
            "You can move through a nonhostile creature's space. In contrast, you can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space.",
            "If you leave a hostile creature's reach during your move, you provoke an opportunity attack."
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Crawling costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        title: "Climb",
        icon: "crags",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Climbing costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the climb is difficult",
            "You ignore this extra cost if you have a climbing speed and use it to climb."
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Swimming costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the swim is difficult",
            "You ignore this extra cost if you have a swimming speed and use it to swim."
        ]
    },
    {
        title: "Squeezing into a Smaller Space",
        icon: "dungeon-gate",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Squeezing costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [
            "A creature can squeeze through a space that is large enough for a creature one size smaller than it. Thus, a Large creature can squeeze through a passage that's only 5 feet wide.",
            "While squeezing through a space, a creature has disadvantage on attack rolls and Dexterity saving throws. Attack rolls against the creature have advantage while it's in the smaller space."
        ]
    },
    {
        title: "Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
   },
   {
       title: "Mounting & Dismounting",
       icon: "horseshoe",
       subtitle: "Cost: half of speed",
       description: "Getting on and off of a mount",
       reference: "PHB, pg. 198",
       bullets: [
            "Once during your move, you can mount a creature that is within 5 feet of you, or dismount. Doing so costs an amount of movement equal to half your speed. For example, if your speed is 30 feet, you must spend 15 feet of movement to mount a horse. Therefore you can't mount it if you don't have 15 feet of movement left or if your speed is 0.",
            "If an effect moves your mount against its will while you're on it, you must succeed on a DC 10 Dexterity saving throw or fall off the mount, landing prone in a space within 5 feet of it. If you're knocked prone while mounted, you must make the same saving throw.",
            "If your mount is knocked prone, you can use your reaction to dismount as it falls and land on your feet. Otherwise you are dismounted and fall prone in a space within 5 feet of it."
       ]
   },
   {
    title: "Improvise",
    icon: "juggler",
    subtitle: "Any stunt not on this list",
    description: "Perform any movement or stunt you can imagine",
    bullets: [
        "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
    ]
    }
]
