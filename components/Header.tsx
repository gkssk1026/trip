import type { NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Main: NextPage = () => {
  return (
    <div className="header">
      <Link href="/">
        <h1>
          <a>myrealtrip</a>
        </h1>
      </Link>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="도시나 상품을 검색해보세요."
          variant="outlined"
        />
      </Box>
      <ul>
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </ul>
      <ul>
        <Link href="/join">
          <a>회원가입</a>
        </Link>
      </ul>
    </div>
  );
};
export default Main;
