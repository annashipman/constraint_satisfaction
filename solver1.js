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
  var variables = CSP.problem.variables;
  
  var jslines = [];

  for(var v in variables) {
    console.log(v + ": " + variables[v]);
    
    for (var value in variables[v]) {
      var jsassignment = "var " + v + " = " + value + ";" 
      jslines.push(jsassignment);
    }
  }

  callback("Done");
}

CSP.solve(CSP.problem, function(solution){
  console.log(solution);
});


