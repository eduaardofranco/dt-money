import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .75);
`;

export const Content = styled(Dialog.Content)`
    min-width: 51.2rem;
    border-radius: 6px;
    padding: 4rem 4.8rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme['gray-800']};

    form {
        margin-top: 3.2rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        input {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }
        button[type="submit"] {
            height: 5.8rem;border: 0;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 2rem;
            border-radius: 6px;
            margin-top: 2.4rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme['green-700']};
                transition: background-color .2s;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    cursor: pointer;
    border: 0;
    top: 2.4rem;
    right: 2.4rem;
    line-height: 0;
    color: ${props => props.theme['gray-500']}
`;