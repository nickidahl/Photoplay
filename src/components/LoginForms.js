/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";

const LoginForms = () => {
    const container = css`
        display:grid;
        padding:8px;
        margin:0 auto;
        justify-content:start;
        width:285px;
    `
    const labelStyle = css`
        margin:10px;
        margin-left:0;
        place-self:start;
        font-size:12px;
        font-weight:bold;
    `
    const inputStyle = css`
        color:#A2A2A2;
        background-color:#212121;
        margin-bottom:20px;
        height:42px;
        padding:3px 30px;
        border-radius:10px;
        border:none;
    `
    const button = css`
        background: rgb(255,169,10);
        background: -moz-linear-gradient(0deg, rgba(255,169,10,1) 0%, rgba(255,187,59,1) 50%);
        background: -webkit-linear-gradient(0deg, rgba(255,169,10,1) 0%, rgba(255,187,59,1) 50%);
        background: linear-gradient(0deg, rgba(255,169,10,1) 0%, rgba(255,187,59,1) 50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffa90a",endColorstr="#ffbb3b",GradientType=1);
        border:none;
        border-radius: 10px;
        height:44px;
        width:285px;
        font-weight:bold;
        outline:none;
    `
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return ( 
        <form css={container} onSubmit={handleSubmit(onSubmit)}>
            <label css={labelStyle}>EMAIL</label>
            <input css={inputStyle} type="text" placeholder="email here" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            <label css={labelStyle}>PASSWORD</label>
            <input css={inputStyle}type="password" placeholder="password here" name="password" ref={register} />
            {errors.exampleRequired && <span>This field is required</span>}
            <button css={button} type="submit">Login</button>
        </form>

     );
}
 
export default LoginForms;