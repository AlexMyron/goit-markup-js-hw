// refs
export const refs = {
  features: document.querySelector('.features'),
  work: document.querySelector('.work'),
  team: document.querySelector('.team'),
  clients: document.querySelector('.clients'),
};

export const refsPtf = {
  container: document.querySelector('.container--portfolio-section'),
};

export function setSection(ref, template, data) {
  ref.insertAdjacentHTML('beforeend', template(data));
}
