import React from "react";

export const Incomplete = (props) => {
  const { incompleteList, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-container">
      <h2>未完了リスト</h2>
      <ul className="incomplete-list">
        {incompleteList.map((item, index) => {
          return (
            <div key={item} className="item">
              <li>{item}</li>
              <button
                onClick={() => {
                  onClickComplete(item, index);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
