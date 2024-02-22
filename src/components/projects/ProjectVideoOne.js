export const ProjectVideoOne = ({ vid }) => {
  return (
    <div className="projects-artwork-container">
      <video className="projects-video-one" muted loop>
        <source src={vid} type="video/mp4"></source>
      </video>
    </div>
  );
};
