import React from 'react';

export default class TechData extends React.Component {  

    renderRn100() {
        return(
            <div class="row text-center">
                <div class="tech__cell col-6 col-md-4"><p> 8 / 8+1</p> <span>Количество корпусов, шт</span></div>
                <div class="tech__cell col-6 col-md-4"><p>200x200x8</p><span>Рама, мм</span></div>
                <div class="tech__cell col-6 col-md-4"><p>35-45</p> <span>Ширина захвата корпуса, см </span></div>
                <div class="tech__cell col-6 col-md-4"><p>80</p> <span>Высота корпуса, см</span></div>
                <div class="tech__cell col-6 col-md-4"><p>3300</p> <span>Масса, кг</span></div>
                <div class="tech__cell col-6 col-md-4"><p>300+</p> <span>Минимальная мощность трактора, л.с.</span></div>
            </div>
        );
    }

    renderOnland() {
        return(
            <div class="row text-center">
                <div class="tech__cell col-6 col-md-4"><p> 8 / 8+1</p> <span>Количество корпусов, шт</span></div>
                <div class="tech__cell col-6 col-md-4"><p>200x200x8</p><span>Рама, мм</span></div>
                <div class="tech__cell col-6 col-md-4"><p>35-45</p> <span>Ширина захвата корпуса, см </span></div>
                <div class="tech__cell col-6 col-md-4"><p>80</p> <span>Высота корпуса, см</span></div>
                <div class="tech__cell col-6 col-md-4"><p>3400</p> <span>Масса, кг</span></div>
                <div class="tech__cell col-6 col-md-4"><p>330+</p> <span>Минимальная мощность трактора, л.с.</span></div>
            </div> 
        );
    }

    render() {
        return (
            <div class="tech__table container my-5  animated fadeIn text-center" id="tech__table" >
            <h3 class='my-5'>Характеристики плуга</h3>
            {this.props.mode === 'rn100' ? this.renderRn100() : this.renderOnland()}
            </div>
        );
    }
}