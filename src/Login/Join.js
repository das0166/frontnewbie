import React from "react";
import { useForm } from 'react-hook-form';

function Join(){
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const onSubmit = data => console.log(data);
    
    return (
		<form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">이름</label>
            <input
                id="name"
                type="text"
                placeholder="홍길동"
                {...register("name", {
                required: "이름은 필수 입력입니다.",
                })}
            />
            {errors.name && <small role="alert">{errors.name.message}</small>}
			<label htmlFor="email">이메일</label>
            <input
                id="email"
                type="text"
                placeholder="test@email.com"
                {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
                },
                })}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
            <label htmlFor="birthdate">생년월일: </label>
            <input
                id="birthdate"
                type="date"
                placeholder="2022.01.01"
                {...register("birthdate",{
                    required: "생년월일은 필수입니다."
                })}
            />
            <input type="submit" value="회원가입"></input>
        </form>
    )
}

export default Join;