import React from 'react'

const Form = props => (
    <form className="header" onSubmit={props.onSubmit}>
       <div className="article" href="#">
            <div className="article-body">
            <h2 className="article-title">
                 Adicionar novo item
            </h2>
            <footer className="article-new">    
             <input value={props.term} onChange={props.onChange} />           
             <button className="button">Salvar</button>
            </footer>
            </div>
        </div>
    </form>
)

export default Form;