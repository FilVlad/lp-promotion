import React from 'react';
import rs7 from "./assets/images/2018-audi-rs7-overview-tab-engine.jfif";
import predplug from "./assets/images/predplug.png";
import Carousel from './Carousel.jsx';
import onlandSys from './assets/images/onland_sys.jpg';
import cn from 'classnames';

export default class InfoGroup extends React.Component {

    static defaultProps = {
        toggledButton: 'list-guide-list',
        toggledPane: 'list-guide',
    };

    state = {
        toggledButton: this.props.toggledButton,
        toggledPane: this.props.toggledPane,
    };

    handleChangePane = (e) => {
        const newToggledButton = e.target.id;
        const newToggledPane = e.target.dataset.toggle;
        this.setState({
            toggledButton: newToggledButton,
            toggledPane: newToggledPane,
        });
    }

    renderRn100() {
        const { toggledPane } = this.state;
        const panesClasses = (value) => cn({ 'tab-pane': true, show: toggledPane === value, active: toggledPane === value });
        return (
            <div className="tab-content" id="nav-tabContent">

                <div className={panesClasses('list-guide')} id="list-guide" role="tabpanel" aria-labelledby="list-guide-list">
                    <h3>Общий вид</h3>
                    <div className="video__descript guide__rows row animated fadeIn ">
                        <video className="col-12 col-lg-8 text-left m-0 p-0" width="100%" height="auto" autoPlay muted>
                            <source src="https://www.dropbox.com/s/ntzvsxmo7q8py7x/Kverneland%20RN%20On%20Land%20%282%29.mp4?dl=1" type='video/mp4' />
                        </video>
                        <div className="info__text col col-lg-4 pt-3 ">
                            <h3 className="text-center">Kverneland RN100</h3>
                            <p className="text-justify">Мощный полунавесной оборотный плуг родом из Норвегии, предназначенный для обработки полей средних и крупных хозяйств.
                            Данный агрегат вобрал в себя самые лучшие качества присущие плугам, благодаря более чем 100-летнему опыту компании Kverneland.
                            Компоненты из уникальной каленной стали, широкий выбор оснащения, удобная настройка ширины захвата корпусов: делают этот плуг одним из самых конкурентных в своем классе.</p>
                        </div>
                    </div>
                </div>

                <div className={panesClasses('list-steel')} id="list-steel" role="tabpanel" aria-labelledby="list-steel-list">
                    <h3>Закалка стали</h3>
                    <div className="guide__rows row animated fadeIn">
                        <p className="text__content text-sm-justify col-11 col-md-6 "> Kverneland имеет две лаборатории для изучения, анализа, разработки и контроля легированной стали (как правило, насыщенной бором)
                        и инструментальной углеродистой стали, которые используются при производстве плугов. Процесс закалки является сложным и выполняется пошагово, он называется карбюризацией - насыщение углеродом
                        поверхности отвала для создания высокой жёсткости при одновременном сохранении гибкости стали в сердцевине материалла. Эта технология позволяет значительно повысить ресурс отвалов и их стойкость к поломке при пиковых нагрузках.
                        <br /><br />
                        Рама - закаляется индукционным методом, благодаря чему ее прочностные характеристики повышаются в 3 раза! Ключевым преимуществом такого подхода стало отсутствие потребности в наращивании
                        толщины металла и увеличения поперечного сечения рамы. А значит нужно меньшее тяговое усилие трактора, расход топлива уменьшается, трехточечной навеске нужно меньше усилий для подъема / выглубления плуга.   
                        </p>
                        <div className="img__content col-11 col-md-6 text-center">
                            <img className="img__content" src={rs7} alt="" />
                        </div>
                    </div>
                </div>

                <div className={panesClasses('list-ploughshare')} id="list-ploughshare" role="tabpanel" aria-labelledby="list-ploughshare-list"><h3>Выбор корпусов</h3>
                    <div className="guide__rows row animated fadeIn">
                        <ul className="text__content text-sm-justify col-11 col-md-6 ">Плуги RN100 - могут использоваться в любых условиях. Это достигается благодаря возможности переукомлпектации их разными корпусами.
                        Каждый корпус имеет свои особенности применения и целевое назначение.
                        
                        <li><strong>Корпус №9</strong> - универсальный корпус. В его задачи входит глубокая пахота на тяжелых почвах с полным оборотом пласта.
                        <br /><strong>Глубина: 18 – 35 см</strong>
                        <br/><strong>Ширина борозды: 35 – 50 см</strong>
                        </li>
                        <li><strong>Корпус №30</strong> - с "перьевым отвалом". В его задачи входит пахота в условиях липких и каменистых почв с дополнительным крошением пласта. Оставляет широкое дно борозды.
                        <br /><strong>Глубина: 20 – 35 см</strong>
                        <br/><strong>Ширина борозды: 30 – 55 см</strong>
                        </li>
                        <li><strong>Корпус №14</strong> - "для липких почв". В его задачи входит пахота в условиях липких почв без камней и абразивов.Оставляет широкое дно борозды.
                        <br /><strong>Глубина: 18 – 35 см</strong>
                        <br/><strong>Ширина борозды: 30 – 55 см</strong>
                        </li>
                        </ul>
                        <div className="img__content col-11 col-md-6 text-center">
                            <Carousel />
                        </div>
                    </div>
                </div>
                <div className={panesClasses('list-safety')} id="list-safety" role="tabpanel" aria-labelledby="list-settings-list"><h3>Универсальность RN100</h3>
                    <div className="guide__rows row animated fadeIn">
                        <p className="text__content text-sm-justify col-11 col-md-6 ">Помимо большого выбора корпусов, универсальность использования RN100 достигается за счет расширения его возможностей опциями.
                        <ul className="text__content text-sm-justify col-11 col-md-6 ">                        
                        <li><strong>Кукурузные предплужники</strong> - специальный орган плуга для запашки удобрений и стеблей кукурузы, особенно востребован при большом количестве соломы на поле. 
                        
                        </li>
                        <li><strong>Съемный корпус</strong> - в случае когда условия для пахоты усложнились, последний корпус отсоединяется в считанные минуты, не нужно отсоединять отвал от крепления.
               
                        </li>
                        <li><strong>Нож полевой доски</strong> - орган плуга предназначенный для формирования ровной кромки борозды.
                        
                        </li>
                        </ul>
                        </p>
                        <div className="img__content col-11 col-md-6 text-center">
                            <img className="img__content" src={predplug} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderOnland() {
        const { toggledPane } = this.state;
        const panesClasses = (value) => cn({ 'tab-pane': true, show: toggledPane === value, active: toggledPane === value });
        return (
            <div className="tab-content" id="nav-tabContent">

                <div className={panesClasses('list-guide')} id="list-guide" role="tabpanel" aria-labelledby="list-guide-list">
                    <h3>Общий вид</h3>
                    <div className="video__descript guide__rows row animated fadeIn ">
                        <video className="col-12 col-lg-8 text-left m-0 p-0" width="100%" height="auto" autoPlay muted>
                            <source src="https://www.dropbox.com/s/ntzvsxmo7q8py7x/Kverneland%20RN%20On%20Land%20%282%29.mp4?dl=1" type='video/mp4' codecs="avc1.42E01E, mp4a.40.2" />
                        </video>
                        <div className="info__text col col-lg-4 pt-3 ">
                            <h3 className="text-center">Kverneland RN100 Onland</h3>
                            <p className="text-justify">Модификация плуга RN100 дающая возможность работать трактору в борозде и по-полю. 
                            Эта модификация делает плуг еще более универсальным, в следствии чего не нужно учитывать ширину колес трактора, наличия спарки или гусениц.
                            Ключевая особенность такой системы заключается в сведении к минимуму уплотнения уже вспаханного поля.
                            <br /><br />Все плуги RN, которые произведены после 1 июля 2016 года могут быть дооснащены системой «OnLand».
                            </p>
                        </div>
                    </div>
                </div>

                <div className={panesClasses('list-steel')} id="list-steel" role="tabpanel" aria-labelledby="list-steel-list">
                    <h3>Закалка стали</h3>
                    <div className="guide__rows row animated fadeIn">
                        <p className="text__content text-sm-justify col-11 col-md-6 "> Kverneland имеет две лаборатории для изучения, анализа, разработки и контроля легированной стали (как правило, насыщенной бором)
                        и инструментальной углеродистой стали, которые используются при производстве плугов. Процесс закалки является сложным и выполняется пошагово, он называется карбюризацией - насыщение углеродом
                        поверхности отвала для создания высокой жёсткости при одновременном сохранении гибкости стали в сердцевине материалла. Эта технология позволяет значительно повысить ресурс отвалов и их стойкость к поломке при пиковых нагрузках.
                        <br /><br />
                        Рама - закаляется индукционным методом, благодаря чему ее прочностные характеристики повышаются в 3 раза! Ключевым преимуществом такого подхода стало отсутствие потребности в наращивании
                        толщины металла и увеличения поперечного сечения рамы. А значит нужно меньшее тяговое усилие трактора, расход топлива уменьшается, трехточечной навеске нужно меньше усилий для подъема / выглубления плуга.   
                        </p>
                        <div className="img__content col-11 col-md-6 text-center">
                            <img className="img__content" src={rs7} alt="" />
                        </div>
                    </div>
                </div>

                <div className={panesClasses('list-ploughshare')} id="list-ploughshare" role="tabpanel" aria-labelledby="list-ploughshare-list"><h3>Выбор корпусов</h3>
                    <div className="guide__rows row animated fadeIn">
                        <ul className="text__content text-sm-justify col-11 col-md-6 ">Плуги RN100 - могут использоваться в любых условиях. Это достигается благодаря возможности переукомлпектации их разными корпусами.
                        Каждый корпус имеет свои особенности применения и целевое назначение.
                        
                        <li><strong>Корпус №9</strong> - универсальный корпус. В его задачи входит глубокая пахота на тяжелых почвах с полным оборотом пласта.
                        <br /><strong>Глубина: 18 – 35 см</strong>
                        <br/><strong>Ширина борозды: 35 – 50 см</strong>
                        </li>
                        <li><strong>Корпус №30</strong> - с "перьевым отвалом". В его задачи входит пахота в условиях липких и каменистых почв с дополнительным крошением пласта. Оставляет широкое дно борозды.
                        <br /><strong>Глубина: 20 – 35 см</strong>
                        <br/><strong>Ширина борозды: 30 – 55 см</strong>
                        </li>
                        <li><strong>Корпус №14</strong> - "для липких почв". В его задачи входит пахота в условиях липких почв без камней и абразивов.Оставляет широкое дно борозды.
                        <br /><strong>Глубина: 18 – 35 см</strong>
                        <br/><strong>Ширина борозды: 30 – 55 см</strong>
                        </li>
                        </ul>
                        <div className="img__content col-11 col-md-6 text-center">
                        <Carousel />
                        </div>
                    </div>
                </div>
                <div className={panesClasses('list-safety')} id="list-safety" role="tabpanel" aria-labelledby="list-settings-list"><h3>Универсальность Onland</h3>
                    <div className="guide__rows row animated fadeIn">
                        <p className="text__content text-sm-justify col-11 col-md-6 ">Мощные тракторы часто имеют широкие/спаренные колеса или гусеницы.
                        Система Onland сведет к минимуму уплотнение уже вспаханного поля за счет гидроцилиндра смещющего рабочую часть плуга в сторону.
                        Т.к. это модификация RN100 дополнительно плуг получил такие усовершенстовавания:
                        <ul className="text__content text-sm-justify col-11 col-md-6 ">                        
                        <li>Башня навески доступна теперь с Кат IV.</li>
                        <li>Более плавный переворот плуга благодаря новой системе оборотных циллиндров.</li>
                        <li>Новые пластиковые направляющие между башней навески и рамой – нет надобности смазки контактной поверхности.</li>
                        <li>Более простая и удобная настройка угла опорно-транспортного колеса относительно рамы (при изменении рабочей ширины).</li>
                        </ul>
                        </p>
                        <div className="img__content col-11 col-md-6 text-center">
                            <img className="img__content" src={onlandSys} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { toggledButton, } = this.state;
        const buttonClasses = (value) => cn({ intro__button: true, 'list-group-item': true, active: toggledButton === value });

        return (
            <div className="intro container mt-5" id="intro" name="scroll-to-element">
                <ul className="list-group list-group-horizontal-sm mb-3">
                    <li className={buttonClasses('list-guide-list')} id="list-guide-list" data-toggle="list-guide" onClick={this.handleChangePane}>Обзор</li>
                    <li className={buttonClasses('list-steel-list')} id="list-steel-list" data-toggle="list-steel" onClick={this.handleChangePane}>Закалка стали</li>
                    <li className={buttonClasses('list-ploughshare-list')} id="list-ploughshare-list" data-toggle="list-ploughshare" onClick={this.handleChangePane}>Выбор корпусов</li>
                    <li className={buttonClasses('list-safety-list')} id="list-safety-list" data-toggle="list-safety" onClick={this.handleChangePane}>Универсальность</li>
                </ul>
                {this.props.mode === 'rn100' ? this.renderRn100() : this.renderOnland()}
            </div>
        );
    }
}