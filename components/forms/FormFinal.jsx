import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { UserSlice } from '../../store/reducers/UserSlice'


const FormFinal = (props) => {

    const {showR} = UserSlice.actions;
    const {showR2} = UserSlice.actions;
    const {showR3} = UserSlice.actions;
    const {showR4} = UserSlice.actions;
    const {showR5} = UserSlice.actions;
    const {showRFinal} = UserSlice.actions;
    const dispatch = useAppDispatch();

    const func = () => {
        dispatch(showR(false))
        dispatch(showR2(false))
        dispatch(showR3(false))
        dispatch(showR4(false))
        dispatch(showR5(false))
        dispatch(showRFinal(false))
    }

    return (
        <>
            <div className={props.classes}>
            <div className="close-form" onClick={() => func()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3894 0.609395C18.5769 -0.203132 17.2594 -0.203132 16.4482 0.609395L9.99955 7.05891L3.55087 0.609395C2.73834 -0.203132 1.4222 -0.203132 0.609673 0.609395C-0.202853 1.42192 -0.202853 2.73806 0.609673 3.55059L7.05835 9.99983L0.609395 16.4493C-0.203132 17.2619 -0.203132 18.578 0.609395 19.3905C1.01552 19.7967 1.54782 20 2.08013 20C2.61244 20 3.1453 19.7969 3.55087 19.3905L9.99955 12.9413L16.4482 19.3905C16.8544 19.7967 17.3867 20 17.919 20C18.4513 20 18.9833 19.7969 19.3897 19.3905C20.2022 18.578 20.2022 17.2619 19.3897 16.4493L12.9407 10.0001L19.3894 3.55087C20.2019 2.73834 20.2019 1.42192 19.3894 0.609395Z" fill="#E32966"/>
                </svg>
            </div>
            <div className="form">
                <div className="pos-r">
                    <div className="h2">
                    Благодарим<br /> за Вашу заявку
                    </div>
                    <div className="h3">
                    В ближайшее время наш менеджер свяжется<br /> с Вами, чтобы ответить на все интересующие вопросы
                    </div>
                    <div className="h3 fw-700">Ознакомьтесь с материалами о франшизе:</div>
                    <div className="links">
                        <Link href="#whatIs">
                        <div className='links-item'>
                            <div>о ZAGA-GAME</div>
                            <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.121 21.1719C11.9257 21.3672 11.9257 21.6838 12.121 21.879C12.3162 22.0743 12.6328 22.0743 12.8281 21.879L12.121 21.1719ZM13.3788 11.0694C13.1027 11.0699 12.8792 11.2941 12.8796 11.5702C12.88 11.8463 13.1043 12.0698 13.3804 12.0694L13.3788 11.0694ZM21.9306 20.6196C21.9302 20.8957 22.1537 21.12 22.4298 21.1204C22.7059 21.1208 22.9301 20.8973 22.9306 20.6212L21.9306 20.6196ZM22.4448 11.5552L22.9448 11.556L22.9455 11.0545L22.444 11.0552L22.4448 11.5552ZM27.9602 6.03984C34.0133 12.093 34.0133 21.907 27.9602 27.9602L28.6673 28.6673C35.1109 22.2236 35.1109 11.7764 28.6673 5.33274L27.9602 6.03984ZM27.9602 27.9602C21.907 34.0133 12.093 34.0133 6.03984 27.9602L5.33274 28.6673C11.7764 35.1109 22.2236 35.1109 28.6673 28.6673L27.9602 27.9602ZM6.03984 27.9602C-0.0132816 21.907 -0.0132816 12.093 6.03984 6.03984L5.33274 5.33274C-1.11091 11.7764 -1.11091 22.2236 5.33274 28.6673L6.03984 27.9602ZM6.03984 6.03984C12.093 -0.0132816 21.907 -0.0132816 27.9602 6.03984L28.6673 5.33274C22.2236 -1.11091 11.7764 -1.11091 5.33274 5.33274L6.03984 6.03984ZM12.8281 21.879L22.7983 11.9088L22.0912 11.2017L12.121 21.1719L12.8281 21.879ZM21.9448 11.5545L21.9306 20.6196L22.9306 20.6212L22.9448 11.556L21.9448 11.5545ZM13.3804 12.0694L22.4455 12.0552L22.444 11.0552L13.3788 11.0694L13.3804 12.0694Z" fill="#70358F"/>
                            </svg>
                            </div>
                        </div>
                        </Link>
                        <Link href="#numbers">
                        <div className='links-item'>
                            <div>Франшиза в цифрах</div>
                            <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.121 21.1719C11.9257 21.3672 11.9257 21.6838 12.121 21.879C12.3162 22.0743 12.6328 22.0743 12.8281 21.879L12.121 21.1719ZM13.3788 11.0694C13.1027 11.0699 12.8792 11.2941 12.8796 11.5702C12.88 11.8463 13.1043 12.0698 13.3804 12.0694L13.3788 11.0694ZM21.9306 20.6196C21.9302 20.8957 22.1537 21.12 22.4298 21.1204C22.7059 21.1208 22.9301 20.8973 22.9306 20.6212L21.9306 20.6196ZM22.4448 11.5552L22.9448 11.556L22.9455 11.0545L22.444 11.0552L22.4448 11.5552ZM27.9602 6.03984C34.0133 12.093 34.0133 21.907 27.9602 27.9602L28.6673 28.6673C35.1109 22.2236 35.1109 11.7764 28.6673 5.33274L27.9602 6.03984ZM27.9602 27.9602C21.907 34.0133 12.093 34.0133 6.03984 27.9602L5.33274 28.6673C11.7764 35.1109 22.2236 35.1109 28.6673 28.6673L27.9602 27.9602ZM6.03984 27.9602C-0.0132816 21.907 -0.0132816 12.093 6.03984 6.03984L5.33274 5.33274C-1.11091 11.7764 -1.11091 22.2236 5.33274 28.6673L6.03984 27.9602ZM6.03984 6.03984C12.093 -0.0132816 21.907 -0.0132816 27.9602 6.03984L28.6673 5.33274C22.2236 -1.11091 11.7764 -1.11091 5.33274 5.33274L6.03984 6.03984ZM12.8281 21.879L22.7983 11.9088L22.0912 11.2017L12.121 21.1719L12.8281 21.879ZM21.9448 11.5545L21.9306 20.6196L22.9306 20.6212L22.9448 11.556L21.9448 11.5545ZM13.3804 12.0694L22.4455 12.0552L22.444 11.0552L13.3788 11.0694L13.3804 12.0694Z" fill="#70358F"/>
                            </svg>
                            </div>
                        </div>
                        </Link>
                        <Link href="#gameLib">
                        <div className='links-item'>
                            <div>Библиотека игр</div>
                            <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.121 21.1719C11.9257 21.3672 11.9257 21.6838 12.121 21.879C12.3162 22.0743 12.6328 22.0743 12.8281 21.879L12.121 21.1719ZM13.3788 11.0694C13.1027 11.0699 12.8792 11.2941 12.8796 11.5702C12.88 11.8463 13.1043 12.0698 13.3804 12.0694L13.3788 11.0694ZM21.9306 20.6196C21.9302 20.8957 22.1537 21.12 22.4298 21.1204C22.7059 21.1208 22.9301 20.8973 22.9306 20.6212L21.9306 20.6196ZM22.4448 11.5552L22.9448 11.556L22.9455 11.0545L22.444 11.0552L22.4448 11.5552ZM27.9602 6.03984C34.0133 12.093 34.0133 21.907 27.9602 27.9602L28.6673 28.6673C35.1109 22.2236 35.1109 11.7764 28.6673 5.33274L27.9602 6.03984ZM27.9602 27.9602C21.907 34.0133 12.093 34.0133 6.03984 27.9602L5.33274 28.6673C11.7764 35.1109 22.2236 35.1109 28.6673 28.6673L27.9602 27.9602ZM6.03984 27.9602C-0.0132816 21.907 -0.0132816 12.093 6.03984 6.03984L5.33274 5.33274C-1.11091 11.7764 -1.11091 22.2236 5.33274 28.6673L6.03984 27.9602ZM6.03984 6.03984C12.093 -0.0132816 21.907 -0.0132816 27.9602 6.03984L28.6673 5.33274C22.2236 -1.11091 11.7764 -1.11091 5.33274 5.33274L6.03984 6.03984ZM12.8281 21.879L22.7983 11.9088L22.0912 11.2017L12.121 21.1719L12.8281 21.879ZM21.9448 11.5545L21.9306 20.6196L22.9306 20.6212L22.9448 11.556L21.9448 11.5545ZM13.3804 12.0694L22.4455 12.0552L22.444 11.0552L13.3788 11.0694L13.3804 12.0694Z" fill="#70358F"/>
                            </svg>
                            </div>
                        </div>
                        </Link>
                        {/* <Link href="#comments">
                        <div className='links-item'>
                            <div>Отзывы партнёров</div>
                            <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.121 21.1719C11.9257 21.3672 11.9257 21.6838 12.121 21.879C12.3162 22.0743 12.6328 22.0743 12.8281 21.879L12.121 21.1719ZM13.3788 11.0694C13.1027 11.0699 12.8792 11.2941 12.8796 11.5702C12.88 11.8463 13.1043 12.0698 13.3804 12.0694L13.3788 11.0694ZM21.9306 20.6196C21.9302 20.8957 22.1537 21.12 22.4298 21.1204C22.7059 21.1208 22.9301 20.8973 22.9306 20.6212L21.9306 20.6196ZM22.4448 11.5552L22.9448 11.556L22.9455 11.0545L22.444 11.0552L22.4448 11.5552ZM27.9602 6.03984C34.0133 12.093 34.0133 21.907 27.9602 27.9602L28.6673 28.6673C35.1109 22.2236 35.1109 11.7764 28.6673 5.33274L27.9602 6.03984ZM27.9602 27.9602C21.907 34.0133 12.093 34.0133 6.03984 27.9602L5.33274 28.6673C11.7764 35.1109 22.2236 35.1109 28.6673 28.6673L27.9602 27.9602ZM6.03984 27.9602C-0.0132816 21.907 -0.0132816 12.093 6.03984 6.03984L5.33274 5.33274C-1.11091 11.7764 -1.11091 22.2236 5.33274 28.6673L6.03984 27.9602ZM6.03984 6.03984C12.093 -0.0132816 21.907 -0.0132816 27.9602 6.03984L28.6673 5.33274C22.2236 -1.11091 11.7764 -1.11091 5.33274 5.33274L6.03984 6.03984ZM12.8281 21.879L22.7983 11.9088L22.0912 11.2017L12.121 21.1719L12.8281 21.879ZM21.9448 11.5545L21.9306 20.6196L22.9306 20.6212L22.9448 11.556L21.9448 11.5545ZM13.3804 12.0694L22.4455 12.0552L22.444 11.0552L13.3788 11.0694L13.3804 12.0694Z" fill="#70358F"/>
                            </svg>
                            </div>
                        </div>
                        </Link> */}
                        <Link href="#withUs">
                        <div className='links-item'>
                            <div>Преимущества</div>
                            <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.121 21.1719C11.9257 21.3672 11.9257 21.6838 12.121 21.879C12.3162 22.0743 12.6328 22.0743 12.8281 21.879L12.121 21.1719ZM13.3788 11.0694C13.1027 11.0699 12.8792 11.2941 12.8796 11.5702C12.88 11.8463 13.1043 12.0698 13.3804 12.0694L13.3788 11.0694ZM21.9306 20.6196C21.9302 20.8957 22.1537 21.12 22.4298 21.1204C22.7059 21.1208 22.9301 20.8973 22.9306 20.6212L21.9306 20.6196ZM22.4448 11.5552L22.9448 11.556L22.9455 11.0545L22.444 11.0552L22.4448 11.5552ZM27.9602 6.03984C34.0133 12.093 34.0133 21.907 27.9602 27.9602L28.6673 28.6673C35.1109 22.2236 35.1109 11.7764 28.6673 5.33274L27.9602 6.03984ZM27.9602 27.9602C21.907 34.0133 12.093 34.0133 6.03984 27.9602L5.33274 28.6673C11.7764 35.1109 22.2236 35.1109 28.6673 28.6673L27.9602 27.9602ZM6.03984 27.9602C-0.0132816 21.907 -0.0132816 12.093 6.03984 6.03984L5.33274 5.33274C-1.11091 11.7764 -1.11091 22.2236 5.33274 28.6673L6.03984 27.9602ZM6.03984 6.03984C12.093 -0.0132816 21.907 -0.0132816 27.9602 6.03984L28.6673 5.33274C22.2236 -1.11091 11.7764 -1.11091 5.33274 5.33274L6.03984 6.03984ZM12.8281 21.879L22.7983 11.9088L22.0912 11.2017L12.121 21.1719L12.8281 21.879ZM21.9448 11.5545L21.9306 20.6196L22.9306 20.6212L22.9448 11.556L21.9448 11.5545ZM13.3804 12.0694L22.4455 12.0552L22.444 11.0552L13.3788 11.0694L13.3804 12.0694Z" fill="#70358F"/>
                            </svg>
                            </div>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
            </div>
            
        </>
    )
}

export default FormFinal