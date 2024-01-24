console.log('Content script is running.');

var globalWordsStore = new Map();
const phrases = [ 
  ['well', 'case'], ['hot', 'dog'], ['light', 'year'], 
  ['drop', 'base'], ['let', 'that', 'sink', 'in'], ['flush', 'watery'], ['never','give','up']
]
//[['skull', 'dog'], ['gray', 'wolf', 'was'], ['light', 'year'], ['let', 'that', 'sink', 'in'],['hot','dog'], ['never', 'give', 'up'], ['well', 'case']];

function populateStore(el, setOfWords){
  let n;
  let a=[];
  let walk=document.creat
  eTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) {
    const arrayOfWords = n.data.trim().split(" ");
    arrayOfWords.forEach((ele) => {
      if(setOfWords.includes(ele)){
        if(globalWordsStore.has(ele)){
        globalWordsStore.set(ele, globalWordsStore.get(ele) + 1);
      } else {
        globalWordsStore.set(ele, 1);
      }
      }
    })
  }
}

var finalphrase = [];
for (p in phrases) {
  var counter = 0;
  globalWordsStore = new Map();

  populateStore(document.getElementsByTagName('body')[0], phrases[p]);

  for (const [key, value] of globalWordsStore.entries()) {
    console.log(key, value);

    if (value > 0) {
      counter++;
    }
  }
  if (counter == phrases[p].length) {
    finalphrase = phrases[p];
    break;
  }
}
console.log(finalphrase);

//=====

globalWordsStore = new Map();

function highlightWords(el, phrase) {
  let allWordsPresent = true;
  //for (const phrase of setOfWords) {
    for (const word of phrase) {
      let walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);

      while ((n = walk.nextNode())) {
        const arrayOfWords = n.data.trim().split(/\s+/);

        if (arrayOfWords.includes(word.toLowerCase())) {
          wordFound = true;

          const span = document.createElement('span');
          span.style.backgroundColor = 'yellow';
          span.style.color = 'black';
          span.style.padding = '2px';
          span.textContent = word;

          const textContent = n.nodeValue;
          const index = textContent.indexOf(word);
          const newNode = document.createTextNode(textContent.substring(0, index));
          const highlightedNode = span;
          const remainingNode = document.createTextNode(textContent.substring(index + word.length));

          n.parentNode.replaceChild(newNode, n);
          newNode.after(highlightedNode, remainingNode);
        }
      }
  }
}
highlightWords(document.getElementsByTagName('body')[0], finalphrase);

const wordDict = [
  [['gray', 'wolf'], 'gray.jpg' ],
  [['skull', 'dog'], 'dog-skull.jpg'],
  [['well', 'case'], 'well-case.jpg' ],
  [['hot', 'dog'], 'hotdog.jpg' ],
  [['light', 'year'], 'lightyear.jpg'],
  [['drop', 'base'], 'dropbase.jpg' ],
  [['let', 'that', 'sink', 'in'], 'sink.jpg'],
  [['flush', 'watery'], 'flush.jpg'],
  [['never','give','up'],'rick.jpg']
]

var img = ''

for (var p in wordDict) {
  //console.log(wordDict[p][0]);
  //console.log(wordDict[p][0].toString() === finalphrase.toString());
  if (wordDict[p][0].toString() === finalphrase.toString()) {
    img = wordDict[p][1].toString();
  }
}
console.log(img);

const imageUrl = chrome.runtime.getURL('images/'+img);


setTimeout(() => {
  // Append an image from the extension's folder
    const img = new Image();
    const extensionId = 'YOUR_EXTENSION_ID'; // Replace with your extension's ID
    //const imageUrl = chrome.runtime.getURL(`images/${matchedPhrase.image}`);
    //const imageUrl = chrome.runtime.getURL(`images/sink.jpg`);

    console.log("Image URL:", imageUrl); // Log the image URL to check if it's correct

    img.src = imageUrl;
    img.alt = 'Image for the Found Phrase';

    // Add styling to the image
    img.style.position = 'fixed';
    img.style.bottom = '20px';
    img.style.right = '20px';
    img.style.zIndex = '9999';

    // Append the image to the document body
    document.body.appendChild(img);

    img.onload = function() {
      console.log("Image loaded successfully!");
    };

    img.onerror = function() {
      console.error("Error loading the image.");
    };
}, 5000); // 5000 milliseconds (5 seconds)