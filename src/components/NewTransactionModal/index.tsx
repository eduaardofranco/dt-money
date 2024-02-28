import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const newTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFomrInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {

    const { register,
            handleSubmit,
            formState: { isSubmitting }
    } = useForm<NewTransactionFomrInputs>({

    })

    async function handleCreateNewTransaction(data: NewTransactionFomrInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
    }

    return(
        <Dialog.DialogPortal>
           
            <Overlay />
            <Dialog.DialogOverlay />
           
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>

                <CloseButton>
                    <X />
                </CloseButton>

                <form action='' onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type='text'
                        placeholder='Description'
                        required
                        {...register('description')}
                    />
                    <input
                        type='number'
                        placeholder='Price'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type='text'
                        placeholder='Category'
                        required
                        {...register('category')}
                    />
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

                    <button type="submit" disabled={isSubmitting}>Register</button>
                </form>
            </Content>

        </Dialog.DialogPortal>
    )
}