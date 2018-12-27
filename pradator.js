/*	-WHAT IS THIS?-
	This is my take on the UA:Playtest Ranger past level 5. It made reference to using a spell slot to activate Primeval Awareness yet included no spell lists or progression tables.
	To flesh out the class I gave the Predator Ranger access to abilities at different levels that are spells that don't require components (your environment is your component) that can only be used once per short or long rest.
	If someone has better skill-spells in mind, I'd also like to hear about it. I picked ones that were very specific to hunting down prey and slowly putting it out of its misery. 
	Which is in line with the tactics of the Komodo dragon, thus I added the Komodo Dragon as the Companion Spirit unique to the Predator Path.
	
	All Komodo dragons have to do in real life is bite once and walk away. Recent findings have revealed that the Komodo dragon only uses Poison and Tearing of flesh, 
	and not a Necrotic combination of Poison and Disease ridden bacteria as previously thought. So if you need a more powerful Companion Spirit, also give it immunity to Disease and make the damage type Necrotic instead of just a Poison status.
	
	I've added Scavenger's Tools instead of using Leatherworking (as suggested in the Lizardfolk writeup, because I couldn't see using stamping and punch tools to make bone darts. I imagine a Scavenger's Tools consisting of implements for 
	scraping, sharpening, filing, cutting, weaving (rope and tying skin to frames), etc. It works well with the guerilla background trait too. 
	
	I can be contacted on reddit u/stanseas.
*/

