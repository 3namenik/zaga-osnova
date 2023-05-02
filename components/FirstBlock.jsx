import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserSlice } from '../store/reducers/UserSlice'
import {dataForm} from './dataForm/data'
// import Form1 from './forms/Form1'
import Image from 'next/image'
import girl from '../images/girl.webp'
import { useState } from 'react'

const FirstBlock = (props) => {

    const {show} = useAppSelector(state => state.UserReducer)
    const {showR} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);
    
    const yandexMetrikaWhats = () => {
        ym(53145622,'reachGoal','whatsapp');
    }

    return (
        <>
        {/* {show ? <Form1 classes='form-block active' h2={dataForm[0].h2} h3={dataForm[0].h3} button={dataForm[0].button} /> : <Form1 classes='form-block' />} */}
            <div className="firstBlock">
                <div className="container first-block">
                    <div className="complect">
                        <div className="title">
                            <span><span className="titlePurple">Не франшиза</span> VR-арен<br /> ZAGA-GAME под ключ!</span>
                        </div>
                        <div className="subtitle">
                            {/* <span>Успешный бизнес <span className='color-red fw-800'>с доходом до 5 млн. руб.</span><br /> в сфере виртуальной реальности</span> */}
                            { props.subtitle }
                        </div>
                        <div className='btnHead'>
                            <button className="header-button" onClick={() => dispatch(showR(true))}>
                                <div className="header-button-text">
                                <span><span className="getPresent">Получить презентацию</span><br /> <span className="getPlus">+ комплект материалов</span></span>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5989 5.46631L23.9473 0H18.2646C18.0596 0 17.8594 0.0429687 17.6758 0.124023L13.9316 7.36924L6.54199 10.8087C6.45117 11.002 6.40234 11.2149 6.40234 11.4337V45.4174C6.40234 46.226 7.05859 46.8822 7.86719 46.8822H23.9473L27.5989 42.5785V5.46631Z" fill="#E4EBF2"/>
                                <path d="M17.6748 0.125V9.34482C17.6748 10.1534 17.0186 10.8097 16.21 10.8097H6.54102C6.61719 10.6495 6.72168 10.5021 6.85254 10.3771L17.25 0.408203C17.374 0.288086 17.5186 0.193359 17.6748 0.125Z" fill="#CCD6E7"/>
                                <path d="M41.4922 1.46484V45.4174C41.4922 46.226 40.8359 46.8822 40.0273 46.8822H23.9473V0H40.0273C40.8359 0 41.4922 0.65625 41.4922 1.46484Z" fill="#E4EBF2"/>
                                <path d="M25.694 15.6211L23.9463 12.7461H20.6807C18.9912 12.7461 17.6172 14.1201 17.6172 15.8096V28.8272C17.6172 30.5167 18.9912 31.8907 20.6807 31.8907H23.9463L25.694 29.266V15.6211Z" fill="#FF80AA"/>
                                <path d="M50 15.8096V28.8272C50 30.5167 48.625 31.8907 46.9355 31.8907H23.9473V12.7461H46.9355C48.625 12.7461 50 14.1201 50 15.8096Z" fill="#FF80AA"/>
                                <path d="M19.248 39.1935L10.9257 49.4572C10.3375 50.1816 9.2338 50.1772 8.64933 49.4572L0.327064 39.1935C-0.0284052 38.755 -0.100671 38.1505 0.142493 37.6407C0.385657 37.131 0.900306 36.8067 1.46476 36.8067H4.29679V26.6523C4.29679 25.8438 4.95206 25.1875 5.76163 25.1875H13.8134C14.623 25.1875 15.2782 25.8438 15.2782 26.6523V36.8067H18.1103C18.6747 36.8067 19.1894 37.131 19.4325 37.6407C19.6757 38.1505 19.6034 38.755 19.248 39.1935Z" fill="#E32966"/>
                                <path d="M43.3816 21.2424H41.4434V19.3633H43.6332C44.1726 19.3633 44.6098 18.926 44.6098 18.3867C44.6098 17.8475 44.1726 17.4102 43.6332 17.4102H40.4668C39.9274 17.4102 39.4902 17.8475 39.4902 18.3867V26.1993C39.4902 26.7387 39.9274 27.1759 40.4668 27.1759C41.0062 27.1759 41.4434 26.7386 41.4434 26.1993V23.1956H43.3816C43.921 23.1956 44.3582 22.7583 44.3582 22.219C44.3582 21.6798 43.921 21.2424 43.3816 21.2424Z" fill="#E4EBF2"/>
                                <path d="M33.9756 17.4105C31.6335 17.4105 31.4419 17.3264 31.0718 17.6973C30.8886 17.8809 30.7859 18.1297 30.7864 18.389V18.395V18.3953C30.7864 26.7154 30.7778 26.1258 30.8056 26.2647C30.8403 26.7852 31.271 27.1763 31.7789 27.1763H31.7826C31.8495 27.176 33.4271 27.1699 34.0575 27.1588C36.404 27.1179 38.1072 25.0717 38.1072 22.2934C38.1071 19.3728 36.4468 17.4105 33.9756 17.4105ZM34.0232 25.206C33.7312 25.211 33.2157 25.2151 32.752 25.2181C32.7491 24.2934 32.7452 22.9515 32.7452 22.2847C32.7452 21.7235 32.743 20.3239 32.7413 19.3637H33.9757C35.5818 19.3637 36.1541 20.8771 36.1541 22.2934C36.154 23.7245 35.4952 25.1803 34.0232 25.206Z" fill="#E4EBF2"/>
                                <path d="M24.2896 18.8161L23.9473 17.4102C23.4072 17.4102 22.9707 17.8506 22.9707 18.3867V26.1993C22.9707 26.7384 23.4082 27.1759 23.9473 27.1759L24.2896 25.6253V18.8161Z" fill="#E4EBF2"/>
                                <path d="M26.123 17.4102H23.9473V27.1759C24.4873 27.1759 24.9238 26.7384 24.9238 26.1993V23.7765C25.3633 23.7745 25.8457 23.7726 26.123 23.7726C27.9004 23.7726 29.3477 22.3458 29.3477 20.5909C29.3477 18.837 27.9004 17.4102 26.123 17.4102ZM26.123 21.8194C25.8467 21.8194 25.3701 21.8214 24.9336 21.8233C24.9277 20.5431 24.9316 21.0421 24.9268 19.3634H26.123C26.8115 19.3634 27.3945 19.9259 27.3945 20.5909C27.3945 21.2569 26.8115 21.8194 26.123 21.8194Z" fill="#E4EBF2"/>
                                </svg>
                                </div>
                            </button>
                        </div>

                        <div className='whatIs-complex425' onClick={() => setVisible(!visible)}>Что входит в комплект материалов?</div>
                    
                        <div className='whatIs-complex'>
                            <span>*В комплект материалов входит:</span>
                        </div>
                        <div className={visible ? 'complex complexb' : 'complex'}>
                            <div className="complex-item" onClick={() => dispatch(showR(true))}>
                                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.377 8.13895L17.0832 6.33507L15.285 0.0214844H2.69735C1.20763 0.0214844 0 1.23291 0 2.72731V28.1019C0 29.5963 1.20763 30.8077 2.69735 30.8077H20.6797C22.1694 30.8077 23.377 29.5963 23.377 28.1019V8.13895Z" fill="#5FB977"/>
                                <path d="M17.0877 17.6412C17.0754 17.6334 17.0627 17.6262 17.0496 17.6197L16.1841 17.1797L11.3843 19.5786C11.2567 19.6424 11.1041 19.6424 10.9766 19.5786L6.17673 17.1797L5.31119 17.6197C5.10082 17.7251 5.02078 17.9715 5.13245 18.1701C5.13939 18.1824 5.14699 18.1944 5.15524 18.206L11.1804 21.2172L17.2056 18.206C17.3383 18.0193 17.2855 17.7664 17.0877 17.6412Z" fill="white"/>
                                <path d="M17.2264 20.3036C17.186 20.234 17.1247 20.1769 17.05 20.1393L16.1844 19.7051L11.3843 22.0725C11.2568 22.1355 11.1041 22.1355 10.9765 22.0725L6.17642 19.7051L5.31082 20.1393C5.09909 20.2457 5.02012 20.4919 5.1344 20.6891C5.17475 20.7588 5.23609 20.8159 5.31082 20.8535L10.9739 23.6941C11.1028 23.7588 11.258 23.7588 11.3869 23.6941L17.05 20.8535C17.2617 20.747 17.3407 20.5009 17.2264 20.3036Z" fill="white"/>
                                <path d="M17.0877 14.5937C17.0754 14.5859 17.0627 14.5786 17.0496 14.5721L11.3869 11.6778C11.258 11.612 11.1028 11.612 10.9739 11.6778L5.31119 14.5721C5.10082 14.678 5.02078 14.9258 5.13245 15.1255C5.13939 15.1379 5.14699 15.15 5.15524 15.1617L11.1804 18.1894L17.2056 15.1617C17.3383 14.9739 17.2855 14.7196 17.0877 14.5937Z" fill="white"/>
                                <path d="M23.3772 8.13895H17.0834C16.0944 8.13895 15.2852 7.3272 15.2852 6.33507V0.0214844C15.5189 0.0214844 15.7527 0.111678 15.9145 0.292127L23.1074 7.50765C23.2873 7.66994 23.3772 7.90445 23.3772 8.13895Z" fill="#73EB93"/>
                                </svg>
                                <span>Финансовая модель<br /> и расчет окупаемости</span>
                            </div>
                            <div className="complex-item" onClick={() => dispatch(showR(true))}>
                                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.1134 8.83548L16.8906 7.0316L15.1126 0.718018H2.66693C1.19401 0.718018 0 1.92944 0 3.42384V28.7984C0 30.2928 1.19401 31.5043 2.66693 31.5043H20.4465C21.9194 31.5043 23.1134 30.2928 23.1134 28.7984V8.83548Z" fill="#4086F4"/>
                                <path d="M23.1141 8.83548H16.8912C15.9134 8.83548 15.1133 8.02374 15.1133 7.0316V0.718018C15.3444 0.718018 15.5755 0.808212 15.7355 0.98866L22.8473 8.20419C23.0252 8.36648 23.1141 8.60098 23.1141 8.83548Z" fill="#80AEF8"/>
                                <path d="M16.8907 15.2072H6.22296C5.73159 15.2072 5.33398 14.8038 5.33398 14.3053C5.33398 13.8067 5.73159 13.4033 6.22296 13.4033H16.8907C17.382 13.4033 17.7797 13.8067 17.7797 14.3053C17.7797 14.8038 17.382 15.2072 16.8907 15.2072Z" fill="white"/>
                                <path d="M16.8907 18.8151H6.22296C5.73159 18.8151 5.33398 18.4117 5.33398 17.9132C5.33398 17.4146 5.73159 17.0112 6.22296 17.0112H16.8907C17.382 17.0112 17.7797 17.4146 17.7797 17.9132C17.7797 18.4117 17.382 18.8151 16.8907 18.8151Z" fill="white"/>
                                <path d="M16.8907 22.4228H6.22296C5.73159 22.4228 5.33398 22.0194 5.33398 21.5208C5.33398 21.0223 5.73159 20.6189 6.22296 20.6189H16.8907C17.382 20.6189 17.7797 21.0223 17.7797 21.5208C17.7797 22.0194 17.382 22.4228 16.8907 22.4228Z" fill="white"/>
                                <path d="M13.3348 26.0304H6.22296C5.73159 26.0304 5.33398 25.627 5.33398 25.1285C5.33398 24.63 5.73159 24.2266 6.22296 24.2266H13.3348C13.8261 24.2266 14.2238 24.63 14.2238 25.1285C14.2238 25.627 13.8261 26.0304 13.3348 26.0304Z" fill="white"/>
                                </svg>
                                <span>План запуска бизнеса за 30 дней</span>
                            </div>
                            <div className="complex-item" onClick={() => dispatch(showR(true))}>
                                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.377 8.53202L17.0832 6.72814L15.285 0.414551H2.69735C1.20763 0.414551 0 1.62598 0 3.12037V28.495C0 29.9894 1.20763 31.2008 2.69735 31.2008H20.6797C22.1694 31.2008 23.377 29.9894 23.377 28.495V8.53202Z" fill="#F44040"/>
                                <path d="M9.7678 11.6274C9.899 12.9262 9.96266 15.3952 8.92078 17.3369C8.83616 17.4935 8.75231 17.6458 8.66846 17.7914C6.85643 18.318 4.94268 19.3153 4.6236 20.4134C4.4986 20.8473 4.61351 21.2813 4.9388 21.6041C5.27807 21.9388 5.69964 22.1168 6.1608 22.1168C7.27644 22.1168 8.43633 21.1084 9.70336 19.0373C10.163 18.9299 12.8112 18.624 13.3678 18.6299C14.8949 20.1089 16.1309 20.8275 17.1402 20.8275C17.7737 20.8275 18.3195 20.5245 18.6378 19.9942C18.8583 19.6235 18.859 19.1954 18.6401 18.8196C18.0066 17.7355 15.5393 17.2942 14.0595 17.1935C13.9322 17.0618 13.8033 16.925 13.6714 16.7831C12.1559 15.143 11.5364 12.7335 11.3073 11.4744C11.2786 11.1861 11.246 10.9463 11.2188 10.7705C11.121 10.1042 10.6793 10.0042 10.4246 10.0042C10.2033 10.0042 9.99139 10.0946 9.84466 10.2527C9.60787 10.5072 9.64358 10.7823 9.66687 10.9662C9.68861 11.1471 9.72277 11.3854 9.7678 11.6274ZM6.09881 21.0276C6.27081 20.8187 6.60655 20.5108 7.1152 20.1777C6.64058 20.743 6.29105 20.9762 6.09881 21.0276ZM17.2766 19.8043C17.1069 19.7831 16.7836 19.6983 16.2653 19.3823C16.7125 19.5267 17.053 19.6761 17.2766 19.8043ZM11.2165 15.5558C11.5106 16.0526 11.8378 16.5053 12.1972 16.9109C12.0215 16.925 10.7822 17.0584 10.6726 17.0698C10.9014 16.6032 11.0827 16.0969 11.2165 15.5558Z" fill="white"/>
                                <path d="M23.3772 8.53202H17.0834C16.0944 8.53202 15.2852 7.72027 15.2852 6.72814V0.414551C15.5189 0.414551 15.7527 0.504745 15.9145 0.685193L23.1074 7.90072C23.2873 8.06301 23.3772 8.29751 23.3772 8.53202Z" fill="#FF8484"/>
                                </svg>
                                <span>Чек-лист по подбору помещения</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <div className="header__content-right">
                            <div className="header__content-banner">
                                <div className="bg_rotate"></div>
                                <div className="header__content-banner-img">
                                    <Image src={girl} priority />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wa-475">
                        <a onClick={yandexMetrikaWhats} href="https://api.whatsapp.com/send/?phone=79636623890&text&app_absent=0&amp;text&amp;app_absent=0" target="_blank">Связаться в WhatsApp</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstBlock