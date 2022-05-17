import './ExpenseForm.css';
import ExpenseForm from './ExpenseForm';

const ExpenseType = (props) => {
  const switchType = () => {
    props.switchType();
  };

  const onSaveExpenseData = (data) => {
    props.onSaveExpenseData(data);
  };

  if (props.shouldRender) {
    return (
      <div className="new-expense__actions">
        <button type="button" onClick={switchType}>
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <div>
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseData}
        switchType={props.switchType}
      />
    </div>
  );
};

export default ExpenseType;
