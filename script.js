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

 frm.btListar.addEventListener("click", () =>{
    if(carros.length === 0){
        alert("Não há carros na lista");
        return;
    }

    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
 })