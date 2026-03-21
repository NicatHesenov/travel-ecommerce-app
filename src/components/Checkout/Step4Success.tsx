import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Step4Success() {
  const navigate = useNavigate();

  return (
    <div className="success">
      <h2>Your Order is Completed 🎉</h2>

      <p>You will receive your tickets via email.</p>

      <Button type="primary" onClick={() => navigate("/")}>
        Back to homepage
      </Button>
    </div>
  );
}

export default Step4Success;
