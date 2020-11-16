/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Logo = () => {

    const style = css`
    margin-top:5em;
    `

    return ( 
        <img css={style} src="./img/logo.svg" alt="Logo" />
     );
}
 
export default Logo;