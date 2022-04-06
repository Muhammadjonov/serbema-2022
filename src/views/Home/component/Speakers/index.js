import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useT } from "../../../../utils/useT";
import HonorableCard from "./component/HonorableCard";
import KeynoteCard from "./component/KeynoteCard";
import "./style.scss"
import HonorableSpeakersData from "./speakersData/HonorableSpeakersData.json";
import KeynoteSpeakersData from "./speakersData/KeynoteSpeakersData.json";

function Speakers() {
  const { t } = useT();
  return (
    <div className="speakers">
      <SectionTitle id="honorable" title={t("honorableSpeakers")} />
      <HonorableCard slideList={HonorableSpeakersData} />
      <SectionTitle id="keynote" title={t("keynoteSpeakers")} />
      <KeynoteCard slideList={KeynoteSpeakersData} />
    </div>
  );
}

export default Speakers;
