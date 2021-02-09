import React from 'react'
import './Questions.css'
import { GrDown } from "react-icons/gr";

const Questions = ({questions}) => {

    function showText(e){
        e.preventDefault()
        
        let targetBlock = e.target.parentElement.parentElement

        const blocks = document.querySelectorAll('.q-block')
        blocks.forEach((el) => {
                if(el !== targetBlock || targetBlock.lastChild.classList.contains('show-text')) {
                    el.lastChild.classList.remove('show-text')
                } 
                else if(el === targetBlock ){
                    el.lastChild.classList.toggle('show-text')
                }
        })
    }

        return (
            
            <form className="questionsBlock">
                <h2>Question's cards</h2>
               {questions.map(el => (
                    <div className="q-block" key={Math.floor(Math.random() * 100)}>
                        <h4 className="q-title">{el.question}</h4>
                        <button className="button" onClick={showText}><GrDown /></button>
                        <p className="q-text">{el.text}</p>
                    </div>
               ))} 
               
            </form>
        )
}


export default Questions