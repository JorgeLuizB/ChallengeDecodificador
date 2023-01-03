let txtTyped = document.querySelector('.txt-box-element');
txtTyped.addEventListener('focus',() => {
        document.querySelector('.txt-box-element').value = '';
    }
)

function encryptText(){
    txtTyped = document.querySelector('.txt-box-element');
    if(txtTyped.value == ''){
        txtTyped.focus();
    } else{
        let txtEncrypted = '';
        txtTyped = txtTyped.value;
        txtTyped = txtTyped.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        txtTyped = txtTyped.toLowerCase();
        for(let i = 0; i < txtTyped.length; i++){
            switch(txtTyped[i]){
                case 'a':
                    txtEncrypted += txtTyped[i].replace('a','ai');
                    break;
                case 'e':
                    txtEncrypted += txtTyped[i].replace('e','enter');
                    break;
                case 'i':
                    txtEncrypted += txtTyped[i].replace('i','imes');
                    break;
                case 'o':
                    txtEncrypted += txtTyped[i].replace('o','ober');
                    break;
                case 'u':
                    txtEncrypted += txtTyped[i].replace('u','ufat');
                    break;
                default:
                    txtEncrypted += txtTyped[i];    
            }   
        }
        ShowEncryptedText(txtEncrypted);
    }
}

function decryptText(){
    txtTyped = document.querySelector('.txt-box-element');
    if(txtTyped.value == ''){
        txtTyped.focus();
    } else{
        let txtDecrypted = '';
        txtTyped = (txtTyped.value).toLowerCase();
        txtDecrypted = txtTyped;
        txtDecrypted = txtDecrypted.replaceAll('ai','a'); 
        txtDecrypted = txtDecrypted.replaceAll('enter','e'); 
        txtDecrypted = txtDecrypted.replaceAll('imes','i');
        txtDecrypted = txtDecrypted.replaceAll('ober','o'); 
        txtDecrypted = txtDecrypted.replaceAll('ufat','u'); 
        ShowEncryptedText(txtDecrypted);
    }
}

function copyText(){
    let txtCopied = document.getElementById('txt-result');
    txtCopied.select();
    txtCopied.setSelectionRange(0,99999);
    navigator.clipboard.writeText(txtCopied.value);
}

function ShowEncryptedText(txt){
    let fieldTextResult = document.getElementById('txt-result');
    let copyBtn = document.querySelector('.copy-btn');
    let imgInfo = document.querySelector('.img-txt-info');
    let txtInfo = document.querySelector('.txt-info');
    let txtTitle = document.querySelector('.txt-title');
    let asideElement = document.querySelector('.aside-content');
    let asideElementContent = document.querySelector('.content');
    fieldTextResult.style.display = 'block';
    copyBtn.style.display = 'block';
    imgInfo.style.display = 'none';
    txtInfo.style.display = 'none';
    txtTitle.style.display = 'none';
    asideElement.style.display = 'block'
    asideElementContent.style.height = '85%';
    fieldTextResult.innerText = txt;
    changeHeight();
}

function changeHeight(){
    let fieldTextResult = document.getElementById('txt-result');
    if(window.innerWidth <= 1000){
        fieldTextResult.style.height = fieldTextResult.scrollHeight + 'px';
    }
}