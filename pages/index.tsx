import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bamboo forest</title>
      </Head>

      <h1 className=" text-3xl text-center text-green-700">
        Welome to Forest!
      </h1>
    </div>
  );
};

export default Home;
