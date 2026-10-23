const items = [
    {"id":1, "name":"Terraria", "type":"Action RPG", "rating":9.9, 
        "description":"This game is one of the highest selling video games of all time, ranking at 7th place with 70 million sales. This is for good reason. The game is great, easily moddable, and is jam packed with countless items to try to find, craft, collect, and use in battle. I've still never collected the terraprisma, to this day."},
    
    {"id":2, "name":"Persona 5 Royal", "type":"RPG", "rating":9.7, 
        "description":"This game is long. Really long. But its jrpg gameplay is among the best of the series with how fun it is, and it's full of entertaining enemies to fight, bosses to defeat and more. Unfortunately, it's filled with countless uncomfortable topics, but even despite those topics, it still is a good game. Exploring Tokyo is fun, the dungeons are even more fun, and the fights are satisfying."},
    
    {"id":3, "name":"Fields of Mistria", "type":"Farming Simulator", "rating":9.1, 
        "description":"This is a farming simulator with an artstyle reminiscent of old 1990's anime. The reason this is one of my favorites isn't because of the farming sim gameplay, but purely for the dialogue within the game. The characters in the game have unique dialogue for nearly every action you can do, from donating objects for research, to fishing a lot, to even earning a lot of money. It's fun. Moreover, the characters are likeable, for the most part, and there's quite a lot of furniture, animals, monsters, and more to be seen."},
    
    {"id":4, "name":"Hollow Knight: Silksong", "type":"Metroidvania", "rating":9.7, 
        "description":"A really fun 2d platformer and metroidvania, filled with a lot of fun bosses, fun characters, interesting dialogue and expansions to the story of Hollow Knight. It's rather difficult, but it introduces things in such a way that without realizing it, you get more skilled at playing the game as you go on, and without realizing it, you'll find yourself having a unique playstyle that you're skilled at."},
    
    {"id":5, "name":"The Binding of Isaac: Repentance", "type":"Roguelike", "rating":9.7, 
        "description":"The final dlc of one of the most famous roguelites of all time. With over 700 items to earn, find, and collect, you can create weird and unusual runs each and every time you play. It's actually, really, genuinely fun."},
    
    {"id":6, "name":"Clair Obscur: Expedition 33", "type":"RPG", "rating":10, 
        "description":"One of the most critically acclaimed rpgs of all time. It has gameplay like a mixture of Final Fantasy 10 and Paper Mario TTYD, and a story so grim, frustrating, and also confusing, but still amazing overall."},
]
// I just copied and pasted the descriptions from the index.html directly, since I'm assuming the end goal is to have the index.html
// load these instead of having everything hard-written into the site.


function findObjectViaId(idToFind){
    for(let game of items){
        if (game.id === idToFind){
            return game;
        }
    }
}

// This is the meaningful summary we were asked to do. It's intended to calculate the average score for all items in the array.
function calculateArrayScoreAverage(theArray){

    if (theArray.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < theArray.length; i++){
        sum += theArray[i].rating;
    }
    return sum / theArray.length;
}


function returnGameOfType(gameType){
    return items.filter(game => game.type === gameType);
}



const jsonTest = JSON.stringify(items);

const otherJsonTest = JSON.parse(jsonTest);

console.log(otherJsonTest[1].name);