import BarraNavegacao from "@/components/BarraNavegacao/index";
import style from './style.module.css'
import Image from "next/image"
import iconeservicos from 'public/iconeservicos.png'
import iconeconsultadolivro from 'public/iconeconsultadolivro.png'
import iconecalendariolivro from 'public/iconecalendariolivro.png'
import comofunciona from 'public/comofunciona.jpg'
import Banner from 'public/Banner.png'
import Botao from "@/components/Botao";
import Link from "next/link";


import Estudante from 'public/Estudante.jpg'
import Rodape from "@/components/Rodape/index";


export default function Inicial() {
  return (
    <div className={style.body}>
      <BarraNavegacao />

      {/* <div className={style.retanguloDaEstante} />*/}
      <div className="flex flex-col items-center w-full lg:flex-row">
        <div className="grid flex-grow rounded-box place-items-center">
          <div>
            <p className={style.frase1}>Plataforma de Gestão<br />Bibliotecária<br /></p>
            <p className={style.frase2}>O acesso à sabedoria está a apenas um login de
              distância!</p>
            <br />
            <Link href={'login'}>
              <Botao>Cadastre-se</Botao>
            </Link>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow rounded-box place-items-center">
          <Image src={Banner} width={360} height={180} alt="Banner" />
        </div>
      </div>

      <div className=" bg-black flex items-center justify-center mt-8" style={{ backgroundColor: '#8C5C3D' }}>
        <div className="max-w-screen-lg p-8 text-center text-white">
          <h1 className="text-4xl mb-3">Quem Somos</h1>
          <p className="text-lg">
            Surgimos com a necessidade de coletar informações em bibliotecas públicas, pensando em pequenas organizações que podem não ter software de gerenciamento e armazenamento de informações para acervo e empréstimo.
            <br />
            <br />O objetivo do software é controlar o acesso aos acervos, controlar usuários e produzir relatórios gerenciais.
            Tornando os processos mais rápidos e eficientes, beneficiando alunos, professores e instituições, melhorando assim o controle sobre a movimentação de livros.
          </p>
        </div>
      </div>

      <div className="sm:py-20">
        <div className="mx-auto max-w-8xl">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-10">Serviços disponíveis</h1>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex flex-col items-center gap-y-4">
              <div className="mx-auto flex items-center justify-center">
                <Image src={iconeservicos} width={60} height={180} alt="Icone de livros" />
              </div>
              <h3 className="text-xl font-semibold">Controle de Acervo</h3>
              <p className="text-gray-600">Descrição do serviço </p>
            </div>
            <div className="mx-auto flex flex-col items-center gap-y-4">
              <div className="mx-auto flex items-center justify-center">
                <Image src={iconeconsultadolivro} width={60} height={180} alt="Icone de livros" />
              </div>
              <h3 className="text-xl font-semibold">Consultas de obras</h3>
              <p className="text-gray-600">Descrição do serviço 2</p>
            </div>
            <div className="mx-auto flex flex-col items-center gap-y-4">
              <div className="mx-auto flex items-center justify-center">
                <Image src={iconecalendariolivro} width={60} height={180} alt="Icone de livros" />
              </div>
              <h3 className="text-xl font-semibold">Empréstimos</h3>
              <p className="text-gray-600">Descrição do serviço 3</p>
            </div>
          </dl>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center" style={{ backgroundColor: '#EDD6A0' }}> {/* Adicionando classes items-center e justify-center para centralizar horizontalmente */}
        <div className={`relative lg:w-12/12 overflow-hidden`}>
          <Image src={comofunciona} width={440} height={180} alt="Como funciona" />
        </div>
        <div className={`relative lg:w-5/12 overflow-hidden ${style.descricaocomofunciona} lg:m-10`} data-te-ripple-init>
          <div className={style.titulocomofunciona}>
            <p>Como Funciona</p>
          </div>
          <div className={style.frasecomofunciona}>
            <p>Este sistema permite que os usuários vejam catálogos das bibliotecas que se registrarem no nosso sistema. Nele o bibliotecário poderá criar o catálogo dos livros que consta na sua biblioteca, adicionando todas as informações dos mesmos para que os usuários possam pesquisar por um título e ver informações desse tema e da instituição.</p>
          </div>
        </div>
      </section>

      <section>
        <div className={style.sectionacervo}>
          <a className={style.linkacervo} href="/acervo">Explore o nosso acervo completo</a>
        </div>
      </section>

      <Rodape />
    </div>
  )
}