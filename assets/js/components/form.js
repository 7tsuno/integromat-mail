import React from 'react'
import styled from 'styled-components'

const webhookURL = 'https://xxx';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: '',
        email: '',
        content: ''
      }
    }
  }

  handleChange(e, id) {
    const values = this.state.values;
    values[id] = e.target.value;
    this.setState({values: values});
  }

  send(e) {
    e.preventDefault();
    const obj = this.state.values;
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(webhookURL, {method, headers, body}).catch(console.error);
  }

  render() {
    return (<form>
      <Row>
        <Column>お名前 :</Column><Input type='text' name='name' onChange={e => this.handleChange(e, 'name')}/>
      </Row>
      <Row>
        <Column>メールアドレス :</Column><Input type='mail' name='email' onChange={e => this.handleChange(e, 'email')}/>
      </Row>
      <Row>
        <Column>お問い合わせ内容 :</Column><Input type='text' name='content' onChange={e => this.handleChange(e, 'content')}/>
      </Row>
      <Button onClick={e => this.send(e)}>送信</Button>
    </form>)
  }
}

const Input = styled.input `
  padding:10px;
  width:200px;
  border:none;
  background-color: #EEE;
`

const Row = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin:10px;
`
const Column = styled.div `
  padding:10px;
  width:150px;
`
const Button = styled.button `
  margin:10px;
  width:370px;
  height:50px;
`
