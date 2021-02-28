import React from "react";

export const Complete = (props) => {
  const { completeList, onClickBack } = props;
  return (
    <div className="complete-container">
      <h2>完了リスト</h2>
      <ul className="complete-list">
        {completeList.map((item, index) => {
          return (
            <div key={item} className="item">
              <li>{item}</li>
              <button
                onClick={() => {
                  onClickBack(item, index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
