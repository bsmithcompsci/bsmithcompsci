# Etiquette

## The Importance of having a Etiquette
My Red 🔴, your Red 🟢. **Uh-Oh!**

Keeping a consistance within your code-base, or your repositories makes it easier for others to read, navigate, and to understand the intentions.

## Programming Etiquette

### **Variables**
There is always a lot of heat about variables, who has the best readiability, what is the proper way of naming convensions for your variables; well, here's one more! 😂

---

**Parameters/Arguments**

All parameters/arguments start with an underscore(`_...`).

Meanwhile respecting the camel casing (https://en.wikipedia.org/wiki/Camel_case) rules.

Most programmers learn to only do camel casing for parameters/arguments convensions. Which may be simplier to teach, but can be a heavy weight; and can cause much more frustration for a new programmer, if they do not understand why their variables are being stomped.

```c++
void foo(int _x, int _y, int _z)
{
}
```
Why you may ask, well we want to separate the variable convension from scope variables, member variables, static variables, etc.

Ideally we are trying to avoid these issues that are typically observed with new programmers:
```c++
class foo
{
  int x;
public:
  foo(int x)
  {
    x = x; // Uh.... which x? (this would pick the parameter scope over the member variable)
  }
}
```

---

**Scope Variables**

All scope variables follow the camel casing. Since we are within scope, we no-longer follow the parameter/argument rules.
```c++
void foo(int _myVar)
{
  int myVar = _myVar;
}
```

---

**Member Variables**

Member variables of structs, classes, and objects; all will start with `m_...`, the `m` standing for member.
```
struct foo
{
  int m_x;
  void bar()
  {
    /* Code... */
  }
}
```

---

**Static Variables**

Static variables all start with `s_...`, the `s` standing for static.
```c++
static const int s_myVar = 42;
```
---

**auto**

`auto`, `dynamic`; any other language that has a keyword that assigns the appropriate data-type for the right-handed value(rvalue) to the identifier.
```c++
auto x = 0; // int
auto y = "hello world"; // const char *
auto z = '\n'; // char
auto t = 0.45f; // float
auto d = 0.0; // double
auto s = std::string("Hello World!"); // std::string
```
REF: https://docs.microsoft.com/en-us/cpp/cpp/auto-cpp?view=msvc-170

Generally I use this keyword for hacky code; code that I intend to change. 
Now is there a benefit of using auto in most scenarios, yes; I do believe that the compiler is smart enough to handle itself. Though, auto gets voided when you have uninitialized variables.
```c++
auto x; // Compiliation Error
x = 5;
```

---

**constexpr**

Not many languages have a nice way to inline place a value to a specific location. Though when it is available, and is benefitial I do completely endorse the idea of using a `constexpr`. In fact, I would recommend using a `constexpr` over a macro; since macro doesn't understand syntax or scope at all.

Another plus about `constexpr` over macro is the fact that `constexpr` is strongly-typed; thus in readability we know what the data-type will be, and how we are going to deal with it; verses Macro it could be anything, and it doesn't respect our syntax.

And finally, `constexpr` is similiar to macros where it executes the initializer at compile-time.

Naming Convension:

This follows the Macro naming convensions, since it is inline.

```c++
constexpr unsigned int MAX_THREADS = 5;
```

---

**const [...]**

Not many languages support a const keyword; but when they do this should be your best friend. Essentially allowing us to do somethings similiar to `constexpr` but instead we execute our initializer at runtime.

Naming convensions:

This follows scope variable, member variable, and static variable rules; depending on it's environment.

```c++
static const int s_x = 42;

class foo
{
    const int x = 42;
public:
    foo()
    {
        const int y = 42;
    }
}
```

---

**[...] * [...]**

Using a pointer, I don't have any convensions for.

I'm currently debating if `...ptr...` in front of a var name is useful or not.
```c++
void foo(const int *_ptrX)
{
    const int *ptrX = _ptrX;
}
```

I see the benefits of knowing that this variable is a pointer, though I feel like that might be extra noise. Still investigating benefits & cons.

---

**const [...]*[...]**

I use this anywhere I do not plan to modify the contents of my pointer.
```c++
int foo(const int * _x)
{
    _x = new int;
    _x = 5; // Error
}
```

---

**const [...](const [...]*[...]) const**

If a function is a member of a class/struct, and I do not plan to modify any members; then I will specify the extra `const` behind the function.
```c++
class foo
{
public:
    const int bar() const
    {
        return 5;
    }
}
```

---

### **Macros**
Avoid as much as possible, I think of macros as `-10` points on readability when you use/create them. Other things that macros harm your program are:
* Breaks Syntax, and Scope regardless of namespace. As can be seen below about `constexpr`
* Macros require the reader to expand out the logic, before understanding it.

Naming convension:
```c++
#define ALL_CAPS ...
#define ALL_CAPS(_x) ...
```

Preferably use `constexpr` to avoid issues where...
```c++
#define MIN(_a, _b) (_a > _b ? _a : _b)

namespace math
{
    void MIN(int _a, int _b, int _x)
    {
        return (_a > _b ? _a : _b);
    }
}

int main()
{
    if (math::MIN(5, 4, 3) == 4) // Would use Macro, but we meant to use the function... And this would error.
    {
        return 0;
    }
    return 1;
}
```

---

### **Generics/Templates**
Avoid! 😡💢
If you are using a template, rethink what you are trying to do; most cases templates and generics can be avoided. 
Once templates are starting to be used, the common problems occur:
* Debugging hell... Trying to debug why a templated function is giving you weird results, errors, segment faults, etc... it is just difficult to trace that majority of the times.
* Readability, tanks I consider that `-100` points on the ability to understand where and what is going on.
* _To open!_ Making a function or class open to anything that makes the code much more open to edge cases that you are not ready to handle or be able to handle.
* Compiliation time may get expensive on the more usage of the template. 

Naming Convension:
Single letters, if we are leaving it open to anyone.
Full words, only if it is meant for a base class. Which, if it is used for a base class ensure that the compiler does a `static_assert(std::is_base_of<BaseClass, T>::value, "Generic must derive from Base!");`
```c++
template<typename T>
void foo(T _x)
{
  /* Code ... */
}
```

## My Repository Etiquette
**Libraries:**

A project that is meant to used apart of other projects as an extension, quality of life.

`Library-<NAME>`

---
**Samples/Demos:**

Demonstrates a library.

`Sample-<Library Name>-[NAME]`

---
**Project:**

A larger project that has a roadmap and LTS.

`Project-<NAME>`

---
**Experiments:**

A project that is meant to start and stop quickly just do demonstrate a skill, to expand my current knowledge or to do my own metrics.

`Experiment-<NAME>`

---

## Conclusion

As we develop as programmers, software engineers, etc; we learn better ways to make our code to be read like a logical story. 
Also knowing that everyone writes code in their own ways, it should be respected that as long as it can be read easily by all parties.
