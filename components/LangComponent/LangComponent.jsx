import style from './style.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LangComponentMobile = () => {
    const router = useRouter();
    const ruLink = router.asPath.replace('/en', '') + '/';
    const engLink = (router.asPath.indexOf('/en') >= 0) ?
                        router.asPath + '/' :
                        (router.asPath[router.asPath.length - 1] == '/') ? router.asPath + 'en' : router.asPath + '/en';

    console.log(router);

    return (
        <div className={style.lang}>
            <div className={style.lang_items}>

                <div className={style.lang_item}>
                    <a href={ ruLink }>
                        <div className={style.lang_item_img}>
                            <img src="/lang/ru.svg" alt="" />
                        </div>
                        <div className={style.lang_item_text}>
                            РУС
                        </div>
                    </a>
                </div>

                <div className={style.lang_item}>
                    <a href={ engLink }>
                        <div className={style.lang_item_img}>
                            <img src="/lang/eng.svg" alt="" />
                        </div>
                        <div className={style.lang_item_text}>

                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default LangComponentMobile;