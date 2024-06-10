 const frm = document.querySelector("form");
 const resp = document.querySelector("pre");
 const carros = [];

 frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco});
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    inModelo.focus();

    frm.btListar.dispatchEvent(new Event("click"));
 })