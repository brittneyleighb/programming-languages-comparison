# Programming Languages Comparison: The Ultimate Developer's Guide
*Updated: 2025-09-23*

This comparison is aimed at **beginners/intermediates choosing a first or next language for apps, web, or game dev** (not an exhaustive survey of all paradigms).  
The focus: practical trade-offs, ecosystem fit, and when to pick which tool.

---

## How to Decide

When choosing a language, ask what you care most about:
- **Learning curve & docs** – How easy is it to start?  
- **Runtime targets** – Native, JVM, browser, WASM?  
- **Memory & safety model** – GC vs ownership/RAII.  
- **Concurrency model** – Threads, async/await, actors, green threads.  
- **Tooling & ecosystem** – Build systems, package managers, IDEs.  
- **Interop** – How well does it talk to C, JVM, .NET, or Python?  
- **Performance profile** – Footprint, latency, throughput.  
- **Community & hiring signals** – Popularity as a weak tie-breaker.

---

## At-a-Glance Table

| Language | Primary Targets     | Mem/Safety         | Concurrency              | Tooling         | Interop      | When to Pick / Gotchas |
|---------:|---------------------|--------------------|--------------------------|-----------------|--------------|------------------------|
| **C**    | Native, embedded    | Manual + UB risk   | pthreads                 | make/CMake      | C ABI        | Tiny footprint, FFI glue, engines<br>Error-prone manual memory |
| **C++**  | Native, games       | RAII + UB risk     | std::thread, ASIO        | CMake/Conan     | C ABI        | Game engines, perf critical<br>Steep complexity, undefined behavior |
| **Rust** | Native, WASM        | Ownership/borrow   | threads, async, actors   | Cargo           | C ABI        | Safety + perf, systems<br>Compile times, borrow-checker ramp |
| **Java** | JVM, Android        | GC                 | threads, virtual threads | Gradle/Maven    | JVM ecosystem| Mature libs, Android, servers<br>Heavier footprint for small tools |
| **Kotlin** | JVM, Multiplatform| GC                 | coroutines               | Gradle          | JVM/Native   | Modern Android/JVM<br>Smaller ecosystem than Java |
| **C#**   | .NET, Windows       | GC                 | async/await, TPL         | MSBuild/NuGet   | .NET/P-Invoke| Enterprise, Unity, web<br>Microsoft ecosystem dependency |
| **Python** | Scripts, ML, web  | GC                 | threads, asyncio         | pip/venv        | C FFI        | Fast prototyping, ML glue<br>Slow for compute-heavy workloads |
| **JS/TS** | Browser, Node.js   | GC                 | event loop, Web Workers  | npm             | WASM, FFI    | Web front-end + full stack<br>Callback hell if not managed well |

---

## High-Level Philosophy Comparison

Think of these languages like different construction approaches:

- **C**: Like raw construction materials - maximum control but you build everything from scratch
- **C++**: Like a powerful but complex construction toolkit - complete control but requires expertise to avoid accidents  
- **Java**: Like building with standardized, pre-fabricated modules in a controlled environment (JVM)
- **C#**: Similar to Java but with Microsoft's architectural standards and additional modern tools
- **Rust**: Like having an extremely thorough safety inspector who prevents construction errors before they happen
- **Kotlin**: Like Java's modern renovation with better ergonomics
- **Python**: Like having pre-made components for rapid assembly - great for prototyping but not always efficient
- **JavaScript/TypeScript**: Like modular construction that works everywhere - from simple websites to complex applications

## Language Comparison Matrix

| Feature | C | C++ | Java | C# | Rust | Kotlin | Python | JS/TS |
|---------|---|-----|------|----|------|--------|--------|-------|
| **First Release** | 1972 | 1985 | 1995 | 2000 | 2010 | 2011 | 1991 | 1995/2012 |
| **Paradigm** | Procedural | Multi-paradigm | OOP + Functional | OOP + Functional | Systems + Functional | OOP + Functional | Multi-paradigm | Multi-paradigm |
| **Memory Management** | Manual | Manual (RAII) | Garbage Collection | Garbage Collection | Ownership System | Garbage Collection | Garbage Collection | Garbage Collection |
| **Performance** | Highest | Highest | High (JIT optimized) | High (JIT optimized) | Highest | High | Lower | Medium |
| **Memory Safety** | Manual | Manual | Memory-safe | Memory-safe | Compile-time guarantees | Memory-safe | Memory-safe | Memory-safe |
| **Learning Curve** | Moderate | Very Steep | Moderate | Moderate | Steep | Easy-Moderate | Easy | Easy-Moderate |
| **Compile Time** | Fast | Slow-Medium | Fast (JIT) | Fast (JIT) | Slow | Fast | Interpreted | Fast (if TypeScript) |
| **Runtime Overhead** | None | None | JVM | .NET Runtime | None | JVM/Native | Interpreter | V8/Node |
| **Cross-Platform** | Yes | Yes (with effort) | Write once, run anywhere | Improving (was Windows-focused) | Excellent | Excellent | Excellent | Universal |

