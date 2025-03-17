import styled from 'styled-components';

const ThemeToggleWrapper = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    transition: all 0.3s ease;
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 999999999;
    
    &:hover {
      opacity: 0.9;
    }

`;

export default ThemeToggleWrapper;