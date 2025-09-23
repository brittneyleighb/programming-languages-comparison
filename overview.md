# Comprehensive Programming Languages Comparison
## Rust vs C++ vs C# vs Java - The Ultimate Developer's Guide

### 🏗️ High-Level Overview

Think of these languages like different construction approaches:

- **C++**: Like a powerful but complex construction toolkit - you have complete control but need to manage every detail yourself
- **Java**: Like building with standardized, pre-fabricated modules in a controlled environment (JVM)
- **C#**: Similar to Java but with Microsoft's architectural standards and some additional modern tools
- **Rust**: Like having an extremely thorough safety inspector who prevents construction errors before they happen

## 📊 Language Comparison Matrix

| Feature | C++ | Java | C# | Rust |
|---------|-----|------|----|----- |
| **First Release** | 1985 | 1995 | 2000 | 2010 |
| **Paradigm** | Multi-paradigm | OOP + Functional | OOP + Functional | Systems + Functional |
| **Memory Management** | Manual (RAII) | Garbage Collection | Garbage Collection | Ownership System |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Memory Safety** | Manual | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Learning Curve** | Very Steep | Moderate | Moderate | Steep |
| **Compile Time** | Slow-Medium | Fast (JIT) | Fast (JIT) | Slow |
| **Runtime Overhead** | None | JVM | .NET Runtime | None |
| **Cross-Platform** | Yes (with effort) | Write once, run anywhere | Windows-focused (improving) | Excellent |

## 📝 Comprehensive Syntax Comparison

### 1. Basic Data Types & Variables

```cpp
// C++
bool flag = true;
char letter = 'A';
int number = 42;
long bigNumber = 1000000L;
float decimal = 3.14f;
double precision = 3.141592653589793;
std::string text = "Hello";
auto inferred = 42;  // Type inference

// Pointers and references
int* ptr = &number;
int& ref = number;

// Constants
const int CONSTANT = 100;
constexpr int COMPILE_TIME = 42;
```

```java
// Java
boolean flag = true;
char letter = 'A';
byte smallInt = 127;
short mediumInt = 32000;
int number = 42;
long bigNumber = 1000000L;
float decimal = 3.14f;
double precision = 3.141592653589793;
String text = "Hello";  // Reference type
var inferred = 42;  // Java 10+ type inference

// All objects are references (no explicit pointers)
Integer boxedInt = 42;  // Wrapper classes

// Constants
final int CONSTANT = 100;
static final int CLASS_CONSTANT = 200;
```

```csharp
// C#
bool flag = true;
char letter = 'A';
byte smallInt = 255;
short mediumInt = 32000;
int number = 42;
long bigNumber = 1000000L;
float decimal = 3.14f;
double precision = 3.141592653589793;
decimal money = 99.99m;  // Financial precision
string text = "Hello";
var inferred = 42;  // Type inference

// Nullable types
int? nullableInt = null;
string? nullableString = null;  // C# 8+

// Constants
const int CONSTANT = 100;
static readonly int RUNTIME_CONSTANT = DateTime.Now.Year;
```

```rust
// Rust
let flag: bool = true;
let letter: char = 'A';  // Unicode scalar
let number: i32 = 42;    // Explicit signed 32-bit
let big_number: i64 = 1_000_000;  // Underscores for readability
let decimal: f32 = 3.14;
let precision: f64 = 3.141592653589793;
let text: &str = "Hello";  // String slice
let owned_text: String = "Hello".to_string();

// Mutability is explicit
let mut mutable_number = 42;
mutable_number += 1;

// Type inference
let inferred = 42;  // i32 by default

// Constants
const CONSTANT: i32 = 100;
static GLOBAL_CONSTANT: i32 = 200;
```

### 2. Collections & Data Structures

```cpp
// C++
#include <vector>
#include <map>
#include <unordered_map>
#include <set>
#include <array>

// Dynamic arrays
std::vector<int> numbers = {1, 2, 3, 4, 5};
numbers.push_back(6);

// Fixed-size arrays
std::array<int, 5> fixedArray = {1, 2, 3, 4, 5};

// Hash maps
std::unordered_map<std::string, int> ages = {
    {"Alice", 25},
    {"Bob", 30}
};

// Sets
std::set<std::string> uniqueNames = {"Alice", "Bob", "Charlie"};

// Iterating
for (const auto& item : numbers) {
    std::cout << item << " ";
}
```

```java
// Java
import java.util.*;

// Dynamic arrays
List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
numbers.add(6);

// Alternative with List.of (immutable)
List<Integer> immutableList = List.of(1, 2, 3, 4, 5);

// Hash maps
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);

// Or with Map.of
Map<String, Integer> ages2 = Map.of("Alice", 25, "Bob", 30);

// Sets
Set<String> uniqueNames = new HashSet<>(Arrays.asList("Alice", "Bob"));

// Iterating
numbers.forEach(System.out::println);
for (Integer number : numbers) {
    System.out.println(number);
}
```

```csharp
// C#
using System;
using System.Collections.Generic;
using System.Linq;

// Dynamic arrays
List<int> numbers = new List<int> {1, 2, 3, 4, 5};
numbers.Add(6);

// Arrays
int[] fixedArray = {1, 2, 3, 4, 5};

// Dictionaries
Dictionary<string, int> ages = new Dictionary<string, int>
{
    {"Alice", 25},
    {"Bob", 30}
};

// Sets
HashSet<string> uniqueNames = new HashSet<string> {"Alice", "Bob"};

// LINQ operations
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();

// Iterating
foreach (var number in numbers)
{
    Console.WriteLine(number);
}
```

```rust
// Rust
use std::collections::{HashMap, HashSet, BTreeMap, VecDeque};

// Dynamic arrays (vectors)
let mut numbers = vec![1, 2, 3, 4, 5];
numbers.push(6);

// Fixed-size arrays
let fixed_array: [i32; 5] = [1, 2, 3, 4, 5];

// Hash maps
let mut ages = HashMap::new();
ages.insert("Alice".to_string(), 25);
ages.insert("Bob".to_string(), 30);

// Alternative initialization
use std::collections::HashMap;
let ages: HashMap<&str, i32> = [("Alice", 25), ("Bob", 30)]
    .iter().cloned().collect();

// Sets
let mut unique_names = HashSet::new();
unique_names.insert("Alice");
unique_names.insert("Bob");

// Iterating
for number in &numbers {
    println!("{}", number);
}

// Functional style
let even_numbers: Vec<i32> = numbers.iter()
    .filter(|&&n| n % 2 == 0)
    .copied()
    .collect();
```

### 3. Functions & Methods

```cpp
// C++
// Basic function
int add(int a, int b) {
    return a + b;
}

// Function with default parameters
void greet(const std::string& name = "World") {
    std::cout << "Hello, " << name << "!" << std::endl;
}

// Function overloading
int multiply(int a, int b) { return a * b; }
double multiply(double a, double b) { return a * b; }

// Template functions (generics)
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Lambda expressions
auto lambda = [](int x, int y) -> int {
    return x + y;
};

// Function pointers
int (*funcPtr)(int, int) = add;

// Member functions
class Calculator {
public:
    int add(int a, int b) const { return a + b; }
    static int multiply(int a, int b) { return a * b; }
};
```

```java
// Java
// Basic method
public static int add(int a, int b) {
    return a + b;
}

// Method overloading
public static int multiply(int a, int b) { return a * b; }
public static double multiply(double a, double b) { return a * b; }

// Generic methods
public static <T extends Comparable<T>> T maximum(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}

// Lambda expressions (Java 8+)
BinaryOperator<Integer> adder = (x, y) -> x + y;
Function<String, Integer> stringLength = String::length;

// Method references
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println);  // Method reference

// Varargs
public static void printAll(String... items) {
    for (String item : items) {
        System.out.println(item);
    }
}

// Instance methods
public class Calculator {
    public int add(int a, int b) { return a + b; }
    public static int multiply(int a, int b) { return a * b; }
}
```

