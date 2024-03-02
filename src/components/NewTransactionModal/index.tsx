import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFomrInputs = z.infer<typeof newTransactionSchema>

export function NewTransactionModal() {

  const { createTransaction, setModalNewTransactionOpen } = useContext(TransactionContext)

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFomrInputs>({
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFomrInputs) {
    const { category, description, price, type } = data

    await createTransaction({
      description,
      category,
      price,
      type,
    })

    reset()
  }

  return (
    <Dialog.DialogPortal>
      <Overlay />
      <Dialog.DialogOverlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton onClick={() => setModalNewTransactionOpen(false)}>
          <X />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={32} />
                    Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={32} />
                    Outcome
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
        </form>
      </Content>
    </Dialog.DialogPortal>
  )
}
