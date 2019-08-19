import React from 'react';
import styled from 'styled-components';
import { ipcRenderer, remote } from 'electron';

import Folder from './Folder';

import { colors } from '../../../common/styles';

const { dialog } = remote;

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
    const openDialog = () => {
        const options = {
            title: 'Select Directory',
            buttonLabel: 'Select Directory',
            properties: ['openDirectory']
        };

        dialog
            .showOpenDialog(options)
            .then(result => {
                const { filePaths } = result;
                ipcRenderer.send('directory:add', filePaths);
            })
            .catch(error => {
                console.log('error:', error);
            });
    };

    return (
        <StyledList>
            <button onClick={openDialog}>Add Directory</button>
            <Folder />
            <Folder />
        </StyledList>
    );
};

export default FolderList;
