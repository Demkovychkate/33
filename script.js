const roles = {
	admin: "https://e7.pngegg.com/pngimages/19/226/png-clipart-richard-armitage-thorin-oakenshield-the-hobbit-an-unexpected-journey-bilbo-baggins-gandalf-the-hobbit-wizard-dwarf-thumbnail.png",
	student: "https://e7.pngegg.com/pngimages/950/105/png-clipart-the-hobbit-an-unexpected-journey-gollum-bilbo-baggins-gandalf-the-hobbit-s-mammal-vertebrate-thumbnail.png",
	lector: "https://e7.pngegg.com/pngimages/306/370/png-clipart-smaug-dragon-thorin-oakenshield-the-hobbit-cliff-dragon-mammal-dragon-thumbnail.png",
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Dvalyn",
		age: 42,
		img: "https://e7.pngegg.com/pngimages/725/211/png-clipart-dwalin-thorin-oakenshield-the-hobbit-bombur-dwarf-dwarf-mammal-chibi-thumbnail.png",
		role: "student",
		courses: [
			{
				"title": " Self-defense",
				"mark": 20
			},
			{
				"title": "Riding",
				"mark": 100
			}
		]
	},
	{
		name: "Kily",
		age: 20,
		img: "https://e7.pngegg.com/pngimages/355/409/png-clipart-thranduil-kili-thorin-oakenshield-legolas-fili-the-hobbit-chibi-fictional-character-thumbnail.png",
		role: "student"
	},
	{
		name: "Ballyn",
		age: 43,
		img: "https://e7.pngegg.com/pngimages/254/463/png-clipart-the-hobbit-balin-the-lord-of-the-rings-fili-bilbo-baggins-dwarf-rings-chibi-cartoon-thumbnail.png",
		role: "student",
		courses: [
			{
				"title": "Intelligence",
				"mark": 50
			}
		]
	},
	{
		name: "Bombur",
		age: 18,
		img: "https://e7.pngegg.com/pngimages/743/129/png-clipart-bilbo-baggins-the-hobbit-kili-thranduil-thorin-oakenshield-small-spoon-mammal-carnivoran-thumbnail.png",
		role: "student",
		courses: [
			{
				"title": "Self-defense",
				"mark": 75
			},
			{
				"title": "Power",
				"mark": 23
			}]
	},
	{
		name: "Tranduil",
		age: 130,
		img: "https://e7.pngegg.com/pngimages/567/1019/png-clipart-thranduil-legolas-tauriel-anime-bilbo-baggins-anime-face-chibi-thumbnail.png",
		role: "admin",
		courses: [
			{
				"title": "Self-defense",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Power",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "Intelligence",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Smaug",
		age: 253,
		img: "https://e7.pngegg.com/pngimages/967/637/png-clipart-smaug-drawing-the-hobbit-dragon-dragon-dragon-fictional-character-thumbnail.png",
		role: "lector",
		courses: [
			{
				"title": "Power",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Self-defense",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]