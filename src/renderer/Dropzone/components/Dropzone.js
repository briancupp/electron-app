import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

import { colors } from '../../../common/styles';

const StyledDropzone = styled.div`
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
    padding: 16px;
    border: 2px dashed ${colors.black};
    border-radius: 8px;
    outline: none;
`;

const Dropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log('files:', acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <StyledDropzone {...getRootProps()}>
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
            <input {...getInputProps()} />
        </StyledDropzone>
    );
};

export default Dropzone;
