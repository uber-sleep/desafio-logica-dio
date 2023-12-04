// Variáveis
let heroName;
let heroXP;

// Exemplo de valores
heroName = 'Maria';
heroXP = 6380;

// Estrutura de controle
if (heroXP < 1000) {
    console.log("O Herói de nome " + heroName + " está no nível de Ferro");
} else if (heroXP > 1001 && heroXP < 2000) {
    console.log("O Herói de nome " + heroName + " está no nível de Bronze");
} else if (heroXP > 2001 && heroXP < 5000) {
    console.log("O Herói de nome " + heroName + " está no nível de Prata");
} else if (heroXP > 5001 && heroXP < 7000) {
    console.log("O Herói de nome " + heroName + " está no nível de Ouro");
} else if (heroXP > 7001 && heroXP < 8000) {
    console.log("O Herói de nome " + heroName + " está no nível de Platina");
} else if (heroXP > 8001 && heroXP < 9000) {
    console.log("O Herói de nome " + heroName + " está no nível de Ouro");
} else if (heroXP > 9001 && heroXP < 10000) {
    console.log("O Herói de nome " + heroName + " está no nível de Prata");
} else if (heroXP >= 10001) {
    console.log("O Herói de nome " + heroName + " está no nível de Ouro");
} else {
    console.log("Nível do Herói de nome " + heroName + " não foi encontrado");
}
