
let graph;
let visiting;
let visited;

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    graph = new Map();
    visiting = new Set();
    visited = new Set();
    
    for(let [course, providedPreRequisite] of prerequisites){
        if(graph.has(course)){
            let existingPreRequisites = graph.get(course);
            existingPreRequisites.push(providedPreRequisite);
            graph.set(course,existingPreRequisites);
        }else{
            graph.set(course,[providedPreRequisite]);
        }
    }
    
    for(const [course,providedPreRequisite] of graph){
        if(has_cycle_dfs(course)){
            return false; //if cyclic it will not finish so it is false
        }
    }
    
    return true;
    
    
}

var has_cycle_dfs = function(course){
    visiting.add(course);
    let preRequisites = graph.get(course);   // get all the edges to explore
    
    if(preRequisites){
       for(let preRequisite of preRequisites){
            if(visited.has(preRequisite)){ //skip if it is explored already
                continue;
            }

            if(visiting.has(preRequisite)){ //found e is being explored
                return true;
            }

            if(has_cycle_dfs(preRequisite)){ // DFS deeper if this e is cyclic
                return true;
            }
        } 
    }   
    
    visiting.delete(course); // remove from visiting set when all decedant v are visited
    visited.add(course);
    return false;
}