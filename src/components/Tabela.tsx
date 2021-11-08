import Cliente from '../Core/cliente'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente : Cliente) => void
    clienteExcluído?: (cliente : Cliente) => void

}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluído

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            console.log(cliente.nome)
            return(
                <tr key={cliente.id}
                    className={`${i % 2 === 0? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} 
                        className={`
                            flex justify-center items-center 
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                
                {props.clienteSelecionado ? (    
                    <button onClick={() => props.clienteExcluído?.(cliente)}
                        className={`
                            flex justify-center items-center 
                            text-red-500 rounded-full p-2 m-1
                            hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return(
        <table className="w-full rounded-t-xl overflow-hidden  ">
            <thead className={`
                bg-gradient-to-r from-pink-400 to-purple-800
                text-green-100
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
            

        </table>
    )
}