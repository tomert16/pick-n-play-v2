import Account from "@/src/components/screens/Account";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Pick N' Play | Account Management</title>
      </Head>
      <Account />
    </>
  );
}

AccountPage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
