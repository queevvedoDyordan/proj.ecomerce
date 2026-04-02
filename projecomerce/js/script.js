let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    // Adiciona o objeto ao array do carrinho
    carrinho.push({ nome: nome, preco: preco });
    
    // Atualiza o contador visual
    const contador = document.getElementById('cart-count');
    if (contador) {
        contador.innerText = carrinho.length;
        
        // Feedback visual de pulso e cor
        contador.style.transform = "scale(1.5)";
        contador.classList.replace('bg-dark', 'bg-success');
        
        setTimeout(() => {
            contador.style.transform = "scale(1)";
            contador.classList.replace('bg-success', 'bg-dark');
        }, 300);
    }
    
    console.log("Adicionado: " + nome);
}

function enviarWhatsApp() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Escolha alguns produtos primeiro.");
        return;
    }

    const numeroWhatsApp = "555181913751"; 
    let mensagem = "Olá NG Company! Gostaria de encomendar os seguintes itens:\n\n";
    let total = 0;

    carrinho.forEach((item, index) => {
        mensagem += `*${index + 1}.* ${item.nome} - R$ ${item.preco}\n`;
        total += parseFloat(item.preco);
    });

    mensagem += `\n*Valor Total:* R$ ${total.toFixed(2)}`;
    mensagem += "\n\nComo posso proceder com o pagamento?";
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}