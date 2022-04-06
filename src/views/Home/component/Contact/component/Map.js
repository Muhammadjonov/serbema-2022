import React from "react";


function YandexMap() {
  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1853635014672!2d69.2063285154225!3d41.28307007927392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b14e0af8e6b%3A0x52e52044138a5461!2s%22Tuproqsifattahlil%22%20DUK!5e0!3m2!1suz!2s!4v1644367098126!5m2!1suz!2s" width="100%" height="300" style={{ border: "0" }} allowFullScreen="true" loading="lazy"></iframe>
      {/* <YMaps>
      <Map
        width={"100%"}
        height={300}
        defaultState={{
          center: [41.27320368314806, 69.20369159621069],
          zoom: 13,
        }}
      >
        <Placemark geometry={[41.28323535583633, 69.20856011314021]} />
      </Map>
    </YMaps> */}
    </>
  );
}

export default YandexMap;
