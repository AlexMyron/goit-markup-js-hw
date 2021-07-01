import { refs, setSection } from './refs';
import featuresTpl from '../templates/studio-tpl/features.hbs';
import featuresData from '../data/studio-data/features.json';
import workTpl from '../templates/studio-tpl/work.hbs';
import workData from '../data/studio-data/work.json';
import teamTpl from '../templates/studio-tpl/team.hbs';
import teamData from '../data/studio-data/team.json';
import clientsTpl from '../templates/studio-tpl/clients.hbs';
import clientsData from '../data/studio-data/clients.json';

// features section
setSection(refs.features, featuresTpl, featuresData);

// work section
setSection(refs.work, workTpl, workData);

// team
setSection(refs.team, teamTpl, teamData);

// clients
setSection(refs.clients, clientsTpl, clientsData);