```csharp
// C#
// Basic method
public static int Add(int a, int b) {
    return a + b;
}

// Method with default parameters
public static void Greet(string name = "World") {
    Console.WriteLine($"Hello, {name}!");
}

// Method overloading
public static int Multiply(int a, int b) => a * b;
public static double Multiply(double a, double b) => a * b;

// Generic methods with constraints
public static T Maximum<T>(T a, T b) where T : IComparable<T> {
    return a.CompareTo(b) > 0 ? a : b;
}

// Lambda expressions and delegates
Func<int, int, int> adder = (x, y) => x + y;
Action<string> printer = Console.WriteLine;

// Local functions (C# 7+)
public static int ComplexCalculation(int x) {
    int Helper(int n) => n * n;
    return Helper(x) + Helper(x + 1);
}

// Extension methods
public static class StringExtensions {
    public static bool IsEmpty(this string str) => string.IsNullOrEmpty(str);
}

// Instance methods
public class Calculator {
    public int Add(int a, int b) => a + b;
    public static int Multiply(int a, int b) => a * b;
}
```

```rust
// Rust
// Basic function
fn add(a: i32, b: i32) -> i32 {
    a + b  // No semicolon = return value
}

// Function with explicit return
fn subtract(a: i32, b: i32) -> i32 {
    return a - b;
}

// Generic functions with traits
fn maximum<T: PartialOrd>(a: T, b: T) -> T {
    if a > b { a } else { b }
}

// Functions with multiple trait bounds
fn print_and_compare<T>(a: T, b: T) 
where 
    T: std::fmt::Display + PartialOrd + Copy 
{
    println!("Comparing {} and {}", a, b);
    if a > b {
        println!("{} is greater", a);
    }
}

// Closures
let adder = |x, y| x + y;
let multiplier = |x: i32| move |y: i32| x * y;

// Higher-order functions
fn apply_operation<F>(x: i32, y: i32, op: F) -> i32 
where 
    F: Fn(i32, i32) -> i32 
{
    op(x, y)
}

// Methods on structs
struct Calculator;

impl Calculator {
    fn add(&self, a: i32, b: i32) -> i32 {
        a + b
    }
    
    // Associated function (like static method)
    fn multiply(a: i32, b: i32) -> i32 {
        a * b
    }
}
```

### 4. Object-Oriented Programming

```cpp
// C++
class Animal {
private:
    std::string name;
    
protected:
    int age;
    
public:
    // Constructor
    Animal(const std::string& n, int a) : name(n), age(a) {}
    
    // Copy constructor
    Animal(const Animal& other) : name(other.name), age(other.age) {}
    
    // Move constructor
    Animal(Animal&& other) noexcept 
        : name(std::move(other.name)), age(other.age) {}
    
    // Virtual destructor
    virtual ~Animal() = default;
    
    // Pure virtual function (abstract)
    virtual void makeSound() = 0;
    
    // Virtual function
    virtual void move() {
        std::cout << name << " is moving" << std::endl;
    }
    
    // Getter
    const std::string& getName() const { return name; }
    
    // Operator overloading
    bool operator==(const Animal& other) const {
        return name == other.name && age == other.age;
    }
};

class Dog : public Animal {
public:
    Dog(const std::string& name, int age) : Animal(name, age) {}
    
    void makeSound() override {
        std::cout << getName() << " says Woof!" << std::endl;
    }
    
    // Method overriding
    void move() override {
        std::cout << getName() << " runs on four legs" << std::endl;
    }
};

// Multiple inheritance
class Flyable {
public:
    virtual void fly() = 0;
};

class Bird : public Animal, public Flyable {
public:
    Bird(const std::string& name, int age) : Animal(name, age) {}
    
    void makeSound() override {
        std::cout << getName() << " chirps" << std::endl;
    }
    
    void fly() override {
        std::cout << getName() << " is flying" << std::endl;
    }
};
```

```java
// Java
// Abstract class
public abstract class Animal {
    private String name;
    protected int age;
    
    // Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Abstract method
    public abstract void makeSound();
    
    // Concrete method
    public void move() {
        System.out.println(name + " is moving");
    }
    
    // Getter
    public String getName() { return name; }
    
    // Override Object methods
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Animal animal = (Animal) obj;
        return age == animal.age && Objects.equals(name, animal.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

public class Dog extends Animal {
    public Dog(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " says Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(getName() + " runs on four legs");
    }
}

// Interface
public interface Flyable {
    void fly();
    
    // Default method (Java 8+)
    default void land() {
        System.out.println("Landing...");
    }
}

// Multiple interface implementation
public class Bird extends Animal implements Flyable {
    public Bird(String name, int age) {
        super(name, age);
    }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " chirps");
    }
    
    @Override
    public void fly() {
        System.out.println(getName() + " is flying");
    }
}

// Records (Java 14+) - immutable data classes
public record Person(String name, int age) {
    // Compact constructor
    public Person {
        if (age < 0) throw new IllegalArgumentException("Age cannot be negative");
    }
}
```

```csharp
// C#
// Abstract class
public abstract class Animal {
    private string name;
    protected int age;
    
    // Constructor
    public Animal(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Properties (C# style getters/setters)
    public string Name { get; private set; } = "";
    public int Age { get; protected set; }
    
    // Abstract method
    public abstract void MakeSound();
    
    // Virtual method
    public virtual void Move() {
        Console.WriteLine($"{Name} is moving");
    }
    
    // Override Object methods
    public override bool Equals(object? obj) {
        return obj is Animal animal && Name == animal.Name && Age == animal.Age;
    }
    
    public override int GetHashCode() {
        return HashCode.Combine(Name, Age);
    }
}

public class Dog : Animal {
    public Dog(string name, int age) : base(name, age) { }
    
    public override void MakeSound() {
        Console.WriteLine($"{Name} says Woof!");
    }
    
    public override void Move() {
        Console.WriteLine($"{Name} runs on four legs");
    }
}

// Interface
public interface IFlyable {
    void Fly();
    
    // Default interface method (C# 8+)
    void Land() => Console.WriteLine("Landing...");
}

// Multiple interface implementation
public class Bird : Animal, IFlyable {
    public Bird(string name, int age) : base(name, age) { }
    
    public override void MakeSound() {
        Console.WriteLine($"{Name} chirps");
    }
    
    public void Fly() {
        Console.WriteLine($"{Name} is flying");
    }
}

// Records (C# 9+) - immutable reference types
public record Person(string Name, int Age);

// Record with validation
public record PersonWithValidation(string Name, int Age) {
    public PersonWithValidation(string Name, int Age) : this(Name, Age) {
        if (Age < 0) throw new ArgumentException("Age cannot be negative");
    }
}

// Structs (value types)
public struct Point {
    public int X { get; init; }
    public int Y { get; init; }
    
    public Point(int x, int y) => (X, Y) = (x, y);
}
```

```rust
// Rust - No traditional inheritance, uses composition and traits
// Struct definition
struct Animal {
    name: String,
    age: i32,
}

impl Animal {
    fn new(name: String, age: i32) -> Self {
        Animal { name, age }
    }
    
    fn get_name(&self) -> &str {
        &self.name
    }
    
    fn move_animal(&self) {
        println!("{} is moving", self.name);
    }
}

// Traits (similar to interfaces)
trait MakeSound {
    fn make_sound(&self);
}

trait Flyable {
    fn fly(&self);
    
    // Default implementation
    fn land(&self) {
        println!("Landing...");
    }
}

struct Dog {
    animal: Animal,  // Composition over inheritance
}

impl Dog {
    fn new(name: String, age: i32) -> Self {
        Dog {
            animal: Animal::new(name, age),
        }
    }
}

impl MakeSound for Dog {
    fn make_sound(&self) {
        println!("{} says Woof!", self.animal.get_name());
    }
}

// Deref trait for transparent field access
use std::ops::Deref;

impl Deref for Dog {
    type Target = Animal;
    
    fn deref(&self) -> &Self::Target {
        &self.animal
    }
}

struct Bird {
    animal: Animal,
}

impl Bird {
    fn new(name: String, age: i32) -> Self {
        Bird {
            animal: Animal::new(name, age),
        }
    }
}

impl MakeSound for Bird {
    fn make_sound(&self) {
        println!("{} chirps", self.animal.get_name());
    }
}

impl Flyable for Bird {
    fn fly(&self) {
        println!("{} is flying", self.animal.get_name());
    }
}

// Enums with data (algebraic data types)
enum AnimalType {
    Dog { name: String, breed: String },
    Bird { name: String, wingspan: f64 },
    Fish { name: String, water_type: WaterType },
}

enum WaterType {
    Fresh,
    Salt,
}

// Pattern matching on enums
impl AnimalType {
    fn describe(&self) -> String {
        match self {
            AnimalType::Dog { name, breed } => {
                format!("{} is a {} dog", name, breed)
            }
            AnimalType::Bird { name, wingspan } => {
                format!("{} is a bird with {:.1}m wingspan", name, wingspan)
            }
            AnimalType::Fish { name, water_type } => {
                let water = match water_type {
                    WaterType::Fresh => "freshwater",
                    WaterType::Salt => "saltwater",
                };
                format!("{} is a {} fish", name, water)
            }
        }
    }
}
```

