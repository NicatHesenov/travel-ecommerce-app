import { Tabs, Form, DatePicker, TimePicker, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./bookingWidget.scss";
const tourOptions = [
  { value: "lucca", label: "Lucca Bike Tour" },
  { value: "book", label: "Book a bike" },
  { value: "tour", label: "Tour in the outside" },
  { value: "wine", label: "Wine Tasting in Tuscany" },
  { value: "cinque", label: "Cinque Terre Tour" },
  { value: "siena", label: "Siena and Surroundings" },
  { value: "pisa", label: "Pisa & Lucca" },
  { value: "italy", label: "Italy Special Trips" },
];

const transportOptions = [
  { value: "Minivan", label: "Minivan and Bus" },
  { value: "Transfers", label: "Transfers & NCC" },
  { value: "Luxury", label: "Luxury Experience" },
];
const BookingWidget = () => {
  return (
    <div className="bookingWidget">
      <Tabs
        defaultActiveKey="1"
        items={[
          { label: "Public Tours", key: "1" },
          { label: "Private Tours", key: "2" },
        ]}
      />

      <Form layout="inline">
        <Form.Item name="date">
          <DatePicker placeholder="Choose Date" variant="borderless" />
        </Form.Item>

        <Form.Item name="time">
          <TimePicker
            placeholder="Choose Time"
            format="HH:mm"
            variant="borderless"
          />
        </Form.Item>

        <Form.Item name="tour">
          <Select
            placeholder="Tour"
            variant="borderless"
            style={{ width: 150 }}
            options={tourOptions}
          />
        </Form.Item>
        <Form.Item name="transportation">
          <Select
            placeholder="Transportation"
            variant="borderless"
            style={{ width: 100 }}
            options={transportOptions}
          />
        </Form.Item>

        <Button type="primary" icon={<SearchOutlined />} size="large" />
      </Form>
    </div>
  );
};

export default BookingWidget;
