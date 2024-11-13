import CompleteProfile from "@/src/components/screens/CompleteProfile";
import InitialNavLayout from "@/src/layouts/InitialNavLayout";
import Head from "next/head";
// import { getUnauthProps } from '@/lib/auth';
import { ReactElement } from "react";

export default function CompleteProfilePage() {
  return (
    <>
      <Head>
        <title>Sign Up | Pick N' Play</title>
      </Head>
      <CompleteProfile />
    </>
  );
}

// export const getServerSideProps = getUnauthProps;

CompleteProfilePage.getLayout = (page: ReactElement) => {
  return <InitialNavLayout>{page}</InitialNavLayout>;
};
