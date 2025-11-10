const letreiro = document.getElementById('letreiro');
const velocidade = 2; // Controle da velocidade (pixels por frame; aumente para mais rápido, diminua para mais lento)
let posicao = 0; // Posição inicial
let direcao = 1; // 1 para direita, -1 para esquerda
function moverLetreiro() {
    const larguraTela = window.innerWidth;
    const larguraLetreiro = letreiro.offsetWidth;
    
    // Atualiza posição
    posicao += velocidade * direcao;
    
    // Verifica se chegou ao fim da tela (direita)
    if (posicao >= larguraTela - larguraLetreiro) {
        direcao = -1; // Muda direção para esquerda
    }
    
    // Verifica se voltou ao início (esquerda)
    if (posicao <= 0) {
        direcao = 1; // Muda direção para direita
    }
    
    // Aplica a posição
    letreiro.style.left = posicao + 'px';
    
    // Chama novamente para animação contínua
    requestAnimationFrame(moverLetreiro);
}
// Inicia a animação
moverLetreiro();
