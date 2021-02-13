import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import populateCart from "./functions/populateCart";
import { useAppContext } from "./context/state";
import { useEffect } from "react";

export default function Home() {
  const { cartitems } = useAppContext();

  populateCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Giovannis!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/cart">
        <a>Cart</a>
      </Link>

      <section>
        <h1>Giovanni's Restaurant</h1>
        <a href="">Menus</a>
        <Link href="/order">
          <a>Order</a>
        </Link>
        <Link href="/reservations">
          <a>Reservations</a>
        </Link>
        <p>Items in Cart: {cartitems.length}</p>

        <div></div>
      </section>

      <style jsx>{`
        .order-item {
          border: 1px solid black;
          width: 50%;
          margin-top: 100px;
        }
         {
          /* .order-item:hover {
          cursor: pointer;
        } */
        }
      `}</style>
    </div>
  );
}
