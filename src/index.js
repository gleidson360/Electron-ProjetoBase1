const { app, BrowserWindow } = require("electron")

function CriarJanela() {
    const janela = new BrowserWindow({
        height: 600,
        width: 800
    })
    janela.loadFile("./public/index.html")
  
}

app.whenReady()
    .then(function() {
        // Aplicação iniciada com sucesso!
        CriarJanela()
    })
    .catch(function(erro) {
        // Aplicação falhou ao ser iniciada!
        console.log(erro.message)
    })