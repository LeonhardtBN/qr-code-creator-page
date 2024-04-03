function generateQR() {
    var inputValue = document.getElementById("input").value;

    if (!inputValue) {
        alert("Por favor, insira um texto para gerar o QR Code.");
        return;
    }

    var qrCodeElement = document.getElementById("qrcode");
    var downloadLink = document.getElementById("downloadLink");

    // Limpar o conteúdo do elemento QR Code antes de gerar um novo
    qrCodeElement.innerHTML = "";
    downloadLink.style.display = "none";

    // Cria um novo elemento de QR Code com a biblioteca QRious
    var qr = new QRious({
        value: inputValue,
        size: 200
    });

    // Cria uma nova imagem base64 do QR Code
    var qrImage = new Image();
    qrImage.src = qr.toDataURL('image/png');

    // Adiciona a imagem ao elemento QR Code
    qrCodeElement.appendChild(qrImage);

    // Ativa o botão de download e atribui a URL da imagem
    downloadLink.href = qrImage.src;
    downloadLink.style.display = "block";
}
