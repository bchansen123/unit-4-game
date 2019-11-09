const Pokemon = function (choice){
    this.name = choice.name;
    this.health = choice.health;
    this.image = choice.image;
};

const Abilities = function (choice) {
    this.name = choice.name;
};

// Different abilities specified

const thunderbolt = ['Thunderbolt', 'attack', 50];
const scratchAttack = ['Scratch Attack', 'attack', 25];
const tackle = ['Tackle', 'attack', 30];
const waterGun = ['Water Gun', 'attack', 70];
const slam = ['Slam', 'attack', 40];
const slash = ['Slash', 'attack', 50];
const flare = ['Flare', 'attack', 60];
const tailWhip = ['Tail Whip', 'attack', 30];
const sleep = ['Sleep', 'attack', 5];
const hug = ['Hug', 'attack', 10];
const yawn = ['Yawn', 'attack', 2];
const anger = ['Anger', 'attack', 15];
const cry = ['Cry', 'attack', 100];
const splash = ['Splash', 'attack', 25];
const flounder = ['Flounder', 'attack', 75];
const hypnosis = ['Hypnosis', 'attack', 40];
const slap = ['Slap', 'attack', 30];
const cower = ['Cower', 'attack', 10];
const toxicCloud = ['Toxic Cloud', 'attack', 60];
const smoke = ['Smoke', 'attack', 5];
const smash = ['Smash', 'attack', 50];
const psychic = ['Psychic', 'attack', 10];
const boulder = ['Boulder', 'attack', 60];

// Images of pokemon

const pikachuImage = '';
const blastoiseImage = '';
const charizardImage = '';
const snorlaxImage = '';
const jigglypuffImage = '';
const magicarpImage = '';
const mrmimeImage = '';
const koffingImage = '';
const mewtwoImage = '';
const onixImage = '';
const cuboneImage = '';
const flareonImage = '';

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
    name: 'Pikachu',
    health: 300,
    abilities: pikachuAbilities,
    image: pikachuImage
});

//Blastoise attributes
const blastoise = new Pokemon({
    name: 'blastoise',
    health: 250,
    abilities: blastoiseAbilities,
    image: blastoiseImage
});

//Charizard attributes
const charizard = new Pokemon({
    name: 'Charizard',
    health: 300,
    abilities: charizardAbilities,
    image: charizardImage
});

//Snorlax attributes
const snorlax = new Pokemon({
    name: 'Snorlax',
    health: 225,
    abilities: snorlaxAbilities,
    image: snorlaxImage
});

//Jigglypuff attributes
const jigglypuff = new Pokemon({
    name: 'Jigglypuff',
    health: 150,
    abilities: jigglypuffAbilities,
    image: jigglypuffImage
});

//Magicarp attributes
const magicarp = new Pokemon({
    name: 'Magicarp',
    health: 100,
    abilities: magicarpAbilities,
    image: magicarpImage
});

//Mr. Mime attributes
const mrmime = new Pokemon({
    name: 'Mr. Mime',
    health: 250,
    abilities: mrmimeAbilities,
    image: mrmimeImage
});

//Koffing attributes
const koffing = new Pokemon({
    name: 'Koffing',
    health: 175,
    abilities: koffingAbilities,
    image: koffingImage
});

//MewTwo attributes
const mewtwo = new Pokemon({
    name: 'Mewtwo',
    health: 500,
    abilities: mewtwoAbilities,
    image: mewtwoImage
});

//Onix attributes
const onix = new Pokemon({
    name: 'Onix',
    health: 200,
    abilities: onixAbilities,
    image: onixImage
});

//Cubone attributes
const cubone = new Pokemon({
    name: '50',
    health: 77,
    abilities: cuboneAbilities,
    image: cuboneImage
});

//Flareon attributes
const flareon = new Pokemon({
    name: 'Flareon',
    health: 150,
    abilities: pikachuAbilities,
    image: flareonImage
});


//Array holding all pokemon specified above
const totalPokemon = [pikachu, charizard, blastoise, snorlax, jigglypuff, magicarp, mrmime, koffing, mewtwo, onix, cubone, flareon];