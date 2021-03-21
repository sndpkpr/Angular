- The lib directory, for most of my projects, is where I place shared components that might be used in multiple facets of my application.

- Things in this folder should not be tightly coupled to your application, and should theoretically be able to be plucked from one project to another, and work as expected (assuming all dependencies are available).
Some examples of things I put in my lib folders:

- If I'm defining a policy/process for loading bootstrapped data off the page into my frontend code, I would define the class/method in a file in the lib folder. It is just functional, and not bound to any of my application code or DOM structure.

- If I need to build my own UI components (let's say I need to merge some Tagging functionality into a text area, and am unhappy with existing OSS alternatives), I would do it here. The code in lib just outlines how my component works, but doesn't implement any application-specific functionality. I can then include this in my core application and use it as if it were a third party library.