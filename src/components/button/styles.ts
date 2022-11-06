import styled from "styled-components";

export const Container = styled.div`
    background-color: #1550ff;
    border-radius: 13px;
    display: flex;
    height: 3rem;
    cursor: pointer;
    transition: all ease .3s;
    width: 200px;

    &:hover{
        background-color: #7800FF;
    }

    &:hover img {
        transform: rotate(1turn);;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #FFFFFF55;
    padding-inline: 15px;
`;

export const Icon = styled.img`
    height: 20px;
    transition: all ease .85s;
`;

export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-inline: 20px;
`;