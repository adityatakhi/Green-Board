export type Resource={slug:string;title:string;type:string;classId:number;subject:string;chapter:string;description:string};
export const classes=[9,10,11,12].map(id=>({id,title:`Class ${id}`,description:id<11?'Build strong fundamentals':'Go deeper with exam-focused practice'}));
export const subjectsByClass:Record<number,string[]>={9:['Mathematics','Science','English','Social Science'],10:['Mathematics','Science','English','Social Science'],11:['Physics','Chemistry','Mathematics','Biology','English'],12:['Physics','Chemistry','Mathematics','Biology','English']};
export const chapters:Record<string,string[]>={
 '12-Mathematics':['Relations & Functions','Matrices','Determinants','Continuity & Differentiability','Integrals'],
 '12-Physics':['Electric Charges & Fields','Electrostatic Potential','Current Electricity','Moving Charges & Magnetism'],
 '12-Chemistry':['Solutions','Electrochemistry','Chemical Kinetics','Haloalkanes & Haloarenes'],
 '11-Physics':['Units & Measurements','Motion in a Straight Line','Laws of Motion'],
 '10-Mathematics':['Real Numbers','Polynomials','Pair of Linear Equations','Quadratic Equations'],
};
export const resources:Resource[]=[
 {slug:'matrices-notes',title:'Matrices — Complete Notes',type:'Notes',classId:12,subject:'Mathematics',chapter:'Matrices',description:'Concepts, properties, operations and exam-ready examples.'},
 {slug:'matrices-pyq',title:'Matrices — Previous Year Questions',type:'PYQ',classId:12,subject:'Mathematics',chapter:'Matrices',description:'A focused set of previous-year style practice questions.'},
 {slug:'current-electricity-notes',title:'Current Electricity — Notes',type:'Notes',classId:12,subject:'Physics',chapter:'Current Electricity',description:'Definitions, laws, derivations and formula recap.'},
 {slug:'electrochemistry-formulas',title:'Electrochemistry Formula Sheet',type:'Formula Sheet',classId:12,subject:'Chemistry',chapter:'Electrochemistry',description:'A quick, scannable revision sheet.'},
];
export const test={id:'matrices-01',title:'Matrices — Practice Test',duration:20,questions:[{id:'q1',text:'If A is a 2×2 identity matrix, det(A) is:',options:['0','1','2','-1'],answer:1,explanation:'The determinant of an identity matrix is 1.'},{id:'q2',text:'A matrix with equal number of rows and columns is called:',options:['Row matrix','Column matrix','Square matrix','Null matrix'],answer:2,explanation:'A square matrix has the same number of rows and columns.'},{id:'q3',text:'The transpose of the transpose of A is:',options:['A','-A','I','A²'],answer:0,explanation:'(Aᵀ)ᵀ = A.'}]};
export const courses=[{slug:'class-12-maths-mastery',title:'Class 12 Mathematics Mastery',description:'Structured lessons, practice and tests for the full mathematics journey.',price:999,instructor:'Green Board Faculty',progress:42},{slug:'class-12-physics-core',title:'Class 12 Physics Core',description:'Build conceptual clarity with focused theory and practice.',price:999,instructor:'Green Board Faculty',progress:18}];
