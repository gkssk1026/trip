import type { NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Main: NextPage = () => {
  return (
    <div className="header">
      <h1>myrealtrip</h1>
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
      <div className="main">
        <h2>main</h2>
      </div>

      <div className="footer">
        <div>
          상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈 |
          사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호
          2019-서울서초-0260 주소 서울특별시 서초구 강남대로 311, 드림플러스
          강남 18~19층 (서초동, 한화생명보험빌딩) | 이메일 help@myrealtrip.com |
          마케팅/제휴 문의 marketing@myrealtrip.com 자사는 서울특별시관광협회
          공제영업보증보험에 가입되어 있습니다. 마이리얼트립은
          통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품·거래정보
          및 거래에 대하여 책임을 지지않습니다.
        </div>
      </div>
    </div>
  );
};
export default Main;
