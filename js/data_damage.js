data_damage_basic = [
    {
    title: "Attack rolls",
    icon: "crossed-swords",
    subtitle: "Making an attack",
    description: "Making an attack",
    reference: "PHB, pg. 194",
    bullets: [
        "When you make an attack, your attack roll determines whether the attack hits or misses. To make an attack roll, roll a d20 and add the appropriate modifiers. If the total of the roll plus modifiers equals or exceeds the target's Armor Class (AC), the attack hits. The AC of a character is determined at character creation, whereas the AC of a monster is in its stat block.",
        "<b>Modifiers to the Roll</b> - When a character makes an attack roll, the two most common modifiers to the roll are an ability modifier and the character's proficiency bonus.",
        "<b>Ability Modifier</b> - The ability modifier used for a melee weapon attack is Strength, and the ability modifier used for a ranged weapon attack is Dexterity. Weapons that have the finesse or thrown property break this rule. Some spells also require an attack roll. The ability modifier used for a spell attack depends on the spellcasting ability of the spellcaster.",
        "<b>Proficiency Bonus</b> - You add your proficiency bonus to your attack roll when you attack using a weapon with which you have proficiency, as well as when you attack with a spell.",
        "<b>Rolling 1 or 20</b> - If the d20 roll for an attack is a 20, called a <i>critical hit</i>, the attack hits regardless of any modifiers or the target's AC. If the d20 roll for an attack is a 1, the attack misses regardless of any modifiers or the target's AC."
        ]
    },
    {
    title: "Damage rolls",
    icon: "stone-axe",
    subtitle: "Inflicting damage",
    description: "Inflicting damage",
    reference: "PHB, pg. 196",
    bullets: [
        "Each weapon, spell, and harmful monster ability specifies the damage it deals. You roll the damage die or dice, add any modifiers, and apply the damage to your target. Magic weapons, special abilities, and other factors can grant a bonus to damage.",
        "With a penalty, it is possible to deal 0 damage, but never negative damage.",
        "When attacking with a weapon, you add your ability modifier--the same modifier used for the attack roll--to the damage.",
        "If a spell or other effect deals damage to more than one target at the same time, roll the damage once for all of them. For example - Fireball, flame strike, and even magic missle spells have a single damage roll for all targets."
        ]
    },
    {
    title: "Critical hits",
    icon: "saber-slash",
    subtitle: "Dealing extra damage",
    description: "Dealing extra damage",
    reference: "PHB, pg. 196",
    bullets: [
        "When you score a critical hit, you get to roll extra dice for the attack's damage against the target. Roll all of the attack's damage dice twice and add them together. Then add any relevant modifiers as normal.",
        "If the attack involves other damage dice, such as from the rogue's Sneak Attack feature, you roll those dice twice as well."
        ]
    },
    {
    title: "Resistance & Vulnerability",
    icon: "broken-shield",
    subtitle: "For some damage types",
    description: "Some damage types will have increased or reduced effect",
    reference: "PHB, pg. 197",
    bullets: [
        "If a creature or an object has resistance to a damage type, damage of that type is halved against it.",
        "If a creature or an object has vulnerability to a damage type, damage of that type is doubled against it.",
        "Resistance and then vulnerability are applied after all other modifiers to damage.",
        "Multiple instances of resistance or vulnerability that affect the same damage type count as only one instance."
        ]
    }
]

data_damage_types1 = [
    {
        title: "Bludgeoning",
        icon: "mace-head",
        bullets: [
            "Blunt force attacks—hammers, falling, constriction, and the like—deal bludgeoning damage.",
        ]
    },
    {
        title: "Piercing",
        icon: "middle-arrow",
        bullets: [
            "Puncturing and impaling attacks, including spears and monsters’ bites, deal piercing damage.",
        ]
    },
    {
        title: "Slashing",
        icon: "shining-sword",
        bullets: [
            "Swords, axes, and monsters’ claws deal slashing damage.",
        ]
    },   
    {
        title: "Falling",
        icon: "falling",
        subtitle: "1d6 per 10 ft.",
        description: "Damage taken from falling",
        reference: "PHB, pg. 183",
        bullets: [
            "At the end of a fall, a creature takes 1d6 bludgeoning damage for every 10 feet it fell, to a maximum of 20d6. The creature lands prone, unless it avoids taking damage from the fall.",
        ]
    }
]

data_damage_types = [
    {
        title: "Acid",
        icon: "acid",
        bullets: [
            "The corrosive spray of a black dragon’s breath and the dissolving enzymes secreted by a black pudding deal acid damage.",
        ]
    },
   {
      title: "Cold",
      icon: "ice-cube",
      bullets: [
          "The infernal chill radiating from an ice devil’s spear and the frigid blast of a white dragon’s breath deal cold damage.",
      ]
   },
   {
      title: "Fire",
      icon: "flame",
      bullets: [
          "Red dragons breathe fire, and many spells conjure flames to deal fire damage",
      ]
   },
   {
      title: "Force",
      icon: "magic-swirl",
      bullets: [
          "Force is pure magical energy focused into a damaging form. Most effects that deal force damage are spells, including magic missile and spiritual weapon.",
      ]
   },
   {
      title: "Lightning",
      icon: "lightning-storm",
      bullets: [
          "A lightning bolt spell and a blue dragon’s breath deal lightning damage.",
      ]
   },
   {
      title: "Necrotic",
      icon: "death-skull",
      bullets: [
          "Necrotic damage, dealt by certain undead and a spell such as chill touch, withers matter and even the soul.",
      ]
   },
   {
      title: "Poison",
      icon: "poison-gas",
      bullets: [
          "Venomous stings and the toxic gas of a green dragon’s breath deal poison damage.",
      ]
   },
   {
      title: "Psychic",
      icon: "psychic-waves",
      bullets: [
          "Mental abilities such as a mind flayer’s psionic blast deal psychic damage.",
      ]
   },
   {
      title: "Radiant",
      icon: "holy-symbol",
      bullets: [
          "Radiant damage, dealt by a cleric’s flame strike spell or an angel’s smiting weapon, sears the flesh like fire and overloads the spirit with power.",
      ]
   },
   {
      title: "Thunder",
      icon: "ultrasound",
      bullets: [
          "A concussive burst of sound, such as the effect of the Thunderwave spell, deals thunder damage.",
      ]
   }
]