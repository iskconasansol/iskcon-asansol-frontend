import QrScanner from "@/components/qr-scanner";

const AdminPage = () => {
  return (
    <section className="mx-auto p-4">
      <QrScanner className="w-full md:w-[400px] h-[500px]" />
    </section>
  );
};

export default AdminPage;
