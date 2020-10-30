//DOM(Document Object Model)
// console.log("hello  baba");
// function valuer(valeur){
//     console.log(valeur)
// }
// var touches = document.querySelectorAll(".touhes")
// touches.addEventlistener("click",()=>{console.log(this)});
const touches =  document.querySelectorAll('.button');
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keycode.toString();
    calculer(valeur)
})
document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur)

})
const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        switch(valeur){
            case '320':
                ecran.textContent = ''
                break;
            case '04':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const iindexkey = listeKeycode.indexOf(valeur);
                const touche = touches[iindexkey];
                ecran.textContent += touche.innerHTML;


        }
    }
}
