const Pokemon = function (choice){
    this.name = choice.name;
    this.health = choice.health;
    this.abilities = choice.abilities;
    this.image = choice.image;
};

const Abilities = function (choice) {
    this.attackOne = choice.attackOne;
    this.attackTwo = choice.attackTwo;
    this.attackThree = choice.attackThree;
    this.attackFour = choice.attackFour;
};

// Different abilities specified

const thunderbolt = ['Thunderbolt', 100];
const scratchAttack = ['Scratch Attack', 5];
const tackle = ['Tackle', 10];
const waterGun = ['Water Gun', 70];
const slam = ['Slam', 40];
const slash = ['Slash', 50];
const flare = ['Flare', 60];
const tailWhip = ['Tail Whip', 30];
const sleep = ['Sleep', 5];
const hug = ['Hug', 10];
const yawn = ['Yawn', 2];
const anger = ['Anger', 15];
const cry = ['Cry', 100];
const splash = ['Splash', 25];
const flounder = ['Flounder', 75];
const hypnosis = ['Hypnosis', 40];
const slap = ['Slap', 30];
const cower = ['Cower', 10];
const toxicCloud = ['Toxic Cloud', 60];
const smoke = ['Smoke', 5];
const smash = ['Smash', 50];
const psychic = ['Psychic', 10];
const boulder = ['Boulder', 60];

// Images of pokemon

const pikachuImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png">';
const blastoiseImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png">';
const charizardImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png">';
const snorlaxImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png">';
const jigglypuffImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png">';
const magicarpImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png">';
const mrmimeImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png">';
const koffingImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png">';
const mewtwoImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png">';
const onixImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png">';
const cuboneImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png">';
const flareonImage = '<img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png">';

//Specifying abilities of each pokemon
//Pikachu abilities
const pikachuAbilities = new Abilities({
    attackOne: thunderbolt,
    attackTwo: scratchAttack,
    attackThree: tackle,
    attackFour: slam
});

//Blastoise abilities
const blastoiseAbilities = new Abilities({
    attackOne: waterGun,
    attackTwo: slash,
    attackThree: splash,
    attackFour: slam
});

//Charizard abilities
const charizardAbilities = new Abilities({
    attackOne: flare,
    attackTwo: slash,
    attackThree: tackle,
    attackFour: slam
});

//Snorlax abilities
const snorlaxAbilities = new Abilities({
    attackOne: sleep,
    attackTwo: smash,
    attackThree: hug,
    attackFour: slam
});

//Jigglypuff abilities
const jigglypuffAbilities = new Abilities({
    attackOne: scratchAttack,
    attackTwo: sleep,
    attackThree: anger,
    attackFour: cry
});

//Magicarp abilities
const magicarpAbilities = new Abilities({
    attackOne: splash,
    attackTwo: scratchAttack,
    attackThree: tackle,
    attackFour: slam
});

//Mr. Mime abilities
const mrmimeAbilities = new Abilities({
    attackOne: hypnosis,
    attackTwo: slap,
    attackThree: cower,
    attackFour: tackle
});

//Koffing abilities
const koffingAbilities = new Abilities({
    attackOne: toxicCloud,
    attackTwo: smoke,
    attackThree: tackle,
    attackFour: smash
});

//MewTwo abilities
const mewtwoAbilities = new Abilities({
    attackOne: psychic,
    attackTwo: tailWhip,
    attackThree: hypnosis,
    attackFour: slam
});

//Onix abilities
const onixAbilities = new Abilities({
    attackOne: boulder,
    attackTwo: tailWhip,
    attackThree: tackle,
    attackFour: slam
});

//Cubone abilities
const cuboneAbilities = new Abilities({
    attackOne: scratchAttack,
    attackTwo: slash,
    attackThree: tackle,
    attackFour: slam
});

//Flareon abilities
const flareonAbilities = new Abilities({
    attackOne: flare,
    attackTwo: scratchAttack,
    attackThree: tackle,
    attackFour: anger
});


// Specifying attributes to each pokemon
//Pikachu attributes
const pikachu = new Pokemon({
    value: 1,
    name: 'Pikachu',
    health: 300,
    abilities: pikachuAbilities,
    image: pikachuImage
});