---

## Comprehensive Syntax Comparison

### 1. Hello World

```c
// C
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```cpp
// C++
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```java
// Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```csharp
// C#
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
```

```rust
// Rust
fn main() {
    println!("Hello, World!");
}
```

```kotlin
// Kotlin
fun main() {
    println("Hello, World!")
}
```

```python
# Python
print("Hello, World!")
```

```javascript
// JavaScript
console.log("Hello, World!");

// TypeScript
const message: string = "Hello, World!";
console.log(message);
```

### 2. Variable Declaration & Types

```c
// C
int number = 42;
float pi = 3.14f;
char letter = 'A';
char* text = "Hello";
int* ptr = &number;

// Arrays
int array[5] = {1, 2, 3, 4, 5};
```

```cpp
// C++
int number = 42;
float pi = 3.14f;
char letter = 'A';
std::string text = "Hello";
auto inferred = 42;  // Type inference

// Smart pointers
std::unique_ptr<int> ptr = std::make_unique<int>(42);

// Containers
std::vector<int> vec = {1, 2, 3, 4, 5};
```

```java
// Java
int number = 42;
float pi = 3.14f;
char letter = 'A';
String text = "Hello";
var inferred = 42;  // Java 10+

// Collections
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
```

```csharp
// C#
int number = 42;
float pi = 3.14f;
char letter = 'A';
string text = "Hello";
var inferred = 42;  // Type inference

// Nullable types
int? nullableInt = null;

// Collections
List<int> list = new List<int> {1, 2, 3, 4, 5};
```

```rust
// Rust
let number: i32 = 42;
let pi: f32 = 3.14;
let letter: char = 'A';
let text: &str = "Hello";
let owned_text: String = "Hello".to_string();

// Mutability is explicit
let mut mutable_number = 42;
mutable_number += 1;

// Collections
let vec = vec![1, 2, 3, 4, 5];
```

```kotlin
// Kotlin
val number: Int = 42  // Immutable
var mutableNumber = 42  // Mutable, type inferred
val pi: Float = 3.14f
val letter: Char = 'A'
val text: String = "Hello"

// Nullable types
val nullableText: String? = null

// Collections
val list = listOf(1, 2, 3, 4, 5)
val mutableList = mutableListOf(1, 2, 3, 4, 5)
```

```python
# Python
number = 42
pi = 3.14
letter = 'A'
text = "Hello"

# Dynamic typing
x = 42      # int
x = "Hello" # now string

# Type hints (optional)
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Collections
my_list = [1, 2, 3, 4, 5]
my_dict = {"key": "value"}
```

```javascript
// JavaScript
let number = 42;
const pi = 3.14;
let letter = 'A';
let text = "Hello";

// Arrays and objects
let array = [1, 2, 3, 4, 5];
let object = { key: "value" };

// TypeScript
let typedNumber: number = 42;
let typedText: string = "Hello";
let nullableText: string | null = null;

// Interfaces
interface Person {
    name: string;
    age: number;
}

let person: Person = { name: "Alice", age: 30 };
```

### 3. Functions

```c
// C
int add(int a, int b) {
    return a + b;
}

// Function pointers
int (*operation)(int, int) = add;
int result = operation(5, 3);
```

```cpp
// C++
int add(int a, int b) {
    return a + b;
}

// Function overloading
double add(double a, double b) {
    return a + b;
}

// Lambda expressions
auto lambda = [](int x, int y) -> int {
    return x + y;
};

// Templates
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}
```

```java
// Java
public static int add(int a, int b) {
    return a + b;
}

// Method overloading
public static double add(double a, double b) {
    return a + b;
}

// Lambda expressions (Java 8+)
BinaryOperator<Integer> adder = (x, y) -> x + y;

// Generic methods
public static <T extends Comparable<T>> T maximum(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}
```

```csharp
// C#
public static int Add(int a, int b) {
    return a + b;
}

// Method overloading
public static double Add(double a, double b) => a + b;

// Lambda expressions
Func<int, int, int> adder = (x, y) => x + y;

// Generic methods
public static T Maximum<T>(T a, T b) where T : IComparable<T> {
    return a.CompareTo(b) > 0 ? a : b;
}
```

```rust
// Rust
fn add(a: i32, b: i32) -> i32 {
    a + b  // No semicolon = return value
}

