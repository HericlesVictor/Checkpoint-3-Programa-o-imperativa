let curso = require('./index')
function Alunos(alunoP, faltaP, notas){
    this.nome = alunoP;
    this.quantidadeFaltas = faltaP;
    this.nota = notas;
    this.faltas = function (){
        this.quantidadeFaltas += 1
    }
    this.calcularMedia = function(){
        let soma = 0;
        for (let i = 0; i < this.nota.length; i++){
            soma += this.nota[i]
        }
       return soma/this.nota.length;
    }
}
let aluno1 = new Alunos("ricardo", 5, [7.8, 7.8, 7.8]);
let aluno2 = new Alunos("João", 8, [5, 5, 5]);
curso.curso.novoEstudante(aluno1);
curso.curso.novoEstudante(aluno2);

console.log(curso.curso.listaDaVerdade());

