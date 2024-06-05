import Image from "next/image";
import {FloatingNavDemo} from "./components/Navbar";

export default function Home() {
  return (
    <>
    <FloatingNavDemo/>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <p>
    Explanation
Border Image Source: The border-image-source property is set to a linear gradient.
Border Image Slice: The border-image-slice property specifies how to slice the border image. A value of 1 means the image will be used as is without slicing.
Border Radius: The border-radius: 50% ensures the element is circular.
Choose the Right Method
Use Method 1 if you need fine control over the border's dimensions or want to apply different effects.
Use Method 2 for simpler implementations where you want a quick gradient border without much customization.
Both methods effectively create a circular element with a gradient border, so choose based on your specific needs and the complexity of your design.
Yes, you can use JavaScript (JS) without TypeScript (TS) in a Next.js project or any React project, including when working with UI libraries like Aceternity UI. Here's a guide on how to set up a Next.js project with JavaScript:

Step-by-Step Guide
1. Create a New Next.js Project
To create a new Next.js project using JavaScript, you can use the following command:

This will start the development server and you can view your project in the browser.

Notes
No TypeScript Configuration Needed: By creating the project with the --js flag, you ensure that the project is set up without TypeScript, and all your files will be JavaScript by default.
TypeScript Files: If you encounter TypeScript files or if Aceternity UI provides TypeScript definitions, you can simply ignore them and continue using JavaScript. React components written in TypeScript can be used in JavaScript files without any issues.
Type Definitions: If you ever need type definitions for better editor support, you can still install the types package (if available) but this is optional and not necessary for running JavaScript.
Example with Aceternity UI
Here’s a complete example if aceternity-ui had a Button component:

pages/index.js:
    </p>
    </>
  );
}
