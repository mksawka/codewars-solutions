/*
 *
 *  Greet incoming user in his native language.
 *
 */
function greet(language) {
  
  const greetings = {
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
    welsh: 'Croeso',
  };
  
  let userLanguage = language.toString().toLowerCase();
  if (!greetings.hasOwnProperty(userLanguage)) userLanguage = 'english';
  return greetings[userLanguage];
}