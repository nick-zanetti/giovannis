import Head from "next/head";
import Topnav from "../components/Navbar";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import populateCart from "../functions/populateCart";
import { useAppContext } from "../context/state";

export default function Home() {
  const { cartitems } = useAppContext();

  populateCart();

  return (
    <div id="home-container">
      <Head>
        <title>Giovannis!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topnav />

      <div className="container">
        <h1>Giovannis </h1>
        <div className="links">
          <Link href="/menu">
            <a>Menu</a>
          </Link>
          <Link href="/order">
            <a>Order Delivery</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        h1,
        a {
          color: white;
          padding: 0 1em;
        }
        h1 {
          font-size: 5em;
        }
        .container {
          height: 75%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
