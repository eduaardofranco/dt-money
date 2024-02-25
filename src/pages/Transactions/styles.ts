import styled from 'styled-components'

export const Container = styled.div`

`;
export const TransactionsContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 6.4rem auto 0;
    padding: 0 2.4rem;
`;

export const TransactionsTable = styled.table`
    border-collapse: separate;
    border-spacing: 0 .8rem;
    margin-top: 2.4rem;
    width: 100%;
    td {
        padding: 2rem 3.2rem;
        background: ${props => props.theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;
interface PriceHighlightProps {
    variant: 'income' | 'outcome'
}
export const PriceHighlight = styled.span<PriceHighlightProps>`

    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`;