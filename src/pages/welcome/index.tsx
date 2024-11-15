import Home from "@/src/components/screens/home/Home";
import Welcome from "@/src/components/screens/Welcome";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function WelcomePage() {
  return (
    <>
      <Head>
        <title>Pick N' Play</title>
      </Head>
      <Welcome />
    </>
  );
}

WelcomePage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