// Generic functions
fn maximum<T: PartialOrd>(a: T, b: T) -> T {
    if a > b { a } else { b }
}

// Closures
let adder = |x, y| x + y;

// Higher-order functions
fn apply_operation<F>(x: i32, y: i32, op: F) -> i32 
where 
    F: Fn(i32, i32) -> i32 
{
    op(x, y)
}
```

```kotlin
// Kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

// Single expression functions
fun addShort(a: Int, b: Int) = a + b

// Lambda expressions
val adder = { x: Int, y: Int -> x + y }

// Generic functions
fun <T : Comparable<T>> maximum(a: T, b: T): T {
    return if (a > b) a else b
}

// Extension functions
fun String.isPalindrome(): Boolean {
    return this == this.reversed()
}
```

```python
# Python
def add(a, b):
    return a + b

# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Lambda expressions
adder = lambda x, y: x + y

# Type hints
def maximum(a: int, b: int) -> int:
    return max(a, b)

# Decorators
def timer(func):
    def wrapper(*args, **kwargs):
        # Timing logic
        return func(*args, **kwargs)
    return wrapper

@timer
def slow_function():
    pass
```

```javascript
// JavaScript
function add(a, b) {
    return a + b;
}

// Arrow functions
const addArrow = (a, b) => a + b;

// Default parameters
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);

// TypeScript
function addTyped(a: number, b: number): number {
    return a + b;
}

// Generic functions
function maximum<T>(a: T, b: T, compare: (x: T, y: T) => number): T {
    return compare(a, b) > 0 ? a : b;
}
```

### 4. Object-Oriented Programming

```c
// C - No built-in OOP, but can simulate with structs and function pointers
typedef struct {
    int x, y;
} Point;

typedef struct {
    Point* (*create)(int x, int y);
    void (*destroy)(Point* p);
    double (*distance)(Point* a, Point* b);
} PointVTable;

Point* point_create(int x, int y) {
    Point* p = malloc(sizeof(Point));
    p->x = x;
    p->y = y;
    return p;
}

void point_destroy(Point* p) {
    free(p);
}
```

```cpp
// C++
class Animal {
private:
    std::string name;
    
public:
    Animal(const std::string& n) : name(n) {}
    virtual ~Animal() = default;
    
    virtual void makeSound() = 0;  // Pure virtual
    
    const std::string& getName() const { return name; }
};

class Dog : public Animal {
public:
    Dog(const std::string& name) : Animal(name) {}
    
    void makeSound() override {
        std::cout << getName() << " says Woof!" << std::endl;
    }
};
```

```java
// Java
public abstract class Animal {
    private String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public abstract void makeSound();
    
    public String getName() { return name; }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " says Woof!");
    }
}

// Interface
public interface Flyable {
    void fly();
    
    default void land() {  // Java 8+
        System.out.println("Landing...");
    }
}
```

```csharp
// C#
public abstract class Animal {
    private string name;
    
    public Animal(string name) {
        this.name = name;
    }
    
    public string Name => name;  // Property
    
    public abstract void MakeSound();
}

public class Dog : Animal {
    public Dog(string name) : base(name) { }
    
    public override void MakeSound() {
        Console.WriteLine($"{Name} says Woof!");
    }
}

// Interface
public interface IFlyable {
    void Fly();
    
    void Land() => Console.WriteLine("Landing...");  // C# 8+
}

// Records (C# 9+)
public record Person(string Name, int Age);
```

```rust
// Rust - No inheritance, uses composition and traits
struct Animal {
    name: String,
}

impl Animal {
    fn new(name: String) -> Self {
        Animal { name }
    }
    
    fn get_name(&self) -> &str {
        &self.name
    }
}

trait MakeSound {
    fn make_sound(&self);
}

struct Dog {
    animal: Animal,
}

impl Dog {
    fn new(name: String) -> Self {
        Dog {
            animal: Animal::new(name),
        }
    }
}

impl MakeSound for Dog {
    fn make_sound(&self) {
        println!("{} says Woof!", self.animal.get_name());
    }
}

// Enums with data (algebraic data types)
enum AnimalType {
    Dog { name: String, breed: String },
    Bird { name: String, wingspan: f64 },
}
```

```kotlin
// Kotlin
abstract class Animal(val name: String) {
    abstract fun makeSound()
}

class Dog(name: String) : Animal(name) {
    override fun makeSound() {
        println("$name says Woof!")
    }
}

// Interface
interface Flyable {
    fun fly()
    
    fun land() {  // Default implementation
        println("Landing...")
    }
}

// Data classes
data class Person(val name: String, val age: Int)

