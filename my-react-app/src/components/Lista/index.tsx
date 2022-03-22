import React from "react";

function Lista(){
    const tarefas = [
        {
           tarefa:'react',
           tempo:'02:00:00' 
        },
        {
            tarefa:'javascript',
            tempo: '01:00:00'
        },
        {
            tarefa:'typescript',
            tempo:'03:05:01'
        }
    ]
    return(
        <aside>
         <h2> Estudos do dia </h2>
         <ul>
             {tarefas.map((item, index) => (
                <li key={index}>
                    <h3> {item.tarefa} </h3>
                    <span> {item.tempo} </span>
                </li> 
             )
             )} 
         </ul>
         
        </aside>
    )
}

export default Lista;