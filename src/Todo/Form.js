import React from 'react'

const Form = props => (
    <form className="header" onSubmit={props.onSubmit}>
       <a className="article" href="#">
            <div className="article-body">
            <h2 className="article-title">
                 Adicionar novo item
            </h2>
            <footer className="article-new">    
             <input value={props.term} onChange={props.onChange} />           
             <button className="button">Salvar</button>
            </footer>
            </div>
        </a>
    </form>
)

export default Form;