type VideoProps = {
    id:string
}

export const Video : React.FC<VideoProps> = ({ id }) => {
    return (
         <iframe className="mr-10 " width="100%" height="690" 
          src={"https://www.youtube.com/embed/" + id} 
          title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          
         </iframe>
       
    );
}