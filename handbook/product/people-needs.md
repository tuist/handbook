---
title: People needs
description: This document captures the needs of people using Tuist to get ideas on how to improve the product.
---

# People needs

Tuist must solve real needs that people have.
Sometimes,
those ideas come from us [eating our own food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food).
Other times,
they come from conversations with users.
When we've identified that a need is real and that it's worth solving because it aligns with our vision and is very common among users, we should capture it here.

The following sections capture the needs that we've identified so far organized by product area and priority.

> [!TIP] FOCUS ON THE PROBLEM, NOT THE SOLUTION
> Ensure you put the focus on the need detailing it as much as possible and including the impact it has on the person or organization. You are free to include potential solutions for anyone to consider, but the focus should be on the problem.

> [!NOTE] GITHUB ISSUES
> Issues are reserved for bugs and small features that are ready to be implemented. For broader and more strategic ideas, we use this document.

## Projects

### Medium priority

<br/>

#### Teams can't codify dependency rules to be enforced

It's common that teams have a set of rules around what dependencies are allowed in their projects. For example, a feature module can't depend on another feature module implementation. Teams had to build their own tools that parse the output of `tuist graph` and run validations on top of it. It'd be great if Tuist could provide a way to codify those rules and enforce them, for example through a `tuist lint links` command.