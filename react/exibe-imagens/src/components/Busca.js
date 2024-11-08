//rcc
import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'

export default class Busca extends Component {
 
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (evento) => {
        console.log(evento.target.value)
        this.setState({termoDeBusca: evento.target.value})
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField iconPosition='left'>
                    <InputIcon className='pi pi-search'></InputIcon>
                <InputText
                    value={this.state.termoDeBusca}
                    onChange={this.onTermoAlterado}
                    className='w-full' 
                    placeholder={this.props.dica}/>
                </IconField>
                <Button 
                    label='OK'
                    className='p-button-outlined mt-2'/>
                </div>
            </form>
        
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}
