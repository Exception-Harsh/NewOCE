function downloadText0() {
  var textarea = document.getElementById("html-code");

  var textValue = textarea.value;

  var blob = new Blob([textValue], { type: "text/plain" });

  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "html_content.txt"; 
  a.click();

  window.URL.revokeObjectURL(url);
}

function downloadText1() {
  var textarea = document.getElementById("css-code");

  var textValue = textarea.value;

  var blob = new Blob([textValue], { type: "text/plain" });

  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "css_content.txt"; 
  a.click();

  window.URL.revokeObjectURL(url);
}

function downloadText2() {
  var textarea = document.getElementById("js-code");

  var textValue = textarea.value;

  var blob = new Blob([textValue], { type: "text/plain" });

  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "js_content.txt"; 
  a.click();

  window.URL.revokeObjectURL(url);
}

function reset0() {
  var textarea = document.getElementById("html-code");
  textarea.value = "";
}

function reset1() {
  var textarea = document.getElementById("css-code");
  textarea.value = "";
}

function reset2() {
  var textarea = document.getElementById("js-code");
  textarea.value = "";
}

function resetpage() {
  // Reload the current page
  window.location.reload();
}

function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"<style>";
  output.contentWindow.eval(jsCode);
}