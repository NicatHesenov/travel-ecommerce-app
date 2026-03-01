import React from "react";
import {
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
  Button,
  Row,
  Col,
} from "antd";
import "./BookingForm.scss";
import Bike from "../../assets/bike.png";

const BookingForm: React.FC = () => {
  return (
    <div className="booking-section">
      <div className="booking-container">
        <div className="form-wrapper">
          <h2 className="form-title">Book Now Bike</h2>
          <Form layout="vertical" className="custom-form">
            <Row gutter={[24, 12]}>
              <Col xs={24} sm={12}>
                <Form.Item label="Name and Surname" name="name">
                  <Input placeholder="Enter your name and surname" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Email Address" name="email">
                  <Input placeholder="Enter your email address" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Telephone Number" name="phone">
                  <Input placeholder="Enter your telephone number" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Service Type" name="serviceType">
                  <Select
                    placeholder="Select the service types"
                    options={[
                      { label: "Repair", value: "repair" },
                      { label: "Rental", value: "rental" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Date" name="date">
                  <DatePicker
                    style={{ width: "100%" }}
                    placeholder="Select the date"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Time" name="time">
                  <TimePicker
                    style={{ width: "100%" }}
                    placeholder="Select the time"
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className="button-container">
              <Button type="primary" htmlType="submit" className="booking-btn">
                Book Now
              </Button>
            </div>
          </Form>
        </div>

        <div className="bike-img-wrapper">
          <img src={Bike} alt="Bike" className="bike-image" />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
