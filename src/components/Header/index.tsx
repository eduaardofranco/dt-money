import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { useContext } from 'react'

export function Header() {
  const { setModalNewTransactionOpen, modalNewTransactionOpen } = useContext(TransactionContext)

  function handleOpenModal() {
    setModalNewTransactionOpen(true)
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={modalNewTransactionOpen} onOpenChange={setModalNewTransactionOpen}>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton onClick={handleOpenModal}>New Transaction</NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