// Sealed classes (like Rust enums)
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Error(val message: String) : Result<Nothing>()
}
```

```python
# Python
class Animal:
    def __init__(self, name):
        self._name = name  # Convention: _ for private
    
    @property
    def name(self):
        return self._name
    
    def make_sound(self):
        raise NotImplementedError("Subclasses must implement make_sound")

class Dog(Animal):
    def make_sound(self):
        print(f"{self.name} says Woof!")

# Multiple inheritance
class Flyable:
    def fly(self):
        print("Flying...")

class Bird(Animal, Flyable):
    def make_sound(self):
        print(f"{self.name} chirps")

# Dataclasses (Python 3.7+)
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
```

```javascript
// JavaScript
class Animal {
    constructor(name) {
        this._name = name;
    }
    
    get name() {
        return this._name;
    }
    
    makeSound() {
        throw new Error("Subclasses must implement makeSound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}

// TypeScript
abstract class AnimalTS {
    constructor(protected name: string) {}
    
    abstract makeSound(): void;
    
    getName(): string {
        return this.name;
    }
}

class DogTS extends AnimalTS {
    makeSound(): void {
        console.log(`${this.name} says Woof!`);
    }
}

// Interface
interface Flyable {
    fly(): void;
}

class Bird extends AnimalTS implements Flyable {
    makeSound(): void {
        console.log(`${this.name} chirps`);
    }
    
    fly(): void {
        console.log(`${this.name} is flying`);
    }
}
```

### 5. Error Handling

```c
// C - Return codes and errno
#include <errno.h>

int divide(int a, int b, int* result) {
    if (b == 0) {
        errno = EINVAL;
        return -1;  // Error
    }
    *result = a / b;
    return 0;  // Success
}

// Usage
int result;
if (divide(10, 0, &result) != 0) {
    printf("Error: %s\n", strerror(errno));
}
```

```cpp
// C++ - Multiple approaches
// 1. Exceptions
#include <stdexcept>

int divide(int a, int b) {
    if (b == 0) {
        throw std::invalid_argument("Division by zero");
    }
    return a / b;
}

// 2. Optional (C++17)
#include <optional>

std::optional<int> safe_divide(int a, int b) {
    if (b == 0) return std::nullopt;
    return a / b;
}

// 3. Expected (C++23)
std::expected<int, std::string> better_divide(int a, int b) {
    if (b == 0) return std::unexpected("Division by zero");
    return a / b;
}
```

```java
// Java - Checked and unchecked exceptions
public class ErrorHandling {
    // Checked exception - must be declared
    public static String readFile(String filename) throws IOException {
        return Files.readString(Paths.get(filename));
    }
    
    // Unchecked exception
    public static int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Division by zero");
        return a / b;
    }
    
    // Optional pattern
    public static Optional<Integer> safeDivide(int a, int b) {
        if (b == 0) return Optional.empty();
        return Optional.of(a / b);
    }
    
    // Usage
    public static void handleErrors() {
        try {
            readFile("nonexistent.txt");
        } catch (IOException e) {
            System.err.println("File error: " + e.getMessage());
        }
        
        safeDivide(10, 0).ifPresentOrElse(
            result -> System.out.println("Result: " + result),
            () -> System.out.println("Cannot divide by zero")
        );
    }
}
```

```csharp
// C# - Exceptions with some nullable patterns
public class ErrorHandling {
    public static string ReadFile(string filename) {
        return File.ReadAllText(filename);  // Can throw IOException
    }
    
    public static int Divide(int a, int b) {
        if (b == 0) throw new DivideByZeroException();
        return a / b;
    }
    
    public static int? SafeDivide(int a, int b) {
        if (b == 0) return null;
        return a / b;
    }
    
    // Pattern matching (C# 8+)
    public static void HandleErrors() {
        try {
            ReadFile("nonexistent.txt");
        }
        catch (FileNotFoundException ex) {
            Console.WriteLine($"File not found: {ex.FileName}");
        }
        catch (IOException ex) {
            Console.WriteLine($"IO Error: {ex.Message}");
        }
        
        var result = SafeDivide(10, 0);
        var message = result switch {
            null => "Division by zero",
            var value => $"Result: {value}"
        };
        Console.WriteLine(message);
    }
}
```

```rust
// Rust - Result type and panic! (no exceptions)
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
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

// Chaining operations with ?
fn complex_calculation(a: f64, b: f64) -> Result<f64, MathError> {
    let division = safe_divide(a, b)?;  // Early return if error
    Ok(division * 2.0)
}

// Pattern matching
fn handle_errors() {
    match divide(10, 0) {
        Ok(result) => println!("Result: {}", result),
        Err(error) => println!("Error: {}", error),
    }
    
    // Unwrap variants
    let result = divide(10, 2).unwrap_or(0);  // Use 0 if error
    let result = divide(10, 2).expect("Division should work");  // Panic with message
}
```

```kotlin
// Kotlin - Exceptions + nullable types
fun divide(a: Int, b: Int): Int {
    if (b == 0) throw ArithmeticException("Division by zero")
    return a / b
}

fun safeDivide(a: Int, b: Int): Int? {
    return if (b == 0) null else a / b
}

// Result-like sealed class
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Error(val message: String) : Result<Nothing>()
}

fun betterDivide(a: Int, b: Int): Result<Int> {
    return if (b == 0) {
        Result.Error("Division by zero")
    } else {
        Result.Success(a / b)
    }
}

// Usage
fun handleErrors() {
    try {
        divide(10, 0)
    } catch (e: ArithmeticException) {
        println("Error: ${e.message}")
    }
    
    val result = safeDivide(10, 0)
    when (result) {
        null -> println("Division by zero")
        else -> println("Result: $result")
    }
    
    when (val divResult = betterDivide(10, 0)) {
        is Result.Success -> println("Result: ${divResult.data}")
        is Result.Error -> println("Error: ${divResult.message}")
    }
}
```

```python
# Python - Exceptions with optional type hints
def divide(a, b):
    if b == 0:
        raise ValueError("Division by zero")
    return a / b

def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

# Type hints
from typing import Optional, Union

def typed_divide(a: int, b: int) -> Optional[int]:
    if b == 0:
        return None
    return a // b

# Custom exceptions
class MathError(Exception):
    pass

class DivisionByZeroError(MathError):
    def __init__(self, message="Division by zero"):
        self.message = message
        super().__init__(self.message)

# Usage
def handle_errors():
    try:
        result = divide(10, 0)
    except ValueError as e:
        print(f"Error: {e}")
    
