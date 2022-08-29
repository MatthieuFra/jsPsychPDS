# Pairs generator

The pairs generator is a useful module implemented in jsPsych in order to create from an Array Q with <i>n</i> elements, an other Array Q' with all the possible pairs between Q elements, without mutations ([a, b] and [b, a] are considered the same, and there's no [a, a]).
It's coded using ES6 syntax. 


<i>
Example : 

Q = ['a', 'b', 'c', 'd', 'e'];	

Q' = [[['a','b'], ['a','c'], ['a','d'],['a','e'],['b','c'],['b','d'],['b','e'],['c','d'],['c','e'],['d','e']];

</i>
