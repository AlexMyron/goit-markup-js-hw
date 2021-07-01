import '../sass/main.scss';
import { setSection } from './refs';
import { refsPtf } from './refs';
import prtfTpl from '../templates/prtf-tpl/prtf-section.hbs';
import prtfData from '../data/portfolio-data/prtf-section.json';
import filterTpl from '../templates/prtf-tpl/filer.hbs';
import filterData from '../data/portfolio-data/filter.json';

// filter
setSection(refsPtf.container, filterTpl, filterData);

// portfolio list
setSection(refsPtf.container, prtfTpl, prtfData);
