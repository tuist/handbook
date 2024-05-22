---
title: Technologies
---

# Technologies

When deciding a technology to use in a new project, we try to be pragmatic ensuring we prevent technology fragmentation.
This document includes a list of technologies that are approved for use in Tuist projects along with the rationale behind each decision. If you believe a technology should be added or removed from this list, please [open a pull request](https://github.com/tuist/handbook/compare).

## Programming languages

### Swift

Tuist started as a [Swift](https://www.swift.org/)-based CLI tool. We chose Swift because it was important that the technology we used to build our tool was the same as the technology we were building the tool for. That way, **developers would be more likely to contribute to the project.**

If you are building a command line interface or an application for any of the Apple platforms, it must be written in Swift, a language the organization is very familiar with.

> [!TIP] MULTI-PLATFORM CLI TOOLS
> If you come across a situation where you need to build a multi-platform CLI tool, we might accept the usage of other languages like [Rust](https://www.rust-lang.org/), whose standard library has been better designed and battle-tested to work across different platforms.

Note that despite we like Swift, and we try to push it as much as possible,
we acknowledge domains where Swift is not the best fit, and choose other technologies accordingly.

### Elixir

[Elixir](https://elixir-lang.org/) is our go-to language for **building backend services and apps.** We chose Elixir because it is a functional language that runs on the [Erlang VM](https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)), which is known for its fault-tolerance and scalability. Elixir is also a language that is easy to learn and has a great community.

It's common for organizations and developers to Elixir as a risk since its ecosystem is not as large and diverse as others (e.g. JavaScript). However, it has something unique that often goes unnoticed. Its approach to programming and the battle-tested runtime, Erlang, **make it extremely easy and cheap to scale, both development and also production-runnin applications.** While Erlang and Elixir can go a very long way with few resources (e.g. engineers, infrastructure complexity), other runtimes require earlier "throwing money at the problem" or "relying on costly external services that abstract the complexity away".

> [!NOTE] A NOTE ON LEARNING ELIXIR
> Since it's not as popular as other languages, it might be harder to find Elixir developers. However, our aim is to have a team that is capable of learning new technologies and languages. We believe that the benefits of using Elixir outweigh the costs of learning it.

## Project types

### Statically-generated documentation websites

Our go-to framework for building statically-generated documentation websites is [VitePress](https://vitepress.dev/).
It's maintained by the minds behind [Vue.js](https://vuejs.org/) and [Vite](https://vitejs.dev/), and can generate beautiful documentation website out of the box with all the features we need, including internationalization, search, and more.

### Statically-generated websites

When building statically-generated websites, we use [11ty](https://www.11ty.dev/). Unlike other frameworks whose development is is heavily reliant on external investment or that build on layers of abstractions, making them not future-proof, 11ty is a simple, flexible, and powerful static site generator that embraces the platform rather than abstracting it.
