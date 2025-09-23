# Programming Languages Comparison: The Ultimate Developer's Guide

> A comprehensive, side-by-side comparison of **C**, **C++**, **Java**, **C#**, **Rust**, **Kotlin**, **Python**, and **JavaScript/TypeScript** 

## [Click here for the guide](guide.md)

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

To run the code examples in this guide:

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
