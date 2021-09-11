import React, { Component } from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";
import Membres from "./containers/Membres/Membres";

class App extends Component {
  state = {
    ajoutMembre : false
  }

  handleClicAjoutMembre = () => {
    this.setState((oldState, props) => {
      return {ajoutMembre: !oldState.ajoutMembre}
    })
  }
  
  render() {
    return (
      <div className="container">
        <TitreH1>Liste des Membres-Anciens IAI CONGO</TitreH1> 
        <Membres ajoutMembre={this.state.ajoutMembre} fermerAjoutMembre={() => this.setState({ajoutMembre:false})}/>
        <Bouton 
          typeBtn="btn-success" 
          clic={this.handleClicAjoutMembre}> 
          { !this.state.ajoutMembre ? "Ajouter" : "Ferme l'ajout"}
        </Bouton>
      </div>
    );
  }
}

export default App;