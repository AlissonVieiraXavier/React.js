import React from "react";
import style from "./Lista.module.scss";
import Item from "./item";

function Lista() {
  const tarefas = [
    {
      tarefa: "react",
      tempo: "02:00:00",
    },
    {
      tarefa: "javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "typescript",
      tempo: "03:05:01",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
