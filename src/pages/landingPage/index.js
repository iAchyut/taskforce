import React from "react";
import styles from "./landingPage.module.css";
import { blue } from "@ant-design/colors";
import { DingdingOutlined } from "@ant-design/icons";
import { Button ,Space} from "antd";
import todo from "../../assets/todo.jpg";
import todo2 from "../../assets/todo2.jpg";
import { Col, Row } from "antd";

const LandingPage = () => {
  return (
    <>
      <section
        style={{
          height: "5rem",
          backgroundColor: blue[0],
          //borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h2>TaskForce</h2>
            <DingdingOutlined style={{ fontSize: 32, marginTop: -5 }} />
          </div>
          <Button>Sign In</Button>
        </div>
      </section>
      <section>
        <Row justify="space-evenly">
          <Col span={8}>
            <img style={{ height: 400, width: 400 }} src={todo} alt="todo" />
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Rubik",
              fontSize: "2.5rem",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            <div style={{display:"flex", flexDirection:"column"}}>
              <h1>Let's take TODO list to a whole different level</h1>
              <Space wrap style={{justifyContent:"center"}}>
                <Button type="primary" size={"large"}>
                  Sign Up
                </Button>
                <Button size={"large"}>Learn More</Button>
              </Space>
            </div>
          </Col>
          <Col span={8}>
            <img style={{ height: 400, width: 500 }} src={todo2} alt="todo2" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default LandingPage;
