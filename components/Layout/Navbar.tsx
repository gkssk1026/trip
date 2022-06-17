import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import { UrlObject } from "url";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  const router = useRouter();

  const handleTabChange = (e: {
    preventDefault: () => void;
    target: { href: string | UrlObject };
  }) => {
    console.log(e);
    e.preventDefault();
    router.push(e.target.href);
  };

  return (
    <Tab
      component="a"
      onClick={(event: never) => {
        handleTabChange(event);
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const router = useRouter();
  const pages = [
    "/hotdeal",
    "/airline",
    "/ticket",
    "/domestic",
    "/hocance",
    "/rentacar",
  ];
  const [value, setValue] = React.useState(pages.indexOf(router.route));

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: React.SetStateAction<number>
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={(e, v) => handleChange(e, v)}
        centered
        aria-label="nav tabs example"
      >
        <LinkTab label="초특가뽑기" href={pages[0]} />
        <LinkTab label="항공권" href={pages[1]} />
        <LinkTab label="투어.티켓" href={pages[2]} />
        <LinkTab label="국내숙소" href={pages[3]} />
        <LinkTab label="호캉스" href={pages[4]} />
        <LinkTab label="렌터카" href={pages[5]} />
      </Tabs>
    </Box>
  );
}