    result = safe_divide(10, 0)
    if result is not None:
        print(f"Result: {result}")
    else:
        print("Division by zero")
    
    # Context managers for resource handling
    try:
        with open("file.txt", "r") as f:
            content = f.read()
    except FileNotFoundError:
        print("File not found")
```

```javascript
// JavaScript - Exceptions and Promise-based error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

function safeDivide(a, b) {
    try {
        return divide(a, b);
    } catch (error) {
        return null;
    }
}

// Promise-based error handling
function asyncDivide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("Division by zero"));
        } else {
            resolve(a / b);
        }
    });
}

// async/await
async function handleAsync() {
    try {
        const result = await asyncDivide(10, 0);
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// TypeScript - Better type safety
type Result<T, E = Error> = 
    | { success: true; data: T }
    | { success: false; error: E };

function betterDivide(a: number, b: number): Result<number> {
    if (b === 0) {
        return { success: false, error: new Error("Division by zero") };
    }
    return { success: true, data: a / b };
}

// Usage
function handleErrors() {
    const result = betterDivide(10, 0);
    if (result.success) {
        console.log("Result:", result.data);
    } else {
        console.error("Error:", result.error.message);
    }
}
```

### 6. Concurrency & Parallelism

```c
// C - pthreads
#include <pthread.h>
#include <stdio.h>

void* worker_function(void* arg) {
    int* id = (int*)arg;
    printf("Worker %d is running\n", *id);
    return NULL;
}

int main() {
    pthread_t threads[4];
    int thread_ids[4];
    
    for (int i = 0; i < 4; i++) {
        thread_ids[i] = i;
        pthread_create(&threads[i], NULL, worker_function, &thread_ids[i]);
    }
    
    for (int i = 0; i < 4; i++) {
        pthread_join(threads[i], NULL);
    }
    
    return 0;
}

// Mutex for synchronization
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int shared_counter = 0;

void* increment_counter(void* arg) {
    pthread_mutex_lock(&mutex);
    shared_counter++;
    pthread_mutex_unlock(&mutex);
    return NULL;
}
```

```cpp
// C++
#include <thread>
#include <mutex>
#include <future>

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

void concurrency_example() {
    // Basic thread
    std::thread worker([]() {
        std::cout << "Worker thread running\n";
    });
    worker.join();
    
    // Futures and async
    auto future = std::async(std::launch::async, []() {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        return 42;
    });
    
    int result = future.get();  // Blocks until ready
}
```

```java
// Java
import java.util.concurrent.*;

public class ConcurrencyExample {
    
    // ExecutorService
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
    
    // Virtual Threads (Java 19+)
    public static void virtualThreadsExample() {
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 0; i < 1000; i++) {
                executor.submit(() -> {
                    // Lightweight thread
                    System.out.println("Virtual thread: " + Thread.currentThread());
                });
            }
        }
    }
}
```

```csharp
// C#
using System;
using System.Threading;
using System.Threading.Tasks;

