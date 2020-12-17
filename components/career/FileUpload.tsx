import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading"
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from '@material-ui/icons/Update';
import Icon from "@material-ui/core/Icon";

interface FileUploadProps {
    setImageList(imageList:ImageListType) : void
}

export default function FileUpload(props:FileUploadProps){

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        props.setImageList(imageList);
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };
    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {images.length > 0
                            ?
                            <div>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <div className="image-item__btn-wrapper">
                                            <IconButton onClick={() => onImageUpdate(index)}>
                                                <Icon>update</Icon>
                                            </IconButton>
                                            <IconButton onClick={() => onImageRemove(index)}>
                                                <Icon>remove</Icon>
                                            </IconButton>
                                        </div>
                                        <img src={image.dataURL} alt="" width="100" />
                                    </div>
                                ))}
                            </div>
                            :
                            <div style={{display : "flex"}}>
                                <p style={{marginLeft : "20px", marginTop: "20px", verticalAlign : "middle"}}>이력사진등록</p>
                                <IconButton onClick={onImageUpload}>
                                    <ImageSearchIcon />
                                </IconButton>
                            </div>
                        }
                    </div>
                )}
            </ImageUploading>
        </div>
    )
}