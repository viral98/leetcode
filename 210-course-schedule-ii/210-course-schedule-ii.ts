function findOrder(numCourses: number, prerequisites: number[][]): number[] {

   const courseMap = new Map(), topSortArr = [];
    
  for (const [course, prereq] of prerequisites) {
    if (!courseMap.has(course)) courseMap.set(course, []);
    courseMap.get(course).push(prereq);
  }
  
  const visited = new Set();
  
  function topSort(course, visiting = new Set()) {
    if (visiting.has(course)) return false;
    if (visited.has(course)) return true;
    
    if (courseMap.has(course)) {
      visiting.add(course);
      for (let pre of courseMap.get(course)) {
        if (!topSort(pre, visiting)) return false;
      }
      visiting.delete(course);
    }
    
    topSortArr.push(course);
    visited.add(course);
    return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (!topSort(i)) return [];
  }
  
  return topSortArr;
};