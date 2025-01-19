const topics = {
  concept: ["concept/dbms", "concept/interview", "concept/linkedlist", "concept/arrays"],
  language: ["language/python", "language/c", "language/cpp", "language/js", "language/java"],
  sorting: ["sorting/bubblesort", "sorting/insertionsort", "sorting/selectionsort", "sorting/mergesort"]
};

export const allData = Object.entries(topics).flatMap(([category, paths]) =>
  paths.map(path => ({
    Category: category,
    Topic: path.split("/").pop(),
    content: require(`./${path}.md`)
  }))  
);  

