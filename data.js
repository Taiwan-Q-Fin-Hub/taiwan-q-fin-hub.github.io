'use strict';

/* ── SVG icons ─────────────────────────────────────────── */
const SVG = {
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter:  `<svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
};

/* ── Data ───────────────────────────────────────────────── */
const COHORT = [
  {
    name: 'Alen Hsiao',
    photo: 'img/Hsiao, Wei-Lun.jpg',
    role: 'Computer Science Undergraduate, National Taiwan University',
    tags: ['ML', 'RL', 'Quantum Computing', 'FinTech'],
    bio: 'ICPC Taichung Regional Gold Medalist. Exploring ML, RL, quantum computing, and quantitative finance.',
    linkedin: 'https://www.linkedin.com/in/alen-hsiao/',
    twitter: '#',
  },
  {
    name: 'Charles Chiu',
    photo: 'img/CharlesChiu.jpg',
    role: 'Purdue University, Mechanical Engineering / Quantitative Trading',
    linkedin: 'https://www.linkedin.com/in/charles-chiu-a601b9210/',
    twitter: '#',
  },
  {
    name: 'Albert Chiang',
    monogram: 'AC',
    role: 'National Taiwan University, Civil Engineering / Finance',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Dennis Lin',
    monogram: 'DL',
    role: 'National Taiwan University, Finance MS - Financial Engineering',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Jack Huang',
    monogram: 'JH',
    role: 'National Taiwan University, International Political Economy / KGI Securities Investment Advisory',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Oliver Lin',
    monogram: 'OL',
    role: 'National Taiwan University, Computer Science MS',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Ryan Liu',
    monogram: 'RL',
    role: 'National Taiwan University, Information Management',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sara Ho',
    monogram: 'SH',
    role: 'National Tsing Hua University, Quantitative Finance MS',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Wayne Hsieh',
    monogram: 'WH',
    role: 'National Taiwan University, International Business',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Zack Chiu',
    monogram: 'ZC',
    role: 'National Cheng Kung University, Physics',
    linkedin: '#',
    twitter: '#',
  },
];

const ADVISORS = [
  {
    name: 'Cliff Weng',
    photo: 'img/cliffweng.jpg',
    role: 'Industry Advisor',
    org: 'Paloma / Citadel / Numerix',
    linkedin: 'https://www.linkedin.com/in/cliffweng/',
  },
  {
    name: 'Samuel Chen',
    photo: 'img/SamuelChen.jpg',
    role: 'Academic Advisor',
    org: 'Quantum AI Scientist',
    linkedin: 'https://www.linkedin.com/in/samuel-yen-chi-chen/',
  },
  {
    name: 'Kuan-Tsae Huang',
    photo: 'img/Kuan-Tsae-Huang.jpg',
    role: 'Chief Advisor',
    org: 'Chair, AI &amp; Quantum, Asia University',
    linkedin: 'https://www.linkedin.com/in/kuan-tsae-huang-0a77788/',
  },
  {
    name: 'Elaine Chou',
    photo: 'img/elainechou.jpg',
    role: 'Industry Advisor',
    org: 'Credit, AI',
    linkedin: 'https://www.linkedin.com/in/elaineschou/',
  },
  {
    name: 'Kunshan Huang',
    photo: 'img/KunshanHuang.jpg',
    role: 'Industry Advisor',
    org: 'Wall Street veteran',
    linkedin: 'https://www.linkedin.com/in/kunshan-huang-b61172/',
  },
  {
    name: 'Clark Hsu',
    photo: 'img/clarkhsu.jpg',
    role: 'Industry Advisor',
    org: 'CEO, Paramita Capital',
    linkedin: 'https://www.linkedin.com/in/tradeoflife/',
  },
  {
    name: 'Frank Shih',
    role: 'Academic Advisor',
    org: 'Professor, NJIT',
  },
];

/* ── Render helpers ─────────────────────────────────────── */
function _links(m) {
  return `<div class="spc-links">
    ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${SVG.linkedin}</a>` : ''}
    ${m.twitter  ? `<a href="${m.twitter}"  target="_blank" rel="noopener" aria-label="Twitter">${SVG.twitter}</a>`  : ''}
  </div>`;
}

function studentCard(m) {
  if (m.photo) {
    return `<div class="student-preview-card has-photo">
  <div class="spc-photo"><img src="${m.photo}" alt="${m.name}" /></div>
  <div class="spc-body">
    <div class="spc-name">${m.name}</div>
    <div class="spc-role">${m.role}</div>
    ${m.tags ? `<div class="spc-tags">${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
    ${m.bio  ? `<div class="spc-bio">${m.bio}</div>` : ''}
    ${_links(m)}
  </div>
</div>`;
  }
  return `<div class="student-preview-card no-photo">
  <div class="spc-body">
    <div class="spc-monogram">${m.monogram}</div>
    <div class="spc-name">${m.name}</div>
    <div class="spc-role">${m.role}</div>
    ${_links(m)}
  </div>
</div>`;
}

function advisorCard(a) {
  return `<div class="advisor-card">
  ${a.photo ? `<div class="advisor-photo"><img src="${a.photo}" alt="${a.name}" /></div>` : ''}
  <div class="advisor-info">
    <div class="advisor-name">${a.name}</div>
    <div class="advisor-role">${a.role}</div>
    <div class="advisor-org">${a.org}</div>
    ${a.linkedin ? `<a class="advisor-link" href="${a.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ''}
  </div>
</div>`;
}

function _avatarStrip(people, max) {
  const show = people.slice(0, max);
  const rest = people.length - max;
  const items = show.map(p => p.photo
    ? `<img src="${p.photo}" alt="${p.name}" title="${p.name}" />`
    : `<span class="cohort-avatar-initials" title="${p.name}">${(p.monogram || p.name[0])}</span>`
  ).join('');
  const more = rest > 0 ? `<span class="cohort-avatar-more">+${rest}</span>` : '';
  return `<div class="cohort-avatars">${items}${more}</div>`;
}

/* ── Public init functions ──────────────────────────────── */
function initStudentGrid(id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = COHORT.map(studentCard).join('');
}

function initAdvisorsGrid(id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = ADVISORS.map(advisorCard).join('');
}

function initPeopleTeaser(cohortAvatarsId, advisorAvatarsId) {
  const ce = document.getElementById(cohortAvatarsId);
  if (ce) ce.innerHTML = _avatarStrip(COHORT, 5);
  const ae = document.getElementById(advisorAvatarsId);
  if (ae) ae.innerHTML = _avatarStrip(ADVISORS.filter(a => a.photo), 5);
}
