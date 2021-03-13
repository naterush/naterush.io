import React from 'react';

import Post0, {TITLE0, DATE0, TEASER0} from "./Moar-Media";
import Post1, {TITLE1, DATE1, TEASER1} from "./Why-Version-Control-is-Not-Version-Control";
import Post2, {TITLE2, DATE2, TEASER2} from "./Sorry-Mr-Wallace";
import Post3, {TITLE3, DATE3, TEASER3} from "./Management-As-an-Engineering-Discipline";
import Post4, {TITLE4, DATE4, TEASER4} from "./Quarantine-1";
import Post5, {TITLE5, DATE5, TEASER5} from "./On-Generalized-Platforms";
import Post6, {TITLE6, DATE6, TEASER6} from "./A-New-Idea";
import Post7, {TITLE7, DATE7, TEASER7} from "./Trust-the-Process";
import Post8, {TITLE8, DATE8, TEASER8} from "./Data-Driven-Happiness";
import Post9, {TITLE9, DATE9, TEASER9} from "./Learning-From-the-Old";
import Post10, {TITLE10, DATE10, TEASER10} from "./Quarantine-2";
import Post11, {TITLE11, DATE11, TEASER11} from "./Quantum-Consensus-Algorithms";
import Post12, {TITLE12, DATE12, TEASER12} from "./Self-Hosting";
import Post13, {TITLE13, DATE13, TEASER13} from "./Accountability-not-Transparency";
import Post14, {TITLE14, DATE14, TEASER14} from "./Community-as-a-Protagonist";
import Post15, {TITLE15, DATE15, TEASER15} from "./Light-speed-Nerf-and-Abstraction";
import Post16, {TITLE16, DATE16, TEASER16} from "./Induced-Demand";
import Post17, {TITLE17, DATE17, TEASER17} from "./Client-side-Code-and-User-Guarantees";
import Post18, {TITLE18, DATE18, TEASER18} from "./Stacking-as-Human";
import Post19, {TITLE19, DATE19, TEASER19} from "./Taste-Reset";
import Post20, {TITLE20, DATE20, TEASER20} from "./Against-Index-Variables";
import Post21, {TITLE21, DATE21, TEASER21} from "./Spreadsheets-are-the-Ultimate-Programming-Paradigm";
import Post22, {TITLE22, DATE22, TEASER22} from "./Recursion-in-Evolution";
import Post23, {TITLE23, DATE23, TEASER23} from "./Options";
import Post24, {TITLE24, DATE24, TEASER24} from "./Blockchain-Governance-as-an-Information-System";
import Post25, {TITLE25, DATE25, TEASER25} from "./Formal-Methods-for-Scam-Detection";
import Post26, {TITLE26, DATE26, TEASER26} from "./Fuck-It-We'll-do-it-Live";
import Post27, {TITLE27, DATE27, TEASER27} from "./Depression-from-Existential-Dread";
import Post28, {TITLE28, DATE28, TEASER28} from "./Correct-by-Construction-Correct-by-Construction";
import Post29, {TITLE29, DATE29, TEASER29} from "./Sick-Yo";
import Post30, {TITLE30, DATE30, TEASER30} from "./Corporations-as-People";
import Post31, {TITLE31, DATE31, TEASER31} from "./Eighth-Grade-Optimism";
import Post32, {TITLE32, DATE32, TEASER32} from "./VM-Versioning-with-Persistent-Smart-Contracts";
import Post33, {TITLE33, DATE33, TEASER33} from "./Product-vs-Protocol";
import Post34, {TITLE34, DATE34, TEASER34} from "./Robots-will-Take-Our-Jobs-But-Not-Ours";
import Post35, {TITLE35, DATE35, TEASER35} from "./Throwing-Better";
import Post36, {TITLE36, DATE36, TEASER36} from "./More-Radical-than-You-Think";
import Post37, {TITLE37, DATE37, TEASER37} from "./Review-NileRed";
import Post38, {TITLE38, DATE38, TEASER38} from "./Types-of-Understanding";
import Post39, {TITLE39, DATE39, TEASER39} from "./Taste-Reset-2";


