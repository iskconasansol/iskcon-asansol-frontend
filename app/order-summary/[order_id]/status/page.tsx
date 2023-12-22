'use client';

import { useParams } from 'next/navigation';

const OrderSummaryPage = () => {
  const params = useParams();
  const order_id = params.order_id;

  return (
    <main>
      <section className="container py-16">
        <h1>Order Summary</h1>
        <p>Order ID: {order_id}</p>
      </section>
    </main>
  );
};

export default OrderSummaryPage;
