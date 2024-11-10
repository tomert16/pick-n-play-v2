import Signup from "@/src/components/screens/Signup";
import InitialNavLayout from "@/src/layouts/InitialNavLayout";
import Head from "next/head";
// import { getUnauthProps } from '@/lib/auth';
import { ReactElement } from "react";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Pick N' Play | Sign Up</title>
      </Head>
      <Signup />
    </>
  );
}

// export const getServerSideProps = getUnauthProps;

SignupPage.getLayout = (page: ReactElement) => {
  return <InitialNavLayout>{page}</InitialNavLayout>;
};
