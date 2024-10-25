function ListaMap() {

    const nomes = [
        "Julia",
        "karen",
        "leandro",
        "Moana",
        "nicolas"
    ]

    const listItens = nomes.map(item =>
        <li>{item}</li>
    )

    return(
        <ul>
            {listItens}
        </ul>
    )
}

export default ListaMap