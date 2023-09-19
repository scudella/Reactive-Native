import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDay } from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDay(today, 7);
    return expense.date >= date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 days'
      fallBackText='No expenses entered in the last seven days'
    />
  );
};
export default RecentExpenses;
