import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle} from './styles'
import Statement from './Statement'

import useAuth from '../../hooks/useAuth'

import { pay, request } from '../../services/resources/pix'

const Dashboard = () => {
  
  const {user, getCurrentUser} = useAuth()
  
  const wallet = user?.wallet
  
  const [key, setKey] = useState('')
  const [generatedKey, setGeneratedKey] = useState('')
  const [newValue, setNewValue] = useState('')

  const handleNewPayment = async () => {
    const {data} = await request(Number(newValue))
    if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey)
    }
  }

  const handlePayPix = async () => {
    try {
      const {data} = await pay(key)
      console.log(data);
      if (data.mag) {
        alert(data.mag)
        return
      }
      alert('Não foi possível realizar o pagamento')
    } catch (error) {
      console.log(error);
      alert("Não é possível receber um PIX do mesmo usuário.")
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])
  
  if (!user) {
    return null 
  }
  

    return (
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
                    <Input placeholder="Valor" style={{flex: 1}} value={newValue} onChange={e => setNewValue(e.target.value)}/>
                    <Button onClick={handleNewPayment}>Gerar PIX</Button>
                  </InlineContainer>
                  {generatedKey && (
                  <>
                    <p className="primary-color">Pix copia e cola</p>
                    <p className="primary-color">{generatedKey}</p>
                  </>
                  )}
                </Card>
                <Card noShadow={true} width="90%">
                  <InlineTitle>
                    <h2 className="h2">Pagar PIX</h2>
                  </InlineTitle>
                  <InlineContainer>
                    <Input placeholder="Insira a chave" style={{flex: 1}} value={key} onChange={e => setKey(e.target.value)}/>
                    <Button onClick={handlePayPix}>Pagar PIX</Button>
                  </InlineContainer>
                </Card>

              </div>
              <div>
                <Card noShadow={true} width="90%">
                    <InlineTitle>
                      <h2 className="h2">Extrato da conta</h2>
                    </InlineTitle>
                    <Statement />
                  </Card>
              </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard;