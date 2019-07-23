import React, { Component } from 'react'
import './SingleGallery.css'
import photo from '../assets/photo.png'

export default class SingleGallery extends Component {
  render() {
    return (
      <div className="single_gallery_container">
            <div className="single_gallery_image">
                <img src={photo} />
            </div>

            <div className="single_gallery_name">
                <p>{this.props.name}</p>
            </div>

            <div className="single_gallery_description">
                <p>{this.props.description}</p>
            </div>
      </div>
    )
  }
}