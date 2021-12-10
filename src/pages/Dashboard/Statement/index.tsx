import React, {useState, useEffect} from "react";
import { format } from 'date-fns'
import { FiDollarSign } from 'react-icons/fi'
import {transaction} from '../../../services/resources/pix'

import {
  StatementContainer,
  StatementItemContainer,
  StatementItemImage,
  StatementItemInfo
} from './styles'

interface StatementItem {
  user: {
    firstname: string;
    lastName: string;
  },
  value: number,
  type: 'paid' | 'received',
  updatedAt: Date
}

const StatementItemComponent = ({user, value, type, updatedAt}: StatementItem) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p>
          {type === 'paid' ? 'Pago a' : 'Recebido de'} <strong>{user.firstname} {user.lastName}</strong>
        </p>
        <p className="primary-color">
          {format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm'h'")}
        </p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

const Statement = () => {
  const [statements, setStatements] = useState<StatementItem[]>([])

  const getAllTransactions = async () => {
    const {data} = await transaction()
    setStatements(data.transactions)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <StatementContainer>
      {statements.length > 0 && statements.map((value, index) => <StatementItemComponent {...value} key={index} /> )}
    </StatementContainer>
  )
}

export default Statement