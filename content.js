var bodyElements = [...document.body.getElementsByTagName('*')];
// Array of all elements inside the body tag

// Function that loops through the new bodyElements array
function findAndReplace(){
  bodyElements.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

// Function to replace the text within the findAndReplace function
function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/free/gi, 'taxpayer-funded');
  value = value.replace(/Free/gi, 'Taxpayer-funded');
  value = value.replace(/tuition free/gi, 'taxpayer-funded');
  value = value.replace(/tuition-free/gi, 'taxpayer-funded');
  value = value.replace(/Bernie/gi, 'Our Glorious Comrade');
  value = value.replace(/socialism/gi, 'wealth confiscation');
  value = value.replace(/Socialism/gi, 'Wealth confiscation');
  value = value.replace(/Green New Deal/gi, 'Economic Reversal Deal');
  value = value.replace(/Medicare for All/gi, 'Glorious Healthcare for All');
  value = value.replace(/Medicare for All/gi, 'Glorious Healthcare for All');
  node.nodeValue = value;
}

window.onload = findAndReplace();