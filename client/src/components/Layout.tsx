import { Container } from "@material-ui/core";
import { Footer } from "./Footer";
import Navbar from "./Navbar/Navbar";

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
        <div>{children}</div>
      <Footer />
    </>
  );
};
