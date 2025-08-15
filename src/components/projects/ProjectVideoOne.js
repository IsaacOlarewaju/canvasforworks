export const ProjectVideoOne = ({ vid }) => {
  return (
    <div className="projects-artwork-container">
      <video autoPlay loop width="100%">
        <source src={vid} type="video/mp4"></source>
      </video>
    </div>
  );
};
