import React, {useEffect, useState} from 'react';

import moment, {addDay} from 'moment';
import 'moment/locale/pt-br';

import done from '../../assets/done.svg';
import close from '../../assets/close.svg';
import del from '../../assets/delete.svg';
import edit from '../../assets/edit.svg';

import {
  ExpenseContainer,
} from './styles';

moment.locale('pt-br');

var formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

const formatDate = (date, format) => {
  return moment.utc(date.toLocaleString()).format(format);
}

export default function Expense({data, addMode, index, onSubmit, deleteExpense, editExpense, closeForm}) {
  const [editData, setEditData] = useState({date: today, category: "Lazer"});
  const [editMode, setEditMode] = useState(false);

  return (
    <ExpenseContainer
      index={index}
      editing={addMode || editMode}
    >
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (addMode) {
            onSubmit(editData);
          } else if (editMode) {
            const success = await editExpense(editData);
            if (success) {
              setEditMode(false);
            }
          } else {
            setEditData({...data, category: data.additionalInfo.category, date: formatDate(data.date, "YYYY-MM-DD")})
            setEditMode(true);
          }
        }}
      >
        {addMode || editMode ? (
          <>
            <input required type="text" placeholder="Nome" onChange={(e) => setEditData({...editData, item: e.target.value})} value={editData.item}></input>
            <select 
              required
              placeholder="Categoria"
              name="category"
              id="category"
              value={editData ? editData.category : ''}
              onChange={(e) => {
                setEditData({...editData, category: e.target.value});
              }}
            >
              <option value="Lazer">Lazer</option>
              <option value="Educação">Educação</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Contas">Contas</option>
              <option value="Imóveis">Imóveis</option>
              <option value="Mobília">Mobília</option>
              <option value="Automóveis">Automóveis</option>
              <option value="Transporte">Transporte</option>
              <option value="Comida">Comida</option>
              <option value="Roupas">Roupas</option>
              <option value="Outros">Outros</option>
            </select>
            <input
              required
              type="number"
              placeholder="Valor"
              onChange={(e) => setEditData({...editData, value: e.target.value})}
              min="0"
              step="0.01"
              value={editData.value}
            >
            </input>
            <input
              required
              type="date"
              onChange={(e) => setEditData({...editData, date: e.target.value})}
              value={editData.date}>
            </input>
          </>
        ) : (
          <>
            <div className="name">{data.item}</div>
            <div className="category">{data.additionalInfo.category}</div>
            <div className="value">{formatter.format(data.value)}</div>
            <div className="date">{formatDate(data.date, "DD/MM/YYYY")}</div>
          </>
        )}
        <div className="options">
          <button type="submit">
            <img
              src={addMode || editMode ? done : edit}
              alt={addMode || editMode ? "Confirmar" : "Editar"}
            />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (addMode) {
                closeForm();
              } else if (editMode) {
                setEditMode(false);
              } else {
                deleteExpense(data._id);
              }
            }}
          >
            <img
              src={addMode || editMode ? close : del}
              alt={addMode || editMode ? "Cancelar" : "Excluir"}
            />
          </button>
        </div>
      </form>
    </ExpenseContainer>
  )
}
