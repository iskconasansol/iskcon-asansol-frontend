import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund and Cancellation Policy',
};

const RefundAndCancellation = () => {
  return (
    <main className="py-16">
      <div className="p-4 container">
        <h2 className="text-2xl font-bold">Cancellation Policy</h2>

        <p className="mt-4 text-gray-700">
          {`ISKCON (Namhatta Development Trust) currently accepts donations through its Online Payment Gateway
          Facility for various charitable / social purposes. ISKCON (Namhatta Development Trust) also accepts
          the payment of "booking of our Guest House". Any payment made multiple
          times due to error, or any other kind of erroneous payment may be
          brought to the notice of the Site officials and the payment would be
          refunded if the Site official is satisfied with the cause and/or
          reason of error by the payee.`}
        </p>

        <p className="mt-2 text-gray-700">
          All donations and/or payment made through the Site, the acceptance of
          the same is at the sole discretion of the temple management and its
          trustees. The management reserves its sole rights to accept or cancel
          any donation and/or payment without assigning any reason thereof.
        </p>

        <p className="mt-2 text-gray-700">
          Please note that donations once made cannot be charged back, except in
          cases of fraudulent use, once investigation is carried out by
          necessary governmental / Bank authorities and proofs substantiated. In
          case any donation receipt is issued against the same, that shall stand
          cancelled, and any income tax benefit so derived shall be null and
          void.
        </p>
      </div>
    </main>
  );
};

export default RefundAndCancellation;
