import React, { Component} from "react";

let num = 0;

export default class SlidesQuotes extends Component {

  constructor() {
    super();

    this.state = {
      index: 0,
      isActived: false
    }
  }
  
  // I MUST TO FIX THE DYNAMIC QUOTES SLIDE

  // componentDidMount() {
  //   document.getElementById(`1`).classList.add("actived");
  //   let inter = setInterval(() => {
  //     if(this.state.index < num) {
  //       this.setState({
  //         index: this.state.index+=1 ,
  //       })
  //       if(this.state.index === num) {
  //         this.setState({
  //           index: this.state.index = 0
  //           // isActived: !this.state.isActived 
  //         })
  //       }
  //     }
  //     // console.log(this.state.index)
  //    }, 5000)

  //   let inters = setInterval(() => {
  //     document.getElementById(`${this.state.index+1}`).classList.add("actived");
  //     clearInterval(inters)
  //   },5000)

  // }

  componentDidMount() {
    document.getElementById(`1`).classList.add('actived');
  }
  
  slideVerses = (e) => {
    let ids = parseInt(e.target.id);
   this.setState({
     index: ids -1
   })


  setTimeout(() => {
    return document.getElementById(`${ids}`).classList.add('actived');
  },10)
  }


  render() { 
    let {index} = this.state;
   
    const {arrayVers} = this.props;
    
    const Quotes = ({id,lengthVerse,verseName,verse,dotsNum,slideVerse}) => {

      // Get the number of circles
      let numbersCircles = [...Array(dotsNum).keys()];

      // Empty array to stock numbers
      let tabCircles = [];

      // Loop inside them and push numbers inside the array
      for (let i in numbersCircles) {
        tabCircles.push(numbersCircles[i]);
      }


      return (
        <div className="block-quotes quotes-absolute">
        <div className="container-quotes">
          {/* <div className="id-block">
            <span className="id">{id < 10 ? `0${id}` : `${id}` }</span>
            <span className="slidesLength">/{lengthVerse < 10 ? `0${lengthVerse}` : `${lengthVerse}`}</span>
          </div> */}
          <div className="quotes-block">
            <q className="quotes-name">
              {verseName}
            </q>
            <b className="verses-name">{verse}</b>
          </div>
        </div>
        <div className="dots-block">
          
          {tabCircles.map((num, index) => {
            return (
               <span key={index} className="dots" ref={this.buttonRef} id={index+1} onClick={slideVerse}></span>
            )
          })}
        </div>
      </div>
      )
    }

    const slidesInfos =  arrayVers.map((el,index) => {
      let vArray = arrayVers.length;
      return (
        <Quotes id={el.id} lengthVerse={vArray} verseName={el.verseName} verse={el.verses} dotsNum={vArray} slideVerse={this.slideVerses.bind(this)}
        />
      )
    })

    num = arrayVers.length;

    return (
     <React.Fragment>
     {slidesInfos[index]}
     </React.Fragment>
    );
  }
}
