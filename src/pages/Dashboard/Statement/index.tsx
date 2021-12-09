import React from "react";
import { format } from 'date-fns'
import { FiDollarSign } from 'react-icons/fi'

import {
  StatementContainer,
  StatementItemContainer,
  StatementItemImage,
  StatementItemInfo
} from './styles'

interface StatementItem {
  user: {
    firstName: string;
    lastName: string;
  },
  value: number,
  type: 'pay' | 'received',
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
          {type === 'pay' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong>
        </p>
        <p className="primary-color">
          {format(updatedAt, "dd/MM/yyyy 'às' HH:mm'h'")}
        </p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

const Statement = () => {
  const statements: StatementItem[] = [
    {
      user: {
        firstName: 'Kauã',
        lastName: 'Nunes',
      },
      value: 250.00,
      type: 'pay',
      updatedAt: new Date()
    },
    {
      user: {
        firstName: 'Kauã',
        lastName: 'Nunes',
      },
      value: 270.00,
      type: 'received',
      updatedAt: new Date()
    },
  ]
  return (
    <StatementContainer>
      {statements.map((value, index) => <StatementItemComponent {...value} key={index} /> )}
    </StatementContainer>
  )
}

export default Statement