// *** propriedades de get e set

const sequencia = {
    // não é privado, possui o (_) apenas para deixar claro a intenção de ser privado
    _valor: 1,

    // propriedades
    get valor() { return this._valor },
    set valor(valor) { 
        if (valor > this._valor)
            this._valor = valor
     }
}

console.log(sequencia.valor)
sequencia.valor = 300
console.log(sequencia.valor)