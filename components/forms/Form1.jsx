import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { UserSlice } from '../../store/reducers/UserSlice'
import FormFinal from './FormFinal';
import InputMask from "react-input-mask";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import Button from './Button';


const Form1 = (props) => {

    const {showR} = UserSlice.actions;
    const {showR2} = UserSlice.actions;
    const {showR3} = UserSlice.actions;
    const {showR4} = UserSlice.actions;
    const {showR5} = UserSlice.actions;
    const {showRFinal} = UserSlice.actions;
    const {showFinal} = useAppSelector(state => state.UserReducer)
    const dispatch = useAppDispatch();
    const API_PATH = 'https://zaga-osnova.vercel.app/api/b24Sender.php'



    const func = () => {
        dispatch(showR(false))
        dispatch(showR2(false))
        dispatch(showR3(false))
        dispatch(showR4(false))
        dispatch(showR5(false))
        dispatch(showRFinal(false))
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const [phonik, setPhonik] = useState('')
    const [phonikDirty, setPhonikDirty] = useState(false)
    const [phonikError, setPhonikError] = useState('Поле с номером не заполнено')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (phonikError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [phonikError])

    const phonikHandler = (e) => {
        setPhonik(e.target.value);
        setPhone(e.target.value);
        if (e.target.selectionEnd < 18) {
            setPhonikError('Поле с номером не заполнено')
        } else {
            setPhonikError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'phone':
                setPhonikDirty(true)
                break
        }
    }

    const svgImg = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5989 5.46631L23.9473 0H18.2646C18.0596 0 17.8594 0.0429687 17.6758 0.124023L13.9316 7.36924L6.54199 10.8087C6.45117 11.002 6.40234 11.2149 6.40234 11.4337V45.4174C6.40234 46.226 7.05859 46.8822 7.86719 46.8822H23.9473L27.5989 42.5785V5.46631Z" fill="#E4EBF2" />
                    <path d="M17.6748 0.125V9.34482C17.6748 10.1534 17.0186 10.8097 16.21 10.8097H6.54102C6.61719 10.6495 6.72168 10.5021 6.85254 10.3771L17.25 0.408203C17.374 0.288086 17.5186 0.193359 17.6748 0.125Z" fill="#CCD6E7" />
                    <path d="M41.4922 1.46484V45.4174C41.4922 46.226 40.8359 46.8822 40.0273 46.8822H23.9473V0H40.0273C40.8359 0 41.4922 0.65625 41.4922 1.46484Z" fill="#E4EBF2" />
                    <path d="M25.694 15.6211L23.9463 12.7461H20.6807C18.9912 12.7461 17.6172 14.1201 17.6172 15.8096V28.8272C17.6172 30.5167 18.9912 31.8907 20.6807 31.8907H23.9463L25.694 29.266V15.6211Z" fill="#FF80AA" />
                    <path d="M50 15.8096V28.8272C50 30.5167 48.625 31.8907 46.9355 31.8907H23.9473V12.7461H46.9355C48.625 12.7461 50 14.1201 50 15.8096Z" fill="#FF80AA" />
                    <path d="M19.248 39.1935L10.9257 49.4572C10.3375 50.1816 9.2338 50.1772 8.64933 49.4572L0.327064 39.1935C-0.0284052 38.755 -0.100671 38.1505 0.142493 37.6407C0.385657 37.131 0.900306 36.8067 1.46476 36.8067H4.29679V26.6523C4.29679 25.8438 4.95206 25.1875 5.76163 25.1875H13.8134C14.623 25.1875 15.2782 25.8438 15.2782 26.6523V36.8067H18.1103C18.6747 36.8067 19.1894 37.131 19.4325 37.6407C19.6757 38.1505 19.6034 38.755 19.248 39.1935Z" fill="#E32966" />
                    <path d="M43.3816 21.2424H41.4434V19.3633H43.6332C44.1726 19.3633 44.6098 18.926 44.6098 18.3867C44.6098 17.8475 44.1726 17.4102 43.6332 17.4102H40.4668C39.9274 17.4102 39.4902 17.8475 39.4902 18.3867V26.1993C39.4902 26.7387 39.9274 27.1759 40.4668 27.1759C41.0062 27.1759 41.4434 26.7386 41.4434 26.1993V23.1956H43.3816C43.921 23.1956 44.3582 22.7583 44.3582 22.219C44.3582 21.6798 43.921 21.2424 43.3816 21.2424Z" fill="#E4EBF2" />
                    <path d="M33.9756 17.4105C31.6335 17.4105 31.4419 17.3264 31.0718 17.6973C30.8886 17.8809 30.7859 18.1297 30.7864 18.389V18.395V18.3953C30.7864 26.7154 30.7778 26.1258 30.8056 26.2647C30.8403 26.7852 31.271 27.1763 31.7789 27.1763H31.7826C31.8495 27.176 33.4271 27.1699 34.0575 27.1588C36.404 27.1179 38.1072 25.0717 38.1072 22.2934C38.1071 19.3728 36.4468 17.4105 33.9756 17.4105ZM34.0232 25.206C33.7312 25.211 33.2157 25.2151 32.752 25.2181C32.7491 24.2934 32.7452 22.9515 32.7452 22.2847C32.7452 21.7235 32.743 20.3239 32.7413 19.3637H33.9757C35.5818 19.3637 36.1541 20.8771 36.1541 22.2934C36.154 23.7245 35.4952 25.1803 34.0232 25.206Z" fill="#E4EBF2" />
                    <path d="M24.2896 18.8161L23.9473 17.4102C23.4072 17.4102 22.9707 17.8506 22.9707 18.3867V26.1993C22.9707 26.7384 23.4082 27.1759 23.9473 27.1759L24.2896 25.6253V18.8161Z" fill="#E4EBF2" />
                    <path d="M26.123 17.4102H23.9473V27.1759C24.4873 27.1759 24.9238 26.7384 24.9238 26.1993V23.7765C25.3633 23.7745 25.8457 23.7726 26.123 23.7726C27.9004 23.7726 29.3477 22.3458 29.3477 20.5909C29.3477 18.837 27.9004 17.4102 26.123 17.4102ZM26.123 21.8194C25.8467 21.8194 25.3701 21.8214 24.9336 21.8233C24.9277 20.5431 24.9316 21.0421 24.9268 19.3634H26.123C26.8115 19.3634 27.3945 19.9259 27.3945 20.5909C27.3945 21.2569 26.8115 21.8194 26.123 21.8194Z" fill="#E4EBF2" />
                </svg>;

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
                {props.h2}
                {props.h3}
                
                <div id='formElem' className='forma'>
                    <div className="flex">
                        <input type="text" placeholder='Как к вам обращаться?' name="name" onChange={(e)=>{setName(e.target.value)}} />
                        
                        <InputMask onChange={e => phonikHandler(e)} className={(phonikDirty && phonikError) ? 'ne-norm' : 'norm' } name='phone' type='phone' value={phonik} onBlur={e => blurHandler(e)} mask="+7 (999) 999-99-99"  maskChar={null} placeholder={`Ваш номер телефона*`} />
                    </div>
                    <input onChange={(e) =>{setEmail(e.target.value)}} type="email" name="email" placeholder='E-mail для отправки материалов' />
                    {props.city}
                    {props.time}

                    <div className="text">
                        <span>Отправляя форму, вы соглашаетесь с <Link href="/policy"><a className='policy'>политикой конфиденциальности</a></Link></span>
                    </div>
                    {!formValid ? <Button btnId={props.btnId} dis={true} btnType={"buttond"} dopClass={"header-buttond"} /> : <Button btnId={props.btnId} dopClass={""} btnType={"button"} dis={false} setImg={svgImg} />}
                </div>
            </div>
        </div>
        </div>
        {showFinal ? <FormFinal classes='form-block active form-final'/> : <FormFinal classes='form-block form-success' />}
    </>
  )
}

export default Form1