import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';


export default class ContentArticles extends Component {

  render() {

    const {dataArticles, descriptionHeaderName} = this.props;

    let strTxt = (txt) => {
      return txt.toString().replace(/[, ]+/g, " ").trim()
    }

    const namesArticle = descriptionHeaderName;


    const articlesData = dataArticles.map(el => {

      let partOne = el.articlePartOne;
      let partTwo = el.articlePartTwo;

      let txtTagsStr = [el.introduction, partOne.articlePartOne, partOne.articlePartTwo,  partTwo.articlePartOne, partTwo.articlePartTwo, partOne.articlePartTitle,partTwo.articlePartTitle];

      const bgArticlePartOne = {
        backgroundImage: `url('${el.articlePartOne.imgUrl}')`
      }

  
      const bgArticlePartTwo = {
        backgroundImage: `url('${el.articlePartTwo.imgUrl}')`
      }

      let introduction = strTxt(txtTagsStr[0]);
      let articleOnePartOne = strTxt(txtTagsStr[1]);
      let articleOnePartTwo = strTxt(txtTagsStr[2]);
      let articleTwoPartOne = strTxt(txtTagsStr[3]);
      let articleTwoPartTwo = strTxt(txtTagsStr[4]);
      let articlePartTitlePartOne = strTxt(txtTagsStr[5]);
      let articlePartTitlePartTwo = strTxt(txtTagsStr[6]);
      

      
      const videosInfos = el.complementaryInfos.videosUrl.map((video,index) => {
        return (
          <div className="block-infos" key={index}>     
            <iframe src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          </div>
        )
      })
      

      const websiteInfos = el.complementaryInfos.websiteInfos.map(website => {
      return (
        <div className="block-infos bg-white">
          <img src={website.img} className="img-infos" alt={website.alt} />
          <div className="name-theme">
             <p>{website.themeName}</p>
           </div>
           <a href={website.url} class="link-website" target="_blank">Lien vers le site <i class="fas fa-long-arrow-alt-right"></i> </a>
        </div>
      )
    })

      return (    
        <React.Fragment>
           <div className="block-img img-article" style={bgArticlePartOne}>
          </div>
          
          <div className="block-content-txt">
            <div className="block-content">
              <div className="block-introduction">
                {/* <h2 className="name-theme-step">Introduction</h2> */}
                <p className="txt-intro" dangerouslySetInnerHTML={{__html: introduction}} />
              </div>

            <ScrollAnimation animateIn="fadeIn" delay={10} offset={0}>
              <div className="block-part-one">
                <h2 className="title-part">{partOne.partTitle}</h2>
            
                <ScrollAnimation animateIn="fadeIn" delay={10} offset={0}>
                <p className="txt-part" dangerouslySetInnerHTML={{__html: articlePartTitlePartOne}} />
                </ScrollAnimation> 
              </div>
              </ScrollAnimation>
              
              <div className="part-one">
              <ScrollAnimation animateIn="fadeIn" offset={40}>
                <b className="sub-title">1. {partOne.subTitleOne}</b>
              </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={300} offset={50}>
                <p className="txt-part" dangerouslySetInnerHTML={{__html: articleOnePartOne}} />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={300} offset={40}>
                <b className="sub-title">2. {partOne.subTitleTwo}</b>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={300} offset={40}>
                <p className="txt-part" dangerouslySetInnerHTML={{__html: articleOnePartTwo}} />
                </ScrollAnimation>
              </div>
            </div>
          </div>
         
          <div className="transition ">
          <ScrollAnimation animateIn="fadeIn" delay={300} offset={0}>
            <i class="fas fa-sync-alt icon-size"></i>
            <p className="transition-width">{partOne.transition}</p>
            </ScrollAnimation>
          </div>


          <div className="block-img img-article reverse-info" style={bgArticlePartTwo}>
          </div>

          <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
          <div className="part-two">
          <div className="block-content-txt">
           <div className="block-content">
            <div className="block-part-one">
            <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
              <h2 className="title-part">{partTwo.partTitle}</h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
              <p className="txt-part" dangerouslySetInnerHTML={{__html: articlePartTitlePartTwo}} />
              </ScrollAnimation>
            </div>
            <div className="part-one">
            <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
            <b className="sub-title">1. {partTwo.subTitleOne}</b>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
            <p className="txt-part" dangerouslySetInnerHTML={{__html: articleTwoPartOne}}>    
            </p>
            </ScrollAnimation>
          
            <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
            <b className="sub-title">2. {partTwo.subTitleTwo}</b>
            </ScrollAnimation>
    
            <ScrollAnimation animateIn="fadeIn" delay={200} offset={0}>
            <p className="txt-part" dangerouslySetInnerHTML={{__html: articleTwoPartTwo}} />
            </ScrollAnimation>
            </div>
          </div>
          </div>
          </div>
          </ScrollAnimation>

          <section className="transition">
          <ScrollAnimation animateIn="fadeIn" delay={300} offset={0}>
            <i class="fas fa-bible icon-size"></i>
              <p className="transition-width">{partTwo.conclusion}</p>
          </ScrollAnimation>
          </section>

          <section className="block-infos-complementaire">
          <ScrollAnimation animateIn="fadeIn" delay={250} offset={0}>
            <h2 className="infos">Informations complémentaires</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={300} offset={0}>
            <p className="txt-infos">Vidéos édifiantes sur {namesArticle} qui vont vous aider.</p>
            </ScrollAnimation>
            <div className="block-grid-infos">
            <ScrollAnimation animateIn="fadeIn" delay={300} offset={0}>
            <div className="grid-infos grid-2-infos">     
               {videosInfos}
            </div>
            </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeIn" delay={250} offset={0}>
            <p className="txt-infos">Sites web traitant sur {namesArticle} qui vont vous aider.</p>
            </ScrollAnimation>
            <div className="block-grid-infos">
            <ScrollAnimation animateIn="fadeIn" delay={550} offset={0}>
            <div className="grid-infos">
              {websiteInfos} 
            </div>
            </ScrollAnimation>
            </div>
                   
          </section>
          
        </React.Fragment>
      )
    })

    return (
      <article className="content-article">{articlesData}</article>
    );
  }
}

