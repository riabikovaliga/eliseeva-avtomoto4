import React from 'react';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';

const ContactsMap = () => {
  return (
    <YMaps>
      <div>
        <Map 
          defaultState={{ center: [59.968137, 30.316272], zoom: 14 }}
          width={431}
          height={271}
        >
          <Placemark
            geometry={[59.968137, 30.316272]}
            options={{iconLayout: 'default#image', iconImageHref: '../img/icon-location.svg' }}
           />
           <ZoomControl />
        </Map>
      </div>
    </YMaps>
  )
};

export default ContactsMap;