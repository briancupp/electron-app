import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

export default styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 16px;

    & > p {
        padding: 4px 0;
    }
`;
