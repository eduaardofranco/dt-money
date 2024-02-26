import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return(
        <Dialog.DialogPortal>
           
            <Overlay />
            <Dialog.DialogOverlay />
           
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>

                <CloseButton>
                    <X />
                </CloseButton>

                <form action=''>
                    <input type='text' placeholder='Description' required />
                    <input type='number' placeholder='Price' required />
                    <input type='text' placeholder='Category' required />
                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={32} />
                                Income
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={32} />
                                Outcome
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Register</button>
                </form>
            </Content>

        </Dialog.DialogPortal>
    )
}