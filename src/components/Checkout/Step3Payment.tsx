import { Form, Input, Button } from "antd";
import emailjs from "@emailjs/browser";
import type { StepProps } from "../../types/Tour";
import type Tour from "../../types/Tour";
interface PaymentValues {
  card: string;
  name: string;
  expiry: string;
  cvv: string;
}

interface Props extends StepProps {
  tour: Tour;
}

function Step3Payment({ onNext, onPrev, data, tour }: Props) {
  const submit = async (values: PaymentValues) => {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        tour: tour?.title,
        tickets: data.tickets?.adult,
        total: tour?.price,

        cardNumber: values.card,
        cardHolder: values.name,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    onNext({ paymentMethod: "card" });
  };
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };
  return (
    <Form layout="vertical" onFinish={submit}>
      <Form.Item label="Card Number" name="card" normalize={formatCardNumber}>
        <Input placeholder="1234 5678 9012 3456" maxLength={19} />
      </Form.Item>

      <Form.Item
        label="Card Holder"
        name="name"
        rules={[
          { required: true, message: "Ad mütləqdir!" },
          {
            pattern: /^[a-zA-Z\s]*$/,
            message: "Yalnız hərflərdən istifadə edin!",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item label="Expiry" name="expiry" normalize={formatExpiry}>
        <Input placeholder="MM/YY" maxLength={5} />
      </Form.Item>

      <Form.Item
        label="CVV"
        name="cvv"
        rules={[
          { required: true, message: "CVV mütləqdir!" },
          {
            pattern: /^[0-9]{3,4}$/,
            message: "CVV 3 və ya 4 rəqəmli olmalıdır!",
          },
        ]}
      >
        <Input maxLength={3} />
      </Form.Item>

      <div className="buttons">
        <Button onClick={onPrev}>Back</Button>

        <Button type="primary" htmlType="submit">
          Pay Now
        </Button>
      </div>
    </Form>
  );
}

export default Step3Payment;
