// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
// Resposta: OK

const tipoDia = (dia) => {
    switch (dia) {
        case 1: case 7:
            return 'Fim de semana'
        case 2: case 3: case 4: case 5: case 6:
            return 'Útil'
        default:
            return 'Inválido'
    }
}

for (let i = 0; i <= 7; i++)
    console.log(i, tipoDia(i))