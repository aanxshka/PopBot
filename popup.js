// content.js


// Function to check if the string "hello" is present on the page
function isHelloPresent() {
    const bodyText = document.body.innerText.toLowerCase(); // Convert to lowercase for case-insensitive search
    return bodyText.includes('hello');
  }
  
  // Function to perform actions based on the presence of "hello"
  function processHelloPresence() {
    if (isHelloPresent()) {
      // "hello" is present, perform actions
      console.log('The string "hello" is present on the page.');
      // You can add more actions or send a message to the background script here
    } else {
      // "hello" is not present
      console.log('The string "hello" is not present on the page.');
    }
  }
  
  // Run the detection when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', processHelloPresence);
  

//======
document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const status = document.getElementById('status');

  // Set initial status based on the toggle switch state
  updateStatus();

  // Add event listener for the toggle switch
  toggleSwitch.addEventListener('change', function () {
    updateStatus();
  });

  function updateStatus() {
    if (toggleSwitch.checked) {
      status.innerText = '/EXT/ is ON';
      // Perform actions when the toggle is ON
    } else {
      status.innerText = '/EXT/ is OFF';
      // Perform actions when the toggle is OFF
    }
  }
});



/*const globalWordsStore = new Map();
const setOfWords = ['Hello', 'World']
function populateStore(el){
  let n;
  let a=[];
  let walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
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

populateStore(document.getElementsByTagName('body')[0]);

for (const [key, value] of globalWordsStore.entries()) {
  // key --> word
  // value --> count of that partivular word
  console.log(key, value);
}*/
