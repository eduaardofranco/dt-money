import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>In</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>£ 13.990,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Out</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>£ 13.990,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>£ 13.990,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}