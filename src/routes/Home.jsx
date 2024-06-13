import { Link } from "react-router-dom"
import LogoWeb from "../images/gala-cracks-web.jpg"
import LogoMobile from "../images/gala-cracks-mobile.jpg"

import Player1 from "../images/players/FICHA_1.jpg"
import Player2 from "../images/players/FICHA_2.jpg"
import Player3 from "../images/players/FICHA_3.jpg"
import Player4 from "../images/players/FICHA_4.jpg"
import Player5 from "../images/players/FICHA_5.jpg"
import Player6 from "../images/players/FICHA_6.jpg"
import Player7 from "../images/players/FICHA_7.jpg"
import Player8 from "../images/players/FICHA_8.jpg"
import Player9 from "../images/players/FICHA_9.jpg"
import Player10 from "../images/players/FICHA_10.jpg"
import Player11 from "../images/players/FICHA_11.jpg"
import Player12 from "../images/players/FICHA_12.jpg"
import Player13 from "../images/players/FICHA_13.jpg"

import ClubCC from "../images/clubes/CC.png"
import ClubCOQ from "../images/clubes/COQ.png"
import ClubHUA from "../images/clubes/HUA.png"
import ClubIQQ from "../images/clubes/IQQ.png"
import ClubUC from "../images/clubes/UC.png"
import ClubUCH from "../images/clubes/UCH.png"

const Home = () => {

  const players = [
    {
      id : 1,
      image : Player1,
      tile : 'MEJOR DIRECTOR TÉCNICO',
      name : 'GUSTAVO ÁLVAREZ',
      team : ClubUCH
    },
    {
      id : 2,
      image : Player2,
      tile : 'MEJOR JUGADOR JOVEN',
      name : 'MAXIMILIANO GUTIÉRREZ',
      team : ClubHUA
    },
    {
      id : 3,
      image : Player3,
      tile : 'MEJOR ARQUERO',
      name : 'BRYAN CORTÉS',
      team : ClubCC
    },
    {
      id : 4,
      image : Player4,
      tile : 'MEJOR LATERAL DERECHO',
      name : 'FELIPE LOYOLA',
      team : ClubHUA
    },
    {
      id : 5,
      image : Player5,
      tile : 'MEJOR CENTRAL DERECHO',
      name : 'ALAN SALDIVIA',
      team : ClubCC
    },
    {
      id : 6,
      image : Player6,
      tile : 'MEJOR CENTRAL IZQUIERDO',
      name : 'MAXIMILIANO FALCÓN',
      team : ClubCC
    },
    {
      id : 7,
      image : Player7,
      tile : 'MEJOR LATERAL IZQUIERDO',
      name : 'MARCELO MORALES',
      team : ClubUCH
    },
    {
      id : 8,
      image : Player8,
      tile : 'MEJOR VOLANTE DE CONTENCIÓN ',
      name : 'MARCELO DÍAZ',
      team : ClubUCH
    },
    {
      id : 9,
      image : Player9,
      tile : 'MEJOR VOLANTE MIXTO',
      name : 'ARTURO VIDAL',
      team : ClubCC
    },
    {
      id : 10,
      image : Player10,
      tile : 'MEJOR VOLANTE OFENSIVO',
      name : 'LUCIANO CABRAL',
      team : ClubCOQ
    },
    {
      id : 11,
      image : Player11,
      tile : 'MEJOR EXTREMO DERECHO',
      name : 'CRISTIÁN ZAVALA',
      team : ClubCC
    },
    {
      id : 12,
      image : Player12,
      tile : 'MEJOR DELANTERO CENTRO',
      name : 'FERNANDO ZAMPEDRI',
      team : ClubUC
    },
    {
      id : 13,
      image : Player13,
      tile : 'MEJOR EXTREMO IZQUIERDO',
      name : 'EDSON PUSH',
      team : ClubIQQ
    }
  ]

  return (
    <div className="h-screen w-full grid 
    bg-gradient-to-b from-slate-900 to-slate-800">

      <div className="mx-auto w-full md:w-[1080px]">

        <a target="_blank" href="https://www.youtube.com/live/TwXkCrqQn3U">
          <div className="w-auto mx-auto overflow-hidden
          mb-5
          md:mt-8 md:mb-8 md:rounded-2xl 
          shadow-2xl shadow-slate-900/60">
            <img className="hidden md:block" src={LogoWeb} />
            <img className="block w-full md:hidden" src={LogoMobile} />
          </div>
        </a>

        <div className="font-ubuntu text-center text-lg md:text-2xl pb-3 md:pb-5 text-white">
          GANADORES PRIMERA RUEDA 2024
        </div>

        <div className="mx-6 grid gap-6 grid-cols-1 mb-8
        md:mx-0 md:gap-8 md:grid-cols-3 md:mb-8">
        {
          players.map((player) => (
            <div key={player.id} className="bg-slate-600 rounded-2xl overflow-hidden
            shadow-2xl shadow-slate-900/60">
              <div className="relative">
                <img src={player.image} />
                <div className="absolute w-full bottom-0 flex justify-center">
                  <img className="h-[44px]" src={player.team} />
                </div>
              </div>
              <div className="font-BebasNeue pt-4 pb-2 bg-black text-center text-white font-medium text-3xl">
                {player.name}
              </div>
              <div className="font-BebasNeue text-center bg-gold
              pt-[8px] pb-[5px] text-2xl font-extralight">
                {player.tile}
              </div>
            </div>
          ))
        }
        </div>

      </div>

    </div>
  )
}

export default Home