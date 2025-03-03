

export function TableContent({ memberInfo, setAllMealVaue, setAllRecordVaue }) {

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const newMonths = new Date().getMonth();
  const currentMonth = months[newMonths];

  return (
    <div className="flex border-buttom table-content">
      <div className="width-280 border-right">
        <p>{currentMonth}</p>
      </div>
      <div className="width-280 border-right">
        <p>{memberInfo.memberName}</p>
      </div>
      <div className="width-280 border-right">
        <p className="meal">
          {memberInfo.Meal && memberInfo.Meal.length > 0
            ? memberInfo.Meal.reduce((sum, meal) => sum + parseInt(meal.Meal || 0), 0)
            : '0'}
        </p>
      </div>
      <div className="width-280">
        <p>
          {memberInfo.Record && memberInfo.Record.length > 0
            ? memberInfo.Record.reduce((sum, record) => sum + parseInt(record.record || 0), 0)
            : '0'}
        </p>
      </div>
    </div>
  );
}
