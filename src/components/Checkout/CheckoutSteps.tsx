import { useState } from "react";
import { Steps } from "antd";
import { useLocation } from "react-router-dom";

import Step1Booking from "./Step1Booking";
import Step2Details from "./Step2Details";
import Step3Payment from "./Step3Payment";
import Step4Success from "./Step4Success";

import TicketSummary from "./TicketSummary";

import type { CheckoutFormData } from "../../types/Tour";
import type Tour from "../../types/Tour";

interface LocationState {
  data: CheckoutFormData;
  tour: Tour;
}

function CheckoutSteps() {
  const location = useLocation();
  const state = location.state as LocationState;
  const tour = state?.tour;

  const [current, setCurrent] = useState<number>(0);

  const [formData, setFormData] = useState<CheckoutFormData>({
    tickets: {
      adult: 1,
      child: 0,
      infant: 0,
    },
  });

  const next = (data: Partial<CheckoutFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrent((prev) => prev + 1);
  };

  const prev = () => setCurrent((prev) => prev - 1);

  const steps = [
    {
      title: "Booking Details",
      content: <Step1Booking onNext={next} data={formData} />,
    },
    {
      title: "Your Details",
      content: <Step2Details onNext={next} onPrev={prev} data={formData} />,
    },
    {
      title: "Payment",
      content: (
        <Step3Payment onNext={next} onPrev={prev} data={formData} tour={tour} />
      ),
    },
    {
      title: "Completed",
      content: <Step4Success />,
    },
  ];

  return (
    <div className="checkoutSteps-page">
      <Steps current={current} items={steps.map((s) => ({ title: s.title }))} />

      <div className="checkout-layout">
        <div className="checkout-form">{steps[current].content}</div>

        <TicketSummary data={formData} />
      </div>
    </div>
  );
}

export default CheckoutSteps;
