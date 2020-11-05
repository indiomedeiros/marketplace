import React, { Component } from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Card = styled.div`
    height: max-content;
    width: max-content;
    border-radius: 5px;
    position: relative;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.2);
    display: flex;
    margin: 20px;
    background-color: #F8FAFF;
`
const DivImagem = styled.div`
    height: max-content;
    width: max-content;
    display: flex;
    flex-direction: column;
    position: relative;
    
    
`
const Imagem = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 5px;
    z-index: 1;
    cursor: pointer;
    &:hover{
        height: 252px;
        width: 252px;
    }
`
const DivPrecoSobreposto = styled.div`
    height: 30px;
    width: 80px;
    text-align: center;
    padding-top: 5px;
    background-color: white;
    position: absolute;
    bottom: 5px;
    left: 10px;
    z-index: 2;
    border-radius: 5px;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.2);
    display: ${props=> props.display === true? 'none': 'block'};
    color: red;
    font-weight: bold;
`
const DivDescricao = styled.div`
    display: ${props=> props.display === false? 'none': 'flex'};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 400px;
    padding: 10px;
`
const DivButton = styled.div`
    height: max-content;
    width: max-content;
    align-self: flex-end;
`
const DivLateral = styled.div`

    display: ${props=> props.display === false? 'none': 'flex'};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    top: 10px;
    right: 30px;
    z-index: 3;
`
const DivInfoLateral = styled.div`
    width: 100px;
    border-radius: 3px;
    border: 1px solid ${props=> props.color};
    display: ${props=> props.display === false? 'none': 'flex'};
    align-items: center;
    justify-content: center;
    height: 30px;
    margin: 5px;
`


class CardProduto extends Component {
    
    render() { 
        return (
            <Card>

            <DivImagem>

                <Imagem onClick={this.props.onClickImagem} src={this.props.imagem} alt="produto"/>

                <DivPrecoSobreposto display={this.props.maisInfo}>
                    {this.props.preco} R$
                </DivPrecoSobreposto>

                <DivDescricao display={this.props.maisInfo}>

                    <h4>{this.props.nome}</h4>
                    <p>{this.props.descricao}</p>

                    <DivButton>
                        <Button 
                         color='secondary' 
                         variant="contained" 
                         onClick={this.props.adicionarCarrinho}>
                         Quero Comprar
                        </Button>
                    </DivButton>

                </DivDescricao>

            </DivImagem>
                <DivLateral>

                    <DivInfoLateral color='orange'display={this.props.maisInfo}>
                       
                        {this.props.preco} R$
                       
                    </DivInfoLateral>

                    <DivInfoLateral color='red' display={this.props.maisInfo}>
                        
                        {this.props.formaPg}
                       
                    </DivInfoLateral>

                    <DivInfoLateral color='blue' display={this.props.maisInfo}> 
                        
                        {this.props.parcelas}
                        
                    </DivInfoLateral>

                </DivLateral>
            </Card>
          );
    }
}

/*
    prosps:
        imagem : passar url da imagem
        preco:  passar preco do produto
        descricao : passar descricao do produto
        formaPg : passar forma de pagamento
        parcelas : passar numero de parcelas 
        maisInfo: passar boolean que mudara de acordo com o click da imagem para expandir e mostrar informacoes.
        adicionarCarrinho: funcao de onclick para adicionar no carrinho.

*/
 
export default CardProduto;