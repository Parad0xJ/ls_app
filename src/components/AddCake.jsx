import React, { Component, Fragment } from 'react'

export class AddCake extends Component {

    state = { allDessert: [{ 'id': 'Moka', 'texte': 'Moka' }], valeur: '' }

    handleChange = e => {
        this.setState({ valeur: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        //Evite retour vide dans le input
        if (this.state.valeur.length === 0) {
            return;
        }

        const item = { id: this.state.valeur, texte: this.state.valeur }

        this.setState({
            allDessert: [...this.state.allDessert, item], valeur: ''
        })

    }

    componentDidUpdate = () => {
        localStorage.MyData = JSON.stringify(this.state.allDessert);
        //Debugg //console.log(JSON.parse(localStorage.getItem('MyData')))
    }

    handleClickChange = (id) => {

        const newDes = prompt('change your Dessert', id)
        //Debugg  //  const myDatas = JSON.parse(localStorage.getItem('MyData'))

        let clickedElt = this.state.allDessert.filter(elt => elt.id === id)
        //Debugg// console.log(clickedElt[0])

        if (newDes) {
            clickedElt[0].id = newDes
            clickedElt[0].texte = newDes
        }

        this.setState({
            allDessert: [...this.state.allDessert]
        })

    }

    handleClickDelete = (id) => {
        // debugg // console.log(id)
        const nonClickedElt = this.state.allDessert.filter(elt => elt.id !== id)

        this.setState({
            allDessert: nonClickedElt
        })

    }

    handleClearStorage = () => {
        localStorage.clear()

        this.setState({ allDessert: [{ 'id': 'Moka', 'texte': 'Moka' }] })
    }

    render() {
        return (
            <Fragment>
                <h3 className='my-5' style={{ color: '#90DACB' }} >- Start your list with CRUD possibilities -</h3>
                {this.state.allDessert.map(elt => <li key={elt.id} className="list-group-item list-group-item-light rounded my-3 mx-auto myFont" ><span className="material-icons change" title='Update this entry' onClick={this.handleClickChange.bind(this, elt.id)}>brightness_auto</span><strong className='text-info'>{elt.texte}</strong> <span className="material-icons delete" title='Delete this entry' onClick={this.handleClickDelete.bind(this, elt.id)}>delete_forever</span> </li>)}
                <form className="form-inline mx-auto my-4" style={{ maxWidth: '18rem' }} onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control myFont" placeholder="Add Dessert" value={this.state.valeur} onChange={this.handleChange} />
                        <div className="input-group-append">
                            <button className="btn btn-outline-info myFont" type="submit" id="btn1">Send</button>
                        </div>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleClearStorage} id='cleared_storage' className="btn btn-outline-danger mt-4">! Clear Storage & delete all items !</button>
                        <label className='small newColor' htmlFor="cleared_storage">All items will be deleted in the local Storage and the State, excepted: "Moka"</label>
                    </div>
                </form>

            </Fragment>
        )
    }
}
