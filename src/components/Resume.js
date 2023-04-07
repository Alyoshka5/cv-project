import '../styles/Resume.css';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailOutline, mdiMapMarker } from '@mdi/js';

export default function Resume({ info }) {
    return (
        <div className='resume'>
            <div className='main-content'>
                <Name name={info.name} />
                <Summary summary={info.summary} />
                <Experience experience={info.experience} />
            </div>
            <div className='secondary-content'>
                <Contact contact={info.contact} />
                <Education education={info.education} />
            </div>
        </div>
    );
}

function Name({ name }) {
    return (
        <div className='name'>
            <h1>{name}</h1>
            <div className='divider'></div>
        </div>
    );
}

function Summary({ summary }) {
    return (
        <div className='summary'>
            <h2 className='section-header'>Summary</h2>
            <p className='content'>{summary}</p>
        </div>
    );
}

function Experience({ experience }) {
    return (
        <div className='experience'>
            <h2 className='section-header'>Experience</h2>
            {experience.map((job, jobIdx) => {
                return (
                    <div className='job-info' key={jobIdx}>
                        <div className='job-details'>
                            <div className='line-one-details'>
                                <span className='job-position'>{job.position}</span> <span className='job-date'>{job.start} - {job.end}</span>
                            </div>
                            <div>
                                <span className='job-company'>{job.company},</span> <span className='job-location'>{job.location}</span>
                            </div>
                        </div>
                        <ul className='job-description'>
                            {job.description.map((descriptionPoint, pointIdx) => {
                                return (
                                    <li key={pointIdx}>
                                        <div className='bullet-point'></div>
                                        <div className='job-point'>{descriptionPoint}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

function Contact({ contact }) {
    return (
        <div className='contact'>
            <h2 className='section-header'>Contact</h2>
            <div className='contact-info'>
                <div className='contact-detail'>
                    <Icon path={mdiPhone} size={1} color={'#fff'} />
                    <span>{contact.phone}</span>
                </div>
                <div className='contact-detail'>
                    <Icon path={mdiEmailOutline} size={1} color={'#fff'} />
                    <span>{contact.email}</span>
                </div>
                <div className='contact-detail'>
                    <Icon path={mdiMapMarker} size={1} color={'#fff'} />
                    <span>{contact.address}</span>
                </div>
            </div>
        </div>
    );
}

function Education({ education }) {
    return (
        <div className='education'>
            <h2 className='section-header'>Education</h2>
            <div className='education-info'>
                <div>
                    <span className='education-degree'>{education.degree}</span>
                </div>
                <div>
                    <span className='education-graduation'>Expected in {education.graduation}</span>
                </div>
                <div>
                    <span className='education-school'>{education.school}</span> - <span className='educaiton-location'>{education.location}</span>
                </div>
            </div>
        </div>
    )
}
