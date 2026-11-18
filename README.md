# Programming Languages Comparison: A Developer's Guide

> A comprehensive, side-by-side comparison of **C**, **C++**, **Java**, **C#**, **Rust**, **Kotlin**, **Python**, and **JavaScript/TypeScript** 

## How to compare languages without starting a holy war

A language is a bundle of tradeoffs: how it represents data, manages memory, reports mistakes, and fits a particular ecosystem. Begin with the software’s constraints, then compare languages on control and performance, safety and type system, deployment environment, and long-term maintainability.

## Try it safely

**Predict:** what should happen before you act.  
**Try:** use a local, reversible example.  
**Explain:** describe the result in your own words.

Pick one small idea, such as reading a file or modeling a `User`. Before comparing syntax, predict which constraints matter most for your project: speed, safety, deployment target, team familiarity, or library support. Then compare only those dimensions.

## [Read the comparison guide](guide.md)

**Version status:** The original guide was written in September 2025. A targeted review on **November 16, 2026** corrected version-sensitive claims about ECMAScript, C++, Rust, Python, Java, compilation, memory models, and performance. The guide is still a broad survey, **not** a fully verified or benchmarked reference for every language. Feature availability also depends on toolchain and runtime versions.

**Run a verified example:** Node.js 22+ is enough to execute [the ES2024 standards checks](examples/ecmascript-2024.mjs) without installing dependencies:

```bash
node --test examples/ecmascript-2024.mjs
```

The tests exercise standardized `Object.groupBy`, `Map.groupBy`, and `Promise.withResolvers` behavior and guard against the most misleading stale comparisons. Other snippets in [guide.md](guide.md) are **illustrative fragments**; some need imports, an enclosing function/class, packages, or project setup and are not all independently executable.

For JavaScript's proposal status use the [TC39 proposals tracker](https://github.com/tc39/proposals), and for final language features use the [versioned ECMAScript specifications](https://tc39.es/ecma262/). TypeScript annotations are erased and do not validate runtime input.

Language comparison with analogies/metaphors:

| Language | Construction Metaphor | Memory Management | Best For |
|----------|----------------------|-------------------|----------|
| **C** | Raw construction materials | Homeowner responsibility | Embedded systems, OS kernels |
| **C++** | Complex toolkit requiring expertise | Homeowner + power tools | Game engines, performance-critical apps |
| **Java** | Standardized prefab modules | Managed apartment building | Enterprise apps, Android development |
| **C#** | Microsoft architectural standards | Managed apartment with extras | Windows apps, Unity games, web APIs |
| **Rust** | Safety inspector preventing errors | Strict landlord oversight | Systems programming with safety |
| **Kotlin** | Java's modern renovation | Managed apartment, better design | Modern Android, JVM improvements |
| **Python** | Pre-made components for rapid assembly | Managed apartment, very convenient | Scripting, ML, rapid prototyping |
| **JS/TS** | Modular construction that works everywhere | Managed apartment, universal | Web development, full-stack apps |

## Setup Instructions

These commands illustrate typical compiler/runtime setup for **standalone projects**, not a promise that every fragment in the guide compiles when pasted verbatim. Verify your OS-specific installation commands against each language's official site before running downloaded installers:

### C
```bash
# Install GCC
sudo apt-get install gcc
# Or on macOS: xcode-select --install

gcc -std=c11 example.c -o example
./example
```

### C++  
```bash
# Install GCC/Clang
sudo apt-get install build-essential
# Or on macOS: xcode-select --install

g++ -std=c++20 example.cpp -o example
./example
```

### Java
```bash
# Install OpenJDK
sudo apt-get install openjdk-17-jdk
# Or on macOS: brew install openjdk@17

javac Example.java
java Example
```

### C#
```bash
# Install .NET SDK
curl -sSL https://dot.net/v1/dotnet-install.sh | bash
# Or on macOS: brew install dotnet

dotnet new console -n Example
dotnet run --project Example
```

### Rust
```bash
# Install Rust via rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

cargo new example
cd example
cargo run
```

### Kotlin
```bash
# Install Kotlin
curl -s https://get.sdkman.io | bash
sdk install kotlin

# Or use with Java setup above
kotlinc example.kt -include-runtime -d example.jar
java -jar example.jar
```

### Python
```bash
# Usually pre-installed, or:
sudo apt-get install python3 python3-pip
# Or on macOS: brew install python3

python3 example.py
```

### JavaScript/TypeScript
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
# Or on macOS: brew install node

# For TypeScript
npm install -g typescript
tsc example.ts
node example.js
```

### Official Documentation
- [C Reference](https://en.cppreference.com/w/c)
- [C++ Reference](https://en.cppreference.com/)
- [Java Documentation](https://docs.oracle.com/en/java/)
- [C# Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Rust Documentation](https://doc.rust-lang.org/)
- [Kotlin Documentation](https://kotlinlang.org/docs/home.html)
- [Python Documentation](https://docs.python.org/3/)
- [MDN Web Docs](https://developer.mozilla.org/) (JavaScript)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Learning Platforms
- [Exercism](https://exercism.org/) - Practice exercises in multiple languages
- [LeetCode](https://leetcode.com/) - Algorithm challenges
- [HackerRank](https://www.hackerrank.com/) - Coding competitions
- [Codecademy](https://www.codecademy.com/) - Interactive learning

Educators are welcome to adapt this content for their needs. Attribution is appreciated but not required.
