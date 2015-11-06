/* Non-rigorous programming proof for Turing's Halting Problem */

/* Start off by assuming that this function works and is valid.
  The function takes any program and any input and returns true
  if the program halts, or false if it runs forever. */
var halt = function(program, input) {
  if (program(input) 'shows that program DOES halt') {
    return true;    //program halts
  }
  else {
    return false;   //program runs forever
  }
}

/* This function is created specifically to aid in the
  proof by contradiction. The function takes a program
  as input and tests to see if it halts or not. If the input
  program halts, it runs forever. If the input program does
  not halt, then it returns true and thus halts */
var selfHalt = function(program) {
  if (halt(program, program)) {
    while(1){};
  } else {
    return true;
  }
}

/* call this function on itself to see what happens
  This is the key part of the proof */
selfHalt(selfHalt);

/*    Explanation/Proof:
  selfHalt can either halt or not halt.
  Since we are calling selfHalt(selfHalt), calling the function
  on itself, we are then calling halt(selfHalt, selfHalt), which
  tests to see if selfHalt halts when called on itself.

  if selfHalt does halt:
    then halt(selfHalt, selfHalt) must be true
    If this is the case, then based off of the selfHalt function,
    selfHalt will run forever due to the while loop
    then that would mean halt(selfHalt, selfHalt) must be false
    So, halt(selfHalt, selfHalt) is equal to true and false
    Meaning if selfHalt halts, then it runs forever

  if selfHalt does NOT halt:
    then halt(selfHalt, selfHalt) must be false
    If this is the case, then based off of the selfHalt function,
    selfHalt will return true and halt
    then that would mean halt(selfHalt, selfHalt) must be true
    So, halt(selfHalt, selfHalt) is equal to false and true
    Meaning if selfHalt runs forever, then it halts

  For both cases, we have reached a contradiction showing
  that the program both halts and runs forever at the same time.
  Therefore, we can conclude by proof of contradiction that the
  original assumption showing that the halting function is valid
  must not be true. So, there cannot exist a function that takes
  an arbitrary function and input and determines whether or not
  the function halts.   */
