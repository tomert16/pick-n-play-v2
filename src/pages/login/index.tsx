import Login from "@/src/components/screens/Login";
import InitialNavLayout from "@/src/layouts/InitialNavLayout";
import Head from "next/head";
// import { getUnauthProps } from '@/lib/auth';
import { ReactElement } from "react";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Pick N' Play | Login</title>
      </Head>
      <Login />
    </>
  );
}

// export const getServerSideProps = getUnauthProps;

LoginPage.getLayout = (page: ReactElement) => {
  return <InitialNavLayout>{page}</InitialNavLayout>;
};
