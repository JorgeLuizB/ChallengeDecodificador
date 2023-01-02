
let textoDigitado = document.querySelector('.caixa-txt-elemento');
textoDigitado.addEventListener('focus',() => {
        document.querySelector('.caixa-txt-elemento').value = '';
    }
)

function criptografaTexto(){
    textoDigitado = document.querySelector('.caixa-txt-elemento');
    textoDigitado = textoDigitado.value;
    textoDigitado = textoDigitado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    if(textoDigitado == ''){
        textoDigitado.focus();
    } else{
        let textoCriptografado = '';

        textoDigitado = textoDigitado.toLowerCase();
        for(let i = 0; i < textoDigitado.length; i++){
            switch(textoDigitado[i]){
                case 'a':
                    textoCriptografado += textoDigitado[i].replace('a','ai');
                    break;
                case 'e':
                    textoCriptografado += textoDigitado[i].replace('e','enter');
                    break;
                case 'i':
                    textoCriptografado += textoDigitado[i].replace('i','imes');
                    break;
                case 'o':
                    textoCriptografado += textoDigitado[i].replace('o','ober');
                    break;
                case 'u':
                    textoCriptografado += textoDigitado[i].replace('u','ufat');
                    break;
                default:
                    textoCriptografado += textoDigitado[i];    
            }   
        }
        exibeTextoCriptografado(textoCriptografado);
    }
}
function exibeTextoCriptografado(texto){
    campoTexto = document.getElementById('texto-resultado');
    let botaoCopia = document.querySelector('.copiar-btn');
    let imagemVazio = document.querySelector('.img-texto-vazio');
    let TextoInfo = document.querySelector('.texto-info');
    let TextoTitulo = document.querySelector('.texto-titulo');
    let contLateral = document.querySelector('.conteudo-lateral');
    let contLateralMsg = document.querySelector('.conteudo');

    campoTexto.style.display = 'block';
    botaoCopia.style.display = 'block';
    imagemVazio.style.display = 'none';
    TextoInfo.style.display = 'none';
    TextoTitulo.style.display = 'none';
    contLateral.style.display = 'block'
    contLateralMsg.style.height = '85%';
    campoTexto.innerText = texto;
    if(window.innerWidth <= 1200){
        campoTexto.style.height = campoTexto.scrollHeight + 'px';
    }
}
function descriptografaTexto(){
    textoDigitado = document.querySelector('.caixa-txt-elemento');
    if(textoDigitado.value == ''){
        textoDigitado.focus();
    } else{
        let textoDescriptografado = '';
        textoDigitado = (textoDigitado.value).toLowerCase();
        textoDescriptografado = textoDigitado;
        textoDescriptografado = textoDescriptografado.replaceAll('ai','a'); 
        textoDescriptografado = textoDescriptografado.replaceAll('enter','e'); 
        textoDescriptografado = textoDescriptografado.replaceAll('imes','i');
        textoDescriptografado = textoDescriptografado.replaceAll('ober','o'); 
        textoDescriptografado = textoDescriptografado.replaceAll('ufat','u'); 
        exibeTextoCriptografado(textoDescriptografado);
    }
}

function copiaTexto(){
    let textoCopiado = document.getElementById('texto-resultado');
    
    //Para copiar no celular (só funciona com textarea e input text):
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoCopiado.value);
}