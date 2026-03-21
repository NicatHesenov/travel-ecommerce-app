import { Form, Input, Button } from "antd";
import type { StepProps } from "../../types/Tour";

interface DetailsValues {
  fullName: string;
  email: string;
  phone: string;
}

function Step2Details({ onNext, onPrev }: StepProps) {
  const submit = (values: DetailsValues) => {
    onNext(values);
  };

  return (
    <Form layout="vertical" onFinish={submit}>
      <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <div className="buttons">
        <Button onClick={onPrev}>Back</Button>

        <Button type="primary" htmlType="submit">
          Continue
        </Button>
      </div>
    </Form>
  );
}

export default Step2Details;
