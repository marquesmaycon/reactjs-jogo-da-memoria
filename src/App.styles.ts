import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 97.5%;
    max-width: 750px;
    margin: 10px auto;
    padding: 50px 10px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    margin-right: 10px;

    @media (max-width: 800px) {
        margin: 0 0 20px 0;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 800px) {
        display: flex;;
        justify-content: space-around;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 800px) {
        justify-content: center;
        margin: 10px 10px;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;