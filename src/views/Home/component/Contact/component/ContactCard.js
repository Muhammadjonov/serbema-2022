import React from "react";
import { CompassOutlined, MailOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useT } from "../../../../../utils/useT";
function ContactCard() {
  const { t } = useT();

  return (
    <div className="contact-card">
      <Row gutter={[50, 50]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="card-item">
            <div className="icon-box">
              <CompassOutlined style={{ fontSize: "50px", color: "#009900" }} />
            </div>
            <div className="text-box">
              <div className="title">{t("address")}</div>
              <div className="description">
                {t("addressContent")}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="card-item">
            <div className="icon-box">
              <MailOutlined style={{ fontSize: "50px", color: "#009900" }} />
            </div>
            <div className="text-box">
              <div className="title">{t("contact")}</div>
              <div className="description">
                <ul>
                  <li>
                    Tel: <a href="tel:+99894 671 17 76">+99894 671 17 76</a>
                  </li>
                  <li >
                    <a style={{ paddingLeft: "33px", display: "inline-block" }} href="tel:+99871 278 50 86">+99871 278 50 86</a>
                  </li>
                </ul>
                E-mail: <a style={{ paddingLeft: "1px", display: "inline-block" }} href="mailto:serbemaconference@gmail.com">
                  serbemaconference@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactCard;
