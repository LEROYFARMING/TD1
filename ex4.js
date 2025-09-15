var montantHT = 20;
const tauxTVA = 20;

var montantTTC = montantHT * tauxTVA/100 + montantHT;

console.log("Le montant du produit en HT est de " + montantHT + "$, et le taux de TVA est de " + tauxTVA + "%, le montant en TTC est de " + montantTTC + "$");