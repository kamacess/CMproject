const adjectives = [ "academic", "accomplished", "acidic", "agitated", "ajar", "alert", "ambitious", "angelic", "arctic", "acceptable", "acrobatic", "altruistic", "adorable", "adventurous", "agile", "agreeble", "amzing", "ancient", "anguished", "awkward", "big", "blushing", "best", "beloved", "blue", "bewitched", "biodegradable", "busy", "buttery", "colorful", "charming", "cautious", "cold", "colossal", "clumsy", "calm", "confused", "creamy", "creepy", "curly", "cute", "cylindrical", "damaged", "daring", "dazzling", "dapper", "decent", "delicious", "delirious", "discrete", "dutiful", "dramatic", "elderly", "elliptical", "elegant", "embarrased", "emotional", "electric", "elastic", "edible", "esteemed", "euphoric", "extroverted", "faithful", "fabulous", "famous", "fearless", "flat", "fluffy", "foolish", "fluid", "flickering", "frugal", "funny", "gargantuan", "gaseous", "glossy", "grandiose", "graceful", "glittering", "glamorous", "gloomy", "grateful", "gullible", "growling", "handsome", "hairy", "harmless", "hungry", "honorable", "huge", "hilarious", "ideal", "imaginary", "immense", "impractical", "incomplete", "identical", "insidious", "international", "ironclad", "joyful", "jealous", "jovial", "juicy", "juvenile", "kind", "kindhearted", "lame", "large", "livid", "little", "legal", "long", "lovely", "lumpy", "lustrous", "medium", "massive", "magnificent", "modern", "milky", "modest", "mushy", "mysterious", "nervous", "nocturnal", "necessary", "normal", "obedient", "odd", "open", "original", "organic", "overcooked", "outrageous", "pessimistic", "pink", "perfect", "plain", "political", "posh", "powerful", "precious", "pristine", "profitable", "punctual", "puzzled", "radiant", "reckless", "raw", "rectangular", "royal", "rusty", "rural", "sad", "safe", "sane", "scrawny", "serene", "sardonic", "shallow", "severe", "sentimental", "smooth", "spherical", "spicy", "standard", "stylish", "supportive", "tall", "tepid", "thankful", "tender", "triangular", "turbulent", "unaware", "unpleasant", "unrealistic", "unfortunate", "useful", "vague", "visible", "velvety", "vicious", "virtuous", "warmhearted", "wholesome", "warm", "wet", "wicked", "wobbly", "wrathful", "young", "yellow", "zealous", "zesty" ] ;

const animals = ["alligator", "antelope", "armadillo", "baboon", "beaver", "bee", "bison", "camel", "capybara", "cat", "caterpillar", "cobra", "cockroach", "coyote", "cougar", "crab", "dinosaur", "dolphin", "dragonfly", "dragon", "eel", "emu", "elk", "falcon", "ferret", "gazelle", "goat", "gorilla", "hamster", "hawk", "hippopotamus", "hornet", "horse", "hummingbird", "hyena", "jaguar", "iguana", "jellyfish", "koala", "kiwi", "lemur", "macaque", "mongoose", "mosquito", "narwhal", "okapi", "ostrich", "otter", "pig", "pigeon", "pony", "unicorn", "porcupine", "pug", "rabbit", "rhinoceros", "seahorse", "sardine", "squirrel", "starfish", "shark", "stegosaurus", "swan", "viper", "whale", "weasel", "wolf", "wolverine", "yak", "zebra"] ;

const pattern = ["fas fa-hippo", "fas fa-splotch", "fas fa-hat-wizard", "fas fa-hashtag"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


// nom au hasard : un adjectif + un nom d'animal au hasard
function randomWord(wordsArray) {
    return wordsArray[getRandomInt(wordsArray.length) - 1]
}

function getRandomName(arr1, arr2) {
    let randomAdjective = randomWord(arr1);
    let randomAnimal = randomWord(arr2);
    
    return randomAdjective +' '+ randomAnimal
} 

let newName = getRandomName(adjectives, animals);

// avatar au hasard : une couleur au hasard + un font awesome au hasard dans sa couleur complémentaire

var backgroundColor; 
var awesomeColor;    

function getColors() {
    var b = getRandomInt(255); 
    var r = getRandomInt(255);
    var g = getRandomInt(255);
    
    backgroundColor = `rgb(${r}, ${g}, ${b})`;
    awesomeColor    = `rgb(${255-r}, ${255-g}, ${255-b})`

    return backgroundColor, awesomeColor
};



function getAvatar(){
    getRandomName(adjectives, animals)
    randomWord(pattern)
    getColors();
    return backgroundColor, awesomeColor, newPattern

} 