public class ConcurrencyExample {
    
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
        // Parallel execution
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
}
```

```rust
// Rust
use std::sync::{Arc, Mutex};
use std::thread;
use tokio;

// Ownership prevents data races at compile time
fn thread_example() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    
    for i in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    
    // Wait for all threads
    for handle in handles {
        handle.join().unwrap();
    }
    
    println!("Final count: {}", *counter.lock().unwrap());
}

// Message passing with channels
use std::sync::mpsc;

fn channel_example() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        tx.send("Hello from thread").unwrap();
    });
    
    let received = rx.recv().unwrap();
    println!("Got: {}", received);
}

// Async/await with Tokio
#[tokio::main]
async fn async_main() {
    let task1 = tokio::spawn(async {
        tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
        "Task 1 completed"
    });
    
    let task2 = tokio::spawn(async {
        tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
        "Task 2 completed"
    });
    
    let (result1, result2) = tokio::join!(task1, task2);
    println!("{}, {}", result1.unwrap(), result2.unwrap());
}

// Rayon for data parallelism
use rayon::prelude::*;

fn parallel_processing() {
    let numbers: Vec<i32> = (1..=1_000_000).collect();
    
    let sum: i32 = numbers
        .par_iter()                // Parallel iterator
        .filter(|&&x| x % 2 == 0)  // Even numbers only
        .map(|&x| x * x)           // Square them
        .sum();                    // Sum the results
    
    println!("Sum: {}", sum);
}
```

```kotlin
// Kotlin - Coroutines
import kotlinx.coroutines.*

fun concurrencyExample() = runBlocking {
    // Basic coroutine
    launch {
        delay(1000L)
        println("Coroutine completed")
    }
    
    // Async coroutines
    val deferred1 = async { fetchData("Data 1") }
    val deferred2 = async { fetchData("Data 2") }
    
    val results = awaitAll(deferred1, deferred2)
    println("Results: $results")
}

suspend fun fetchData(name: String): String {
    delay(500L)  // Simulate network call
    return "Fetched $name"
}

// Channels for communication
fun channelExample() = runBlocking {
    val channel = Channel<String>()
    
    launch {
        for (x in 1..5) {
            channel.send("Item $x")
        }
        channel.close()
    }
    
    for (item in channel) {
        println("Received: $item")
    }
}

// Flow for reactive streams
import kotlinx.coroutines.flow.*

fun flowExample() = runBlocking {
    flow {
        for (i in 1..3) {
            delay(100)
            emit(i)
        }
    }
    .map { it * it }
    .collect { println("Collected: $it") }
}
```

```python
# Python - Multiple concurrency models
import asyncio
import threading
import concurrent.futures

def thread_example():
    def worker(name):
        print(f"Worker {name} is running")
    
    threads = []
    for i in range(4):
        t = threading.Thread(target=worker, args=(i,))
        threads.append(t)
        t.start()
    
    for t in threads:
        t.join()

# Thread pool executor
def executor_example():
    def square(n):
        return n * n
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        numbers = [1, 2, 3, 4, 5]
        results = list(executor.map(square, numbers))
        print("Results:", results)

# Async/await
async def fetch_data(name):
    await asyncio.sleep(0.5)  # Simulate async work
    return f"Data {name}"

async def async_example():
    # Concurrent async tasks
    tasks = [
        fetch_data("A"),
        fetch_data("B"),
        fetch_data("C")
    ]
    
    results = await asyncio.gather(*tasks)
    print("Results:", results)

# Multiprocessing for CPU-bound tasks
import multiprocessing

def cpu_bound_task(n):
    return sum(i * i for i in range(n))

def multiprocessing_example():
    with multiprocessing.Pool() as pool:
        numbers = [100000, 200000, 300000, 400000]
        results = pool.map(cpu_bound_task, numbers)
        print("Results:", results)

# Usage
if __name__ == "__main__":
    thread_example()
    executor_example()
    asyncio.run(async_example())
    multiprocessing_example()
```

```javascript
// JavaScript/TypeScript - Event loop and Web Workers

