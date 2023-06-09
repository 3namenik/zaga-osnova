import Counter from './RunningNumber';

const Advantages = () => {

  return (
    <div id="advantages" className="m-bottom">
        <div className="advantages-block container" id="advantages counter">
            <div className="advantages-top flex-column">
                <div><span className="color-red h1 advantagesTitle"><Counter val={30} time={1} />0 000</span></div>
                <div><span className="fz-18">гостей нам доверяют</span></div>
            </div>
            <div className="advantages-bottom">
                <div className="advantages-item flex-column">
                    <div className="h1 color-red"><Counter val={35} time={1} /></div>
                    <div className="h6">открытых арен</div>
                </div>
                <div className="advantages-item flex-column">
                    <div className="h1 color-red"><Counter val={30} time={26/30} /></div>
                    <div className="h6">скоро откроется</div>
                </div>
                <div className="advantages-item flex-column">
                    <div className="ot100">
                        <div className="advantages-item__count h1 color-red pos-r">
                            <Counter val={100} time={10} /> <span className="advantages-item__desc">м2</span>
                        </div>
                        <div className="h6">требуемая площадь</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages