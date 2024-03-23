// import { useState } from 'react'
import './App.css'
import styles from './app.module.css'
import { Button } from './components/Button/Button'

import FotoGabriel from './Images/GabrielNotBg.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.superior}>
        <div className={styles.imagem}>
          <img src={FotoGabriel} width={330} height={400} style={{zIndex:1, position:'relative', top:140}}/>
        </div>
        <div className={styles.apresentacao}>
            <h1 style={{lineHeight:0}}>Gabriel Oliveira</h1>
            <h4 style={{lineHeight:0}}>desenvolvedor full-stack</h4>
            <FaGithub className={styles.icones}/>
            <FaLinkedin className={styles.icones}/>
            <MdEmail className={styles.icones}/>
        </div>
      </div>
      <div className={styles.inferiror}>
        <div className={styles.conteudo}>
          <div className={styles.divBotao}>
            <Button nome=' Baixar curriculo' handleButton={() => console.log("Curriculo")}/>
          </div> 
          <div className={styles.texto}>
            <>
              Olá, meu nome é Gabriel, sou desenvolvedor full-stack e estudande de análise e desenvolvimento de sistemas,
              estou em busca de uma oportunidade para ingressar no mercado de tecnologia e demonstar meus conhecimentos
              atualmente estudo as seguintes tecnologias: React, React-native, Typescript e NodeJs ! 
            </>
            <Button nome='Ver projetos' handleButton={() => console.log("Projetos")}/>
          </div>
        </div>
        <div className={styles.rodape}/>
      </div>
    </div>
  )
} 

export default App


