import React from 'react';
import './project.css';
export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Project Description',
            project: [{

                    projectName: 'Mugatunes',
                    projectCost: '10K',
                    releaseDate: '12-02-2019',
                    Technology: 'ReactJs'
                },
                {
                    projectName: 'Techadox',
                    projectCost: '20K',
                    releaseDate: '28-12-2018',
                    Technology: 'laravel'
                },
                {
                    projectName: 'Reti',
                    projectCost: '30k',
                    releaseDate: '28-11-2018',
                    Technology: 'phyton'
                }
            ]


        }
    }

    render() {
        return (
            <section>
			{this.props.name}
				<h1>{this.state.title} </h1>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Cost</th>
							<th>ReleaseDate</th>
							<th>Technology</th>
						</tr>
					</thead>
					<tbody>

						{	
							this.state.project.map(function(name,index){
								return <ProjectDesc key={index} details={name}/>
							})
						}
					</tbody>
				</table>
			</section>
        )
    }
}

export class ProjectDesc extends React.Component {

    render() {

        return (
            <tr>
				<td>{this.props.details.projectName}</td>
				<td>{this.props.details.projectCost}</td>
				<td>{this.props.details.releaseDate}</td>
				<td>{this.props.details.Technology}</td>
			</tr>
        )
    }
}