import { t } from "i18next";
import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Slider from "./component/Slider";
import "./style.scss";
import conferenceChairsData from "./chairsData/conferenceChairsData.json";
import conferenceCoChairs1Data from "./chairsData/conferenceCoChairs1Data.json";
import conferenceCoChairs2Data from "./chairsData/conferenceCoChairs2Data.json";
import conferenceCoChairs3Data from "./chairsData/conferenceCoChairs3Data.json";
import conferenceCoordinatorsData from "./chairsData/conferenceCoordinatorsData.json";


function Commitee() {
  return (
    <div className="commitee">
      <SectionTitle id="commite" title="" />
      <SectionTitle title={t("conferenceChairs")} />
      <Slider slideList={conferenceChairsData} view={4} spaceBetween={70} />
      <SectionTitle id="co-chairs" title={t("conferenceCoChairs")} />
      <Slider slideList={conferenceCoChairs1Data} view={4} spaceBetween={70} />
      <Slider slideList={conferenceCoChairs2Data} view={4} spaceBetween={70} />
      <Slider slideList={conferenceCoChairs3Data} view={4} spaceBetween={70} />
      <SectionTitle id="coordinators" title={t("coordinators")} />
      <Slider slideList={conferenceCoordinatorsData} view={4} spaceBetween={70} />
    </div>
  );
}

export default Commitee;
