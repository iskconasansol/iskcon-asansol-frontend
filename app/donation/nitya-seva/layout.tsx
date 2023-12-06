import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Nitya Seva',
};

const Layout: React.FC<Props> = ({ children }) => {
  return children;
};

export default Layout;
