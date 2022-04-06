import React from "react";
import { Steps, Tabs } from "antd";
import SectionTitle from "../../../../components/SectionTitle";
import { useT } from "../../../../utils/useT";
import "./style.scss";
const { TabPane } = Tabs;
const { Step } = Steps;

function Schedule() {
  const { t, lang } = useT();
  return (
    <div className="schedule">
      <SectionTitle id="schedule" title={(lang === "en" ? "the " : "") + t("schedule")} />
      <div className="schedule-box">
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab={(lang === "en" ? "the " : "") + t("schedule")} key="1">
            <div>
              <Steps
                className="right-step-column"
                progressDot
                current={10}
                direction="vertical"
              >
                <Step title="Welcome Tea Registration" description="" />
                <Step title="9:15 AM " description="9:15 AM" />
                <Step title="Keynote Speeches" description="" />
                <Step title="11:30 AM " description="12.04.2022" />
                <Step title="Early Bird Registration  Payment" description="" />
                <Step title="02:30 PM " description="12.04.2022-13.04.2022" />
                <Step title="12.04.2022 " description="12.04.2022-13.04.2022" />
                <Step title="Conference Dates" description="" />
              </Steps>
            </div>

            <Steps progressDot current={10} direction="vertical">
              <Step
                title="8:30 AM"
                description="05.04.2022 (final call for papers)"
              />
              <Step title="Review Results" description="" />
              <Step title="10:00 AM" description="12.04.2022 (final)." />
              <Step title="Notification of Acceptance" description="" />
              <Step title="01:30 PM" description=" 01:30 PM" />
              <Step title="Late Registration  Payment" description="" />
              <Step title="Late Registration  Payment" description="" />
              <Step title="12.04.2022 - 13.04.2022" description="" />
            </Steps>
          </TabPane>
          <TabPane tab="12.04.2022" key="2">
            <p className="venue">
              <h4>
                Venue
              </h4>
              <p>
                Hybrid: In-Person and Virtual Conference
              </p>
              <p>
                The online conference will be held using the Zoom Meetings web conference application. Details on how to
                access the online platforms will be available on the conference web page soon.
              </p>
              <h4>
                Important dates
              </h4>
              <p>
                April 1, 2022   Deadline for registration
              </p>
              <p>
                March 15, 2022   Deadline for paper submission
              </p>
              <p>
                March 31, 2022 Notification of accepted papers
              </p>
              <p>
                April 1, 2022 Distribution of the final announcement and agenda
              </p>
              <p>
                April 12-13, 2022 Conference days
              </p>
              <div className="venue_bottom">
                <p>
                  The official call for registration will be available using our online form on the Conference web site. Papers should be submitted by March 15, 2022 using our online submission system. Acceptance of original manuscripts will be notified to the Corresponding Authors no later than 15 days after submission
                </p>
              </div>
            </p>
          </TabPane>
          <TabPane tab="13.04.2022" key="3">
            Content of tab 3
          </TabPane>
          <TabPane tab="14.04.2022" key="4">
            Content of tab 4
          </TabPane>
        </Tabs>

      </div>
    </div>
  );
}

export default Schedule;
