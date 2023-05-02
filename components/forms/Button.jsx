import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { UserSlice } from '../../store/reducers/UserSlice';

const Button = (props) => {
    const {showR} = UserSlice.actions;
    const {showR2} = UserSlice.actions;
    const {showR3} = UserSlice.actions;
    const {showR4} = UserSlice.actions;
    const {showR5} = UserSlice.actions;
    const {showRFinal} = UserSlice.actions;
    const dispatch = useAppDispatch();

    let btnText = <span><span className="getPresent">ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ</span><br /> <span className="getPlus">+ комплект материалов</span></span>;

    switch(props.btnId) {
        case 1:
            btnText = <span><span className="getPresent">ПОЛУЧИТЬ ПРЕЗЕНТАЦИЮ</span><br /> <span className="getPlus">+ комплект материалов</span></span>;
            break;
        case 2:
            btnText = <span><span className="getPresent">ПОЗВОНИТЕ МНЕ</span></span>;
            break;
        case 3:
            btnText = <span><span className="getPresent">СКАЧАТЬ БИЗНЕС-ПЛАН</span><br /> <span className="getPlus">+ фин.модель</span></span>;
            break;
        case 4:
            btnText = <span><span className="getPresent">ПРОВЕРИТЬ СВОЙ ГОРОД</span></span>;
            break;
        case 5:
            btnText = <span><span className="getPresent">ЗАПИСАТЬСЯ НА<br />ВСТРЕЧУ ИЛИ ЗВОНОК</span></span>;
            break;
    }

    /**
     * Собираю данные с форм
     * @param {DOMElement} form 
     * @returns {object} data
     */
    let getFormData = (form) => {
        const inputs = form.querySelectorAll('input');
        let data = {};

        for (let i = 0; i < inputs.length; i++) {
            data[inputs[i].name] = inputs[i].value;
        }

        data["roistat"] = window.roistat.getVisit();

        return data;
    }

    /**
     * Отправка формы
     */
    const submitHandler = () => {
        const form = document.querySelector('#formElem');
        
        let formData = getFormData(form);

        // bitrix24
        fetch('https://zaga-game.com/b24Sender.php', {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            // .then((response) => response.json())
            .then((data) => {
                console.log("Success: ", data);
                ym(53145622,'reachGoal','zakaz');
            })
            .catch((err) => {
                console.log("Error: ", err);
            });

        // unisender
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // }).then((res) => {
        //     console.log('Response received')
        //     if (res.status === 200) {
        //         console.log('Response succeeded!')
        //         setName('')
        //         setPhone('')
        //     }
        // });
        
        dispatch(showR(false));
        dispatch(showR2(false));
        dispatch(showR3(false));
        dispatch(showR4(false));
        dispatch(showR5(false));
        dispatch(showRFinal(true));
    }

    // console.log(document.domain);

    return (
        <>
            <button className={"header-button " + props.dopClass} disabled={props.dis} type="submit" onClick={ () => {submitHandler()} }>
                <div className="header-button-text">
                    {btnText}
                    {props.setImg}
                </div>
            </button>
        </>
    );
}

export default Button;
