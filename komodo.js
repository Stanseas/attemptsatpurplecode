CreatureList["Komodo Dragon"] = {
	name : "Komodo Dragon", // Based on the deinonychus dinosaur in V and ToA
	source : [["V", 139], ["ToA", 217], ["HB"]],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "40 ft",
	scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "Keen Smell (advantage on perception checks involving smell)",
	damage_immunities : "poison, disease",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 8, "necrotic/piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
		}
	],
	traits : [{
			name : "Multiattack",
			description : "The dragon makes three attacks: two with its claws and one with its bite."
		}, {
			name : "Pounce",
			description : "If the dragon moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the dragon can make one bite attack against it as a bonus action."
		}
	]
};
