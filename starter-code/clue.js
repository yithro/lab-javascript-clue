var characters = [
  {
    firstname: 'Jacob',
    lastname: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur',
  },
  {
    firstname: 'Doctor',
    lastname: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist',
  },
  {
    firstname: 'Victor',
    lastname: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer',
  },
  {
    firstname: 'Kasandra',
    lastname: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor',
  },
  {
    firstname: 'Eleanor',
    lastname: 'Peacock',
    color: 'blue',
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité',
  },
  {
    firstname: 'Jack',
    lastname: 'Mustard',
    color: 'yellow',
    description:
      'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player',
  },
];
var weapons = [
  {
    type: 'Rope',
    weight: 10,
  },
  {
    type: 'Knife',
    weight: 8,
  },
  {
    type: 'Candlestick',
    weight: 2,
  },
  {
    type: 'Dumbbell',
    weight: 30,
  },
  {
    type: 'Poison',
    weight: 2,
  },
  {
    type: 'Axe',
    weight: 15,
  },
  {
    type: 'Bat',
    weight: 13,
  },
  {
    type: 'Trophy',
    weight: 25,
  },
  {
    type: 'Pistol',
    weight: 20,
  },
];
var rooms = [
  {name: 'Dinning Room'},
  {name:'Conservatory'},
  {name:'Kitchen'},
  {name:'Study'},
  {name:'Library'},
  {name:'Billiard Room'},
  {name:'Lounge'},
  {name:'Ballroom'},
  {name:'Hall'},
  {name:'Spa'},
  {name:'Living Room'},
  {name:'Observatory'},
  {name:'Theater'},
  {name:'Guest House'},
  {name:'Patio'},
];

//console.log(rooms)
//console.log(weapons)
//console.log(characters)

function random_selector(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}
//console.log(random_selector(weapons))




function pick_mistery() {
  var mystery = {};
  mystery.killer = random_selector(characters);
  mystery.location = random_selector(rooms);
  mystery.weapon = random_selector(weapons);
  return mystery;
}

//console.log(pick_mistery())

var virtualEnvelope = pick_mistery();

//console.log(virtualEnvelope)

function reveal_mistery(mistery) {
  console.log(
    mistery.killer.firstname +
      ' ' +
      mistery.killer.lastname +
      ' killed in the ' +
      mistery.location.name +
      ' with the ' +
      mistery.weapon.type
  );
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
