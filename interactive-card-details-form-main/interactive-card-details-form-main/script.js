const nameCard = document.getElementById('nome_card');
const numCard = document.getElementById('num_card');
const mesCard = document.getElementById('mes_card');
const anoCard = document.getElementById('ano_card');
const cvvCard = document.getElementById('cvv_card');
const btnEnviar = document.getElementById("btn_submit");
const erroNumCard = document.getElementById("erro_numCard");
const erroDate = document.getElementById("erro_dataAno");
const erroCvv = document.getElementById("erro_cvv");
const container = document.getElementById("div-container1");
const containerComfirm = document.getElementById("div-container3");
const btnContinue = document.getElementById("btn_continue");

function sendCard() {
    var valNome = nameCard.value;
    var valNumCard = numCard.value;
    var mes = mesCard.value;
    var ano = anoCard.value;
    var cvv = cvvCard.value;
    const regex = /^[a-zA-Z\s]+$/;
    const numRegex = /^[0-9]+$/; 
    
    if(valNome == "" || valNumCard == "" || mes == "" || ano == "" || cvv == "") {
        if ((valNumCard.length != 16 ) || (!numRegex.test(valNumCard))) {
           // window.alert("Número do cartão inválido");
            numCard.style = "border: 1px solid rgb(243, 105, 105)";
            erroNumCard.style = "display: block";
        } 
    
        if (valNome == ""){
            //window.alert("Nome inválido, nome não pode ser vazio");
            nameCard.style = "border: 1px solid rgb(243, 105, 105)";
            
        }
    
        if ((mes == "") || (!numRegex.test(mes))) {
           // window.alert("Mês inválido, mês não pode ser vazio");
            mesCard.style = "border: 1px solid rgb(243, 105, 105)";
            erroDate.style = "display: block";
        }
    
        if ((ano == "") || (!numRegex.test(ano)) ){
           // window.alert("Ano inválido, ano não pode ser vazio");
            anoCard.style = "border: 1px solid rgb(243, 105, 105)";
            erroDate.style = "display: block";
        }
    
        if ((cvv == "") || (!numRegex.test(cvv)) ){
           // window.alert("CVV inválido, CVV não pode ser vazio");
            cvvCard.style = "border: 1px solid rgb(243, 105, 105)";
            erroCvv.style = "display: block";
        }
        
    } else {
        container.style = "display: none";
        containerComfirm.style = "display: block";
    }


}
function reLoad() {
    location.reload();
}

btnEnviar.onclick = sendCard;
btnContinue.onclick = reLoad;

