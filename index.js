module.exports = {
    curso: {
        nomeCurso : "Programação Imperativa",
        notaAprovacao : 7,
        faltasMaxima : 5,
        listaEstudantes : [],
        novoEstudante: function(estudante){
            this.listaEstudantes.push(estudante);
        },
        horaDaVerdade: function(aluno){
            let resultado = ""
            if (aluno.quantidadeFaltas < this.faltasMaxima && aluno.calcularMedia() >= this.notaAprovacao){
                resultado = "aprovado";
            } else if(aluno.quantidadeFaltas === this.faltasMaxima && aluno.calcularMedia() > (this.notaAprovacao * 1.1)){
                resultado = "aprovado"
            }else {
            resultado = "reprovado";
            }
            return resultado;
        },
        listaDaVerdade: function(){
            let verdade = []
            for(let i = 0; i < this.listaEstudantes.length; i++){
                verdade.push(this.horaDaVerdade(this.listaEstudantes[i]));
            }
            return verdade
        }
    }
}