// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
//Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The task

// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - 
//if you have it in your database. It should default to English if the language is not in the database, 
//or in the event of an invalid input.

// The database
var db = {
    english: 'Welcome',        czech: 'Vitejte',           danish: 'Velkomst', 
    
    dutch: 'Welkom',           estonian: 'Tere tulemast',  finnish: 'Tervetuloa',
    
    flemish: 'Welgekomen',     french: 'Bienvenue',        german: 'Willkommen',
    
    irish: 'Failte',           italian: 'Benvenuto',       latvian: 'Gaidits',
    
    lithuanian: 'Laukiamas',   polish: 'Witamy',           spanish: 'Bienvenido',
    
    swedish: 'Valkommen',      welsh: 'Croeso'
  };
  
  
  function greet(language) {
  
    return db[language] ? db[language] : 'Welcome';
    
  }

  



//Other examples
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function greet(language) {

    var lan = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'   
    };


    if (language == 'english') {
        return lan.english;
    } else if (language == 'czech') {
        return lan.czech;
    } else if (language == 'danish') {
        return lan.danish;
    } else if (language == 'dutch') {
        return lan.dutch;
    } else if (language == 'estonian') {
        return lan.estonian;
    } else if (language == 'finnish') {
        return lan.finnish;
    } else if (language == 'flemish') {
        return lan.flemish;
    } else if (language == 'french') {
        return lan.french;
    } else if (language == 'german') {
        return lan.german;
    } else if (language == 'irish') {
        return lan.irish;
    } else if (language == 'italian') {
        return lan.italian;
    } else if (language == 'latvian') {
        return lan.latvian;
    } else if (language == 'lithuanian') {
        return lan.lithuanian;
    } else if (language == 'polish') {
        return lan.polish;
    } else if (language == 'spanish') {
        return lan.spanish;
    } else if (language == 'swedish') {
        return lan.swedish;
    } else if (language == 'welsh') {
        return lan.welsh;
    } else {
        return 'Welcome';
    }
};

//========================================================================================================

function greet(language) {
  var GreetingsDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }, 
  defaultLanguage = 'english';
  return GreetingsDB[language] || GreetingsDB[defaultLanguage];
}
//========================================================================================================
let languages = {
english: 'Welcome',       czech: 'Vitejte',
danish: 'Velkomst',       dutch: 'Welkom',
estonian: 'Tere tulemast',   finnish: 'Tervetuloa',
flemish: 'Welgekomen',    french: 'Bienvenue',
german: 'Willkommen',     irish: 'Failte',
italian: 'Benvenuto',     latvian: 'Gaidits',
lithuanian: 'Laukiamas',   polish: 'Witamy',
spanish: 'Bienvenido',     swedish: 'Valkommen',
welsh: 'Croeso'
}

const greet = L => languages[L] || languages['english']
//========================================================================================================
let greet_database = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}
function greet(language) {
  if(greet_database.hasOwnProperty(language)){
    return greet_database[language];
  }else{
    return greet_database["english"];
  }
}
//=======================================================================================================
function greet(language) {
  var db = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso"
  };
  if (db[language] === undefined) {
    language = "english";
  }
  return db[language];
}      
//=======================================================================================================
function greet(language) {
var n = '';
  switch(language){
      case 'english':
      n = 'Welcome';
      break;
      case 'czech':
      n = 'Vitejte'
      break;
      case 'danish':
      n = 'Velkomst';
      break;
      case 'dutch':
      n = 'Welkom';
      break;
      case 'estonian':
      n = 'Tere tulemast';
      break;
      case 'finnish':
      n = 'Tervetuloa';
      break;
      case 'flemish':
      n = 'Welgekomen';
      break;
      case 'french':
      n = 'Bienvenue';
      break;
      case 'german':
      n = 'Willkommen';
      break;
      case 'irish':
      n = 'Failte';
      break;
      case 'italian':
      n = 'Benvenuto';
      break;
      case 'latvian':
      n = 'Gaidits';
      break;
      case 'lithuanian':
      n = 'Laukiamas';
      break;
      case 'polish':
      n = 'Witamy';
      break;
      case 'spanish':
      n = 'Bienvenido';
      break;
      case 'swedish':
      n = 'Valkommen';
      break;
      case 'welsh':
      n = 'Croeso';
      break;
      default: n = 'Welcome';
      break;
  }
  return n;
}
  
