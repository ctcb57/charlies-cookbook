import React from 'react';
import styled from '@emotion/styled';

const BaseLayout = ({ children, container }) => {
    const Main = styled.div`
        padding-top: 1.5em;
    `;
    return (
        <>
            <Main className="uk-section-small">
                <div className={`uk-container uk-container-xlarge`}>{children}</div>
            </Main>
        </>
    );
};

export default BaseLayout;