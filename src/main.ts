/// <reference path="../typings/index.d.ts" />

// Subject verb COD
let subjects = [
{label: 'I', third: false},
{label: 'you', third: false},
{label: 'he', third: true},
{label: 'she', third: true},
{label: 'we', third: false},
{label: 'they', third: false},
{label: 'Meryl Streep', third: true},
{label: 'Donald Trump', third: true},
{label: 'David Bowie', third: true},
{label: 'Youtube', third: true},
{label: 'gamers', third: false},
{label: 'Rebecca Sugars', third: true},
];

let verbs = [
{default: '$0 walk $1 to', third: '$0 walks $1 to'},
{default: '$0 enter $1', third: '$0 enters $1'},
{default: '$0 come $1 from', third: '$0 comes $1 from'},
{default: '$0 display $1', third: '$0 displays $1'},
{default: '$0 impress $1', third: '$0 impress $1'},
{default: '$0 open $1', third: '$0 opens $1'},
{default: '$0 break $1', third: '$0 breaks $1'},
{default: '$0 hate $1', third: '$0 hates $1'},
{default: '$0 love $1', third: '$0 loves $1'},
{default: '$0 form $1 a cult toward', third: '$0 forms $1 a cult toward'},
{default: '$0 manage $1', third: '$0 manages $1'},
{default: '$0 improve $1', third: '$0 improves $1'},
{default: '$0 create $1', third: '$0 creates $1'},
{default: '$0 launch $1 to space', third: '$0 launches $1 to space'},
{default: '$0 throw $1', third: '$0 throws $1'},
{default: '$0 manipulate $1', third: '$0 manipulates $1'},
{default: '$0 draw $1', third: '$0 draws $1'},
];


let targets = [
'a $0 fish $1',
'$0 New York City $1',
'a $0 opera $1',
'a $0 fruit $1',
'somebody $1',
'a $0 book $1',
'a $0 movie $1',
'the $0 meaning of life $1',
'some $0 staircases $1',
'another $0 apple $1',
'the $0 path $1',
'$0 station B $1',
'the greatest $0 show ever $1',
'a $0 building supervizing software $1',
'$0 China',
'$0 Mike Oldfield',
'the $0 album $1',
'one or two $0 monkeys $1',
'everything else $1'];

let details = [
  'while the world ends',
  'and it rocks',
  'forever',
  'again',
  'except on sunday',
  'but it doesn\'t work',
  'and then the Fire Nation comes',
  'for everyone to enjoy',
  'at the Rockit',
  'tomorrow night',
  'and nobody knows why',
  'because it has been written',
  'and you don\'t',
  'at midnight',
  'in the land of the deads'
];

let slangs = [
  'lol',
  'dude',
  ', like, wow',
  'eh',
  'haha no it\'s even worse',
  'I\'m serious',
  ', so rad',
  '. I guess it\'s nice',
  'oh no',
  '-- Eurogamers'
];

let adverbs = [
  {label: 'quickly', position: 0},
  {label: 'with anxiety', position: 1},
  {label: 'obviously', position: 0},
  {label:  'nonchalantly', position: 0},
  {label:  'happily', position: 0},
  {label:  'on an extreme level', position: 1},
  {label:  'with force', position: 1},
  {label:  'positively', position: 0},
  {label:  'maybe', position: 0},
  {label:  'often', position: 0},
  {label:  'never', position: 0},
  {label:  'on my watch', position: 1},
  {label:  'horribly', position: 0},
  {label:  'tragically', position: 0},
  {label:  'carelessly', position: 0},
  {label:  'on purpose', position: 1},
  {label:  'randomly', position: 0}
];

let adjectives = [
  {label: 'happy', position: 0},
  {label: 'pretty', position: 0},
  {label: 'amazing', position: 0},
  {label: 'crazy', position: 0},
  {label: 'cursed', position: 0},
  {label: 'abandoned', position: 0},
  {label: 'signed', position: 0},
  {label: 'copyrighted', position: 0},
  {label: 'unforgivable', position: 0},
  {label: 'monstruous', position: 0},
  {label: 'hateful', position: 0},
  {label: 'dangerous', position: 0},
  {label: 'deadly', position: 0},
  {label: 'magenta', position: 0},
  {label: 'treacherous', position: 0},
  {label: 'that you love', position: 1},
  {label: 'made by witches', position: 1},
  {label: 'funded online', position: 1},
  {label: 'that will be obliterated', position: 1},
  {label: 'killed by a bear', position: 1},
  {label: 'from Australia', position: 1},
  {label: 'abstract', position: 0},
  {label: 'allegorical', position: 0},
  {label: 'obtained illegaly', position: 1},
  {label: 'the gods forgot', position: 1},
  {label: 'that is certainly not yellow', position: 1},
  {label: 'I don\'t know', position: 1},
  {label: 'great', position: 0},
  {label: 'terrible', position: 0},
  {label: 'other', position: 0},
  {label: 'forbidden', position: 0},
  {label: 'that changed it all', position: 1},
  {label: 'bloody', position: 0},
  {label: 'ruined', position: 0}
];

let conjunctions = [
  'Also',
  'As a result,',
  'Meanwhile,',
  'But',
  'Then',
  'However,',
  'In reality though,',
  'Nonetheless,',
  'Therefore',
  'Or perhaps',
  'Anyway,'
];

function pickOne(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function complements(expression, complement) {
  let completedExpression;

  if (complement) {
    let position = complement.position;
    let templatePartSearch = expression.match(new RegExp(' ?\\\$' + position + ' ?'));
    if (templatePartSearch) {
      let templatePart = templatePartSearch.pop();
      let filledTemplate = templatePart.replace('$' + position, complement.label);
      completedExpression = expression.replace(templatePart, filledTemplate);
    }
  }

  completedExpression = cleanTemplate(completedExpression ? completedExpression : expression);
  return completedExpression;
}

function cleanTemplate(expression) {
  return expression.replace(/ ?\$[0-9]/g, '')
    .replace(/(^ )|( $)/g, '')
    .replace(/  +/g, ' ')
    .replace(/((?:^| )a) ([aeiouy])/g, '$1n $2')
    .replace(/ ([,.])/g, '$1');
}

function makePhrase(doConjunction) {
  let conjunction = doConjunction ? pickOne(conjunctions) : '';

  let subject = pickOne(subjects);

  let verb = pickOne(verbs);
  let adverb = Math.random() > 0.4 ? pickOne(adverbs) : '';
  let conjugedVerb = subject.third ? verb.third : verb.default;
  conjugedVerb = complements(conjugedVerb, adverb);

  let target = pickOne(targets);
  let adjective = Math.random() > 0.4 ? pickOne(adjectives) : null;
  target = complements(target, adjective);

  let detail = Math.random() > 0.4 ? pickOne(details) : '';
  let slang = Math.random() < 0.2 ? pickOne(slangs) : '';

  let phrase = 
    (conjunction ? conjunction + ' ' : '') +
    subject.label + ' ' +
    conjugedVerb + ' ' +
    target +
    (detail ? ' ' + detail : '') +
    (slang ? ' ' + slang : '') +
    '.';

  phrase = cleanTemplate(phrase);
  phrase = phrase.replace(/^./, phrase.substring(0, 1).toUpperCase());
  return phrase;
}

let story = '';
let nbSentences = process.argv[2] && !isNaN(Number(process.argv[2])) && +process.argv[2] > 0 ? process.argv[2] : 1;
for (let i = 0 ; i < nbSentences ; i++) {
  story += (i > 0 ? ' ' : '') + makePhrase(i > 0);
}

console.info(story);
