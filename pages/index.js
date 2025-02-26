import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Chain from "../components/chain";
import { AdBanner } from "../components/AdBanner";
import { generateChainData } from "../utils/fetch";
import { useFilteredChains } from '../hooks/useFilteredChains';

export async function getStaticProps() {
  const sortedChains = await generateChainData();

  return {
    props: {
      chains: sortedChains,
      // messages: (await import(`../translations/${locale}.json`)).default,
    },
    revalidate: 3600,
  };
}

function Home({ chains }) {
  const { chainName, setChainName, finalChains } = useFilteredChains(chains);

  const [end, setEnd] = React.useState(15);

  return (
    <>
      <Head>
        <title>Celo RPC List</title>
        <meta
          name="description"
          content="Celo RPC List is a specialized tool for Celo blockchain networks. Use the information to connect your wallets and Web3 middleware providers to Celo Mainnet and its testnets (Alfajores and Baklava). Find the best RPC to connect to the Celo blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout chainName={chainName} setChainName={setChainName}>
        <React.Suspense fallback={<div className="h-screen"></div>}>
          <div className="dark:text-[#B3B3B3] text-black grid gap-5 grid-cols-1 place-content-between pb-4 sm:pb-10 sm:grid-cols-[repeat(auto-fit,_calc(50%_-_15px))] 3xl:grid-cols-[repeat(auto-fit,_calc(33%_-_20px))] isolate grid-flow-dense">
            {finalChains.slice(0, 2).map((chain) => {
              return <Chain chain={chain} key={JSON.stringify(chain) + "en"} lang="en" />;
            })}
            <AdBanner />
            {finalChains.slice(2, end).map((chain) => {
              return <Chain chain={chain} key={JSON.stringify(chain) + "en"} lang="en" />;
            })}
          </div>
        </React.Suspense>
        {end - 1 < finalChains.length ? (
          <button
            onClick={() => setEnd(finalChains.length)}
            className="w-full border dark:border-[#171717] border-[#EAEAEA] px-4 py-2 rounded-[50px] mb-auto text-white bg-[#2F80ED] mx-auto"
          >
            Show all
          </button>
        ) : null}
      </Layout>
    </>
  );
}

export default Home;
