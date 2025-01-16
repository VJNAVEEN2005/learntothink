import dbms from './dbms/dbms1.md';
import interview from './interview/interview1.md';
import python from './language/python.md';
import c from './language/c.md'
import cpp from './language/cpp.md'
import js from './language/js.md'
import java from './language/java.md'
import linkedlist from './concept/linkedlist.md'
import arrays from './concept/arrays.md'
import bubblesort from './sorting/bubblesort.md'
import insertionsort from './sorting/insertionsort.md'
import selectionsort from './sorting/selectionsort.md'
import mergesort from './sorting/mergesort.md'

// Consolidate all categories into one list
export const allData = [
  { Category: "concept", Topic: "dbms", content: dbms },
  { Category: "concept", Topic: "interview", content: interview },
  { Category: "concept", Topic: "linkedlist", content: linkedlist },
  { Category: "concept", Topic: "arrays", content: arrays },

  { Category: "language", Topic: "python", content: python },
  { Category: "language", Topic: "c", content: c },
  { Category: "language", Topic: "cpp", content: cpp },
  { Category: "language", Topic: "js", content: js },
  { Category: "language", Topic: "java", content: java },
  
  { Category: "sorting", Topic: "bubblesort", content: bubblesort },
  { Category: "sorting", Topic: "insertionsort", content: insertionsort },
  { Category: "sorting", Topic: "selectionsort", content: selectionsort },
  { Category: "sorting", Topic: "mergesort", content: mergesort },

];
