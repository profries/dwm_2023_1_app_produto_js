//window.onload = function () {
window.onload = () => {
    carregaProduto();
    setInterval(carregaProduto, 3000);
};


function carregaProduto() {

    let produto = {
        id: 1,
        nome: "Racao 1",
        preco: 100.00,
        imagem: "pedigree.jpg"
    }
    document.querySelector("#produtos").innerHTML = `
                <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
                    <div class="w3-card">
                        <div class="w3-container w3-center">
                            <img src="${produto.imagem}" style="width: 70%">
                            <h5>${produto.nome}</h5>
                            <h3 class="w3-blue">${'R$ '+produto.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</h3>
                        </div>
                    </div>
                </div>
    `;
}