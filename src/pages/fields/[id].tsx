import FieldInfo from "@/src/components/screens/fields/FieldInfo";
import DashboardNavLayout from "@/src/layouts/DashboardNavLayout";
import Head from "next/head";

import { ReactElement } from "react";

export default function FieldInfoPage() {
  return (
    <>
      <Head>
        <title> Field | Pick N' Play</title>
      </Head>
      <FieldInfo />
    </>
  );
}

FieldInfoPage.getLayout = (page: ReactElement) => {
  return <DashboardNavLayout>{page}</DashboardNavLayout>;
};
