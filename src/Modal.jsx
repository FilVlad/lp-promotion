import React from 'react';
import cn from 'classnames';

export default class Modal extends React.Component {

    render() {
        const { stage } = this.props;
        const formClasses = cn({
            modal: true,
            active: stage === 'fillingForm',
        });
        return (
            <div className={formClasses}>

                <div className="modal__overlay" onClick={this.props.closeModal('disabled')}></div>
                <div className="modal__body container p-2 py-3">
                    <div className="row text-center my-2">
                        <div className="col-12"><h3>Закажите на просчет плуг Kverneland</h3></div>
                        <p className="col-12">Заполните форму и нажмите кнопку "Отправить на просчет", мы с Вами свяжемся в ближайшее время для уточнения деталей.</p>
                    </div>

                    <div className="row px-3 pb-3">
                        <form className="col-12" action="mail.php" method="POST">
                            <input className="col-6 mb-2" type="text" name="client_name" placeholder="Имя" required />
                            <input className="col-6" type="text" name="client_district" placeholder="Область" required />
                            <input className="col-12 mb-2" type="text" name="client_phone" placeholder="Телефон" required />
                            <input className="col-12 mb-2" type="email" name="client_mail" placeholder="@-mail" />

                            <div className="col-12 mx-0 my-2 px-0">
                                <label className="col-12">Выберите плуг:</label>
                                <select className="col-6 col-sm-4 mr-sm-3" name="client_plow">
                                    <option value="RN100">RN100</option>
                                    <option value="Onland">Onland</option>
                                    <input type='submit' name='submit'/>
                                </select>
                                <select className="col-6 col-sm-2 mr-sm-3" name="client_numCorps">
                                    <option value="8">8</option>
                                    <option value="8+1">8+1</option>
                                    <input type='submit' name='submit'/>
                                </select>
                                <select className="col-sm-5" name="client_typeCorps">
                                    <option value="Перьевой отвал">Перьевой отвал</option>
                                    <option value="Универсальный отвал">Универсальный отвал</option>
                                    <option value="Полимерный отвал">Полимерный отвал</option>
                                    <input type='submit' name='submit'/>
                                </select>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="client_option1" value="предплужник" />
                                <label class="form-check-label" for="inlineCheckbox1">Кукурузные предплужники</label>
                            </div>
                            <div class="form-check form-check-inline ml-2">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="client_option2" value="каток" />
                                <label class="form-check-label" for="inlineCheckbox2">Каток</label>
                            </div>



                            <button className="btn btn-danger btn-block" type='submit'>Отправить на просчет</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}