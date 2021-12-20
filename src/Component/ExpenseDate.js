import './ExpenseDate.css';
function ExpenseDate(props){
    const month= props.date.toLocaleString('en-US',{month:'long'});
const day = props.date.toLocaleString('en-Us',{day:'2-digit'});
const Year = props.date.getFullYear();
  return(
<div className="expense-item ">
          <div>
              <div className='expense-date__month'>{month}</div>
              <div className='expense-date__year'>{Year}</div>
              <div className='expense-date__day '>{day}</div>

          </div>
          </div>
  );

}
export default ExpenseDate;