/*	-INFORMATION-
	Subject:	Playtest Ranger Class, Path of the Predator
	Effect:		This is a quick and dirty way of adding this class to the database. Cut and pasted code, modified to do what I need. I'm told the Tool propagates correctly in v13, if it still wont in v12.999.
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "pradator.js"; // Optional; This is how the file will be named in the sheet. Yes, I know it's misspelled. I did that so someone looking for Predator (from the Movies) won't be mislead. I also know that Komodo is a place name that isn't in dnd. I would have used a Megalania dino but it's too big. If you have a better statblock in mind, please let me know.
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ToolsList["scavengers tools"] = { //Note the use of only lower case! Also note the absence of the word "var" and the use of brackets [].
	infoname : "Scavenger's tools [5 gp]", //Required; This is the name as it will appear in the equipment menu
	name : "Scavenger's tools", //Required; The name as it will be put into the equipment table
	amount : "", //Required; The amount as will be put into the equipment table. You can put "" here if you like
	weight : 3 //Required, has to be a number; The weight as will be put into the equipment table. Note that the total weight is calculated as Amount×Weight. You can put "" here if you like
};

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
	damage_immunities : "poison",
	condition_immunities : "poisoned, prone",
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
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action (also, see Pounce trait), DC 13 CON or Poisoned"
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

ClassList["ua-predator-ranger"] = {
	regExpSearch : /^(?=.*predator)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	name : "Predator Ranger",
	source : ["UA:R", 0],
	primaryAbility : "\n \u2022 Predator Ranger: Dexterity and Wisdom;",
	prereqs : "\n \u2022 Predator Ranger: Dexterity 13 and Wisdom 13;",
	die : 12,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Wis"],
	skills : ["\n\n" + toUni("Ranger") + ": Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival", "\n\n" + toUni("Multiclass Ranger") + ": Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"],
	toolProfs : { primay : ["Herbalism kit"] },
	armor : [
		[true, false, false, true],
		[true, false, false, true]
	],
	weapons : [
		[true, true],
		[true, true]
	],
	equipment : "Ranger starting equipment:\n \u2022 leather armor;\n \u2022 Two shortswords -or- two martial melee weapons -or- a martial weapon and a shield;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows -or- a martial weapon.",
	subclasses : ["Ranger Path", ["ua-predator-ranger-predator"]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"ambuscade" : {
			name : "Ambuscade",
			source : ["UA:R", 2],
			minlevel : 1,
			description : desc([
				"When I roll initiative, I gain a special turn before others can act",
				"During this bonus turn, I can only use the Attack or Hide action",
				"I can't be surprised, but if I would be surprised I don't get the bonus turn"
			])
		},
		"natural explorer" : ClassList.ranger.features["natural explorer"],
		"fighting style" : ClassList.ranger.features["fighting style"],
		"skirmisher's stealth" : {
			name : "Skirmisher's Stealth",
			source : ["UA:R", 3],
			minlevel : 2,
			description : desc([
				"At the start of my turn, I can chose a creature I'm hidden from",
				"During that turn, I remain hidden from it, regardless of my actions",
				"As a bonus action at the end of my turn, I can use the Hide action"
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature3" : {
			name : "Ranger Path",
			source : ["UA:R", 3],
			minlevel : 3,
			description : desc([
				"Choose a Ranger Path you wish to follow and put it in the \"Class\" field",
				"This is the writeup for Predator"
			])
		},
		"primeval awareness" : {
			name : "Primeval Awareness",
			source : ["UA:MC", 6],
			minlevel : 3,
			description : "\n   " + "As an action, I can focus my awareness for 1 min, once per short rest" + "\n   " + "Out to 1 mile (6 in favored terrain), I sense if certain types of creatures are present",
			additional : "aber/celest/drag/ele/fey/fie/und",
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
	}
};

ClassSubList["ua-predator-ranger-predator"] = {
	regExpSearch : /^(?=.*predator)((?=.*(ranger|predator))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Predator",
	source : ["HB", 5],
	features : {
		"subclassfeature3" : {
			name : "Komodo Dragon Spirit Companion",
			source : ["HB", 0],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can have my Komodo dragon spirit animal materialize or dismiss it",
				"Its bite does necrotic damage and adds my Wis mod to its attacks and saves",
				"Its HP is half my ranger level or the total in its stat block, whichever is higher",
				"It takes its turn right after my initiative and is under my complete control"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Predator's Wound",
			source : ["HB", 0],
			minlevel : 3,
			description : desc([
				"When I invoke my spirit animal using my Bonus Action, I can chose a creature that I can see",
				"My next weapon attack against it deals 2d6 + Wis mod extra damage, DC 13 CON or Poisoned"
			])
		},
		"subclassfeature3.2" : {
			name : "Hunter's Mark",
			minlevel : 3,
			description : desc([
				"Once per short rest, I can chose a creature that I can see and cast Hunter's Mark",
			]),
			usages : 1,
			recovery : "short rest",
			tooltip : " (Predator Magic)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Predator Magic (level 3)",
				spells : ["hunter's mark"],
				selection : ["hunter's mark"],
				oncesr : true
			},
		},
		"subclassfeature5" : {
			name : "Pass Without Trace",
			minlevel : 5,
			description : desc([
				"Once per short rest, I can cast Pass Without Trace on myself using no material component",
			]),
			usages : 1,
			recovery : "short rest",
			tooltip : " (Predator Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Predator Magic (level 5)",
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				oncesr : true
			},
		},
		"subclassfeature9" : {
			name : "Water Walk",
			minlevel : 9,
			description : desc([
				"Once per short rest, I can cast Water Walk on myself using no material component",
			]),
			usages : 1,
			recovery : "short rest",
			tooltip : " (Predator Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Predator Magic (level 9)",
				spells : ["water walk"],
				selection : ["water walk"],
				oncesr : true
			},
		},
		"subclassfeature13" : {
			name : "Locate Creature",
			minlevel : 13,
			description : desc([
				"Once per short rest, I can cast Locate Creature using no material component",
			]),
			usages : 1,
			recovery : "short rest",
			tooltip : " (Predator Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Predator Magic (level 13)",
				spells : ["locate creature"],
				selection : ["locate creature"],
				oncesr : true
			},
		},
		"subclassfeature17" : {
			name : "Mislead",
			minlevel : 17,
			description : desc([
				"Once per short rest, I can cast Mislead",
			]),
			usages : 1,
			recovery : "short rest",
			tooltip : " (Predator Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Predator Magic (level 17)",
				spells : ["mislead"],
				selection : ["mislead"],
				oncesr : true
			},
		},
	},
};
