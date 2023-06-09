import ClientOnly from "@/components/ClientOnly";
import Example from "@/components/Example";
import client from "@/utils/apollo-client";
import { gql } from "@apollo/client";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Fullstack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>npx create-fullstack</h1>
        <p>GraphQL Clientside Example:</p>
        <ClientOnly>
          <Example />
        </ClientOnly>
      </div>
    </>
  );
}
