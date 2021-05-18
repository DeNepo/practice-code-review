import { arrayIntersection } from './intersection.js';

const group1 = {
  student1: 'Oksana Shulha',
  student2: 'Mayuri Patil',
  student3: 'Erkam Guresen',
  student4: 'Emely Salmeron',
  student5: 'Rafael Garcia',
};

const group2 = {
  student1: 'Evan cole',
  student2: 'Furkan Kilic',
  student3: 'Inggrite Novaleta',
  student4: 'Emely Salmeron',
  student5: 'Rafael Garcia',
};

console.log(arrayIntersection(Object.values(group1), Object.values(group2)));
