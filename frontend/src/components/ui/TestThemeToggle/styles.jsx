import styled from "styled-components";

const TestThemeToggleWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.shadows[2]};
    border-radius: 8px;
    padding: 16px;
    height: 200px;
    width: 200px;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows[4]};
    }
`;

export default TestThemeToggleWrapper;