import Image from 'next/image'
import React from 'react'
import Slider from "react-slick"
import img1 from '../images/ph_new/1.webp'
import img2 from '../images/ph_new/2.webp'
import img3 from '../images/ph_new/3.webp'
import img4 from '../images/gameLib-img/img4.webp'
import img5 from '../images/ph_new/5.webp'
import img6 from '../images/gameLib-img/img6.webp'
import img7 from '../images/gameLib-img/img7.webp'
import ReadMore from './ReadMore'


const GameSlider = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: 'game-lib-sl',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
      }
      return (
        <Slider {...settings}>
            <div className="gameLib-item">
                <div>
                    <Image src={img1} />
                </div>
                <div className='inText'>
                    <div className="janr">Шутер</div>
                    <div className="gameName">Наёмники</div>
                    <div className="gameDesc"><ReadMore>Наемники - это обновленная версия игры Storm Squad с новой системой игры. Игроки делятся на две команды, после чего сражаются друг с другом в серии раундов, по результатам которых выбирается команда-победитель. В арсенале игроков оружие на любой вкус: пистолеты, пистолет-пулемёт, дробовик, автоматические винтовки и лазерный бластер. Игрокам так же доступна игра с ботами, опыт и меткость которых можно настроить в меню. В параметрах игры вы можете настроить уровень жестокости игры под возраст игроков. максимальное количество игроков – 10, количество игровых карт – 10. </ReadMore></div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img2} />
                </div>
                <div className='inText'>
                    <div className="janr">Квест</div>
                    <div className="gameName">Чистюли</div>
                    <div className="gameDesc"><ReadMore>Игра – квест. Команда персонажей-белок отмывает игровые уровни пеной и водой из специальных пушек. Игроки собирают сироп чтобы заправить им телепорт для перехода на другие уровни, где будут ждать новые увлекательные задания. В финальном раунде игрокам предстоит встретиться со злодеем, который пачкал город. 
                    Помогите Зверокоманде спасти и отмыть город от Злого Сиропа!</ReadMore></div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img3} />
                </div>
                <div className='inText'>
                    <div className="janr">Квест</div>
                    <div className="gameName">Снежки</div>
                    <div className="gameDesc"><ReadMore>Команда игроков выполняет задания зверят, например, нарядить снеговика, собрать подарки, поймать вырубщика елок. Противники - снеговики и еноты, которые кидают в игроков снежками. Игроки отстреливаются снежками из пушки, из противников выпадают разные подарки и детали для снеговика. Как только игроки выполнят все задания, то переходят на следующий уровень. В финале ждет главный злодей - Злой Буран. Помогите Зверокоманде победить Злого Бурана, мечтающего испортить зимние праздники!</ReadMore></div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img4} />
                </div>
                <div className='inText'>
                    <div className="janr">Приключение</div>
                    <div className="gameName">Storm Squad</div>
                    <div className="gameDesc"><ReadMore>В этой игре сражение происходит в одной из арабских стран на территории высотного здания. По сюжету изначально вы спускаетесь с вертолета на крышу и вам нужно зачищать этажи от монстров. Игра состоит из двух отдельных частей. Сюжет 2-ой части разворачивается в бункере.</ReadMore></div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img5} />
                </div>
                <div className='inText'>
                    <div className="janr">Приключение</div>
                    <div className="gameName">Storm Squad 2</div>
                    <div className="gameDesc"><ReadMore>В этой игре мы продолжаем прохождение захваченной монстрами высотки и постепенно спускаемся в бункеры. Команде нужно слаженно проходить каждый уровень и защищать друг друга, чтобы все смогли выбраться живыми.</ReadMore></div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img6} />
                </div>
                <div className='inText'>
                    <div className="janr">Шутер</div>
                    <div className="gameName">Bounce</div>
                    <div className="gameDesc"><ReadMore>Bounce - 3d шутер по мотивам вселенной Star Wars, командное сражение в ангаре космического корабля. В этой игре игроков ждет сражение “команда на команду” на площадке космической станции. Тыл команды прикрывают компьютерные боты. Игровой сет длится 90 секунд и заканчивается победой одной из сторон либо истечением времени раунда.</ReadMore></div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img7} />
                </div>
                <div className='inText'>
                    <div className="janr">Шутер</div>
                    <div className="gameName">Painball VR</div>
                    <div className="gameDesc"><ReadMore>“Painball VR - это как ЛазерТаг, только круче!” Вторая игра, переносит нас в ангарный отсек первой игры (Bounce). Задача команд остается прежней - победить любой ценой. На базе данной игры проводится Всероссийский турнир “ZAGA - Blast Games”.</ReadMore></div>
                </div>
            </div>
        </Slider>
      )
}

export default GameSlider