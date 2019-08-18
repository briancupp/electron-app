import React from 'react';
import styled from 'styled-components';

const StyledFolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const Folder = () => {
    return (
        <StyledFolder>
            <span>Folder Name</span>
            <span>Folder Path</span>
        </StyledFolder>
    );
};

export default Folder;
