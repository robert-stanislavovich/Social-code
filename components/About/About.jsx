import React from 'react';
import img from '../../img/2342.jpg'
import s from './About.module.css'



const About = (props) => {
    return <div className={s.about}>
        <div><img className={s.img} src={img}/></div>
        <div>
            <div className={s.title}>
                О проекте
            </div>
            <div>
                <div className={s.mainText}>
                Привет, меня зовут Роберт. Если ты это читаешь, скорее всего ты ищешь в свою команду Junior ReactJS
                разработчика.
                Данный проект является результатом моего обучение и местом где я применяю новые полученные знания.
                Абсолютно весь проект написан с использованием связки ReactJS и Redux.

                <br/>
                <br/>


                Структура:
                </div>
                    <br/>
                <div>
                <span style={{fontWeight: "bold", fontSize: "19px"}}>Профиль.</span> В профиле реализована возможность смены аватарки, статуса и информации о себе;
                Валидация ошибок при введении не правильных данных; Все изменения данных происходят с помощью запросов
                GET, POST, PUT, DELETE.
                    <br/>
                    <br/>
                    <span style={{fontWeight: "bold", fontSize: "19px"}}>Пользователи.</span> Демонстрирует вывод большого количества объектов с использованием пагинации;
                Так же, можно добавить в друзья(подписаться) и удалить из друзей любого пользователя с помощью запросов
                POST, DELETE.
                    <br/>
                    <br/>
                <span style={{fontWeight: "bold", fontSize: "19px"}}>Доставка еды.</span> Конструктор пиццы для доставки на дом с использованием ReactJS и Redux.
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


    </div>

}

export default About;