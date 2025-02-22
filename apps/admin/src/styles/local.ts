import { createGlobalStyle } from "styled-components";

const LocalStyle = createGlobalStyle`
    // 초기 html 설정
    html {
        background-color: ${({ theme }) => theme.backgroundColors.blackLight};
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
        scroll-behavior: smooth; 
        @media (max-width: 360px) {
		font-size:12px;
	}
    }

    .root {
        width: 100%;

        min-height: 100vh;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.backgroundColors.white};
        
        scrollbar-width: none; 
        -ms-overflow-style: none;

        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
export default LocalStyle;
