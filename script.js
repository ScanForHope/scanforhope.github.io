TAB = "<span class='tab'>&emsp;&emsp;</span>";
TAG = ", <i><a id='copyright-text-link' href='/copyright'>The Message</a></i>";
function load() {
  console.info("There's not much going on in this website. There is a verses.js file that contains a dictionary of all the verses and references. This website uses the URL GET parameters to tell which verse is being queried");
  let reference = window.location.href.split("?verse=")[1];
  if (reference) {
  document.getElementById("verse").innerHTML = TAB+verses[reference]["verse"];
  document.getElementById("reference").innerHTML = verses[reference]["reference"]+TAG;
  document.getElementById("verse").style.opacity = 1.0;
  document.getElementById("reference").style.opacity = 1.0;
  // document.getElementById("loading").style.opacity = 0.0;
  }
  else {
    document.getElementById("verse").style.opacity = 1.0;
  }
}

