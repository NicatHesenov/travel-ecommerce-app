import { Card } from "antd";
import type { CheckoutFormData } from "../../types/Tour";
import { useGetToursQuery } from "../../store/Slices/dataSlices";
import { useParams } from "react-router-dom";

interface Props {
  data: CheckoutFormData;
}

function TicketSummary({ data }: Props) {
  const { id } = useParams<{ id: string }>();

  const { data: tours, isLoading, error } = useGetToursQuery();
  const tour = tours?.find((t) => String(t.id) === id);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error || !tour) return <div className="error">Tour not found!</div>;
  const adultPrice = tour?.price ?? 40;
  const childPrice = tour?.priceChild ?? 30;

  const adultTotal = (data.tickets?.adult ?? 0) * adultPrice;
  const childTotal = (data.tickets?.child ?? 0) * childPrice;

  const total = adultTotal + childTotal;

  return (
    <Card className="ticketSummary">
      <img src={tour?.image} alt={tour?.title} />

      <h3>{tour?.title}</h3>

      <div className="row">
        <span>Adult</span>
        <span>{adultTotal}$</span>
      </div>

      <div className="row">
        <span>Child</span>
        <span>{childTotal}$</span>
      </div>

      <div className="total">
        <span>Total</span>
        <span>{total}$</span>
      </div>
    </Card>
  );
}

export default TicketSummary;
