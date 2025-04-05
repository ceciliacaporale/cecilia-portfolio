import styled from "styled-components";

export const TitleAnimationWrapper = styled.h1`
    padding: 20px 0 0 20px;
    font-family: "Squada One", sans-serif;
    color: ${({ theme }) => theme.colors.yellow};
    text-shadow: .05em .05em 0 ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 42px;
    -webkit-text-stroke: .025em ${({ theme }) => theme.colors.black};

    @media (max-width: 1250px) {
        font-size: 50px;
        padding: 0;
        margin-bottom: 1rem;
    }
`;
