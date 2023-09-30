import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <title>My portafolio</title>
      </Head>
      <Navbar />
      <div>
        <main className="container py-4">{children}</main>
         <Footer />
      </div>
    </>
  );
};

export default Layout;