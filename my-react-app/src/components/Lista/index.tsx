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
        }
    ]
    return(
        <aside>
         <h2> Estudos do dia </h2>
         <ul>
             {tarefas.map((tarefa, index) => {
                 
             })} 
            <li>
                <h3>React</h3>
                <span>02:02:00</span>
            </li>
            <li>
                <h3>JavaScript</h3>
                <span>03:08:00</span>
            </li>
         </ul>
         
        </aside>
    )
}

export default Lista;