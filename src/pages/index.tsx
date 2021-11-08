import Tabela from '../components/Tabela'
import Layout from '../components/Layout'
import Cliente from '../Core/cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {

  const  clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 234, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)  
  }

  function clienteExcluído(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)  
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
 
  return (
    <div className={`
      flex h-screen items-center justify-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo= "Cadastro Simples" >
        {visivel === 'tabela' ? (
           <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4"
                onClick={() => console.log('Click do botão cancelado')}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluído={clienteExcluído} 
            />
          </>
        ) : (
            
            <Formulario 
              cliente={clientes[0]} 
              cancelado={() => console.log('Click do botão cancelado')}                
            />
        )}
        
      </Layout>
    </div>
  )
}
