function Tabela(){
    const usuarios = [
        { id: 1, nome: "gato", idade: 3 },
        { id: 2, nome: "calopsita", idade: 7 },
        { id: 3, nome: "cachorro", idade: 4 },
        { id: 4, nome: "panda", idade: 3 },
        { id: 5, nome: "pato", idade: 10 },
    ]

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => 
                    <tr>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.idade}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Tabela