data_damage_death = [
     {
        title: "Instant death",
        icon: "decapitation",
        subtitle: "Death by massive damage",
        description: "Death by massive damage",
        reference: "PHB, pg. 197",
        bullets: [
            "Massive damage can kill you instantly. When damage reduces you to 0 hit points and there is damage remaining, you die if the remaining damage equals or exceeds your hit point maximum.",
            "For example, a cleric with a maximum of 12 hit points currently has 6 hit points. If she takes 18 damage from an attack, she is reduced to 0 hit points, but 12 damage remains. Because the remaining damage equals her hit point maximum, the cleric dies."
        ]
    },
    {
       title: "Dying",
       icon: "dead-head",
       subtitle: "Reduced to 0 hit points",
       description: "Reduced to 0 hit points",
       reference: "PHB, pg. 197",
       bullets: [
           "If damage reduces you to 0 hit points and fails to kill you, you fall <i>unconscious</i>. This unconsciousness ends if you regain any hit points.",
           "Whenever you have 0 hit points, you must keep track of your death saving throw successes and failures."
       ]
   },
   {
        title: "Death saving throws",
        icon: "bandage-roll",
        subtitle: "Trying to survive",
        description: "Trying to survive mortal wounds",
        reference: "PHB, pg. 197",
        bullets: [
            "Whenever you start your turn with 0 hit points, you must make a special saving throw, called a death saving throw, to determine whether you creep closer to death or hang onto life. Unlike other saving throws, this one isn't tied to any ability score. You are in the hands of fate now, aided only by spells and features that improve your chances of succeeding on a saving throw.",
            "<b>Roll a d20</b> - If the roll is 10 or higher, you succeed. Otherwise, you fail. A success or failure has no effect by itself. On your third success, you become stable (see below). On your third failure, you die. The successes and failures don't need to be consecutive; keep track of both until you collect three of a kind. The number of both is reset to zero when you regain any hit points or become stable.",
            "<b>Rolling 1 or 20</b> - When you make a death saving throw and roll a 1 on the d20, it counts as two failures. If you roll a 20 on the d20, you regain 1 hit point.",
            "<b>Damage at 0 Hit Points</b> - If you take any damage while you have 0 hit points, you suffer a death saving throw failure. If the damage is from a critical hit, you suffer two failures instead. If the damage equals or exceeds your hit point maximum, you suffer instant death.",
            "<b>Stable</b> - A stable creature doesn't make death saving throws, even though it has 0 hit points, but it does remain unconscious. The creature stops being stable, and must start making death saving throws again, if it takes any damage. A stable creature that isn't healed regains 1 hit point after 1d4 hours."
        ]
    },
    {
        title: "Knocking a creature out",
        icon: "coma",
        subtitle: "Sparing their life",
        description: "Sparing a creature's life by knocking them out",
        reference: "PHB, pg. 197",
        bullets: [
            "Sometimes an attacker wants to incapacitate a foe, rather than deal a killing blow. When an attacker reduces a creature to 0 hit points with a melee attack, the attacker can knock the creature out. The attacker can make this choice the instant the damage is dealt. The creature falls <i>unconscious</i> and is stable.",
        ]
    },
]

data_damage_health = [
    {
        title: "Healing",
        icon: "healing",
        subtitle: "Regaining health",
        description: "Regaining health",
        reference: "PHB, pg. 197",
        bullets: [
            "Unless it results in death, damage isn't permanent. Even death is reversible through powerful magic. Rest can restore a creature's hit points, and magical methods such as a <i>cure wounds</i> spell or a <i>potion of healing</i> can remove damage in an instant.",
            "When a creatures receives healing of any kind, hit points regained are added to its current hit points. A creature's hit points can't exceed its hit point maximum, so any hit points regained in excess of this number are lost.",
            "A creature that has died can't regain hit points until magic such as the <i>revivify</i> spell has restored it to life."
        ]
    },
    {
        title: "Temporary hit points",
        icon: "eternal-love",
        subtitle: "Temporary health",
        description: "Temporary health",
        reference: "PHB, pg. 198",
        bullets: [
            "Some spells and special abilities confer temporary hit points to a creature. Temporary hit points aren't actual hit points; they are a buffer against damage, a pool of hit points that protect you from injury.",
            "When you have temporary hit points and take damage, the temporary hit points are lost first, and any leftover damage carries over to your normal hit points.",
            "Because temporary hit points are separate from your actual hit points, they can exceed your hit point maximum. A character can, therefore, be at full hit points and receive temporary hit points.",
            "Healing can't restore temporary hit points, and they can't be added together. If you have temporary hit points and receive more of them, you decide whether to keep the ones you have or to gain the new ones.",
            "If you have 0 hit points, receiving temporary hit points doesn't restore you to consciousness or stabilize you. They can still absorb damage directed at you while you're in that state, but only true healing can save you.",
            "Unless a feature that grants you temporary hit points has a duration, they last until they're depleted or you finish a long rest."
            ]
    }
]

