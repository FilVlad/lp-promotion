import React from 'react';
import kvg from './assets/images/kverneland.png';

export default class Feedback extends React.Component {
    render() {
        return (
            <div className="feedback container">
            <div className="feedback__row row mx-1">
           
           <div className="feedback__form col-12 col-lg-8">
            <div className="row py-3">              
                <div className="col-12 col-sm-8 text-right"><img src={kvg} /></div>
            </div>

            <form action="mail.php" method="POST">
            <div className="row">
                <div className="mt-2 col-12"><input className="col-12" name="client_name" placeholder="Имя" required/></div>
                <div className="mt-2 col-12"><input className="col-12" name="client_mail" placeholder="@-mail"/></div>
                <div className="mt-2 col-12"><input className="col-12" name="client_phone" placeholder="Телефон" required/></div>   
                <div className="mt-2 col-4"><select className="col-12" name="client_plow"> 
                <option  value="RN100">RN100</option>
                <option  value="Onland">Onland</option>
                </select>
                </div>
                <div className="mt-2 col-4"><select className="col-12" name="client_numCorps"> <option value="8">8</option> <option value="8+1">8+1</option><input type='submit' name='submit'/>
                </select>
                </div>
                <div className="mt-2 col-4"><select className="col-12"> <option>Сплошной отвал</option> <option>Перьевой отвал</option><option>Полимерный отвал</option><input type='submit' name='submit'/></select></div>
                <div className="mt-2 col-12"><input className="col-12" name="client_district" placeholder="Область" required/></div>  
            </div>
            <div className="row py-3">
                <div className="col-5 "></div>
                <div className="col-7 text-right"><button type='submit' className="feedback__btn btn btn-lg btn-danger">Просчитать</button></div>
            </div>
            </form>
            </div>

            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                <h3 className="text-center">Закажите просчет плуга</h3>
                <p className="feedback__txt text-justify mx-1"> Заполните форму и нажмите кнопку "Просчитать", и мы свяжемся с Вами в кратчайшее время. 
                Наш менеджер предоставит Вам полную информацию по комплектации, наличии на складе и цены - конкретно для Вас.</p>
            </div>

            </div>
            </div>
        );
    }
}