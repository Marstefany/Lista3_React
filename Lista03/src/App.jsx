import { Fragment } from "react"
import Booleana from "./components/Booleana"
import Card from "./components/Card"
import FilhoProps from "./components/Filhoprops"
import ListaMap from "./components/Listamap"
import PaiPros from "./components/Paiprops"
import Fragmento from "./components/Fragmento"
import Tabela from "./components/Tabela"
import Cor from "./components/Cor"


function App() {

  return (
    <>
   <ListaMap/>
    <PaiPros nome="Caio"/>
    <FilhoProps/>
    <Booleana isVisible={false}/>
    <Card/>
    <Fragmento/>
    <Tabela/>
    <Cor/>
    </>
  )
}

export default App
