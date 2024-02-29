export const ProjectVideoOne = ({ vid }) => {
  return (
    <div className="projects-artwork-container">
      <video muted autoPlay loop width="100%">
        <source src={vid} type="video/mp4"></source>
      </video>
    </div>
  );
};
