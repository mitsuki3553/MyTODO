import React, { useState } from "react";
import { Input } from "./components/input.jsx";
import { Incomplete } from "./components/incomplete.jsx";
import { Complete } from "./components/complete.jsx";
import "./App.css";

export function App() {
  const [text, typeText] = useState("");
  const [incompleteList, incompleteListChange] = useState(["🍊"]);
  const [completeList, completeListchange] = useState(["🥫"]); 
  const [alreadyListed, alreadyListedCheck] = useState(false);

  const onChangeText = (e)=>{
    const value = e.target.value;
    typeText(value);
    textCheck(value);  
  }

  const textCheck = (value)=>{
    for(let i=0;i<=incompleteList.length;i++){
      if(value === incompleteList[i]) return alreadyListedCheck(true) ;    
    }
    for(let i=0;i<=completeList.length;i++){
      if(value === completeList[i]) return alreadyListedCheck(true);
    }
      alreadyListedCheck(false);
  }


  const onClickAdd = () => {
    if (text === "") return;
    for(let i=0;i<=incompleteList.length;i++){
      if(text === incompleteList[i])return ;
        
    }
    for(let i=0;i<=completeList.length;i++){
      if(text === completeList[i])return ;
    }
    
    alreadyListedCheck(false);
    const newList = [...incompleteList, text];
    incompleteListChange(newList);
    typeText("");
    
  };

  const onClickDelete = (index) => {
    const newList = [...incompleteList];
    newList.splice(index, 1);
    incompleteListChange(newList);
  };

  const onClickComplete = (item, index) => {
    const newList = [...completeList, item];
    completeListchange(newList);
    onClickDelete(index);
  };

  const onClickBack = (item, index) => {
    const newIncompleteList = [...incompleteList, item];
    const newCompleteList = [...completeList];
    incompleteListChange(newIncompleteList);
    newCompleteList.splice(index, 1);
    completeListchange(newCompleteList);
  };

  const commentInsert = ()=>{
    if(incompleteList.length >= 5){
      return (<span className="alert">5個までだよ！</span>)
    }
  }

  return (
    <>
      <header>
        <h1>TODOリスト</h1>
        <Input 
       
        onClickAdd={onClickAdd} 
        text={text} 
        onChangeText={onChangeText}
        disabled={incompleteList.length >=5}
        buttonDisabled={incompleteList.length >=5 || alreadyListed}/>
        {commentInsert()}
        {alreadyListed && <span className="alert">入力済だよ！</span>}
      </header>
      <main>
        <Incomplete
          incompleteList={incompleteList}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <Complete completeList={completeList} onClickBack={onClickBack} />
      </main>
      <footer>
        <small>210226作成 Nこーせい</small>
      </footer>
    </>
  );
}
