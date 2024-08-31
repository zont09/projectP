import styles from './Battle.scss';
import classNames from 'classnames/bind';
import pokemon1 from '../../assets/pokemon/ani-back/pikachu.gif';
import pokemon2 from '~/assets/pokemon/ani-front/rayquaza-mega.gif';
const cx = classNames.bind(styles);

function Page1() {
    return (
        <div className={cx('main-container')}>
            <div className={cx('main-area')}>
                <div className={cx('pokemon1')}>
                    <img alt="pokemon absol" src={pokemon1}></img>
                </div>
                <div className={cx('pokemon2')}>
                    <img alt="pokemon absol" src={pokemon2}></img>
                </div>
                <div className={cx('info-pokemon1')}>
                    <div className={cx('name-lv-hp')}>
                        <p className={cx('name')}>Pikachu</p>
                        <p className={cx('lv')}>lv70</p>
                        <p className={cx('hp')}>204/229</p>
                    </div>
                    <div className={cx('hp-bar')}>
                        <div className={cx('max-hp')}></div>
                        <div className={cx('current-hp')}></div>
                    </div>
                </div>
                <div className={cx('info-pokemon2')}>
                    <div className={cx('name-lv-hp')}>
                        <p className={cx('name')}>Mega Rayquaza</p>
                        <p className={cx('lv')}>lv100</p>
                        <p className={cx('hp')}>424/424</p>
                    </div>
                    <div className={cx('hp-bar')}>
                        <div className={cx('max-hp')}></div>
                        <div className={cx('current-hp')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page1;
