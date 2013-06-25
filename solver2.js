var CSP = {};

CSP.problem = {
  variables : {
    q1_rank : [ 0, 1, 2, 3 ],
    q2_rank : [ 0, 1, 2, 3 ],
    q3_rank : [ 0, 1, 2, 3 ],
  },

  constraints : [
    //no queen can be in same rank as another queen
    "q1_rank != q2_rank",
    "q1_rank != q3_rank",
  ]
};

CSP.solve = function(problem, callback) {
  var solved = [];
  
  {
  //for each combination of variables in turn
  var candidate_solution = {"q1_rank":2,"q2_rank":0,"q3_rank":3};

  //evaluate against the constraints
  var constraint = "q1_rank != q2_rank";

  var lhs = constraint.split(" != ")[0]
  var rhs = constraint.split(" != ")[1]

  var satisfied = candidate_solution[lhs] != candidate_solution[rhs];

  console.log(satisfied);

  //if matches constraints - add to solved
  solved.push(candidate_solution);
  //if fails any constraint, ditch and move on
  }
  callback("Done");
}

CSP.solve(CSP.problem, function(solution){
  console.log(solution);
});


