import React from 'react';

const ProjectDetails = props => {
  console.log(props);

  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project title - {props.match.params.id}</div>
          <p>blablablah blah..</p>
        </div>
        <div className="card-action grey-text text-lighten-1">
          <div>posted by Tim Sun</div>
          <div>2019-02-02 11:57</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
