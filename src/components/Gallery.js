import React, { Component } from 'react';
import noImage from '../images/no-image.jpg';

class Gallery extends Component {
    render() {
        // let alternate = '../images/no-image.jpg';
        
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a key={index} className="book" href={infoLink} target="_blank">
                            <img src={imageLinks !== undefined ? imageLinks.thumbnail : noImage} alt={title} className="book-img" />
                            <div className="book-text">
                                {title}
                            </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;