const x: {'key': string, 'post': () => JSX.Element, 'title': string, 'date': string, 'teaser': () => JSX.Element}[] = [{'key': "Spreadsheets-are-the-Ultimate-Programming-Paradigm", 'post': Post21, 'title': TITLE21, 'date': DATE21, 'teaser': TEASER21},
{'key': "Why-Version-Control-is-Not-Version-Control", 'post': Post1, 'title': TITLE1, 'date': DATE1, 'teaser': TEASER1},
{'key': "Fuck-It-We'll-do-it-Live", 'post': Post26, 'title': TITLE26, 'date': DATE26, 'teaser': TEASER26},
{'key': "On-Generalized-Platforms", 'post': Post5, 'title': TITLE5, 'date': DATE5, 'teaser': TEASER5},
{'key': "Taste-Reset-2", 'post': Post39, 'title': TITLE39, 'date': DATE39, 'teaser': TEASER39},
{'key': "Product-vs-Protocol", 'post': Post33, 'title': TITLE33, 'date': DATE33, 'teaser': TEASER33},
{'key': "Taste-Reset", 'post': Post19, 'title': TITLE19, 'date': DATE19, 'teaser': TEASER19},
{'key': "Quarantine-2", 'post': Post10, 'title': TITLE10, 'date': DATE10, 'teaser': TEASER10},
{'key': "Options", 'post': Post23, 'title': TITLE23, 'date': DATE23, 'teaser': TEASER23},
{'key': "Induced-Demand", 'post': Post16, 'title': TITLE16, 'date': DATE16, 'teaser': TEASER16},
{'key': "Self-Hosting", 'post': Post12, 'title': TITLE12, 'date': DATE12, 'teaser': TEASER12},
{'key': "Quarantine-1", 'post': Post4, 'title': TITLE4, 'date': DATE4, 'teaser': TEASER4},
{'key': "Against-Index-Variables", 'post': Post20, 'title': TITLE20, 'date': DATE20, 'teaser': TEASER20},
{'key': "Review-NileRed", 'post': Post37, 'title': TITLE37, 'date': DATE37, 'teaser': TEASER37},
{'key': "Data-Driven-Happiness", 'post': Post8, 'title': TITLE8, 'date': DATE8, 'teaser': TEASER8},
{'key': "Sorry-Mr-Wallace", 'post': Post2, 'title': TITLE2, 'date': DATE2, 'teaser': TEASER2},
{'key': "Depression-from-Existential-Dread", 'post': Post27, 'title': TITLE27, 'date': DATE27, 'teaser': TEASER27},
{'key': "Trust-the-Process", 'post': Post7, 'title': TITLE7, 'date': DATE7, 'teaser': TEASER7},
{'key': "Eighth-Grade-Optimism", 'post': Post31, 'title': TITLE31, 'date': DATE31, 'teaser': TEASER31},
{'key': "Stacking-as-Human", 'post': Post18, 'title': TITLE18, 'date': DATE18, 'teaser': TEASER18},
{'key': "Light-speed-Nerf-and-Abstraction", 'post': Post15, 'title': TITLE15, 'date': DATE15, 'teaser': TEASER15},
{'key': "More-Radical-than-You-Think", 'post': Post36, 'title': TITLE36, 'date': DATE36, 'teaser': TEASER36},
{'key': "Robots-will-Take-Our-Jobs-But-Not-Ours", 'post': Post34, 'title': TITLE34, 'date': DATE34, 'teaser': TEASER34},
{'key': "Management-As-an-Engineering-Discipline", 'post': Post3, 'title': TITLE3, 'date': DATE3, 'teaser': TEASER3},
{'key': "Throwing-Better", 'post': Post35, 'title': TITLE35, 'date': DATE35, 'teaser': TEASER35},
{'key': "VM-Versioning-with-Persistent-Smart-Contracts", 'post': Post32, 'title': TITLE32, 'date': DATE32, 'teaser': TEASER32},
{'key': "Sick-Yo", 'post': Post29, 'title': TITLE29, 'date': DATE29, 'teaser': TEASER29},
{'key': "Community-as-a-Protagonist", 'post': Post14, 'title': TITLE14, 'date': DATE14, 'teaser': TEASER14},
{'key': "Quantum-Consensus-Algorithms", 'post': Post11, 'title': TITLE11, 'date': DATE11, 'teaser': TEASER11},
{'key': "Moar-Media", 'post': Post0, 'title': TITLE0, 'date': DATE0, 'teaser': TEASER0},
{'key': "Types-of-Understanding", 'post': Post38, 'title': TITLE38, 'date': DATE38, 'teaser': TEASER38},
{'key': "Correct-by-Construction-Correct-by-Construction", 'post': Post28, 'title': TITLE28, 'date': DATE28, 'teaser': TEASER28},
{'key': "Formal-Methods-for-Scam-Detection", 'post': Post25, 'title': TITLE25, 'date': DATE25, 'teaser': TEASER25},
{'key': "Recursion-in-Evolution", 'post': Post22, 'title': TITLE22, 'date': DATE22, 'teaser': TEASER22},
{'key': "Client-side-Code-and-User-Guarantees", 'post': Post17, 'title': TITLE17, 'date': DATE17, 'teaser': TEASER17},
{'key': "Corporations-as-People", 'post': Post30, 'title': TITLE30, 'date': DATE30, 'teaser': TEASER30},
{'key': "Accountability-not-Transparency", 'post': Post13, 'title': TITLE13, 'date': DATE13, 'teaser': TEASER13},
{'key': "Learning-From-the-Old", 'post': Post9, 'title': TITLE9, 'date': DATE9, 'teaser': TEASER9},
{'key': "Blockchain-Governance-as-an-Information-System", 'post': Post24, 'title': TITLE24, 'date': DATE24, 'teaser': TEASER24},
{'key': "A-New-Idea", 'post': Post6, 'title': TITLE6, 'date': DATE6, 'teaser': TEASER6},
];

export default x;