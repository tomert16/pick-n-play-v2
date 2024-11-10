import React, { ReactNode } from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import StickyHeader from "../shared/StickyHeader";
import NavBar from "../components/NavBar";

interface DefaultNavLayoutProps {
  children: ReactNode;
  showGap?: boolean;
  showFooter?: boolean;
}

const DashboardNavLayout = ({
  showGap = true,
  showFooter = true,
  children,
}: DefaultNavLayoutProps) => {
  return (
    <>
      <StickyHeader>
        <NavBar />
      </StickyHeader>
      {children}
    </>
  );
};

export default DashboardNavLayout;
