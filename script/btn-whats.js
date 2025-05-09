document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões que têm ID começando com "bt-whats"
    const botoesWhatsApp = document.querySelectorAll('[id^="bt-whats"]');
    
    botoesWhatsApp.forEach(botao => {
        botao.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que o link padrão seja acionado
            
            // Número do WhatsApp (pode ser fixo ou definido por botão)
            const numero = "554599802118"; 
            
            // Captura a URL atual
            const urlOrigem = window.location.href;
            
            // Captura os parâmetros da URL atual
            const urlParams = new URLSearchParams(window.location.search);
            
            // Objeto para tracking
            const dadosTracking = {
                numero: numero,
                urlOrigem: urlOrigem,
                botaoId: this.id // Identifica qual botão foi clicado
            };
            
            // Adiciona parâmetros da URL se existirem
            const parametrosAdicionais = Object.fromEntries(urlParams.entries());
            if (Object.keys(parametrosAdicionais).length > 0) {
                dadosTracking.parametros = parametrosAdicionais;
            }
            
            // Monta mensagem para WhatsApp no formato desejado
            const mensagem = `Ola, gostaria de agendar uma consulta.\n\nVim atraves do site: ${urlOrigem};`
            
            // Monta URL do WhatsApp
            const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

            
            // Envio opcional para tracking (ajuste a URL conforme necessário)
            fetch('/seu-endpoint-de-tracking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosTracking)
            }).catch(error => {
                console.error('Erro no tracking:', error);
            });
            
            // Redireciona para o WhatsApp
            window.location.href = urlWhatsApp;
        });
    });
});