// Promise-based async
function fetchData(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data ${name}`);
        }, 500);
    });
}

// async/await
async function asyncExample() {
    // Sequential
    const data1 = await fetchData("A");
    const data2 = await fetchData("B");
    
    // Concurrent
    const [result1, result2, result3] = await Promise.all([
        fetchData("X"),
        fetchData("Y"),
        fetchData("Z")
    ]);
    
    console.log("Results:", [result1, result2, result3]);
}

// Web Workers for CPU-intensive tasks (browser)
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ command: 'start', data: [1, 2, 3, 4, 5] });
worker.onmessage = function(e) {
    console.log('Result from worker:', e.data);
};

// worker.js
self.onmessage = function(e) {
    const { command, data } = e.data;
    if (command === 'start') {
        const result = data.map(x => x * x);
        self.postMessage(result);
    }
};

// Node.js - Worker Threads
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    // Main thread
    const worker = new Worker(__filename, {
        workerData: { numbers: [1, 2, 3, 4, 5] }
    });
    
    worker.on('message', (result) => {
        console.log('Result:', result);
    });
} else {
    // Worker thread
    const { numbers } = workerData;
    const result = numbers.map(x => x * x);
    parentPort.postMessage(result);
}

// TypeScript with better typing
async function typedAsyncExample(): Promise<string[]> {
    const promises: Promise<string>[] = [
        fetchData("TypeScript A"),
        fetchData("TypeScript B"),
        fetchData("TypeScript C")
    ];
    
    return Promise.all(promises);
}
```

## Game Development Lens

- **C** – Low-level engine components, embedded game systems
- **C++** – Unreal Engine, proprietary AAA engines, performance-critical game logic  
- **C#** – Unity (most popular indie/mobile game engine), game tooling
- **Java** – Minecraft-style games, Android games, server backends
- **Kotlin** – Modern Android game development, multiplatform games
- **Rust** – Bevy engine, performance-critical game systems, modding tools
- **Python** – Game prototyping with Pygame, AI/ML for games, game tooling
- **JavaScript/TypeScript** – Web games (Phaser, Babylon.js), casual browser games

## Web Development Lens

- **C** – Web servers (like Nginx), CGI scripts (legacy)
- **C++** – High-performance web servers, real-time systems backends
- **C#** – ASP.NET Core for enterprise web apps, Blazor for WebAssembly
- **Java** – Spring Boot enterprise backends, microservices, Android web views
- **Kotlin** – Spring Boot with modern syntax, full-stack with Kotlin/JS
- **Rust** – Actix-web, Warp for high-performance APIs, WebAssembly modules
- **Python** – Django, Flask, FastAPI for rapid web development
- **JavaScript/TypeScript** – React/Vue/Angular frontends, Node.js backends, universal web

## Systems Programming Lens

- **C** – Operating system kernels, device drivers, microcontrollers, bootloaders
- **C++** – System software, compilers, databases, real-time systems
- **C#** – Windows services, system tools (with .NET Core, now cross-platform)
- **Java** – JVM itself, enterprise middleware, distributed systems
- **Kotlin** – JVM-based system tools, Kotlin/Native for native system apps
- **Rust** – Operating systems, web browsers, cryptocurrency, memory-safe system components
- **Python** – System administration, DevOps automation, infrastructure tooling
- **JavaScript/TypeScript** – Build tools, CLI utilities (Node.js), system scripting

## Package Management & Build Systems

| Language | Package Manager | Build Tool | Dependency File | Package Registry |
|----------|----------------|------------|-----------------|------------------|
| **C** | Manual, pkg-config | Make, CMake | Makefile, CMakeLists.txt | System packages |
| **C++** | Conan, vcpkg | CMake, Make | CMakeLists.txt, conanfile.txt | ConanCenter, vcpkg |
| **Java** | Maven, Gradle | Maven, Gradle | pom.xml, build.gradle | Maven Central |
| **C#** | NuGet | MSBuild, dotnet | .csproj, packages.config | nuget.org |
| **Rust** | Cargo | Cargo | Cargo.toml | crates.io |
| **Kotlin** | Maven, Gradle | Gradle, Maven | build.gradle.kts, pom.xml | Maven Central |
| **Python** | pip, conda | setuptools, Poetry | requirements.txt, pyproject.toml | PyPI |
| **JS/TS** | npm, yarn, pnpm | webpack, Vite | package.json | npmjs.com |

## Performance Characteristics

### Runtime Performance (Relative)

| Language | Raw Performance | Memory Usage | Startup Time | Development Speed |
|----------|----------------|--------------|--------------|------------------|
| **C** | Highest | Lowest | Instant | Slow |
| **C++** | Highest | Low | Instant | Slow |
| **Rust** | Highest | Low | Instant | Medium |
| **Java** | High (after JIT warmup) | Medium-High | Slow (JVM startup) | Fast |
| **C#** | High (after JIT warmup) | Medium-High | Medium | Fast |
| **Kotlin** | High (JVM) / Medium (Native) | Medium-High | Slow (JVM) | Fast |
| **Python** | Low | Medium | Fast | Very Fast |
| **JS/TS** | Medium (V8 optimized) | Medium | Fast | Very Fast |

### Memory Management Comparison

**Manual (C, C++)**
- Complete control over memory allocation and deallocation
- Zero runtime overhead
- High risk of memory leaks, double-frees, use-after-free bugs
- Requires careful programming and extensive testing

**Garbage Collection (Java, C#, Kotlin, Python, JS)**
- Automatic memory management
- Safe from memory corruption bugs
- Periodic pause times for garbage collection
- Higher memory overhead due to GC metadata

**Ownership System (Rust)**
- Compile-time memory safety guarantees
- Zero runtime overhead
- No garbage collection pauses
- Learning curve for ownership and borrowing concepts

## Quick Decision Matrix

### Choose C When:
- Writing operating system kernels or device drivers
- Extreme memory constraints (embedded systems)
- Need maximum portability across platforms
- Building foundational libraries that other languages will use
- **Avoid if**: Memory safety is critical, development speed matters

### Choose C++ When:
- Building game engines or high-performance games
- Need maximum performance with some higher-level features
- Working with existing C++ codebases
- Real-time systems with strict latency requirements
- **Avoid if**: Team lacks C++ expertise, safety is paramount

### Choose Rust When:
- System-level programming with safety guarantees
- Performance-critical applications that must be memory-safe
- Building CLI tools, web servers, or blockchain applications
- WebAssembly development
- **Avoid if**: Rapid prototyping needed, team new to systems concepts

### Choose Java When:
- Building enterprise applications or microservices
- Android development
- Large team development with established practices
- Need mature ecosystem and extensive libraries
- **Avoid if**: Startup time critical, minimal memory footprint required

### Choose C# When:
- Windows-first enterprise applications
- Unity game development
- Web development with ASP.NET Core
- Need rapid development with Microsoft ecosystem integration
- **Avoid if**: Primary target is non-Windows, JVM ecosystem preferred

### Choose Kotlin When:
- Modern Android development
- Existing Java codebase that needs modernization
- Want Java ecosystem with better language ergonomics
- Multiplatform development (JVM, Android, Native, JS)
- **Avoid if**: Team unfamiliar with JVM, need maximum ecosystem maturity

### Choose Python When:
- Rapid prototyping and scripting
- Data science, machine learning, or scientific computing
- Web development with Django/Flask/FastAPI
- System administration and DevOps tooling
- **Avoid if**: Performance critical, need compiled distribution

### Choose JavaScript/TypeScript When:
- Web frontend development (essential)
- Full-stack development with Node.js
- Cross-platform desktop apps (Electron)
- Need rapid development and deployment
- **Avoid if**: CPU-intensive computing, need predictable performance

## Future Trends & Evolution

### Language Evolution Directions

**C (C23)**
- Improved Unicode support
- Better bounds checking
- Standardized threading primitives

**C++ (C++26 and beyond)**
- Modules becoming standard
- Coroutines stabilization
- Better compile-time computation
- Networking library standardization
- Memory safety improvements

**Java (Project Loom, Panama, Amber)**
- Virtual threads for lightweight concurrency
- Foreign function interface improvements
- Pattern matching enhancements
- Value types (Project Valhalla)

**C# (.NET 8+)**
- Native AOT compilation improvements
- Source generators expansion
- Cloud-native optimizations
- Performance improvements

**Rust (2024 Edition+)**
- Async trait stabilization
- Generic associated types
- Const generics improvements
- Better compile times and error messages

**Kotlin**
- Kotlin Multiplatform Mobile stability
- Compose Multiplatform expansion
- Performance improvements in Kotlin/Native

**Python (3.12+)**
- Performance improvements with specialized interpreter
- Better error messages and debugging
- Structural pattern matching enhancements

**JavaScript/TypeScript**
- ES2024+ features (decorators, pattern matching)
- WebAssembly integration improvements
- Better tree-shaking and bundling
- TypeScript performance optimizations

## Footnotes

- Performance benchmarks are context-sensitive; microbenchmarks ≠ real applications
- Language popularity (GitHub, Stack Overflow surveys) indicates ecosystem maturity but doesn't equal "best choice"
- Consider your team's expertise, project timeline, and maintenance requirements over pure technical metrics
- Most successful projects use multiple languages - choose the right tool for each component

---

**Summary**: Each language excels in different domains. C and C++ offer maximum performance and control. Java and C# provide mature enterprise ecosystems. Rust combines performance with safety. Kotlin modernizes JVM development. Python excels at rapid development and scripting. JavaScript/TypeScript dominates web development. Choose based on your specific requirements, team expertise, and long-term maintenance considerations.
