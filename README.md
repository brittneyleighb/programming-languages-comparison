# Programming Languages Comparison: A Developer's Guide

> A comprehensive, side-by-side comparison of **Rust**, **C++**, **C#**, and **Java**

## [Click here for the guide](overview.md)

This guide uses **metaphors and analogies** to make complex concepts accessible:

| Language | Construction Metaphor | Vehicle Analogy | Memory Management |
|----------|----------------------|-----------------|-------------------|
| **C++** | Complex toolkit requiring expertise | Formula 1 race car | Homeowner responsibility |
| **Java** | Standardized prefab modules | Reliable sedan | Managed apartment building |
| **C#** | Microsoft architectural standards | Luxury sedan | Managed apartment with extras |
| **Rust** | Safety inspector preventing errors | Safety-equipped race car | Strict landlord oversight |

## 🛠️ Setup Instructions

To run the code examples in this guide:

### C++
```bash
# Install GCC/Clang and CMake
sudo apt-get install build-essential cmake
# Or on macOS: brew install gcc cmake

# Compile examples
g++ -std=c++20 -O2 example.cpp -o example
./example
```

### Java  
```bash
# Install OpenJDK
sudo apt-get install openjdk-17-jdk
# Or on macOS: brew install openjdk@17

# Compile and run
javac Example.java
java Example
```

### C#
```bash
# Install .NET SDK
curl -sSL https://dot.net/v1/dotnet-install.sh | bash
# Or on macOS: brew install dotnet

# Create and run project
dotnet new console -n Example
dotnet run --project Example
```

### Rust
```bash
# Install Rust via rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Create and run project  
cargo new example
cd example
cargo run
```

## 🤝 Contributing

Contributions are welcome! This guide benefits from community input and real-world experiences.

### How to Contribute:
- 🐛 **Report Issues**: Found an error or outdated information? Open an issue
- 💡 **Suggest Improvements**: Have ideas for new sections or better examples? Start a discussion
- 📝 **Submit Examples**: Add real-world code examples or case studies via Pull Request
- 🌍 **Expand Coverage**: Help improve existing sections or add new language comparisons

## 🔗 Related Resources

### Official Documentation
- [C++ Reference](https://en.cppreference.com/)
- [Java Documentation](https://docs.oracle.com/en/java/)
- [C# Documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [Rust Documentation](https://doc.rust-lang.org/)

### Learning Platforms
- [Exercism](https://exercism.org/) - Practice exercises in all four languages
- [LeetCode](https://leetcode.com/) - Algorithm challenges
- [The Rust Book](https://doc.rust-lang.org/book/) - Comprehensive Rust tutorial
- [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/) - Official Java learning path

Educators are welcome to adapt this content for their needs. Attribution is appreciated but not required.

## 📖 How to Use This Guide

- **For Comparison**: Use the tables and matrices to understand trade-offs between languages
- **For Learning**: Work through code examples in your preferred order
- **For Decision Making**: Reference the decision criteria based on your project requirements
- **For Teaching**: Use the metaphors and structured examples in educational contexts
