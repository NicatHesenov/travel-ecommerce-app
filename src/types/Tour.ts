export default interface Tour {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  duration: string;
  groupSize: number;
  description: string;
  gallery: string[];
  priceChild?: number;
}

export interface TicketData {
  adult: number;
  child: number;
  infant: number;
}

export interface CheckoutFormData {
  date?: string;
  tickets?: TicketData;
  fullName?: string;
  email?: string;
  phone?: string;
  paymentMethod?: string;
}

export interface StepProps {
  onNext: (data: Partial<CheckoutFormData>) => void;
  onPrev?: () => void;
  data: CheckoutFormData;
}
