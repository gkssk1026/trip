import { NextPage } from "next";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import Axios from "axios";

interface FormValue {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirm: string;
}

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 10px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const join: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  // console.log(watch("name"));
  // console.log(watch("nickname"));
  // console.log(watch("email"));
  // console.log(watch("password"));

  // 비밀번호와 비밀번호 확인이 일치하는지 검증하기 위해 "password" input 의 value 를 추적함
  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    Axios.post("http://localhost:3001/create", {
      name: data.name,
      nickname: data.nickname,
      email: data.email,
      password: data.password,
      confirm: data.confirm,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>name</label>
      <Input {...register("name", { required: true, maxLength: 20 })} />

      {errors.name && errors.name.type === "required" && (
        <div>이름을 입력해 주세요!</div>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <div>최대 20자까지 입력 가능합니다.</div>
      )}

      <label>nickname</label>
      <Input {...register("nickname", { required: true, maxLength: 10 })} />
      {errors.nickname && errors.nickname.type === "required" && (
        <div>닉네임을 입력해 주세요!</div>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <div>최대 10자까지 입력 가능 합니다.</div>
      )}
      <label>email</label>
      <Input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        type="email"
      />
      {errors.email && errors.email.type === "required" && (
        <div>이메일을 입력해 주세요!</div>
      )}
      {/* {errors.email && errors.email.type === "pattern" && (
        <div>@가 포함된 메일 입력해주세요.</div>
      )} */}
      <label>password</label>
      <Input
        {...register("password", { required: true, minLength: 6 })}
        type="password"
      />
      {/* {errors.password && errors.password.type === "minLength" && (
        <div>최소 6자리 이상 입력 하세요.</div>
      )} */}
      <label>confirm</label>
      <Input
        {...register("confirm", {
          required: true,
          validate: (value) => value === passwordRef.current,
        })}
        type="password"
      />
      <Input type="submit" style={{ marginTop: "40px" }} />
    </form>
  );
};
export default join;
