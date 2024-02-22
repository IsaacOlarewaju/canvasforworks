export const ProjectVideoTwo = ({ vid }) => {
  return (
    <div className="projects-artwork-container">
      <video className="projects-artwork-twin" conrols loop>
        <source src={vid} type="video/mp4"></source>
      </video>
    </div>
  );
};
