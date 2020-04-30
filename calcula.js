var domBtnEnviar = document.getElementById("btnEnviar");

domBtnEnviar.addEventListener("click", function () {
    var catetoAdjacente = document.getElementById("catetoAdjacente").value;
    var catetoOposto = document.getElementById("catetoOposto").value;

    var validacaoOk = validaCampos(catetoOposto, catetoAdjacente);

    var obj = { cat_op: parseInt(catetoOposto), cat_adj: parseInt(catetoAdjacente) };    

    if (validacaoOk) {
        $.ajax({
            url: "https://atlas-231814.appspot.com/calcula",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(obj),
            success: function (result) {
                alert("O valor da hipotenusa é: " + result.hip);
            },
            error: function (result) {
                alert("Não foi possível concluir a requisição!");
            }

        });
    }
    else {
        alert("Informe valores válidos");
    }
});

function validaCampos(oposto, adjacente) {
    var ehValido = true;

    if (oposto == "" || oposto == null || oposto == undefined) {
        ehValido = false;
    }
    if (adjacente == "" || adjacente == null || adjacente == undefined) {
        ehValido = false;
    }

    return ehValido;
}