import React, {useState} from 'react';
import classnames from 'classnames';
import FeaturesTab from '../features-tab/features-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import ContactsTab from '../contacts-tab/contacts-tab';
import {TabButtonType,} from '../../const';

const DetailedInfo = () => {
  const [activeTab, setActiveTab] = useState({
    tab: `detailed-features`
  })

  const renderDetailedInfo = () => {
    switch (activeTab.tab) {
      case TabButtonType.DETAILED_FEATURES: 
        return <FeaturesTab />;
      case TabButtonType.REVIEWS: 
        return <ReviewsTab />;
      case TabButtonType.CONTACTS:
        return <ContactsTab />
      default:
        return <FeaturesTab />;
    }
  }

  const handleTabButtonClick = (evt) => {
    setActiveTab({
      ...activeTab,
      tab: evt.target.name
    })
  }

  const getTabButtonClass = (tabButtonType) => {
    return classnames(
      `detailed-info__tab`,
      {"detailed-info__tab--active": tabButtonType === activeTab.tab}
    )
  }

  return (
    <section className="main__detailed-info detailed-info">
      <h2 className="detailed-info__heading visually-hidden">Детальная информация</h2>
      <div className="detailed-info__tabs">
        <button 
          className={getTabButtonClass(TabButtonType.DETAILED_FEATURES)}
          name="detailed-features"
          onClick={handleTabButtonClick}
        >
          Характеристики
        </button>
        <button 
          className={getTabButtonClass(TabButtonType.REVIEWS)}
          name="reviews"
          onClick={handleTabButtonClick}
        >
          Отзывы
        </button>
        <button 
          className={getTabButtonClass(TabButtonType.CONTACTS)}
          name="contacts"
          onClick={handleTabButtonClick}
        >
          Контакты
        </button>
      </div>
      {renderDetailedInfo()}
    </section>
  )
}

export default DetailedInfo;