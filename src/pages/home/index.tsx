import Home from "@/src/components/screens/Home";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pick N' Play</title>
      </Head>
      <Home />
    </>
  );
}

HomePage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
