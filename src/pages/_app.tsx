import { ReactElement, ReactNode, useEffect } from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import { createClient } from "@/utils/supabase/client";
import {
  Session,
  SessionContextProvider,
  useSession,
} from "@supabase/auth-helpers-react";
import { supabaseClient } from "../lib/supabaseClient";
import { NextPage } from "next";
import Spinner from "../shared/Loading/Spinner";
import { SpecificGameProvider } from "../components/screens/home/SpecificGameContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

const queryClient = new QueryClient();

export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ initialSession: Session }>) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();
  const session = useSession();

  return (
    <SpecificGameProvider>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </SpecificGameProvider>
  );
}
