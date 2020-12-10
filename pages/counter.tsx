import Head from "next/head";
import { Dispatch } from "redux";
import { State } from "../modules";
import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "../modules/counter";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Counter = () => {
  const dispatch: Dispatch = useDispatch();
  const counter: number = useSelector(
    (state: State) => state?.counter?.counter || 0
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{counter}</p>
        <button
          onClick={() => {
            dispatch(CounterActions.PlusAction());
          }}
        >
          plus
        </button>
        <button
          onClick={() => {
            dispatch(CounterActions.MinusAction());
          }}
        >
          minus
        </button>
        <p>
          <Link href="/">
            <a>Homeへもどる</a>
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Counter;
