const prompt=require("prompt-sync")();

let taches=[];
let nextId = 1;
function afficherTaches(){
    if(taches.length===0){
        console.log("aucune taches trouvees")

    }
    console.log("listes des taches ")
    taches.forEach(tache=>{
        console.log(tache.id,tache.description,tache.isdone ?" termine": " attente")
    })

}
function ajouterTaches(){
    const description=prompt("entrer une description :");
    taches.push({id:nextId++,description,isdone:false})
}
function rechercherTache(){
    const a=prompt("entrer la description de cette tache :");
    const resultas =taches.filter(tache=>tache.description.includes(a));
    if (resultas.length===0){
        console.log("aucune tache trouvee")
    }
    else {
        resultas.forEach(resulta=>console.log (resulta.id,resulta.description,resulta.isdone?"termine":"attente"))
    }
}
function modifierTache(){
const id= Number(prompt("entrer l id de tache que vous souhaitez modifier :"));
const t =taches.find(tache=>tache.id===id);
if(!t){
    console.log("aucune tache trouve avec ce ID");
    return;
 }
 const nouv=prompt("entrer la nouvelle description :")
 t.description=nouv;
  console.log(" Tâche modifiée avec succès");
}
function supprimmerTache(){
    const id= Number(prompt("entrer l id de tache que vous souhaitez supprimmer :"));
    const t =taches.findIndex(tache=>tache.id===id);
if(t===-1){
    console.log("aucune tache trouve avec ce ID");
    return;
 }
 taches.splice(t,1) ;
console.log(" Tache supprimée avec succès");
}

function changerStatut() {
  const id = Number(prompt("entrer l id de tache que vous souhaitez modifier leur status :"));
  const tache = taches.find(t => t.id === id);
  
  if (!tache) {
    console.log(" Tâche introuvable.");
    return;
  }
  tache.isdone = !tache.isdone;
  console.log(" le Statut  a ete changé "  );
}
function tache_Termine_Attente(){
    d=prompt("si vous voulez voir les taches terminee (taper 1) sinon(taper  2)pour les taches en attente:");
    let tab=[]
    if(d==="1"){
        tab=taches.filter(t=>t.isdone)
    } else if (d==="2"){
         tab=taches.filter(t=>!t.isdone)
    }
    else{
        console.log("veuiller choisir 1 ou 2 !!")
    }
    if (tab.length === 0) {
    console.log("Aucune tâche trouvée.");
  } else {
    tab.forEach(t => console.log(t.id,t.description,t.isDone ? "Terminée" : "En attente"));
    return;
   
  }
}
function menu(){
    let choix;
do{
   console.log(" === To-Do List === ");
 console.log ("1. Afficher les tâches ");
 console.log ("2. Ajouter une tâche ")
 console.log ("3. Rechercher une tâche ")
 console.log("4. Modifier une tâche ")
 console.log ("5. Supprimer une tâche ")
 console.log ("6. Marquer une tâche comme terminée ")
 console.log ("7. Afficher tâches terminées / en attente ")
 console.log ("0. Quitter ");
 choix=prompt("choisir une option :");
 switch(choix){
    case "1":afficherTaches();break;
    case "2": ajouterTaches();break;
    case "3": rechercherTache();break;
    case "4":modifierTache();break;
    case "5":supprimmerTache();break;
    case "6":changerStatut();break;
    case "7":tache_Termine_Attente();break;
    case "0":console.log ("fin de programme ");break;
    default: console.log("choisissez un nombre valide")
 }


}
while(choix!=="0")

}
menu()
