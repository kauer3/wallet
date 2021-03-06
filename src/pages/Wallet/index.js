import React, {useEffect, useState} from 'react';

import Options from '../../components/Options/';
import Expense from '../../components/Expense/';
import Charts from '../../components/Charts/';
import About from '../../components/About/';

import api from '../../services/api';

import menuIcon from '../../assets/menuIcon.svg';
import add from '../../assets/add.svg';
import walletIcon from '../../assets/walletIcon.png';
import {
  Menu,
  ExpensesBox,
  AddButton,
  GlobalStyle
} from './styles';

export default function Wallet() {
  const [expenses, setExpenses] = useState([]);
  const [page, setPage] = useState(1);
  const [onMenu, setOnMenu] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [sectionOpened, setSectionOpened] = useState('main');

  const loadExpenses = async () => {
    try {
      const response = await api.get(`/expenses?page=${page}&perPage=20`);
      setExpenses(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const addExpense = async (newExpense) => {
    try {
      const response = await api.post('/expenses', {
        date: newExpense.date,
        item: newExpense.item,
        value: newExpense.value,
        additionalInfo: {
          category: newExpense.category
        }
      });
      console.log(response);
      setAddForm(false);
      loadExpenses();
    } catch (err) {
      console.log(err);
    }
  }

  const editExpense = async (newExpense) => {
    try {
      const response = await api.put(`/expenses/${newExpense._id}`, {
        date: newExpense.date,
        item: newExpense.item,
        value: newExpense.value,
        additionalInfo: {
          category: newExpense.category
        }
      });
      console.log(response);
      loadExpenses();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const deleteExpense = async (id) => {
    try {
      const response = await api.delete(`/expenses/${id}`)
      console.log(response);
      loadExpenses();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <>
      <GlobalStyle/>
      <Menu
        onMouseEnter={() => setOnMenu(true)}
        onMouseLeave={() => setOnMenu(false)}
      >
        <div className="back">
          <div className="icon">
            <img src={menuIcon} alt="Menu" />
          </div>
        </div>
        <div className="mid"></div>
        <div className="front">
          <img src={walletIcon} alt="Logo" />
          <Options
            menuOpen={onMenu}
            section={sectionOpened}
            setSection={(section) => {
              setSectionOpened(section);
              setAddForm(false);
            }}
          />
        </div>
      </Menu>
      {sectionOpened === 'main' && (
        <AddButton>
          <div
            className="back"
            onClick={() =>  {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              });
              setAddForm(true)
            }}
          >
            <div className="mid">
              <div className="front">
                <div className="icon">
                  <img src={add} alt="Add" />
                </div>
              </div>
            </div>
        </div>
        </AddButton>
      )}
      <ExpensesBox menuOpen={onMenu}>
        {sectionOpened === 'main' ? (
          <div className="expenses">
            {expenses.length > 0 ? (
              <>
                <div className="title">DESPESAS</div>
                <div className="header">
                  <div className="name">Nome</div>
                  <div className="name">Categoria</div>
                  <div className="value">Valor</div>
                  <div className="date">Data</div>
                  <div className="placeholder"></div>
                </div>
              </>
            ) : (
              <div className="empty title">Ainda n??o h?? nenhuma despesa cadastrada.</div>
            )}
            {addForm &&
              <Expense
                addMode
                onSubmit={(data) => addExpense(data)}
                closeForm={() => setAddForm(false)}
              />
            }
            {expenses.map((data, index) => (
              <Expense
                key={data._id}
                index={index}
                onSubmit={(data) => console.log(data)}
                deleteExpense={(id) => deleteExpense(id)}
                editExpense={(data) => editExpense(data)}
                data={data}
              />
            ))}
          </div>
        ) : sectionOpened === 'charts' ? 
            (expenses.length > 0 ? (
              <Charts
                data={expenses}
              />
            ) : (
              <div className="empty title">
{                "Ainda n??o h?? nenhuma despesa cadastrada. "}
                <a onClick={() => {
                  setSectionOpened('main');
                  setAddForm(true);
                }}
                >
                  Adicione aqui
                </a>
              </div>
            )
            ) : (
              <About
                menuOpen={onMenu}
              />
            )}
      </ExpensesBox>
    </>
  )
}
