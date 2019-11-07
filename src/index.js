import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


// idの名称で最終的にページ内容を切り分ける
// menu=メニューページとして切り分ける
// profile=自分のプロフィール情報を切り出す
// product=プロダクト情報ページにする

function App() {
  return (
    <div className="App">
      <h1>TimeChain</h1>
      <h2>ブロックチェーン(BlockChain) and エンタメで面白さを!</h2>

     
     <div id="menu">
        <div><a href="#profile">プロフィール</a></div>
        <div><a href="#product">プロダクト</a></div>
        <div><a href="#information">お知らせ</a></div>
        <div><a href="#contact">連絡先</a></div>
     </div>

     <div id="profile">
       <h3>プロフィール</h3>
       <div class="FContainer">
         <div class="FItem"><b>名前：鈴江勝成(Suzue Katsushige)</b></div>
         <div class="FItem">
          <b>これまでの経歴</b>
         </div>
       </div>
     </div>

     <div id="product">
       <h3>プロダクト</h3>
       

     </div>


     <div id="information">
       <h3>お知らせ</h3>
       <table>
         <thead>
           <th>年月日</th>
           <th>カテゴリ</th>
           <th>お知らせ内容</th>
         </thead>
         <tbody>
          <tr>
           <td>2019-11-07</td>
           <td>サイト</td>
           <td>オープン(codesandboxとreactで制作開始)</td> 
          </tr>
         </tbody>
       </table>
     </div>

     <div id="contact">
       <h3>連絡先</h3>
     </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
