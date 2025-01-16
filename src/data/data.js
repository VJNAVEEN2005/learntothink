import dbms from './dbms/dbms1.md';
import interview from './interview/interview1.md';
import python from './language/python.md';
import c from './language/c.md'
import cpp from './language/cpp.md'
import js from './language/js.md'

// Consolidate all categories into one list
export const allData = [
  { Category: "concept", Topic: "dbms", content: dbms },
  { Category: "concept", Topic: "interview", content: interview },
  { Category: "language", Topic: "python", content: python },
  {Category: "language", Topic:"c", content: c},
  {Category: "language", Topic:"cpp", content: cpp},
  {Category: "language", Topic:"js", content: js}
];
