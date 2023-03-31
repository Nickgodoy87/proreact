import styled, { css } from 'styled-components';

const gradient = degs => css`
    background:
          linear-gradient(
            ${degs || 130}deg,
            #00dbde 0%,
            #fc00ff 100%
          );
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 500px;
    padding: 3rem 0 2rem;
    border-radius: 0.5rem;
    color: white;
    ${gradient()};
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
            0 9px 46px 8px rgba(0, 0, 0, 0.025),
            0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 1.25rem;
`;

export const Cost = styled.div`
    font-size: 3rem;
`;

export const FeatureListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.325rem;
`;

export const ActionButton = styled.div`
    flex: 0 0 auto;
    height: 20px;
    padding: 0 2rem;
    border: 0;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.025);
    transition: background 0.25s;

    &:hover {background: rgba(255, 255, 255, 1);}
`;