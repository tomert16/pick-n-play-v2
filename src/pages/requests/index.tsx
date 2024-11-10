import Requests from "@/src/components/screens/Requests";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function RequestPage() {
  return (
    <>
      <Head>
        <title> Request Sport/Field | Pick N' Play</title>
      </Head>
      <Requests />
    </>
  );
}

RequestPage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