### 5. Error Handling

```cpp
// C++ - Multiple approaches

// 1. Exceptions (traditional)
#include <stdexcept>
#include <iostream>

void riskyFunction() {
    throw std::runtime_error("Something went wrong!");
}

void exceptionExample() {
    try {
        riskyFunction();
    } catch (const std::runtime_error& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    } catch (...) {
        std::cerr << "Unknown error occurred" << std::endl;
    }
}

// 2. Optional (C++17)
#include <optional>

std::optional<int> divide(int a, int b) {
    if (b == 0) return std::nullopt;
    return a / b;
}

void optionalExample() {
    auto result = divide(10, 0);
    if (result.has_value()) {
        std::cout << "Result: " << result.value() << std::endl;
    } else {
        std::cout << "Division by zero!" << std::endl;
    }
}

// 3. Expected (C++23 or library implementation)
#include <expected>  // C++23

std::expected<int, std::string> betterDivide(int a, int b) {
    if (b == 0) return std::unexpected("Division by zero");
    return a / b;
}
```

```java
// Java - Exceptions with checked/unchecked distinction

import java.io.*;
import java.util.Optional;

public class ErrorHandling {
    // Checked exception - must be declared or handled
    public static String readFile(String filename) throws IOException {
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            return reader.readLine();
        }
    }
    
    // Unchecked exception
    public static int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Division by zero");
        return a / b;
    }
    
    // Optional pattern (Java 8+)
    public static Optional<Integer> safeDivide(int a, int b) {
        if (b == 0) return Optional.empty();
        return Optional.of(a / b);
    }
    
    public static void handleErrors() {
        // Try-catch with resources
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello World");
        } catch (IOException e) {
            System.err.println("File error: " + e.getMessage());
        }
        
        // Optional handling
        safeDivide(10, 0)
            .ifPresentOrElse(
                result -> System.out.println("Result: " + result),
                () -> System.out.println("Cannot divide by zero")
            );
    }
    
    // Custom exceptions
    static class CustomException extends Exception {
        public CustomException(String message, Throwable cause) {
            super(message, cause);
        }
    }
}
```

```csharp
// C# - Similar to Java but with some differences

using System;
using System.IO;

public class ErrorHandling {
    // All exceptions are unchecked in C#
    public static string ReadFile(string filename) {
        using (var reader = new StreamReader(filename)) {
            return reader.ReadLine() ?? "";
        }
    }
    
    public static int Divide(int a, int b) {
        if (b == 0) throw new DivideByZeroException("Cannot divide by zero");
        return a / b;
    }
    
    // Nullable reference types (C# 8+) and nullable value types
    public static int? SafeDivide(int a, int b) {
        if (b == 0) return null;
        return a / b;
    }
    
    // Result pattern (not built-in, but common)
    public static Result<int, string> BetterDivide(int a, int b) {
        if (b == 0) return Result<int, string>.Error("Division by zero");
        return Result<int, string>.Success(a / b);
    }
    
    public static void HandleErrors() {
        // Try-catch-finally
        try {
            var result = ReadFile("nonexistent.txt");
            Console.WriteLine(result);
        }
        catch (FileNotFoundException ex) {
            Console.WriteLine($"File not found: {ex.FileName}");
        }
        catch (IOException ex) {
            Console.WriteLine($"IO Error: {ex.Message}");
        }
        finally {
            Console.WriteLine("Cleanup code here");
        }
        
        // Nullable handling
        var divisionResult = SafeDivide(10, 0);
        if (divisionResult.HasValue) {
            Console.WriteLine($"Result: {divisionResult.Value}");
        } else {
            Console.WriteLine("Cannot divide by zero");
        }
        
        // Pattern matching with switch expressions (C# 8+)
        var message = divisionResult switch {
            null => "Division by zero occurred",
            var result when result < 0 => "Negative result",
            var result => $"Positive result: {result}"
        };
    }
}

// Custom Result type
public class Result<T, E> {
    private readonly T? _value;
    private readonly E? _error;
    private readonly bool _isSuccess;
    
    private Result(T value) {
        _value = value;
        _isSuccess = true;
    }
    
    private Result(E error) {
        _error = error;
        _isSuccess = false;
    }
    
    public static Result<T, E> Success(T value) => new(value);
    public static Result<T, E> Error(E error) => new(error);
    
    public bool IsSuccess => _isSuccess;
    public T Value => _isSuccess ? _value! : throw new InvalidOperationException();
    public E Error => !_isSuccess ? _error! : throw new InvalidOperationException();
}
```

```rust
// Rust - Result type and panic! (no exceptions)

use std::fs;
use std::io;

// Result type for recoverable errors
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
}

// Using standard library errors
fn read_file(filename: &str) -> Result<String, io::Error> {
    fs::read_to_string(filename)
}

// Custom error types
#[derive(Debug)]
enum MathError {
    DivisionByZero,
    NegativeSquareRoot,
}

impl std::fmt::Display for MathError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            MathError::DivisionByZero => write!(f, "Division by zero"),
            MathError::NegativeSquareRoot => write!(f, "Square root of negative number"),
        }
    }
}

impl std::error::Error for MathError {}

fn safe_divide(a: f64, b: f64) -> Result<f64, MathError> {
    if b == 0.0 {
        Err(MathError::DivisionByZero)
    } else {
        Ok(a / b)
    }
}

fn safe_sqrt(x: f64) -> Result<f64, MathError> {
    if x < 0.0 {
        Err(MathError::NegativeSquareRoot)
    } else {
        Ok(x.sqrt())
    }
    
}

// Chaining operations with ?
fn complex_calculation(a: f64, b: f64) -> Result<f64, MathError> {
    let division = safe_divide(a, b)?;  // Early return if error
    let sqrt_result = safe_sqrt(division)?;
    Ok(sqrt_result * 2.0)
}

fn handle_errors() {
    // Pattern matching on Result
    match divide(10, 0) {
        Ok(result) => println!("Result: {}", result),
        Err(error) => println!("Error: {}", error),
    }
    
    // Using ? operator for early returns
    let file_content = read_file("example.txt")
        .unwrap_or_else(|error| format!("Error reading file: {}", error));
    
    // unwrap() and expect() for panicking on errors
    let risky_result = divide(10, 2).unwrap();  // Panics if Err
    let safer_result = divide(10, 2).expect("Division should work");
    
    // Combining Results
    let results: Result<Vec<_>, _> = (0..5)
        .map(|i| divide(100, i))
        .collect();
    
    match results {
        Ok(values) => println!("All succeeded: {:?}", values),
        Err(error) => println!("At least one failed: {}", error),
    }
    
    // Option type for absence of value
    let numbers = vec![1, 2, 3, 4, 5];
    let first = numbers.first();  // Returns Option<&i32>
    
    match first {
        Some(value) => println!("First element: {}", value),
        None => println!("Vector is empty"),
    }
    
    // Chaining Options and Results
    let result = numbers
        .first()                    // Option<&i32>
        .map(|&x| x * 2)           // Option<i32>
        .filter(|&x| x > 0)        // Option<i32>
        .ok_or("No valid value")    // Result<i32, &str>
        .and_then(|x| divide(x, 2));  // Result<i32, String>
}

// panic! for unrecoverable errors
fn will_panic() {
    panic!("This is an unrecoverable error!");
}

// Using panic for debugging
fn debug_function(value: Option<i32>) {
    let x = value.unwrap();  // Will panic if None
    println!("Value is: {}", x);
}
```

### 6. Concurrency & Parallelism

```cpp
// C++
#include <thread>
#include <mutex>
#include <future>
#include <atomic>
#include <condition_variable>

class ThreadSafeCounter {
    std::mutex mutex_;
    int count_ = 0;
    
public:
    void increment() {
        std::lock_guard<std::mutex> lock(mutex_);
        ++count_;
    }
    
    int get() const {
        std::lock_guard<std::mutex> lock(mutex_);
        return count_;
    }
};

// Thread creation
void workerFunction(int id) {
    std::cout << "Worker " << id << " is running\n";
}

void threadExample() {
    // Basic thread
    std::thread worker(workerFunction, 1);
    worker.join();
    
    // Lambda with thread
    std::thread lambda_thread([]() {
        std::cout << "Lambda thread running\n";
    });
    lambda_thread.join();
    
    // Futures and promises
    auto future = std::async(std::launch::async, []() {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        return 42;
    });
    
    int result = future.get();  // Blocks until ready
}

// Atomic operations
std::atomic<int> atomicCounter{0};

void atomicExample() {
    std::vector<std::thread> threads;
    
    for (int i = 0; i < 10; ++i) {
        threads.emplace_back([]() {
            for (int j = 0; j < 1000; ++j) {
                atomicCounter.fetch_add(1);
            }
        });
    }
    
    for (auto& t : threads) {
        t.join();
    }
    
    std::cout << "Final count: " << atomicCounter.load() << std::endl;
}
```

```java
// Java
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class ConcurrencyExample {
    
    // Thread-safe counter
    private static class ThreadSafeCounter {
        private int count = 0;
        
        public synchronized void increment() {
            count++;
        }
        
        public synchronized int get() {
            return count;
        }
    }
    
    // Runnable interface
    static class Worker implements Runnable {
        private final int id;
        
        public Worker(int id) { this.id = id; }
        
        @Override
        public void run() {
            System.out.println("Worker " + id + " is running");
        }
    }
    
    public static void threadExample() {
        // Basic thread
        Thread worker = new Thread(new Worker(1));
        worker.start();
        
        try {
            worker.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Lambda with thread
        Thread lambdaThread = new Thread(() -> {
            System.out.println("Lambda thread running");
        });
        lambdaThread.start();
    }
    
    // Executor service
    public static void executorExample() {
        ExecutorService executor = Executors.newFixedThreadPool(4);
        
        // Submit tasks
        Future<Integer> future = executor.submit(() -> {
            Thread.sleep(1000);
            return 42;
        });
        
        try {
            Integer result = future.get();  // Blocks until complete
            System.out.println("Result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        
        executor.shutdown();
    }
    
    // CompletableFuture (Java 8+)
    public static void completableFutureExample() {
        CompletableFuture<String> future = CompletableFuture
            .supplyAsync(() -> "Hello")
            .thenApply(s -> s + " World")
            .thenApply(String::toUpperCase);
            
        try {
            String result = future.get();
            System.out.println(result);  // HELLO WORLD
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
    
    // Atomic operations
    private static final AtomicInteger atomicCounter = new AtomicInteger(0);
    
    public static void atomicExample() throws InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(10);
        
        for (int i = 0; i < 10; i++) {
            executor.submit(() -> {
                for (int j = 0; j < 1000; j++) {
                    atomicCounter.incrementAndGet();
                }
            });
        }
        
        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);
        
        System.out.println("Final count: " + atomicCounter.get());
    }
}
```

```csharp
// C#
using System;
using System.Threading;
using System.Threading.Tasks;

public class ConcurrencyExample {
    
    // Thread-safe counter
    private class ThreadSafeCounter {
        private int count = 0;
        private readonly object lockObject = new object();
        
        public void Increment() {
            lock (lockObject) {
                count++;
            }
        }
        
        public int Get() {
            lock (lockObject) {
                return count;
            }
        }
    }
    
    // Basic threading
    public static void ThreadExample() {
        // Thread with method
        var worker = new Thread(() => {
            Console.WriteLine("Worker thread is running");
        });
        worker.Start();
        worker.Join();
    }
    
    // Task-based programming (preferred)
    public static async Task TaskExample() {
        // Basic task
        Task task = Task.Run(() => {
            Console.WriteLine("Task is running");
        });
        await task;
        
        // Task with return value
        Task<int> calculation = Task.Run(() => {
            Thread.Sleep(1000);
            return 42;
        });
        
        int result = await calculation;
        Console.WriteLine($"Result: {result}");
    }
    
    // Async/await pattern
    public static async Task<string> FetchDataAsync() {
        await Task.Delay(1000);  // Simulate async work
        return "Data fetched";
    }
    
    public static async Task AsyncExample() {
        // Sequential
        string data1 = await FetchDataAsync();
        string data2 = await FetchDataAsync();
        
        // Parallel
        Task<string> task1 = FetchDataAsync();
        Task<string> task2 = FetchDataAsync();
        
        string[] results = await Task.WhenAll(task1, task2);
        Console.WriteLine($"Results: {string.Join(", ", results)}");
    }
    
    // Parallel LINQ (PLINQ)
    public static void PLinqExample() {
        var numbers = Enumerable.Range(1, 1000000);
        
        var result = numbers
            .AsParallel()
            .Where(n => n % 2 == 0)
            .Select(n => n * n)
            .Sum();
            
        Console.WriteLine($"Result: {result}");
    }
    
    // Cancellation
    public static async Task CancellationExample() {
        using var cts = new CancellationTokenSource();
        
        // Cancel after 2 seconds
        cts.CancelAfter(TimeSpan.FromSeconds(2));
        
        try {
            await LongRunningTask(cts.Token);
        } catch (OperationCanceledException) {
            Console.WriteLine("Task was cancelled");
        }
    }
    
    private static async Task LongRunningTask(CancellationToken token) {
        for (int i = 0; i < 100; i++) {
            token.ThrowIfCancellationRequested();
            await Task.Delay(100, token);
            Console.WriteLine($"Progress: {i}%");
        }
    }
}
```

```rust
// Rust
use std::sync::{Arc, Mutex, mpsc};
use std::thread;
use std::time::Duration;
use tokio; // For async/await

// Thread-safe counter using Mutex
struct ThreadSafeCounter {
    count: Mutex<i32>,
}

impl ThreadSafeCounter {
    fn new() -> Self {
        ThreadSafeCounter {
            count: Mutex::new(0),
        }
    }
    
    fn increment(&self) {
        let mut count = self.count.lock().unwrap();
        *count += 1;
    }
    
    fn get(&self) -> i32 {
        *self.count.lock().unwrap()
    }
}

// Basic threading
fn thread_example() {
    // Spawn thread with closure
    let handle = thread::spawn(|| {
        println!("Thread is running");
        42
    });
    
    // Join and get result
    let result = handle.join().unwrap();
    println!("Thread result: {}", result);
}

// Sharing data between threads
fn shared_data_example() {
    let counter = Arc::new(ThreadSafeCounter::new());
    let mut handles = vec![];
    
    for i in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..1000 {
                counter.increment();
            }
        });
        handles.push(handle);
    }
    
    // Wait for all threads
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Final count: {}", counter.get());
}

// Message passing with channels
fn channel_example() {
    let (tx, rx) = mpsc::channel();
    
    // Spawn producer thread
    thread::spawn(move || {
        for i in 1..=5 {
            tx.send(i).unwrap();
            thread::sleep(Duration::from_millis(100));
        }
    });
    
    // Receive messages
    for received in rx {
        println!("Got: {}", received);
    }
}

// Multiple producers, single consumer
fn multi_producer_example() {
    let (tx, rx) = mpsc::channel();
    
    for id in 0..3 {
        let tx = tx.clone();
        thread::spawn(move || {
            for i in 1..=5 {
                tx.send(format!("Producer {} sent {}", id, i)).unwrap();
            }
        });
    }
    
    drop(tx);  // Close the original sender
    
    for received in rx {
        println!("{}", received);
    }
}

// Async/await with Tokio
#[tokio::main]
async fn async_main() {
    // Basic async task
    let task = tokio::spawn(async {
        tokio::time::sleep(Duration::from_secs(1)).await;
        "Task completed"
    });
    
    let result = task.await.unwrap();
    println!("{}", result);
    
    // Concurrent async tasks
    let task1 = fetch_data("data1");
    let task2 = fetch_data("data2");
    let task3 = fetch_data("data3");
    
    let (result1, result2, result3) = tokio::join!(task1, task2, task3);
    println!("Results: {}, {}, {}", result1, result2, result3);
}

async fn fetch_data(name: &str) -> String {
    tokio::time::sleep(Duration::from_millis(500)).await;
    format!("Fetched {}", name)
}

// Atomic operations
use std::sync::atomic::{AtomicI32, Ordering};

fn atomic_example() {
    let counter = Arc::new(AtomicI32::new(0));
    let mut handles = vec![];
    
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..1000 {
                counter.fetch_add(1, Ordering::SeqCst);
            }
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Final atomic count: {}", counter.load(Ordering::SeqCst));
}

// Rayon for data parallelism
use rayon::prelude::*;

fn parallel_processing_example() {
    let numbers: Vec<i32> = (1..=1_000_000).collect();
    
    // Parallel iterator processing
    let sum: i32 = numbers
        .par_iter()                // Parallel iterator
        .filter(|&&x| x % 2 == 0)  // Even numbers only
        .map(|&x| x * x)           // Square them
        .sum();                    // Sum the results
    
    println!("Sum of squares of even numbers: {}", sum);
}
```

## 🚀 Advanced Features Comparison

### Generics/Templates

```cpp
// C++ Templates - Compile-time polymorphism
template<typename T>
class Container {
    T data;
public:
    Container(T value) : data(value) {}
    T get() const { return data; }
};

// Template specialization
template<>
class Container<bool> {
    bool data;
public:
    Container(bool value) : data(value) {}
    bool get() const { return data; }
    void flip() { data = !data; }
};

// Variadic templates
template<typename... Args>
void print(Args... args) {
    ((std::cout << args << " "), ...);  // C++17 fold expression
}

// SFINAE and concepts (C++20)
template<typename T>
concept Numeric = std::is_arithmetic_v<T>;

template<Numeric T>
T add(T a, T b) {
    return a + b;
}
```

```java
// Java Generics - Type erasure
public class Container<T> {
    private T data;
    
    public Container(T value) {
        this.data = value;
    }
    
    public T get() {
        return data;
    }
}

// Bounded type parameters
public class NumberContainer<T extends Number> {
    private T data;
    
    public NumberContainer(T value) {
        this.data = value;
    }
    
    public double getDoubleValue() {
        return data.doubleValue();
    }
}

// Wildcards
public static void printNumbers(List<? extends Number> numbers) {
    for (Number num : numbers) {
        System.out.println(num);
    }
}

// Generic methods
public static <T> void swap(T[] array, int i, int j) {
    T temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
```

```csharp
// C# Generics - Similar to Java but with some differences
public class Container<T> {
    private T data;
    
    public Container(T value) {
        data = value;
    }
    
    public T Get() => data;
}

// Generic constraints
public class NumberContainer<T> where T : struct, IComparable<T> {
    private T data;
    
    public NumberContainer(T value) {
        data = value;
    }
    
    public bool IsGreaterThan(T other) {
        return data.CompareTo(other) > 0;
    }
}

// Multiple constraints
public class Repository<T> where T : class, IEntity, new() {
    public T Create() => new T();
}

// Covariance and contravariance
public interface IContainer<out T> {  // Covariant
    T Get();
}

public interface IProcessor<in T> {   // Contravariant
    void Process(T item);
}

// Generic methods
public static void Swap<T>(ref T a, ref T b) {
    T temp = a;
    a = b;
    b = temp;
}
```

```rust
// Rust Generics - Zero-cost abstractions
struct Container<T> {
    data: T,
}

impl<T> Container<T> {
    fn new(value: T) -> Self {
        Container { data: value }
    }
    
    fn get(&self) -> &T {
        &self.data
    }
    
    fn into_inner(self) -> T {
        self.data
    }
}

// Trait bounds
fn print_debug<T: std::fmt::Debug>(value: T) {
    println!("{:?}", value);
}

// Multiple trait bounds
fn process<T>(value: T) -> T 
where 
    T: Clone + std::fmt::Display + Default,
{
    println!("Processing: {}", value);
    value.clone()
}

// Associated types
trait Iterator {
    type Item;
    
    fn next(&mut self) -> Option<Self::Item>;
}

// Generic enums
enum Result<T, E> {
    Ok(T),
    Err(E),
}

enum Option<T> {
    Some(T),
    None,
}

// Lifetime parameters
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// Generic structs with lifetimes
struct Pair<'a, T> {
    first: &'a T,
    second: &'a T,
}
```

### Memory Management Deep Dive

```cpp
// C++ - Manual memory management with RAII
class ResourceManager {
    int* data;
    size_t size;
    
public:
    // Constructor
    ResourceManager(size_t n) : size(n) {
        data = new int[size];
        std::cout << "Allocated " << size << " integers\n";
    }
    
    // Copy constructor
    ResourceManager(const ResourceManager& other) : size(other.size) {
        data = new int[size];
        std::copy(other.data, other.data + size, data);
        std::cout << "Copy constructed\n";
    }
    
    // Move constructor
    ResourceManager(ResourceManager&& other) noexcept 
        : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
        std::cout << "Move constructed\n";
    }
    
    // Copy assignment
    ResourceManager& operator=(const ResourceManager& other) {
        if (this != &other) {
            delete[] data;
            size = other.size;
            data = new int[size];
            std::copy(other.data, other.data + size, data);
            std::cout << "Copy assigned\n";
        }
        return *this;
    }
    
    // Move assignment
    ResourceManager& operator=(ResourceManager&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
            other.size = 0;
            std::cout << "Move assigned\n";
        }
        return *this;
    }
    
    // Destructor
    ~ResourceManager() {
        if (data) {
            std::cout << "Deallocated " << size << " integers\n";
            delete[] data;
        }
    }
    
    int& operator[](size_t index) { return data[index]; }
};

// Smart pointers
void smartPointerExample() {
    // unique_ptr - exclusive ownership
    auto unique = std::make_unique<int>(42);
    
    // shared_ptr - shared ownership
    auto shared1 = std::make_shared<int>(100);
    auto shared2 = shared1;  // Reference count = 2
    
    // weak_ptr - non-owning observer
    std::weak_ptr<int> weak = shared1;
    
    if (auto locked = weak.lock()) {
        std::cout << "Value: " << *locked << std::endl;
    }
}
```

```java
// Java - Garbage collection
public class ResourceManager {
    private int[] data;
    
    public ResourceManager(int size) {
        data = new int[size];
        System.out.println("Allocated " + size + " integers");
        // No explicit deallocation needed
    }
    
    // finalize() is deprecated, use try-with-resources instead
    // for resources that need explicit cleanup
    
    // For external resources, implement AutoCloseable
    static class FileResource implements AutoCloseable {
        private final String filename;
        
        public FileResource(String filename) {
            this.filename = filename;
            System.out.println("Opened file: " + filename);
        }
        
        @Override
        public void close() {
            System.out.println("Closed file: " + filename);
        }
    }
    
    // Usage with try-with-resources
    public static void useResource() {
        try (FileResource resource = new FileResource("data.txt")) {
            // Use resource
        }  // Automatically closed
    }
}

// Reference types
class ReferenceExample {
    // All objects are references
    List<String> list1 = new ArrayList<>();
    List<String> list2 = list1;  // Both reference same object
    
    // Weak references for memory-sensitive caches
    WeakReference<String> weakRef = new WeakReference<>(new String("data"));
    
    // Soft references for memory-sensitive caches
    SoftReference<String> softRef = new SoftReference<>(new String("cached"));
}
```

```csharp
// C# - Garbage collection with IDisposable pattern
public class ResourceManager : IDisposable {
    private int[] data;
    private bool disposed = false;
    
    public ResourceManager(int size) {
        data = new int[size];
        Console.WriteLine($"Allocated {size} integers");
    }
    
    // Implement IDisposable
    public void Dispose() {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
    
    protected virtual void Dispose(bool disposing) {
        if (!disposed) {
            if (disposing) {
                // Dispose managed resources
                Console.WriteLine("Disposing managed resources");
            }
            
            // Free unmanaged resources
            Console.WriteLine("Cleaning up unmanaged resources");
            disposed = true;
        }
    }
    
    // Finalizer (destructor syntax)
    ~ResourceManager() {
        Dispose(false);
    }
    
    public int this[int index] => data[index];
}

// Usage with using statement
public static void UseResource() {
    using (var resource = new ResourceManager(100)) {
        // Use resource
    }  // Automatically disposed
    
    // Or with using declaration (C# 8+)
    using var resource2 = new ResourceManager(200);
    // Disposed at end of scope
}

// Value types vs reference types
struct Point {  // Value type - stack allocated
    public int X, Y;
    public Point(int x, int y) => (X, Y) = (x, y);
}

class Circle {  // Reference type - heap allocated
    public Point Center { get; set; }
    public double Radius { get; set; }
}

// Weak references
public static void WeakReferenceExample() {
    var obj = new object();
    var weakRef = new WeakReference(obj);
    
    obj = null;  // Remove strong reference
    GC.Collect();  // Force garbage collection
    
    if (weakRef.IsAlive) {
        Console.WriteLine("Object still exists");
    } else {
        Console.WriteLine("Object was collected");
    }
}
```

```rust
// Rust - Ownership system (zero-cost abstractions)

// Ownership rules:
// 1. Each value has a single owner
// 2. When owner goes out of scope, value is dropped
// 3. There can be many immutable references OR one mutable reference

fn ownership_example() {
    // Ownership transfer (move)
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is no longer valid
    // println!("{}", s1);  // Error! s1 was moved
    
    // Clone for deep copy
    let s3 = s2.clone();
    println!("{} and {}", s2, s3);  // Both valid
    
    // Function takes ownership
    takes_ownership(s2);
    // println!("{}", s2);  // Error! s2 was moved into function
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}  // some_string goes out of scope and is dropped

// Borrowing (references)
fn borrowing_example() {
    let s1 = String::from("hello");
    
    // Immutable borrow
    let len = calculate_length(&s1);
    println!("Length of '{}' is {}", s1, len);  // s1 still valid
    
    // Mutable borrow
    let mut s2 = String::from("hello");
    change(&mut s2);
    println!("{}", s2);
}

fn calculate_length(s: &String) -> usize {  // Immutable reference
    s.len()
}  // s goes out of scope, but doesn't drop the data

fn change(some_string: &mut String) {  // Mutable reference
    some_string.push_str(", world");
}

// Lifetimes - ensuring references are valid
fn lifetime_example() {
    let string1 = String::from("long string is long");
    let result;
    
    {
        let string2 = String::from("xyz");
        result = longest(&string1, &string2);  // Error without lifetime annotation
    }
    
    // println!("The longest string is {}", result);  // Would be error
}

// Explicit lifetime annotations
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// Struct with lifetime parameters
struct ImportantExcerpt<'a> {
    part: &'a str,
}

impl<'a> ImportantExcerpt<'a> {
    fn announce_and_return_part(&self, announcement: &str) -> &str {
        println!("Attention please: {}", announcement);
        self.part
    }
}

// Smart pointers in Rust
use std::rc::{Rc, Weak};
use std::cell::RefCell;

fn smart_pointer_example() {
    // Box - heap allocation (like unique_ptr)
    let boxed = Box::new(5);
    
    // Rc - reference counting (like shared_ptr)
    let rc1 = Rc::new(String::from("hello"));
    let rc2 = Rc::clone(&rc1);  // Increment reference count
    println!("Reference count: {}", Rc::strong_count(&rc1));
    
    // Weak - weak reference
    let weak = Rc::downgrade(&rc1);
    if let Some(value) = weak.upgrade() {
        println!("Value still exists: {}", value);
    }
    
    // RefCell - interior mutability
    let data = RefCell::new(5);
    *data.borrow_mut() += 1;
    println!("Value: {}", data.borrow());
    
    // Combination: Rc<RefCell<T>> for shared mutable data
    let shared_data = Rc::new(RefCell::new(vec![1, 2, 3]));
    let shared_data2 = Rc::clone(&shared_data);
    
    shared_data.borrow_mut().push(4);
    println!("{:?}", shared_data2.borrow());
}

// Custom smart pointer
struct MyBox<T> {
    data: T,
}

impl<T> MyBox<T> {
    fn new(x: T) -> MyBox<T> {
        MyBox { data: x }
    }
}

use std::ops::Deref;

impl<T> Deref for MyBox<T> {
    type Target = T;
    
    fn deref(&self) -> &T {
        &self.data
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        println!("Dropping MyBox");
    }
}
```

## 📦 Package Management & Build Systems

| Language | Package Manager | Build Tool | Dependency File | Package Registry |
|----------|----------------|------------|----------------|-----------------|
| **C++** | Conan, vcpkg | CMake, Make | CMakeLists.txt, conanfile.txt | ConanCenter, vcpkg |
| **Java** | Maven, Gradle | Maven, Gradle | pom.xml, build.gradle | Maven Central |
| **C#** | NuGet | MSBuild, dotnet | .csproj, packages.config | nuget.org |
| **Rust** | Cargo | Cargo | Cargo.toml | crates.io |

### Build Configuration Examples

```cmake
# CMakeLists.txt (C++)
cmake_minimum_required(VERSION 3.16)
project(MyProject VERSION 1.0)

set(CMAKE_CXX_STANDARD 20)

find_package(Boost REQUIRED COMPONENTS system filesystem)

add_executable(myapp 
    src/main.cpp
    src/utils.cpp
)

target_link_libraries(myapp 
    PRIVATE 
    Boost::system 
    Boost::filesystem
)

target_include_directories(myapp 
    PRIVATE 
    include/
)
```

```xml
<!-- pom.xml (Java Maven) -->
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.12.0</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.8.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

```xml
<!-- .csproj (C#) -->
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.1" />
    <PackageReference Include="Serilog" Version="2.10.0" />
    <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="6.0.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\MyLibrary\MyLibrary.csproj" />
  </ItemGroup>

</Project>
```

```toml
# Cargo.toml (Rust)
[package]
name = "my-app"
version = "0.1.0"
edition = "2021"
authors = ["Your Name <you@example.com>"]
description = "A sample Rust application"
license = "MIT"
repository = "https://github.com/yourusername/my-app"

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"] }
clap = { version = "4.0", features = ["derive"] }
anyhow = "1.0"

[dev-dependencies]
tokio-test = "0.4"

[[bin]]
name = "my-app"
path = "src/main.rs"

[profile.release]
opt-level = 3
lto = true
```

## 🧪 Testing Frameworks

### C++
```cpp
// Google Test
#include <gtest/gtest.h>

TEST(MathTest, Addition) {
    EXPECT_EQ(2 + 2, 4);
    ASSERT_GT(5, 3);
}

class CalculatorTest : public ::testing::Test {
protected:
    void SetUp() override {
        calc = std::make_unique<Calculator>();
    }
    
    std::unique_ptr<Calculator> calc;
};

TEST_F(CalculatorTest, MultiplyTest) {
    EXPECT_DOUBLE_EQ(calc->multiply(2.0, 3.0), 6.0);
}

// Catch2 (header-only alternative)
#include <catch2/catch.hpp>

TEST_CASE("Vector operations", "[vector]") {
    std::vector<int> v{1, 2, 3};
    
    REQUIRE(v.size() == 3);
    REQUIRE(v[0] == 1);
    
    SECTION("Adding elements") {
        v.push_back(4);
        REQUIRE(v.size() == 4);
    }
    
    SECTION("Removing elements") {
        v.pop_back();
        REQUIRE(v.size() == 2);
    }
}
```

### Java
```java
// JUnit 5
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    @DisplayName("Addition should work correctly")
    void testAddition() {
        assertEquals(4, calculator.add(2, 2));
        assertThrows(ArithmeticException.class, () -> calculator.divide(1, 0));
    }
    
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void testSquare(int number) {
        assertTrue(calculator.square(number) >= 0);
    }
    
    @Test
    @Timeout(value = 2, unit = TimeUnit.SECONDS)
    void testSlowOperation() {
        // Should complete within 2 seconds
        calculator.slowOperation();
    }
}

// Mockito for mocking
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class ServiceTest {
    @Mock
    private Repository repository;
    
    @Test
    void testService() {
        when(repository.findById(1L)).thenReturn(Optional.of(new User()));
        
        Service service = new Service(repository);
        User result = service.getUser(1L);
        
        assertNotNull(result);
        verify(repository).findById(1L);
    }
}
```

### C#
```csharp
// xUnit
using Xunit;

public class CalculatorTests {
    private readonly Calculator _calculator = new Calculator();
    
    [Fact]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        int a = 2, b = 3;
        
        // Act
        var result = _calculator.Add(a, b);
        
        // Assert
        Assert.Equal(5, result);
    }
    
    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(0, 0, 0)]
    [InlineData(-1, 1, 0)]
    public void Add_VariousInputs_ReturnsCorrectSum(int a, int b, int expected) {
        var result = _calculator.Add(a, b);
        Assert.Equal(expected, result);
    }
    
    [Fact]
    public void Divide_ByZero_ThrowsException() {
        Assert.Throws<DivideByZeroException>(() => _calculator.Divide(1, 0));
    }
}

// NUnit (alternative)
using NUnit.Framework;

[TestFixture]
public class CalculatorTestsNUnit {
    private Calculator _calculator;
    
    [SetUp]
    public void Setup() {
        _calculator = new Calculator();
    }
    
    [Test]
    public void Add_TwoNumbers_ReturnsSum() {
        Assert.That(_calculator.Add(2, 3), Is.EqualTo(5));
    }
    
    [TestCase(1, 2, 3)]
    [TestCase(0, 0, 0)]
    public void Add_TestCases(int a, int b, int expected) {
        Assert.That(_calculator.Add(a, b), Is.EqualTo(expected));
    }
}

// Moq for mocking
using Moq;

public class ServiceTests {
    [Fact]
    public void GetUser_ValidId_ReturnsUser() {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        mockRepository.Setup(r => r.GetById(1))
                     .Returns(new User { Id = 1, Name = "Test" });
        
        var service = new UserService(mockRepository.Object);
        
        // Act
        var result = service.GetUser(1);
        
        // Assert
        Assert.NotNull(result);
        Assert.Equal("Test", result.Name);
        mockRepository.Verify(r => r.GetById(1), Times.Once);
    }
}
```

### Rust
```rust
// Built-in testing
#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_addition() {
        assert_eq!(add(2, 2), 4);
        assert_ne!(add(1, 2), 4);
    }
    
    #[test]
    #[should_panic(expected = "Division by zero")]
    fn test_division_by_zero() {
        divide(1, 0);
    }
    
    #[test]
    fn test_result_type() -> Result<(), Box<dyn std::error::Error>> {
        let result = risky_operation()?;
        assert!(result > 0);
        Ok(())
    }
    
    #[ignore]
    #[test]
    fn expensive_test() {
        // This test is ignored by default
        // Run with: cargo test -- --ignored
        assert!(true);
    }
}

// Property-based testing with proptest
use proptest::prelude::*;

proptest! {
    #[test]
    fn test_addition_commutative(a: i32, b: i32) {
        prop_assert_eq!(add(a, b), add(b, a));
    }
    
    #[test]
    fn test_string_length(s in ".*") {
        prop_assert!(s.len() >= 0);
    }
}

// Benchmarking with criterion
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn fibonacci_benchmark(c: &mut Criterion) {
    c.bench_function("fib 20", |b| {
        b.iter(|| fibonacci(black_box(20)))
    });
}

criterion_group!(benches, fibonacci_benchmark);
criterion_main!(benches);

// Integration tests (in tests/ directory)
// tests/integration_test.rs
use my_crate;

#[test]
fn test_integration() {
    let result = my_crate::public_function();
    assert!(result.is_ok());
}

// Mock testing with mockall
use mockall::predicate::*;
use mockall::mock;

mock! {
    MyDatabase {
        fn get_user(&self, id: u32) -> Option<User>;
        fn save_user(&mut self, user: &User) -> Result<(), String>;
    }
}

#[test]
fn test_with_mock() {
    let mut mock = MockMyDatabase::new();
    
    mock.expect_get_user()
        .with(eq(1))
        .times(1)
        .returning(|_| Some(User { id: 1, name: "Test".to_string() }));
    
    let service = UserService::new(mock);
    let user = service.find_user(1);
    
    assert!(user.is_some());
}
```

## 🌐 Web Development Capabilities

### C++
```cpp
// Crow framework (lightweight)
#include "crow.h"

int main() {
    crow::SimpleApp app;
    
    CROW_ROUTE(app, "/")([]() {
        return "Hello world";
    });
    
    CROW_ROUTE(app, "/user/<int>")([](int id) {
        return "User ID: " + std::to_string(id);
    });
    
    CROW_ROUTE(app, "/api/users").methods("POST"_method)([](const crow::request& req) {
        auto body = crow::json::load(req.body);
        if (!body) return crow::response(400);
        
        return crow::response{200, "User created"};
    });
    
    app.port(8080).multithreaded().run();
}

// Drogon framework (high performance)
#include <drogon/drogon.h>

int main() {
    drogon::app().setLogPath("./")
                 .setLogLevel(trantor::Logger::kWarn)
                 .addListener("0.0.0.0", 8080)
                 .setThreads(0)
                 .enableRunAsDaemon()
                 .run();
}
```

### Java
```java
// Spring Boot
@SpringBootApplication
@RestController
public class MyApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
    
    @GetMapping("/")
    public String hello() {
        return "Hello World";
    }
    
    @PostMapping("/api/users")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        // Save user logic
        return ResponseEntity.ok(user);
    }
    
    @GetMapping("/api/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        // Find user logic
        return ResponseEntity.ok(new User(id, "Test"));
    }
}

// Configuration
@Configuration
public class WebConfig {
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

// Servlet (traditional approach)
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello World</h1>");
    }
}
```

### C#
```csharp
// ASP.NET Core Web API
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase {
    
    [HttpGet]
    public ActionResult<IEnumerable<User>> GetUsers() {
        return Ok(new[] { new User(1, "Alice"), new User(2, "Bob") });
    }
    
    [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id) {
        var user = new User(id, "Test");
        return Ok(user);
    }
    
    [HttpPost]
    public ActionResult<User> CreateUser(User user) {
        // Save user logic
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}

// Minimal APIs (C# 10+)
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/users/{id}", (int id) => new User(id, "Test"));

app.MapPost("/users", (User user) => Results.Created($"/users/{user.Id}", user));

app.Run();

public record User(int Id, string Name);

// Blazor (C# in the browser)
@page "/counter"

<h3>Counter</h3>

<p>Current count: @currentCount</p>
<button @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;
    
    private void IncrementCount() {
        currentCount++;
    }
}
```

### Rust
```rust
// Actix Web
use actix_web::{web, App, HttpServer, Result, middleware::Logger};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
}

async fn hello() -> Result<&'static str> {
    Ok("Hello world!")
}

async fn create_user(user: web::Json<User>) -> Result<web::Json<User>> {
    // Save user logic
    Ok(web::Json(user.into_inner()))
}

async fn get_user(path: web::Path<u32>) -> Result<web::Json<User>> {
    let id = path.into_inner();
    Ok(web::Json(User {
        id,
        name: "Test".to_string(),
    }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();
    
    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .route("/", web::get().to(hello))
            .route("/users", web::post().to(create_user))
            .route("/users/{id}", web::get().to(get_user))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}

// Warp (alternative)
use warp::Filter;

#[tokio::main]
async fn main() {
    let hello = warp::path::end()
        .map(|| "Hello, World!");
        
    let users = warp::path("users")
        .and(warp::path::param::<u32>())
        .map(|id: u32| format!("User ID: {}", id));
    
    let routes = hello.or(users);
    
    warp::serve(routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}

// Axum (modern alternative)
use axum::{
    extract::{Path, Json},
    http::StatusCode,
    response::Json as ResponseJson,
    routing::{get, post},
    Router,
};

async fn hello_world() -> &'static str {
    "Hello, World!"
}

async fn create_user(Json(payload): Json<User>) -> (StatusCode, Json<User>) {
    (StatusCode::CREATED, Json(payload))
}

async fn get_user(Path(id): Path<u32>) -> Json<User> {
    Json(User {
        id,
        name: "Test".to_string(),
    })
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(hello_world))
        .route("/users", post(create_user))
        .route("/users/:id", get(get_user));
    
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```

## 🗄️ Database Connectivity

### C++
```cpp
// SQLite with SQLiteCpp
#include <SQLiteCpp/SQLiteCpp.h>

class DatabaseManager {
    SQLite::Database db;
    
public:
    DatabaseManager() : db("users.db", SQLite::OPEN_READWRITE | SQLite::OPEN_CREATE) {
        db.exec("CREATE TABLE IF NOT EXISTS users ("
                "id INTEGER PRIMARY KEY AUTOINCREMENT,"
                "name TEXT NOT NULL,"
                "email TEXT UNIQUE)");
    }
    
    void insertUser(const std::string& name, const std::string& email) {
        SQLite::Statement query(db, "INSERT INTO users (name, email) VALUES (?, ?)");
        query.bind(1, name);
        query.bind(2, email);
        query.exec();
    }
    
    std::vector<User> getAllUsers() {
        SQLite::Statement query(db, "SELECT id, name, email FROM users");
        std::vector<User> users;
        
        while (query.executeStep()) {
            users.emplace_back(
                query.getColumn(0).getInt(),
                query.getColumn(1).getText(),
                query.getColumn(2).getText()
            );
        }
        
        return users;
    }
};

// PostgreSQL with libpqxx
#include <pqxx/pqxx>

class PostgresManager {
    pqxx::connection conn;
    
public:
    PostgresManager() : conn("dbname=mydb user=postgres password=secret host=localhost") {
        if (!conn.is_open()) {
            throw std::runtime_error("Failed to connect to database");
        }
    }
    
    void insertUser(const std::string& name, const std::string& email) {
        pqxx::work txn(conn);
        txn.exec_params("INSERT INTO users (name, email) VALUES ($1, $2)", name, email);
        txn.commit();
    }
    
    std::vector<User> getUsers() {
        pqxx::nontransaction n(conn);
        pqxx::result r = n.exec("SELECT id, name, email FROM users");
        
        std::vector<User> users;
        for (const auto& row : r) {
            users.emplace_back(
                row[0].as<int>(),
                row[1].as<std::string>(),
                row[2].as<std::string>()
            );
        }
        
        return users;
    }
};
```

### Java
```java
// JDBC with connection pooling
import java.sql.*;
import javax.sql.DataSource;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class DatabaseManager {
    private final DataSource dataSource;
    
    public DatabaseManager() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://localhost/mydb");
        config.setUsername("postgres");
        config.setPassword("secret");
        config.setMaximumPoolSize(10);
        
        this.dataSource = new HikariDataSource(config);
    }
    
    public void insertUser(String name, String email) throws SQLException {
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, name);
            stmt.setString(2, email);
            stmt.executeUpdate();
        }
    }
    
    public List<User> getAllUsers() throws SQLException {
        String sql = "SELECT id, name, email FROM users";
        List<User> users = new ArrayList<>();
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            
            while (rs.next()) {
                users.add(new User(
                    rs.getInt("id"),
                    rs.getString("name"),
                    rs.getString("email")
                ));
            }
        }
        
        return users;
    }
}

// JPA with Hibernate
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true)
    private String email;
    
    // Constructors, getters, setters
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameContaining(String name);
    Optional<User> findByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.name = ?1 AND u.email = ?2")
    Optional<User> findByNameAndEmail(String name, String email);
}

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public User createUser(String name, String email) {
        User user = new User(name, email);
        return userRepository.save(user);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
```

### C#
```csharp
// Entity Framework Core
using Microsoft.EntityFrameworkCore;

public class User {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}

public class AppDbContext : DbContext {
    public DbSet<User> Users { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseNpgsql("Host=localhost;Database=mydb;Username=postgres;Password=secret");
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<User>(entity => {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired();
            entity.HasIndex(e => e.Email).IsUnique();
        });
    }
}

public class UserService {
    private readonly AppDbContext _context;
    
    public UserService(AppDbContext context) {
        _context = context;
    }
    
    public async Task<User> CreateUserAsync(string name, string email) {
        var user = new User { Name = name, Email = email };
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }
    
    public async Task<List<User>> GetAllUsersAsync() {
        return await _context.Users.ToListAsync();
    }
    
    public async Task<User?> FindByEmailAsync(string email) {
        return await _context.Users
            .FirstOrDefaultAsync(u => u.Email == email);
    }
    
    public async Task<List<User>> SearchUsersAsync(string searchTerm) {
        return await _context.Users
            .Where(u => u.Name.Contains(searchTerm) || u.Email.Contains(searchTerm))
            .OrderBy(u => u.Name)
            .ToListAsync();
    }
}

// Dapper (lightweight ORM)
using Dapper;
using Npgsql;

public class UserRepository {
    private readonly string _connectionString;
    
    public UserRepository(string connectionString) {
        _connectionString = connectionString;
    }
    
    public async Task<int> CreateUserAsync(string name, string email) {
        const string sql = @"
            INSERT INTO users (name, email) 
            VALUES (@Name, @Email) 
            RETURNING id";
            
        using var connection = new NpgsqlConnection(_connectionString);
        return await connection.QuerySingleAsync<int>(sql, new { Name = name, Email = email });
    }
    
    public async Task<IEnumerable<User>> GetAllUsersAsync() {
        const string sql = "SELECT id, name, email FROM users ORDER BY name";
        
        using var connection = new NpgsqlConnection(_connectionString);
        return await connection.QueryAsync<User>(sql);
    }
    
    public async Task<User?> FindByEmailAsync(string email) {
        const string sql = "SELECT id, name, email FROM users WHERE email = @Email";
        
        using var connection = new NpgsqlConnection(_connectionString);
        return await connection.QuerySingleOrDefaultAsync<User>(sql, new { Email = email });
    }
}
```

### Rust
```rust
// SQLx (async SQL toolkit)
use sqlx::{PgPool, FromRow};
use serde::{Serialize, Deserialize};

#[derive(Debug, FromRow, Serialize, Deserialize)]
struct User {
    id: i32,
    name: String,
    email: String,
}

pub struct DatabaseManager {
    pool: PgPool,
}

impl DatabaseManager {
    pub async fn new(database_url: &str) -> Result<Self, sqlx::Error> {
        let pool = PgPool::connect(database_url).await?;
        
        // Run migrations
        sqlx::migrate!("./migrations").run(&pool).await?;
        
        Ok(Self { pool })
    }
    
    pub async fn create_user(&self, name: &str, email: &str) -> Result<i32, sqlx::Error> {
        let result = sqlx::query!(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id",
            name,
            email
        )
        .fetch_one(&self.pool)
        .await?;
        
        Ok(result.id)
    }
    
    pub async fn get_all_users(&self) -> Result<Vec<User>, sqlx::Error> {
        let users = sqlx::query_as!(
            User,
            "SELECT id, name, email FROM users ORDER BY name"
        )
        .fetch_all(&self.pool)
        .await?;
        
        Ok(users)
    }
    
    pub async fn find_by_email(&self, email: &str) -> Result<Option<User>, sqlx::Error> {
        let user = sqlx::query_as!(
            User,
            "SELECT id, name, email FROM users WHERE email = $1",
            email
        )
        .fetch_optional(&self.pool)
        .await?;
        
        Ok(user)
    }
    
    pub async fn search_users(&self, search_term: &str) -> Result<Vec<User>, sql
