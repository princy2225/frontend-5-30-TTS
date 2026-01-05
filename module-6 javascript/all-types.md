 <h1>JavaScript Data Types</h1>
    <p>Open the console to see the output.</p>

    <script>
        // String
        let stringVar = "Hello, World!";
        console.log("String:", stringVar, "Type:", typeof stringVar);

        // Number
        let numberVar = 42;
        console.log("Number:", numberVar, "Type:", typeof numberVar);

        // BigInt
        let bigIntVar = 9007199254740991n;
        console.log("BigInt:", bigIntVar, "Type:", typeof bigIntVar);

        // Boolean
        let booleanVar = true;
        console.log("Boolean:", booleanVar, "Type:", typeof booleanVar);

        // Undefined
        let undefinedVar;
        console.log("Undefined:", undefinedVar, "Type:", typeof undefinedVar);

        // Null
        let nullVar = null;
        console.log("Null:", nullVar, "Type:", typeof nullVar); // Note: typeof null is "object"

        // Symbol
        let symbolVar = Symbol("id");
        console.log("Symbol:", symbolVar.toString(), "Type:", typeof symbolVar);

        // Object
        let objectVar = {
            name: "John",
            age: 30
        };
        console.log("Object:", objectVar, "Type:", typeof objectVar);

        // Array (which is a type of object)
        let arrayVar = [1, "apple", true];
        console.log("Array:", arrayVar, "Type:", typeof arrayVar);
    </script>
    
</body>
</html>
