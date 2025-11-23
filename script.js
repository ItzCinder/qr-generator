    var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "Hello world!",
	width: 286,
	height: 286,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
    
});

function QRGen(){
    
}

function QRGenAnother (text){
    qrcode.makeCode(text);
}

function QRGenEvent(){
    const manejarClick = () => {
        QRGenAnother(qrInput.value);
};
    const qrButton = document.querySelector('.qr-input__button');
    qrButton.addEventListener('click', manejarClick);
    const qrInput = document.querySelector('.qr-input__text');
}

QRGenEvent();
