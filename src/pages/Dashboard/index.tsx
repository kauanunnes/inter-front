import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle} from './styles'

const Dashboard = () => {
    const wallet = 5000;
    return(
        <DashboardBackground>
            <Header />
            <BodyContainer>
              <div>
                <Card noShadow={true} width="90%">
                  <InlineTitle>
                    <h2 className="h2">Saldo atual</h2>
                  </InlineTitle>
                  <InlineContainer>
                    <h3 className="wallet">{wallet.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                  </InlineContainer>
                </Card>
                <Card noShadow={true} width="90%">
                  <InlineTitle>
                    <h2 className="h2">Receber PIX</h2>
                  </InlineTitle>
                  <InlineContainer>
                    <Input placeholder="Valor" style={{flex: 1}} />
                    <Button>Gerar PIX</Button>
                  </InlineContainer>
                  <p className="primary-color">Pix copia e cola</p>
                  <p className="primary-color">dsakjdaskljdojdsaoijdakjw</p>
                </Card>
                <Card noShadow={true} width="90%">
                  <InlineTitle>
                    <h2 className="h2">Pagar PIX</h2>
                  </InlineTitle>
                  <InlineContainer>
                    <Input placeholder="Insira a chave" style={{flex: 1}} />
                    <Button>Pagar PIX</Button>
                  </InlineContainer>
                </Card>

              </div>
              <div>
                <Card noShadow={true} width="90%">
                    <InlineTitle>
                      <h2 className="h2">Extrato da conta</h2>
                    </InlineTitle>
                  </Card>
              </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard;