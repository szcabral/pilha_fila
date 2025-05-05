// Classe Fila (FIFO)
class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.itens.length;
    }
  
    // Limpa a fila
    limpar() {
      this.itens = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log(' Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }

var alunos = new Fila()
alunos.enfileirar('aluno 1')
alunos.enfileirar('aluno 2')
alunos.enfileirar('aluno 3')
alunos.enfileirar('aluno 4')

alunos.desenfileirar()
alunos.desenfileirar()
alunos.desenfileirar()
console.log(alunos.frente())

alunos.imprimir()