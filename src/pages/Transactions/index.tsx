import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Container, PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'
import { TransactionContext } from '../../contexts/TransactionsContext'


export function Transactions() {

    const { transactions } = useContext(TransactionContext)

    return(
        <Container>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {
                            transactions && transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                    {transaction.type === 'outcome' ? '- €' +transaction.price : '€'+transaction.price}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>

                            </tr>
                            ))
                        }
                    </tbody>
                </TransactionsTable>

            </TransactionsContainer>
        </Container>
    )
}