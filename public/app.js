//window.onload = function () {
window.onload = () => {
    buscarProdutos();
    setInterval(buscarProdutos, 3000);
};

function buscarProdutos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        //console.log(this.responseText);
        const produtos = JSON.parse(this.responseText);
        
        mostrarProdutos(produtos);
    }
    xhttp.open("GET", "http://localhost:3000/produtos");
    xhttp.send();

}


function mostrarProdutos(produtos) {
    let htmlProdutos = '';
    for(let produto of produtos) {
        htmlProdutos += `
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
    
    document.querySelector("#produtos").innerHTML = htmlProdutos;
}