import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// custom tools
// import CustomInputFile from "./../icon/IconAvatarAdmin";

// styles
// import "./../../styles/form.css";
// import "./../../styles/icon-avatar.css";

import apiHandler from "../../api/apiHandler";


class FormMedia extends Component {

  state = {
    title: '',
    date_of_publication: '',
    type: '',
    author: {},
    resources: [],
    preview: '',
    media_url: [],
    description: '',
    duration: '',
    wine_association: ''

  };

  // componentDidMount() {

  //   api.get("/medias")
  //   .then(dbMedias => {
  //     api.get("/labels")
  //     .then(dbLabels => {        
  //       if (this.props.match.params.id) {
  //         api.get("/albums/"+this.props.match.params.id)
  //         .then(dbAlbum => {
  //           this.setState({
  //             tmpCover: dbAlbum.data.album[0].cover,
  //             imageOriginal: dbAlbum.data.album[0].cover,
  //             labelId: dbAlbum.data.album[0].label,
  //             mediaId: dbAlbum.data.album[0].media,
  //             labels: dbLabels.data.labels,
  //             medias: dbmedias.data.medias,
  //             title: dbAlbum.data.album[0].title,
  //             description: dbAlbum.data.album[0].description,
  //             releaseDate: dbAlbum.data.album[0].releaseDate.substr(0,10),
  //             //styleId: media.data.media[0].style
  //           })
  //         })
  //       .catch(err => console.log(err))
  //       }
  //       else {
  //         this.setState({labels: dbLabels.data.labels, medias: dbmedias.data.medias})
  //       }
        
  //     })
  //     .catch(err => console.log(err))
  //   })
  //   .catch(err => console.log(err))

  // }

  updateState = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  };


  

// handleCreateMedia = event => {
//     event.preventDefault()

//     var fd = new FormData()
//     fd.append("title", event.target[0].value)
//     fd.append("date_of_publication", event.target[1].value)
//     fd.append("type", event.target[2].value)
//     fd.append("author.first_name",event.target[3].value)
//     fd.append("author.last_name", event.target[4].value)
//     fd.append("author.nationality", event.target[5].value)
//     fd.append("resources", event.target[6].value)
//     fd.append("resources", event.target[7].value)
//     fd.append("resources", event.target[8].value)
//     fd.append("resources", event.target[9].value)
//     fd.append("resources", event.target[10].value)
//     fd.append("resources", event.target[11].value)
//     fd.append("preview", event.target[13].value)
//     fd.append("media_text", event.target[12].value)
//     fd.append("media_url", event.target[14].value)
//     fd.append("media_url", event.target[15].value)
//     fd.append("media_url", event.target[16].value)
//     fd.append("media_url", event.target[17].value)
//     fd.append("media_url", event.target[18].value)
//     fd.append("description", event.target[19].value)
//     fd.append("duration", event.target[20].value)
//     fd.append("wine_association", event.target[21].value)
//     try {
//       apiHandler.post('/media/medias', fd);
//     } catch (apiErr) {
//       console.error(apiErr)
//     }
//   };

  handleDefaultMedia = (index, id, name) =>{
    if (id == this.state.mediaId) {
      return <option value={id} key={index} selected>{name}</option>
    }
    else {
      return <option value={id} key={index}>{name} </option> 
    }
  };

  handleImageText = () => {
    if (this.props.match.params.id) {
      return "Change Image"
    }
    else {
      return "Add image"
    }
  };


  render() {
    return (    
        <form onSubmit={this.handleCreateMedia}>

          <div>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" placeholder="Media name" defaultValue={this.state.title}></input>
          </div>

          <div>
            <label htmlFor="date_of_publication">Date of publication</label>
            <input name="date_of_publication" type="date" defaultValue={this.state.date_of_publication}></input>
          </div>

          <div>
          <select name="type" className="label" id="type">
				<option value="" disabled>
					Select a type
				</option>
					<option value='video' >
						video
					</option>
                    <option value='text' >
						text
					</option>
                    <option value='image' >
						image
					</option>
                    <option value='audio' >
						audio
					</option>
                    <option value='music' >
						music
					</option>
                    <option value='text' >
						text
					</option>
                    <option value='pdf' >
						pdf
					</option>
			</select>
          </div>

          <div>
            <label htmlFor="first_name">Author</label>

            <input  name="first_name" type="text" placeholder="First Name" >
            </input>
          
            <input name="last_name" type="text" placeholder="Last name" ></input> 
            <input name="nationality" type="text" placeholder="nationality" ></input> 
          </div>

          <div>
            <label htmlFor="resources">resources</label>
            <input name="resources" type="text"></input>
            <input name="resources" type="text"></input>
            <input name="resources" type="text"></input>
            <input name="resources" type="text"></input>
            <input name="resources" type="text"></input>
            <input name="resources" type="text"></input>
          </div>

          <div>
            <label htmlFor="preview">Preview</label>
            <input  id="preview" type="text"></input>> 
          </div>

         <div>
         <label htmlFor="media_text">text of the media</label>
         <textarea name="media_text" id="media_text" cols="30" rows="10"></textarea>
         </div>

         <div>
         <label htmlFor="media_url">text of the media</label>
         <input name='media_url' type="text"></input>
         <input name='media_url' type="text"></input>
         <input name='media_url' type="text"></input>
         <input name='media_url' type="text"></input>
         <input name='media_url' type="text"></input>
         </div>

         <div>
         <label htmlFor="description">description</label>
         <textarea name="description" id="description" cols="30" rows="10"></textarea>
         </div>

          <div>
            <label>duration</label>
            <input type="number"></input>
          </div>

          <div>
            <label>Wine pairing</label>
            <input type="text" ></input>
          </div>

      
          

          <button type="submit">OK</button>

        </form>

      
    )
    }
  }
export default withRouter(FormMedia);