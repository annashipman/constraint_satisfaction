CSP.problem = {
  variables : {
    q1_rank : [ 0, 1, 2, 3 ],
    q1_file : [ 0, 1, 2, 3 ],
    q2_rank : [ 0, 1, 2, 3 ],
    q2_file : [ 0, 1, 2, 3 ],
    q3_rank : [ 0, 1, 2, 3 ],
    q3_file : [ 0, 1, 2, 3 ],
    q4_rank : [ 0, 1, 2, 3 ],
    q4_file : [ 0, 1, 2, 3 ],
  },

  constraints : [
    //no queen can be in same rank as another queen
    "q1_rank != q2_rank",
    "q1_rank != q3_rank",
    "q1_rank != q4_rank",
    "q2_rank != q3_rank",
    "q2_rank != q4_rank",
    "q3_rank != q4_rank",
    
    //no queen can be in the same file as another queen
    "q1_file != q2_file",
    "q1_file != q3_file",
    "q1_file != q4_file",
    "q2_file != q3_file",
    "q2_file != q4_file",
    "q3_file != q4_file",

    //no queen can be in the same diagonal as another queen
    "(q1_rank - q1_file) != (q2_rank - q2_file)",
    "(q1_rank + q1_file) != (q2_rank + q2_file)",
    "(q1_rank - q1_file) != (q3_rank - q3_file)",
    "(q1_rank + q1_file) != (q3_rank + q3_file)",
    "(q1_rank - q1_file) != (q4_rank - q4_file)",
    "(q1_rank + q1_file) != (q4_rank + q4_file)",

    "(q2_rank - q2_file) != (q3_rank - q3_file)",
    "(q2_rank + q2_file) != (q3_rank + q3_file)",
    "(q2_rank - q2_file) != (q4_rank - q4_file)",
    "(q2_rank + q2_file) != (q4_rank + q4_file)",

    "(q3_rank - q3_file) != (q4_rank - q4_file)",
    "(q3_rank + q3_file) != (q4_rank + q4_file)",
  ]
}
