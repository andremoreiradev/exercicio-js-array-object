const digitaCollege = {
    cnpj: '45.277.892/0001-00',
    sedes: [
        {nome: 'Sul', 
         endereco: 'WSTC',
         Ceo: 'Daniel',
         professores: ['Carlos', 'Alessandro', 'Abrãao'], 
         alunos: ['André', 'Eduardo', 'Maria', 'José'], 
        curso: ['FullStack', 'Date Analytcs', 'Designer'], 
        funcionarios: ['José', 'Maria', 'Antonio']
                 
        },

        {nome: 'Aldeota',
         endereco: 'Santos Dumont',
        CEO:'Daniel', 
        professores: ['Carlos', 'Alessandro', 'Abrãao'],
       alunos: ['André', 'Eduardo', 'Maria', 'José'], 
       funcionarios:['José', 'Maria', 'Antonio'],
       curso: 'FullStack'}
    ]
}

//Percorrer a lista de alunos da sede Sul
//digitaCollege.sedes[0].alunos + enter
//['André', 'Eduardo', 'Maria', 'José']

// Percorrer a lista de professores da sede Aldeota
//digitaCollege.sedes[1].professores
//['Carlos', 'Alessandro', 'Abrãao']
