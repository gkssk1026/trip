import type { NextPage } from "next";
import * as React from "react";
import Typography from "@mui/material/Typography";

const Main: NextPage = () => {
  return (
    <div className="footer">
      <Typography variant="caption" display="block" gutterBottom>
        상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈 |
        사업자등록번호 209-81-55339 사업자정보확인 | 통신판매업신고번호
        2019-서울서초-0260 주소 서울특별시 서초구 강남대로 311, 드림플러스 강남
        18~19층 (서초동, 한화생명보험빌딩) | 이메일 help@myrealtrip.com |
        마케팅/제휴 문의 marketing@myrealtrip.com 자사는 서울특별시관광협회
        공제영업보증보험에 가입되어 있습니다. 마이리얼트립은 통신판매중개자이며
        통신판매의 당사자가 아닙니다. 따라서 상품·거래정보 및 거래에 대하여
        책임을 지지않습니다.
      </Typography>
    </div>
  );
};
export default Main;