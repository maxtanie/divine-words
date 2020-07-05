import React, { Component } from "react";
import "./SituationsReadMorePage.scss";
import peur from "../../data/MesSituations/LirePlusData/peur.json";
import timidite from "../../data/MesSituations/LirePlusData/timidite.json";
import ScrollUpButton from "react-scroll-up-button";
const data = peur.concat(timidite);

export default class BoxSituationsReadMorePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: data,
      index: 0,
      current: this.props.id,
      currentPrev: this.props.id,
      currentNext: this.props.id
    }
  }
 
  componentDidMount() {
    if(this.state.currentPrev === 1) {
      this.setState({
        currentPrev: this.state.currentPrev = this.props.crName.length
      })
    }  else {
      this.setState({
        currentPrev: this.state.currentPrev -= 1,
      })
      console.log("step-1",this.state.currentPrev)
      console.log(this.props.id)
    }
     this.prev()   
  }
  

  prev = () => {
    const { lists } = this.state;
    let vals = this.props.crName.map(el => {return el.toLowerCase()
      .split(" ")
      .join("-")})
    
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1
      });

    } else {
      this.setState({
        index: this.state.currentPrev -= 1
      });
      console.log(this.state.currentPrev)
      this.props.prop.history.push(`/mes-situations/${vals[this.state.currentPrev]}`)

    }
}

  next = () => {
    let vals = this.props.crName.map(el => {return el.toLowerCase()
      .split(" ")
      .join("-")})
    if(this.state.current === this.props.crName.length) {
      this.setState({
        currentNext: this.state.currentNext = 0
      })
      this.props.prop.history.push(`/mes-situations/${vals[this.state.currentNext]}`)
      console.log("NEXTTTTTT",this.state.currentNext)
    } else {
      this.props.prop.history.push(`/mes-situations/${vals[this.state.currentNext]}`)
    }

  }


  render() {
    let { title, id, items, dataLength, minutesRead } = this.props;
    let vals = this.props.crName.map(el => {return el.toLowerCase()});


    const nextName = vals[this.state.currentNext]
    const prevName = vals[this.state.currentPrev -1]

    return (
      <React.Fragment>
        <div>
          <section className="situations-box">
          <div className="block-id-big-size">
            <p className="id-big-size">{id < 10 ? `0${id}` : id}</p>
            <p className="dataLengthBigSize">
              /{dataLength < 10 ? `0${dataLength}` : dataLength}{" "}
            </p>
          </div>
          <div className="block-title">
            <h2 className="title-situations great-wishes">{title}</h2>
          </div>

          <div className="block-items-and-times-read">
            <h5 className="items-name">{items}</h5>
            <p className="time-read"><i class="fal fa-clock"></i>  {minutesRead}</p>
          </div>
          {this.props.children}
        </section>
        {/* <div className="block-btns-arrow">
            <button onClick={this.prev} className="btn-arrow left"><i className="fas fa-angle-left"></i></button>
            <button onClick={this.next} className="btn-arrow right"><i className="fas fa-angle-right"></i></button>
          </div>  */}
          <div className="block-btns-arrow">
            <button onClick={this.prev} className="btn-arrow left a-left">
            <i class="fal fa-long-arrow-left"></i> Article précédent<br/>
                <div className="article-name">{prevName}</div>
            </button>

            <button onClick={this.next} className="btn-arrow right a-right">
              Article suivant <i class="fal fa-long-arrow-right"></i><br/>
                <div className="article-name">{nextName}</div>       
            </button>
          </div> 
    
        </div>
      <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={150}
            EasingType="easeOutCubic"
            AnimationDuration={500}
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
            style={{}}
            ToggledStyle={{}}
          />
      </React.Fragment>   
    )
  }
}
