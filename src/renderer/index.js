import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Dropzone from './Dropzone';
import FolderList from './FolderList';

import GlobalStyle from '../common/global-styles';

const StyledApplication = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 16px;
`;

const Application = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <StyledApplication>
                <Dropzone />
                <FolderList />
            </StyledApplication>
        </Fragment>
    );
};

const container = document.getElementById('app');
ReactDOM.render(<Application />, container);
