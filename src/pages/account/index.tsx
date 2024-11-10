import Account from "@/src/components/screens/Account";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pick N' Play | Account Management</title>
      </Head>
      <Account />
    </>
  );
}

HomePage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
