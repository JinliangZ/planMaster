import React from 'react';
import moment from 'moment'

const ProjectSummary = (props) => {
    const {project} = props;
    return ( 
        <div className="card z-depth-0 project_summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Post by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">
                    {project.createdAt
            ? moment(project.createdAt.toDate()).calendar()
            : "loading"}
                    </p>
                </div>
        </div>
     );
}
 
export default ProjectSummary;