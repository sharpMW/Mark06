var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
console.log(textInput);
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/yoda.json";
function getTranslationURL(text) { 
    return serverURL + "?" + "text" + text 
}
btnTranslate.addEventListener("click", clickHandler);

// function errorHandler(error) { 
//     console.log("Error occured", error);
//     alert("Something went wrong");
// }
function clickHandler() {
   var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
       var outputText = json.contents.translated;
       output.innertext = outputText;})
//    .catch(errorHandler)
};
