import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

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

                    <button type="submit">Register</button>
                </form>
            </Content>

        </Dialog.DialogPortal>
    )
}