# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. Are Ruby methods accessors or mutators?

  Your answer: I believe ruby is both accessors and mutators. Ruby uses accessor methods with setters/getters but it also is able to continously reassign variables.

  Researched answer: Setters are very similar to indexed assignment; they are methods that are defined to modify the state of an object. Both employ the something = value syntax, so they superficially look like assignments. With indexed assignment, the elements of a collection (or the characters of a String) are replaced; with setters, the state of the object is modified, usually by modifying an instance variable.



2. What is a block in Ruby?

  Your answer: a ruby block is a code block in ruby

  Researched answer: Ruby Code blocks (called closures in other languages) are chunks of code between braces or between do..end that you can associate with method invocations, almost as if they were parameters. A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). The code in the block is not executed at the time it is encountered. Instead, Ruby remembers the context in which the block appears (the local variables, the current object, and so on) and then enters the method.



3. Ruby has an implicit return. What does that mean?

  Your answer: ruby will automatically return a result regardless of whether it has been asked by the developer

  Researched answer:Any statement in Ruby returns the value of the last evaluated expression. A simple example is the getter method. We call a method and expect some value in return



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming is different in that it contains classes which act as blueprints for a code block

  Researched answer:

  Ruby is an object-oriented programming language (OOP) that uses classes as blueprints for objects. Objects are the basic building-blocks of Ruby code (everything in Ruby is an object), and have two main properties: states and behaviours. Ruby classes are the blueprints that establish what attributes (also known as states) and behaviours (known in Ruby as methods) that an object should have.


5. What is the difference between a class and an object?

Your answer: A class is a specified set of values and a object can have values that can also be re-assigned later

Researched answer A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.

Object is an instance of a class while class is a blueprint of an object. Classes can extend parent classes to inherit traits. Objects can be created many lines. Class are logical and can be declared once



6. STRETCH: What is Duck Typing?

  Your answer: I do not know

  Researched answer: Duck Typing means an object type is defined by what it can do, not by what it is. Duck Typing refers to the tendency of Ruby to be less concerned with the class of an object and more concerned with what methods can be called on it and what operations can be performed on it. In Ruby, we would use respond_to? or might simply pass an object to a method and know that an exception will be raised if it is used inappropriately.

  If an object walks like a duck and talks like a duck, then the Ruby interpreter is happy to treat it as if it were a duck.



## Looking Ahead: Terms for Next Week
- PostgreSQL
- API
- CRUD
- Ruby on Rails
- ORM
- Active Record
