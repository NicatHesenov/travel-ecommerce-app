import { Tabs, Form, DatePicker, TimePicker, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const BookingWidget = () => {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px)",
        padding: "20px",
      }}
    >
      <Tabs
        defaultActiveKey="1"
        items={[
          { label: "Public Tours", key: "1" },
          { label: "Private Tours", key: "2" },
        ]}
      />

      <Form layout="inline">
        <Form.Item name="date">
          <DatePicker placeholder="Choose Date" bordered={false} />
        </Form.Item>

        <Form.Item name="time">
          <TimePicker
            placeholder="Choose Time"
            format="HH:mm"
            bordered={false}
          />
        </Form.Item>

        <Form.Item name="tour">
          <Select placeholder="Tour" bordered={false} style={{ width: 150 }}>
            <Select.Option value="lucca">Lucca Bike Tour</Select.Option>
            <Select.Option value="Book">Book a bike</Select.Option>
            <Select.Option value="Tour">Tour in the outside</Select.Option>
            <Select.Option value="wine">Wine Tasting in Tuscany</Select.Option>
            <Select.Option value="Cinque">Cinque Terre Tour</Select.Option>
            <Select.Option value="Siena">Siena and Surroundings</Select.Option>
            <Select.Option value="Pisa">Pisa & Lucca</Select.Option>
            <Select.Option value="Italy">Italy Special Trips</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="transportation">
          <Select
            placeholder="Transportation"
            bordered={false}
            style={{ width: 100 }}
          >
            <Select.Option value="Minivan">Minivan and Bus</Select.Option>
            <Select.Option value="Transfers">Transfers & NCC</Select.Option>
            <Select.Option value="Luxury">Luxury Experience</Select.Option>
          </Select>
        </Form.Item>

        <Button type="primary" icon={<SearchOutlined />} size="large" />
      </Form>
    </div>
  );
};

export default BookingWidget;
