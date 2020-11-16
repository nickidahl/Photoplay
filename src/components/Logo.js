/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Logo = () => {
    const style = css`
    margin-top:7em;
    `

    return ( 
        <img css={style} src="./img/logo.svg" alt="Logo" />
     );
}
 
export default Logo;