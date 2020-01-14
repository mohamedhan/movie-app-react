import React from 'react';
import Modal from 'react-modal';
import '../App.css';
class Modall extends React.Component {
  constructor() {
    super();

    this.state = {
        name:'',
        url:'',
        star:"",
      modalIsOpen: false,
     
    };
  }
  handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // afterOpenModal=()=> {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  add=(e)=>{
      e.preventDefault();
      this.props.add(this.state.name,this.state.url,this.state.star)
      this.closeModal()
  }

  render() {
    return (
      <div className=''>
        <button className='btn-modal' onClick={this.openModal}>
          <img className="img-plus" src="https://www.freepnglogos.com/uploads/plus-icon/plus-svg-png-icon-download-onlinewebfontsm-4.png"/>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='modall'
          contentLabel='Example Modal'
        >
          <form>
            <label for='fname'>Film Name</label>
            <input
              type='text'
              id='fname'
              name='name'
              placeholder='Film name..'
                value={this.state.name}
                onChange={this.handleChange}
            />

            <label for='lname'>Image Url</label>
            <input
              type='text'
              id='lname'
              name='url'
              placeholder='Image url..'
              value={this.state.url}
              onChange={this.handleChange}
            />

            <label for='lname'>FIlm rating</label>
            <input
              type='text'
              id='lname'
              name='star'
              placeholder='Film rating..'
              value={this.state.star}
              onChange={this.handleChange}
            />

            <input className='input-sub' type='submit' value='Add film' onClick={(e)=>this.add(e)} />
          </form>
        </Modal>
      </div>
    );
  }
}
export default Modall;
