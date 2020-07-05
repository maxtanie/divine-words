import React, { Component, Fragement } from "react";
import Link from "react-dom";
import JustifiedGrid from "react-justified-grid";

class MyImageGallery extends Component {
  render() {
    return (
      <JustifiedGrid images={images} rows={3} maxRowHeight={64}>
        {processedImages => {
          return (
            <Fragement>
              {processedImages.map(image => {
                const { src, width, height, left, top, originalData } = image;
                return (
                  <Link to={originalData.linkUrl}>
                    <img src={src} width={width} height={height} />
                  </Link>
                );
              })}
            </Fragement>
          );
        }}
      </JustifiedGrid>
    );
  }
}
export default MyImageGallery;
