
What are the four pillars of Object-Oriented Programming?

- **Encapsulation**: Bundling data (properties) and methods (functions) into a single unit (class) while restricting direct access.
- **Abstraction**: Hiding implementation details and exposing only essential functionalities.
- **Inheritance**: Allowing a class to inherit properties and methods from another class to promote code reuse.
- **Polymorphism**: Enabling a method to have different implementations in different classes.



How do JavaScript classes differ from traditional classes in languages like Java or C++?

- JavaScript classes are **syntactical sugar** over its prototype-based inheritance, whereas Java and C++ use classical inheritance.
- JavaScript allows objects to inherit dynamically, whereas Java/C++ require strict class hierarchies.
- JavaScript does not have static type enforcement like Java and C++.



Explain prototype-based inheritance in JavaScript.

- Prototype-based inheritance allows objects to inherit properties and methods from another object via its prototype. Each JavaScript object has an internal `[[Prototype]]` property that points to another object from which it inherits.



How do you create a private property in a JavaScript class?

Private properties in JavaScript classes are declared using `#`.



What is the purpose of super() in JavaScript classes?

The `super()` function is used in a subclass to call the constructor or methods of its parent class.




Explain the difference between composition and inheritance.

- **Inheritance** is a relationship where a subclass derives properties and behaviors from a parent class (`is-a` relationship).
- **Composition** is where a class contains other classes as attributes instead of extending a class (`has-a` relationship).

