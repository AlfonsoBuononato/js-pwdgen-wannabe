/* 
1.CHIEDERE ALL UTENTE IL SUO NOME
2. POI CHIEDI IL SUO COGNOME,
3.POI CHIEDI IL SUO COLORE PREFERITO
4. SCRIVI SULLA PAGINA ;NOMECOGNOMECOLOREPREFERITO21
*/

var nome = prompt("come ti chiami?");

var cognome = prompt("qual'è il tuo cognome?");

var colorePreferito = prompt("qual'è il tuo colore preferito?");

var password = document.getElementById("password").innerHTML = (nome + cognome + colorePreferito + 21);