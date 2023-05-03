
import GameSlider from './GameSlider';

const GameLibrary = () => {

  return (
    <>
      <div id="game-lib">
        <div className="game-lib-block m-bottom">
          <div className="container game-lib-block__cont" id="gameLib">
            <div className="game-lib-block__title">
              <div className="h2">Библиотека игр</div>
            </div>
            <div className="game-lib-block__desc">
              В нашей библиотеке представлены 7 игр и 27 локаций
            </div>
            <div className="gameLib-sliders">
                <GameSlider />
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default GameLibrary