data_damage_resting = [
     {
        title: "Short rest",
        icon: "campfire",
        subtitle: "Resting for at least 1 hour",
        description: "Resting for at least 1 hour",
        reference: "PHB, pg. 186",
        bullets: [
             "A short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds.",
             "A character can spend one or more Hit Dice at the end of a short rest, up to the character's maximum number of Hit Dice, which is equal to the character's level. For each Hit Die spent in this way, the player rolls the die and adds the character's Constitution modifier to it. The character regains hit points equal to the total. The player can decide to spend an additional Hit Die after each roll. A character regains some spent Hit Dice upon finishing a long rest."
        ]
    },
    {
        title: "Long rest",
        icon: "bed",
        subtitle: "Resting for at least 8 hours",
        description: "Resting for at least 8 hours",
        reference: "PHB, pg. 186",
        bullets: [
             "A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps for at least 6 hours and performs no more than 2 hours of light activity, such as reading, talking, eating, or standing watch. If the rest is interrupted by a period of strenuous activity - at least 1 hour of walking, fighting, casting spells, or similar adventuring activity - the characters must begin the rest again to gain any benefit from it.",
             "At the end of a long rest, a character regains all lost hit points. The character also regains spent Hit Dice, up to a number of dice equal to half of the character's total number of them. For example, if a character has eight Hit Dice, they can regain four spent Hit Dice upon finishing a long rest.",
             "A character can't benefit from more than one long rest in a 24-hour period, and a character must have at least 1 hit point at the start of the rest to gain its benefits.",
             "When you finish a long rest during which you slept in medium or heavy armor, you regain only one quarter of your spent Hit Dice (minimum of one die). If you have any levels of exhaustion, the rest doesn’t reduce your exhaustion level.",
             "Whenever you end a 24-hour period without finishing a long rest, you must succeed on a DC 10 Constitution saving throw or suffer one level of exhaustion. It becomes harder to fight off exhaustion if you stay awake for multiple days. After the first 24 hours, the DC increases by 5 for each consecutive 24-hour period without a long rest. The DC resets to 10 when you finish a long rest."
        ]
   },
   {
    title: "Sleeping in armor",
    icon: "lamellar",
    subtitle: "Reduced rest",
    description: "Reduced resting from sleeping in armor",
    reference: "XGtE, pg. 77",
    bullets: [
        "Sleeping in light armor has no adverse effect on the wearer.",
        "When you finish a long rest during which you slept in medium or heavy armor, you regain only one quarter of your spent Hit Dice (minimum of one die). If you have any levels of exhaustion, the rest doesn’t reduce your exhaustion level."
        ]
},
{
    title: "Going without a long rest",
    icon: "sleepy",
    subtitle: "Sleep deprivation",
    description: "Sleep deprivation from going without a long rest",
    reference: "XGtE, pg. 78",
    bullets: [
        "Whenever you end a 24-hour period without finishing a long rest, you must succeed on a DC 10 Constitution saving throw or suffer one level of exhaustion.",
        "It becomes harder to fight off exhaustion if you stay awake for multiple days. After the first 24 hours, the DC increases by 5 for each consecutive 24-hour period without a long rest. The DC resets to 10 when you finish a long rest."
        ]
}
]