//Blastoise attributes
const blastoise = new Pokemon({
    value: 2,
    name: 'blastoise',
    health: 250,
    abilities: blastoiseAbilities,
    image: blastoiseImage
});

//Charizard attributes
const charizard = new Pokemon({
    value: 3,
    name: 'Charizard',
    health: 300,
    abilities: charizardAbilities,
    image: charizardImage
});

//Snorlax attributes
const snorlax = new Pokemon({
    value: 4,
    name: 'Snorlax',
    health: 225,
    abilities: snorlaxAbilities,
    image: snorlaxImage
});

//Jigglypuff attributes
const jigglypuff = new Pokemon({
    value: 5,
    name: 'Jigglypuff',
    health: 150,
    abilities: jigglypuffAbilities,
    image: jigglypuffImage
});

//Magicarp attributes
const magicarp = new Pokemon({
    value: 6,
    name: 'Magicarp',
    health: 100,
    abilities: magicarpAbilities,
    image: magicarpImage
});

//Mr. Mime attributes
const mrmime = new Pokemon({
    value: 7,
    name: 'Mr. Mime',
    health: 250,
    abilities: mrmimeAbilities,
    image: mrmimeImage
});

//Koffing attributes
const koffing = new Pokemon({
    value: 8,
    name: 'Koffing',
    health: 175,
    abilities: koffingAbilities,
    image: koffingImage
});

//MewTwo attributes
const mewtwo = new Pokemon({
    value: 9,
    name: 'Mewtwo',
    health: 500,
    abilities: mewtwoAbilities,
    image: mewtwoImage
});

//Onix attributes
const onix = new Pokemon({
    value: 10,
    name: 'Onix',
    health: 200,
    abilities: onixAbilities,
    image: onixImage
});

//Cubone attributes
const cubone = new Pokemon({
    value: 11,
    name: '50',
    health: 77,
    abilities: cuboneAbilities,
    image: cuboneImage
});

//Flareon attributes
const flareon = new Pokemon({
    value: 12,
    name: 'Flareon',
    health: 150,
    abilities: pikachuAbilities,
    image: flareonImage
});


//Array holding all pokemon specified above
const totalPokemon = [pikachu, charizard, blastoise, snorlax, jigglypuff, magicarp, mrmime, koffing, mewtwo, onix, cubone, flareon];

// randomize the pokemon the computer uses
randomizer = totalPokemon[Math.floor(Math.random() * totalPokemon.length)];

//Get the pokemon the user chose

function userPlayer () {
    playerOne = totalPokemon[0];
};
    // if ($("button").click(function(){
    //      var temporary = $(this).attr("id")
    // }) == "1") {
    //     playerOne = totalPokemon[0];
    // };
    // };

// Get a random pokemon for computer to use
function computerPokemon() {
    compPlayer = randomizer;
};


//Load in pokemon choice and populate attacks
function loadCompPokemon () {
    $(".computerPokemon").html(compPlayer.image);
    $(".pokemonSelector").addClass("showing");
    $(".attackOne").removeClass("notShowing");
    $(".attackTwo").removeClass("notShowing");
    $(".attackThree").removeClass("notShowing");
    $(".attackFour").removeClass("notShowing");
    $(".attackOne").html(compPlayer.abilities.attackOne[0]);
    $(".attackTwo").html(compPlayer.abilities.attackTwo[0]);
    $(".attackThree").html(compPlayer.abilities.attackThree[0]);
    $(".attackFour").html(compPlayer.abilities.attackFour[0]);
    
};
function loadPlayerPokemon () {
    $(".userPokemon").html(playerOne.image);
    $(".playerAttackOne").removeClass("notShowing");
    $(".playerAttackTwo").removeClass("notShowing");
    $(".playerAttackThree").removeClass("notShowing");
    $(".playerAttackFour").removeClass("notShowing");
    $(".playerAttackOne").html(playerOne.abilities.attackOne[0]);
    $(".playerAttackTwo").html(playerOne.abilities.attackTwo[0]);
    $(".playerAttackThree").html(playerOne.abilities.attackThree[0]);
    $(".playerAttackFour").html(playerOne.abilities.attackFour[0]);
};

function loadHealth () {
    $(".healthComp").html(compPlayer.name + " has " + compPlayer.health);
    $(".healthPlayer").html(playerOne.name + " has " + playerOne.health);
}

