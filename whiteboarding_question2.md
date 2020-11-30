#TECH QUESTIONS:

1. What operating system do you use and why?

  I personally use apple/mac as my operating system of choice. As a chid my dad raised me starting with an apple II se and used apples all growing up. As a developer apple provides some innate coding perks and before I was in technology I would edit photography photos or videos which works best with mac based on my personal experience.

2. Compare and contrast floats in JavaScript and Ruby. (Optional stretch: What do you get when you divide 0/0 in each language?)

  JavaScript is dynamically typed and will often convert implicitly between strings and floating-point numbers.
  Ruby has an arbitrary-precision decimal type, which also allows to choose the rounding mode. Sometimes called “bignum” has the ability to increase the length of the significand (possibly also the exponent) as required. The downside is that there is some basic overhead (memory and speed) to support this flexibility.

3. What is the difference between a function and a method? Does the distinction matter?

  A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.

  A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

  1. A method is implicitly passed the object on which it was called.
  2. A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).


#PROMPT:
As a developer, you are given a multi digit number. Write a function that takes the number and returns an array with a single integer at each index. (Can be done in JavaScript or Ruby)


#JavaScript
//.map through function to analyze given information
//.indexOf() give the position of the element one is looking forward

var element = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
var objectFound = array[elementPos];
