import React, { ReactNode } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import StickyHeader from "../shared/StickyHeader";

interface InitialNavLayoutProps {
  children: ReactNode;
  showGap?: boolean;
  showFooter?: boolean;
}

const InitialNavLayout = ({
  showGap = true,
  showFooter = true,
  children,
}: InitialNavLayoutProps) => {
  return (
    <>
      <StickyHeader>
        <Header />
      </StickyHeader>
      {children}
    </>
  );
};

export default InitialNavLayout;