$(".pokemonSelector").on("click",function () {
//Run computer generated pokemon loaded in
computerPokemon();
//Load player selected pokemon
userPlayer();
//Show health of competitor and player
loadHealth();
loadPlayerPokemon();
loadCompPokemon();
});

//Subracting health based on attack one
function minusHealthOne () {
    compPlayer.health = compPlayer.health - playerOne.abilities.attackOne[1];
    loadHealth();
}

//Subracting health based on attack two
function minusHealthTwo () {
    compPlayer.health = compPlayer.health - playerOne.abilities.attackTwo[1];
    loadHealth();
}

//Subracting health based on attack three
function minusHealthThree () {
    compPlayer.health = compPlayer.health - playerOne.abilities.attackThree[1];
    loadHealth();
}

//Subracting health based on attack four
function minusHealthFour () {
    compPlayer.health = compPlayer.health - playerOne.abilities.attackFour[1];
    loadHealth();
}


//Calling each previous attack function to minus health once clicked on appropriate button
$(".playerAttackOne").on("click", function(){
    minusHealthOne();
});
    
$(".playerAttackTwo").on("click", function(){
    minusHealthTwo();
});

$(".playerAttackThree").on("click", function(){
    minusHealthThree();
});

$(".playerAttackFour").on("click", function(){
    minusHealthFour();
});



//Click of button one will display damage taken
$(".playerAttackOne").on("click", function(){
    $(".damageDisplay").html(playerOne.name + " attacks " + compPlayer.name + " with "+ playerOne.abilities.attackOne[0] + " for " + playerOne.abilities.attackOne[1] + " damage.");
});

//Click of button two will display damage taken
$(".playerAttackTwo").on("click", function(){
    $(".damageDisplay").html(playerOne.name + " attacks " + compPlayer.name + " with "+ playerOne.abilities.attackTwo[0] + " for " + playerOne.abilities.attackTwo[1] + " damage.");
});

//Click of button three will display damage taken
$(".playerAttackThree").on("click", function(){
    $(".damageDisplay").html(playerOne.name + " attacks " + compPlayer.name + " with "+ playerOne.abilities.attackThree[0] + " for " + playerOne.abilities.attackThree[1] + " damage.");
});

//Click of button four will display damage taken
$(".playerAttackFour").on("click", function(){
    $(".damageDisplay").html(playerOne.name + " attacks " + compPlayer.name + " with "+ playerOne.abilities.attackFour[0] + " for " + playerOne.abilities.attackFour[1] + " damage.");
});


//Computer attacks after player finished a move

$(".turnChooser").on("click", function(){
    var computerAttack = "";
    var computerAttackName ="";
    var abilityChoice = Math.floor(Math.random() * 10);
    if (abilityChoice >= 8){
        computerAttack = compPlayer.abilities.attackOne[1];
        computerAttackName = compPlayer.abilities.attackOne[0];
        playerOne.health = playerOne.health - computerAttack;
    }
    else if (abilityChoice > 5 && abilityChoice<=7) {
        computerAttack = compPlayer.abilities.attackTwo[1];
        computerAttackName = compPlayer.abilities.attackTwo[0];
        playerOne.health = playerOne.health - computerAttack;
    }
    else if (abilityChoice > 2 && abilityChoice <= 4) {
        computerAttack = compPlayer.abilities.attackThree[1];
        computerAttackName = compPlayer.abilities.attackThree[0];
        playerOne.health = playerOne.health - computerAttack;
    }
    else if (abilityChoice >= 0 && abilityChoice <= 1) {
        computerAttack = compPlayer.abilities.attackThree[1];
        computerAttackName = compPlayer.abilities.attackThree[0];
        playerOne.health = playerOne.health - computerAttack;
    }
    //logging out computer response to attack
    $(".logTwo").html(compPlayer.name + " doesn't like that. They fire back with " + computerAttackName + " which inflicts " + computerAttack + " damage.");
});

//Ending the game once one player has reached 0
$(".trigger").on("click", function(){
    if(playerOne.health <=0) {
        $(".log").html("You LOSE!");
    }
    else if (compPlayer.health <= 0) {
        $(".log").html("YOU WIN!");
    }
    else {
        return;
    }
});
