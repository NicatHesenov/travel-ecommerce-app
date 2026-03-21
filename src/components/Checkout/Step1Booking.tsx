import { Form, InputNumber, DatePicker, Button } from "antd";
import { Dayjs } from "dayjs";
import type { StepProps } from "../../types/Tour";

interface BookingValues {
  date: Dayjs;
  adult: number;
  child: number;
  infant: number;
}

function Step1Booking({ onNext }: StepProps) {
  const submit = (values: BookingValues) => {
    onNext({
      date: values.date.format("YYYY-MM-DD"),
      tickets: {
        adult: values.adult,
        child: values.child,
        infant: values.infant,
      },
    });
  };

  return (
    <Form layout="vertical" onFinish={submit}>
      <Form.Item label="Select Date" name="date" rules={[{ required: true }]}>
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Adult" name="adult" initialValue={1}>
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item label="Child" name="child" initialValue={0}>
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item label="Infant" name="infant" initialValue={0}>
        <InputNumber min={0} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
}

export default Step1Booking;
