import React, { Component } from 'react'
import {Paper, TextField} from '@material-ui/core'

 class Searchbar extends Component {
     state = {
         searchTerm : ''
     }
     handleChange = (e) => {
         var {value} = e.target
        //   console.log(value)
         this.setState({
           
            searchTerm: value
         })
     }
     handleSubmit = (e) => {
         e.preventDefault()
         const {searchTerm} = this.state
         const {onFormSubmit} = this.props
         onFormSubmit(searchTerm)
     }
    render() {
        return (
            <div>
               <Paper elevation = {6} style = {{padding: '25px',}}>
                   <form onSubmit = {this.handleSubmit}>
                       <TextField fullWidth label = "Search..." onChange = {this.handleChange}></TextField>
                   </form>
               </Paper>
            </div>
        )
    }
}

export default Searchbar
