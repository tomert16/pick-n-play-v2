import SportInfo from "@/src/components/screens/sports/SportInfo";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function SportInfoPage() {
  return (
    <>
      <Head>
        <title> Sport | Pick N' Play</title>
      </Head>
      <SportInfo />
    </>
  );
}

SportInfoPage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
