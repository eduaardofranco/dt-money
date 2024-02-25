import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Container, PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
    return(
        <Container>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Burger</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - £20.50
                                </PriceHighlight>
                            </td>
                            <td>Food</td>
                            <td>12/02/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Wages</td>
                            <td>
                                <PriceHighlight variant="income">
                                     £2.000
                                </PriceHighlight>
                            </td>
                            <td>Salary</td>
                            <td>10/02/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Vodafone</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - £20
                                </PriceHighlight>
                                </td>
                            <td>Internet</td>
                            <td>10/02/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>

            </TransactionsContainer>
        </Container>
    )
}