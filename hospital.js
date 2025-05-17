// Classe Fila (FIFO)
class Fila {
    constructor() {
      this.itens = [];
    }
    enfileirar(item) {
      this.itens.push(item);
      console.log(`Paciente'${item}' entrou na fila.`);
    }
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('Fila vazia, sem pacientes para atendimento');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`Paciente'${removido}' saiu da fila.`);
      return removido;
    }
    frente() {
      return this.itens[0];
    }
    estaVazia() {
      return this.itens.length === 0;
    }
    tamanho() {
      return this.itens.length;
    }
    limpar() {
      this.itens = [];
      console.log('Fila esvaziada.');
    }
    imprimir() {
      console.log('Fila atual de atendimento:', this.itens.join(' -> ') || 'vazia');
    }
  }

  //Classe Pilha (LIFO)
class Pilha {
    constructor() {
      this.itens = [];
    }
    empilhar(item) {
      this.itens.push(item);
      console.log(`Bisturi '${item}' empilhado.`);
    }
    desempilhar() {
      if (this.estaVazia()) {
        console.log('A pilha está vazia. Sem bisturis para serem utilizados.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`O bisturi '${removido}' foi utilizado pelo Dr. .`);
      return removido;
    }
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
    estaVazia() {
      return this.itens.length === 0;
    }
    tamanho() {
      return this.itens.length;
    }
    limpar() {
      this.itens = [];
      console.log('Pilha de bisturis esta esvaziada.');
    }
    imprimir() {
      console.log('Bisturis disponíveis:', this.itens.slice().reverse().join(' <- topo'));
    }
  }

  const filaPacientes = new Fila();
  const pilhaBisturis = new Pilha();

  const pacientes = ["Cleide", "Joyce", "Claudinei", "Felipe", "Mia"];
  pacientes.forEach(p => filaPacientes.enfileirar(p));
  filaPacientes.imprimir();

  const bisturis = ["C1", "C4A", "C4B", "C7"];
  bisturis.forEach(b => pilhaBisturis.empilhar(b));
  pilhaBisturis.imprimir();

  for (let i = 0; i < 5; i++){
    const pacientes = filaPacientes.desenfileirar();
    const bisturis = pilhaBisturis.desempilhar();
    if (pacientes && bisturis){
      console.log(`O cirurgião atendeu '${pacientes}, utilizando o bisturi '${bisturis}.`);
    }
  }

  console.log ('Após os procedimentos e as disponíbilidades o cenário se demonstrou:');
  filaPacientes.imprimir();
  pilhaBisturis.imprimir();

