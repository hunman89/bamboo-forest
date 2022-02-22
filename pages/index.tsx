import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bamboo forest</title>
      </Head>

      <div className="py-10 space-y-2 ">
        <h1 className=" text-3xl text-center text-green-700">대나무 숲</h1>
        <div className="flex items-center justify-between h-40 sm:h-80 px-5 mx-auto sm:max-w-lg  bg-green-300">
          <div className="block"></div>
          <p className="block text-xl font-medium">못해먹겠다!</p>
          <button className="block text-xl font-medium">▶︎</button>
        </div>
        <div className="flex pt-10 items-center justify-center">
          <form>
            <input
              type="text"
              className=" border-2 rounded-md focus:border-green-600 focus:outline-none text-xl"
            ></input>
            <button className="border-2 rounded-md px-2 shadow-sm hover:bg-green-300 text-xl font-medium">
              외치기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
