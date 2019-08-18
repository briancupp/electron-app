import React from 'react';
import styled from 'styled-components';

import Folder from './Folder';

import { colors } from '../../../common/styles';

const StyledList = styled.div`
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0 16px;
    background-color: ${colors.white};
    border: 1px solid ${colors.black};
`;

const FolderList = () => {
    return (
        <StyledList>
            <Folder />
            <Folder />
        </StyledList>
    );
};

export default FolderList;
