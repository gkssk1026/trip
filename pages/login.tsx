import type { NextPage } from "next";
// import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import Axios from "axios";

// const Container = styled.div`
//   margin-top: 100px;
//   padding: 20px;
//   font-size: 15px;
//   text-align: center;
// `;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

// const Button = styled.div`
//   font-size: 18px;
//   font-weight: 700;
//   line-height: 49px;
//   display: block;
//   width: 100%;
//   height: 49px;
//   margin: 16px 0 7px;
//   cursor: pointer;
//   text-align: center;
//   color: #fff;
//   border: none;
//   border-radius: 0;
//   background-color: #03c75a;
//   ${({ disabled }) =>
//     disabled &&
//     `
//     background-color: #efefef;
//    `}
// `;

interface FormValue {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirm: string;
}

//아디 비번 값 받기
//값없으면 disabled

const login: NextPage = () => {
  const {
    // register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    Axios.post("http://localhost:1234/login", {
      nickname: data.nickname,
      password: data.password,
    }).then(() => {
      console.log("response");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>nick name</label>
      <Input
        id="id"
        name="nickname"
        type="text"
        placeholder="아이디를 입력해주세요"
      />
      <label>password</label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <button>로그인</button>
    </form>
  );
};

export default login;
