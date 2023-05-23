document.addEventListener("DOMContentLoaded", function() {
    var texteElement = document.createElement("h1");
    texteElement.id = "texte";
    texteElement.textContent = "Qui sommes - nous ?";
    texteElement.classList.add("square");
    document.body.appendChild(texteElement);
  
    var mots = texteElement.textContent.split(" ");
    texteElement.textContent = ""; 
  
    var indexMot = 0;
  
    function afficherMotSuivant() {
      if (indexMot < mots.length) {
        texteElement.textContent += mots[indexMot] + " ";
        indexMot++;
        setTimeout(afficherMotSuivant, 1000); 
      } else {
        effectuerTranslation();
      }
    }
  
function effectuerTranslation() {
      texteElement.style.transform = "translateX(50px)";
      setTimeout(function() {
        texteElement.style.transform = "translateX(-50px)";
        setTimeout(function() {
          texteElement.style.transform = "translateX(0)";
          setTimeout(function() {
            reinitialiserTexte();
          }, 1000);
        }, 1000);
      }, 1000);
    }
    function reinitialiserTexte() {
      texteElement.textContent = "";
      indexMot = 0; 
      afficherMotSuivant();
    }
  
    afficherMotSuivant();
  });


  document.addEventListener("DOMContentLoaded", function() {
    var square = document.querySelector(".square");
  
    function changeColor() {
      var randomColor = getRandomColor();
      square.style.backgroundColor = randomColor;
    }
  
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function animateSquare() {
      changeColor();
      setTimeout(animateSquare, 1000);
    }
  
    animateSquare();
  });
  
  