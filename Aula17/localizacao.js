let paragrafo = document.getElementById('p1');
document.write(paragrafo);

let paragrafos = document.getElementsByTagName('p');
document.write(paragrafos);

let paragrafonome = document.getElementsByName('p2')[0];
document.write(paragrafonome);

let paragrafoclasse = document.getElementByClass('p1');
document.write(paragrafoclasse);

//Seletores
// querySelector()
// querySelectorAll()

let paragrafoseletor = document.querySelector('p.p1');
document.write("oi");
document.write(paragrafoseletor);