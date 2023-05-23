function navig() {
    document.getElementsByClassName("navig")= naviguer;
     naviguer.addEventListener('beforeunload', function(event){
    var confirmationMessage = 'Êtes-vous sûr de vouloir naviguer cette page ?';

    (event || naviguer.event).returnValue = confirmationMessage;
    return confirmationMessage;
    })
}    

function bouton(){
          var modeEdition = false;
          var boutonModeEdition = document.getElementById("mode-edition");
           boutonModeEdition.addEventListener("click",function(){
           modeEdition = !modeEdition;
                          let admin = prompt("Veuillez saisir votre nom  :");
                          if (admin){
                            let password = prompt("Veuillez saisir votre mot de passe : ");
                                if(password && admin){
                                     // obtenir une couleur aléatoire
                                     var couleurAleatoire = '#' + Math.floor(Math.random() * 16777215).toString(16); 
                                      // modifier la couleur du bouton
                                     document.getElementById('mode-edition').style.backgroundColor = couleurAleatoire;
                                     document.getElementsByClassName("new_card")= nouveauMembre;
                                     nouveauMembre.innerHTML  = '<div class="card card1"><div class="border"><h2>Maher Jridi</h2>  <pre class="p">Enseignant chercheur, HDR ISEN Yncréa Ouest - Nantes maher.jridi@isen-ouest.ycnrea.f</pre><div class="icons"><a href="https://sites.google.com/website/jridimaher/" class="a"><i class="fa-solid fa-globe"></i></a><a href="https://www.linkedin.com/in/maher-jridia7861a3a/?originalSubdomain=fr" class="a"> <i class="fa-brands fa-linkedin-in"></i></a> <a href="https://scholar.google.fr/citations?hl=fr&user=N8Xv4GQAAAAJ" class="a"><i class="fa-solid fa-graduation-cap"></i> </a><a href="https://www.researchgate.net/profile/Maher_Jridi" class="a"><i class="fa-brands fa-researchgate"></i></a></div></div></div></div>'
                                }
                          }                                          
            });
            boutonModeEdition.addEventListener("dbclick",function(){
                      
            });
}  

function confirmNavigation(event){
    var confirmed = confirm("Êtes-vous sûr de vouloir naviguer vers l'onglet 'Membres' ?");
    if (!confirmed){
      event.preventDefault(); 
    }
}

function confirmNavigation(event) {
    var confirmed = confirm("Êtes-vous sûr de vouloir naviguer vers l'onglet 'Membres' ?");

    if (!confirmed) {
      event.preventDefault();
    }
}

  
  