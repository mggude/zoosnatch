const mongoose = require("mongoose");
const db = require("../models");
const Character = require("../models/index");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/zoosnatchcharacters"
);

const characterSeed = [
    // GIRAFFE OBJECT
    {
        name: "Giraffe",
        alive: true,
        active: true,
        staticImg: "./assets/images/characters/animated/animated_giraffe.png",
        animatedImg: "./assets/images/characters/animated/animated_giraffe.png",
        cagedImg: "./assets/images/characters/caged/caged.png",
        scene: [
            {
                used: false,
                backgroundImg: "./assets/images/BG_images/zooBG.png",
                question: "It’s a normal day at the Zoo… that is, until closing time. Head Zoo-Keeper William Montague forgets to lock your cage for the night! With mixed feelings, you’re faced with a tough decision: live a meaningless existence in the zoo, or risk it all and escape? Click to make decisions, right arrow to explore!" ,
                answerTrue: "You kick open your cage with enthusiasm and gallop past all the other animals. As the breeze hits you in the face, you get your first taste of freedom!",
                answerFalse: "You decide to stay loyal to Zoo-Keeper William Montague. As the zookeeper makes his morning rounds, he realizes your cage is open. You receive a grateful head scratch and extra breakfast. The first zoo-guest you see is a child with a Giraffe T-Shirt on. He tosses you an extra large wad of bubblegum which you catch in your mouth and happily chew. As the minty flavor explodes on your taste buds, time slows down and you realize you're choking. In your last moments of consciousness, all you remember is that damn kid and the minty flavors of death. You finally die and later become the trending meme on reddit.",
                choiceOne: "RUN FOR IT!",
                choiceTwo: "Stay loyal",
                choiceOneImg: "./assets/images/snatch_images/escape_snatch.png",
                choiceTwoImg: "./assets/images/snatch_images/stay_snatch.png",
                incorrectResult: 0,
                correctAnswer: "choiceOne",
                correct: true,
            },
    
            {   
                used: false,
                backgroundImg: "./assets/images/BG_images/cityBG.png",
                question: "You’ve made it out! Feeling exhilarated, you decide to get as far away from the zoo as possible. You notice a sign for the Subway. You’ve heard tales of taking the subway to a place called “Mexico” where the beaches are warm, animals roam free and the margaritas flow like wine. Before you reach the subway, you notice a forest beyond the city. Do you go to Viva Mexico or run to the nearby forest to continue your new freedom?",
                answerTrue: "As great as a margarita sounds, you’re a Giraffe and you can’t hold your liquor. You quickly gallop to the nearby forest. As you enter, you smell the sweet lush leaves by the billions. YAY FREEDOM! ",
                answerFalse: "You gallop towards the subway. Strangely, there is no one in sight! The train pulls up like clockwork. You have a hard time boarding thanks to your massive Giraffe body. You manage to enter, but before you pull your head inside, the doors shut and lock your 8ft neck and head outside! A chime plays and the train rapidly starts to move. Without another moment’s memory, your head smashes into the confined tunnel. Your become rubber-necked and your head separates from your body, releasing exuberant amounts of ‘glitter’ all over and your body drops lifelessly to the ground. You’re dead!",
                choiceOne: "Margaritas and Nachos",
                choiceTwo: "Continue Running!",
                choiceOneImg: "./assets/images/snatch_images/subway_snatch.png",
                choiceTwoImg: "./assets/images/snatch_images/forest_snatch.png",
                incorrectResult: 0,
                correctAnswer: "choiceTwo",
                correct: true,
    
            },
    
            {
                used: false,
                backgroundImg: "./assets/images/BG_images/forestBG.png",
                question: "You're in the forest! With a tear of happiness in your eye, visions of eating antidepressant-infused hay flood your memory. You fantasize about finding another Giraffe who has spots-in-all-the-right-places, and dream of making a wobbly-legged baby Giraffe and living happily ever after together... until you approach a split in the road. One path has a cold breeze, grey trees without leaves and the stereotypical hooting owl with beady eyes. The other path continues with lush vegetation and is paved with a yellow brick road… Which path do you take?",
                answerTrue: "You take the road-less-traveled to avoid Zoo-Keeper William Montague. As you tiptoe through the scary forest, you hear what sounds like a forest stream and suddenly feel parched... ",
                answerFalse: "You flip off the hooting owl with your hoof and follow the safer path with yellow bricks. Eventually, you clear the forest and see a royal emerald kingdom in the distance. You stop dead in your tracks, realizing someone might report a 20ft Giraffe to the zoo. You try to turn around but you are blocked by a gaggle of Munchkins. They resemble a certain political figure, with orange-faces and disproportionate bodies… you try to run but they pull out a knife and sing, in unison “The Wizard will love a coat made of your beautiful spotted fur!” They stab you repeatedly until Giraffe-glitter covers the yellow bricks. You die and become a wardrobe piece.",
                choiceOne: "Go into Creepy Forest",
                choiceTwo: "Follow the Yellow Brick Road",
                choiceOneImg: "./assets/images/snatch_images/scary_snatch.png",
                choiceTwoImg: "./assets/images/snatch_images/YBR_snatch.png",
                incorrectResult: 0,
                correctAnswer: "choiceOne",
                correct: true,
    
            },
    
            {
                used: false,
                backgroundImg: "./assets/images/BG_images/scaryBG.png",
                question: "As you walk you become more and more thirsty. You finally come upon a river stream... but what's that? It's a bear in trap...  You’re faced with the decision to either quench your thirst or help the bear get free, what do you do?",
                answerTrue: "As thirsty as you are, you cannot even think about drinking water. You approach the bear and kick down on the trap. The bear tumbles to the ground in relief. He stands up and hugs you for your bravery and help. Suddenly, his claws accidentally scrape you and a few drops of Giraffe-glitter trickle down your neck. Bear’s eyes pop open with the sweet smell of glitter and he cannot contain his instincts to eat. He attacks and eats you with a tear in his eye. Giraffe is dead. BEAR IS NOW UNLOCKED TO PLAY!",
                answerFalse: "Upon sipping water from the forest stream, you feel a slight tingle upon your bum. You turn and see a red-feathered blow dart hanging from your rear end. You look around in confusion and catch a glimpse of Zoo-Keeper William Montague in the distance. Your vision begins to blur and you awake the next morning to the sound of children outside of your old cage at the zoo. It was quite an adventure but it looks like you are here to stay… for now… ",
                choiceOne: "Help Bear",
                choiceTwo: "Take a Sip of Water",
                choiceOneImg: "./assets/images/snatch_images/freebear_snatch.png",
                choiceTwoImg: "./assets/images/snatch_images/water_snatch.png",
                incorrectResult: 0,
                correctAnswer: "choiceOne",
                correct: true,
    
            },
        ]
    },
    
    // BEAR OBJECT
    {
        name: "Bear",
        alive: true,
        active: false,
        staticImg: "",
        animatedImg: "",
        cagedImg: "",
        scene: [
            {
                used: false,
                backgroundImg: "",
                question: "The morning started off pretty terrible. After a crazy night out with your bear friends and chopping on some honeycomb, you woke up in terrible pain. As you look down, you see you have stuck your foot in the middle of a bear trap. You moan in pain, hoping your buddies would come find you. Thankfully, you see the trees part and a weird, long-necked horse-thing comes through. He looks down at your aching leg and kicks the bear trap open! With a tear of joy in your eye, you give him a hug when you accidentally scratch him… Then you smell it… The smell of sweet animal glitter, dripping from his scratch. You can’t help yourself and you begin to maul the long-neck horse-thing until you have satisfied your hunger. As sad as you are about what you have done, you walk away and are able to begin your day." ,
                answerTrue: "Seeing that you already just ate a weird looking horse-thing with a huge neck, you decide to split. You divert the Zoo-Humans by throwing a left over hoove from the horse-thing in the opposite direction. The humans start shooting and run towards the noise as you sneakily escape. Your leg is already starting to feel better and you start running on all fours to get as far away as possible.",
                answerFalse: "It’s time to not only make a stand, but also get a little extra meat in your furry belly. You slowly begin to creep up on the Zoo-Humans but just as you get ready to perform a fatal flying ninja kick through the air, you get stuck in yet another bear trap… Seriously… why are there so many bear traps out here?! The Zoo-humans turn around with large eyes and a confused look in their eyes and then shoot you. Hours later you wake up to a weird sound… the sound of humans. You spring up to find out that you are now stuck in a cage with humans pointing and flashing lights at you… You have been trapped, you’ll probably die in here.",
                choiceOne: "Run like HELL!",
                choiceTwo: "Get your munch on!",
                choiceOneImg: "",
                choiceTwoImg: "",
                incorrectResult: 0,
                correctAnswer: "choiceTwo",
                correct: true,
            },
    
            {   
                used: false,
                backgroundImg: "",
                question: "What seems like hours have passed since your encounter with the Zoo-humans. You start to feel hungry again because of #ThatHibernationLifestyle and you begin to contemplate what to eat next. Seeing that is is extremely unlikely that you will find another massive animal to suppress your hunger, you start to think rationally. That is until you smell a faint smell of smoke in the near distance. It’s not the smoke of a forest fire, but the smell of a human-home. Curious, you look around to see a small, lonesome cabin with a faint bit of smoke rising from the chimney. You peak into the home to see that there are three bowls of unattended porridge sitting on the table. It looks like only the middle bowl has been eaten and no one else is around. What are the chances of that? As you get ready to enter, a movement catches your eye… It’s a small, blonde human-girl sleeping in one of the beds… “NOT ANOTHER HUMAN!” You think to yourself… but then again…this could be another one of these perfect scenarios of getting porridge AND a human treat to eat... Do you stay for the feast or go find some berries and honey?",
                answerTrue: "Again, you gotta play it safe. You already had two close calls. You begin to walk towards the mountains to find some wildflower honey or berries with a little bit of regret. As you turn around to reconsider, you see three bears barge into the cabin and find the tiny-human girl. You hear the human scream for a quick second until the sound of the grunting bears radiates through the forest. Good thing you didn’t go in there… ",
                answerFalse: "The winter is coming soon, you gotta get as much food as possible before you need to hibernate. You hyper-punch the door open and pounce on the little human before she knows what’s happening. Your teeth pierce through her veil-like flesh and within seconds there is nothing left besides human-glitter covered bed sheets. Now time for desert! You sit down, feeling satisfied as you grab the small bowl of porridge. “EW! this porridge is way too cold!” You spit it out over the table and reach for the last bowl. As you take a bite, you roar in pain. “OWW! This porridge is way too hot!” You realize why the human ate the other bowl, it must have been just right.. Just as that though finished, the door swings open and there stands three angry bears. The baby bear begins to scream in horror and Momma and Pappa Bear see the human carcass draped over their new egyptian cotton sheets… They roar in rage and attack you ruthlessly. Your glitter covers the rest of the house. You’re SUPER dead... GAME OVER!",
                choiceOne: "Play it safe",
                choiceTwo: "Obviously, mo’ food mo’ betta",
                choiceOneImg: "",
                choiceTwoImg: "",
                incorrectResult: 0,
                correctAnswer: "choiceOne",
                correct: true,
    
            },
    
            {
                used: false,
                backgroundImg: "",
                question: "You’re one lucky son-of-a-bear…You think to yourself, “maybe I can sense the future”. You continue your hike into the mountains. A gentle smell of flowers sawft past your nose and as all bears know - where there are flowers, there are bees, and where there are bees, there is delicious, golden honey by the pounds. You start to salivate over the thought of it all. Finally, you hear buzzing! You track down the source of the buzzing and sure enough, a plethora of bees around the hive! As you get closer you realize the hive looks different from those down in the forest… this one is much darker and the honey bees are also darker, longer and are not as fluffy and nice looking. Confused and with a weird feeling in your gut you contemplate: “Should I try some of this new honey Or keep walking to find another beehive like the ones in the forest?",
                answerTrue: "It is time to reward yourself with some delicious honey. You’ve made a long journey and you can see the mountain tops covered in snow which means hibernation is just around the corner. You karate chop the hive off the tree, breaking it in half and releasing all the bees. To your terror, there is no honey… and the buzzing becomes deafening.  You realize, these are no honey bees, these are huge hornets. You let your honey-goggles steer you wrong! The Hornets start a barrage of stinging as you try to run away. You run towards the snowy forest where the hornets won’t follow and just like you expected, the hornets stopped their attacks.",
                answerFalse: "It’s not worth the little bit of honey in the bee’s nest, you decide to keep trekking. You see a small cave along the way where you decide to lay down and rest your eyes. You’re exhausted from your long adventure and even though you’re hungry, there will be plenty of options to keep looking in the morning. Well, not quite… As you sleep, you are blasted with a cold wind. You are startled awake to find out a massive snowstorm swept through and has sealed you in the cave. You try to dig your way out but you have no energy and very little oxygen left in the small cave. You try to dig your way out, which knocks loose a support rock that is keeping the cave from collapsing. Just like that, a frozen boulder comes crashing down over your head and the snow is painted with your bear-glitter as everything goes black. THE END… YOU’RE SUPER DEAD.",
                choiceOne: "Gimme’ that Honey",
                choiceTwo: "Keep searching",
                choiceOneImg: "",
                choiceTwoImg: "",
                incorrectResult: 0,
                correctAnswer: "choiceOne",
                correct: true,
    
            },
    
            {
                used: false,
                backgroundImg: "./assets/images/BG_images/scaryBG.png",
                question: "As you continue to walk through the frozen forest, your legs and body start to swell from all the stinging. You feel helpless and dumb for going for that Hornet’s nest and are starting to drift in and out of consciousness because of the pain. That is until you hear a noise that you have never heard before. You look around as the noises come from all parts of the forest. You can’t see any other animals in front of you, until you look up into the trees. You see a pack of Snow Monkeys staring down at you and pointing. It looks like they are trying to figure out what to do with you. Never being in contact with a snow monkey before, you try to understand their loud yelling at each other. Are they trying to help you or are they afraid that you are a threat? You have two options: do you let out a powerful roar to scare them away or whimper and show submission for their help?",
                answerTrue: "You need help, you won’t make it much longer on your own. You stretch out your arms and let out a pathetic moan to show the snow monkeys that you are not a threat. It worked! They come down from the trees and circle around you to figure out what to do with you. One monkey runs off after discussion and comes back with a tarp that some humans must have left behind in the past. They roll you on to the tarp and begin to pull you through the snowy forest. You’re eyes open to the feeling of warmth. It looks like they put you next to a fire! Gratefully you try to roll over to try to thank them when you realize you’re tied up. “Maybe this is just a safety precaution?” you think… that is until the Alpha Monkey comes up, stairs you in the eyes and makes a gesture with his thumb across his throat. The other monkeys grab sharpened sticks and begin to stab you. In the last few moments of life, you see the Alpha snow monkey point to you and gesture your body laid on the ground near his part of  the cave… you have just become a decorative rug. GAME OVER! YOU HAVE UNLOCKED SNOW MONKEY TO PLAY",
                answerFalse: "You don’t want to take another chance and let out the loudest roar you have ever made. Just like that, they scatter and swing away in the trees. You lay there, cold, in pain and without energy. What now? The sky begins to become dark and it is hard to see anything around. You see two glowing eyes… then another two… and then another two. A gentle purr interrupts the silence and three snow leopards jump out. They quickly rip into your body after a few kicks, you have no more energy. The last thought that goes through your mind is all the humans you could have ate… Its a sad day - GAME OVER!",
                choiceOne: "Roar at them!",
                choiceTwo: "Whimper for their help",
                choiceOneImg: "",
                choiceTwoImg: "",
                incorrectResult: 0,
                correctAnswer: "choiceTwo",
                correct: true,
    
            },
        ]
    }
    
]
    
Character.remove({});
Character.create(characterSeed);


// db.Character
//     // .remove({})
//     .then(() => db.Character.colection.insertMany(characterSeed))
//     .then(data => {
//         console.log(data.result.n + " characters inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });
    
    