// In a real app, this would be fetched via Ajax request.
// But for the purposes of this demo, are hard-coded here.
var CAST_JSON = [
  {
    "first_name": "Amy",
    "last_name": "Poehler",
    "character_first_name": "Leslie",
    "character_last_name": "Knope"
  },
  {
    "first_name": "Nick",
    "last_name": "Offerman",
    "character_first_name": "Ron",
    "character_last_name": "Swanson"
  },
  {
    "first_name": "Aziz",
    "last_name": "Ansari",
    "character_first_name": "Tom",
    "character_last_name": "Haverford"
  },
  {
    "first_name": "Ann",
    "last_name": "Perkins",
    "character_first_name": "Rashida",
    "character_last_name": "Jones"
  },
  {
    "first_name": "April",
    "last_name": "Ludgate",
    "character_first_name": "Aubrey",
    "character_last_name": "Plaza"
  },
  {
    "first_name": "Chris",
    "last_name": "Pratt",
    "character_first_name": "Andy",
    "character_last_name": "Dwyer"
  },
  {
    "first_name": "Adam",
    "last_name": "Scott",
    "character_first_name": "Ben",
    "character_last_name": "Wyatt"
  },
  {
    "first_name": "Rob",
    "last_name": "Lowe",
    "character_first_name": "Chris",
    "character_last_name": "Traeger"
  },
  {
    "first_name": "Jim",
    "last_name": "O'Heir",
    "character_first_name": "Jerry",
    "character_last_name": "Gergich"
  },
  {
    "first_name": "Marietta",
    "last_name": "Sirleaf",
    "character_first_name": "Donna",
    "character_last_name": "Meagle"
  },
  {
    "first_name": "Paul",
    "last_name": "Schneider",
    "character_first_name": "Mark",
    "character_last_name": "Brendanawicz"
  },
  {
    "first_name": "Louis",
    "last_name": "Szekely",
    "character_first_name": "Dave",
    "character_last_name": "Sanderson"
  },
  {
    "first_name": "Blake",
    "last_name": "Lee",
    "character_first_name": "Derek",
    "character_last_name": ""
  },
  {
    "first_name": "Cooper",
    "last_name": "Thorton",
    "character_first_name": "Dr.",
    "character_last_name": "Harris"
  },
  {
    "first_name": "Ben",
    "last_name": "Schwartz",
    "character_first_name": "Jean-Ralphio",
    "character_last_name": "Saperstein"
  },
  {
    "first_name": "Justin",
    "last_name": "Theroux",
    "character_first_name": "Justin",
    "character_last_name": "Anderson"
  },
  {
    "first_name": "",
    "last_name": "",
    "character_first_name": "Li'l",
    "character_last_name": "Sebastian"
  },
  {
    "first_name": "Linda",
    "last_name": "Lonegan",
    "character_first_name": "Danielle",
    "character_last_name": "Bisutti"
  },
  {
    "first_name": "Lucy",
    "last_name": "",
    "character_first_name": "Natalie",
    "character_last_name": "Morales"
  },
  {
    "first_name": "John",
    "last_name": "Conlee",
    "character_first_name": "Larry",
    "character_last_name": "Ludgate"
  },
  {
    "first_name": "Terri",
    "last_name": "Hoyos",
    "character_first_name": "Rita",
    "character_last_name": "Ludgate"
  },
  {
    "first_name": "Marlene",
    "last_name": "Griggs-Knope",
    "character_first_name": "Pamela",
    "character_last_name": "Reed"
  },
  {
    "first_name": "Orin",
    "last_name": "",
    "character_first_name": "Eric",
    "character_last_name": "Isenhower"
  },
  {
    "first_name": "Patricia",
    "last_name": "Clarkson",
    "character_first_name": "Tammy",
    "character_last_name": "Swanson"
  },
  {
    "first_name": "Megan",
    "last_name": "Mullally",
    "character_first_name": "Tammy",
    "character_last_name": "Swanson"
  },
  {
    "first_name": "Paula",
    "last_name": "Pell",
    "character_first_name": "Tamara",
    "character_last_name": "Swanson"
  },
  {
    "first_name": "Jama",
    "last_name": "Williamson",
    "character_first_name": "Wendy",
    "character_last_name": "Haverford"
  },
  {
    "first_name": "Kevin",
    "last_name": "Symons",
    "character_first_name": "Bill",
    "character_last_name": "Dexhart"
  },
  {
    "first_name": "Andy",
    "last_name": "Samberg",
    "character_first_name": "Carl",
    "character_last_name": "Lorthner"
  },
  {
    "first_name": "Biff",
    "last_name": "Yeager",
    "character_first_name": "George",
    "character_last_name": "Williams"
  },
  {
    "first_name": "Yvans",
    "last_name": "Jourdain",
    "character_first_name": "Douglass",
    "character_last_name": "Howser"
  },
  {
    "first_name": "Eric",
    "last_name": "Pierpoint",
    "character_first_name": "Hugh",
    "character_last_name": "Trumple"
  },
  {
    "first_name": "Jon",
    "last_name": "Glaser",
    "character_first_name": "Jeremy",
    "character_last_name": "Jamm"
  },
  {
    "first_name": "",
    "last_name": "",
    "character_first_name": "Fielding",
    "character_last_name": "Milton"
  },
  {
    "first_name": "Kirk",
    "last_name": "Fox",
    "character_first_name": "Joe",
    "character_last_name": "Fantringham"
  },
  {
    "first_name": "Jonathan",
    "last_name": "Joss",
    "character_first_name": "Ken",
    "character_last_name": "Hotate"
  },
  {
    "first_name": "Kyle",
    "last_name": "",
    "character_first_name": "Andy",
    "character_last_name": "Forrest"
  },
  {
    "first_name": "",
    "last_name": "",
    "character_first_name": "Walter",
    "character_last_name": "Gunderson"
  },
  {
    "first_name": "Phil",
    "last_name": "Reeves",
    "character_first_name": "Paul",
    "character_last_name": "Iaresco"
  },
  {
    "first_name": "H. Jon",
    "last_name": "Benjamin",
    "character_first_name": "Scott",
    "character_last_name": "Braddock"
  },
  {
    "first_name": "Johnny",
    "last_name": "Sneed",
    "character_first_name": "William",
    "character_last_name": ""
  },
  {
    "first_name": "Antonia",
    "last_name": "Raftu",
    "character_first_name": "Elizabeth",
    "character_last_name": ""
  },
  {
    "first_name": "Helen",
    "last_name": "Slayton-Hughes",
    "character_first_name": "Ethel",
    "character_last_name": "Beavers"
  },
  {
    "first_name": "Matt",
    "last_name": "Besser",
    "character_first_name": "Crazy",
    "character_last_name": "Ira"
  },
  {
    "first_name": "Nick",
    "last_name": "Kroll",
    "character_first_name": "Howard",
    "character_last_name": "Tuttleman"
  },
  {
    "first_name": "Mo",
    "last_name": "Collins",
    "character_first_name": "Joan",
    "character_last_name": "Callamezzo"
  },
  {
    "first_name": "Jay",
    "last_name": "Jackson",
    "character_first_name": "Perd",
    "character_last_name": "Hapley"
  },
  {
    "first_name": "Alison",
    "last_name": "Becker",
    "character_first_name": "Shauna",
    "character_last_name": "Malwae-Tweep"
  },
  {
    "first_name": "",
    "last_name": "",
    "character_first_name": "Kim",
    "character_last_name": "Terlando"
  },
  {
    "first_name": "Mara",
    "last_name": "Marini",
    "character_first_name": "Brandi",
    "character_last_name": "Maxxxx"
  },
  {
    "first_name": "Will",
    "last_name": "Arnett",
    "character_first_name": "Chris",
    "character_last_name": ""
  },
  {
    "first_name": "Susan",
    "last_name": "Yeagley",
    "character_first_name": "Jessica",
    "character_last_name": "Wicks"
  },
  {
    "first_name": "Will",
    "last_name": "Forte",
    "character_first_name": "Kelly",
    "character_last_name": "Larson"
  },
  {
    "first_name": "Eric",
    "last_name": "Edelstein",
    "character_first_name": "Lawrence",
    "character_last_name": ""
  },








  {
    "first_name": "Darlene",
    "last_name": "Hunt",
    "character_first_name": "Marcia",
    "character_last_name": "Langman"
  },
  {
    "first_name": "Gary",
    "last_name": "Weeks",
    "character_first_name": "Nick",
    "character_last_name": "Newport"
  },
  {
    "first_name": "Christopher",
    "last_name": "Murray",
    "character_first_name": "Nick",
    "character_last_name": "Newport"
  },
  {
    "first_name": "Harley",
    "last_name": "Graham",
    "character_first_name": "Dakota",
    "character_last_name": "Newport"
  },
  {
    "first_name": "Ryan",
    "last_name": "Hartwig",
    "character_first_name": "Denver",
    "character_last_name": "Newport"
  },
  {
    "first_name": "Lucy",
    "last_name": "Lawless",
    "character_first_name": "Diane",
    "character_last_name": "Lewis"
  },
  {
    "first_name": "Detlef",
    "last_name": "Schrempf",
    "character_first_name": "Detlef",
    "character_last_name": "Schrempf"
  },
  {
    "first_name": "Carlo",
    "last_name": "Mendez",
    "character_first_name": "Eduardo",
    "character_last_name": ""
  },
  {
    "first_name": "John",
    "last_name": "Larroquette",
    "character_first_name": "Frank",
    "character_last_name": "Beckerson"
  },
  {
    "first_name": "Parker",
    "last_name": "Posey",
    "character_first_name": "Lindsay",
    "character_last_name": "Carlisle Shay"
  },
  {
    "first_name": "Fred",
    "last_name": "Armisen",
    "character_first_name": "Raul Alejandro Bastilla",
    "character_last_name": "Pedro de Veloso de Morana"
  },
  {
    "first_name": "Kathryn",
    "last_name": "Hahn",
    "character_first_name": "Jennifer",
    "character_last_name": "Barkley"
  },
  {
    "first_name": "Sean",
    "last_name": "Hayes",
    "character_first_name": "Buddy",
    "character_last_name": "Wood"
  }
];