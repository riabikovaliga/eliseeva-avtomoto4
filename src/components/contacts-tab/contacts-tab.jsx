import React from 'react';
import ContactsMap from '../contacts-map/contacts-map';

const ContactsTab = () => {
  return (
    <section className="detailed-info__contacts contacts">
      <h3 className="reviews__heading visually-hidden">Контакты</h3>
      <div className="contacts__description">
        <h3 className="contacts__heading">Адрес</h3>
        <p className="contacts__contact contacts__contact--address">Санкт-Петербург,<br/> набережная реки Карповки, дом 5</p>
        <h3 className="contacts__heading">Режим работы</h3>
        <p className="contacts__contact contacts__contact--work-hours">Ежедневно, с 10:00 до 21:00</p>
        <h3 className="contacts__heading">Телефон</h3>
        <a className="contacts__contact contacts__contact--tel" href="tel:88003335599">8 (800) 333-55-99</a>
        <h3 className="contacts__heading">E-mail</h3>
        <a className="contacts__contact contacts__contact--email" href="info@avto-moto.ru">info@avto-moto.ru</a>
      </div>
      <div className="contacts__map">
        <ContactsMap />
      </div>
    </section>
  )
}

export default ContactsTab;