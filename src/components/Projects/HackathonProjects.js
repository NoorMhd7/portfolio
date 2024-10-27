/* import uniqid from 'uniqid';
import { hack } from '../../portfolio'; // Import the hack constant
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './HackathonProjects.css';

const HackathonProjects = () => {
  if (!hack.length) return null;

  return (
    <section id='hackathon-projects' className='section hackathon-projects'>
      <h2 className='section__title'>Hackathon Projects</h2>

      <div className='projects__grid'>
        {hack.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default HackathonProjects;
 */